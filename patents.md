---
layout: single
title: "Patents"
permalink: /patents/
classes: wide
---

현재 포트폴리오에는 대표 특허 페이지를 공개하고 있습니다. 이력서 기준 특허 출원은 총 4건이며, 아래 상세 페이지는 공개 가능한 대표 항목입니다.

<div class="collection-grid">
  {% assign items = site.patents | sort: 'date' | reverse %}
  {% for post in items %}
    {% include card.html post=post %}
  {% endfor %}
</div>
