---
title: "About"
layout: single
permalink: /about/
classes: wide
---

AI 엔지니어 **GEONMIN LEE**의 포트폴리오입니다.
문서·표·다이어그램 이해 및 **RAG/LLM 파이프라인**을 설계·구현하고, 파인튜닝/강화학습/평가까지 **엔드투엔드**로 다룹니다.

## 요약
- 도메인 스키마 설계 → 데이터 큐레이션 → 멀티모달 추출(표/차트/다이어그램) → 질의응답까지 <strong>RAG/생성 파이프라인을 일관되게 설계·배포</strong>합니다.
- LoRA/Full-FT, DPO 등 <strong>모델 적응</strong>과 LLM-as-a-Judge·루브릭 샘플링 기반 <strong>정량 평가</strong>를 결합해 품질을 반복 개선합니다.
- Airflow·ClearML·Prometheus·Grafana를 활용해 <strong>수집/학습/추론 자동화와 모니터링</strong>을 구축하고 안정적으로 운영합니다.

## 주요 역량
- **텍스트/LLM**: 규정·법령·기술문서 처리, 프롬프트/시나리오 설계, 스타일 보존(LaTeX/수식), 파인튜닝·강화학습, 지식 정제.
- **멀티모달**: 표 구조 HTML 복원, 차트/다이어그램 → Mermaid 변환, 이미지 Captioning 등 시각-텍스트 결합 전처리.
- **평가 체계**: 루브릭/샘플 설계, 자동 채점과 오답 클러스터링, Close-the-Loop 재학습 파이프라인.
- **운영/신뢰성**: 데이터 파이프라인 자동화, 실험/모델 자산 관리, 모니터링·알림, 장애 대응 Runbook 정비.

## 최근 집중 영역
- 기관/기업 문서 기반 <strong>지식 추출·검색·생성</strong> 품질 개선 (스키마 설계, 벡터/키워드 혼합 검색, rerank/llm router).
- <strong>멀티모달 문서 이해</strong>를 위한 Table/Vision-Language 모델 실험 및 프롬프트 엔지니어링.
- <strong>평가 자동화</strong> 및 LLM-as-a-Judge 편향 관리, 샘플 풀 관리 전략 수립.

## 다루는 모델 & 데이터 한눈에 보기

- **Text/LLM**
  - 발전사 규정·법령 QA, 건축 민원 QA 등 도메인 특화 질의응답 모델 설계·파인튜닝
  - RAG, DPO, LLM-as-a-Judge, 프롬프트 튜닝

- **Multimodal/Vision**
  - Qwen2.5-VL, Qwen3-VL, DeepSeek-OCR, PaddleOCR, DocLayout 등
  - 표 → HTML `<table>`, 차트·다이어그램 → Mermaid, 이미지 Captioning

- **Chem/Structure**
  - 분자 구조 이미지 → SMILES / InChI / CAS 추출 파이프라인 설계
  - ViT 기반 cs/ncs/table 분류기로 Agent 라우팅에 활용

- **데이터 표현**
  - Table: 셀 단위 구조 + rowspan/colspan까지 보존하는 HTML
  - Chart/Diagram: Mermaid(`xychart-beta`, `flowchart` 등)
  - Chem: SMILES / InChI / InChIKey / CAS

## 성장 스토리 (From Text to Multimodal & Agents)

### 1단계 — 검색 · 데이터 파이프라인 (2023)

- **프로젝트:** 지능형 검색 서비스 개발 (`2023-intelligent-search`)
- **내용:**
  - 약 380개 웹사이트를 대상으로 하는 크롤러/스크래퍼 설계
  - Elasticsearch 기반 의미 기반(Vector) 검색 API를 FastAPI로 구현
  - Airflow로 수집·인덱싱 작업 자동화, Prometheus·Grafana로 모니터링 체계 구축
- **이때 배운 것:**
  - 모델 이전에 데이터 수집·지표·운영이 중요하다는 점
  - 검색 품질을 유지하려면 파이프라인과 알림·모니터링까지 설계해야 한다는 점

### 2단계 — 규정/법령 LLM QA · RAG · DPO (2024 상반기)

