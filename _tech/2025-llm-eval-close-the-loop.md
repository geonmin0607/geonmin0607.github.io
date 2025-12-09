---
title: "LLM 평가 & Close-the-Loop (LLM-as-a-Judge)"
layout: single
categories: [TechNotes]
tags: [evaluation, llm-as-a-judge]
---

## 한 줄 소개

규정·법령·민원 답변 품질을 위해  
**오류 유형·루브릭·LLM-as-a-Judge**를 활용한 평가·개선 루프를 설계했습니다.

## 내가 맡은 역할

- 실제 QA 데이터를 기반으로 답변의 **오류 유형(규정 오인용, 조건 누락 등)** 정의
- 오류 기준과 예시를 모아 **루브릭**으로 정리하고, LLM-as-a-Judge 평가 프롬프트 설계
- 평가 결과를 다시 데이터·프롬프트·모델 개선에 반영하는 **Close-the-Loop 흐름** 설계

## 키워드

- LLM 평가 자동화
- 오류 유형/루브릭 설계
- Close-the-Loop 개선 사이클
