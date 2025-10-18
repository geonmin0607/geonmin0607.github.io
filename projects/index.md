---
layout: single
title: "Projects"
permalink: /projects/
classes: wide
---
<div class="cards-grid">
  {% assign items = site.projects | sort: 'date' | reverse %}
  {% for post in items %}{% include card.html post=post %}{% endfor %}
</div>
