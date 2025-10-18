---
title: "문서 분석 기반 Multimodal PoC"
subtitle: "표→HTML, 이미지/차트→Captioning, 다이어그램→Mermaid"
date: 2025-10-01
show_date: false
categories: [PoC, Multimodal]
tags: [Qwen2.5-VL, Qwen3-VL, LoRA, Curriculum, ClearML, RAG]
institution: "<기관명>"
period: "2025.03 ~ (진행 중)"
role: "데이터셋 구축부터 모델링까지 전체 파이프라인 주도"
models:
  - "Qwen2.5-VL/Qwen3-VL (LoRA 파인튜닝, Vision Prior)"
  - "커리큘럼 러닝(해상도 단계), RAG 결합"
---

## 프로젝트 개요
멀티모달 LLM을 활용하여 문서 내 **표·이미지·차트·다이어그램**을 분석·추출.  
표는 **HTML 구조**로, Figure는 **Captioning**으로, Chart·Diagram은 **Mermaid 코드**로 변환하여 **RAG/QA 정확도 향상**을 목표.

## 본인이 기여한 점
- **학습 데이터셋 구축부터 모델링까지** 전체 파이프라인 주도
- **표 구조 추출 → HTML 변환**, **다이어그램 → Mermaid 변환**, **이미지/차트 → Captioning** 설계
- **RAG와 결합**하여 QA 정확도를 높일 수 있는 구조 설계

## 사용 기술
**Python, PyTorch, Hugging Face, LoRA 파인튜닝, Curriculum Learning, Vision-Language Modeling, RAG, ClearML, GPU 리소스 모니터링/할당**

## 결과 및 성과
- 현재 **PoC 단계**로, 멀티모달 기반 문서 분석 **정확도 개선 가능성 확인**
- **Vision Prior 연구**(비전 정보 가중치 강화) 적용으로 **hallucination 억제** 효과 관찰
