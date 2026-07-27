// 교보문고(kyobobook.co.kr) 판매가/상품링크 조회 결과 — 배경 조사 에이전트가 검색한 결과입니다.
// 저자/출판사 정보로 판본을 특정해 매칭했으며, found:false 인 항목은 절판/품절/비매품 등으로 확인된 경우입니다.
const BOOK_PRICES = {
 "(미래교사를 위한)교육학개론": {
  "matchedTitle": "미래교사를 위한 교육학개론",
  "author": "김성열 외",
  "publisher": "학지사",
  "price": 20000,
  "url": "https://product.kyobobook.co.kr/detail/S000001644154",
  "found": true
 },
 "(쉽게 풀어 쓴)교육철학 및 교육사": {
  "matchedTitle": "교육철학 및 교육사 (4판)",
  "author": "신득렬 외",
  "publisher": "양서원",
  "price": 20000,
  "url": "https://product.kyobobook.co.kr/detail/S000001641707",
  "found": true
 },
 "가르침의 재발견": {
  "matchedTitle": "가르침의 재발견",
  "author": "거트 비에스타 (곽덕주, 박은주 역)",
  "publisher": "다봄교육",
  "price": 15120,
  "url": "https://product.kyobobook.co.kr/detail/S000211914055",
  "found": true
 },
 "고전의 창": {
  "matchedTitle": "고전의 창",
  "author": null,
  "publisher": null,
  "price": null,
  "url": "https://search.kyobobook.co.kr/search?keyword=%EA%B3%A0%EC%A0%84%EC%9D%98%20%EC%B0%BD",
  "found": false
 },
 "고전의 창: 부산대학교가 선정한 고전 추가 50선의 해제": {
  "matchedTitle": "고전의 창: 부산대학교가 선정한 고전 추가 50선의 해제",
  "author": null,
  "publisher": null,
  "price": null,
  "url": "https://search.kyobobook.co.kr/search?keyword=%EA%B3%A0%EC%A0%84%EC%9D%98%20%EC%B0%BD%20%EB%B6%80%EC%82%B0%EB%8C%80%ED%95%99%EA%B5%90",
  "found": false
 },
 "고전의 힘": {
  "matchedTitle": "고전의 힘 : 과거로부터 온 미래, 부산대학교가 선정한 고전 99선 해제",
  "author": "부산대학교 교양교육센터 편",
  "publisher": "꿈결",
  "price": 22500,
  "url": "https://product.kyobobook.co.kr/detail/S000001631724",
  "found": true
 },
 "고전의 힘 - 과거로부터 온 미래 부산대학교가 선정한 고전 99선 해제": {
  "matchedTitle": "고전의 힘 : 과거로부터 온 미래, 부산대학교가 선정한 고전 99선 해제",
  "author": "부산대학교 교양교육센터 편",
  "publisher": "꿈결",
  "price": 22500,
  "url": "https://product.kyobobook.co.kr/detail/S000001631724",
  "found": true
 },
 "고전의 힘-과거로부터 온 미래, 부산대학교가 선정한 고전 99선 해제": {
  "matchedTitle": "고전의 힘 : 과거로부터 온 미래, 부산대학교가 선정한 고전 99선 해제",
  "author": "부산대학교 교양교육센터 편",
  "publisher": "꿈결",
  "price": 22500,
  "url": "https://product.kyobobook.co.kr/detail/S000001631724",
  "found": true
 },
 "광장": {
  "matchedTitle": "광장/구운몽",
  "author": "최인훈",
  "publisher": "문학과지성사",
  "price": 12600,
  "url": "https://product.kyobobook.co.kr/detail/S000000570056",
  "found": true
 },
 "광장/구운몽 : 최인훈 전집": {
  "matchedTitle": "광장/구운몽 (최인훈 전집 1)",
  "author": "최인훈",
  "publisher": "문학과지성사",
  "price": 11700,
  "url": "https://product.kyobobook.co.kr/detail/S000000569462",
  "found": true
 },
 "교사를 일깨우는 사유": {
  "matchedTitle": "교사를 일깨우는 사유",
  "author": "양은주",
  "publisher": "문음사",
  "price": 22000,
  "url": "https://product.kyobobook.co.kr/detail/S000001260865",
  "found": true
 },
 "교육과 교육학": {
  "matchedTitle": "교육과 교육학",
  "author": "김대현, 김석우 외",
  "publisher": "학지사",
  "price": 18000,
  "url": "https://product.kyobobook.co.kr/detail/S000001642435",
  "found": true
 },
 "교육사상, 전통과 현재의 대화": {
  "matchedTitle": "교육사상, 전통과 현재의 대화",
  "author": "김상섭, 곽덕주, 김회용, 박주병, 정경화 외",
  "publisher": "학지사",
  "price": 20000,
  "url": "https://product.kyobobook.co.kr/detail/S000214409214",
  "found": true
 },
 "교육의 개념": {
  "matchedTitle": "교육의 개념",
  "author": "이홍우",
  "publisher": "문음사",
  "price": null,
  "url": "https://search.kyobobook.co.kr/search?keyword=%EA%B5%90%EC%9C%A1%EC%9D%98%20%EA%B0%9C%EB%85%90",
  "found": false
 },
 "교육철학 및 교육사": {
  "matchedTitle": "교육철학 및 교육사",
  "author": "서용석, 이명주, 이지헌 외",
  "publisher": "학이당",
  "price": 20000,
  "url": "https://product.kyobobook.co.kr/detail/S000001304463",
  "found": true
 },
 "교육철학 및 교육사 탐구": {
  "matchedTitle": "교육철학 및 교육사 탐구",
  "author": "유재봉, 안경식, 김상섭 외",
  "publisher": "학지사",
  "price": 22000,
  "url": "https://product.kyobobook.co.kr/detail/S000200149595",
  "found": true
 },
 "구운몽": {
  "matchedTitle": "구운몽 (세계문학전집 72)",
  "author": "김만중 (송성욱 역)",
  "publisher": "민음사",
  "price": 7200,
  "url": "https://product.kyobobook.co.kr/detail/S000000620209",
  "found": true
 },
 "국가": {
  "matchedTitle": "플라톤 국가 (그리스어 원전 완역본)",
  "author": "플라톤 (박문재 역)",
  "publisher": "현대지성",
  "price": 27000,
  "url": "https://product.kyobobook.co.kr/detail/S000201458524",
  "found": true
 },
 "난장이가 쏘아올린 작은 공": {
  "matchedTitle": "난장이가 쏘아올린 작은 공",
  "author": "조세희",
  "publisher": "이성과힘",
  "price": 13950,
  "url": "https://product.kyobobook.co.kr/detail/S000212379251",
  "found": true
 },
 "낭송 논어/맹자 동청룡 02": {
  "matchedTitle": "낭송 논어/맹자 (낭송Q시리즈 동청룡 : 2)",
  "author": "공자, 맹자 (고미숙 기획, 류시성 역)",
  "publisher": "북드라망",
  "price": 8910,
  "url": "https://product.kyobobook.co.kr/detail/S000001625414",
  "found": true
 },
 "논어": {
  "matchedTitle": "논어",
  "author": "동양고전연구회 역주",
  "publisher": "민음사",
  "price": 22500,
  "url": "https://product.kyobobook.co.kr/detail/S000000619537",
  "found": true
 },
 "니까야로 읽는 대승기신론": {
  "matchedTitle": "니까야로 읽는 대승기신론",
  "author": null,
  "publisher": null,
  "price": null,
  "url": "https://search.kyobobook.co.kr/search?keyword=%EB%8B%88%EA%B9%8C%EC%95%BC%EB%A1%9C%20%EC%9D%BD%EB%8A%94%20%EB%8C%80%EC%8A%B9%EA%B8%B0%EC%8B%A0%EB%A1%A0",
  "found": false
 },
 "더블린 사람들": {
  "matchedTitle": "더블린 사람들 (세계문학전집 307)",
  "author": "제임스 조이스 (이종일 역)",
  "publisher": "민음사",
  "price": 10800,
  "url": "https://product.kyobobook.co.kr/detail/S000000620444",
  "found": true
 },
 "동물 해방": {
  "matchedTitle": "우리 시대의 동물 해방",
  "author": "피터 싱어 (김성한 역)",
  "publisher": "연암서가",
  "price": 22500,
  "url": "https://product.kyobobook.co.kr/detail/S000214567046",
  "found": true
 },
 "마키아벨리 군주론": {
  "matchedTitle": "군주론",
  "author": "니콜로 마키아벨리 (정영하 외 역)",
  "publisher": "산수야",
  "price": 7110,
  "url": "https://product.kyobobook.co.kr/detail/S000001250299",
  "found": true
 },
 "마키아벨리 군주론: 대활자본": {
  "matchedTitle": "마키아벨리 군주론(대활자본)",
  "author": "니콜로 마키아벨리 (정영하 외 역)",
  "publisher": "산수야",
  "price": 10800,
  "url": "https://product.kyobobook.co.kr/detail/S000001250324",
  "found": true
 },
 "맹자": {
  "matchedTitle": "맹자",
  "author": "맹자 (김원중 역)",
  "publisher": "휴머니스트",
  "price": 19800,
  "url": "https://product.kyobobook.co.kr/detail/S000001796013",
  "found": true
 },
 "멋진 신세계": {
  "matchedTitle": "멋진 신세계",
  "author": "올더스 헉슬리 (이덕형 역)",
  "publisher": "문예출판사",
  "price": 10800,
  "url": "https://product.kyobobook.co.kr/detail/S000214725410",
  "found": true
 },
 "목민심서": {
  "matchedTitle": "정선 목민심서",
  "author": "정약용 (다산연구회 편)",
  "publisher": "창비",
  "price": 21600,
  "url": "https://product.kyobobook.co.kr/detail/S000215614728",
  "found": true
 },
 "민주주의와 교육": {
  "matchedTitle": "민주주의와 교육",
  "author": "존 듀이 (이홍우 역)",
  "publisher": "교육과학사",
  "price": 28000,
  "url": "https://product.kyobobook.co.kr/detail/S000000473393",
  "found": true
 },
 "변신, 시골의사": {
  "matchedTitle": "변신 시골의사",
  "author": "프란츠 카프카 (전영애 역)",
  "publisher": "민음사",
  "price": 7650,
  "url": "https://product.kyobobook.co.kr/detail/S000000620141",
  "found": true
 },
 "변신; 단식 광대": {
  "matchedTitle": "변신·단식 광대",
  "author": "프란츠 카프카 (이재황 외 역)",
  "publisher": "문학동네",
  "price": 10800,
  "url": "https://product.kyobobook.co.kr/detail/S000213373496",
  "found": true
 },
 "북학의": {
  "matchedTitle": "북학의",
  "author": "박제가",
  "publisher": "범우사",
  "price": 7200,
  "url": "https://product.kyobobook.co.kr/detail/S000000421040",
  "found": true
 },
 "사기열전": {
  "matchedTitle": "사기 열전 1",
  "author": "사마천 (김원중 역)",
  "publisher": "민음사",
  "price": 13500,
  "url": "https://product.kyobobook.co.kr/detail/S000060621775",
  "found": true
 },
 "사라져 가는 피그말리온 효과: 다시 읽는 교육학개론": {
  "matchedTitle": "사라져 가는 피그말리온 효과: 다시 읽는 교육학개론",
  "author": "이광현",
  "publisher": "박영스토리",
  "price": 23000,
  "url": "https://product.kyobobook.co.kr/detail/S000201586030",
  "found": true
 },
 "사회계약론": {
  "matchedTitle": "사회계약론",
  "author": "장 자크 루소 (김영욱 역)",
  "publisher": "후마니타스",
  "price": 16200,
  "url": "https://product.kyobobook.co.kr/detail/S000200572189",
  "found": true
 },
 "상상된 공동체": {
  "matchedTitle": "상상된 공동체",
  "author": "베네딕트 앤더슨 (서지원 외 역)",
  "publisher": "길",
  "price": 29700,
  "url": "https://product.kyobobook.co.kr/detail/S000001005210",
  "found": true
 },
 "상상력 교육": {
  "matchedTitle": "상상력 교육",
  "author": "키에란 이건 (김회용, 곽덕주 외 역)",
  "publisher": "학지사",
  "price": 13000,
  "url": "https://product.kyobobook.co.kr/detail/S000001642178",
  "found": true
 },
 "서양교육사": {
  "matchedTitle": "서양교육사",
  "author": "윌리엄 보이드 (이홍우 외 역)",
  "publisher": "교육과학사",
  "price": 28000,
  "url": "https://product.kyobobook.co.kr/detail/S000000473458",
  "found": true
 },
 "서양교육철학사: 근대": {
  "matchedTitle": "서양교육철학사: 근대",
  "author": "안드레아 R. 잉글리쉬",
  "publisher": "학지사",
  "price": 24000,
  "url": "https://product.kyobobook.co.kr/detail/S000202734434",
  "found": true
 },
 "쉽게 풀어 쓴 교육철학 및 교육사": {
  "matchedTitle": "교육철학 및 교육사 (4판)",
  "author": "신득렬, 이병승, 우영효, 김회용",
  "publisher": "양서원",
  "price": 20000,
  "url": "https://product.kyobobook.co.kr/detail/S000001641707",
  "found": true
 },
 "스티브 잡스": {
  "matchedTitle": "스티브 잡스",
  "author": "월터 아이작슨 (안진환 역)",
  "publisher": "민음사",
  "price": 22500,
  "url": "https://product.kyobobook.co.kr/detail/S000000619474",
  "found": true
 },
 "시련": {
  "matchedTitle": "시련",
  "author": "아서 밀러 (최영 외 역)",
  "publisher": "민음사",
  "price": 9000,
  "url": "https://product.kyobobook.co.kr/detail/S000000620423",
  "found": true
 },
 "아Q정전": {
  "matchedTitle": "아Q정전",
  "author": "루쉰 (이욱연 역)",
  "publisher": "문학동네",
  "price": 11700,
  "url": "https://product.kyobobook.co.kr/detail/S000000777981",
  "found": true
 },
 "에밀": {
  "matchedTitle": "에밀",
  "author": "장 자크 루소 (이환 역)",
  "publisher": "돋을새김",
  "price": 9000,
  "url": "https://product.kyobobook.co.kr/detail/S000000954139",
  "found": true
 },
 "엔트로피": {
  "matchedTitle": "엔트로피",
  "author": "제레미 리프킨 (이창희 역)",
  "publisher": "세종연구원",
  "price": 18000,
  "url": "https://product.kyobobook.co.kr/detail/S000001366514",
  "found": true
 },
 "역사 속의 교육공간": {
  "matchedTitle": "역사 속의 교육공간 그 철학적 조망",
  "author": "한국교육사학회",
  "publisher": "학지사",
  "price": 15000,
  "url": "https://product.kyobobook.co.kr/detail/S000000984441",
  "found": true
 },
 "예루살렘의 아이히만": {
  "matchedTitle": "예루살렘의 아이히만: 악의 평범성에 대한 보고서",
  "author": "한나 아렌트 (김선욱 역)",
  "publisher": "한길사",
  "price": 27000,
  "url": "https://product.kyobobook.co.kr/detail/S000219342060",
  "found": true
 },
 "예루살렘의 아이히만: 악의 평범성에 대한 보고서": {
  "matchedTitle": "예루살렘의 아이히만: 악의 평범성에 대한 보고서",
  "author": null,
  "publisher": null,
  "price": 27000,
  "url": "https://product.kyobobook.co.kr/detail/S000219342060",
  "found": true
 },
 "오래된 미래교육": {
  "matchedTitle": "오래된 미래교육",
  "author": null,
  "publisher": null,
  "price": 16200,
  "url": "https://product.kyobobook.co.kr/detail/S000001549276",
  "found": true
 },
 "왜 세계의 절반은 굶주리는가?": {
  "matchedTitle": "왜 세계의 절반은 굶주리는가?",
  "author": null,
  "publisher": null,
  "price": 11520,
  "url": "https://product.kyobobook.co.kr/detail/S000001896430",
  "found": true
 },
 "왜 세계의 절반은 굶주리는가?: 유엔 식량 특별 조사관이 아들에게 들려주는 기아의 진실": {
  "matchedTitle": "왜 세계의 절반은 굶주리는가?",
  "author": null,
  "publisher": null,
  "price": 11520,
  "url": "https://product.kyobobook.co.kr/detail/S000001896430",
  "found": true
 },
 "위건부두로 가는 길": {
  "matchedTitle": "위건 부두로 가는 길",
  "author": null,
  "publisher": null,
  "price": 18000,
  "url": "https://product.kyobobook.co.kr/detail/S000216399083",
  "found": true
 },
 "의산문답": {
  "matchedTitle": "의산문답",
  "author": null,
  "publisher": null,
  "price": 18000,
  "url": "https://product.kyobobook.co.kr/detail/S000000848279",
  "found": true
 },
 "이기적 유전자": {
  "matchedTitle": "이기적 유전자",
  "author": null,
  "publisher": null,
  "price": 18000,
  "url": "https://product.kyobobook.co.kr/detail/S000000576524",
  "found": true
 },
 "이방인": {
  "matchedTitle": "이방인",
  "author": null,
  "publisher": null,
  "price": 9000,
  "url": "https://product.kyobobook.co.kr/detail/S000000619973",
  "found": true
 },
 "이슈 중심의 교육학개론": {
  "matchedTitle": "이슈 중심의 교육학개론",
  "author": null,
  "publisher": null,
  "price": 20000,
  "url": "https://product.kyobobook.co.kr/detail/S000201185986",
  "found": true
 },
 "인공지능과 디지털사고": {
  "matchedTitle": "인공지능과 디지털사고",
  "author": null,
  "publisher": null,
  "price": null,
  "url": "https://search.kyobobook.co.kr/search?keyword=%EC%9D%B8%EA%B3%B5%EC%A7%80%EB%8A%A5%EA%B3%BC%20%EB%94%94%EC%A7%80%ED%84%B8%EC%82%AC%EA%B3%A0",
  "found": false
 },
 "자유론": {
  "matchedTitle": "자유론",
  "author": null,
  "publisher": null,
  "price": 7920,
  "url": "https://product.kyobobook.co.kr/detail/S000001897782",
  "found": true
 },
 "조선상고사": {
  "matchedTitle": "조선상고사",
  "author": null,
  "publisher": null,
  "price": 19800,
  "url": "https://product.kyobobook.co.kr/detail/S000211390489",
  "found": true
 },
 "조선상고사/한국통사": {
  "matchedTitle": "조선상고사 한국통사",
  "author": null,
  "publisher": null,
  "price": 19800,
  "url": "https://product.kyobobook.co.kr/detail/S000000702866",
  "found": true
 },
 "징비록": {
  "matchedTitle": "징비록",
  "author": null,
  "publisher": null,
  "price": 14400,
  "url": "https://product.kyobobook.co.kr/detail/S000214735666",
  "found": true
 },
 "책 읽어주는 남자": {
  "matchedTitle": "책 읽어주는 남자",
  "author": null,
  "publisher": null,
  "price": 13050,
  "url": "https://product.kyobobook.co.kr/detail/S000000733265",
  "found": true
 },
 "철학이 있는 교육 교육을 찾는 철학": {
  "matchedTitle": "철학이 있는 교육 교육을 찾는 철학",
  "author": null,
  "publisher": null,
  "price": 18000,
  "url": "https://product.kyobobook.co.kr/detail/S000001304448",
  "found": true
 },
 "춘향전": {
  "matchedTitle": "춘향전",
  "author": null,
  "publisher": null,
  "price": 10800,
  "url": "https://product.kyobobook.co.kr/detail/S000000620237",
  "found": true
 },
 "페다고지": {
  "matchedTitle": "페다고지(50주년 기념판)",
  "author": null,
  "publisher": null,
  "price": 13500,
  "url": "https://product.kyobobook.co.kr/detail/S000001196354",
  "found": true
 },
 "폴 스탠디시의 교육철학 읽기": {
  "matchedTitle": "폴 스탠디시의 교육철학 읽기",
  "author": null,
  "publisher": null,
  "price": 24000,
  "url": "https://product.kyobobook.co.kr/detail/S000213898067",
  "found": true
 },
 "피로사회": {
  "matchedTitle": "피로사회",
  "author": null,
  "publisher": null,
  "price": 12600,
  "url": "https://product.kyobobook.co.kr/detail/S000000569813",
  "found": true
 },
 "한국교육사: 근·현대편": {
  "matchedTitle": "한국교육사:근.현대편(풀빛 131)",
  "author": null,
  "publisher": null,
  "price": null,
  "url": "https://product.kyobobook.co.kr/detail/S000001163652",
  "found": false
 },
 "햇빛 속에 그리고 그늘 속에 나 여기 있으리": {
  "matchedTitle": "나 여기 있으리 햇빛 속에 그리고 그늘 속에",
  "author": null,
  "publisher": null,
  "price": 9900,
  "url": "https://product.kyobobook.co.kr/detail/S000000569816",
  "found": true
 },
 "현대교육철학의 이해": {
  "matchedTitle": "현대 교육철학의 이해",
  "author": null,
  "publisher": null,
  "price": 23000,
  "url": "https://product.kyobobook.co.kr/detail/S000212721954",
  "found": true
 },
 "호모 데우스": {
  "matchedTitle": "호모 데우스",
  "author": null,
  "publisher": null,
  "price": 24120,
  "url": "https://product.kyobobook.co.kr/detail/S000000597410",
  "found": true
 },
 "글로벌 히스토리란 무엇인가": {
  "matchedTitle": null,
  "author": null,
  "publisher": null,
  "price": null,
  "url": null,
  "found": false
 },
 "냉전의 지구사": {
  "matchedTitle": "냉전의 지구사: 미국과 소련 그리고 제3세계",
  "author": "오드 아르네 베스타 (옥창준, 오석주, 김동욱, 강유지 역)",
  "publisher": "에코리브르",
  "price": 35550,
  "url": "https://product.kyobobook.co.kr/detail/S000000971252",
  "found": true
 },
 "지구사의 도전": {
  "matchedTitle": "지구사의 도전: 어떻게 유럽중심주의를 넘어설 것인가",
  "author": "조지형, 김용우, 임상우, 제리 벤틀리, 아리프 딜릭 외",
  "publisher": "서해문집",
  "price": 16200,
  "url": "https://product.kyobobook.co.kr/detail/S000001167236",
  "found": true
 },
 "Global Capitalism": {
  "matchedTitle": "Global Capitalism",
  "author": "Jeffry A. Frieden",
  "publisher": "W. W. Norton & Company",
  "price": 37750,
  "url": "https://product.kyobobook.co.kr/detail/S000008821940",
  "found": true
 },
 "A Companion to Global Historical Thought": {
  "matchedTitle": "A Companion to Global Historical Thought",
  "author": "Prasenjit Duara, Viren Murthy, Andrew Sartori (편)",
  "publisher": "Wiley-Blackwell",
  "price": 405910,
  "url": "https://product.kyobobook.co.kr/detail/S000009415169",
  "found": true
 },
 "21세기를 위한 21가지 제언": {
  "matchedTitle": "21세기를 위한 21가지 제언",
  "author": "유발 하라리 (전병근 역)",
  "publisher": "김영사",
  "price": 24120,
  "url": "https://product.kyobobook.co.kr/detail/S000000597670",
  "found": true
 },
 "극단의 시대": {
  "matchedTitle": "극단의 시대(상): 20세기 역사",
  "author": "에릭 홉스봄 (이용우 역)",
  "publisher": "까치",
  "price": 18000,
  "url": "https://product.kyobobook.co.kr/detail/S000001128394",
  "found": true
 },
 "암흑의 대륙": {
  "matchedTitle": null,
  "author": null,
  "publisher": null,
  "price": null,
  "url": null,
  "found": false
 },
 "제1차 세계대전": {
  "matchedTitle": "제1차 세계대전(1914~1918): 품격 없는 문명과 탐욕의 소용돌이",
  "author": "윤형호",
  "publisher": "살림",
  "price": 8820,
  "url": "https://product.kyobobook.co.kr/detail/S000000722321",
  "found": true
 },
 "0시 1분 전": {
  "matchedTitle": null,
  "author": null,
  "publisher": null,
  "price": null,
  "url": null,
  "found": false
 },
 "냉전": {
  "matchedTitle": "냉전",
  "author": "오드 아르네 베스타 (유강은 역)",
  "publisher": "서해문집",
  "price": 47700,
  "url": "https://product.kyobobook.co.kr/detail/S000215928074",
  "found": true
 },
 "대중문화의 탄생": {
  "matchedTitle": "대중문화의 탄생",
  "author": "프레드 E. H. 슈레더 외 (노승영 역)",
  "publisher": "시대의창",
  "price": 22500,
  "url": "https://product.kyobobook.co.kr/detail/S000000897236",
  "found": true
 },
 "팔레스타인 100년 전쟁": {
  "matchedTitle": "팔레스타인 100년 전쟁: 정착민 식민주의와 저항의 역사, 1917-2017",
  "author": "라시드 할리디 (유강은 역)",
  "publisher": "열린책들",
  "price": 22500,
  "url": "https://product.kyobobook.co.kr/detail/S000000582146",
  "found": true
 },
 "예루살렘 전기": {
  "matchedTitle": "예루살렘 전기",
  "author": "사이먼 시백 몬티피오리 (유달승 역)",
  "publisher": "시공사",
  "price": 34200,
  "url": "https://product.kyobobook.co.kr/detail/S000000732999",
  "found": true
 },
 "사진 속 지리여행: 지오포토로 읽는 대한민국 이야기": {
  "matchedTitle": "사진 속 지리여행: 지오포토로 읽는 대한민국 이야기",
  "author": "손일, 탁한명",
  "publisher": "푸른길",
  "price": 37800,
  "url": "https://product.kyobobook.co.kr/detail/S000208597496",
  "found": true
 },
 "앵글 속 지리학": {
  "matchedTitle": null,
  "author": null,
  "publisher": null,
  "price": null,
  "url": null,
  "found": false
 },
 "경관, 그리고 지리학의 시선": {
  "matchedTitle": "경관 그리고 지리학의 시선",
  "author": "고려대학교 미래국토연구소 편",
  "publisher": "푸른길",
  "price": 27000,
  "url": "https://product.kyobobook.co.kr/detail/S000000977558",
  "found": true
 },
 "서울은 깊다": {
  "matchedTitle": "서울은 깊다",
  "author": "전우용",
  "publisher": "돌베개",
  "price": 16200,
  "url": "https://product.kyobobook.co.kr/detail/S000001110706",
  "found": true
 },
 "우리국토에 새겨진 문화와 역사": {
  "matchedTitle": null,
  "author": null,
  "publisher": null,
  "price": null,
  "url": null,
  "found": false
 },
 "규슈, 이런 여행": {
  "matchedTitle": "규슈, 이런 여행",
  "author": "손일, 탁한명, 김성환",
  "publisher": "푸른길",
  "price": 18000,
  "url": "https://product.kyobobook.co.kr/detail/S000213895841",
  "found": true
 },
 "남기고 싶은 지리 사진들": {
  "matchedTitle": null,
  "author": null,
  "publisher": null,
  "price": null,
  "url": null,
  "found": false
 },
 "현대 고고학의 이해": {
  "matchedTitle": null,
  "author": null,
  "publisher": null,
  "price": null,
  "url": null,
  "found": false
 },
 "고고학의 방법과 실제": {
  "matchedTitle": "고고학의 방법과 실제",
  "author": "T. 더글러스 프라이스 (이희준 외 역)",
  "publisher": "사회평론아카데미",
  "price": 40000,
  "url": "https://product.kyobobook.co.kr/detail/S000001956964",
  "found": true
 },
 "한국고고학강의": {
  "matchedTitle": null,
  "author": null,
  "publisher": null,
  "price": null,
  "url": null,
  "found": false
 },
 "한국 고고학 강의": {
  "matchedTitle": "한국 고고학 강의 (개정판)",
  "author": "한국고고학회",
  "publisher": "사회평론아카데미",
  "price": 23000,
  "url": "https://product.kyobobook.co.kr/detail/S000001871274",
  "found": true
 },
 "중국 고고학-진·한": {
  "matchedTitle": "중국 고고학: 진·한",
  "author": "조화성, 고승문 (정대영 역)",
  "publisher": "사회평론",
  "price": 20000,
  "url": "https://product.kyobobook.co.kr/detail/S000001910466",
  "found": true
 },
 "근현대 중국의 지식인들: 인간을 묻다": {
  "matchedTitle": "근현대 중국의 지식인들: 인간을 묻다",
  "author": "이은상 외",
  "publisher": "부산대학교출판문화원",
  "price": 28000,
  "url": "https://product.kyobobook.co.kr/detail/S000061896665",
  "found": true
 },
 "강의실 한국사": {
  "matchedTitle": "강의실 한국사",
  "author": "부경역사연구소",
  "publisher": "선인",
  "price": 19800,
  "url": "https://product.kyobobook.co.kr/detail/S000001794986",
  "found": true
 },
 "동양 윤리와 삶의 지혜": {
  "matchedTitle": null,
  "author": null,
  "publisher": null,
  "price": null,
  "url": null,
  "found": false
 },
 "함께 읽는 동양철학": {
  "matchedTitle": null,
  "author": null,
  "publisher": null,
  "price": null,
  "url": null,
  "found": false
 },
 "간명한중국철학사": {
  "matchedTitle": "간명한 중국철학사",
  "author": "펑유란 (정인재 외 역)",
  "publisher": "마루비",
  "price": 26000,
  "url": "https://product.kyobobook.co.kr/detail/S000001963335",
  "found": true
 },
 "중국윤리사상사": {
  "matchedTitle": "중국윤리사상사 (개정판)",
  "author": "미우라 도우사꾸 (강봉수, 김성룡, 박재주 외 역)",
  "publisher": "원미사",
  "price": 22800,
  "url": "https://product.kyobobook.co.kr/detail/S000000801168",
  "found": true
 },
 "한국 근대사상사": {
  "matchedTitle": "한국 근대사상사",
  "author": "박정심",
  "publisher": "천년의상상",
  "price": 22500,
  "url": "https://product.kyobobook.co.kr/detail/S000001873899",
  "found": true
 },
 "유럽적 보편주의": {
  "matchedTitle": "유럽적 보편주의: 권력의 레토릭",
  "author": "이매뉴얼 월러스틴 (김재오 외 역)",
  "publisher": "창비",
  "price": 13500,
  "url": "https://product.kyobobook.co.kr/detail/S000000613126",
  "found": true
 },
 "기계, 인간의 척도가 되다": {
  "matchedTitle": null,
  "author": null,
  "publisher": null,
  "price": null,
  "url": null,
  "found": false
 },
 "시빌라이제이션-서양과 나머지 세계": {
  "matchedTitle": null,
  "author": null,
  "publisher": null,
  "price": null,
  "url": null,
  "found": false
 },
 "유럽중심주의 비판과 주변의 재인식": {
  "matchedTitle": null,
  "author": null,
  "publisher": null,
  "price": null,
  "url": null,
  "found": false
 },
 "모더니티란 무엇인가": {
  "matchedTitle": null,
  "author": null,
  "publisher": null,
  "price": null,
  "url": null,
  "found": false
 },
 "야만의 역사": {
  "matchedTitle": null,
  "author": null,
  "publisher": null,
  "price": null,
  "url": null,
  "found": false
 },
 "제국주의": {
  "matchedTitle": null,
  "author": null,
  "publisher": null,
  "price": null,
  "url": null,
  "found": false
 },
 "상상의 공동체": {
  "matchedTitle": null,
  "author": null,
  "publisher": null,
  "price": null,
  "url": null,
  "found": false
 },
 "문명과 바다": {
  "matchedTitle": "문명과 바다",
  "author": "주경철",
  "publisher": "산처럼",
  "price": 16650,
  "url": "https://product.kyobobook.co.kr/detail/S000001438851",
  "found": true
 },
 "문화로 보는 세계사": {
  "matchedTitle": "문화로 읽는 세계사",
  "author": "주경철",
  "publisher": "사계절",
  "price": 18900,
  "url": "https://product.kyobobook.co.kr/detail/S000000870041",
  "found": true
 },
 "중세 이야기 1-2": {
  "matchedTitle": "수잔 바우어의 중세 이야기 2: 이슬람 세력의 유럽 진출에서 1차 십자군 원정까지",
  "author": "수잔 와이즈 바우어 (이광일 외 역)",
  "publisher": "이론과실천",
  "price": 26820,
  "url": "https://product.kyobobook.co.kr/detail/S000000550381",
  "found": true
 },
 "처음 읽는 여성의 역사": {
  "matchedTitle": "처음 읽는 여성의 역사",
  "author": "정현백, 김정안",
  "publisher": "동녘",
  "price": 11700,
  "url": "https://product.kyobobook.co.kr/detail/S000001129515",
  "found": true
 },
 "루이 14세와 베르사유 궁정": {
  "matchedTitle": "루이 14세와 베르사유 궁정 (나남 클래식 산책 2)",
  "author": "생시몽 (이영림 외 역)",
  "publisher": "나남",
  "price": 14000,
  "url": "https://product.kyobobook.co.kr/detail/S000000539799",
  "found": true
 },
 "99%의 로마인은 어떻게 살았을까": {
  "matchedTitle": null,
  "author": null,
  "publisher": null,
  "price": null,
  "url": null,
  "found": false
 },
 "서양 중세문명": {
  "matchedTitle": "서양중세문명",
  "author": "자크 르 고프 (유희수 외 역)",
  "publisher": "문학과지성사",
  "price": 31500,
  "url": "https://product.kyobobook.co.kr/detail/S000000569451",
  "found": true
 },
 "이탈리아 르네상스의 문화": {
  "matchedTitle": "이탈리아 르네상스의 문화 (한길그레이트북스 58)",
  "author": "야코프 부르크하르트 (이기숙 역)",
  "publisher": "한길사",
  "price": 29700,
  "url": "https://product.kyobobook.co.kr/detail/S000000602679",
  "found": true
 },
 "새로운 서양 문명의 역사": {
  "matchedTitle": "새로운 서양 문명의 역사(상): 문명의 기원에서 종교개혁까지",
  "author": "주디스 코핀, 로버트 스테이시 (박상익 외 역)",
  "publisher": "소나무",
  "price": 31500,
  "url": "https://product.kyobobook.co.kr/detail/S000001098988",
  "found": true
 },
 "프랑스의 절대왕정시대": {
  "matchedTitle": "프랑스의 절대왕정시대 (서양근대사총서 2)",
  "author": "서정복",
  "publisher": "푸른사상",
  "price": 19800,
  "url": "https://product.kyobobook.co.kr/detail/S000000823731",
  "found": true
 },
 "품위 있고 매혹적인 고대 이집트": {
  "matchedTitle": null,
  "author": null,
  "publisher": null,
  "price": null,
  "url": null,
  "found": false
 },
 "로마 문화 로마인의 생활풍속사 2": {
  "matchedTitle": null,
  "author": null,
  "publisher": null,
  "price": null,
  "url": null,
  "found": false
 },
 "생활속의 응용윤리: 딜레마와 마주하다": {
  "matchedTitle": "생활속의 응용윤리 (3판)",
  "author": "박찬구",
  "publisher": "세창출판사",
  "price": 25000,
  "url": "https://product.kyobobook.co.kr/detail/S000200655800",
  "found": true
 },
 "처음읽는 윤리학": {
  "matchedTitle": "처음 읽는 윤리학",
  "author": "서울대학교 철학사상연구소",
  "publisher": "동녘",
  "price": 25200,
  "url": "https://product.kyobobook.co.kr/detail/S000001129569",
  "found": true
 },
 "포스트트루스": {
  "matchedTitle": "포스트트루스",
  "author": "리 매킨타이어 (김재경 역)",
  "publisher": "두리반",
  "price": 15300,
  "url": "https://product.kyobobook.co.kr/detail/S000001917893",
  "found": true
 },
 "성형": {
  "matchedTitle": "성형",
  "author": "태희원",
  "publisher": "이후",
  "price": 13500,
  "url": "https://product.kyobobook.co.kr/detail/S000000951672",
  "found": true
 },
 "공정하다는 착각": {
  "matchedTitle": "공정하다는 착각",
  "author": "마이클 샌델 (함규진 역)",
  "publisher": "와이즈베리",
  "price": 16200,
  "url": "https://product.kyobobook.co.kr/detail/S000001826105",
  "found": true
 },
 "외로움의 습격": {
  "matchedTitle": "외로움의 습격",
  "author": "김만권",
  "publisher": "혜다",
  "price": 16920,
  "url": "https://product.kyobobook.co.kr/detail/S000211566808",
  "found": true
 },
 "경쟁교육은 야만이다": {
  "matchedTitle": "경쟁 교육은 야만이다",
  "author": "김누리",
  "publisher": "해냄출판사",
  "price": 16650,
  "url": "https://product.kyobobook.co.kr/detail/S000212729971",
  "found": true
 },
 "마침내 특이점이 시작된다": {
  "matchedTitle": "마침내 특이점이 시작된다",
  "author": "레이 커즈와일 (이충호 역)",
  "publisher": "비즈니스북스",
  "price": 27000,
  "url": "https://product.kyobobook.co.kr/detail/S000216740028",
  "found": true
 },
 "인공지능의 시대, 인간을 다시 묻다": {
  "matchedTitle": "인공지능의 시대, 인간을 다시 묻다",
  "author": "김재인",
  "publisher": "동아시아",
  "price": 18000,
  "url": "https://product.kyobobook.co.kr/detail/S000000970970",
  "found": true
 },
 "예술, 진리를 훔치다": {
  "matchedTitle": "예술 진리를 훔치다",
  "author": "김동국",
  "publisher": "파라북스",
  "price": 16200,
  "url": "https://product.kyobobook.co.kr/detail/S000001915248",
  "found": true
 },
 "에코필로소피": {
  "matchedTitle": null,
  "author": null,
  "publisher": null,
  "price": null,
  "url": null,
  "found": false
 },
 "래디컬 에콜로지": {
  "matchedTitle": null,
  "author": null,
  "publisher": null,
  "price": null,
  "url": null,
  "found": false
 },
 "작은 가이아": {
  "matchedTitle": "작은 가이아(생명의 논리 살림의 윤리)",
  "author": "조용현",
  "publisher": "서광사",
  "price": 14400,
  "url": "https://product.kyobobook.co.kr/detail/S000000547229",
  "found": true
 },
 "철학, 생태에 눈뜨다": {
  "matchedTitle": null,
  "author": null,
  "publisher": null,
  "price": null,
  "url": null,
  "found": false
 },
 "갈라파고스로 간 철학자": {
  "matchedTitle": null,
  "author": null,
  "publisher": null,
  "price": null,
  "url": null,
  "found": false
 },
 "현대 생태사상의 이해": {
  "matchedTitle": null,
  "author": null,
  "publisher": null,
  "price": null,
  "url": null,
  "found": false
 },
 "역설의 변주: 불안에 맞서는 고요의 철학": {
  "matchedTitle": "역설의 변주: 불안에 맞서는 고요의 철학",
  "author": "정진우",
  "publisher": "세창출판사",
  "price": 15300,
  "url": "https://product.kyobobook.co.kr/detail/S000217720214",
  "found": true
 },
 "생각의 싸움": {
  "matchedTitle": "생각의 싸움",
  "author": "김재인",
  "publisher": "동아시아",
  "price": 16200,
  "url": "https://product.kyobobook.co.kr/detail/S000000971026",
  "found": true
 },
 "5분 뚝딱 철학: 생각의 역사": {
  "matchedTitle": "5분 뚝딱 철학: 생각의 역사 1",
  "author": "김필영",
  "publisher": "스마트북스",
  "price": 19800,
  "url": "https://product.kyobobook.co.kr/detail/S000212162571",
  "found": true
 },
 "9명의 철학자와 9번의 철학수업": {
  "matchedTitle": "9명의 철학자와 9번의 철학수업",
  "author": "이진우",
  "publisher": "김영사",
  "price": 10350,
  "url": "https://product.kyobobook.co.kr/detail/S000061350658",
  "found": true
 },
 "인간을 이해하는 아홉 가지 단어": {
  "matchedTitle": "인간을 이해하는 아홉 가지 단어",
  "author": "한국철학사상연구회",
  "publisher": "동녘",
  "price": 13500,
  "url": "https://product.kyobobook.co.kr/detail/S000001129494",
  "found": true
 },
 "서양철학사": {
  "matchedTitle": "서양철학사 (합본)",
  "author": "군나르 시르베크, 닐스 길리에 (윤형식 역)",
  "publisher": "이학사",
  "price": 43200,
  "url": "https://product.kyobobook.co.kr/detail/S000000949112",
  "found": true
 },
 "철학의 위안": {
  "matchedTitle": "철학의 위안",
  "author": "알랭 드 보통 (정명진 역)",
  "publisher": "청미래",
  "price": 14400,
  "url": "https://product.kyobobook.co.kr/detail/S000210876992",
  "found": true
 },
 "서양 철학 산책": {
  "matchedTitle": null,
  "author": null,
  "publisher": null,
  "price": null,
  "url": null,
  "found": false
 },
 "공공역사란 무엇인가": {
  "matchedTitle": "공공역사란 무엇인가",
  "author": "마르틴 뤼케, 이름가르트 췬도르프 (정용숙 역)",
  "publisher": "푸른역사",
  "price": 18000,
  "url": "https://product.kyobobook.co.kr/detail/S000001735150",
  "found": true
 },
 "공공역사를 실천 중입니다": {
  "matchedTitle": "공공역사를 실천 중입니다",
  "author": "공공역사문화연구소 기획",
  "publisher": "푸른역사",
  "price": 25110,
  "url": "https://product.kyobobook.co.kr/detail/S000209154897",
  "found": true
 },
 "기억 전쟁": {
  "matchedTitle": "기억 전쟁",
  "author": "임지현",
  "publisher": "휴머니스트",
  "price": 16200,
  "url": "https://product.kyobobook.co.kr/detail/S000001795874",
  "found": true
 },
 "무기가 된 역사": {
  "matchedTitle": null,
  "author": null,
  "publisher": null,
  "price": null,
  "url": null,
  "found": false
 },
 "쓰레기가 되는 삶들": {
  "matchedTitle": "쓰레기가 되는 삶들",
  "author": "지그문트 바우만 (정일준 역)",
  "publisher": "새물결",
  "price": 22500,
  "url": "https://product.kyobobook.co.kr/detail/S000000804720",
  "found": true
 },
 "우리는 어떻게 괴물이 되어가는가?": {
  "matchedTitle": "우리는 어떻게 괴물이 되어가는가",
  "author": "파울 페르하에허 (장혜경 역)",
  "publisher": "반비",
  "price": 15300,
  "url": "https://product.kyobobook.co.kr/detail/S000001291123",
  "found": true
 },
 "돌봄과 케어의 철학": {
  "matchedTitle": "돌봄과 케어의 철학",
  "author": "박광준",
  "publisher": "양서원",
  "price": 20000,
  "url": "https://product.kyobobook.co.kr/detail/S000217126019",
  "found": true
 },
 "비인간": {
  "matchedTitle": "비인간",
  "author": "김상민 외",
  "publisher": "사월의책",
  "price": 22500,
  "url": "https://product.kyobobook.co.kr/detail/S000219304415",
  "found": true
 },
 "영화의 이론": {
  "matchedTitle": null,
  "author": null,
  "publisher": null,
  "price": null,
  "url": null,
  "found": false
 },
 "아틀라스 중앙유라시아사": {
  "matchedTitle": "아틀라스 중앙유라시아사",
  "author": "김호동",
  "publisher": "사계절",
  "price": 32400,
  "url": "https://product.kyobobook.co.kr/detail/S000000870072",
  "found": true
 },
 "실크로드 세계사": {
  "matchedTitle": "실크로드 세계사 (전3권 세트)",
  "author": "피터 프랭코판 (이재황 역)",
  "publisher": "책과함께",
  "price": 29700,
  "url": "https://product.kyobobook.co.kr/detail/S000001921346",
  "found": true
 },
 "이만큼 가까운 일본": {
  "matchedTitle": "이만큼 가까운 일본",
  "author": "강태웅",
  "publisher": "창비",
  "price": 12600,
  "url": "https://product.kyobobook.co.kr/detail/S000000611942",
  "found": true
 },
 "일본사 시민강좌": {
  "matchedTitle": "일본사 시민강좌",
  "author": "이재석 외",
  "publisher": "연립서가",
  "price": 29700,
  "url": "https://product.kyobobook.co.kr/detail/S000213690767",
  "found": true
 },
 "아틀라스 일본사": {
  "matchedTitle": "아틀라스 일본사",
  "author": "일본사학회",
  "publisher": "사계절",
  "price": 32400,
  "url": "https://product.kyobobook.co.kr/detail/S000000869729",
  "found": true
 },
 "일본문화사-조몬토기부터 요시모토 바나나까지": {
  "matchedTitle": "일본문화사: 조몬 토기부터 요시모토 바나나까지",
  "author": "폴 발리 (박규태 역)",
  "publisher": "경당",
  "price": 25200,
  "url": "https://product.kyobobook.co.kr/detail/S000001360468",
  "found": true
 },
 "일본문화 이야기": {
  "matchedTitle": "일본문화 이야기",
  "author": "구태훈",
  "publisher": "재팬리서치21",
  "price": 19800,
  "url": "https://product.kyobobook.co.kr/detail/S000001553431",
  "found": true
 },
 "정의로운 전쟁과 평화주의": {
  "matchedTitle": "정의로운 전쟁과 평화주의",
  "author": "박도현",
  "publisher": "예영커뮤니케이션",
  "price": 9000,
  "url": "https://product.kyobobook.co.kr/detail/S000001289358",
  "found": true
 },
 "평화권의 이해": {
  "matchedTitle": "평화권의 이해",
  "author": "이경주",
  "publisher": "사회평론",
  "price": 26000,
  "url": "https://product.kyobobook.co.kr/detail/S000001003918",
  "found": true
 },
 "세계정치론": {
  "matchedTitle": "세계정치론: 경향과 변환 (15판)",
  "author": "찰스 W. 케글리, 셰넌 린지 블랜튼 (조한승, 황기식, 오영달 외 역)",
  "publisher": "한티미디어",
  "price": 37000,
  "url": "https://product.kyobobook.co.kr/detail/S000001000914",
  "found": true
 },
 "지속가능한 평화론": {
  "matchedTitle": "지속 가능한 평화론",
  "author": "장영권",
  "publisher": "한국학술정보",
  "price": 36000,
  "url": "https://product.kyobobook.co.kr/detail/S000000507688",
  "found": true
 },
 "펠로폰네소스 전쟁사": {
  "matchedTitle": "펠로폰네소스 전쟁사",
  "author": "투키디데스 (천병희 역)",
  "publisher": "숲",
  "price": 38700,
  "url": "https://product.kyobobook.co.kr/detail/S000001470221",
  "found": true
 },
 "임진왜란과 한중관계": {
  "matchedTitle": "임진왜란과 한중관계",
  "author": "한명기",
  "publisher": "역사비평사",
  "price": 21600,
  "url": "https://product.kyobobook.co.kr/detail/S000001197414",
  "found": true
 },
 "독소전쟁사 1941-1945": {
  "matchedTitle": "독소전쟁사 1941~1945",
  "author": "데이비드 글랜츠, 조너선 하우스",
  "publisher": "열린책들",
  "price": 26550,
  "url": "https://product.kyobobook.co.kr/detail/S000000581111",
  "found": true
 },
 "전쟁과 인간": {
  "matchedTitle": null,
  "author": null,
  "publisher": null,
  "price": null,
  "url": null,
  "found": false
 },
 "밀리터리 세계사 I": {
  "matchedTitle": null,
  "author": null,
  "publisher": null,
  "price": null,
  "url": null,
  "found": false
 },
 "전쟁의 재발견": {
  "matchedTitle": null,
  "author": null,
  "publisher": null,
  "price": null,
  "url": null,
  "found": false
 },
 "전쟁의 역사": {
  "matchedTitle": null,
  "author": null,
  "publisher": null,
  "price": null,
  "url": null,
  "found": false
 },
 "세계전쟁사": {
  "matchedTitle": "세계전쟁사 부도 (2판)",
  "author": "육군사관학교 전사학과",
  "publisher": "황금알",
  "price": 25000,
  "url": "https://product.kyobobook.co.kr/detail/S000001479730",
  "found": true
 },
 "무기의 역사": {
  "matchedTitle": null,
  "author": null,
  "publisher": null,
  "price": null,
  "url": null,
  "found": false
 },
 "전쟁으로 보는 중국사": {
  "matchedTitle": null,
  "author": null,
  "publisher": null,
  "price": null,
  "url": null,
  "found": false
 },
 "중국의 역사": {
  "matchedTitle": "중국의 역사",
  "author": "키시모토 미오 (권용철 외 역)",
  "publisher": "온샘",
  "price": 18000,
  "url": "https://product.kyobobook.co.kr/detail/S000200461183",
  "found": true
 },
 "현대 중국의 탄생": {
  "matchedTitle": "현대 중국의 탄생",
  "author": "클라우스 뮐한 (윤형진 역)",
  "publisher": "너머북스",
  "price": 46800,
  "url": "https://product.kyobobook.co.kr/detail/S000201351295",
  "found": true
 },
 "아틀라스 중국사": {
  "matchedTitle": "아틀라스 중국사 (개정증보판)",
  "author": "박한제 외",
  "publisher": "사계절",
  "price": 32400,
  "url": "https://product.kyobobook.co.kr/detail/S000000870050",
  "found": true
 },
 "함께 보는 한국근현대사": {
  "matchedTitle": "함께 보는 한국근현대사 (개정판)",
  "author": "역사학연구소",
  "publisher": "서해문집",
  "price": 18900,
  "url": "https://product.kyobobook.co.kr/detail/S000001167484",
  "found": true
 },
 "한국사와 한국인": {
  "matchedTitle": null,
  "author": null,
  "publisher": null,
  "price": null,
  "url": null,
  "found": false
 },
 "한국근현대사를 읽는다": {
  "matchedTitle": "한국 근현대사를 읽는다",
  "author": "박찬승",
  "publisher": "경인문화사",
  "price": 19800,
  "url": "https://product.kyobobook.co.kr/detail/S000000703959",
  "found": true
 },
 "미래를 여는 역사": {
  "matchedTitle": "미래를 여는 역사",
  "author": "한중일3국공동역사편찬위원회",
  "publisher": "한겨레출판",
  "price": 14400,
  "url": "https://product.kyobobook.co.kr/detail/S000061897358",
  "found": true
 },
 "새로운 한국사 길잡이 하": {
  "matchedTitle": "새로운 한국사 길잡이 하",
  "author": "한국사연구회",
  "publisher": "지식산업사",
  "price": 19500,
  "url": "https://product.kyobobook.co.kr/detail/S000000657621",
  "found": true
 },
 "역사비평": {
  "matchedTitle": null,
  "author": null,
  "publisher": null,
  "price": null,
  "url": null,
  "found": false
 },
 "논쟁으로 읽는 한국사 2: 근현대": {
  "matchedTitle": "논쟁으로 읽는 한국사 2: 근현대",
  "author": "역사비평 편집위원회",
  "publisher": "역사비평사",
  "price": 14400,
  "url": "https://product.kyobobook.co.kr/detail/S000001197625",
  "found": true
 },
 "시민의 한국사 2. 근현대편": {
  "matchedTitle": "시민의 한국사 2: 근현대편",
  "author": "한국역사연구회",
  "publisher": "돌베개",
  "price": 34200,
  "url": "https://product.kyobobook.co.kr/detail/S000061353966",
  "found": true
 },
 "한국 근대사 1": {
  "matchedTitle": "한국 근대사 1: 국민국가 수립운동과 좌절",
  "author": "연갑수 외",
  "publisher": "푸른역사",
  "price": 13500,
  "url": "https://product.kyobobook.co.kr/detail/S000001735041",
  "found": true
 },
 "한국 근대사 2": {
  "matchedTitle": "한국 근대사 2: 식민지 근대와 민족해방운동",
  "author": "김정인 외",
  "publisher": "푸른역사",
  "price": 15210,
  "url": "https://product.kyobobook.co.kr/detail/S000001735042",
  "found": true
 },
 "한국 현대사 1": {
  "matchedTitle": "한국현대사 1: 해방과 분단, 그리고 전쟁",
  "author": "정병준 외",
  "publisher": "푸른역사",
  "price": 16110,
  "url": "https://product.kyobobook.co.kr/detail/S000001735091",
  "found": true
 },
 "한국현대사 2": {
  "matchedTitle": "한국현대사 2: 경제성장과 민주주의, 그리고 통일의 과제",
  "author": "홍석률 외",
  "publisher": "푸른역사",
  "price": 22500,
  "url": "https://product.kyobobook.co.kr/detail/S000001735092",
  "found": true
 },
 "시민의 한국사 2": {
  "matchedTitle": "시민의 한국사 2: 근현대편",
  "author": "한국역사연구회",
  "publisher": "돌베개",
  "price": 34200,
  "url": "https://product.kyobobook.co.kr/detail/S000061353966",
  "found": true
 },
 "한국의 역사인식": {
  "matchedTitle": "한국의 역사인식 (상)",
  "author": "이우성 외",
  "publisher": "창작과비평사",
  "price": 13500,
  "url": "https://product.kyobobook.co.kr/detail/S000000609727",
  "found": true
 },
 "한국의 역사가와 역사학": {
  "matchedTitle": "한국의 역사가와 역사학 (상)",
  "author": "조동걸, 한영우, 박찬승 엮음",
  "publisher": "창작과비평사",
  "price": 27000,
  "url": "https://product.kyobobook.co.kr/detail/S000000609805",
  "found": true
 },
 "역사 어떻게 볼 것인가": {
  "matchedTitle": null,
  "author": null,
  "publisher": null,
  "price": null,
  "url": null,
  "found": false
 },
 "시민의 한국사": {
  "matchedTitle": "시민의 한국사 (전2권 세트)",
  "author": "한국역사연구회",
  "publisher": "돌베개",
  "price": 68400,
  "url": "https://product.kyobobook.co.kr/detail/S000061348077",
  "found": true
 },
 "미래를 여는 한국의 역사": {
  "matchedTitle": "미래를 여는 한국의 역사 세트 (전5권)",
  "author": "역사문제연구소",
  "publisher": "웅진지식하우스",
  "price": 81000,
  "url": "https://product.kyobobook.co.kr/detail/S000000405033",
  "found": true
 },
 "다시 찾는 우리역사": {
  "matchedTitle": "다시 찾는 우리역사 (전면개정판 2판)",
  "author": "한영우",
  "publisher": "경세원",
  "price": 42000,
  "url": "https://product.kyobobook.co.kr/detail/S000001287807",
  "found": true
 },
 "논쟁으로 읽는 한국사": {
  "matchedTitle": "논쟁으로 읽는 한국사 1: 전근대",
  "author": "역사비평 편집위원회",
  "publisher": "역사비평사",
  "price": 12600,
  "url": "https://product.kyobobook.co.kr/detail/S000001197624",
  "found": true
 },
 "혐오와 왜곡, 감정싸움 없이 한국사를 이야기하는 법": {
  "matchedTitle": "혐오와 왜곡, 감정싸움 없이 한국사를 이야기하는 법",
  "author": "심용환",
  "publisher": "휴머니스트",
  "price": 16200,
  "url": "https://product.kyobobook.co.kr/detail/S000201558664",
  "found": true
 },
 "20세기 우리 역사": {
  "matchedTitle": "20세기 우리 역사 (양장본)",
  "author": "강만길",
  "publisher": "창비",
  "price": 31500,
  "url": "https://product.kyobobook.co.kr/detail/S000000612104",
  "found": true
 },
 "한일 2천년사, 보이는 역사, 보이지 않는 역사": {
  "matchedTitle": "동아시아 속의 한일 2천년사",
  "author": "요시노 마코토 (한철호 외 옮김)",
  "publisher": "책과함께",
  "price": 15000,
  "url": "https://product.kyobobook.co.kr/detail/S000001468397",
  "found": true
 },
 "역사적으로 본 일본인의 한국관": {
  "matchedTitle": null,
  "author": null,
  "publisher": null,
  "price": null,
  "url": null,
  "found": false
 },
 "한일관계사의 재조명": {
  "matchedTitle": "한일관계사의 재조명 (동방문고 9)",
  "author": "역사학연구회 편",
  "publisher": "이론과실천",
  "price": 6000,
  "url": "https://product.kyobobook.co.kr/detail/S000000550309",
  "found": true
 },
 "한일양국의 상호인식": {
  "matchedTitle": null,
  "author": null,
  "publisher": null,
  "price": null,
  "url": null,
  "found": false
 },
 "근대적 일상과 여가의 탄생": {
  "matchedTitle": "근대적 일상과 여가의 탄생",
  "author": "송찬섭 외",
  "publisher": "지식의날개",
  "price": 15000,
  "url": "https://product.kyobobook.co.kr/detail/S000000458176",
  "found": true
 },
 "한국현대 생활문화사 1960년대": {
  "matchedTitle": "한국현대 생활문화사 1960년대 (근대화와 군대화)",
  "author": "김성보 외 주편 / 이혜령 외",
  "publisher": "창비",
  "price": 18000,
  "url": "https://product.kyobobook.co.kr/detail/S000000612711",
  "found": true
 },
 "한국현대 생활문화사 1970년대": {
  "matchedTitle": "한국현대 생활문화사: 1970년대 (새마을운동과 미니스커트)",
  "author": "허은 외",
  "publisher": "창비",
  "price": 18000,
  "url": "https://product.kyobobook.co.kr/detail/S000000612712",
  "found": true
 },
 "노비와 쇠고기": {
  "matchedTitle": "노비와 쇠고기 (성균관과 반촌의 조선사)",
  "author": "강명관",
  "publisher": "푸른역사",
  "price": 39000,
  "url": "https://product.kyobobook.co.kr/detail/S000201063549",
  "found": true
 },
 "신국제법입문": {
  "matchedTitle": "신국제법입문 (개정판 6판)",
  "author": "정인섭",
  "publisher": "박영사",
  "price": 28000,
  "url": "https://product.kyobobook.co.kr/detail/S000217184081",
  "found": true
 },
 "국제법을 통한 세상 읽기": {
  "matchedTitle": "국제법을 통한 세상 읽기",
  "author": "정인섭",
  "publisher": "일조각",
  "price": 40000,
  "url": "https://product.kyobobook.co.kr/detail/S000219055887",
  "found": true
 },
 "환경, 지구를 위한 리셋 그리고 우리의 선택: ESG": {
  "matchedTitle": "환경, 지구를 위한 리셋 그리고 우리의 선택",
  "author": "유재열 외",
  "publisher": "소금나무",
  "price": 20000,
  "url": "https://product.kyobobook.co.kr/detail/S000217295245",
  "found": true
 },
 "학술정보의 탐색 및 활용": {
  "matchedTitle": null,
  "author": null,
  "publisher": null,
  "price": null,
  "url": null,
  "found": false
 },
 "위험한 미국사": {
  "matchedTitle": "위험한 미국사",
  "author": "김봉중",
  "publisher": "알에이치코리아(RHK)",
  "price": 18500,
  "url": "https://product.kyobobook.co.kr/detail/S000217570383",
  "found": true
 },
 "미국민중사 세트": {
  "matchedTitle": null,
  "author": null,
  "publisher": null,
  "price": null,
  "url": null,
  "found": false
 },
 "미국을 발칵 뒤집은 판결 31": {
  "matchedTitle": "미국을 발칵 뒤집은 판결 31",
  "author": "L. 레너드 케스터, 사이먼 정",
  "publisher": "현암사",
  "price": 20000,
  "url": "https://product.kyobobook.co.kr/detail/S000000574726",
  "found": true
 },
 "반체제운동": {
  "matchedTitle": null,
  "author": null,
  "publisher": null,
  "price": null,
  "url": null,
  "found": false
 },
 "미국을 안다는 착각": {
  "matchedTitle": "미국을 안다는 착각",
  "author": "김봉중",
  "publisher": "빅피시",
  "price": 18800,
  "url": "https://product.kyobobook.co.kr/detail/S000214378244",
  "found": true
 },
 "인간관계와 의사소통의 심리학": {
  "matchedTitle": "인간관계와 의사소통의 심리학 (15판)",
  "author": "Ronald B. Adler, Russell F. Proctor II",
  "publisher": "박영스토리",
  "price": 32000,
  "url": "https://product.kyobobook.co.kr/detail/S000001834190",
  "found": true
 },
 "(마이어스의)심리학개론": {
  "matchedTitle": "마이어스의 심리학개론 (13판)",
  "author": "데이비드 G. 마이어스, 네이선 드월",
  "publisher": "시그마프레스",
  "price": 33000,
  "url": "https://product.kyobobook.co.kr/detail/S000001810701",
  "found": true
 },
 "생활속의 심리학": {
  "matchedTitle": "생활속의 심리학",
  "author": "박광열",
  "publisher": "퍼플",
  "price": 11400,
  "url": "https://product.kyobobook.co.kr/detail/S000216407014",
  "found": true
 },
 "(더 알고 싶은) 심리학": {
  "matchedTitle": "더 알고 싶은 심리학",
  "author": "한국심리학회",
  "publisher": "학지사",
  "price": 15000,
  "url": "https://product.kyobobook.co.kr/detail/S000001643320",
  "found": true
 },
 "그건 심리학적으로 맞지 않습니다만": {
  "matchedTitle": "그건 심리학적으로 맞지 않습니다만",
  "author": "최승원",
  "publisher": "책사람집",
  "price": 16800,
  "url": "https://product.kyobobook.co.kr/detail/S000212601753",
  "found": true
 },
 "감정의 이해": {
  "matchedTitle": "감정의 이해",
  "author": "엠마 헵번",
  "publisher": "포레스트북스",
  "price": 16800,
  "url": "https://product.kyobobook.co.kr/detail/S000212997416",
  "found": true
 },
 "성의 역사": {
  "matchedTitle": "성의 역사 1: 지식의 의지",
  "author": "미셸 푸코",
  "publisher": "나남",
  "price": 14800,
  "url": "https://product.kyobobook.co.kr/detail/S000000538933",
  "found": true
 },
 "풍속의 역사": {
  "matchedTitle": "[패키지] 풍속의 역사 세트 (전4권)",
  "author": "에두아르트 푹스",
  "publisher": "까치",
  "price": 60000,
  "url": "https://product.kyobobook.co.kr/detail/S000060306663",
  "found": true
 },
 "그리스 성 풍속사": {
  "matchedTitle": null,
  "author": null,
  "publisher": null,
  "price": null,
  "url": null,
  "found": false
 },
 "로마 성 풍속사": {
  "matchedTitle": null,
  "author": null,
  "publisher": null,
  "price": null,
  "url": null,
  "found": false
 },
 "사랑, 그 혼란스러운: 사랑을 믿는 이들을 위한 위험한 철학책": {
  "matchedTitle": null,
  "author": null,
  "publisher": null,
  "price": null,
  "url": null,
  "found": false
 },
 "썸타기와 어장관리에 관한 철학적 고찰": {
  "matchedTitle": "썸타기와 어장관리에 관한 철학적 고찰",
  "author": "최성호",
  "publisher": "필로소픽",
  "price": 15000,
  "url": "https://product.kyobobook.co.kr/detail/S000001760834",
  "found": true
 },
 "사랑을 배울 수 있다면": {
  "matchedTitle": "사랑을 배울 수 있다면",
  "author": "로버트 C. 솔로몬",
  "publisher": "오도스",
  "price": 25000,
  "url": "https://product.kyobobook.co.kr/detail/S000201077264",
  "found": true
 },
 "사랑의 오류에 대한 철학적 안내서": {
  "matchedTitle": "사랑의 오류에 대한 철학적 안내서",
  "author": "호세 A. 디에즈, 안드레아 이아코나",
  "publisher": "이무디",
  "price": 15000,
  "url": "https://product.kyobobook.co.kr/detail/S000200553382",
  "found": true
 },
 "우리는 왜 이별했을까?": {
  "matchedTitle": null,
  "author": null,
  "publisher": null,
  "price": null,
  "url": null,
  "found": false
 },
 "사랑에 관하여": {
  "matchedTitle": null,
  "author": null,
  "publisher": null,
  "price": null,
  "url": null,
  "found": false
 },
 "향연": {
  "matchedTitle": "향연 (정암고전총서)",
  "author": "플라톤",
  "publisher": "아카넷",
  "price": 15000,
  "url": "https://product.kyobobook.co.kr/detail/S000000848307",
  "found": true
 },
 "Nature of Love": {
  "matchedTitle": "The Nature of Love, Volume 1: Plato to Luther",
  "author": "Irving Singer",
  "publisher": "MIT Press",
  "price": 100580,
  "url": "https://product.kyobobook.co.kr/detail/S000006960283",
  "found": true
 },
 "니코마코스 윤리학": {
  "matchedTitle": "니코마코스 윤리학 (그리스어 원전 완역)",
  "author": "아리스토텔레스",
  "publisher": "현대지성",
  "price": 19900,
  "url": "https://product.kyobobook.co.kr/detail/S000001718369",
  "found": true
 },
 "낭만적 유토피아 소비하기": {
  "matchedTitle": "낭만적 유토피아 소비하기",
  "author": "에바 일루즈",
  "publisher": "이학사",
  "price": 35000,
  "url": "https://product.kyobobook.co.kr/detail/S000219796245",
  "found": true
 },
 "제2의 성": {
  "matchedTitle": "제2의 성 (합본 완역판)",
  "author": "시몬느 드 보부아르",
  "publisher": "을유문화사",
  "price": 32000,
  "url": "https://product.kyobobook.co.kr/detail/S000000575910",
  "found": true
 },
 "교양 노동법": {
  "matchedTitle": "교양노동법 (4판)",
  "author": "한국노동법학회",
  "publisher": "문우사",
  "price": 25000,
  "url": "https://product.kyobobook.co.kr/detail/S000219248470",
  "found": true
 },
 "언어와 사회, 그리고 문화": {
  "matchedTitle": "언어와 사회, 그리고 문화 (개정판)",
  "author": "권경근, 박선자, 최규수 외",
  "publisher": "박이정",
  "price": 15000,
  "url": "https://product.kyobobook.co.kr/detail/S000001767501",
  "found": true
 },
 "거장의 나무": {
  "matchedTitle": "거장의 나무",
  "author": "문학산",
  "publisher": "작가",
  "price": 18000,
  "url": "https://product.kyobobook.co.kr/detail/S000001941794",
  "found": true
 },
 "관객없는 예술영화": {
  "matchedTitle": null,
  "author": null,
  "publisher": null,
  "price": null,
  "url": null,
  "found": false
 },
 "감독 오즈 야스지로": {
  "matchedTitle": null,
  "author": null,
  "publisher": null,
  "price": null,
  "url": null,
  "found": false
 },
 "영화를 어떻게 읽을 것인가": {
  "matchedTitle": "영화를 어떻게 읽을 것인가",
  "author": "임정택, 심양섭 외",
  "publisher": "연세대학교출판부",
  "price": 12000,
  "url": "https://product.kyobobook.co.kr/detail/S000001099936",
  "found": true
 },
 "정의란 무엇인가": {
  "matchedTitle": "정의란 무엇인가",
  "author": "마이클 샌델",
  "publisher": "와이즈베리",
  "price": 18000,
  "url": "https://product.kyobobook.co.kr/detail/S000000625441",
  "found": true
 },
 "정의사회의 조건": {
  "matchedTitle": null,
  "author": null,
  "publisher": null,
  "price": null,
  "url": null,
  "found": false
 },
 "정의론": {
  "matchedTitle": "정의론",
  "author": "존 롤스",
  "publisher": "이학사",
  "price": 28000,
  "url": "https://product.kyobobook.co.kr/detail/S000001379125",
  "found": true
 },
 "자유주의와 공동체주의": {
  "matchedTitle": "자유주의와 공동체주의",
  "author": "스테판 뮬홀, 애덤 스위프트",
  "publisher": "한울아카데미",
  "price": 34000,
  "url": "https://product.kyobobook.co.kr/detail/S000000683387",
  "found": true
 },
 "민주주의의 불만": {
  "matchedTitle": null,
  "author": null,
  "publisher": null,
  "price": null,
  "url": null,
  "found": false
 },
 "젠더": {
  "matchedTitle": "젠더",
  "author": "래윈 코넬, 리베카 피어스",
  "publisher": "현실문화",
  "price": 20000,
  "url": "https://product.kyobobook.co.kr/detail/S000001023483",
  "found": true
 },
 "페미니즘: 교차하는 관점들": {
  "matchedTitle": "페미니즘: 교차하는 관점들",
  "author": "로즈마리 퍼트넘 통, 티나 페르난데스 보츠",
  "publisher": "학이시습",
  "price": 24800,
  "url": "https://product.kyobobook.co.kr/detail/S000001676247",
  "found": true
 },
 "다시 페미니즘의 도전": {
  "matchedTitle": "다시 페미니즘의 도전",
  "author": "정희진",
  "publisher": "교양인",
  "price": 18000,
  "url": "https://product.kyobobook.co.kr/detail/S000211436342",
  "found": true
 },
 "행정법 강론": {
  "matchedTitle": "행정법강론 (11판)",
  "author": "김남철",
  "publisher": "박영사",
  "price": 75000,
  "url": "https://product.kyobobook.co.kr/detail/S000215765609",
  "found": true
 },
 "지방자치법": {
  "matchedTitle": "지방자치법 (2판)",
  "author": "전훈, 이진수 외",
  "publisher": "박영사",
  "price": 22000,
  "url": "https://product.kyobobook.co.kr/detail/S000219542672",
  "found": true
 },
 "한국헌법론": {
  "matchedTitle": "한국헌법론 (22판)",
  "author": "허영",
  "publisher": "박영사",
  "price": 67000,
  "url": "https://product.kyobobook.co.kr/detail/S000219240910",
  "found": true
 },
 "비교헌법사론": {
  "matchedTitle": "비교헌법사론",
  "author": "신우철",
  "publisher": "법문사",
  "price": 30000,
  "url": "https://product.kyobobook.co.kr/detail/S000000452949",
  "found": true
 },
 "헌법의 이해": {
  "matchedTitle": "헌법의 이해 (개정판)",
  "author": "허영",
  "publisher": "박영사",
  "price": 37000,
  "url": "https://product.kyobobook.co.kr/detail/S000217027584",
  "found": true
 },
 "조선에서 온 사진엽서": {
  "matchedTitle": null,
  "author": null,
  "publisher": null,
  "price": null,
  "url": null,
  "found": false
 },
 "한국 근현대 여성사 1-3": {
  "matchedTitle": "한국 근현대 여성사 1 (개화기~1945년)",
  "author": "전경옥 외",
  "publisher": "모티브북",
  "price": 20000,
  "url": "https://product.kyobobook.co.kr/detail/S000001467473",
  "found": true
 },
 "조선여성문학사": {
  "matchedTitle": "조선여성문학사",
  "author": "이경하",
  "publisher": "서울대학교출판문화원",
  "price": 35000,
  "url": "https://product.kyobobook.co.kr/detail/S000211971381",
  "found": true
 },
 "(행복한 가족을 위한)예비부모교육": {
  "matchedTitle": "행복한 가족을 위한 예비부모교육",
  "author": "전선옥",
  "publisher": "창지사",
  "price": 19000,
  "url": "https://product.kyobobook.co.kr/detail/S000000661336",
  "found": true
 },
 "헌법소송법론": {
  "matchedTitle": "헌법소송법론 (17판)",
  "author": "허영",
  "publisher": "박영사",
  "price": 48000,
  "url": "https://product.kyobobook.co.kr/detail/S000200895664",
  "found": true
 },
 "헌법재판실무제요": {
  "matchedTitle": null,
  "author": null,
  "publisher": null,
  "price": null,
  "url": null,
  "found": false
 },
 "憲法學": {
  "matchedTitle": "헌법학 (26판)",
  "author": "성낙인",
  "publisher": "법문사",
  "price": 61000,
  "url": "https://product.kyobobook.co.kr/detail/S000219337569",
  "found": true
 }
};
