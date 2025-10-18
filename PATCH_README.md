# Home Sections Patch

## 무엇이 바뀌나요?
- 홈(`/`)에 **가운데 소개문 + Projects 카드 + Tech 카드 + Patents 카드** 순서로 섹션을 배치합니다.
- Tech는 새 컬렉션(`_tech/`)으로 관리(탭 추가 없음).

## 적용 방법
1) 이 폴더의 `index.md`, `assets/css/home-sections.css`를 레포 루트에 덮어쓰기
2) `_tech/` 폴더를 루트에 추가하고, 샘플 파일 2개를 참고해 기술 글을 채우기
3) `_config.append.yml`의 내용을 기존 `_config.yml`의 `collections:`와 `defaults:` 블록에 **병합**해 주세요.
   - 또는 `_config.append.yml` 전체를 `_config.yml`에 붙여 넣어도 됩니다(중복 키 주의).
4) (선택) `assets/css/home-sections.css`를 로드하려면 `_includes/head/custom.html`에 다음을 추가하세요:
   `<link rel="stylesheet" href="{{ '/assets/css/home-sections.css' | relative_url }}">`

배포 후, `/`에서 Projects → Tech → Patents 카드 섹션이 위에서 아래로 보이면 성공입니다.
