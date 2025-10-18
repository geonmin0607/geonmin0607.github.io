---
title: "LoRA/QLoRA로 Qwen-VL 파인튜닝 메모"
date: 2025-10-18
categories: [Tech]
tags: [LoRA, QLoRA, Qwen-VL, Multimodal]
excerpt: "멀티모달 파인튜닝 팁: 해상도 커리큘럼, 비전 프라이어, 배치 메모리 관리"
---

- LoRA r=32, α=64 기준으로 **Vision Prior** 적용 시 안정성 향상
- 해상도 커리큘럼(저→중→고)로 수렴 속도 개선
- 캡션/레이블 불균형 시 temperature scaling으로 완화
