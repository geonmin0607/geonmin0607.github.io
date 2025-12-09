---
title: "Qwen-VL / DeepSeek-OCR LoRA·QLoRA & Vision Prior"
layout: single
categories: [TechNotes]
tags: [qwen-vl, deepseek-ocr, lora, qlora]
---

## 한 줄 소개

Qwen-VL, DeepSeek-OCR 계열 모델을  
LoRA/QLoRA로 **표·Mermaid·SMILES 전용 모델**로 튜닝하고,  
이미지 정보를 더 잘 쓰도록 **Vision Prior**를 조정했습니다.

## 내가 맡은 역할

- Qwen-VL 계열에 대해 태스크별(표/캡션/화학 구조) **LoRA/QLoRA 전략** 설계
- 멀티모달 태스크에서 이미지 정보를 더 잘 반영하도록  
  학습 영역, 해상도, 토큰 구성을 조정하는 **Vision Prior 세팅** 실험
- 튜닝된 모델을 개별 API로 분리해, 에이전트가 **도구처럼 호출**할 수 있는 형태로 정리

## 키워드

- Qwen-VL / DeepSeek-OCR 파인튜닝
- LoRA·QLoRA 운용
- Vision Prior / 멀티모달 태스크
