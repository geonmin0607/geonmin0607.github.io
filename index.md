---
layout: single
title: ""
classes: wide
permalink: /
---

<section class="hello-hero">
  <div class="hello-photo">
    <img src="{{ '/assets/images/hero/profile.jpg' | relative_url }}" alt="GEONMIN LEE portrait">
  </div>

  <div class="hello-card">
    <div class="hello-left">
      <p class="eyebrow">AI / AX Engineer</p>
      <h1 class="hello-title">GEONMIN LEE</h1>
      <p class="hello-sub">LLM/VLM · RAG · Document AI</p>
      <p class="hello-desc">
        문서·이미지 기반 AI와 생성형 QA를 중심으로, 비정형 문서를 구조화하고 검색·추천에 연결하는 파이프라인을 설계·개발합니다.
        LLM/VLM 파인튜닝, RAG 데이터 구축, 평가·검증, API 서빙과 운영까지 실제 서비스 흐름 전체를 다뤄 왔습니다.
      </p>

      <div class="hello-actions">
        <a class="button primary" href="{{ '/projects/' | relative_url }}">Projects</a>
        <a class="button" href="{{ '/about/' | relative_url }}">About</a>
        <a class="button ghost" href="{{ '/resume_new/' | relative_url }}">Resume</a>
      </div>

      <div class="hello-tags">
        <span>LLM/VLM</span>
        <span>RAG</span>
        <span>Document AI</span>
        <span>Fine-tuning</span>
        <span>AI/AX</span>
      </div>
    </div>
  </div>
</section>

<section class="section hub-row" id="home-hub">
  <div class="hub-grid">

    <div class="hub-panel" id="projects">
      <div class="hub-panel-head">Projects</div>
      <div class="hub-carousel">
        <button class="hub-nav hub-prev" type="button" aria-label="Previous">‹</button>
        <div class="hub-carousel-window">
          <div class="hub-carousel-track">
            {% assign items = site.projects | sort: 'date' | reverse %}
            {% for post in items %}
              <div class="hub-slide">{% include card.html post=post %}</div>
            {% endfor %}
          </div>
        </div>
        <button class="hub-nav hub-next" type="button" aria-label="Next">›</button>
      </div>
      <div class="hub-dots"></div>
    </div>

    <div class="hub-panel" id="tech">
      <div class="hub-panel-head">Tech Notes</div>
      <div class="hub-carousel">
        <button class="hub-nav hub-prev" type="button" aria-label="Previous">‹</button>
        <div class="hub-carousel-window">
          <div class="hub-carousel-track">
            {% assign items = site.tech | sort: 'date' | reverse %}
            {% for post in items %}
              <div class="hub-slide">{% include card.html post=post %}</div>
            {% endfor %}
          </div>
        </div>
        <button class="hub-nav hub-next" type="button" aria-label="Next">›</button>
      </div>
      <div class="hub-dots"></div>
    </div>

    <div class="hub-panel" id="patents">
      <div class="hub-panel-head">Patents</div>
      <div class="hub-carousel">
        <button class="hub-nav hub-prev" type="button" aria-label="Previous">‹</button>
        <div class="hub-carousel-window">
          <div class="hub-carousel-track">
            {% assign items = site.patents | sort: 'date' | reverse %}
            {% for post in items %}
              <div class="hub-slide">{% include card.html post=post %}</div>
            {% endfor %}
          </div>
        </div>
        <button class="hub-nav hub-next" type="button" aria-label="Next">›</button>
      </div>
      <div class="hub-dots"></div>
    </div>

  </div>
</section>
