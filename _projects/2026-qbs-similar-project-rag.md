---
title: "LLM/VLM 기반 QBS 유사사업 검색·추천 데이터 파이프라인 개발"
date: 2026-08-21
period: "2026.06 ~ 2026.08"
excerpt: "엔지니어링 제안서(QBS)의 유사사업 정보를 구조화하여 신규 RFP 기반 유사사업 검색·추천에 활용할 RAG 데이터베이스를 구축한 프로젝트."
tags:
  - LLM/VLM
  - RAG
  - Document AI
  - PP-DocLayoutV3
---

## 프로젝트 개요

엔지니어링 제안서(QBS)에 포함된 유사사업 정보를 LLM/VLM으로 구조화하고, 신규 RFP를 기준으로 의미 검색과 Top-K 유사사업 추천에 활용할 수 있는 Retrieval 데이터 구조를 구축한 프로젝트입니다.

문서 안에서 유사사업별 경계를 분리하고 텍스트·이미지 정보를 함께 연결해, 검색·추천 단계에서 하나의 사업을 독립적인 검색 단위로 사용할 수 있도록 구성했습니다.

## 주요 역할

- PyMuPDF·LLM 기반 섹션 탐지와 GPT 계열 VLM 기반 OCR·문서 구조 추출 파이프라인 구축
- 규칙 기반 경계 분리와 LLM 정보 추출을 결합해 복수 유사사업을 개별 검색 단위로 구조화
- 원문 대조 검증과 LLM 평가를 결합한 환각·누락·경계 오류 검증 체계 구축
- PP-DocLayoutV3 Fine-tuning 및 Layout·OCR Anchor 기반 유사사업-이미지 자동 매핑 구조 설계
- Azure LLM/VLM 및 Claude 기반 AI-assisted Development 활용

## 결과

- 유사사업 **2,418건**과 연계 이미지 **6,356장**으로 구성된 검색·추천용 데이터셋 구축
- 신규 RFP 기반 의미 검색 및 Top-K 유사사업 추천에 활용 가능한 Retrieval 데이터 구조 확보
- 이미지 검출 후처리를 통해 문서별 기대 이미지 수 대비 검출 일치율 **54% → 84%** 개선

## 기술 스택

`Python` · `PyMuPDF` · `LLM/VLM` · `RAG` · `PP-DocLayoutV3` · `PaddleOCR` · `Azure AI`
