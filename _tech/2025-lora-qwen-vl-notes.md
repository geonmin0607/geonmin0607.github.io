---
title: "LoRA/QLoRA로 Qwen-VL 다루기 — Vision Prior, 커리큘럼, 에이전트 연계"
subtitle: "멀티모달 파인튜닝 팁: 해상도 커리큘럼, 비전 프라이어, 테이블/SMILES 태스크"
---

이 글은 내가 실제 프로젝트에서 Qwen2.5-VL / Qwen3-VL 계열을 파인튜닝하면서 정리한
**모델·학습·운영 관점 메모**다.  
특정 회사나 고객 정보를 쓰지 않고, **재사용 가능한 개념과 구조**만 남겼다.

## 1. Target Task & 전체 그림

내가 Qwen-VL 계열을 쓴 주된 태스크는 크게 세 가지다.

- **Table → HTML `<table>` 구조 복원**
- **Chart/Diagram → Mermaid** (예: `xychart-beta`, `flowchart`)
- **Chemical Structure → SMILES / InChI** (Qwen3-VL + OCR 계열과 조합)

이 모델들은 단독으로 쓰이지 않고,  
**Agent 기반 문서 이해 파이프라인** 속에서 역할을 나눠 갖는다.

- DeepSeek-OCR / PaddleOCR: 기본 OCR + 레이아웃
- ViT Classifier: 이미지가 `cs / ncs / table` 중 무엇인지 판별
- Qwen2.5-VL: 표 이미지 → `<table>` HTML
- Qwen3-VL: 캡셔닝, 간단한 reasoning, 화학 구조 설명/SMILES 후보 등

즉, 모델을 “한 방에 다 하는 존재”가 아니라,  
**각각 잘하는 일을 맡은 모듈로 두고, Agent가 orchestration 하는 구조**를 기본으로 한다.

## 2. LoRA / QLoRA 설정 — Model 관점

멀티모달 Qwen-VL 계열은 파라미터 수가 크기 때문에,  
현실적으로는 Full-FT보다 **LoRA / QLoRA**로 접근했다.

대표적인 설정 패턴은 다음과 같다.

- **타깃 모듈**
  - attention 계열: `q_proj, k_proj, v_proj, o_proj`
  - FFN 계열: `gate_proj, up_proj, down_proj`
  - 필요에 따라 attention-only / FFN-only / hybrid를 비교
- **랭크 / 알파 / 드롭아웃**
  - 예시: `r=32`, `lora_alpha=64`, `lora_dropout=0.1`
- **Vision Encoder는 freeze**
  - 실험 비용과 안정성을 위해 Vision tower는 대부분 고정
  - 대신 Vision Prior를 **프롬프트·데이터·loss 설계**로 밀어주는 전략

QLoRA 형태로 4bit 양자화된 모델에 LoRA를 얹을 때는:

- forward 경로에서 **vision token → text token → LoRA 레이어** 순으로
  gradient가 잘 흐르는지 확인
- `prepare_model_for_kbit_training` 류의 util을 사용할 때,
  vision 쪽 weight가 잘못 풀리지 않도록 주의

실제로는 LoRA 설정 자체보다,  
**“어디에 loss를 줄 것인가”와 “입력 토큰 구성”**이 성능에 더 큰 영향을 줬다.

## 3. Vision Prior를 높이는 트릭들 — Data & Loss 관점

멀티모달 태스크에서 가장 큰 문제는,  
모델이 **이미지를 무시하고 언어 prior로만 답하려는 경향**이다.

이를 줄이기 위해 쓴 전략들:

### 3.1. 이미지 이후에만 loss 부여

- `<image>` (또는 `<|image_pad|>` 계열 토큰) 이후의 텍스트에만 loss를 줌
- 시스템·프롬프트 부분, `<image>` 이전 설명은 전부 `label = -100`으로 마스킹
- 효과:
  - 모델이 “이미지 보고 난 뒤의 토큰”에만 집중하도록 유도
  - 프롬프트 텍스트 자체를 외워서 답하는 패턴 감소

### 3.2. Vision token 주입 방식

- processor가 자동으로 넣는 `<|vision_start|> ... <|vision_end|>` 대신,
  **고정된 `<|image_pad|>` 토큰 반복**으로 vision token을 표현
