---
layout: single
title: ""
classes: wide
---

<section class="feature-row">
  <article class="feature-intro">
    <h1 class="feature-title">AI Engineer — GEONMIN LEE</h1>
    <p class="feature-desc">
      LLM · Multimodal Portfolio — 문서·표·다이어그램·차트를 이해하는 모델과
      RAG 파이프라인을 설계·구현하고, 데이터 전처리·파인튜닝·강화학습·평가까지
      엔드투엔드로 수행합니다.
    </p>
    <div class="feature-author">
      <span class="label">Written by</span>
      <span class="name">GEONMIN LEE</span>
    </div>
  </article>
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
