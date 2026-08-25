---
layout: single
title: "Tech Notes"
permalink: /tech/
classes: wide
---

<div class="collection-grid">
  {% assign items = site.tech | sort: 'date' | reverse %}
  {% for post in items %}
    {% include card.html post=post %}
  {% endfor %}
</div>
