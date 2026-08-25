# Sitewide Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Bring the entire GitHub Pages portfolio into one 2026-style visual system aligned with the current Resume while preserving URLs, collections, and Resume behavior.

**Architecture:** Keep Jekyll + Minimal Mistakes and the existing Projects/Tech/Patents collections. Consolidate global styling into `portfolio.css`, keep home-specific styling in `custom.css`, minimize `override.css`, clean the CSS include order, then update home/about/navigation/content and add the 2026 QBS project. Validate by building Jekyll and checking representative pages plus Resume regression.

**Tech Stack:** Jekyll, Minimal Mistakes remote theme, Liquid, Markdown/HTML, CSS, vanilla JavaScript.

**Spec:** `docs/superpowers/specs/2026-08-25-sitewide-portfolio-redesign-design.md`

## Global Constraints

- Keep Jekyll + Minimal Mistakes; do not replace the theme.
- Preserve all existing public URLs.
- Do not add a JavaScript framework.
- Do not change the approved `resume_new.html` design.
- Do not add global print CSS.
- Do not invent performance or accuracy metrics.
- QBS facts must remain limited to: 2,418 similar-project records, 6,356 linked images, and image-count match rate 54% → 84%.
- Remove the old pink/purple/orange glow/glass visual language from the portfolio pages.
- Use a restrained slate/steel-blue design language consistent with the Resume.
- Eliminate negative viewport-margin/`100vw` breakout layout hacks that can cause horizontal overflow.

---

### Task 1: Normalize CSS loading and global design tokens

**Files:**
- Modify: `_includes/head/custom.html`
- Modify: `assets/css/portfolio.css`
- Modify: `assets/css/override.css`

**Interfaces:**
- Consumes: Minimal Mistakes base HTML structure and existing `Inter` font setup.
- Produces: one deterministic CSS load order and shared site tokens used by all later tasks.

- [ ] **Step 1: Record the current CSS include behavior**

Confirm `_includes/head/custom.html` currently loads `custom.css` more than once and loads `portfolio.css` plus `override.css`.

Run locally after checkout:

```bash
grep -n "assets/css" _includes/head/custom.html
```

Expected before change: multiple `custom.css` entries.

- [ ] **Step 2: Rewrite `_includes/head/custom.html` to a single load order**

