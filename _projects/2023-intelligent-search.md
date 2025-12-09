---
title: "지능형 검색 서비스 개발"
subtitle: "의미 기반(Vector) 검색 · 데이터 모니터링"
date: 2023-12-31
show_date: false
categories: [Projects]
tags: [FastAPI, Elasticsearch, Vector Similarity, Airflow, Prometheus, Grafana, Crawling]
excerpt: |
  <ul class="excerpt-list">
    <li><strong>기간:</strong> 2023.07.01 ~ 2023.12.31</li></br>
    <li>의미 기반(Vector) 검색 + 데이터 수집/모니터링</li></br>
    <li>FastAPI · Elasticsearch · Airflow · Prometheus · Grafana</li>
  </ul>
---



## 개요

기관·기업 웹사이트 약 380개에서 데이터를 수집해  
**의미 기반(Vector) 검색을 지원하는 지능형 검색 서비스**를 구축한 프로젝트입니다.

## 진행기간
2023.07.01 ~ 2023.12.31

## 배경 / 문제

- 기존 키워드 검색만으로는 문서 내용과 의도를 제대로 찾기 어려움
- 사이트마다 구조가 달라 수동 수집·업데이트에 많은 인력·시간이 소요됨
- 검색 품질과 인덱싱 상태를 모니터링할 수 있는 체계가 부족함

## 내가 한 일

- 약 380개 웹사이트에 대한 **크롤러/스크래퍼 설계·구현**
  - 사이트 유형별 파서 모듈 분리, 에러·중복 처리 로직 설계
- **FastAPI 기반 검색 API** 구현
  - BM25 + 벡터 검색(의미 검색) 혼합 구조 설계
  - 쿼리 전처리, 스코어 조합 로직, 페이징·정렬 등 API 스펙 정의
- **Airflow 파이프라인**으로 수집·인덱싱 작업 자동화
  - 크롤링 → 전처리 → 인덱싱 → 품질 체크까지 DAG로 구성
- **Prometheus·Grafana 모니터링 대시보드** 설계
  - 인덱스 문서 수, 실패율, 응답 시간, 에러 로그 등 지표 수집·시각화

## 결과 / 성과

- 신규 문서가 올라오면 **자동으로 수집·색인**되는 구조를 구축
- 키워드 기반 검색 대비, 도메인 문서 검색 품질 체감 개선
- 장애·지연 상황을 빠르게 파악할 수 있는 모니터링 체계 도입

## 사용 기술

- Python, FastAPI
- Elasticsearch (BM25 + Vector Search)
- Airflow
- Prometheus, Grafana
