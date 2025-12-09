---
title: "문서 분석 기반 Multimodal PoC"
subtitle: "표→HTML, 이미지/차트→Captioning, 다이어그램→Mermaid"
date: 2025-10-01
show_date: false
categories: [Projects, Multimodal]
tags: [Qwen-VL, LoRA, Curriculum, ClearML, RAG]
excerpt: |
  <ul class="excerpt-list">
    <li><strong>기간:</strong> 2025.03 ~ (진행 중)</li>
    <li>문서 내 표/그림/차트/다이어그램 구조화 → RAG/QA 향상</li>
    <li>Qwen-VL · LoRA · Mermaid · Captioning · RAG</li>
  </ul>
---

## 개요

문서 이미지에서 **표·차트·다이어그램·화학 구조**를 인식해  
각각을 HTML / Mermaid / SMILES 등 구조화된 표현으로 바꾸고,  
이를 LLM/RAG와 연결하는 **멀티모달 문서 이해 PoC**를 진행한 프로젝트입니다.

## 진행기간
2025.03 ~ (진행 중)

## 배경 / 문제

- 문서 안의 정보가 텍스트뿐 아니라 표·그림·화학 구조 등으로 흩어져 있음
- 기존 OCR만으로는 구조(표 셀, 차트 축·시리즈, 분자 구조 등)를 복원하기 어려움
- 여러 모델을 어떻게 조합하고, 평가·운영까지 할지에 대한 설계가 필요함

## 내가 한 일

- **표 → HTML**  
  - Qwen2.5-VL 기반 표 구조 추출 모델 설계·LoRA/QLoRA 학습  
  - 셀 단위 구조, rowspan/colspan, 스타일 오류 태깅이 포함된 데이터셋 설계
- **차트·다이어그램 → Mermaid or Image Captioning**  
  - 차트 이미지에서 x축·y축·시리즈를 인식해 `xychart-beta` 형태로 변환  
  - 다이어그램을 `flowchart` 등 Mermaid 코드 또는 이미지 캡셔닝으로 변환하는 프롬프트·데이터 설계
- **화학 구조 → SMILES/식별자**  
  - 분자 구조 이미지 → SMILES/InChI/CAS 추출 파이프라인 구성  
  - ViT 기반 cs/ncs/table 분류기로 **Agent 라우팅**에 활용
- **Agent·서비스 구조 설계**  
  - DeepSeek-OCR, Qwen-VL, ViT 분류기 등을 FastAPI 마이크로서비스로 분리  
  - 상위 Agent에서 이미지 유형에 따라 적절한 엔드포인트로 라우팅하는 흐름 설계
- **Vision Prior·학습 실험**  
  - `<image>` 이후 구간에만 loss 부여, 해상도 커리큘럼, Vision Token 주입 등으로  
    hallucination을 줄이는 학습 실험 수행

## 결과 / 성과

- 다양한 문서 요소(표·차트·다이어그램·화학 구조)를  
  각각 **HTML / Mermaid / SMILES**로 구조화하는 PoC 파이프라인 완성
- 멀티모달 모델과 Agent·마이크로서비스를 조합해  
  실제 시스템 형태로 동작하는 프로토타입 설계
- Vision Prior 강화·커리큘럼 학습이 구조 복원 품질에 미치는 영향에 대한 인사이트 확보

## 사용 기술

- Qwen2.5-VL, Qwen3-VL, DeepSeek-OCR, PaddleOCR
- ViT 기반 이미지 분류
- FastAPI, 멀티모달 Agent/Orchestrator 설계
- LoRA/QLoRA, 커리큘럼 학습, 평가·시각화 스크립트
