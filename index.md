---
layout: single
title: ""
classes: wide
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
      <p class="hello-desc">
        <strong>문서 이해가 어려운 현업 문제를 데이터·모델·시스템 관점에서 동시에 해결</strong>합니다.
        도메인 스키마 설계와 Chunking 기준 수립 → <strong>멀티모달 추출(표·그림·차트·다이어그램)</strong> → 지식 구조화 → 질의해결까지 반복 가능한 파이프라인을 만듭니다.
      </p>
      <p class="hello-desc">
        <strong>NLP·LLM</strong>: 규정/내규·법령·민원·기술문서에 대한 텍스트 분석, 도메인 프롬프트 설계, 파인튜닝(LoRA/Full-FT)·강화학습(DPO), LaTeX/수식 처리 및 스타일 보존.
      </p>
      <p class="hello-desc">
        <strong>Multimodal/VLM</strong>: <em>표 구조 복원(HTML)</em>, <em>차트/다이어그램 → Mermaid</em>, <em>이미지·Figure Captioning</em> 등 시각·텍스트 결합 이해를 통한 문서 구조화 및 검색성/활용성 향상.
      </p>
      <p class="hello-desc">
        <strong>평가·개선</strong>: LLM-as-a-Judge·루브릭 지표/샘플 설계, 자동 채점→오답 분석→재학습 <em>Close-the-Loop</em>로 정확도와 일관성 지속 개선.
      </p>
      <p class="hello-desc">
        <strong>운영</strong>: Airflow로 수집/전처리/학습/추론 파이프라인 자동화, ClearML로 실험·모델 관리, Prometheus·Grafana로 모니터링·알림 체계 구축.
      </p>
      <p class="hello-desc">
        <strong>모델 경험</strong>: GPT·Claude·Mistral·Phi·LLaMA·Gemma·Qwen/Qwen-VL 등 다양한 계열을 다뤄왔으며, <em>최신 기법과 멀티모달 스택</em>을 적극적으로 탐색·실험합니다.
      </p>
      <div class="hello-tags">
        <span>NLP·LLM</span><span>VLM</span><span>LoRA·FT</span><span>DPO</span>
        <span>Table HTML</span><span>Mermaid</span><span>LLM-as-a-Judge</span><span>LaTeX</span>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="section-head"><h2>Projects</h2></div>
  <div class="cards-grid">
    {% assign items = site.projects | sort: 'date' | reverse %}
    {% for post in items %}{% include card.html post=post %}{% endfor %}
  </div>
</section>

<section class="section">
  <div class="section-head"><h2>Tech</h2></div>
  <div class="cards-grid">
    {% assign items = site.tech | sort: 'date' | reverse %}
    {% for post in items %}{% include card.html post=post %}{% endfor %}
  </div>
</section>

<section class="section">
  <div class="section-head"><h2>Patents</h2></div>
  <div class="cards-grid">
    {% assign items = site.patents | sort: 'date' | reverse %}
    {% for post in items %}{% include card.html post=post %}{% endfor %}
  </div>
</section>
