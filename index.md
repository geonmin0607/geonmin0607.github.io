---
layout: single
title: ""
classes: wide
---

<section class="hero">
  <h1>GEONMIN LEE — AI 엔지니어</h1>
  <p class="hero-sub">LLM · Multimodal Portfolio — 문서·표·다이어그램 이해와 RAG까지, 엔드투엔드로 다룹니다.</p>
</section>

<section class="section">
  <div class="section-head">
    <h2>Projects</h2>
  </div>
  <div class="grid__wrapper cards">
    {% assign items = site.projects | sort: 'date' | reverse %}
    {% for post in items %}
      {% include archive-single.html type="grid" %}
    {% endfor %}
  </div>
</section>

<section class="section">
  <div class="section-head">
    <h2>Tech</h2>
  </div>
  <div class="grid__wrapper cards">
    {% assign items = site.tech | sort: 'date' | reverse %}
    {% for post in items %}
      {% include archive-single.html type="grid" %}
    {% endfor %}
  </div>
</section>

<section class="section">
  <div class="section-head">
    <h2>Patents</h2>
  </div>
  <div class="grid__wrapper cards">
    {% assign items = site.patents | sort: 'date' | reverse %}
    {% for post in items %}
      {% include archive-single.html type="grid" %}
    {% endfor %}
  </div>
</section>
