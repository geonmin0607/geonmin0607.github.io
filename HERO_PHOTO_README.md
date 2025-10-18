# Hero photo (left) 사용법

1) 이미지를 이 경로에 추가하세요:
   `assets/images/hero/profile.jpg`

2) 권장 크기/비율
   - 1200×1600 (세로형 3:4) 또는 1200×1500 (4:5)
   - JPG 품질 75~85

3) 파일명을 바꾸고 싶다면:
   - `index.md` 상단의
     ```html
     <img src="/assets/images/hero/profile.jpg" alt="GEONMIN LEE portrait">
     ```
     경로를 새 파일명으로 바꿔주세요.

4) 하단 카드들은 기본적으로 **이미지 없이** 더 넓게 보이도록 설정되어 있습니다.
   - 특정 카드에만 이미지를 넣고 싶으면 해당 문서의 Front Matter에 다음을 추가:
     ```yaml
     header:
       teaser: /assets/images/projects/your_image.jpg
     ```
