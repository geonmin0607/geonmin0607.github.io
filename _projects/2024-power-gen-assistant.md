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

## 1. 진행기간
2024.05.01 ~ 2024.12.26

## 2. 주요내용
발전사 직원들의 내부 규정, 법령, 업무 매뉴얼 등을 활용하여 업무 도우미 챗봇을 개발. 문서와 내규를 빠르게 조회·활용할 수 있도록 **LLM 기반 QA 서비스** 연구

## 3. 본인이 기여한 점
- 도메인 데이터 분석 및 **chunk 기준 설계** (법령·내규·규칙·사용자 사례 반영)
- **Markdown·LaTeX** 포함 문서 데이터셋 구축
- **QA LLM 모델 파인튜닝**용 학습데이터 구축
- **DPO(Direct Preference Optimization)** 기반 강화학습 데이터셋 구축 및 학습 실험

## 4. 사용한 기술스택 및 지식
Python, PyTorch, Hugging Face Transformers, RAG, DPO(TRL 라이브러리), Prompt Engineering, Domain-specific Data Curation

## 5. 결과 및 성과
- 발전사 직원들이 자주 찾는 **규정·내규 질문**에 대해 **높은 정확도**의 답변 생성
- Markdown과 LaTeX 표현 방식을 학습 데이터에 반영하여 **수식·원소 기호 표현 정확도** 향상
- **사내 PoC 단계**에서 **활용 가능성**을 입증
