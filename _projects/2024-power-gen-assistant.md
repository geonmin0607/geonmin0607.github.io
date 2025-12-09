---
title: "발전사 업무 지원을 위한 생성형 AI 연구"
date: 2024-12-26
show_date: false
categories: [Projects]
tags: [RAG, DPO, Transformers, Domain Data, Prompt Engineering]
excerpt: |
  <ul class="excerpt-list">
    <li><strong>기간:</strong> 2024.05.01 ~ 2024.12.26</li>
    <li>규정·법령·매뉴얼 기반 LLM QA 도우미</li>
    <li>RAG · DPO · Transformers · LaTeX/Markdown</li>
  </ul>
---

## 개요

발전사 내부의 **규정·법령·매뉴얼**을 기반으로  
업무 질의에 답변하는 **LLM 기반 QA/RAG 시스템**을 연구·구현한 프로젝트입니다.

## 진행기간
2024.05.01 ~ 2024.12.26

## 배경 / 문제

- 규정·법령 문서가 방대하고 복잡해 사람이 일일이 찾아보기 어려움
- 기존 검색으로는 “어느 조항을 근거로 한 답변인지” 확인하기 힘듦
- 도메인에 특화된 LLM 학습과 평가 체계가 부족함

## 내가 한 일

- 규정·법령·매뉴얼 문서를 분석해 **chunk 기준·스키마 설계**
  - 조항/항/호, 부록, 표·도표 등 구조를 고려한 청크 전략
- **QA 학습 데이터셋** 설계·구축
  - 실제 문의 패턴을 반영한 질문–답변–근거 문단 구조 설계
  - Markdown/LaTeX(수식 포함) 문서 처리 파이프라인 구성
- **LLM 파인튜닝 및 DPO 실험**
  - LoRA/Full-FT 환경 구성, 하이퍼파라미터 탐색
  - 선호도 데이터 생성 및 DPO 학습 적용

## 결과 / 성과

- 규정·법령 문서를 근거로 하는 **근거 기반 QA 응답** 구조 설계
- 특정 업무 도메인에 최적화된 RAG·LLM 파이프라인 프로토타입 완성
- DPO 실험을 통해 규칙 준수·답변 일관성이 향상되는 효과 확인

## 사용 기술

- Python
- LLM 파인튜닝 (LoRA, DPO)
- RAG (Vector Store, Retriever/Reranker)
- Markdown/LaTeX 전처리
