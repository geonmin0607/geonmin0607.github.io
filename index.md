---
layout: single
title: ""
classes: wide
permalink: /
---

<section class="hello-hero two-col"> 
  <div class="hello-photo">
    <img src="{{ '/assets/images/hero/profile.jpg' | relative_url }}" alt="GEONMIN LEE portrait">
  </div>
  <div class="hello-card">
    <div class="hello-left">
      <p class="eyebrow">Hello, I'm</p>
      <h1 class="hello-title">GEONMIN LEE</h1>
      <p class="hello-sub">AI Engineer — LLM & Multimodal</p>
      <p class="hello-desc lead">
        <strong>텍스트 기반 검색·QA에서 시작해, 지금은 멀티모달 문서(표·차트·이미지)까지 다루는 AI 엔지니어</strong>입니다.<br>
        규정·법령·민원 문서를 이해하는 LLM/RAG 파이프라인을 설계해 왔고,<br>
        표→HTML, 다이어그램·차트→Mermaid, 화학 구조→SMILES로 문서를 구조화하고 있습니다.
      </p>
      <ul class="hello-list">
        <li><strong>NLP·LLM</strong>: 규정·법령·기술문서용 스키마·프롬프트 설계, LoRA/Full-FT, DPO, LaTeX/수식 처리.</li>
        <li><strong>Multimodal/VLM</strong>: 표 구조 HTML 복원, 차트·다이어그램→Mermaid, 이미지 Captioning으로 문서 구조화·검색성 개선.</li>
        <li><strong>평가·개선</strong>: 데이터 샘플을 직접 확인해 오류 유형을 나누고 평가지표를 설계한 뒤, LLM-as-a-Judge·자동 채점·재학습 Close-the-Loop로 품질을 반복적으로 개선.</li>
        <li><strong>운영·모니터링</strong>: Airflow·ClearML·Prometheus·Grafana로 파이프라인 자동화, 실험·모델 관리, 모니터링·알림 운영.</li>
      </ul>
      <div class="hello-actions">
        <a class="button primary" href="#projects">Projects</a>
        <a class="button" href="#tech">Tech</a>
        <a class="button ghost" href="#patents">Patents</a>
        <a class="button" href="/about/">Resume</a>
      </div>
      <div class="hello-tags">
        <span>NLP·LLM</span><span>VLM</span><span>LoRA·FT</span><span>DPO</span>
        <span>Table HTML</span><span>Mermaid</span><span>LLM-as-a-Judge</span><span>LaTeX</span>
      </div>
    </div>
  </div>
</section>

<section class="section" id="projects">
  <div class="section-head"><h2>Projects</h2></div>
  <div class="cards-grid">
    {% assign items = site.projects | sort: 'date' | reverse %}
    {% for post in items %}{% include card.html post=post %}{% endfor %}
  </div>
</section>

<section class="section" id="tech">
  <div class="section-head"><h2>Tech</h2></div>
  <div class="cards-grid">
    {% assign items = site.tech | sort: 'date' | reverse %}
    {% for post in items %}{% include card.html post=post %}{% endfor %}
  </div>
</section>

<section class="section" id="patents">
  <div class="section-head"><h2>Patents</h2></div>
  <div class="cards-grid">
    {% assign items = site.patents | sort: 'date' | reverse %}
    {% for post in items %}{% include card.html post=post %}{% endfor %}
  </div>
</section>
