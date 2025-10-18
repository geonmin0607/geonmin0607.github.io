---
layout: single
title: " "
classes: wide
---

<div style="text-align:center; margin: 28px 0 36px;">
  <h1 style="margin-bottom:8px;">GEONMIN LEE — AI 엔지니어</h1>
  <p style="font-size:1.15rem; color:#4b5563;">LLM · Multimodal Portfolio — 문서·표·다이어그램 이해와 RAG까지, 엔드투엔드로 다룹니다.</p>
</div>

## Projects
<div class="grid__wrapper">
{% assign items = site.projects | sort: 'date' | reverse %}
{% for post in items limit: 12 %}
  {% include archive-single.html type="grid" %}
{% endfor %}
</div>

## Tech
<div class="grid__wrapper">
{% assign items = site.tech | sort: 'date' | reverse %}
{% for post in items limit: 12 %}
  {% include archive-single.html type="grid" %}
{% endfor %}
</div>

## Patents
<div class="grid__wrapper">
{% assign items = site.patents | sort: 'date' | reverse %}
{% for post in items limit: 12 %}
  {% include archive-single.html type="grid" %}
{% endfor %}
</div>