- text 쪽에는 `<image>` 자리표시자 1개만 두고,
  실제 feature는 `image_grid_thw`를 통해 vision encoder 출력 토큰으로 채움
- 목적:
  - 학습 시와 추론 시 **토큰 패턴 일치**
  - position id / attention mask 꼬임 방지

### 3.3. 해상도 커리큘럼 (Curriculum by Resolution)

표/차트 태스크에서는 다음과 같이 **해상도를 단계적으로 높이는 커리큘럼**이 도움이 됐다.

1. Phase 1: 저해상도(예: 448x448) — 구조가 단순한 표/도식 중심
2. Phase 2: 중간 해상도(예: 896x1232)
3. Phase 3: 고해상도(예: 1232x1792) — 복잡한 양식, 병합 셀, 작은 글자 포함

각 Phase마다:

- 데이터 난이도를 다르게 구성
- 동일한 LoRA를 이어서 학습 (SFTTrainer 재사용)
- eval set은 공통 또는 phase별로 분리해서 모니터링

이때도 공통적으로 **assistant 응답 구간에만 loss**를 넣어,
모델이 “정답 토큰”에 집중하도록 했다.

## 4. Table / SMILES 태스크에 Qwen-VL을 붙이는 방식 — Agent 관점

Qwen-VL을 단독 인퍼런스로 쓰는 것보다,  
**Agent 시스템 속의 “전문 도구”로 쓰는 쪽이 더 깔끔했다.**

예를 들면:

- 문서 이미지 →
  - 레이아웃 분석 (텍스트/표/그림/수식)
  - 이미지 분류 (cs / ncs / table)
- 분류 결과에 따라:
  - `table` → Qwen2.5-VL Table-HTML LoRA
  - `cs` → Qwen3-VL/DeepSeek-OCR 기반 SMILES 추출
  - `ncs` → 일반 캡셔닝/설명용 Qwen3-VL

이 구조의 장점:

- 하나의 거대 모델에 모든 책임을 지우지 않고,
  **각 모델의 강점을 살려 조합**할 수 있다.
- 추론 엔진(HF, vLLM, Paddle 등)을 바꿔도,
  상위 Agent 인터페이스만 유지하면 기존 파이프라인을 재사용할 수 있다.

## 5. 인퍼런스 & 평가 — HF vs vLLM, Base vs LoRA

같은 Qwen-VL 계열 모델이라도:

- HF `generate` vs vLLM 서버
- Base vs LoRA vs LoRA-merged

조합에 따라 결과가 달라지는 것을 여러 번 확인했다.

이를 관리하기 위해 다음과 같이 했다.

- 인퍼런스 결과를 **JSON 구조**로 고정
  - `model_name`, `engine_type`, `lora_enabled`, `merge_state` 등 메타데이터 포함
- base / LoRA / merged / vLLM / HF 결과를 **동일 데이터셋에 대해 병렬 저장**
- 평가:
  - 토큰 단위 정확도, Levenshtein 거리, 구조 일치율(HTML/SMILES)
  - LLM-as-a-Judge로 “사람 기준 품질” 평가

중요한 점은, “어떤 엔진이 더 좋다”보다,
**“엔진이 달라지면 결과가 바뀌는 것을 전제로, 실험을 설계하고 로깅해야 한다”**는 것이다.

## 6. 정리 — 나의 Qwen-VL 활용 방식

- 모델:
  - LoRA/QLoRA로 Qwen2.5-VL / Qwen3-VL을 도메인 태스크에 맞게 경량 파인튜닝
- 데이터/학습:
  - Vision Prior를 강화하는 프롬프트, loss 마스킹, 커리큘럼 설계
- Agent/시스템:
  - Qwen-VL을 “표 전담”, “SMILES 전담” 같은 전문 도구로 두고,
    상위 Agent가 라우팅·조합
- 평가:
  - 구조 정확도(HTML/SMILES) + LLM-as-a-Judge + 엔진별 비교

단순히 “모델을 fine-tune했다”가 아니라,  
**모델·데이터·에이전트를 한 번에 설계해서,  
문서 이해 파이프라인 전체를 개선하는 방향으로 Qwen-VL을 사용하고 있다.**