Use exactly this responsibility order:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="{{ '/assets/css/portfolio.css' | relative_url }}">
<link rel="stylesheet" href="{{ '/assets/css/custom.css' | relative_url }}">
<link rel="stylesheet" href="{{ '/assets/css/override.css' | relative_url }}">
<script defer src="{{ '/assets/js/hub-carousel.js' | relative_url }}"></script>
```

- [ ] **Step 3: Replace `portfolio.css` with the shared design system**

Define site-wide tokens and common rules around these values:

```css
:root {
  --site-bg: #f3f5f7;
  --surface: #ffffff;
  --surface-soft: #f8fafc;
  --ink: #172033;
  --muted: #687586;
  --line: #dfe5ea;
  --line-strong: #cfd8e0;
  --accent: #3f627f;
  --accent-soft: #e8f0f4;
  --container: 1220px;
  --radius-sm: 10px;
  --radius-md: 14px;
  --shadow-sm: 0 6px 18px rgba(32, 47, 61, 0.05);
  --shadow-md: 0 14px 34px rgba(32, 47, 61, 0.08);
}
```

The file must own:

```text
body/html background + typography
central page container
masthead/header alignment
navigation links
buttons/tags
shared cards
article/detail typography
tables/code/blockquote/images
footer
responsive breakpoints
```

Do not add `.resume-*` rules.

- [ ] **Step 4: Reduce `override.css` to only unavoidable theme fixes**

Remove the current left-offset hack if the new shared container correctly aligns the header. Keep the file empty except for a comment if no override is required.

- [ ] **Step 5: Verify deterministic loading**

Run:

```bash
grep -n "custom.css" _includes/head/custom.html
grep -n "portfolio.css" _includes/head/custom.html
grep -n "override.css" _includes/head/custom.html
```

Expected: each stylesheet appears exactly once.

- [ ] **Step 6: Commit**

```bash
git add _includes/head/custom.html assets/css/portfolio.css assets/css/override.css
git commit -m "Refactor portfolio design system"
```

---

### Task 2: Rebuild home-specific styling without viewport hacks

**Files:**
- Modify: `assets/css/custom.css`
- Modify: `index.md`

**Interfaces:**
- Consumes: design tokens and shared card/button primitives from Task 1.
- Produces: responsive home hero and Projects/Tech/Patents hub with no horizontal overflow.

- [ ] **Step 1: Establish the failure condition**

Search for legacy effects/hacks that must disappear:

```bash
grep -nE "radial-gradient|blur\(|100vw|-50vw|f9a8d4|4f46e5|f97316" assets/css/custom.css
```

Expected before change: multiple matches.

- [ ] **Step 2: Replace `custom.css` with home-only styles**

Keep only selectors used by the home hero/hub/carousel:

```text
.hello-hero
.hello-photo
.hello-card / .hello-left
.eyebrow / .hello-title / .hello-sub / .hello-desc
.hello-actions / .hello-tags
.hub-row / .hub-grid / .hub-panel / .hub-panel-head
.hub-carousel / .hub-carousel-window / .hub-carousel-track / .hub-slide
.hub-nav / .hub-dots / .hub-dot
```

Requirements:
- no fixed blurred clouds
- no glass backdrop blur
- no `width: calc(100vw...)`
- no negative viewport margins
- desktop hero: image + content two columns
- desktop hub: three equal columns
- tablet/mobile: clean one/two-column fallback

- [ ] **Step 3: Simplify the home hero content in `index.md`**

Use this content hierarchy:

```text
Eyebrow: AI / AX ENGINEER
Title: GEONMIN LEE
Subtitle: LLM/VLM · RAG · Document AI
Summary: document/image-based AI, search/recommendation, fine-tuning and serving/operations
CTA: Projects / About / Resume
Tags: LLM/VLM, RAG, Document AI, Fine-tuning, AI/AX
```

Do not carry forward the old long-form Table→HTML / Mermaid / SMILES explanation in the hero.

- [ ] **Step 4: Keep the three home collection panels and carousel Liquid loops**

Preserve the loops over:

```liquid
site.projects
site.tech
site.patents
```

Do not alter `hub-carousel.js` unless the markup is incompatible.

- [ ] **Step 5: Verify legacy styles are gone**

Run:

```bash
! grep -nE "100vw|-50vw|f9a8d4|4f46e5|f97316|backdrop-filter" assets/css/custom.css
```

Expected: exit status 0.

- [ ] **Step 6: Commit**

```bash
git add assets/css/custom.css index.md
git commit -m "Redesign portfolio home page"
```

---

### Task 3: Improve shared cards for Projects, Tech Notes, and Patents

**Files:**
- Modify: `_includes/card.html`
- Modify: `assets/css/portfolio.css`

**Interfaces:**
- Consumes: `post.title`, `post.excerpt`, `post.tags`, `post.collection`, optional `post.header.teaser`, optional `post.period`.
- Produces: consistent `.portfolio-card` card markup and collection-aware metadata.

- [ ] **Step 1: Define card semantics in markup**

Use one article card structure with:

```html
<article class="portfolio-card">
  <!-- optional media -->
  <div class="portfolio-card__body">
    <div class="portfolio-card__meta">...</div>
    <h3 class="portfolio-card__title">...</h3>
    <div class="portfolio-card__excerpt">...</div>
    <div class="portfolio-card__tags">...</div>
  </div>
</article>
```

- [ ] **Step 2: Keep collection-specific behavior explicit**

Projects:
- category badge `Project`
- display `period` if present
- render excerpt

Tech:
- category badge `Tech Note`
- render tags as pills
- excerpt fallback when tags are absent

Patents:
- category badge `Patent`
- render excerpt

- [ ] **Step 3: Add matching card CSS to `portfolio.css`**

Requirements:
- white surface
- 1px border
- 12–14px radius
- restrained shadow
- hover lift no more than 2px
- teaser and text-only variants both balanced

- [ ] **Step 4: Verify Liquid variables are valid**

Run Jekyll build:

```bash
bundle exec jekyll build
```

Expected: build completes with no Liquid syntax error.

- [ ] **Step 5: Commit**

```bash
git add _includes/card.html assets/css/portfolio.css
git commit -m "Refresh portfolio collection cards"
```

---

### Task 4: Add the 2026 QBS project

**Files:**
- Create: `_projects/2026-qbs-similar-project-rag.md`

**Interfaces:**
- Consumes: Projects collection defaults from `_config.yml` and card rendering from Task 3.
- Produces: a new Project page and an item that automatically appears on the home Projects carousel.

- [ ] **Step 1: Create the project front matter**

Use:

```yaml
---
title: "LLM/VLM 기반 QBS 유사사업 검색·추천 데이터 파이프라인 개발"
date: 2026-08-21
period: "2026.06 ~ 2026.08"
excerpt: "엔지니어링 제안서(QBS)의 유사사업 정보를 구조화하여 신규 RFP 기반 유사사업 검색·추천에 활용할 RAG 데이터베이스를 구축한 프로젝트."
tags:
  - LLM/VLM
  - RAG
  - Document AI
  - PP-DocLayoutV3
