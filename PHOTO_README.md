# How to add teaser photos (nomod-like cards)

1) **이미지 파일 위치**
   - 프로젝트: `assets/images/projects/`
   - 테크:     `assets/images/tech/`
   - 특허:     `assets/images/patents/`
   (폴더가 없으면 생성하세요.)

2) **권장 규격**
   - 가로형(권장): **1200×800** 혹은 **1000×700** (3:2 ~ 16:10 비율)
   - 파일 포맷: JPG (품질 75~85) 또는 PNG
   - 파일명 예: `multimodal-poc.jpg`, `intelligent-search.jpg`

3) **포스트 Front Matter에 연결**
   각 문서의 맨 위 Front Matter(YAML)에 `header.teaser`를 추가:
   ```yaml
   ---
   title: "문서 분석 기반 Multimodal PoC"
   date: 2025-10-01
   header:
     teaser: /assets/images/projects/multimodal-poc.jpg
   ---
   ```

4) **접근성(선택)**
   - alt 텍스트는 카드 템플릿에서 **자동으로 제목을 사용**합니다.
     별도 alt가 필요하면 템플릿 확장으로 지원해드릴 수 있어요.

5) **팁**
   - 너무 높은 해상도(>2000px)는 용량만 커집니다. 1000~1400px 가로폭이면 충분.
   - 이미지가 얼굴/로고 중심이면 좌우 여백을 약간 남겨 가운데 오브젝트가 `object-fit: cover`에서 잘리지 않도록 하세요.
