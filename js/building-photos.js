// 건물 사진 — 출처가 확인된 이미지만 등록
// 대부분 부산대학교 공식 홈페이지 캠퍼스 약도 페이지의 시설 사진이며, 별도의 공개 라이선스 표기가
// 없어 저작권은 학교 측에 있을 수 있습니다(비영리 학내 정보 제공 목적으로만 사용).
// 306(인문관)은 위키미디어 커먼즈의 CC BY-SA 4.0 라이선스 사진을 사용합니다.
const BUILDING_PHOTOS = {
  "102": { imageUrl: "https://www.pusan.ac.kr/_contents/kor/_Img/07Intro/cmap_pusan/mapimg_102.jpg", sourceUrl: "https://www.pusan.ac.kr/kor/CMS/Contents/Contents.do?mCode=MN212", license: "부산대학교 공식 홈페이지 (별도 라이선스 명시 없음, 2024~2026 재건축으로 이전 건물 사진일 수 있음)" },
  "105": { imageUrl: "https://www.pusan.ac.kr/_contents/kor/_Img/07Intro/cmap_pusan/mapimg_105.jpg", sourceUrl: "https://www.pusan.ac.kr/kor/CMS/Contents/Contents.do?mCode=MN212", license: "부산대학교 공식 홈페이지 (별도 라이선스 명시 없음)" },
  "201": { imageUrl: "https://www.pusan.ac.kr/_contents/kor/_Img/07Intro/cmap_pusan/mapimg_201.jpg", sourceUrl: "https://www.pusan.ac.kr/kor/CMS/Contents/Contents.do?mCode=MN212", license: "부산대학교 공식 홈페이지 (별도 라이선스 명시 없음)" },
  "206": { imageUrl: "https://www.pusan.ac.kr/_contents/kor/_Img/07Intro/cmap_pusan/mapimg_206.jpg", sourceUrl: "https://www.pusan.ac.kr/kor/CMS/Contents/Contents.do?mCode=MN212", license: "부산대학교 공식 홈페이지 (별도 라이선스 명시 없음)" },
  "210": { imageUrl: "https://www.pusan.ac.kr/_contents/kor/_Img/07Intro/cmap_pusan/mapimg_210.jpg", sourceUrl: "https://www.pusan.ac.kr/kor/CMS/Contents/Contents.do?mCode=MN212", license: "부산대학교 공식 홈페이지 (별도 라이선스 명시 없음)" },
  "306": { imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/14/%ED%95%98%EB%8A%98%EC%9D%98_%EA%B4%91%EB%AA%85%EC%9D%B4_%EC%9E%84%ED%95%9C_%EB%B6%80%EC%82%B0%EB%8C%80_%EC%9D%B8%EB%AC%B8%EA%B4%80.jpg", sourceUrl: "https://commons.wikimedia.org/wiki/File:%ED%95%98%EB%8A%98%EC%9D%98_%EA%B4%91%EB%AA%85%EC%9D%B4_%EC%9E%84%ED%95%9C_%EB%B6%80%EC%82%B0%EB%8C%80_%EC%9D%B8%EB%AC%B8%EA%B4%80.jpg", license: "Wikimedia Commons - CC BY-SA 4.0" },
  "311": { imageUrl: "https://www.pusan.ac.kr/_contents/kor/_Img/07Intro/cmap_pusan/mapimg_311.jpg", sourceUrl: "https://www.pusan.ac.kr/kor/CMS/Contents/Contents.do?mCode=MN212", license: "부산대학교 공식 홈페이지 (별도 라이선스 명시 없음)" },
  "314": { imageUrl: "https://www.pusan.ac.kr/_contents/kor/_Img/07Intro/cmap_pusan/mapimg_314.jpg", sourceUrl: "https://www.pusan.ac.kr/kor/CMS/Contents/Contents.do?mCode=MN212", license: "부산대학교 공식 홈페이지 (별도 라이선스 명시 없음)" },
  "401": { imageUrl: "https://www.pusan.ac.kr/_contents/kor/_Img/07Intro/cmap_pusan/mapimg_401.jpg", sourceUrl: "https://www.pusan.ac.kr/kor/CMS/Contents/Contents.do?mCode=MN212", license: "부산대학교 공식 홈페이지 (별도 라이선스 명시 없음)" },
  "416": { imageUrl: "https://www.pusan.ac.kr/_contents/kor/_Img/07Intro/cmap_pusan/mapimg_416.jpg", sourceUrl: "https://www.pusan.ac.kr/kor/CMS/Contents/Contents.do?mCode=MN212", license: "부산대학교 공식 홈페이지 (별도 라이선스 명시 없음)" },
  "417": { imageUrl: "https://www.pusan.ac.kr/_contents/kor/_Img/07Intro/cmap_pusan/mapimg_417.jpg", sourceUrl: "https://www.pusan.ac.kr/kor/CMS/Contents/Contents.do?mCode=MN212", license: "부산대학교 공식 홈페이지 (별도 라이선스 명시 없음)" },
  "422": { imageUrl: "https://www.pusan.ac.kr/_contents/kor/_Img/07Intro/cmap_pusan/mapimg_422.jpg", sourceUrl: "https://www.pusan.ac.kr/kor/CMS/Contents/Contents.do?mCode=MN212", license: "부산대학교 공식 홈페이지 (별도 라이선스 명시 없음)" },
  "514": { imageUrl: "https://www.pusan.ac.kr/_contents/kor/_Img/07Intro/cmap_pusan/mapimg_514.jpg", sourceUrl: "https://www.pusan.ac.kr/kor/CMS/Contents/Contents.do?mCode=MN212", license: "부산대학교 공식 홈페이지 (별도 라이선스 명시 없음)" },
  "516": { imageUrl: "https://www.pusan.ac.kr/_contents/kor/_Img/07Intro/cmap_pusan/mapimg_516.jpg", sourceUrl: "https://www.pusan.ac.kr/kor/CMS/Contents/Contents.do?mCode=MN212", license: "부산대학교 공식 홈페이지 (별도 라이선스 명시 없음)" },
  "701": { imageUrl: "https://www.pusan.ac.kr/_contents/kor/_Img/07Intro/cmap_pusan/mapimg_701.jpg", sourceUrl: "https://www.pusan.ac.kr/kor/CMS/Contents/Contents.do?mCode=MN212", license: "부산대학교 공식 홈페이지 (별도 라이선스 명시 없음)" }
};
