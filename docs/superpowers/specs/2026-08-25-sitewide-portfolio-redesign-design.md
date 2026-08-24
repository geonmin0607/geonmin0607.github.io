# Sitewide Portfolio Redesign Design

## 목표

`https://geonmin0607.github.io/` 전체를 현재 Resume의 2026년식 시각 언어와 일관되게 정리한다. 기존 Jekyll/Minimal Mistakes 구조와 Projects·Tech·Patents 컬렉션은 유지하되, 오래된 파스텔/글라스 스타일과 중복 CSS를 제거하고 홈·About·컬렉션 상세·카드·404·Footer까지 하나의 디자인 시스템으로 통일한다.

## 비목표

- Jekyll 테마 자체를 교체하지 않는다.
- 콘텐츠 사실관계를 임의로 부풀리지 않는다.
- Resume 페이지의 현재 확정 디자인은 변경하지 않는다.
- 기존 URL 구조를 깨지 않는다.
- 불필요한 JavaScript 프레임워크를 추가하지 않는다.

## 현재 구조 요약

- Jekyll + Minimal Mistakes remote theme
- 주요 콘텐츠
  - `/` : `index.md`
  - `/about/` : `about.md`
  - `/resume_new/` : `resume_new.html`
  - `_projects/` : Projects 컬렉션
  - `_tech/` : Tech Notes 컬렉션
  - `_patents/` : Patents 컬렉션
- 공통 스타일
  - `assets/css/portfolio.css`
  - `assets/css/custom.css`
  - `assets/css/override.css`
- 공통 카드
  - `_includes/card.html`
- 공통 CSS 로딩
  - `_includes/head/custom.html`

현재 `custom.css`에는 동일 컴포넌트 스타일이 여러 번 재정의되어 있고, `portfolio.css`와 배경·폭·카드·레이아웃 규칙이 중복된다. 홈은 보라/분홍/주황 그라데이션과 글라스 효과 중심인데, Resume는 slate/steel-blue 기반의 절제된 스타일이라 사이트 일관성이 떨어진다.

## 디자인 방향

### 컬러

Resume와 같은 계열을 사용한다.

- Page background: `#f3f5f7` 또는 동급의 매우 옅은 slate
- Surface: `#ffffff`
- Primary text: `#172033`
- Secondary text: `#687586`
- Border: `#dfe5ea`
- Accent: `#3f627f` 계열 steel/slate blue
- Accent soft: `#e8f0f4`
- Panel: `#f8fafc`

분홍·보라·주황 그라데이션, 강한 glow, 큰 blur cloud는 제거한다.

### 타이포그래피

- 기존 Inter 계열 유지
- 제목은 굵기와 크기로 계층을 명확히 하고, 색상은 대부분 ink/accent 두 계열로 제한
- 본문은 충분한 line-height를 유지하되 카드와 상세 페이지에서 과도하게 넓은 행 길이를 제한

### 모서리/그림자

- 카드 radius는 10~14px 수준
- 그림자는 얕고 넓게 사용
- hover는 약한 translateY와 border/shadow 변화만 적용
- glassmorphism/backdrop blur는 제거

## 레이아웃

### 공통 컨테이너

현재 `100vw` 탈출과 음수 margin 기반 폭 확장 코드를 제거하고, 모든 페이지에서 안정적인 중앙 컨테이너를 사용한다.

- 최대 폭: 약 1180~1240px
- 데스크톱 좌우 여백: 24~32px
- 모바일 좌우 여백: 16px
- 가로 스크롤이 생기지 않아야 한다.

### Header / Navigation

- 기존 Minimal Mistakes header 구조는 유지
- Home / Projects / Tech Notes / Patents / About / Resume 동선을 명확히 노출
- 사이트 제목과 메뉴를 같은 컨테이너 baseline에 정렬
- 현재 `override.css`의 header offset hack은 필요 여부를 검증 후 제거 또는 최소화

