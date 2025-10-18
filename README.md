# geonmin — AI 엔지니어 포트폴리오

nomod 느낌의 카드형 그리드로 구성된 포트폴리오입니다.

## 구성
- Home: 가운데 소개 → **Projects** 카드 → **Tech** 카드 → **Patents** 카드
- Tabs: **Projects / Patents** (+ Blog, About)
- 테마: Minimal Mistakes + 커스텀 CSS(다크, 카드 hover, 뱃지)

## 배포
1. 이 레포를 GitHub Pages에 올립니다(`main` 브랜치, 루트).
2. `Settings → Pages`에서 Source가 `Deploy from a branch / main / (root)`인지 확인합니다.

## 커스터마이즈
- 프로젝트 썸네일: 각 문서에
  ```yaml
  header:
    teaser: /assets/images/your-thumbnail.jpg
  ```
- Tech 글은 `_tech/` 폴더에 Markdown 파일로 추가하면 홈의 Tech 카드 섹션에 자동 표시됩니다.
- 특허는 `_patents/` 폴더의 파일명을 원하는 제목/날짜/상태로 교체하세요.
