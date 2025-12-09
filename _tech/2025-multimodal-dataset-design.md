---
title: "멀티모달 문서 데이터셋 설계 (Table / Mermaid / Chem)"
layout: single
categories: [TechNotes]
tags: [dataset, multimodal]
---

## 한 줄 소개

표, 차트·다이어그램, 화학 구조 이미지를  
각각 **HTML / Mermaid / SMILES**로 표현할 수 있도록  
멀티모달 문서 데이터셋 구조를 설계했습니다.

## 내가 맡은 역할

- 표 데이터를 셀 구조·병합 정보·역할(헤더/본문 등)까지 포함하는 **구조 중심 스키마**로 설계
- 차트·다이어그램을 축/시리즈/노드·엣지 정보를 담는 **Mermaid 표현**으로 정리
- 화학 구조 이미지를 SMILES 등 식별자와 연결하고,  
  이미지 타입 분류(cs/ncs/table)까지 고려한 **Chem 전용 데이터 구조** 설계

## 키워드

- Table → HTML 구조 복원
- Chart/Diagram → Mermaid
- Chem 구조 → SMILES 등 식별자
