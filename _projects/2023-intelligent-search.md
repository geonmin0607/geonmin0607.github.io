---
title: "지능형 검색 서비스 개발"
subtitle: "의미 기반(Vector) 검색 · 데이터 모니터링"
date: 2023-12-31
show_date: false
categories: [Search, Retrieval]
tags: [FastAPI, Elasticsearch, Vector Similarity, Airflow, Prometheus, Grafana, Crawling]
institution: "<기관명>"
period: "2023.07.01 ~ 2023.12.31"
role: "검색 API 서버 개발 · 데이터 수집/모니터링 파이프라인"
models: ["Elasticsearch kNN/Vector Similarity"]
---

## 프로젝트 개요
특정 도메인 지식에 특화된 지능형 검색 서비스를 구축하여, 단순 키워드 검색이 아닌 **의미 기반 검색(Vector Similarity)**과 데이터 모니터링 기능을 제공.

## 본인이 기여한 점
- FastAPI 기반 검색 API 서버 개발 (Vector Similarity 적용)
- 약 **380개 웹사이트** 대상 데이터 수집 환경 구축 (스크래퍼·크롤러 설계)
- Airflow 기반 스케줄링 및 수집 자동화
- Prometheus·Grafana를 통한 데이터 모니터링 및 알림 시스템 구축

## 사용 기술
**Python**, **FastAPI**, **Elasticsearch / Vector Similarity Search**, **Airflow**, **Prometheus**, **Grafana**, **Web Crawling & Scraping**

## 결과 및 성과
- 매일 데이터 수집 현황을 **실시간으로 확인** 가능
- 사이트 구조 변경 시 수집 실패를 **빠르게 인지·조치**하여 **서비스 안정성** 확보
- 실제 서비스 적용 시 운영 효율성과 **데이터 품질 향상** 기여
