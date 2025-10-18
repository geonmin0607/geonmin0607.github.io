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

## 1. 진행기간
2025.03 ~ (진행 중)

## 2. 주요내용
멀티모달 LLM을 활용하여 문서 내 **표·이미지·차트·다이어그램**을 분석·추출. 표는 **HTML 구조**, Figure는 **Captioning**, Chart·Diagram은 **Mermaid 코드**로 변환하여 **RAG 시스템 및 QA 모델의 정확도 향상**을 목표로 함

## 3. 본인이 기여한 점
- **학습 데이터셋 구축부터 모델링까지** 전체 파이프라인 주도
- **표 구조 추출 → HTML 변환**, **다이어그램 → Mermaid 변환**, **이미지/차트 → Captioning** 설계
- **RAG와 결합**하여 QA 정확도를 높일 수 있는 구조 설계

## 4. 사용한 기술스택 및 지식
Python, PyTorch, Hugging Face, LoRA 파인튜닝, Curriculum Learning, Vision-Language Modeling, RAG, ClearML, GPU Resource Monitoring & Allocation

## 5. 결과 및 성과
- 현재 **PoC 단계**로, 멀티모달 기반 문서 분석 **정확도 개선 가능성 확인**
- **Vision Prior** 연구(비전 정보에 가중치 강화)를 적용하여 **hallucination 억제** 효과 관찰
