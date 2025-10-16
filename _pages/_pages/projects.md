---
layout: archive
title: "Projects"
permalink: /projects/
---

{% assign list = site.projects | sort: 'date' | reverse %}
{% for p in list %}
  {% include archive-single.html type="grid" %}
{% endfor %}
