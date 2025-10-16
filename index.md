---
layout: home
title: "Geonmin Lee"
excerpt: "LLM/VLM post-training · dataset curation · evaluation"
author_profile: true
classes: wide
---

### Featured Projects

<div class="grid__wrapper">
  {% for p in site.projects limit:4 %}
  <article class="archive__item" itemscope itemtype="https://schema.org/CreativeWork">
    <a href="{{ p.url | relative_url }}" class="archive__item-teaser">
      <img src="{{ p.thumb | relative_url }}" alt="{{ p.title }}">
    </a>
    <h2 class="archive__item-title">
      <a href="{{ p.url | relative_url }}">{{ p.title }}</a>
    </h2>
    <p class="archive__item-excerpt" itemprop="description">{{ p.excerpt }}</p>
  </article>
  {% endfor %}
</div>

[모든 프로젝트 보기 →](/projects/)