- **프로젝트:** 발전사 업무 지원 생성형 AI 연구 (`2024-power-gen-assistant`)
- **내용:**
  - 발전사 규정·법령·매뉴얼을 분석하고 chunk 기준과 스키마를 설계
  - Markdown/LaTeX 문서를 포함한 도메인 QA 데이터셋 구축
  - RAG 파이프라인과 LLM 파인튜닝, DPO(선호도 기반 학습) 실험
- **이때 배운 것:**
  - 단순 검색이 아니라 “질문에 맞는 근거 + 답변” 구조가 중요하다는 점
  - LLM을 잘 쓰려면 도메인 데이터 정제와 스키마 설계가 핵심이라는 점

### 3단계 — 건축 민원 QA · LLM-as-a-Judge · 평가 자동화 (2024 하반기 ~ 2025 초)

- **프로젝트:** 건축민원 AI 답변생성 (`2024-2025-architect-qa`)
- **내용:**
  - 실제 민원 문장을 분석해 질문을 자동 분리하는 프롬프트 설계
  - LLM-as-a-Judge 방식으로 모델 답변을 평가하고 평가 데이터셋 구축
  - 평가 결과를 다시 학습에 반영하는 “Close-the-Loop” 구조 실험
- **이때 배운 것:**
  - LLM 품질은 모델 사이즈보다 평가·피드백 루프 설계에 크게 좌우된다는 점
  - 도메인 전문가의 기준을 루브릭·샘플·스코어로 옮기는 작업의 중요성

### 4단계 — Multimodal 문서 분석 · Qwen-VL · Table/Chart/SMILES (2025~)

- **프로젝트:** 문서 분석 기반 Multimodal PoC (`2025-multimodal-docai`)
- **내용:**
  - 문서 내 표 → `<table>` HTML, 차트/다이어그램 → Mermaid, 이미지 → Captioning으로 변환
  - Qwen2.5-VL, Qwen3-VL, DeepSeek-OCR, ViT 분류기를 조합해 멀티모달 파이프라인 설계
  - Vision Prior를 강화하고 해상도 커리큘럼 학습으로 hallucination을 줄이는 실험
- **추가로 하고 있는 일:**
  - 분자 구조 이미지에서 SMILES / InChI / CAS를 추출하는 Chem OCR 파이프라인 설계
  - cs / ncs / table 3-class ViT 분류기를 만들어 Agent 라우팅에 활용
- **이때 배운 것:**
  - 텍스트만이 아니라 표·차트·이미지·화학 구조를 함께 다뤄야 진짜 “문서 이해”가 된다는 점
  - 여러 모델을 FastAPI 마이크로서비스와 Agent Orchestrator로 묶는 설계의 장점

### 지금 하는 일 — Text + Multimodal + Agent를 잇는 플랫폼

지금은 다음 네 가지를 하나의 흐름으로 연결하는 데 집중하고 있습니다.

1. Text 기반: 규정·법령·민원 QA, RAG, DPO, LLM-as-a-Judge
2. Multimodal: 표(HTML), 차트·다이어그램(Mermaid), 화학 구조(SMILES) 추출
3. Agent/Orchestration: Qwen·DeepSeek-OCR·ViT 등을 도구(툴 에이전트)로 보고 상위 Agent에서 조합
4. 운영/평가: ClearML·모니터링·지표·실험 로그를 통해 끝까지 관리 가능한 형태로 만드는 것

텍스트 작업에서 시작해, 이제는 멀티모달 모델과 에이전트·파이프라인까지 연결하는 엔지니어로 성장해 왔습니다.


## 협업 방식
- 문제 정의 단계에서 <strong>정책/업무 맥락을 구조화</strong>하고, 이해관계자와 지표/샘플을 합의해 이후 개발/평가를 빠르게 반복합니다.
- 실험 기록과 재현성을 중시해 <strong>실험 로그, 데이터/모델 버전, 파라미터</strong>를 체계적으로 남깁니다.
- 제품 환경을 고려해 <strong>관찰 가능성과 운영 편의</strong>를 우선하며, 단순한 설계와 명료한 핸드오프 문서 작성을 지향합니다.

## 연락
협업이나 프로젝트 논의가 필요하면 언제든 편히 연락 주세요.
