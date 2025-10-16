---
title: "Table-to-HTML Extractor"
excerpt: "Qwen2.5-VL + QLoRA · 구조 복원 VLM 파이프라인"
thumb: /assets/images/thumb-table.png
tags: [VLM, Qwen, QLoRA, Document AI]
---

**목표**: 문서 이미지에서 **표 구조를 HTML로 복원**  
**데이터 파이프라인**: PDF→이미지 → CRAFT/YOLO → table crop → JSON schema(bbox_norm/px)  
**모델**: Qwen2.5-VL-32B, Vision-Frozen, Attention-only LoRA  
**학습 전략**: 커리큘럼(448→896→1232), loss-masking, Vision-prior 프롬프트  
**평가**: token-level precision, 구조 정합(HTML diff), hallucination rate ↓

- 코드: [GitHub](https://github.com/…)  
- 상세: [Notion](https://www.notion.so/your-table-extractor-link)  
- 데모: [HF Space](https://huggingface.co/spaces/…)