---
```

- [ ] **Step 2: Write only source-supported project sections**

Use sections:

```markdown
## 프로젝트 개요
## 주요 역할
## 결과
## 기술 스택
```

Include only these verified facts:
- PyMuPDF·LLM section detection
- GPT-family VLM OCR/document structure extraction
- rule-based boundary splitting + LLM information extraction
- source comparison + LLM evaluation for hallucination/omission/boundary errors
- PP-DocLayoutV3 Fine-tuning
- Layout/OCR Anchor image mapping
- 2,418 similar-project records
- 6,356 linked images
- image expected-count/detected-count match rate 54% → 84%
- retrieval-ready structure for semantic search and Top-K recommendation

Do not claim measured retrieval-accuracy improvement.

- [ ] **Step 3: Build and verify route generation**

Run:

```bash
bundle exec jekyll build
find _site/projects -maxdepth 2 -type f | grep "2026-qbs-similar-project-rag"
```

Expected: generated HTML exists.

- [ ] **Step 4: Commit**

```bash
git add _projects/2026-qbs-similar-project-rag.md
git commit -m "Add QBS retrieval project"
```

---

### Task 5: Rewrite About around the current career narrative

**Files:**
- Modify: `about.md`
- Modify: `assets/css/portfolio.css`

**Interfaces:**
- Consumes: verified portfolio project history and shared article components.
- Produces: a 2026-current About page with concise sections and timeline styling.

- [ ] **Step 1: Replace the current long-form structure**

Use this page outline:

```markdown
# About intro (front matter title remains About)
## Core Capabilities
## Career / Growth Timeline
### 2023 — Search & Data Pipeline
### 2024 — RAG, Domain QA & DPO
### 2024–2025 — Building-domain QA & Evaluation Loop
### 2025–2026 — Multimodal Document AI
### 2026 — Engineering Proposal / QBS Retrieval & Recommendation
## Engineering Approach
```

- [ ] **Step 2: Rebalance outdated specialist topics**

Keep Chem OCR and Agent Orchestration as secondary experience only. Do not present them as the current core identity.

- [ ] **Step 3: Add lightweight timeline/article styles**

Add scoped classes or generic article rules in `portfolio.css`; avoid inline style blocks in `about.md` unless necessary.

- [ ] **Step 4: Build**

```bash
bundle exec jekyll build
```

Expected: no Markdown/Liquid build failure.

- [ ] **Step 5: Commit**

```bash
git add about.md assets/css/portfolio.css
git commit -m "Update About for current AI AX career"
```

---

### Task 6: Fix navigation and collection discovery

**Files:**
- Modify: `_data/navigation.yml`
- Inspect/Modify as needed: existing archive/index files for `/projects/`, `/tech/`, `/patents/`
- Create only if missing: `projects.md`, `tech.md`, `patents.md`

**Interfaces:**
- Consumes: collection permalinks configured in `_config.yml`.
- Produces: valid navigation links for Home, Projects, Tech Notes, Patents, About, Resume.

- [ ] **Step 1: Verify target pages exist**

Run:

```bash
find . -maxdepth 2 -type f \( -name "*.md" -o -name "*.html" \) | sort
```

Check whether collection archive pages for `/projects/`, `/tech/`, `/patents/` already exist.

- [ ] **Step 2: If missing, create minimal collection archives**

Each archive should use `layout: single`, `classes: wide`, its target permalink, and a simple Liquid grid that loops through the corresponding collection and includes `card.html`.

Example Projects body:

```liquid
<div class="collection-grid">
  {% assign items = site.projects | sort: 'date' | reverse %}
  {% for post in items %}
    {% include card.html post=post %}
  {% endfor %}
</div>
```

Repeat with `site.tech` and `site.patents` only if those pages are missing.

- [ ] **Step 3: Add Resume to navigation**

Final navigation order:

```yaml
main:
  - title: "Home"
    url: /
  - title: "Projects"
    url: /projects/
  - title: "Tech Notes"
    url: /tech/
  - title: "Patents"
    url: /patents/
  - title: "About"
    url: /about/
  - title: "Resume"
    url: /resume_new/
