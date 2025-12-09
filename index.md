---
layout: single
title: ""
classes: wide
permalink: /
---

<section class="hello-hero two-col"> 
  <div class="hello-photo">
    <img src="{{ '/assets/images/hero/profile.jpg' | relative_url }}" alt="GEONMIN LEE portrait">
  </div>
  <div class="hello-card">
    <div class="hello-left">
      <p class="eyebrow">Hello, I'm</p>
      <h1 class="hello-title">GEONMIN LEE</h1>
      <p class="hello-sub">AI Engineer — LLM & Multimodal</p>
      <br>
      <p class="hello-desc">
        <strong>텍스트 기반 검색·QA에서 시작해, 지금은 멀티모달 문서(표·차트·이미지)까지 다루는 AI 엔지니어</strong>입니다.<br>
        규정·법령·민원 문서를 이해하는 LLM/RAG 파이프라인을 설계해 왔고,<br>
        표→HTML, 다이어그램·차트→Mermaid, 화학 구조→SMILES로 문서를 구조화하고 있습니다.
      </p>
      <ul class="hello-list">
        <li><strong>NLP·LLM</strong>: 규정·법령·기술문서용 스키마·프롬프트 설계, LoRA/Full-FT, DPO, LaTeX/수식 처리.</li>
        <li><strong>Multimodal/VLM</strong>: 표 구조 HTML 복원, 차트·다이어그램→Mermaid, 이미지 Captioning으로 문서 구조화·검색성 개선.</li>
        <li><strong>평가·개선</strong>: 데이터 샘플을 직접 확인해 오류 유형을 나누고 평가지표를 설계한 뒤, LLM-as-a-Judge·자동 채점·재학습 Close-the-Loop로 품질을 반복적으로 개선.</li>
        <li><strong>운영·모니터링</strong>: Airflow·ClearML·Prometheus·Grafana로 파이프라인 자동화, 실험·모델 관리, 모니터링·알림 운영.</li>
      </ul>
      <div class="hello-actions">
        <a class="button primary" href="#projects">Projects</a>
        <a class="button" href="#tech">Tech Notes</a>
        <a class="button ghost" href="#patents">Patents</a>
      </div>
      <div class="hello-tags">
        <span>NLP·LLM</span><span>VLM</span><span>LoRA·FT</span><span>DPO</span>
        <span>Table HTML</span><span>Mermaid</span><span>LLM-as-a-Judge</span><span>LaTeX</span>
      </div>
    </div>
  </div>
</section>




<section class="section section-hub" id="home-hub">
  <div class="hub-tabs">
    <button class="hub-tab is-active" data-target="projects">Projects</button>
    <button class="hub-tab" data-target="tech">Tech Notes</button>
    <button class="hub-tab" data-target="patents">Patents</button>
  </div>

  <div class="hub-panels">
    <!-- Projects 패널 -->
    <div class="hub-panel is-active" data-panel="projects">
      <div class="hub-carousel">
        <button class="hub-nav hub-prev" type="button" aria-label="Previous">‹</button>
        <div class="hub-carousel-window">
          <div class="hub-carousel-track">
            {% assign items = site.projects | sort: 'date' | reverse %}
            {% for post in items %}
            <div class="hub-slide">
              {% include card.html post=post %}
            </div>
            {% endfor %}
          </div>
        </div>
        <button class="hub-nav hub-next" type="button" aria-label="Next">›</button>
      </div>
      <div class="hub-dots"></div>
    </div>

    <!-- Tech Notes 패널 -->
    <div class="hub-panel" data-panel="tech">
      <div class="hub-carousel">
        <button class="hub-nav hub-prev" type="button" aria-label="Previous">‹</button>
        <div class="hub-carousel-window">
          <div class="hub-carousel-track">
            {% assign items = site.tech | sort: 'date' | reverse %}
            {% for post in items %}
            <div class="hub-slide">
              {% include card.html post=post %}
            </div>
            {% endfor %}
          </div>
        </div>
        <button class="hub-nav hub-next" type="button" aria-label="Next">›</button>
      </div>
      <div class="hub-dots"></div>
    </div>

    <!-- Patents 패널 -->
    <div class="hub-panel" data-panel="patents">
      <div class="hub-carousel">
        <button class="hub-nav hub-prev" type="button" aria-label="Previous">‹</button>
        <div class="hub-carousel-window">
          <div class="hub-carousel-track">
            {% assign items = site.patents | sort: 'date' | reverse %}
            {% for post in items %}
            <div class="hub-slide">
              {% include card.html post=post %}
            </div>
            {% endfor %}
          </div>
        </div>
        <button class="hub-nav hub-next" type="button" aria-label="Next">›</button>
      </div>
      <div class="hub-dots"></div>
    </div>
  </div>
</section>
