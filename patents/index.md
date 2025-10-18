---
layout: single
title: "Patents"
permalink: /patents/
classes: wide
---
<div class="cards-grid">
  {% assign items = site.patents | sort: 'date' | reverse %}
  {% for post in items %}{% include card.html post=post %}{% endfor %}
</div>
