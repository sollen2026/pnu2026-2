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
  }
};
