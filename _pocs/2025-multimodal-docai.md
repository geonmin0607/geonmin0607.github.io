---
title: "문서 분석 기반 Multimodal PoC"
subtitle: "표→HTML, 이미지/차트→Captioning, 다이어그램→Mermaid"
date: 2025-10-01
categories: [PoC, Multimodal]
tags: [Qwen2.5-VL, Qwen3-VL, LoRA, Curriculum, ClearML, RAG]
institution: "<기관명>"
period: "2025.03–(진행 중)"
role: "데이터셋 구축부터 모델링까지 전체 파이프라인 주도"
models:
  - "Qwen2.5-VL/Qwen3-VL (LoRA 파인튜닝, Vision Prior)"
  - "커리큘럼 러닝(해상도 단계), RAG 결합"
data:
  - "행정문서 표/그림/차트/다이어그램 이미지 + HTML/캡션/코드 레퍼런스"
processing:
  - "표 구조 추출→HTML, 다이어그램→Mermaid, 이미지/차트→Captioning"
  - "Vision Prior 적용, hallucination 억제"
  - "RAG 결합으로 QA 정확도 향상 구조 설계"
outcomes:
  - "멀티모달 기반 문서 분석 정확도 개선 가능성 확인"
  - "Vision Prior 적용 시 hallucination 감소 관찰"
---

멀티모달 LLM으로 문서 내 표/이미지/차트/다이어그램을 분석·추출하고, 출력 형식(HTML/캡션/Mermaid)을 표준화하여 RAG/QA 개선을 목표로 함.
