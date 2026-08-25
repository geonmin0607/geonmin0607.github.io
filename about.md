---
title: "About"
layout: single
permalink: /about/
classes: wide
---

<div class="about-intro">
문서·이미지 기반 AI와 생성형 QA를 중심으로, <strong>LLM/VLM 파인튜닝 · RAG 검색·추천 · 문서 구조화 · 평가·검증 · 서빙·운영</strong>을 연결해 온 AI/AX 엔지니어입니다. 텍스트 검색에서 시작해 멀티모달 문서 이해와 현재의 엔지니어링 제안서 검색·추천까지, 실제 업무 흐름에 적용 가능한 데이터·모델·서비스 구조를 만드는 데 집중하고 있습니다.
</div>

## Core Capabilities

- **LLM / RAG**  
  규정·법령·민원·엔지니어링 문서를 대상으로 검색, QA, 의미 검색, 추천용 데이터 구조를 설계합니다.
- **Multimodal / Document AI**  
  표·이미지·차트·다이어그램 등 비정형 문서를 OCR/VLM과 문서 레이아웃 모델로 구조화합니다.
- **Fine-tuning / Evaluation**  
  LoRA/QLoRA, DPO, LLM-as-a-Judge, Vision Prior, Curriculum Learning 등을 활용해 학습·평가·개선 루프를 설계합니다.
- **Serving / Operations**  
  FastAPI, vLLM/Transformers, Azure AI, Airflow, ClearML, Prometheus, Grafana 등을 활용해 추론·데이터 파이프라인을 서비스 환경에 연결합니다.

## Career / Growth Timeline

<div class="timeline">

### 2023 — Search & Data Pipeline

약 380개 웹사이트를 대상으로 크롤링·정제·색인 파이프라인을 구축하고, FastAPI 기반 검색 API와 Vector Similarity Search를 개발했습니다. Airflow 자동화와 Prometheus·Grafana 모니터링까지 포함해 검색 서비스의 데이터 수집과 운영 구조를 경험했습니다.

### 2024 — RAG, Domain QA & DPO

발전사 내부 규정·법령·매뉴얼을 대상으로 청킹 기준과 메타데이터 스키마를 설계하고, RAG 기반 QA와 LLM 파인튜닝·DPO 실험을 수행했습니다. 단순 검색보다 질문에 맞는 근거와 답변을 함께 구성하는 구조에 집중했습니다.

### 2024–2025 — Building-domain QA & Evaluation Loop

건축 민원 데이터를 분석해 질문 유형과 QA 데이터를 구축하고, 복수 질문 분리와 LLM-as-a-Judge 기반 자동 평가를 적용했습니다. 평가 결과를 다시 데이터 개선과 Fine-tuning에 반영하는 반복 구조를 설계했습니다.

### 2025–2026 — Multimodal Document AI

문서 내 표·이미지·차트·다이어그램·화학 구조를 인식해 HTML·Mermaid·SMILES·캡션 등 구조화된 표현으로 변환하는 Multimodal PoC를 진행했습니다. Qwen·DeepSeek 계열 VLM, PaddleOCR, 문서 레이아웃 모델과 LoRA/QLoRA Fine-tuning을 결합하고, Vision Prior·해상도 커리큘럼·Loss Masking 등을 실험했습니다.

Chem OCR과 Agent Orchestration 역시 이 과정에서 다룬 세부 경험이며, 현재는 문서 구조화와 검색·추천 파이프라인을 중심으로 활용 범위를 확장하고 있습니다.

### 2026 — Engineering Proposal / QBS Retrieval & Recommendation

엔지니어링 제안서(QBS)의 유사사업 정보를 LLM/VLM으로 구조화해 신규 RFP 기반 검색·추천에 활용할 데이터베이스를 구축했습니다. 유사사업 2,418건과 연계 이미지 6,356장을 구조화하고, PP-DocLayoutV3 Fine-tuning과 Layout·OCR Anchor 기반 이미지 매핑을 적용했습니다. 이미지 검출 후처리에서는 문서별 기대 이미지 수 대비 검출 일치율을 54%에서 84%로 개선했습니다.

</div>

## Engineering Approach

- 문제 정의 단계에서 문서 구조와 업무 기준을 먼저 정리하고, 이후 파싱·추출·검색·평가 단위를 명확하게 나눕니다.
- 모델 성능만 보지 않고 원문 대조, 오류 유형, 데이터 품질, 운영 지표를 함께 관리합니다.
- 필요한 경우 규칙 기반 처리와 LLM/VLM을 결합해 재현성과 유연성을 동시에 확보합니다.
- 실험 결과가 실제 서비스 또는 데이터 파이프라인에 연결될 수 있도록 API·추론·모니터링까지 고려해 설계합니다.

