---
title: "발전사 업무 지원을 위한 생성형 AI 연구"
date: 2024-12-26
categories: [PoC, LLM]
tags: [RAG, DPO, Transformers, Domain Data, Prompt Engineering]
institution: "발전사(<기관명 교체: 예_서부발전>)"
period: "2024.05.01–2024.12.26"
role: "도메인 데이터 설계 · 학습데이터 구축 · DPO 실험"
models: ["LLM 파인튜닝(Transformers)", "DPO(TRL)", "RAG"]
data:
  - "내부 규정·법령·업무 매뉴얼 (Markdown/LaTeX 포함)"
processing:
  - "도메인 데이터 분석 및 chunk 기준 설계(법령·내규·규칙·사례 반영)"
  - "QA 파인튜닝용 학습데이터 구축, DPO 기반 강화학습 데이터셋 구축"
  - "Prompt 엔지니어링 및 RAG 구성"
outcomes:
  - "자주 찾는 규정·내규 질의에 대한 정확한 답변 생성"
  - "Markdown/LaTeX 표현(수식·원소기호) 정확도 향상"
  - "사내 PoC 단계에서 활용 가능성 입증"
---

발전사 직원들의 내부 규정, 법령, 업무 매뉴얼 등을 활용하여 업무 도우미 챗봇을 개발. 문서와 내규를 빠르게 조회·활용할 수 있도록 LLM 기반 QA 서비스 연구.