```

- [ ] **Step 4: Build and verify generated paths**

```bash
bundle exec jekyll build
for p in index.html about/index.html resume_new/index.html projects/index.html tech/index.html patents/index.html; do test -f "_site/$p" || exit 1; done
```

Expected: all required paths exist.

- [ ] **Step 5: Commit**

```bash
git add _data/navigation.yml projects.md tech.md patents.md 2>/dev/null || true
git commit -m "Improve portfolio navigation and archives"
```

---

### Task 7: Style article/detail pages and patent presentation

**Files:**
- Modify: `assets/css/portfolio.css`
- Modify only if wording is ambiguous: `_patents/2024-data-augment-validate.md`
- Modify only if wording is ambiguous: `_patents/2024-prompt-auto-gen.md`
- Modify archive/introduction page from Task 6 if needed.

**Interfaces:**
- Consumes: Minimal Mistakes `.page__content`, project/tech/patent Markdown output.
- Produces: consistent readable detail pages without changing URLs or unsupported claims.

- [ ] **Step 1: Add article surface styles**

Target:

```text
.page__inner-wrap
.page__content h1/h2/h3
.page__content p/li
.page__content blockquote
.page__content pre/code
.page__content table
.page__content img
```

Avoid selectors that override `.resume-wrapper` or `.resume-*`.

- [ ] **Step 2: Clarify patent collection presentation**

On the Patents archive, explain that the portfolio currently exposes representative patent pages while the Resume summary lists four filings. Do not fabricate titles for filings that do not have source pages.

- [ ] **Step 3: Build**

```bash
bundle exec jekyll build
```

Expected: project, tech, and patent detail pages render without Liquid/build errors.

- [ ] **Step 4: Commit**

```bash
git add assets/css/portfolio.css _patents patents.md 2>/dev/null || true
git commit -m "Polish portfolio detail pages"
```

---

### Task 8: Refresh 404 and footer-level polish

**Files:**
- Modify: `404.html`
- Modify: `assets/css/portfolio.css`

**Interfaces:**
- Consumes: shared surface/button tokens from Task 1.
- Produces: branded 404 page and consistent footer treatment.

- [ ] **Step 1: Replace bare 404 markup**

Use a centered `.not-found` surface with:

```text
404
페이지를 찾을 수 없습니다.
홈으로 돌아가기 button
```

Link the CTA to `/`.

- [ ] **Step 2: Add `.not-found` styling and ensure footer alignment**

Use the shared container, border, radius, and button styles only.

- [ ] **Step 3: Build**

```bash
bundle exec jekyll build
```

Expected: `_site/404.html` exists.

- [ ] **Step 4: Commit**

```bash
git add 404.html assets/css/portfolio.css
git commit -m "Polish portfolio 404 and footer"
```

---

### Task 9: Regression verification across all page types

**Files:**
- Inspect: generated `_site/`
- Do not modify unless verification finds a defect.

**Interfaces:**
- Consumes: all completed tasks.
- Produces: evidence that build, routes, CSS loading, responsive safety, and Resume protection hold.

- [ ] **Step 1: Clean build**

```bash
rm -rf _site
bundle exec jekyll build
```

Expected: successful build.

- [ ] **Step 2: Verify required pages**

```bash
for p in \
  index.html \
  about/index.html \
  resume_new/index.html \
  projects/index.html \
  tech/index.html \
  patents/index.html \
  404.html; do
  test -f "_site/$p" || { echo "missing $p"; exit 1; }
done
```

- [ ] **Step 3: Verify all collection source entries generated**

```bash
find _projects _tech _patents -type f -name '*.md' -print
find _site/projects _site/tech _site/patents -type f -name 'index.html' -print
```

Expected: generated entries cover the source collections, including the new QBS project.

- [ ] **Step 4: Verify no duplicate stylesheet inclusion**

```bash
for css in portfolio.css custom.css override.css; do
  test "$(grep -o "$css" _site/index.html | wc -l)" -eq 1 || exit 1
done
```

- [ ] **Step 5: Verify prohibited viewport hacks are absent**

```bash
! grep -RInE "width:[[:space:]]*calc\(100vw|margin-left:[[:space:]]*calc\(-50vw|backdrop-filter:[[:space:]]*blur" assets/css
```

- [ ] **Step 6: Verify Resume source remains unchanged from approved SHA**

Expected approved blob SHA:

```text
2261affa72e00d6ac1d7d090ee6dd9a41bb77de2
```

Check GitHub/blob state or local git diff and confirm `resume_new.html` was not changed by the redesign tasks.

- [ ] **Step 7: Manual browser checklist**

Open representative pages in desktop and narrow mobile viewport:

```text
/
/about/
/resume_new/
/projects/2026-qbs-similar-project-rag/
/projects/2025-multimodal-docai/
/tech/2025-qwen-vl-lora-vision-prior/
/patents/2024-data-augment-validate/
/404.html
```

Check:
- no horizontal scrolling
- navigation is readable and wraps/collapses correctly
- cards align consistently
- carousel arrows/dots function
- article line length is readable
- Resume design remains the approved version

- [ ] **Step 8: Commit any verification-only corrections**

If a defect is found, fix only that defect, rerun the relevant checks, then commit with a focused message. If no defect is found, do not create an empty commit.

---

## Plan Self-Review

- Spec coverage: global design system, CSS cleanup, home, cards, QBS project, About, navigation, archives, detail pages, patents, 404, responsive behavior, Resume protection, and verification are all assigned to explicit tasks.
- Placeholder scan: no TBD/TODO/“implement later” instructions remain.
- Interface consistency: card markup is established before home/archive/detail usage; global design tokens are established before page-specific styling; navigation archive creation occurs before final route verification.
