# Style Reset Pack

이 패치는 포트폴리오 카드 너비/정렬/색상을 전부 정리해 **한 장의 CSS(assets/css/portfolio.css)** 로 통일합니다.

## 적용
1) 이 폴더를 레포 루트에 덮어쓰기
2) 커밋/푸시 → Actions `pages-build-deployment` 확인
3) 강력 새로고침(Win: Ctrl+F5, Mac: Cmd+Shift+R)

## 반드시 삭제(또는 주석 처리)해야 하는 이전 CSS 링크
`_includes/head/custom.html` 안에 **아래 두 줄만** 남겨두세요:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="{{ '/assets/css/portfolio.css' | relative_url }}">
```
다음 파일들은 더 이상 로드하지 마세요(있다면 삭제 권장):
- `assets/css/nomod-theme.css`
- `assets/css/nomod-clone.css`
- `assets/css/nomod-exact.css`
- `assets/css/nomod-light.css`
- `assets/css/home-sections.css`
- `assets/css/card-excerpt.css` (portfolio.css 안에 통합)

## 카드가 안 예쁘게 보일 때 체크
- 루트의 `index.md`가 splash/feature_row를 쓰지 않아야 합니다.
- `/projects/index.md`, `/patents/index.md` 의 `entries_layout: grid` 가 필요합니다(이 패치에 포함).
- 카드 요약은 각 문서의 Front Matter `excerpt:`에 넣어야 카드에서 보입니다.

## 커스터마이즈
- 데스크톱 3열 간격 변경: `@media (min-width:980px){ gap: 22px; }`
- 카드 높이 맞춤 줄수: `-webkit-line-clamp: 5;`
- 컨테이너 폭: `.page { max-width: 1080px; }`
