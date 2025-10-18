---
title: "표 → HTML 구조 복원: 주석 스키마"
date: 2025-10-18
categories: [Tech]
tags: [Table-Structure, HTML, Annotation]
excerpt: "bbox_norm, reading_order, rowspan/colspan 주석 규칙"
---

- 셀 단위 주석: `bbox_norm`, `rowspan`, `colspan`, `header` 플래그
- **reading_order**는 좌→우, 상→하 우선 + 병합 셀 예외 처리
- HTML 기준 레퍼런스와의 LCS 기반 구조 정확도 지표
