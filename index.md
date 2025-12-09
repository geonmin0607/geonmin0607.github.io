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
        <strong>텍스트 기반 검색·QA에서 시작해, 멀티모달 문서(표·차트·이미지)까지 확장한 AI 엔지니어</strong>입니다.<br>
        규정·법령·민원 문서를 이해하는 LLM/RAG 파이프라인을 만들고,<br>
        이제는 표→HTML, 다이어그램·차트→Mermaid, 화학 구조→SMILES까지 다루는<br>
        멀티모달·Agent 기반 문서 이해 플랫폼을 설계·구현하고 있습니다.
      </p>
      <ul class="hello-list">
        <li><strong>NLP·LLM</strong>: 규정·법령·기술문서에 특화된 스키마/프롬프트 설계, LoRA/Full-FT, DPO 및 스타일 보존(LaTeX/수식) 처리.</li>
        <li><strong>Multimodal/VLM</strong>: <em>표 구조 복원(HTML)</em>, <em>차트·다이어그램 → Mermaid</em>, <em>이미지 Captioning</em> 등 시각-텍스트 결합으로 문서 구조화·검색성 향상.</li>
        <li><strong>평가·개선</strong>: LLM-as-a-Judge/루브릭 기반 품질 점검, 자동 채점→오답 분석→재학습 <em>Close-the-Loop</em>로 정확도와 일관성 지속 개선.</li>
        <li><strong>운영·신뢰성</strong>: Airflow 파이프라인 자동화, ClearML 실험·모델 관리, Prometheus·Grafana 모니터링·알림으로 재현성과 안정성 확보.</li>
        <li><strong>모델 스택</strong>: GPT·Claude·Mistral·Phi·LLaMA·Gemma·Qwen/Qwen-VL 등 다양한 계열을 검증하며 최신 기법을 적극 실험.</li>
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