### Footer

- 흰색 또는 투명 surface
- 얇은 상단 border
- 본문 컨테이너와 동일 baseline

## Home

### Hero

현재 장문의 기술 나열형 hero를 단순화한다.

구조:
- 좌측: profile image
- 우측: 이름, 포지셔닝, 2~3문장 요약, 핵심 CTA
- CTA: Projects / About / Resume
- 핵심 태그: LLM/VLM, RAG, Document AI, Fine-tuning, AI/AX

포지셔닝은 현재 경력 방향에 맞춰 `AI/AX Engineer · LLM/VLM · RAG` 계열로 정리한다. 다만 Resume 내부 문구는 변경하지 않는다.

### Home Hub

Projects / Tech Notes / Patents 세 영역은 유지하되 시각적으로 단순화한다.

- white panel
- 얇은 border
- restrained shadow
- steel-blue section label
- 기존 carousel 기능은 유지하되 화살표와 dot 스타일을 단순화
- 데스크톱 3열, 태블릿/모바일 1열 또는 2열로 자연스럽게 축소

## Projects

기존 4개 프로젝트 외에 현재 QBS 프로젝트를 추가한다.

신규 프로젝트 제목:
`LLM/VLM 기반 QBS 유사사업 검색·추천 데이터 파이프라인 개발`

표시 기간:
`2026.06 ~ 2026.08`

핵심 사실:
- 신규 RFP 기반 유사사업 검색·추천용 RAG 데이터베이스 구축
- 유사사업 2,418건
- 연계 이미지 6,356장
- 이미지 검출 후처리로 문서별 기대 이미지 수 대비 검출 일치율 54% → 84%
- PyMuPDF·LLM 섹션 탐지, GPT 계열 VLM OCR/구조 추출, 규칙 기반 경계 분리, LLM 정보 추출, PP-DocLayoutV3 Fine-tuning, Layout/OCR Anchor 기반 이미지 매핑

검색 정확도 향상 수치는 별도로 주장하지 않는다.

### Project 상세 페이지 공통 계층

기존 Markdown 내용을 최대한 유지하면서 CSS만으로 다음 계층이 읽히게 한다.

1. 제목 / 요약
2. 프로젝트 목적 또는 문제
3. 주요 역할
4. 기술/구성
5. 결과/성과

상세 페이지는 흰색 article surface + 적절한 max-width + heading hierarchy + table/code/image 스타일을 적용한다.

## Tech Notes

현재 4개 노트는 유지한다.

- 카드에서 tags를 작은 pill로 보이게 개선
- 상세 페이지의 h2/h3, code, blockquote, list, image를 공통 article 스타일에 맞춘다.
- 콘텐츠를 새로 쓰거나 확대하지 않는다.

## Patents

현재 `_patents`에는 문서 2개가 있고 Resume에는 출원 총 4건으로 정리되어 있다.

- 사이트에서 `2개 문서 = 총 2건`으로 오해되지 않도록 카드/섹션 소개를 조정한다.
- 실제 상세 문서 내용은 보존한다.
- 필요 시 홈/소개에서는 `특허 출원 4건`으로 요약하고, 현재 공개 상세 페이지는 대표 항목임을 명확히 한다.

## About

현재 2025년 Multimodal/Chem/Agent 중심 설명을 2026년 현재 기준으로 재구성한다.

성장 흐름:
1. 2023 검색·데이터 파이프라인
2. 2024 RAG·규정/법령 QA·DPO
3. 2024~2025 건축 민원 QA·평가 자동화
4. 2025~2026 Multimodal Document AI
5. 2026 엔지니어링 제안서/QBS 구조화·검색·추천

Chem OCR과 Agent Orchestration은 경험 중 하나로 남기되 현재 정체성의 중심처럼 보이지 않게 비중을 줄인다.

About는 장문의 이력 나열보다 다음 블록으로 재구성한다.

