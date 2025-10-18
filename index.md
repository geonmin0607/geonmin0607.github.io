---
layout: single
title: ""
classes: wide
---

<section class="hello-hero two-col">
  <div class="hello-photo">
    <!-- Put your hero image at /assets/images/hero/profile.jpg -->
    <img src="/assets/images/hero/profile.jpg" alt="GEONMIN LEE portrait">
  </div>
  <div class="hello-card">
    <div class="hello-left">
      <p class="eyebrow">Hello, I'm</p>
      <h1 class="hello-title">GEONMIN LEE</h1>
      <p class="hello-sub">AI Engineer — LLM & Multimodal</p>
      <p class="hello-desc">
        문서·표·다이어그램·차트를 이해하는 모델과 RAG 파이프라인을 설계·구현합니다.
        데이터 전처리 → 파인튜닝/강화학습 → 평가까지 엔드투엔드로 수행합니다.
      </p>
      <div class="hello-tags">
        <span>LLM</span><span>Multimodal</span><span>RAG</span><span>LoRA/DPO</span><span>Qwen‑VL</span>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="section-head"><h2>Projects</h2></div>
  <div class="cards-grid">
    {% assign items = site.projects | sort: 'date' | reverse %}
    {% for post in items %}{% include card.html post=post %}{% endfor %}
  </div>
</section>

<section class="section">
  <div class="section-head"><h2>Tech</h2></div>
  <div class="cards-grid">
    {% assign items = site.tech | sort: 'date' | reverse %}
    {% for post in items %}{% include card.html post=post %}{% endfor %}
  </div>
</section>

<section class="section">
  <div class="section-head"><h2>Patents</h2></div>
  <div class="cards-grid">
    {% assign items = site.patents | sort: 'date' | reverse %}
    {% for post in items %}{% include card.html post=post %}{% endfor %}
  </div>
</section>
