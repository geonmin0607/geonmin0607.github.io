---
layout: single
title: ""
permalink: /portfolio_all/
classes: wide
---

<div style="border-radius: 24px; padding: 2.5rem 2.5rem; margin-bottom: 2.5rem; box-shadow: 0 24px 60px rgba(15,23,42,0.12); background:
  radial-gradient(circle at 0% 0%, #e5f0ff 0, rgba(229,240,255,0) 55%),
  radial-gradient(circle at 100% 20%, #ffe7ff 0, rgba(255,231,255,0) 55%),
  linear-gradient(135deg, #f5f7ff 0%, #ffffff 60%, #fef6ff 100%);
display: flex; flex-wrap: wrap; align-items: center; gap: 2rem;">

  <div style="flex: 0 0 180px; text-align: center;">
    <img src="/assets/images/hero/profile.jpg"
         alt="GEONMIN LEE"
         style="max-width: 180px; border-radius: 999px; box-shadow: 0 12px 30px rgba(15,23,42,0.25);">
  </div>

  <div style="flex: 1 1 260px; min-width: 260px;">
    <p style="margin: 0; font-size: 0.95rem; letter-spacing: 0.08em; text-transform: uppercase; color: #64748b;">
      AI Engineer · LLM · Multimodal · Agent
    </p>
    <h1 style="margin: 0.4rem 0 0.8rem; font-size: 2rem;">
      GEONMIN LEE
    </h1>
    <p style="margin: 0 0 0.8rem; font-size: 1rem; line-height: 1.7; color: #0f172a; max-width: 640px;">
      문서·이미지 기반 멀티모달 AI를 중심으로 검색, 생성형 QA, 에이전트·서빙까지 다루는 AI 연구원입니다.<br />
      법령·민원·부동산·발전·의약·화학 구조 등 여러 도메인의 정형·비정형 데이터를
      모델이 학습하기 좋은 형태로 다시 설계해 왔습니다.<br />
      데이터 설계 → LoRA/QLoRA 튜닝 → RAG·에이전트 오케스트레이션 → 추론 엔진·모니터링·평가까지
      한 흐름으로 이어지는 전체 파이프라인을 직접 만들고 운영한 경험이 있습니다.
    </p>
    <ul style="margin: 0; padding-left: 1.2rem; font-size: 0.95rem; line-height: 1.5; color: #1e293b;">
      <li>지능형 검색, 규정·법령·민원 QA, 문서 멀티모달 PoC까지 이어지는 프로젝트 경험</li>
      <li>정형/비정형 데이터 설계·라벨링·품질검수와 평가 지표(구조 정합성, LLM-as-a-Judge 등) 설계</li>
      <li>Qwen·DeepSeek 등 멀티모달 LLM LoRA/QLoRA 튜닝, 커리큘럼 학습, 환각 억제 실험</li>
      <li>FastAPI·vLLM/Transformers·ClearML 기반 추론·모니터링·Tool-Agent/오케스트레이션 구축</li>
    </ul>
  </div>
</div>

<style>
  .section-card {
    max-width: 960px;
    margin: 1.5rem auto;
    padding: 1.75rem 1.75rem;
    background: #f9fafb;
    border: 1px solid #e2e8f0;
    border-radius: 16px;
  }

  @media print {
    body {
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }

    .section-card {
      page-break-inside: avoid;
      break-inside: avoid;
    }
  }
</style>


<div class="section-card" markdown="1">

## 1. 소개 및 문제 해결 방식

저는 모델을 “그냥 가져다 쓰는 사람”이 아니라,  
**사용자가 실제 업무에서 필요로 하는 결과물이 나오도록 모델을 바꾸는 사람**입니다.

문서 도메인에서는 같은 입력이라도,  
담당자의 업무 목적에 따라 “뽑아야 하는 결과물”이 달라집니다.  
그래서 저는 항상 아래 순서로 문제를 정의하고 해결합니다.

1. **사용자와 업무부터 정의**
   - 누가(현업/검수자/담당자), 어떤 업무에서(근거 찾기, 답변 작성, 검토/승인),
     무엇 때문에 힘든지(시간 소모, 근거 누락, 표현 오류)를 먼저 파악합니다.
   - 모델이 잘하는 것보다, **업무가 요구하는 출력 규격**이 더 선명해지도록 정리합니다.

2. **데이터 분석으로 ‘정답 규칙’ 설계**
   - 민원·법령·내부 규정처럼 근거가 중요한 도메인에서는
     “그럴듯한 답”보다 **근거 연결, 조건/예외 누락 방지, 표현의 정확성**이 핵심입니다.
   - 조문 구조(제·조·항·호), 버전, 근거 위치 등 메타데이터와
     정답 템플릿(근거 포함 여부, 인용 방식)을 함께 설계해  
     데이터 자체가 규칙이 되도록 만듭니다.

3. **출력 포맷을 먼저 고정하고, 그에 맞춰 학습 구성**
   - 표, 차트, 다이어그램, 도식, 화학 구조 등 다양한 입력을
     업무 목적에 맞는 **구조화 포맷**으로 정의합니다.
     (예: 표는 구조 표현, 차트·다이어그램은 코드 표현, 이미지는 캡션,
     화학 구조는 SMILES 등 식별자 표현)
   - 그 형식이 깨지지 않도록 프롬프트 제약, 토큰 규칙, 후처리 규칙을 함께 설계합니다.

4. **튜닝은 효율적으로, 환각은 줄이는 방향으로**
   - LoRA/QLoRA를 활용해 필요한 모듈만 효율적으로 학습시키고,
     해상도 커리큘럼, loss 마스킹, Vision Prior 강화 등으로
     이미지 정보를 더 잘 반영하도록 만듭니다.
   - 구조 오류·환각 사례를 모아 재학습에 반영하며,
     구조 정합성·문자열 거리·케이스별 통과율로 개선 여부를 추적합니다.

5. **속도·정확도·운영성을 동시에 고려**
   - 같은 모델도 추론 엔진(Transformers/vLLM), 토큰 길이, 캐시, 배치 설정에 따라
     품질과 처리량이 달라집니다.
   - 실험 단계에서 끝내지 않고, **실제 서비스 운영에서 감당 가능한 속도·비용·재현성**까지 함께 보고 선택합니다.

6. **평가를 데이터·학습으로 되돌리는 개선 루프**
   - LLM-as-a-Judge, 구조 정합성, 문자열 거리 등 지표를 설계하고,
     평가 결과를 다시 데이터·학습에 반영하는 **Close-the-Loop 구조**를 유지합니다.
   - 이 과정을 반복하며 모델을 점점 “의도한 출력”에 수렴시키는 데 집중해 왔습니다.

</div>

<div class="section-card" markdown="1">

## 2. 도메인 데이터 경험 (정형/비정형)

문서 도메인마다 형태와 규칙이 다르기 때문에,  
저는 **정형 데이터와 비정형 데이터를 모두 모델이 학습 가능한 형태**로 바꾸는 일을 해왔습니다.

### 2-1. 데이터 유형별

- **정형 데이터**
  - 법령·규정의 조문 구조(제·조·항·호), 표/서식/목차
  - 문서 메타정보(버전/개정, 출처), 내부 OJT·업무 프로세스 문서
- **비정형 데이터**
  - 민원 서술형 텍스트, 블로그/웹 문서, 약관·서술형 규정,
    사용자 문의·사례 텍스트

특히 민원·법령·내부 규정처럼 “근거가 중요한 문서”에서는  
**조건/예외를 빠짐없이 담고, 어디서 근거를 가져왔는지**가 중요하기 때문에  
청킹 기준, 메타데이터 스키마, 정답 템플릿을 함께 설계해 왔습니다.

### 2-2. 도메인별 경험

1. **민원·행정 도메인**
   - 수도권 기초/광역지자체 민원 데이터
   - 특징: 질문이 길고 복합적이며, 답변은 법/지침 근거가 필요
   - 접근: 질문 자동 분리, 유형화(절차/요건/예외), 근거 문서 매핑 중심 구성

2. **부동산·공공기관 도메인**
   - 부동산 관련 공공기관 민원 + 관련 법·규정
   - 특징: 용어가 엄격하고 예외 조건이 많음
   - 접근: 조항 단위 구조화 + 조건/면책/예외를 답변 템플릿에 반영

3. **법령·규정 도메인**
   - 지자체 관련 법/행정 규정, 발전 관련 내부 규정(사규), 신입/전입 OJT 문서
   - 특징: 조문 구조·용어 정의·내부 프로세스가 핵심
   - 접근: 조항 구조 기반 청킹, 업무 시나리오/FAQ 재구성,
     근거 위치(조항/페이지)를 함께 저장

4. **온라인·비정형 텍스트 도메인**
   - 블로그 등 비정형 웹 텍스트
   - 특징: 표현이 자유롭고 노이즈·광고가 많음
   - 접근: 정제/필터링(중복/광고 제거), 검색·요약·QA에 맞는 구조로 재가공

</div>

<div class="section-card" markdown="1">

## 3. 주요 프로젝트

<div style="display:flex;flex-direction:column;gap:1.5rem;">

  <!-- 3-1. 지능형 검색 서비스 -->
  <div style="border-radius:16px;padding:1.5rem 1.75rem;border:1px solid #e2e8f0;background:#ffffff;">
    <p style="margin:0 0 0.25rem;font-size:0.85rem;color:#64748b;">2023.07 – 2023.12</p>
    <h3 style="margin:0 0 0.5rem;font-size:1.15rem;">지능형 검색 서비스 개발</h3>
    <p style="margin:0 0 0.5rem;font-size:0.95rem;line-height:1.6;">
      특정 도메인 사이트 약 380개를 대상으로 의미 기반 검색(Vector Similarity)과
      대규모 수집·모니터링 파이프라인을 구축한 프로젝트입니다.
    </p>
    <ul style="margin:0 0 0.25rem 1.1rem;font-size:0.95rem;line-height:1.5;">
      <li><strong>역할</strong> · 검색 API, 크롤러, 스케줄링, 모니터링 파이프라인 설계·구현</li>
      <li><strong>핵심 기술</strong> · Python, FastAPI, Elasticsearch(Vector), Airflow, Prometheus, Grafana</li>
      <li><strong>성과</strong> · 운영 가능한 검색 인프라 구축, 수집 장애 감지·대응 속도 개선</li>
    </ul>
  </div>

  <!-- 3-2. 발전 산업 QA LLM -->
  <div style="border-radius:16px;padding:1.5rem 1.75rem;border:1px solid #e2e8f0;background:#ffffff;">
    <p style="margin:0 0 0.25rem;font-size:0.85rem;color:#64748b;">2024.05 – 2024.12</p>
    <h3 style="margin:0 0 0.5rem;font-size:1.15rem;">발전 산업 업무 지원 생성형 AI 연구</h3>
    <p style="margin:0 0 0.5rem;font-size:0.95rem;line-height:1.6;">
      내부 규정·법령·업무 매뉴얼을 활용해 RAG 기반 QA 도우미 챗봇을 연구한 프로젝트입니다.
      조문 구조와 버전 정보를 살려 규정·내규 질의에 근거 있는 답변을 주는 것이 목표였습니다.
    </p>
    <ul style="margin:0 0 0.25rem 1.1rem;font-size:0.95rem;line-height:1.5;">
      <li><strong>역할</strong> · 도메인 문서 분석, 청킹·메타데이터 설계, RAG·파인튜닝·DPO 실험</li>
      <li><strong>핵심 기술</strong> · Python, PyTorch, Hugging Face, RAG, TRL(DPO), Markdown·LaTeX 처리</li>
      <li><strong>성과</strong> · 규정·내규 QA 정확도 및 표현(수식·기호) 정확도 개선 방향 검증, PoC 수준 성과 도출</li>
    </ul>
  </div>

  <!-- 3-3. 건축 민원 QA -->
  <div style="border-radius:16px;padding:1.5rem 1.75rem;border:1px solid #e2e8f0;background:#ffffff;">
    <p style="margin:0 0 0.25rem;font-size:0.85rem;color:#64748b;">2024.09 – 2025.02</p>
    <h3 style="margin:0 0 0.5rem;font-size:1.15rem;">건축민원 AI 답변 생성 서비스</h3>
    <p style="margin:0 0 0.5rem;font-size:0.95rem;line-height:1.6;">
      건축법·지침·사례 데이터를 학습해 건축 민원에 대한 답변을 자동 작성/보조하는 모델을 만든 프로젝트입니다.
    </p>
    <ul style="margin:0 0 0.25rem 1.1rem;font-size:0.95rem;line-height:1.5;">
      <li><strong>역할</strong> · QA 데이터 구축, 질문 자동 분리 프롬프트, LLM-as-a-Judge 평가 체계 설계</li>
      <li><strong>핵심 기술</strong> · Python, PyTorch, Hugging Face, Prompt Tuning, LLM-as-a-Judge</li>
      <li><strong>성과</strong> · 답변 일관성·정확도 개선, 담당자 답변 작성 시간 단축 가능성 확인(PoC)</li>
    </ul>
  </div>

  <!-- 3-4. 문서 멀티모달 PoC -->
  <div style="border-radius:16px;padding:1.5rem 1.75rem;border:1px solid #e2e8f0;background:#ffffff;">
    <p style="margin:0 0 0.25rem;font-size:0.85rem;color:#64748b;">2025.03 – 진행 중</p>
    <h3 style="margin:0 0 0.5rem;font-size:1.15rem;">문서 분석 기반 Multimodal PoC</h3>
    <p style="margin:0 0 0.5rem;font-size:0.95rem;line-height:1.6;">
      문서 이미지 수천 장에서 표·차트·다이어그램·이미지·도식을 분석해
      HTML·코드·캡션·SMILES 등 구조화된 포맷으로 변환하는 멀티모달 PoC입니다.
    </p>
    <ul style="margin:0 0 0.25rem 1.1rem;font-size:0.95rem;line-height:1.5;">
      <li><strong>역할</strong> · 데이터셋 설계·라벨링 기준 수립, Qwen·DeepSeek 멀티모달 LoRA/QLoRA 튜닝, 멀티 에이전트 API 설계</li>
      <li><strong>핵심 기술</strong> · Python, PyTorch, Hugging Face, LoRA/QLoRA, Vision-Language, RAG, FastAPI, vLLM, ClearML</li>
      <li><strong>성과</strong> · 문서 요소별 구조화 파이프라인 PoC 구축, 이후 서비스 확장 가능한 멀티모달·에이전트 아키텍처 확보</li>
    </ul>
  </div>

</div>

</div>

<div class="section-card" markdown="1">

## 4. PoC에서 다룬 도메인 (요약)

- 수도권 기초지자체 민원 데이터 PoC  
  → 질문 분리 + 근거 기반 답변 생성 구조 검증
- 국가 약전·의약 규정(관련 법 자료) PoC  
  → 조항 구조 기반 청킹 및 근거 인용 실험
- 보험 약관 데이터(내부 자체 테스트)  
  → 조건/면책 조항 구조화 및 QA 가능성 검증

</div>

<div class="section-card" markdown="1">

## 5. 특허 출원 (총 4건)

1. **데이터 증강·검수 자동화 (방법/시스템 2건)**  
   - 대규모 언어 모델과 딥러닝을 활용해  
     학습 데이터를 자동 증강하고 품질을 자동 검수하는 기술

2. **프롬프트 자동 생성 기반 학습데이터 구축 (방법/장치 2건)**  
   - 생성형 모델 학습에 필요한 프롬프트를 자동 생성하여  
     데이터 구축 효율을 높이는 기술

</div>

<div class="section-card" markdown="1">

## 6. 연락처 & 링크

- Portfolio: <https://geonmin0607.github.io/>

</div>
