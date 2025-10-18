---
title: "건축민원 AI 답변생성 서비스"
subtitle: "LLM-as-a-Judge 평가 · 질문 자동 분리 프롬프트"
date: 2025-02-01
show_date: false
categories: [Projects]
tags: [Prompt Tuning, LLM-as-a-Judge, Domain QA]
institution: "지자체(<기관명 교체: 예_경기도청/강남구청>)"
---

## 1. 진행기간
2024.09.01 ~ 2025.02.01

## 2. 주요내용
건축 관련 민원에 대해 신속·정확한 답변을 지원하는 **AI 기반 자동 응답 모델** 구축. 건축법·지침·사례 데이터를 학습하여 민원 답변 작성 보조

## 3. 본인이 기여한 점
- **도메인 데이터 분석** 및 QA 학습데이터 구축
- 사용자 민원 문장에서 **질문을 자동 분리**하는 프롬프트 설계
- **LLM-as-a-Judge** 방식을 적용하여 **모델 답변 평가 데이터셋** 구축
- 모델 성능 개선을 위한 학습·실험 주도

## 4. 사용한 기술스택 및 지식
Python, PyTorch, Hugging Face, LLM-as-a-Judge 기법, Domain-specific Data Analysis, Prompt Tuning

## 5. 결과 및 성과
- 건축민원 **QA 응답의 일관성**과 **정확도** 향상
- PoC 단계에서 **민원 담당자의 답변 작성 시간 단축** 효과 확인
- **Finetuned Model**의 응답을 평가하여 **고품질 데이터를 학습데이터로 활용**
