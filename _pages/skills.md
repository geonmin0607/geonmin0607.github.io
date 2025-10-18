---
title: "기술"
layout: single
permalink: /skills/
toc: true
toc_sticky: true
classes: wide
---

# 기술 개요
프로젝트 전반에서 사용한 **모델링·데이터·모델 평가** 역량을 정리했습니다.

## 1) 모델링
- **파인튜닝/풀파인튜닝/강화학습(DPO)** 전체 파이프라인 경험
- 사용/실험한 모델 계열: **GPT API**, **Claude**, **Mistral**, **Phi**, **LLaMA**, **Gemma**, **Qwen**, **Qwen-VL**
- 접근: LoRA/QLoRA, 커리큘럼 러닝(해상도 단계), Vision Prior, Prompt 엔지니어링, RAG 결합

## 2) 데이터
- **건축법 데이터**: 법령/지침/사례 정규화, Markdown·LaTeX 포함 문서 처리
- **민원 데이터**: 질문 자동 분리 및 의도/유형 라벨링
- **문서–표 데이터**: 표 구조 주석(JSON: bbox_norm/px, reading_order, rowspan/colspan), HTML 레퍼런스
- **문서–다이어그램/차트 데이터**: 이미지→**Mermaid 코드** 변환/정규화, Captioning 레퍼런스
- 활용: **QA 모델**, **표 추출 모델**, **차트·다이어그램 이해 모델**의 학습데이터로 구축(전처리/증강/검수)

## 3) 모델 평가
- **전처리→모델링→추론→평가** 엔드투엔드 파이프라인 구축 및 테스트(부동산원 PoC)
- 지표 예: QA(정답/부분일치, 근거 매칭), 표(구조 정확도·텍스트 정합성), 차트/다이어그램(Mermaid 문법 통과율, 범례–값 일치)