- Intro
- Core Capabilities
- Career / Growth Timeline
- Engineering Approach

## Cards

`_includes/card.html`은 컬렉션별 메타 표현을 정리한다.

공통:
- title
- excerpt 또는 tags
- category badge

Projects:
- 가능하면 기간/핵심 설명을 우선

Tech:
- tags pill 중심

Patents:
- 특허 category 표시

teaser image가 있을 때와 없을 때 모두 균형 잡힌 높이를 유지한다.

## CSS 아키텍처

### `portfolio.css`

사이트 전역 디자인 시스템과 공통 레이아웃을 담당한다.

- CSS variables
- body/page container
- header/footer
- typography
- button/tag
- card
- article/detail
- responsive rules

### `custom.css`

홈 전용 hero/hub/carousel 등 페이지 특화 스타일만 남긴다.

현재 중복된 `.section-panel`, `.hub-panel`, `.hub-grid`, cloud/glow 스타일은 제거한다.

### `override.css`

가능하면 제거하거나 정말 필요한 1~2개 Minimal Mistakes override만 유지한다.

### `_includes/head/custom.html`

현재 `custom.css`가 중복 로드되는 문제를 정리한다.

목표 로드 순서:
1. Google font preload/font
2. `portfolio.css`
3. `custom.css`
4. 필요 시 `override.css`
5. `hub-carousel.js`

## Navigation

`_data/navigation.yml`을 검토하여 다음 메뉴를 제공한다.

- Home
- Projects
- Tech Notes
- Patents
- About
- Resume

컬렉션 인덱스 페이지가 현재 없다면 홈 anchor 링크를 사용할지 별도 archive 페이지를 만들지 구현 단계에서 현재 라우팅을 확인하고 가장 단순한 방식을 선택한다. 기존 URL을 깨는 선택은 하지 않는다.

## 404

404 페이지도 공통 디자인 시스템의 surface, button, typography를 사용하도록 최소 조정한다.

## Responsive

- 1024px 이상: hero 2열, hub 3열
- 640~1023px: hero 상황에 따라 1열, hub 1~2열
- 639px 이하: 1열
- 음수 viewport margin 및 강제 `100vw` 폭 사용 금지
- 가로 overflow 없어야 함

## Resume 보호 규칙

`resume_new.html`은 현재 확정된 디자인을 유지한다.

전역 CSS가 Resume inline style을 의도치 않게 덮지 않도록:
- 전역 선택자는 generic `.page` 수준에서 색/폭만 최소 적용
- `.resume-*` 클래스는 global CSS에서 새로 스타일링하지 않음
- 인쇄 전용 global rule을 추가하지 않음

## 검증 기준

1. 홈, About, Resume, 각 Project 상세, 각 Tech 상세, 각 Patent 상세, 404를 확인한다.
2. 데스크톱/모바일에서 가로 overflow가 없어야 한다.
3. Resume의 현재 화면 디자인이 변하지 않아야 한다.
4. Home의 Projects / Tech Notes / Patents carousel이 계속 동작해야 한다.
5. 모든 기존 URL이 유지되어야 한다.
6. CSS 중복 로딩이 제거되어야 한다.
7. `custom.css`의 중복/상충 정의를 정리한다.
8. 신규 QBS 프로젝트가 Projects 목록과 홈 carousel에 표시되어야 한다.
9. About가 2026년 현재 경력 흐름을 반영해야 한다.
10. 색상/카드/버튼/heading이 Resume와 같은 계열의 시각 언어를 사용해야 한다.

## 구현 우선순위

1. CSS 로딩과 디자인 토큰 정리
2. 공통 layout/header/footer/card/article 스타일 정리
3. Home hero/hub 리디자인
4. Navigation 정리
5. QBS 프로젝트 추가
6. About 업데이트
7. 상세 페이지 스타일 검증
8. 404/모바일/overflow 검증
9. Resume regression 확인
