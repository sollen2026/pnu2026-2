// 효원균형교양 및 효원창의교양 8개 소영역 시간표 데이터
// 출처: 2026학년도 2학기 개설 시간표 (사범대학 일반사회교육과 2026학번 기준)
// 필터링: 「2026학년도 2학기 교양교과목 수강지도 지침」 Ⅳ장 2절 나 — 학생 소속학과(일반사회교육과) 개설 교과목은 수강신청 불가하므로 제외

const RAW_SASANG = [
 {
  "name": "유라시아근대사읽기",
  "section": "001",
  "professor": "양민종",
  "scheduleRaw": "금 18:00-21:00 306-215",
  "capacity": 200,
  "code": "ZF1100729",
  "credit": 3,
  "offerDept": "노어노문학과"
 },
 {
  "name": "한국의역사와역사인식",
  "section": "001",
  "professor": "윤석호",
  "scheduleRaw": "월 13:30(75) 306-317,, 수 13:30(75) 306-317",
  "capacity": 60,
  "code": "ZF1100265",
  "credit": 3,
  "offerDept": "사학과"
 },
 {
  "name": "한국의역사와역사인식",
  "section": "002",
  "professor": "김숙경",
  "scheduleRaw": "금 10:00-13:00 306-317",
  "capacity": 60,
  "code": "ZF1100265",
  "credit": 3,
  "offerDept": "사학과"
 },
 {
  "name": "한국의역사와역사인식",
  "section": "003",
  "professor": "여민주",
  "scheduleRaw": "화 12:00(75) 405-2103,, 목 12:00(75) 405-2103",
  "capacity": 60,
  "code": "ZF1100265",
  "credit": 3,
  "offerDept": "사학과"
 },
 {
  "name": "중국의역사와문화",
  "section": "001",
  "professor": "윤욱",
  "scheduleRaw": "월 10:30(75) 306-316,, 수 10:30(75) 306-316",
  "capacity": 60,
  "code": "ZF1100271",
  "credit": 3,
  "offerDept": "사학과"
 },
 {
  "name": "중국의역사와문화",
  "section": "002",
  "professor": "김지영",
  "scheduleRaw": "월 16:30(75) 306-317,, 수 16:30(75) 306-317",
  "capacity": 60,
  "code": "ZF1100271",
  "credit": 3,
  "offerDept": "사학과"
 },
 {
  "name": "중국의역사와문화",
  "section": "200",
  "professor": "민경준",
  "scheduleRaw": "화 15:00(75) 밀양M03-3455,, 목 15:00(75) 밀양M03-3455",
  "capacity": 60,
  "code": "ZF1100271",
  "credit": 3,
  "offerDept": "사학과"
 },
 {
  "name": "문화로보는서양의역사",
  "section": "001",
  "professor": "배혜정",
  "scheduleRaw": "월 13:30(75) 306-316,, 수 13:30(75) 306-316",
  "capacity": 60,
  "code": "ZF1100275",
  "credit": 3,
  "offerDept": "사학과"
 },
 {
  "name": "문화로보는서양의역사",
  "section": "002",
  "professor": "이진옥",
  "scheduleRaw": "월 09:00(75) 306-316,, 수 09:00(75) 306-316",
  "capacity": 60,
  "code": "ZF1100275",
  "credit": 3,
  "offerDept": "사학과"
 },
 {
  "name": "문화로보는서양의역사",
  "section": "003",
  "professor": "김영숙",
  "scheduleRaw": "금 10:00-13:00 405-2104",
  "capacity": 60,
  "code": "ZF1100275",
  "credit": 3,
  "offerDept": "사학과"
 },
 {
  "name": "한국근현대사의흐름",
  "section": "001",
  "professor": "차철욱",
  "scheduleRaw": "월 15:00(75) 306-317,, 수 15:00(75) 306-317",
  "capacity": 60,
  "code": "ZF1100281",
  "credit": 3,
  "offerDept": "사학과"
 },
 {
  "name": "한국근현대사의흐름",
  "section": "002",
  "professor": "박경연",
  "scheduleRaw": "화 16:30(75) 405-2104,, 목 16:30(75) 405-2104",
  "capacity": 60,
  "code": "ZF1100281",
  "credit": 3,
  "offerDept": "사학과"
 },
 {
  "name": "한국근현대사의흐름",
  "section": "003",
  "professor": "신정윤",
  "scheduleRaw": "월 12:00(75) 405-2104,, 수 12:00(75) 405-2104",
  "capacity": 60,
  "code": "ZF1100281",
  "credit": 3,
  "offerDept": "사학과"
 },
 {
  "name": "한국근현대사의흐름",
  "section": "200",
  "professor": "이창섭",
  "scheduleRaw": "월 13:30(75) 밀양M02-2330,, 수 13:30(75) 밀양M02-2330",
  "capacity": 50,
  "code": "ZF1100281",
  "credit": 3,
  "offerDept": "사학과"
 },
 {
  "name": "일본의역사와문화",
  "section": "001",
  "professor": "이승희",
  "scheduleRaw": "화 13:30(75) 306-316,, 목 13:30(75) 306-316",
  "capacity": 60,
  "code": "ZF1100294",
  "credit": 3,
  "offerDept": "사학과"
 },
 {
  "name": "일본의역사와문화",
  "section": "002",
  "professor": "조승미",
  "scheduleRaw": "화 16:30(75) 306-316,, 목 16:30(75) 306-316",
  "capacity": 60,
  "code": "ZF1100294",
  "credit": 3,
  "offerDept": "사학과"
 },
 {
  "name": "동북아시아문화교류의역사",
  "section": "001",
  "professor": "김재봉",
  "scheduleRaw": "화 09:00(75) 306-317,, 목 09:00(75) 306-317",
  "capacity": 30,
  "code": "ZF1100794",
  "credit": 3,
  "offerDept": "사학과"
 },
 {
  "name": "20세기지구사",
  "section": "001",
  "professor": "권경택",
  "scheduleRaw": "월 12:00(75) 306-410,, 수 12:00(75) 306-410",
  "capacity": 60,
  "code": "ZF1101272",
  "credit": 3,
  "offerDept": "사학과"
 },
 {
  "name": "20세기지구사",
  "section": "002",
  "professor": "정영주",
  "scheduleRaw": "화 15:00(75) 405-2103,, 목 15:00(75) 405-2103",
  "capacity": 60,
  "code": "ZF1101272",
  "credit": 3,
  "offerDept": "사학과"
 },
 {
  "name": "20세기지구사",
  "section": "003",
  "professor": "김정화",
  "scheduleRaw": "화 12:00(75) 306-313,, 목 12:00(75) 306-313",
  "capacity": 60,
  "code": "ZF1101272",
  "credit": 3,
  "offerDept": "사학과"
 },
 {
  "name": "유라시아문화사",
  "section": "001",
  "professor": "김지영",
  "scheduleRaw": "월 15:00(75) 405-2103,, 수 15:00(75) 405-2103",
  "capacity": 30,
  "code": "ZF1200535",
  "credit": 3,
  "offerDept": "사학과"
 },
 {
  "name": "서양철학의이해",
  "section": "001",
  "professor": "김영희",
  "scheduleRaw": "월 15:00(75) 306-307,, 수 15:00(75) 306-307",
  "capacity": 30,
  "code": "ZF1100298",
  "credit": 3,
  "offerDept": "철학과"
 },
 {
  "name": "서양철학의이해",
  "section": "200",
  "professor": "정진우",
  "scheduleRaw": "월 14:00-17:00 밀양M02-2111",
  "capacity": 30,
  "code": "ZF1100298",
  "credit": 3,
  "offerDept": "철학과"
 },
 {
  "name": "생태적사유와생명철학",
  "section": "001",
  "professor": "김창준",
  "scheduleRaw": "월 12:00(75) 306-409,, 수 12:00(75) 306-409",
  "capacity": 30,
  "code": "ZF1100777",
  "credit": 3,
  "offerDept": "철학과"
 },
 {
  "name": "생태적사유와생명철학",
  "section": "200",
  "professor": "김창준",
  "scheduleRaw": "화 14:00-17:00 밀양M02-2212",
  "capacity": 30,
  "code": "ZF1100777",
  "credit": 3,
  "offerDept": "철학과"
 },
 {
  "name": "문명으로근대가로지르기",
  "section": "001",
  "professor": "박정심",
  "scheduleRaw": "화 17:00-20:00 306-408",
  "capacity": 50,
  "code": "ZF1200289",
  "credit": 3,
  "offerDept": "철학과"
 },
 {
  "name": "교양으로서의고고학",
  "section": "001",
  "professor": "배진성",
  "scheduleRaw": "월 10:30(75) 306-209,, 수 10:30(75) 306-209",
  "capacity": 30,
  "code": "ZF1100313",
  "credit": 3,
  "offerDept": "고고학과"
 },
 {
  "name": "교양으로서의고고학",
  "section": "002",
  "professor": "김일규",
  "scheduleRaw": "월 10:30(75) 306-203,, 수 10:30(75) 306-203",
  "capacity": 30,
  "code": "ZF1100313",
  "credit": 3,
  "offerDept": "고고학과"
 },
 {
  "name": "고고학과 발굴",
  "section": "001",
  "professor": "임지영",
  "scheduleRaw": "화 10:30(75) 306-205,, 목 10:30(75) 306-205",
  "capacity": 30,
  "code": "ZF1200447",
  "credit": 3,
  "offerDept": "고고학과"
 },
 {
  "name": "삶과교육",
  "section": "001",
  "professor": "김회용 외 1명",
  "scheduleRaw": "월 13:30(75) 417-402,, 수 13:30(75) 417-402",
  "capacity": 30,
  "code": "ZF1100807",
  "credit": 3,
  "offerDept": "교육학과"
 },
 {
  "name": "역사소비시대의공공역사하기",
  "section": "001",
  "professor": "한승훈",
  "scheduleRaw": "화 09:00(75) 418-106,, 목 09:00(75) 418-106",
  "capacity": 0,
  "code": "ZF1101115",
  "credit": 3,
  "offerDept": "역사교육과"
 },
 {
  "name": "역사소비시대의공공역사하기",
  "section": "002",
  "professor": "박미향",
  "scheduleRaw": "금 13:30-16:30 418-106",
  "capacity": 0,
  "code": "ZF1101115",
  "credit": 3,
  "offerDept": "역사교육과"
 },
 {
  "name": "전쟁과세계사",
  "section": "001",
  "professor": "홍성화",
  "scheduleRaw": "월 16:30(75) 418-106,, 수 16:30(75) 418-106",
  "capacity": 0,
  "code": "ZF1200596",
  "credit": 3,
  "offerDept": "역사교육과"
 },
 {
  "name": "전쟁과세계사",
  "section": "002",
  "professor": "서은미",
  "scheduleRaw": "화 16:30(75) 417-104,, 목 16:30(75) 417-104",
  "capacity": 0,
  "code": "ZF1200596",
  "credit": 3,
  "offerDept": "역사교육과"
 },
 {
  "name": "동양윤리와삶의지혜",
  "section": "001",
  "professor": "김혜수",
  "scheduleRaw": "화 15:00(75) 417-306,, 목 15:00(75) 417-306",
  "capacity": 30,
  "code": "ZF1101132",
  "credit": 3,
  "offerDept": "윤리교육과"
 },
 {
  "name": "동양윤리와삶의지혜",
  "section": "002",
  "professor": "김나윤",
  "scheduleRaw": "화 15:00(75) 417-303,, 목 15:00(75) 417-303",
  "capacity": 30,
  "code": "ZF1101132",
  "credit": 3,
  "offerDept": "윤리교육과"
 },
 {
  "name": "미디어와미래사회의응용윤리",
  "section": "001",
  "professor": "장혜진 외 1명",
  "scheduleRaw": "월 13:30(75) 417-303,, 수 13:30(75) 417-303",
  "capacity": 30,
  "code": "ZF1200767",
  "credit": 3,
  "offerDept": "윤리교육과"
 },
 {
  "name": "미디어와미래사회의응용윤리",
  "section": "002",
  "professor": "민세명",
  "scheduleRaw": "월 13:30(75) 417-104,, 수 13:30(75) 417-104",
  "capacity": 30,
  "code": "ZF1200767",
  "credit": 3,
  "offerDept": "윤리교육과"
 },
 {
  "name": "금지로읽는한국사",
  "section": "001",
  "professor": "송정란",
  "scheduleRaw": "월 13:00(75) 416-510,, 수 13:00(75) 416-510",
  "capacity": 30,
  "code": "ZF1101228",
  "credit": 3,
  "offerDept": "교양교육원"
 },
 {
  "name": "경관사진으로이해하는역사",
  "section": "001",
  "professor": "탁한명",
  "scheduleRaw": "월 15:00(75) 416-510,, 수 15:00(75) 416-510",
  "capacity": 20,
  "code": "ZF1101229",
  "credit": 3,
  "offerDept": "교양교육원"
 },
 {
  "name": "영화로이해하는인문학키워드",
  "section": "001",
  "professor": "최성희",
  "scheduleRaw": "월 12:00(75) 206-11302-1,, 수 12:00(75) 206-11302-1",
  "capacity": 30,
  "code": "ZF1200567",
  "credit": 3,
  "offerDept": "교양교육원"
 },
 {
  "name": "유학생을위한한국의역사와문화",
  "section": "100",
  "professor": "이은상",
  "scheduleRaw": "월 10:30(75) 201-6208,, 수 10:30(75) 201-6208",
  "capacity": 30,
  "code": "ZF1200570",
  "credit": 3,
  "offerDept": "교양교육원"
 },
 {
  "name": "유학생을위한한국의역사와문화",
  "section": "101",
  "professor": "양흥숙",
  "scheduleRaw": "월 13:30(75) 105-3504,, 수 13:30(75) 105-3504",
  "capacity": 30,
  "code": "ZF1200570",
  "credit": 3,
  "offerDept": "교양교육원"
 },
 {
  "name": "근현대 중국의 지식인들-인간을 묻다",
  "section": "001",
  "professor": "이은상",
  "scheduleRaw": "금 09:00-12:00 201-6208",
  "capacity": 120,
  "code": "ZF1200716",
  "credit": 3,
  "offerDept": "교양교육원"
 },
 {
  "name": "한일관계의역사와문화",
  "section": "001",
  "professor": "차철욱",
  "scheduleRaw": "월 10:30(75) 105-3314,, 수 10:30(75) 105-3314",
  "capacity": 35,
  "code": "ZF1100383",
  "credit": 3,
  "offerDept": "한국민족문화연구소"
 },
 {
  "name": "전쟁과 평화의 이해",
  "section": "001",
  "professor": "이상봉",
  "scheduleRaw": "화 10:30(75) 105-3414,, 목 10:30(75) 105-3414",
  "capacity": 30,
  "code": "ZF1200549",
  "credit": 3,
  "offerDept": "통일한국연구원"
 }
];

const RAW_SAHOE = [
 {
  "name": "현대생활과헌법재판",
  "section": "068",
  "professor": "정한신",
  "scheduleRaw": "화 12:00(75) 609-317,, 목 12:00(75) 609-317",
  "capacity": 40,
  "code": "ZF1100445",
  "credit": 3,
  "offerDept": "법학과"
 },
 {
  "name": "금융·증권보험분쟁과피해자구제",
  "section": "068",
  "professor": "최영주",
  "scheduleRaw": "월 10:30(75) 609-417,, 수 10:30(75) 609-417",
  "capacity": 40,
  "code": "ZF1100647",
  "credit": 3,
  "offerDept": "법학과"
 },
 {
  "name": "형법입문",
  "section": "068",
  "professor": "강지현",
  "scheduleRaw": "금 09:00-12:00 609-218",
  "capacity": 40,
  "code": "ZF1200223",
  "credit": 3,
  "offerDept": "법학과"
 },
 {
  "name": "창작과엔터테인먼트에관한법률지식",
  "section": "068",
  "professor": "강명수",
  "scheduleRaw": "월 15:00(75) 609-218,, 수 15:00(75) 609-218",
  "capacity": 40,
  "code": "ZF1200254",
  "credit": 3,
  "offerDept": "법학과"
 },
 {
  "name": "아르바이트대학생을위한교양노동법",
  "section": "068",
  "professor": "오대영",
  "scheduleRaw": "월 13:30(75) 609-117,, 수 13:30(75) 609-117",
  "capacity": 60,
  "code": "ZF1200398",
  "credit": 3,
  "offerDept": "법학과"
 },
 {
  "name": "아르바이트대학생을위한교양노동법",
  "section": "069",
  "professor": "김수민",
  "scheduleRaw": "화 09:00(75) 609-117,, 목 09:00(75) 609-117",
  "capacity": 60,
  "code": "ZF1200398",
  "credit": 3,
  "offerDept": "법학과"
 },
 {
  "name": "국제법입문",
  "section": "068",
  "professor": "정세정",
  "scheduleRaw": "월 16:30(75) 609-216,, 수 16:30(75) 609-216",
  "capacity": 40,
  "code": "ZF1200401",
  "credit": 3,
  "offerDept": "법학과"
 },
 {
  "name": "스토리텔링민법",
  "section": "068",
  "professor": "김현수",
  "scheduleRaw": "월 18:00-21:00 609-117",
  "capacity": 170,
  "code": "ZF1200516",
  "credit": 3,
  "offerDept": "법학과"
 },
 {
  "name": "공정사회로가는계약법",
  "section": "068",
  "professor": "윤석찬",
  "scheduleRaw": "금 17:00-20:00 609-317",
  "capacity": 180,
  "code": "ZF1200734",
  "credit": 3,
  "offerDept": "법학과"
 },
 {
  "name": "주민참여와지방자치",
  "section": "068",
  "professor": "정승윤",
  "scheduleRaw": "월 15:00(75) 609-315,, 수 15:00(75) 609-315",
  "capacity": 40,
  "code": "ZF1200738",
  "credit": 3,
  "offerDept": "법학과"
 },
 {
  "name": "판결로배우는리걸마인드",
  "section": "068",
  "professor": "장승희",
  "scheduleRaw": "금 09:30-12:30 609-215",
  "capacity": 40,
  "code": "ZF9800407",
  "credit": 3,
  "offerDept": "법학과"
 },
 {
  "name": "언어사회와문화",
  "section": "001",
  "professor": "권경근",
  "scheduleRaw": "월 15:00(75) 306-313,, 수 15:00(75) 306-313",
  "capacity": 0,
  "code": "ZF1100699",
  "credit": 3,
  "offerDept": "국어국문학과"
 },
 {
  "name": "언어사회와문화",
  "section": "002",
  "professor": "김태우",
  "scheduleRaw": "화 15:00(75) 306-313,, 목 15:00(75) 306-313",
  "capacity": 0,
  "code": "ZF1100699",
  "credit": 3,
  "offerDept": "국어국문학과"
 },
 {
  "name": "언어사회와문화",
  "section": "003",
  "professor": "김석진",
  "scheduleRaw": "화 15:00(75) 405-2104,, 목 15:00(75) 405-2104",
  "capacity": 0,
  "code": "ZF1100699",
  "credit": 3,
  "offerDept": "국어국문학과"
 },
 {
  "name": "언어사회와문화",
  "section": "004",
  "professor": "이옥희",
  "scheduleRaw": "월 15:00(75) 306-308,, 수 15:00(75) 306-308",
  "capacity": 0,
  "code": "ZF1100699",
  "credit": 3,
  "offerDept": "국어국문학과"
 },
 {
  "name": "언어사회와문화",
  "section": "005",
  "professor": "김지현",
  "scheduleRaw": "화 15:00(75) 306-209,, 목 15:00(75) 306-209",
  "capacity": 0,
  "code": "ZF1100699",
  "credit": 3,
  "offerDept": "국어국문학과"
 },
 {
  "name": "언어사회와문화",
  "section": "006",
  "professor": "손평효",
  "scheduleRaw": "월 15:00(75) 306-410,, 수 15:00(75) 306-410",
  "capacity": 0,
  "code": "ZF1100699",
  "credit": 3,
  "offerDept": "국어국문학과"
 },
 {
  "name": "언어사회와문화",
  "section": "200",
  "professor": "손평효",
  "scheduleRaw": "금 10:00-13:00 밀양M03-3548",
  "capacity": 0,
  "code": "ZF1100699",
  "credit": 3,
  "offerDept": "국어국문학과"
 },
 {
  "name": "일본문화의이해",
  "section": "001",
  "professor": "김소영",
  "scheduleRaw": "화 15:00(75) 306-206,, 목 15:00(75) 306-206",
  "capacity": 30,
  "code": "ZF1100337",
  "credit": 3,
  "offerDept": "일어일문학과"
 },
 {
  "name": "언어, 세상의 지문",
  "section": "001",
  "professor": "김종수",
  "scheduleRaw": "금 12:00-15:00 306-311",
  "capacity": 0,
  "code": "ZF1200339",
  "credit": 3,
  "offerDept": "독어독문학과"
 },
 {
  "name": "서양의성과풍속의역사",
  "section": "001",
  "professor": "서영건",
  "scheduleRaw": "화 10:30(75) 306-316,, 목 10:30(75) 306-316",
  "capacity": 60,
  "code": "ZF1100397",
  "credit": 3,
  "offerDept": "사학과"
 },
 {
  "name": "서양의성과풍속의역사",
  "section": "002",
  "professor": "이진옥",
  "scheduleRaw": "월 10:30(75) 405-2104,, 수 10:30(75) 405-2104",
  "capacity": 60,
  "code": "ZF1100397",
  "credit": 3,
  "offerDept": "사학과"
 },
 {
  "name": "서양의성과풍속의역사",
  "section": "003",
  "professor": "성진희",
  "scheduleRaw": "화 09:00(75) 306-316,, 목 09:00(75) 306-316",
  "capacity": 60,
  "code": "ZF1100397",
  "credit": 3,
  "offerDept": "사학과"
 },
 {
  "name": "서양의성과풍속의역사",
  "section": "200",
  "professor": "성진희",
  "scheduleRaw": "금 10:00-13:00 밀양M03-3455",
  "capacity": 50,
  "code": "ZF1100397",
  "credit": 3,
  "offerDept": "사학과"
 },
 {
  "name": "한국전통사회와여성",
  "section": "001",
  "professor": "송정란",
  "scheduleRaw": "월 09:00(75) 306-317,, 수 09:00(75) 306-317",
  "capacity": 30,
  "code": "ZF1100427",
  "credit": 3,
  "offerDept": "사학과"
 },
 {
  "name": "성과사랑의철학",
  "section": "001",
  "professor": "조창오",
  "scheduleRaw": "화 15:00(75) 306-307,, 목 15:00(75) 306-307",
  "capacity": 30,
  "code": "ZF1100431",
  "credit": 3,
  "offerDept": "철학과"
 },
 {
  "name": "성과사랑의철학",
  "section": "002",
  "professor": "박요한",
  "scheduleRaw": "화 15:00(75) 306-203,, 목 15:00(75) 306-203",
  "capacity": 30,
  "code": "ZF1100431",
  "credit": 3,
  "offerDept": "철학과"
 },
 {
  "name": "성과사랑의철학",
  "section": "003",
  "professor": "김나원",
  "scheduleRaw": "월 13:30(75) 405-2103,, 수 13:30(75) 405-2103",
  "capacity": 35,
  "code": "ZF1100431",
  "credit": 3,
  "offerDept": "철학과"
 },
 {
  "name": "성과사랑의철학",
  "section": "200",
  "professor": "양창아",
  "scheduleRaw": "수 14:00-17:00 밀양M02-2111",
  "capacity": 30,
  "code": "ZF1100431",
  "credit": 3,
  "offerDept": "철학과"
 },
 {
  "name": "현대정치의탐구",
  "section": "001",
  "professor": "서재권",
  "scheduleRaw": "금 13:00-16:00 422-101",
  "capacity": 100,
  "code": "ZF1100433",
  "credit": 3,
  "offerDept": "정치외교학과"
 },
 {
  "name": "다양성과 위기의 시대",
  "section": "001",
  "professor": "김지훈",
  "scheduleRaw": "금 12:00-15:00 422-102",
  "capacity": 90,
  "code": "ZF1101143",
  "credit": 3,
  "offerDept": "정치외교학과"
 },
 {
  "name": "다양성과 위기의 시대",
  "section": "500",
  "professor": "김지훈",
  "scheduleRaw": "금 15:00-18:00 422-102",
  "capacity": 30,
  "code": "ZF1101143",
  "credit": 3,
  "offerDept": "정치외교학과"
 },
 {
  "name": "생활속의심리학",
  "section": "001",
  "professor": "서수균",
  "scheduleRaw": "금 18:00-21:00 422-101",
  "capacity": 150,
  "code": "ZF1101117",
  "credit": 3,
  "offerDept": "심리학과"
 },
 {
  "name": "생활속의심리학",
  "section": "002",
  "professor": "이동훈",
  "scheduleRaw": "월 15:00(75) 416-401,, 수 15:00(75) 416-401",
  "capacity": 60,
  "code": "ZF1101117",
  "credit": 3,
  "offerDept": "심리학과"
 },
 {
  "name": "생활속의심리학",
  "section": "003",
  "professor": "조승빈",
  "scheduleRaw": "월 10:30(75) 206-11204,, 수 10:30(75) 206-11204",
  "capacity": 60,
  "code": "ZF1101117",
  "credit": 3,
  "offerDept": "심리학과"
 },
 {
  "name": "생활속의심리학",
  "section": "004",
  "professor": "임정은",
  "scheduleRaw": "화 10:30(75) 416-411,, 목 10:30(75) 416-411",
  "capacity": 60,
  "code": "ZF1101117",
  "credit": 3,
  "offerDept": "심리학과"
 },
 {
  "name": "생활속의심리학",
  "section": "005",
  "professor": "신현희",
  "scheduleRaw": "화 12:00(75) 416-416,, 목 12:00(75) 416-416",
  "capacity": 60,
  "code": "ZF1101117",
  "credit": 3,
  "offerDept": "심리학과"
 },
 {
  "name": "생활속의심리학",
  "section": "006",
  "professor": "이화진",
  "scheduleRaw": "화 18:00(75) 416-416,, 목 18:00(75) 416-416",
  "capacity": 60,
  "code": "ZF1101117",
  "credit": 3,
  "offerDept": "심리학과"
 },
 {
  "name": "생활속의심리학",
  "section": "007",
  "professor": "김미숙",
  "scheduleRaw": "화 13:30(75) 422-507,, 목 13:30(75) 422-507",
  "capacity": 60,
  "code": "ZF1101117",
  "credit": 3,
  "offerDept": "심리학과"
 },
 {
  "name": "생활속의심리학",
  "section": "008",
  "professor": "권소영",
  "scheduleRaw": "화 16:30(75) 422-102,, 목 16:30(75) 422-102",
  "capacity": 60,
  "code": "ZF1101117",
  "credit": 3,
  "offerDept": "심리학과"
 },
 {
  "name": "생활속의심리학",
  "section": "009",
  "professor": "하혜주",
  "scheduleRaw": "금 10:00-13:00 422-507",
  "capacity": 60,
  "code": "ZF1101117",
  "credit": 3,
  "offerDept": "심리학과"
 },
 {
  "name": "생활속의심리학",
  "section": "010",
  "professor": "노해림",
  "scheduleRaw": "금 14:00-17:00 416-416",
  "capacity": 60,
  "code": "ZF1101117",
  "credit": 3,
  "offerDept": "심리학과"
 },
 {
  "name": "대학생을 위한 정보자료의 활용",
  "section": "001",
  "professor": "주소현",
  "scheduleRaw": "화 15:00(75) 416-415,, 목 15:00(75) 416-415",
  "capacity": 50,
  "code": "ZF1200646",
  "credit": 3,
  "offerDept": "문헌정보학과"
 },
 {
  "name": "글로벌 사회의 디지털 시민 의식",
  "section": "001",
  "professor": "HOLLISTER JONATHAN",
  "scheduleRaw": "화 15:00(75) 416-418,, 목 15:00(75) 416-418",
  "capacity": 40,
  "code": "ZF1200715",
  "credit": 3,
  "offerDept": "문헌정보학과"
 },
 {
  "name": "미래공학기술과 지식재산",
  "section": "001",
  "professor": "박근태 외 1명",
  "scheduleRaw": "월 13:30(75) 105-3212,, 수 13:30(75) 105-3212",
  "capacity": 50,
  "code": "ZF6002445",
  "credit": 3,
  "offerDept": "지식재산융합전공"
 },
 {
  "name": "문화다양성과상호문화역량",
  "section": "001",
  "professor": "이병준 외 1명",
  "scheduleRaw": "금 09:00-12:00 417-303",
  "capacity": 30,
  "code": "ZF1101271",
  "credit": 3,
  "offerDept": "교육학과"
 },
 {
  "name": "예술영화와미적체험",
  "section": "101",
  "professor": "문관규",
  "scheduleRaw": "목 14:00-17:00 601-326",
  "capacity": 0,
  "code": "ZF1100771",
  "credit": 3,
  "offerDept": "예술문화영상학과"
 },
 {
  "name": "예술영화와미적체험",
  "section": "102",
  "professor": "강지원",
  "scheduleRaw": "목 14:00-17:00 601-241",
  "capacity": 0,
  "code": "ZF1100771",
  "credit": 3,
  "offerDept": "예술문화영상학과"
 },
 {
  "name": "예술영화와미적체험",
  "section": "103",
  "professor": "구혜원",
  "scheduleRaw": "목 14:00-17:00 601-227",
  "capacity": 0,
  "code": "ZF1100771",
  "credit": 3,
  "offerDept": "예술문화영상학과"
 },
 {
  "name": "예술영화와미적체험",
  "section": "200",
  "professor": "김경민",
  "scheduleRaw": "화 10:00-13:00 밀양M02-2212",
  "capacity": 0,
  "code": "ZF1100771",
  "credit": 3,
  "offerDept": "예술문화영상학과"
 },
 {
  "name": "MZ세대를위한조직생활",
  "section": "001",
  "professor": "전경주",
  "scheduleRaw": "월 12:00(75) 514-214,, 수 12:00(75) 514-214",
  "capacity": 50,
  "code": "ZF1101142",
  "credit": 3,
  "offerDept": "경영학과"
 },
 {
  "name": "행복한 데이트, 가족, 부모되기",
  "section": "097",
  "professor": "공유경 외 4명",
  "scheduleRaw": "화 16:30(75) 602-101,, 목 16:30(75) 602-101",
  "capacity": 30,
  "code": "ZF1101223",
  "credit": 3,
  "offerDept": "아동가족학과"
 },
 {
  "name": "생활과경제",
  "section": "001",
  "professor": "김현석",
  "scheduleRaw": "월 15:00(75) 516-206,, 수 15:00(75) 516-206",
  "capacity": 46,
  "code": "ZF1100112",
  "credit": 3,
  "offerDept": "경제학부"
 },
 {
  "name": "마음을움직이는경제학",
  "section": "001",
  "professor": "",
  "scheduleRaw": "금 15:00-18:00 516-L(B)101",
  "capacity": 120,
  "code": "ZF1200117",
  "credit": 3,
  "offerDept": "경제학부"
 },
 {
  "name": "한국문화의이해",
  "section": "001",
  "professor": "황은덕",
  "scheduleRaw": "화 10:30(75) 514-212,, 목 10:30(75) 514-212",
  "capacity": 30,
  "code": "ZF1200169",
  "credit": 3,
  "offerDept": "교양교육원"
 },
 {
  "name": "서양미술과사회",
  "section": "001",
  "professor": "레기나 보데",
  "scheduleRaw": "금 09:00-12:00 210-603",
  "capacity": 20,
  "code": "ZF1200407",
  "credit": 3,
  "offerDept": "교양교육원"
 },
 {
  "name": "기술과ESG경영",
  "section": "001",
  "professor": "류정란",
  "scheduleRaw": "월 12:00(75) 508-203,, 수 12:00(75) 508-203",
  "capacity": 40,
  "code": "ZF1101075",
  "credit": 3,
  "offerDept": "교육인증원"
 },
 {
  "name": "기술과ESG경영",
  "section": "002",
  "professor": "류정란",
  "scheduleRaw": "월 13:30(75) 508-203,, 수 13:30(75) 508-203",
  "capacity": 40,
  "code": "ZF1101075",
  "credit": 3,
  "offerDept": "교육인증원"
 },
 {
  "name": "기술과ESG경영",
  "section": "003",
  "professor": "류정란",
  "scheduleRaw": "화 12:00(75) 508-202,, 목 12:00(75) 508-202",
  "capacity": 40,
  "code": "ZF1101075",
  "credit": 3,
  "offerDept": "교육인증원"
 },
 {
  "name": "기술과ESG경영",
  "section": "004",
  "professor": "류정란",
  "scheduleRaw": "화 13:30(75) 508-202,, 목 13:30(75) 508-202",
  "capacity": 40,
  "code": "ZF1101075",
  "credit": 3,
  "offerDept": "교육인증원"
 },
 {
  "name": "성과사랑",
  "section": "001",
  "professor": "김인선 외 1명",
  "scheduleRaw": "월 12:00(75) 416-B105,, 수 12:00(75) 416-B105",
  "capacity": 0,
  "code": "ZF1100885",
  "credit": 3,
  "offerDept": "여성연구소"
 },
 {
  "name": "미국을뒤흔든세기의판결",
  "section": "001",
  "professor": "김인선",
  "scheduleRaw": "화 16:30(75) 306-313,, 목 16:30(75) 306-313",
  "capacity": 0,
  "code": "ZF1101274",
  "credit": 3,
  "offerDept": "여성연구소"
 },
 {
  "name": "젠더,섹슈얼리티그리고인권",
  "section": "001",
  "professor": "김인선 외 2명",
  "scheduleRaw": "화 13:30(75) 416-B102,, 목 13:30(75) 416-B102",
  "capacity": 0,
  "code": "ZF1200384",
  "credit": 3,
  "offerDept": "여성연구소"
 },
 {
  "name": "젠더,섹슈얼리티그리고인권",
  "section": "200",
  "professor": "김인선 외 2명",
  "scheduleRaw": "수 14:00-17:00 밀양M01-1110",
  "capacity": 0,
  "code": "ZF1200384",
  "credit": 3,
  "offerDept": "여성연구소"
 },
 {
  "name": "역사와함께읽는고사성어",
  "section": "200",
  "professor": "신상필",
  "scheduleRaw": "화 13:30(75) 밀양M02-2314,, 목 13:30(75) 밀양M02-2314",
  "capacity": 30,
  "code": "ZF1200377",
  "credit": 3,
  "offerDept": "점필재연구소"
 },
 {
  "name": "정의란무엇인가",
  "section": "001",
  "professor": "이상봉",
  "scheduleRaw": "화 13:30(75) 105-3213,, 목 13:30(75) 105-3213",
  "capacity": 30,
  "code": "ZF1200547",
  "credit": 3,
  "offerDept": "통일한국연구원"
 },
 {
  "name": "엔터테인먼트 산업을 통해 보는 패션",
  "section": "001",
  "professor": "백영미",
  "scheduleRaw": "월 16:30(75) 105-3314,, 수 16:30(75) 105-3314",
  "capacity": 40,
  "code": "ZF1101120",
  "credit": 3,
  "offerDept": "문화유산보존연구소"
 }
];

const RAW_SEGYE = [
 {
  "name": "글로벌중국어1",
  "section": "001",
  "professor": "김현희",
  "scheduleRaw": "월 13:30(75) 306-216,, 수 13:30(75) 306-216",
  "capacity": 30,
  "code": "ZF1100989",
  "credit": 3,
  "offerDept": "중어중문학과"
 },
 {
  "name": "글로벌중국어1",
  "section": "002",
  "professor": "송주란",
  "scheduleRaw": "화 12:00(75) 306-216,, 목 12:00(75) 306-216",
  "capacity": 30,
  "code": "ZF1100989",
  "credit": 3,
  "offerDept": "중어중문학과"
 },
 {
  "name": "글로벌중국어1",
  "section": "003",
  "professor": "안승웅",
  "scheduleRaw": "월 12:00(75) 306-216,, 수 12:00(75) 306-216",
  "capacity": 30,
  "code": "ZF1100989",
  "credit": 3,
  "offerDept": "중어중문학과"
 },
 {
  "name": "글로벌중국어1",
  "section": "004",
  "professor": "유미경",
  "scheduleRaw": "화 15:00(75) 306-310,, 목 15:00(75) 306-310",
  "capacity": 30,
  "code": "ZF1100989",
  "credit": 3,
  "offerDept": "중어중문학과"
 },
 {
  "name": "글로벌중국어1",
  "section": "005",
  "professor": "유철",
  "scheduleRaw": "화 09:00(75) 306-216,, 목 09:00(75) 306-216",
  "capacity": 30,
  "code": "ZF1100989",
  "credit": 3,
  "offerDept": "중어중문학과"
 },
 {
  "name": "글로벌중국어1",
  "section": "006",
  "professor": "황지경",
  "scheduleRaw": "월 10:30(75) 306-408,, 수 10:30(75) 306-408",
  "capacity": 30,
  "code": "ZF1100989",
  "credit": 3,
  "offerDept": "중어중문학과"
 },
 {
  "name": "글로벌중국어1",
  "section": "007",
  "professor": "송주란",
  "scheduleRaw": "화 13:30(75) 405-2103,, 목 13:30(75) 405-2103",
  "capacity": 30,
  "code": "ZF1100989",
  "credit": 3,
  "offerDept": "중어중문학과"
 },
 {
  "name": "글로벌중국어1",
  "section": "200",
  "professor": "안승웅",
  "scheduleRaw": "금 10:00-13:00 밀양M03-3453",
  "capacity": 30,
  "code": "ZF1100989",
  "credit": 3,
  "offerDept": "중어중문학과"
 },
 {
  "name": "글로벌중국어2",
  "section": "001",
  "professor": "유철",
  "scheduleRaw": "화 12:00(75) 306-308,, 목 12:00(75) 306-308",
  "capacity": 30,
  "code": "ZF1100990",
  "credit": 3,
  "offerDept": "중어중문학과"
 },
 {
  "name": "일어(I)",
  "section": "001",
  "professor": "김수진",
  "scheduleRaw": "월 12:00(75) 306-201,, 수 12:00(75) 306-201",
  "capacity": 30,
  "code": "ZF1100236",
  "credit": 3,
  "offerDept": "일어일문학과"
 },
 {
  "name": "일어(I)",
  "section": "002",
  "professor": "이종은",
  "scheduleRaw": "월 12:00(75) 306-312,, 수 12:00(75) 306-312",
  "capacity": 30,
  "code": "ZF1100236",
  "credit": 3,
  "offerDept": "일어일문학과"
 },
 {
  "name": "일어(I)",
  "section": "003",
  "professor": "한채민",
  "scheduleRaw": "월 12:00(75) 405-2103,, 수 12:00(75) 405-2103",
  "capacity": 30,
  "code": "ZF1100236",
  "credit": 3,
  "offerDept": "일어일문학과"
 },
 {
  "name": "일어(I)",
  "section": "004",
  "professor": "이종은",
  "scheduleRaw": "월 13:30(75) 306-206,, 수 13:30(75) 306-206",
  "capacity": 30,
  "code": "ZF1100236",
  "credit": 3,
  "offerDept": "일어일문학과"
 },
 {
  "name": "일어(I)",
  "section": "005",
  "professor": "서순현",
  "scheduleRaw": "화 12:00(75) 306-312,, 목 12:00(75) 306-312",
  "capacity": 30,
  "code": "ZF1100236",
  "credit": 3,
  "offerDept": "일어일문학과"
 },
 {
  "name": "일어(I)",
  "section": "006",
  "professor": "안수현",
  "scheduleRaw": "화 12:00(75) 306-213,, 목 12:00(75) 306-213",
  "capacity": 30,
  "code": "ZF1100236",
  "credit": 3,
  "offerDept": "일어일문학과"
 },
 {
  "name": "일어(I)",
  "section": "007",
  "professor": "허정은",
  "scheduleRaw": "화 12:00(75) 306-206,, 목 12:00(75) 306-206",
  "capacity": 30,
  "code": "ZF1100236",
  "credit": 3,
  "offerDept": "일어일문학과"
 },
 {
  "name": "일어(I)",
  "section": "008",
  "professor": "",
  "scheduleRaw": "화 13:30(75) 306-201,, 목 13:30(75) 306-201",
  "capacity": 30,
  "code": "ZF1100236",
  "credit": 3,
  "offerDept": "일어일문학과"
 },
 {
  "name": "일어(I)",
  "section": "009",
  "professor": "서순현",
  "scheduleRaw": "화 15:00(75) 306-312,, 목 15:00(75) 306-312",
  "capacity": 30,
  "code": "ZF1100236",
  "credit": 3,
  "offerDept": "일어일문학과"
 },
 {
  "name": "일어(I)",
  "section": "010",
  "professor": "손정아",
  "scheduleRaw": "화 15:00(75) 306-213,, 목 15:00(75) 306-213",
  "capacity": 30,
  "code": "ZF1100236",
  "credit": 3,
  "offerDept": "일어일문학과"
 },
 {
  "name": "일어(II)",
  "section": "001",
  "professor": "한채민",
  "scheduleRaw": "월 10:30(75) 306-217,, 수 10:30(75) 306-217",
  "capacity": 30,
  "code": "ZF1100240",
  "credit": 3,
  "offerDept": "일어일문학과"
 },
 {
  "name": "일어(II)",
  "section": "002",
  "professor": "손정아",
  "scheduleRaw": "화 13:30(75) 306-213,, 목 13:30(75) 306-213",
  "capacity": 30,
  "code": "ZF1100240",
  "credit": 3,
  "offerDept": "일어일문학과"
 },
 {
  "name": "일어(II)",
  "section": "200",
  "professor": "",
  "scheduleRaw": "금 10:00-13:00 밀양M02-2111",
  "capacity": 30,
  "code": "ZF1100240",
  "credit": 3,
  "offerDept": "일어일문학과"
 },
 {
  "name": "프랑스어(I)",
  "section": "001",
  "professor": "김영주",
  "scheduleRaw": "월 12:00(75) 306-206,, 수 12:00(75) 306-206",
  "capacity": 40,
  "code": "ZF1100817",
  "credit": 3,
  "offerDept": "불어불문학과"
 },
 {
  "name": "프랑스어(I)",
  "section": "002",
  "professor": "김영주",
  "scheduleRaw": "월 13:30(75) 306-409,, 수 13:30(75) 306-409",
  "capacity": 40,
  "code": "ZF1100817",
  "credit": 3,
  "offerDept": "불어불문학과"
 },
 {
  "name": "프랑스어(I)",
  "section": "003",
  "professor": "김영주",
  "scheduleRaw": "월 15:00(75) 306-201,, 수 15:00(75) 306-201",
  "capacity": 40,
  "code": "ZF1100817",
  "credit": 3,
  "offerDept": "불어불문학과"
 },
 {
  "name": "프랑스어(I)",
  "section": "004",
  "professor": "김경자",
  "scheduleRaw": "금 10:00-13:00 306-309",
  "capacity": 40,
  "code": "ZF1100817",
  "credit": 3,
  "offerDept": "불어불문학과"
 },
 {
  "name": "프랑스어(I)",
  "section": "005",
  "professor": "김경자",
  "scheduleRaw": "금 14:00-17:00 306-309",
  "capacity": 40,
  "code": "ZF1100817",
  "credit": 3,
  "offerDept": "불어불문학과"
 },
 {
  "name": "프랑스어(I)",
  "section": "006",
  "professor": "김미진 외 1명",
  "scheduleRaw": "월 15:00(75) 306-405,, 수 15:00(75) 306-405",
  "capacity": 40,
  "code": "ZF1100817",
  "credit": 3,
  "offerDept": "불어불문학과"
 },
 {
  "name": "프랑스어(I)",
  "section": "007",
  "professor": "김미진 외 1명",
  "scheduleRaw": "월 16:30(75) 306-405,, 수 16:30(75) 306-405",
  "capacity": 40,
  "code": "ZF1100817",
  "credit": 3,
  "offerDept": "불어불문학과"
 },
 {
  "name": "프랑스어(I)",
  "section": "008",
  "professor": "김미진",
  "scheduleRaw": "월 10:30(75) 306-206,, 수 10:30(75) 306-206",
  "capacity": 40,
  "code": "ZF1100817",
  "credit": 3,
  "offerDept": "불어불문학과"
 },
 {
  "name": "프랑스어(I)",
  "section": "009",
  "professor": "장정아 외 1명",
  "scheduleRaw": "화 13:30(75) 306-407,, 목 13:30(75) 306-407",
  "capacity": 40,
  "code": "ZF1100817",
  "credit": 3,
  "offerDept": "불어불문학과"
 },
 {
  "name": "프랑스어(I)",
  "section": "010",
  "professor": "장정아 외 1명",
  "scheduleRaw": "화 15:00(75) 306-407,, 목 15:00(75) 306-407",
  "capacity": 40,
  "code": "ZF1100817",
  "credit": 3,
  "offerDept": "불어불문학과"
 },
 {
  "name": "프랑스어(I)",
  "section": "011",
  "professor": "장정아",
  "scheduleRaw": "월 12:00(75) 306-309,, 수 12:00(75) 306-309",
  "capacity": 40,
  "code": "ZF1100817",
  "credit": 3,
  "offerDept": "불어불문학과"
 },
 {
  "name": "프랑스어(I)",
  "section": "012",
  "professor": "장정아",
  "scheduleRaw": "월 15:00-15:30 306-407,, 수 15:00-15:30 306-407",
  "capacity": 40,
  "code": "ZF1100817",
  "credit": 3,
  "offerDept": "불어불문학과"
 },
 {
  "name": "프랑스어(I)",
  "section": "013",
  "professor": "강영주",
  "scheduleRaw": "화 10:30(75) 306-407,, 목 10:30(75) 306-407",
  "capacity": 40,
  "code": "ZF1100817",
  "credit": 3,
  "offerDept": "불어불문학과"
 },
 {
  "name": "프랑스어(I)",
  "section": "014",
  "professor": "강영주",
  "scheduleRaw": "화 12:00(75) 306-407,, 목 12:00(75) 306-407",
  "capacity": 40,
  "code": "ZF1100817",
  "credit": 3,
  "offerDept": "불어불문학과"
 },
 {
  "name": "프랑스어(I)",
  "section": "015",
  "professor": "",
  "scheduleRaw": "",
  "capacity": 40,
  "code": "ZF1100817",
  "credit": 3,
  "offerDept": "불어불문학과"
 },
 {
  "name": "프랑스어(II)",
  "section": "001",
  "professor": "강민수",
  "scheduleRaw": "월 16:30(75) 306-409,, 수 16:30(75) 306-409",
  "capacity": 40,
  "code": "ZF1100818",
  "credit": 3,
  "offerDept": "불어불문학과"
 },
 {
  "name": "독일어(I)",
  "section": "001",
  "professor": "서은주",
  "scheduleRaw": "월 10:30(75) 306-311,, 수 10:30(75) 306-311",
  "capacity": 0,
  "code": "ZF1100536",
  "credit": 3,
  "offerDept": "독어독문학과"
 },
 {
  "name": "독일어(I)",
  "section": "002",
  "professor": "티야나 푼크",
  "scheduleRaw": "월 15:00(75) 306-311,, 수 15:00(75) 306-311",
  "capacity": 0,
  "code": "ZF1100536",
  "credit": 3,
  "offerDept": "독어독문학과"
 },
 {
  "name": "독일어(I)",
  "section": "003",
  "professor": "김동조",
  "scheduleRaw": "월 15:00(75) 306-205,, 수 15:00(75) 306-205",
  "capacity": 0,
  "code": "ZF1100536",
  "credit": 3,
  "offerDept": "독어독문학과"
 },
 {
  "name": "독일어(I)",
  "section": "004",
  "professor": "박미진",
  "scheduleRaw": "화 09:00(75) 306-211,, 목 09:00(75) 306-211",
  "capacity": 0,
  "code": "ZF1100536",
  "credit": 3,
  "offerDept": "독어독문학과"
 },
 {
  "name": "독일어(I)",
  "section": "005",
  "professor": "이경필",
  "scheduleRaw": "화 09:00(75) 405-2103,, 목 09:00(75) 405-2103",
  "capacity": 0,
  "code": "ZF1100536",
  "credit": 3,
  "offerDept": "독어독문학과"
 },
 {
  "name": "독일어(I)",
  "section": "006",
  "professor": "조유정",
  "scheduleRaw": "화 09:00(75) 306-311,, 목 09:00(75) 306-311",
  "capacity": 0,
  "code": "ZF1100536",
  "credit": 3,
  "offerDept": "독어독문학과"
 },
 {
  "name": "독일어(I)",
  "section": "007",
  "professor": "김기빈",
  "scheduleRaw": "월 15:00(75) 306-408,, 수 15:00(75) 306-408",
  "capacity": 0,
  "code": "ZF1100536",
  "credit": 3,
  "offerDept": "독어독문학과"
 },
 {
  "name": "독일어(II)",
  "section": "001",
  "professor": "박영미",
  "scheduleRaw": "화 15:00(75) 306-211,, 목 15:00(75) 306-211",
  "capacity": 0,
  "code": "ZF1100537",
  "credit": 3,
  "offerDept": "독어독문학과"
 },
 {
  "name": "처음러시아어",
  "section": "001",
  "professor": "채연지",
  "scheduleRaw": "화 09:00(75) 306-214,, 목 09:00(75) 306-214",
  "capacity": 25,
  "code": "ZF1101180",
  "credit": 3,
  "offerDept": "노어노문학과"
 },
 {
  "name": "처음러시아어",
  "section": "002",
  "professor": "이선정",
  "scheduleRaw": "화 09:00(75) 306-215,, 목 09:00(75) 306-215",
  "capacity": 25,
  "code": "ZF1101180",
  "credit": 3,
  "offerDept": "노어노문학과"
 },
 {
  "name": "처음러시아어",
  "section": "003",
  "professor": "김영숙",
  "scheduleRaw": "금 14:00-17:00 306-215",
  "capacity": 25,
  "code": "ZF1101180",
  "credit": 3,
  "offerDept": "노어노문학과"
 },
 {
  "name": "처음러시아어",
  "section": "004",
  "professor": "김은진",
  "scheduleRaw": "월 09:00(75) 306-214,, 수 09:00(75) 306-214",
  "capacity": 25,
  "code": "ZF1101180",
  "credit": 3,
  "offerDept": "노어노문학과"
 },
 {
  "name": "처음러시아어",
  "section": "005",
  "professor": "황서경",
  "scheduleRaw": "금 10:00-13:00 306-215",
  "capacity": 25,
  "code": "ZF1101180",
  "credit": 3,
  "offerDept": "노어노문학과"
 },
 {
  "name": "한문(I)",
  "section": "001",
  "professor": "류화정",
  "scheduleRaw": "월 09:00(75) 306-210,, 수 09:00(75) 306-210",
  "capacity": 35,
  "code": "ZF1100251",
  "credit": 3,
  "offerDept": "한문학과"
 },
 {
  "name": "한문(I)",
  "section": "002",
  "professor": "전지원",
  "scheduleRaw": "화 12:00(75) 306-408,, 목 12:00(75) 306-408",
  "capacity": 35,
  "code": "ZF1100251",
  "credit": 3,
  "offerDept": "한문학과"
 },
 {
  "name": "한문(I)",
  "section": "003",
  "professor": "전송희",
  "scheduleRaw": "화 10:30(75) 306-314,, 목 10:30(75) 306-314",
  "capacity": 35,
  "code": "ZF1100251",
  "credit": 3,
  "offerDept": "한문학과"
 },
 {
  "name": "한문(I)",
  "section": "004",
  "professor": "신재식",
  "scheduleRaw": "월 15:00(75) 405-2104,, 수 15:00(75) 405-2104",
  "capacity": 35,
  "code": "ZF1100251",
  "credit": 3,
  "offerDept": "한문학과"
 },
 {
  "name": "한문(I)",
  "section": "005",
  "professor": "남윤덕",
  "scheduleRaw": "화 15:00(75) 306-210,, 목 15:00(75) 306-210",
  "capacity": 35,
  "code": "ZF1100251",
  "credit": 3,
  "offerDept": "한문학과"
 },
 {
  "name": "한문(I)",
  "section": "006",
  "professor": "이성혜",
  "scheduleRaw": "월 13:30(75) 306-210,, 수 13:30(75) 306-210",
  "capacity": 35,
  "code": "ZF1100251",
  "credit": 3,
  "offerDept": "한문학과"
 },
 {
  "name": "한문(I)",
  "section": "007",
  "professor": "최금자",
  "scheduleRaw": "월 10:30(75) 306-501,, 수 10:30(75) 306-501",
  "capacity": 35,
  "code": "ZF1100251",
  "credit": 3,
  "offerDept": "한문학과"
 },
 {
  "name": "한문(I)",
  "section": "008",
  "professor": "최금자",
  "scheduleRaw": "월 12:00(75) 306-501,, 수 12:00(75) 306-501",
  "capacity": 35,
  "code": "ZF1100251",
  "credit": 3,
  "offerDept": "한문학과"
 },
 {
  "name": "한문(I)",
  "section": "009",
  "professor": "전민경",
  "scheduleRaw": "화 09:00(75) 417-402,, 목 09:00(75) 417-402",
  "capacity": 35,
  "code": "ZF1100251",
  "credit": 3,
  "offerDept": "한문학과"
 },
 {
  "name": "한문(I)",
  "section": "010",
  "professor": "전민경",
  "scheduleRaw": "화 10:30(75) 417-402,, 목 10:30(75) 417-402",
  "capacity": 35,
  "code": "ZF1100251",
  "credit": 3,
  "offerDept": "한문학과"
 },
 {
  "name": "한문(I)",
  "section": "011",
  "professor": "이강석",
  "scheduleRaw": "화 12:00(75) 306-210,, 목 12:00(75) 306-210",
  "capacity": 35,
  "code": "ZF1100251",
  "credit": 3,
  "offerDept": "한문학과"
 },
 {
  "name": "한문(I)",
  "section": "012",
  "professor": "이강석",
  "scheduleRaw": "화 13:30(75) 306-210,, 목 13:30(75) 306-210",
  "capacity": 35,
  "code": "ZF1100251",
  "credit": 3,
  "offerDept": "한문학과"
 },
 {
  "name": "한문(I)",
  "section": "200",
  "professor": "신일권",
  "scheduleRaw": "목 10:00-13:00 밀양M02-2212",
  "capacity": 35,
  "code": "ZF1100251",
  "credit": 3,
  "offerDept": "한문학과"
 },
 {
  "name": "한문(II)",
  "section": "001",
  "professor": "류화정",
  "scheduleRaw": "월 10:30(75) 306-210,, 수 10:30(75) 306-210",
  "capacity": 35,
  "code": "ZF1100252",
  "credit": 3,
  "offerDept": "한문학과"
 },
 {
  "name": "한문(II)",
  "section": "002",
  "professor": "전지원",
  "scheduleRaw": "화 13:30(75) 306-206,, 목 13:30(75) 306-206",
  "capacity": 35,
  "code": "ZF1100252",
  "credit": 3,
  "offerDept": "한문학과"
 },
 {
  "name": "한문(II)",
  "section": "003",
  "professor": "엄형섭",
  "scheduleRaw": "월 12:00(75) 306-314,, 수 12:00(75) 306-314",
  "capacity": 35,
  "code": "ZF1100252",
  "credit": 3,
  "offerDept": "한문학과"
 },
 {
  "name": "한문(II)",
  "section": "004",
  "professor": "전송희",
  "scheduleRaw": "화 12:00(75) 306-314,, 목 12:00(75) 306-314",
  "capacity": 35,
  "code": "ZF1100252",
  "credit": 3,
  "offerDept": "한문학과"
 },
 {
  "name": "베트남어",
  "section": "001",
  "professor": "보람수언",
  "scheduleRaw": "금 09:00-12:00 514-212",
  "capacity": 30,
  "code": "ZF1100870",
  "credit": 3,
  "offerDept": "교양교육원"
 },
 {
  "name": "기업영어",
  "section": "001",
  "professor": "조윤실",
  "scheduleRaw": "월 10:30(75) 422-803,, 수 10:30(75) 422-803",
  "capacity": 30,
  "code": "ZF1100898",
  "credit": 3,
  "offerDept": "교양교육원"
 },
 {
  "name": "기업영어",
  "section": "002",
  "professor": "조윤실",
  "scheduleRaw": "월 12:00(75) 422-803,, 수 12:00(75) 422-803",
  "capacity": 30,
  "code": "ZF1100898",
  "credit": 3,
  "offerDept": "교양교육원"
 },
 {
  "name": "고급영문독해",
  "section": "001",
  "professor": "주보현",
  "scheduleRaw": "월 10:30(75) 210-307,, 수 10:30(75) 210-307",
  "capacity": 30,
  "code": "ZF1100902",
  "credit": 3,
  "offerDept": "교양교육원"
 },
 {
  "name": "고급영문독해",
  "section": "002",
  "professor": "주보현",
  "scheduleRaw": "월 12:00(75) 210-307,, 수 12:00(75) 210-307",
  "capacity": 30,
  "code": "ZF1100902",
  "credit": 3,
  "offerDept": "교양교육원"
 },
 {
  "name": "고급영문독해",
  "section": "003",
  "professor": "이현정",
  "scheduleRaw": "월 10:30(75) 210-603,, 수 10:30(75) 210-603",
  "capacity": 30,
  "code": "ZF1100902",
  "credit": 3,
  "offerDept": "교양교육원"
 },
 {
  "name": "고급영문독해",
  "section": "004",
  "professor": "이현정",
  "scheduleRaw": "월 12:00(75) 210-603,, 수 12:00(75) 210-603",
  "capacity": 30,
  "code": "ZF1100902",
  "credit": 3,
  "offerDept": "교양교육원"
 },
 {
  "name": "영어글쓰기",
  "section": "001",
  "professor": "이동주",
  "scheduleRaw": "월 13:30(75) 210-307,, 수 13:30(75) 210-307",
  "capacity": 30,
  "code": "ZF1100904",
  "credit": 3,
  "offerDept": "교양교육원"
 },
 {
  "name": "영어글쓰기",
  "section": "002",
  "professor": "이동주",
  "scheduleRaw": "월 15:00(75) 210-307,, 수 15:00(75) 210-307",
  "capacity": 30,
  "code": "ZF1100904",
  "credit": 3,
  "offerDept": "교양교육원"
 },
 {
  "name": "영어글쓰기",
  "section": "003",
  "professor": "강영아",
  "scheduleRaw": "월 13:30(75) 210-603,, 수 13:30(75) 210-603",
  "capacity": 30,
  "code": "ZF1100904",
  "credit": 3,
  "offerDept": "교양교육원"
 },
 {
  "name": "영어글쓰기",
  "section": "004",
  "professor": "강영아",
  "scheduleRaw": "월 15:00(75) 210-603,, 수 15:00(75) 210-603",
  "capacity": 30,
  "code": "ZF1100904",
  "credit": 3,
  "offerDept": "교양교육원"
 },
 {
  "name": "영어글쓰기",
  "section": "200",
  "professor": "강형진",
  "scheduleRaw": "화 10:00-13:00 밀양M03-3243",
  "capacity": 30,
  "code": "ZF1100904",
  "credit": 3,
  "offerDept": "교양교육원"
 },
 {
  "name": "이태리어",
  "section": "001",
  "professor": "김영숙",
  "scheduleRaw": "월 10:30(75) 514-212,, 수 10:30(75) 514-212",
  "capacity": 30,
  "code": "ZF1200067",
  "credit": 3,
  "offerDept": "교양교육원"
 },
 {
  "name": "인도네시아어",
  "section": "001",
  "professor": "장상경",
  "scheduleRaw": "금 09:00-12:00 422-803",
  "capacity": 40,
  "code": "ZF1200209",
  "credit": 3,
  "offerDept": "교양교육원"
 },
 {
  "name": "영어구문연습",
  "section": "001",
  "professor": "신진원",
  "scheduleRaw": "화 10:30(75) 210-307,, 목 10:30(75) 210-307",
  "capacity": 30,
  "code": "ZF1200283",
  "credit": 3,
  "offerDept": "교양교육원"
 },
 {
  "name": "영어구문연습",
  "section": "002",
  "professor": "신진원",
  "scheduleRaw": "화 12:00(75) 210-307,, 목 12:00(75) 210-307",
  "capacity": 30,
  "code": "ZF1200283",
  "credit": 3,
  "offerDept": "교양교육원"
 },
 {
  "name": "영어구문연습",
  "section": "003",
  "professor": "김세미",
  "scheduleRaw": "화 10:30(75) 210-603,, 목 10:30(75) 210-603",
  "capacity": 30,
  "code": "ZF1200283",
  "credit": 3,
  "offerDept": "교양교육원"
 },
 {
  "name": "영어구문연습",
  "section": "004",
  "professor": "이지현",
  "scheduleRaw": "화 12:00(75) 210-603,, 목 12:00(75) 210-603",
  "capacity": 30,
  "code": "ZF1200283",
  "credit": 3,
  "offerDept": "교양교육원"
 },
 {
  "name": "영어표현연습(I)",
  "section": "001",
  "professor": "최정인",
  "scheduleRaw": "화 13:30(75) 210-307,, 목 13:30(75) 210-307",
  "capacity": 30,
  "code": "ZF1200284",
  "credit": 3,
  "offerDept": "교양교육원"
 },
 {
  "name": "영어표현연습(I)",
  "section": "002",
  "professor": "최정인",
  "scheduleRaw": "화 15:00(75) 210-307,, 목 15:00(75) 210-307",
  "capacity": 30,
  "code": "ZF1200284",
  "credit": 3,
  "offerDept": "교양교육원"
 },
 {
  "name": "영어표현연습(I)",
  "section": "003",
  "professor": "박혜정",
  "scheduleRaw": "화 13:30(75) 210-603,, 목 13:30(75) 210-603",
  "capacity": 30,
  "code": "ZF1200284",
  "credit": 3,
  "offerDept": "교양교육원"
 },
 {
  "name": "영어표현연습(I)",
  "section": "004",
  "professor": "박혜정",
  "scheduleRaw": "화 15:00(75) 210-603,, 목 15:00(75) 210-603",
  "capacity": 30,
  "code": "ZF1200284",
  "credit": 3,
  "offerDept": "교양교육원"
 },
 {
  "name": "영어표현연습(I)",
  "section": "005",
  "professor": "이현진",
  "scheduleRaw": "월 13:30(75) 422-803,, 수 13:30(75) 422-803",
  "capacity": 30,
  "code": "ZF1200284",
  "credit": 3,
  "offerDept": "교양교육원"
 },
 {
  "name": "유학생을위한교양한국어",
  "section": "100",
  "professor": "차윤정",
  "scheduleRaw": "월 10:30(75) 105-3504,, 수 10:30(75) 105-3504",
  "capacity": 25,
  "code": "ZF1200529",
  "credit": 3,
  "offerDept": "교양교육원"
 },
 {
  "name": "영어로 읽는 서구문화",
  "section": "001",
  "professor": "이효석",
  "scheduleRaw": "월 12:00(75) 306-308,, 수 12:00(75) 306-308",
  "capacity": 40,
  "code": "ZF1200690",
  "credit": 3,
  "offerDept": "인문학연구소"
 }
];

const RAW_MUNHAK = [
 {
  "name": "문학과영상예술",
  "section": "001",
  "professor": "김려실",
  "scheduleRaw": "월 13:30(75) 306-408,, 수 13:30(75) 306-408",
  "capacity": 0,
  "code": "ZF1100316",
  "credit": 3,
  "offerDept": "국어국문학과"
 },
 {
  "name": "문학과영상예술",
  "section": "002",
  "professor": "박미라",
  "scheduleRaw": "월 13:30(75) 405-2104,, 수 13:30(75) 405-2104",
  "capacity": 0,
  "code": "ZF1100316",
  "credit": 3,
  "offerDept": "국어국문학과"
 },
 {
  "name": "문학과영상예술",
  "section": "200",
  "professor": "류영욱",
  "scheduleRaw": "월 13:30-16:30 밀양M03-3349",
  "capacity": 0,
  "code": "ZF1100316",
  "credit": 3,
  "offerDept": "국어국문학과"
 },
 {
  "name": "민속문학과전통문화",
  "section": "001",
  "professor": "한태문",
  "scheduleRaw": "화 15:00(75) 306-212,, 목 15:00(75) 306-212",
  "capacity": 0,
  "code": "ZF1100317",
  "credit": 3,
  "offerDept": "국어국문학과"
 },
 {
  "name": "민속문학과전통문화",
  "section": "002",
  "professor": "허순우",
  "scheduleRaw": "월 10:30(75) 306-313,, 수 10:30(75) 306-313",
  "capacity": 0,
  "code": "ZF1100317",
  "credit": 3,
  "offerDept": "국어국문학과"
 },
 {
  "name": "민속문학과전통문화",
  "section": "003",
  "professor": "류속영",
  "scheduleRaw": "화 10:30(75) 306-313,, 목 10:30(75) 306-313",
  "capacity": 0,
  "code": "ZF1100317",
  "credit": 3,
  "offerDept": "국어국문학과"
 },
 {
  "name": "민속문학과전통문화",
  "section": "004",
  "professor": "정은영",
  "scheduleRaw": "월 10:30(75) 306-410,, 수 10:30(75) 306-410",
  "capacity": 0,
  "code": "ZF1100317",
  "credit": 3,
  "offerDept": "국어국문학과"
 },
 {
  "name": "영화로보는현대중국",
  "section": "001",
  "professor": "박노종",
  "scheduleRaw": "월 09:00(75) 306-203,, 수 09:00(75) 306-203",
  "capacity": 30,
  "code": "ZF1101035",
  "credit": 3,
  "offerDept": "중어중문학과"
 },
 {
  "name": "영어와문화읽기",
  "section": "001",
  "professor": "최성희",
  "scheduleRaw": "월 16:30(75) 306-412,, 수 16:30(75) 306-412",
  "capacity": 30,
  "code": "ZF1200536",
  "credit": 3,
  "offerDept": "영어영문학과"
 },
 {
  "name": "프랑스 문학과 K 문화 콘텐츠",
  "section": "001",
  "professor": "홍지은",
  "scheduleRaw": "화 10:30(75) 405-2103,, 목 10:30(75) 405-2103",
  "capacity": 40,
  "code": "ZF1101113",
  "credit": 3,
  "offerDept": "불어불문학과"
 },
 {
  "name": "영상예술과철학",
  "section": "001",
  "professor": "김도형",
  "scheduleRaw": "월 12:00(75) 306-307,, 수 12:00(75) 306-307",
  "capacity": 30,
  "code": "ZF1100347",
  "credit": 3,
  "offerDept": "철학과"
 },
 {
  "name": "영상예술과철학",
  "section": "002",
  "professor": "홍준성",
  "scheduleRaw": "월 12:00(75) 306-408,, 수 12:00(75) 306-408",
  "capacity": 30,
  "code": "ZF1100347",
  "credit": 3,
  "offerDept": "철학과"
 },
 {
  "name": "영상예술과철학",
  "section": "003",
  "professor": "박요한",
  "scheduleRaw": "화 12:00(75) 405-2104,, 목 12:00(75) 405-2104",
  "capacity": 35,
  "code": "ZF1100347",
  "credit": 3,
  "offerDept": "철학과"
 },
 {
  "name": "영상예술과철학",
  "section": "200",
  "professor": "정재훈",
  "scheduleRaw": "화 14:00-17:00 밀양M02-2111",
  "capacity": 30,
  "code": "ZF1100347",
  "credit": 3,
  "offerDept": "철학과"
 },
 {
  "name": "건축의 이해",
  "section": "001",
  "professor": "백승한 외 8명",
  "scheduleRaw": "금 09:00(75) 401-930,, 금 09:00-12:00 401-930,, 금 10:30(75) 401-930",
  "capacity": 40,
  "code": "ZF1100922",
  "credit": 3,
  "offerDept": "건축학과"
 },
 {
  "name": "우리 시대의 지구인문학",
  "section": "071",
  "professor": "오현석",
  "scheduleRaw": "화 15:00(75) 701-304,, 목 15:00(75) 701-304",
  "capacity": 50,
  "code": "ZF1101182",
  "credit": 3,
  "offerDept": "국어교육과"
 },
 {
  "name": "문학과 예술로 읽는 서양사회사",
  "section": "071",
  "professor": "이순욱",
  "scheduleRaw": "월 13:30(75) 701-304,, 수 13:30(75) 701-304",
  "capacity": 50,
  "code": "ZF1200524",
  "credit": 3,
  "offerDept": "국어교육과"
 },
 {
  "name": "웹문화 읽기",
  "section": "071",
  "professor": "임주탁",
  "scheduleRaw": "월 15:00(75) 701-304,, 수 15:00(75) 701-304",
  "capacity": 50,
  "code": "ZF1200745",
  "credit": 3,
  "offerDept": "국어교육과"
 },
 {
  "name": "세상에 스며든 클래식",
  "section": "101",
  "professor": "이주용",
  "scheduleRaw": "수 10:00-13:00 707-423",
  "capacity": 40,
  "code": "ZF1101269",
  "credit": 3,
  "offerDept": "음악학과"
 },
 {
  "name": "미술을보는눈",
  "section": "101",
  "professor": "조재임 외 1명",
  "scheduleRaw": "금 10:00-13:00 601-237",
  "capacity": 35,
  "code": "ZF1100512",
  "credit": 3,
  "offerDept": "미술학과"
 },
 {
  "name": "미술을보는눈",
  "section": "102",
  "professor": "정희진",
  "scheduleRaw": "목 10:00-13:00 밀양M02-2111",
  "capacity": 35,
  "code": "ZF1100512",
  "credit": 3,
  "offerDept": "미술학과"
 },
 {
  "name": "섬유패션소품디자인",
  "section": "101",
  "professor": "김성연 외 1명",
  "scheduleRaw": "화 13:30(75) 703-314,, 화 15:00(75) 703-314",
  "capacity": 30,
  "code": "ZF1100982",
  "credit": 3,
  "offerDept": "조형학과"
 },
 {
  "name": "섬유패션소품디자인",
  "section": "102",
  "professor": "김성연 외 1명",
  "scheduleRaw": "화 13:30(75) 703-312,, 화 15:00(75) 703-312",
  "capacity": 30,
  "code": "ZF1100982",
  "credit": 3,
  "offerDept": "조형학과"
 },
 {
  "name": "주얼리코디네이터",
  "section": "101",
  "professor": "안순주 외 1명",
  "scheduleRaw": "목 13:30(100) 703-314,, 목 15:30(100) 703-314",
  "capacity": 30,
  "code": "ZF1101219",
  "credit": 3,
  "offerDept": "조형학과"
 },
 {
  "name": "장신구의역사",
  "section": "101",
  "professor": "안순주 외 1명",
  "scheduleRaw": "화 10:30(75) 703-314,, 화 12:00(75) 703-314",
  "capacity": 30,
  "code": "ZF1200085",
  "credit": 3,
  "offerDept": "조형학과"
 },
 {
  "name": "장신구의역사",
  "section": "102",
  "professor": "안순주 외 1명",
  "scheduleRaw": "화 10:30(75) 703-515,, 화 12:00(75) 703-515",
  "capacity": 30,
  "code": "ZF1200085",
  "credit": 3,
  "offerDept": "조형학과"
 },
 {
  "name": "창의 개발 스타트업 : 디자인적 사고와 브랜드 개발",
  "section": "101",
  "professor": "김성연 외 1명",
  "scheduleRaw": "화 09:00(100) 703-312,, 화 11:00(100) 703-312",
  "capacity": 30,
  "code": "ZF1200430",
  "credit": 3,
  "offerDept": "조형학과"
 },
 {
  "name": "한국의 미와 예술",
  "section": "101",
  "professor": "신나경 외 1명",
  "scheduleRaw": "목 13:30(75) 703-312,, 목 15:00(75) 703-312",
  "capacity": 30,
  "code": "ZF1200674",
  "credit": 3,
  "offerDept": "조형학과"
 },
 {
  "name": "한국음악과영화",
  "section": "001",
  "professor": "이아미",
  "scheduleRaw": "화 12:00-15:00 601-333",
  "capacity": 30,
  "code": "ZF1100824",
  "credit": 3,
  "offerDept": "한국음악학과"
 },
 {
  "name": "무용 작품 감상",
  "section": "104",
  "professor": "김한나 외 1명",
  "scheduleRaw": "목 15:00(100) 601-332,, 목 16:30(50) 601-332",
  "capacity": 40,
  "code": "ZF1101137",
  "credit": 3,
  "offerDept": "무용학과"
 },
 {
  "name": "영화와대중문화의쟁점",
  "section": "101",
  "professor": "서대정",
  "scheduleRaw": "목 10:00-13:00 601-326",
  "capacity": 0,
  "code": "ZF1100887",
  "credit": 3,
  "offerDept": "예술문화영상학과"
 },
 {
  "name": "영화와대중문화의쟁점",
  "section": "102",
  "professor": "박정민",
  "scheduleRaw": "목 10:00-13:00 601-241",
  "capacity": 0,
  "code": "ZF1100887",
  "credit": 3,
  "offerDept": "예술문화영상학과"
 },
 {
  "name": "영화와대중문화의쟁점",
  "section": "103",
  "professor": "장지애",
  "scheduleRaw": "목 10:00-13:00 601-227",
  "capacity": 0,
  "code": "ZF1100887",
  "credit": 3,
  "offerDept": "예술문화영상학과"
 },
 {
  "name": "영화와대중문화의쟁점",
  "section": "200",
  "professor": "",
  "scheduleRaw": "수 10:00-13:00 밀양M02-2212",
  "capacity": 0,
  "code": "ZF1100887",
  "credit": 3,
  "offerDept": "예술문화영상학과"
 },
 {
  "name": "동서양신화와문화콘텐츠",
  "section": "001",
  "professor": "김동조",
  "scheduleRaw": "금 10:00-13:00 105-3504",
  "capacity": 45,
  "code": "ZF1101230",
  "credit": 3,
  "offerDept": "교양교육원"
 },
 {
  "name": "예술로만나는이탈리아",
  "section": "001",
  "professor": "김영숙",
  "scheduleRaw": "월 12:00(75) 416-B102,, 수 12:00(75) 416-B102",
  "capacity": 30,
  "code": "ZF1101231",
  "credit": 3,
  "offerDept": "교양교육원"
 },
 {
  "name": "삶과죽음의문화사",
  "section": "001",
  "professor": "박미진",
  "scheduleRaw": "화 13:00(75) 416-510,, 목 13:00(75) 416-510",
  "capacity": 30,
  "code": "ZF1101232",
  "credit": 3,
  "offerDept": "교양교육원"
 },
 {
  "name": "만화와애니메이션으로읽는일본문학과예술",
  "section": "001",
  "professor": "안수현",
  "scheduleRaw": "화 14:00(75) 516-305,, 목 14:00(75) 516-305",
  "capacity": 30,
  "code": "ZF1101233",
  "credit": 3,
  "offerDept": "교양교육원"
 },
 {
  "name": "전쟁서사로읽는공감인문학",
  "section": "001",
  "professor": "이희원",
  "scheduleRaw": "화 09:00(75) 201-6210,, 목 09:00(75) 201-6210",
  "capacity": 30,
  "code": "ZF1101234",
  "credit": 3,
  "offerDept": "교양교육원"
 },
 {
  "name": "한자로읽는동아시아문화",
  "section": "001",
  "professor": "최금자",
  "scheduleRaw": "월 13:30(75) 416-B102,, 수 13:30(75) 416-B102",
  "capacity": 30,
  "code": "ZF1101235",
  "credit": 3,
  "offerDept": "교양교육원"
 },
 {
  "name": "한국의신화와전통예술개관",
  "section": "001",
  "professor": "최진숙",
  "scheduleRaw": "월 15:00(75) 422-803,, 수 15:00(75) 422-803",
  "capacity": 30,
  "code": "ZF1200164",
  "credit": 3,
  "offerDept": "교양교육원"
 },
 {
  "name": "현대예술로만나는지역",
  "section": "001",
  "professor": "조명기",
  "scheduleRaw": "화 10:30(75) 105-3314,, 목 10:30(75) 105-3314",
  "capacity": 40,
  "code": "ZF1100865",
  "credit": 3,
  "offerDept": "한국민족문화연구소"
 },
 {
  "name": "예술작품으로 보는 (여)성의 역사",
  "section": "001",
  "professor": "배혜정 외 1명",
  "scheduleRaw": "화 16:30(75) 306-212,, 목 16:30(75) 306-212",
  "capacity": 0,
  "code": "ZF1101037",
  "credit": 3,
  "offerDept": "여성연구소"
 },
 {
  "name": "옛사람들의사랑과전쟁",
  "section": "200",
  "professor": "신상필",
  "scheduleRaw": "화 15:00(75) 밀양M02-2314,, 목 15:00(75) 밀양M02-2314",
  "capacity": 30,
  "code": "ZF1200378",
  "credit": 3,
  "offerDept": "점필재연구소"
 },
 {
  "name": "영화와BIFF",
  "section": "101",
  "professor": "서대정 외 4명",
  "scheduleRaw": "금 10:00-13:00 708-105",
  "capacity": 210,
  "code": "ZF1100932",
  "credit": 3,
  "offerDept": "영화연구소"
 },
 {
  "name": "영화와BIFF",
  "section": "201",
  "professor": "김충국 외 1명",
  "scheduleRaw": "수 13:00-16:00 밀양M02-2212",
  "capacity": 40,
  "code": "ZF1100932",
  "credit": 3,
  "offerDept": "영화연구소"
 }
];

const RAW_GWAHAK = [
 {
  "name": "한국의전통과학과기술",
  "section": "001",
  "professor": "이종봉",
  "scheduleRaw": "화 15:00(75) 306-316,, 목 15:00(75) 306-316",
  "capacity": 60,
  "code": "ZF1100405",
  "credit": 3,
  "offerDept": "사학과"
 },
 {
  "name": "한국의전통과학과기술",
  "section": "002",
  "professor": "신세완",
  "scheduleRaw": "화 10:30(75) 306-214,, 목 10:30(75) 306-214",
  "capacity": 60,
  "code": "ZF1100405",
  "credit": 3,
  "offerDept": "사학과"
 },
 {
  "name": "한국의전통과학과기술",
  "section": "003",
  "professor": "정영현",
  "scheduleRaw": "월 16:30(75) 306-313,, 수 16:30(75) 306-313",
  "capacity": 60,
  "code": "ZF1100405",
  "credit": 3,
  "offerDept": "사학과"
 },
 {
  "name": "수학(II)",
  "section": "001",
  "professor": "김현민",
  "scheduleRaw": "화 09:00(75) 607-208,, 목 09:00(75) 607-208",
  "capacity": 60,
  "code": "MA1500644",
  "credit": 3,
  "offerDept": "수학과"
 },
 {
  "name": "수학(II)",
  "section": "002",
  "professor": "조홍래",
  "scheduleRaw": "월 15:00(75) 607-110,, 수 15:00(75) 607-110",
  "capacity": 50,
  "code": "MA1500644",
  "credit": 3,
  "offerDept": "수학과"
 },
 {
  "name": "수학(II)",
  "section": "003",
  "professor": "서연숙",
  "scheduleRaw": "화 09:00(75) 607-110,, 목 09:00(75) 607-110",
  "capacity": 32,
  "code": "MA1500644",
  "credit": 3,
  "offerDept": "수학과"
 },
 {
  "name": "수학(II)",
  "section": "004",
  "professor": "이한울",
  "scheduleRaw": "화 09:00(75) 607-207,, 목 09:00(75) 607-207",
  "capacity": 32,
  "code": "MA1500644",
  "credit": 3,
  "offerDept": "수학과"
 },
 {
  "name": "수학(II)",
  "section": "005",
  "professor": "문상혁",
  "scheduleRaw": "월 15:00(75) 607-207,, 수 15:00(75) 607-207",
  "capacity": 50,
  "code": "MA1500644",
  "credit": 3,
  "offerDept": "수학과"
 },
 {
  "name": "수학(II)",
  "section": "006",
  "professor": "이미경",
  "scheduleRaw": "화 10:30(75) 607-208,, 목 10:30(75) 607-208",
  "capacity": 50,
  "code": "MA1500644",
  "credit": 3,
  "offerDept": "수학과"
 },
 {
  "name": "수학(II)",
  "section": "007",
  "professor": "조홍래",
  "scheduleRaw": "월 10:30(75) 607-110,, 수 10:30(75) 607-110",
  "capacity": 50,
  "code": "MA1500644",
  "credit": 3,
  "offerDept": "수학과"
 },
 {
  "name": "환경과방사능",
  "section": "001",
  "professor": "유인권",
  "scheduleRaw": "화 13:30(75) 308-110,, 목 13:30(75) 308-110",
  "capacity": 60,
  "code": "ZF1100478",
  "credit": 3,
  "offerDept": "물리학과"
 },
 {
  "name": "빅뱅 우주 속의 우리",
  "section": "001",
  "professor": "이창환",
  "scheduleRaw": "금 13:00-16:00 308-211",
  "capacity": 70,
  "code": "ZF1200598",
  "credit": 3,
  "offerDept": "물리학과"
 },
 {
  "name": "R을활용한통계학개론",
  "section": "032",
  "professor": "김충락",
  "scheduleRaw": "금 15:00-18:00 313-222",
  "capacity": 100,
  "code": "ZF1200325",
  "credit": 3,
  "offerDept": "통계학과"
 },
 {
  "name": "현대생활과화학",
  "section": "034",
  "professor": "박장수",
  "scheduleRaw": "화 15:00(75) 606-114,, 목 15:00(75) 606-114",
  "capacity": 35,
  "code": "ZF1100272",
  "credit": 3,
  "offerDept": "화학과"
 },
 {
  "name": "생명과학과 미래세상",
  "section": "001",
  "professor": "문용환",
  "scheduleRaw": "화 13:30(75) 501-301,, 목 13:30(75) 501-301",
  "capacity": 40,
  "code": "ZF1100753",
  "credit": 3,
  "offerDept": "분자생물학과"
 },
 {
  "name": "생명과학과 미래세상",
  "section": "002",
  "professor": "석혜연",
  "scheduleRaw": "화 13:30(75) 501-311,, 목 13:30(75) 501-311",
  "capacity": 30,
  "code": "ZF1100753",
  "credit": 3,
  "offerDept": "분자생물학과"
 },
 {
  "name": "생명의프린키피아",
  "section": "001",
  "professor": "김희수",
  "scheduleRaw": "화 16:30(75) 501-205,, 목 16:30(75) 501-205",
  "capacity": 70,
  "code": "ZF1200071",
  "credit": 3,
  "offerDept": "생명과학과"
 },
 {
  "name": "뇌와질환",
  "section": "001",
  "professor": "최은상",
  "scheduleRaw": "금 09:00-12:00 501-304",
  "capacity": 50,
  "code": "ZF1200237",
  "credit": 3,
  "offerDept": "생명과학과"
 },
 {
  "name": "지구와자원",
  "section": "001",
  "professor": "이충모",
  "scheduleRaw": "월 16:30(75) 416-111,, 수 16:30(75) 416-111",
  "capacity": 70,
  "code": "ZF1100693",
  "credit": 3,
  "offerDept": "지질환경과학과"
 },
 {
  "name": "지구와자원",
  "section": "002",
  "professor": "강희철",
  "scheduleRaw": "월 15:00(75) 416-111,, 수 15:00(75) 416-111",
  "capacity": 70,
  "code": "ZF1100693",
  "credit": 3,
  "offerDept": "지질환경과학과"
 },
 {
  "name": "인간과자연재해",
  "section": "001",
  "professor": "홍상훈",
  "scheduleRaw": "화 16:30(75) 416-111,, 목 16:30(75) 416-111",
  "capacity": 70,
  "code": "ZF1200274",
  "credit": 3,
  "offerDept": "지질환경과학과"
 },
 {
  "name": "인간과자연재해",
  "section": "002",
  "professor": "강희철",
  "scheduleRaw": "월 13:30(75) 416-B104,, 수 13:30(75) 416-B104",
  "capacity": 70,
  "code": "ZF1200274",
  "credit": 3,
  "offerDept": "지질환경과학과"
 },
 {
  "name": "생활과기상",
  "section": "001",
  "professor": "정여민",
  "scheduleRaw": "화 10:30(75) 416-111,, 목 10:30(75) 416-111",
  "capacity": 50,
  "code": "ZF1100525",
  "credit": 3,
  "offerDept": "대기환경과학과"
 },
 {
  "name": "이론물리학의 최전선",
  "section": "084",
  "professor": "염동한",
  "scheduleRaw": "금 09:00-12:00 308-408",
  "capacity": 80,
  "code": "ZF1101041",
  "credit": 3,
  "offerDept": "물리교육과"
 },
 {
  "name": "역동하는 지구",
  "section": "087",
  "professor": "김지혁",
  "scheduleRaw": "화 16:30(75) 414-215,, 목 16:30(75) 414-215",
  "capacity": 40,
  "code": "ZF1101268",
  "credit": 3,
  "offerDept": "지구과학교육과"
 },
 {
  "name": "역동하는 지구",
  "section": "088",
  "professor": "장철우",
  "scheduleRaw": "화 16:30(75) 414-304,, 목 16:30(75) 414-304",
  "capacity": 40,
  "code": "ZF1101268",
  "credit": 3,
  "offerDept": "지구과학교육과"
 },
 {
  "name": "약이야기",
  "section": "001",
  "professor": "정연진",
  "scheduleRaw": "금 09:00-12:00 503-411",
  "capacity": 35,
  "code": "ZF1100486",
  "credit": 3,
  "offerDept": "약학부"
 },
 {
  "name": "에너지와기후변화",
  "section": "110",
  "professor": "최세진",
  "scheduleRaw": "수 18:00-21:00 408-5304",
  "capacity": 50,
  "code": "ZF1200696",
  "credit": 3,
  "offerDept": "EES융합전공"
 },
 {
  "name": "에너지환경기술",
  "section": "110",
  "professor": "최세진",
  "scheduleRaw": "화 18:00-21:00 408-5304",
  "capacity": 50,
  "code": "ZF1200770",
  "credit": 3,
  "offerDept": "EES융합전공"
 },
 {
  "name": "배터리속소재이야기",
  "section": "001",
  "professor": "이동윤",
  "scheduleRaw": "월 18:00(75) 514-109,, 수 18:00(75) 514-109",
  "capacity": 100,
  "code": "ZF1101057",
  "credit": 3,
  "offerDept": "이차전지융합전공"
 },
 {
  "name": "이차전지와인공지능",
  "section": "001",
  "professor": "조채용",
  "scheduleRaw": "월 18:00(75) 514-215,, 수 18:00(75) 514-215",
  "capacity": 100,
  "code": "ZF1101058",
  "credit": 3,
  "offerDept": "이차전지융합전공"
 },
 {
  "name": "성의과학",
  "section": "200",
  "professor": "박현철",
  "scheduleRaw": "월 13:30(75) 밀양M03-3455,, 수 13:30(75) 밀양M03-3455",
  "capacity": 30,
  "code": "ZF1100189",
  "credit": 3,
  "offerDept": "생명환경화학과"
 },
 {
  "name": "멀티미디어의이해와활용",
  "section": "001",
  "professor": "이호창",
  "scheduleRaw": "월 10:30(75) 314-110,, 수 10:30(75) 314-110",
  "capacity": 38,
  "code": "ZF1100738",
  "credit": 3,
  "offerDept": "교양교육원"
 },
 {
  "name": "IT환경에서의개인정보보호",
  "section": "001",
  "professor": "박성호",
  "scheduleRaw": "월 10:30(75) 314-301,, 수 10:30(75) 314-301",
  "capacity": 38,
  "code": "ZF1100740",
  "credit": 3,
  "offerDept": "교양교육원"
 },
 {
  "name": "디지털리터러시의 이해와 활용",
  "section": "001",
  "professor": "양자영",
  "scheduleRaw": "화 13:00(75) 314-301,, 목 13:00(75) 314-301",
  "capacity": 38,
  "code": "ZF1101167",
  "credit": 3,
  "offerDept": "교양교육원"
 },
 {
  "name": "디지털리터러시의 이해와 활용",
  "section": "201",
  "professor": "김미숙",
  "scheduleRaw": "화 14:00-17:00 밀양M03-3204",
  "capacity": 38,
  "code": "ZF1101167",
  "credit": 3,
  "offerDept": "교양교육원"
 },
 {
  "name": "AI기반컴퓨터시뮬레이션",
  "section": "001",
  "professor": "박성호",
  "scheduleRaw": "화 10:30(75) 314-301,, 목 10:30(75) 314-301",
  "capacity": 38,
  "code": "ZF1101217",
  "credit": 3,
  "offerDept": "교양교육원"
 },
 {
  "name": "AI기반컴퓨터시뮬레이션",
  "section": "002",
  "professor": "조미숙",
  "scheduleRaw": "화 15:00(75) 314-110,, 목 15:00(75) 314-110",
  "capacity": 38,
  "code": "ZF1101217",
  "credit": 3,
  "offerDept": "교양교육원"
 },
 {
  "name": "AI기반컴퓨터프로그래밍입문",
  "section": "001",
  "professor": "전인호",
  "scheduleRaw": "월 10:30(75) 514-309,, 수 10:30(75) 514-309",
  "capacity": 38,
  "code": "ZF1101218",
  "credit": 3,
  "offerDept": "교양교육원"
 },
 {
  "name": "데이터분석과AI의이해",
  "section": "001",
  "professor": "문경희",
  "scheduleRaw": "월 13:00(75) 314-110,, 수 13:00(75) 314-110",
  "capacity": 38,
  "code": "ZF1101220",
  "credit": 3,
  "offerDept": "교양교육원"
 },
 {
  "name": "AI미디어리터러시이해와비판적성찰",
  "section": "001",
  "professor": "오진영",
  "scheduleRaw": "화 10:00-13:00 516-305",
  "capacity": 30,
  "code": "ZF1101237",
  "credit": 3,
  "offerDept": "교양교육원"
 },
 {
  "name": "실생활과수학적모델링",
  "section": "001",
  "professor": "이미진",
  "scheduleRaw": "월 15:00(75) 416-B102,, 수 15:00(75) 416-B102",
  "capacity": 30,
  "code": "ZF1101238",
  "credit": 3,
  "offerDept": "교양교육원"
 },
 {
  "name": "공학윤리",
  "section": "001",
  "professor": "김철",
  "scheduleRaw": "월 15:00(75) 303-124,, 수 15:00(75) 303-124",
  "capacity": 40,
  "code": "ZF1100539",
  "credit": 3,
  "offerDept": "교육인증원"
 },
 {
  "name": "공학윤리",
  "section": "002",
  "professor": "정현우",
  "scheduleRaw": "월 15:00(75) 105-3415,, 수 15:00(75) 105-3415",
  "capacity": 40,
  "code": "ZF1100539",
  "credit": 3,
  "offerDept": "교육인증원"
 }
];

const RAW_YUNGHAP = [
 {
  "name": "사상체질로 보는 인간의 감정과 몸",
  "section": "001",
  "professor": "신상원",
  "scheduleRaw": "화 18:00-21:00 양산Y03-608",
  "capacity": 0,
  "code": "ZF1200742",
  "credit": 3,
  "offerDept": "한의학과"
 },
 {
  "name": "문학과영화로부산읽기",
  "section": "001",
  "professor": "손남훈",
  "scheduleRaw": "월 13:30(75) 306-212,, 수 13:30(75) 306-212",
  "capacity": 0,
  "code": "ZF1200746",
  "credit": 3,
  "offerDept": "국어국문학과"
 },
 {
  "name": "문학과영화로부산읽기",
  "section": "002",
  "professor": "백혜린",
  "scheduleRaw": "월 13:30(75) 306-501,, 수 13:30(75) 306-501",
  "capacity": 0,
  "code": "ZF1200746",
  "credit": 3,
  "offerDept": "국어국문학과"
 },
 {
  "name": "음식으로만나는중국",
  "section": "001",
  "professor": "김소정",
  "scheduleRaw": "월 16:30(75) 306-216,, 수 16:30(75) 306-216",
  "capacity": 30,
  "code": "ZF1200641",
  "credit": 3,
  "offerDept": "중어중문학과"
 },
 {
  "name": "미국문학과글로벌문화",
  "section": "001",
  "professor": "김유곤",
  "scheduleRaw": "화 09:00(75) 306-412,, 목 09:00(75) 306-412",
  "capacity": 30,
  "code": "ZF1101004",
  "credit": 3,
  "offerDept": "영어영문학과"
 },
 {
  "name": "중국문명과예술의흐름",
  "section": "001",
  "professor": "김종희",
  "scheduleRaw": "금 10:00-13:00 306-210",
  "capacity": 30,
  "code": "ZF1100800",
  "credit": 3,
  "offerDept": "사학과"
 },
 {
  "name": "AI시대의기술과그의미",
  "section": "001",
  "professor": "노형래",
  "scheduleRaw": "화 10:30(75) 306-307,, 목 10:30(75) 306-307",
  "capacity": 30,
  "code": "ZF1101043",
  "credit": 3,
  "offerDept": "철학과"
 },
 {
  "name": "AI시대의기술과그의미",
  "section": "002",
  "professor": "김솔",
  "scheduleRaw": "화 10:30(75) 306-312,, 목 10:30(75) 306-312",
  "capacity": 30,
  "code": "ZF1101043",
  "credit": 3,
  "offerDept": "철학과"
 },
 {
  "name": "AI시대의기술과그의미",
  "section": "003",
  "professor": "이선필",
  "scheduleRaw": "화 15:00(75) 306-205,, 목 15:00(75) 306-205",
  "capacity": 35,
  "code": "ZF1101043",
  "credit": 3,
  "offerDept": "철학과"
 },
 {
  "name": "AI시대의기술과그의미",
  "section": "200",
  "professor": "이선필",
  "scheduleRaw": "수 15:00-18:00 밀양M02-2314",
  "capacity": 30,
  "code": "ZF1101043",
  "credit": 3,
  "offerDept": "철학과"
 },
 {
  "name": "스토리텔링으로만나는불교사상",
  "section": "001",
  "professor": "박효엽",
  "scheduleRaw": "월 10:30(75) 306-307,, 수 10:30(75) 306-307",
  "capacity": 30,
  "code": "ZF1200671",
  "credit": 3,
  "offerDept": "철학과"
 },
 {
  "name": "스토리텔링으로만나는불교사상",
  "section": "002",
  "professor": "김준호",
  "scheduleRaw": "월 10:30(75) 306-201,, 수 10:30(75) 306-201",
  "capacity": 30,
  "code": "ZF1200671",
  "credit": 3,
  "offerDept": "철학과"
 },
 {
  "name": "스토리텔링으로만나는불교사상",
  "section": "200",
  "professor": "김준호",
  "scheduleRaw": "화 10:30-13:30 밀양M02-2111",
  "capacity": 30,
  "code": "ZF1200671",
  "credit": 3,
  "offerDept": "철학과"
 },
 {
  "name": "음식의과학",
  "section": "001",
  "professor": "윤부현 외 1명",
  "scheduleRaw": "월 15:00(75) 501-304,, 수 15:00(75) 501-304",
  "capacity": 50,
  "code": "ZF1200195",
  "credit": 3,
  "offerDept": "생명과학과"
 },
 {
  "name": "위험사회와미래직업",
  "section": "001",
  "professor": "김영환",
  "scheduleRaw": "토 09:00-12:00 417-302",
  "capacity": 20,
  "code": "ZF1200091",
  "credit": 3,
  "offerDept": "교육학과"
 },
 {
  "name": "영재교육과창의성계발",
  "section": "001",
  "professor": "박창언 외 1명",
  "scheduleRaw": "금 09:00-12:00 417-306",
  "capacity": 30,
  "code": "ZF1200292",
  "credit": 3,
  "offerDept": "교육학과"
 },
 {
  "name": "몸,나를찾는치유여행",
  "section": "077",
  "professor": "김경",
  "scheduleRaw": "화 14:00-17:00 106-722",
  "capacity": 0,
  "code": "ZF1200741",
  "credit": 3,
  "offerDept": "특수교육과"
 },
 {
  "name": "영화로읽는세계사와시대정신",
  "section": "001",
  "professor": "정대성",
  "scheduleRaw": "월 15:00(75) 418-106,, 수 15:00(75) 418-106",
  "capacity": 0,
  "code": "ZF1200638",
  "credit": 3,
  "offerDept": "역사교육과"
 },
 {
  "name": "영화로읽는세계사와시대정신",
  "section": "002",
  "professor": "김영화",
  "scheduleRaw": "화 13:30(75) 418-106,, 목 13:30(75) 418-106",
  "capacity": 0,
  "code": "ZF1200638",
  "credit": 3,
  "offerDept": "역사교육과"
 },
 {
  "name": "영화로읽는세계사와시대정신",
  "section": "003",
  "professor": "원동필",
  "scheduleRaw": "금 13:00-16:00 밀양M02-2111",
  "capacity": 0,
  "code": "ZF1200638",
  "credit": 3,
  "offerDept": "역사교육과"
 },
 {
  "name": "AI와 인간: 거울 속의 기계가 던지는 윤리적 질문들",
  "section": "001",
  "professor": "김현수",
  "scheduleRaw": "토 13:00-16:00(외부)KNU10 온라인강의",
  "capacity": 20,
  "code": "ZF1101248",
  "credit": 3,
  "offerDept": "윤리교육과"
 },
 {
  "name": "감염병과사회의변화",
  "section": "001",
  "professor": "장철훈 외 1명",
  "scheduleRaw": "금 09:00-12:00 405-2108",
  "capacity": 0,
  "code": "ZF1200591",
  "credit": 3,
  "offerDept": "의학과"
 },
 {
  "name": "현대문화와도자예술",
  "section": "101",
  "professor": "김현숙 외 1명",
  "scheduleRaw": "목 10:30(75) 703-312,, 목 12:00(75) 703-312",
  "capacity": 30,
  "code": "ZF1200144",
  "credit": 3,
  "offerDept": "조형학과"
 },
 {
  "name": "현대문화와도자예술",
  "section": "102",
  "professor": "김현숙 외 1명",
  "scheduleRaw": "목 10:30(75) 703-314,, 목 12:00(75) 703-314",
  "capacity": 30,
  "code": "ZF1200144",
  "credit": 3,
  "offerDept": "조형학과"
 },
 {
  "name": "수학과물리의감성적이해",
  "section": "001",
  "professor": "김광석",
  "scheduleRaw": "금 16:30-19:30 514-109",
  "capacity": 100,
  "code": "ZF1200717",
  "credit": 3,
  "offerDept": "광메카트로닉스공학전공"
 },
 {
  "name": "수학과물리의감성적이해",
  "section": "500",
  "professor": "김광석",
  "scheduleRaw": "금 13:30-16:30 514-312",
  "capacity": 40,
  "code": "ZF1200717",
  "credit": 3,
  "offerDept": "광메카트로닉스공학전공"
 },
 {
  "name": "인류문명과에너지원의변천사",
  "section": "001",
  "professor": "박유세",
  "scheduleRaw": "월 18:00(75) 514-312,, 수 18:00(75) 514-312",
  "capacity": 100,
  "code": "ZF1101056",
  "credit": 3,
  "offerDept": "이차전지융합전공"
 },
 {
  "name": "해양수산정책바로알기",
  "section": "001",
  "professor": "정원호",
  "scheduleRaw": "금 09:00-12:00 105-3214",
  "capacity": 50,
  "code": "ZF1101165",
  "credit": 3,
  "offerDept": "식품자원경제학과"
 },
 {
  "name": "합리적인간의비합리적선택",
  "section": "001",
  "professor": "고광수",
  "scheduleRaw": "화 13:30(75) 514-213,, 목 13:30(75) 514-213",
  "capacity": 50,
  "code": "ZF1101040",
  "credit": 3,
  "offerDept": "경영학과"
 },
 {
  "name": "부자되기특강",
  "section": "001",
  "professor": "김소명",
  "scheduleRaw": "월 12:00(75) 514-108,, 수 12:00(75) 514-108",
  "capacity": 50,
  "code": "ZF1200068",
  "credit": 3,
  "offerDept": "경영학과"
 },
 {
  "name": "지속가능패션과웰빙",
  "section": "001",
  "professor": "이정란 외 1명",
  "scheduleRaw": "화 15:00(75) 602-302,, 목 15:00(75) 602-302",
  "capacity": 32,
  "code": "ZF1101183",
  "credit": 3,
  "offerDept": "의류학과"
 },
 {
  "name": "지속가능패션과웰빙",
  "section": "002",
  "professor": "이정란 외 1명",
  "scheduleRaw": "화 16:30(75) 602-302,, 목 16:30(75) 602-302",
  "capacity": 32,
  "code": "ZF1101183",
  "credit": 3,
  "offerDept": "의류학과"
 },
 {
  "name": "과학과디자인이함께하는환경색채",
  "section": "001",
  "professor": "오영은",
  "scheduleRaw": "목 15:00-18:00 602-202",
  "capacity": 30,
  "code": "ZF1100963",
  "credit": 3,
  "offerDept": "실내환경디자인학과"
 },
 {
  "name": "도시와환경디자인",
  "section": "001",
  "professor": "김동식",
  "scheduleRaw": "화 18:00(75) 603-115,, 목 18:00(75) 603-115",
  "capacity": 30,
  "code": "ZF1200699",
  "credit": 3,
  "offerDept": "실내환경디자인학과"
 },
 {
  "name": "공학자의눈으로세계를보다",
  "section": "140",
  "professor": "정준수",
  "scheduleRaw": "목 15:00-18:00 양산Y17-204",
  "capacity": 40,
  "code": "ZF1200682",
  "credit": 3,
  "offerDept": "의생명융합공학부"
 },
 {
  "name": "기업가정신과 창의적 사고",
  "section": "001",
  "professor": "이억수",
  "scheduleRaw": "토 09:00(100) 506-101",
  "capacity": 270,
  "code": "ZF1200265",
  "credit": 2,
  "offerDept": "창업교육센터"
 },
 {
  "name": "기업가정신과 창의적 사고",
  "section": "500",
  "professor": "이억수",
  "scheduleRaw": "토 11:00(100) 506-101",
  "capacity": 30,
  "code": "ZF1200265",
  "credit": 2,
  "offerDept": "창업교육센터"
 },
 {
  "name": "인물로보는과학기술의역사",
  "section": "001",
  "professor": "송성수",
  "scheduleRaw": "월 10:30(75) 516-305,, 수 10:30(75) 516-305",
  "capacity": 30,
  "code": "ZF1100997",
  "credit": 3,
  "offerDept": "교양교육원"
 },
 {
  "name": "예술과과학의역사적관계에대한이해",
  "section": "001",
  "professor": "레기나 보데",
  "scheduleRaw": "금 14:00-17:00 210-603",
  "capacity": 20,
  "code": "ZF1200491",
  "credit": 3,
  "offerDept": "교양교육원"
 },
 {
  "name": "PNU시대와지성특강",
  "section": "001",
  "professor": "하상복 외 1명",
  "scheduleRaw": "화 15:00-18:00 422-803",
  "capacity": 75,
  "code": "ZF1200649",
  "credit": 3,
  "offerDept": "교양교육원"
 },
 {
  "name": "PNU시대와지성특강",
  "section": "200",
  "professor": "하상복 외 1명",
  "scheduleRaw": "화 15:00-18:00 밀양M03-3217",
  "capacity": 55,
  "code": "ZF1200649",
  "credit": 3,
  "offerDept": "교양교육원"
 },
 {
  "name": "PNU시대와지성특강",
  "section": "300",
  "professor": "하상복 외 1명",
  "scheduleRaw": "화 15:00-18:00 양산Y15-411",
  "capacity": 50,
  "code": "ZF1200649",
  "credit": 3,
  "offerDept": "교양교육원"
 },
 {
  "name": "SF와 포스트휴먼",
  "section": "001",
  "professor": "이효석",
  "scheduleRaw": "월 16:30(75) 306-308,, 수 16:30(75) 306-308",
  "capacity": 40,
  "code": "ZF1200464",
  "credit": 3,
  "offerDept": "인문학연구소"
 },
 {
  "name": "기후변화의이해",
  "section": "001",
  "professor": "이준이",
  "scheduleRaw": "",
  "capacity": 60,
  "code": "ZF1200165",
  "credit": 3,
  "offerDept": "기후과학연구소"
 },
 {
  "name": "아시아공동체특강",
  "section": "001",
  "professor": "정용하 외 1명",
  "scheduleRaw": "금 10:00-13:00 314-204-1",
  "capacity": 40,
  "code": "ZF1200520",
  "credit": 3,
  "offerDept": "통일한국연구원"
 }
];

const RAW_GEONGANG = [
 {
  "name": "우리지역의문화유산과트래킹",
  "section": "001",
  "professor": "김혜리",
  "scheduleRaw": "금 14:00-17:00 405-2104",
  "capacity": 30,
  "code": "ZF1100801",
  "credit": 3,
  "offerDept": "사학과"
 },
 {
  "name": "생활습관병과운동",
  "section": "001",
  "professor": "고수한",
  "scheduleRaw": "월 13:30(75) 705-301,, 수 13:30(75) 705-301",
  "capacity": 0,
  "code": "ZF1200089",
  "credit": 3,
  "offerDept": "체육교육과"
 },
 {
  "name": "생활습관병과운동",
  "section": "002",
  "professor": "한기훈",
  "scheduleRaw": "화 13:30(75) 705-301,, 목 13:30(75) 705-301",
  "capacity": 0,
  "code": "ZF1200089",
  "credit": 3,
  "offerDept": "체육교육과"
 },
 {
  "name": "생활습관병과운동",
  "section": "003",
  "professor": "김대경",
  "scheduleRaw": "월 09:00(75) 701-204,, 수 09:00(75) 701-204",
  "capacity": 0,
  "code": "ZF1200089",
  "credit": 3,
  "offerDept": "체육교육과"
 },
 {
  "name": "생활습관병과운동",
  "section": "200",
  "professor": "고수한",
  "scheduleRaw": "화 10:30(75) 밀양M02-2314,, 목 10:30(75) 밀양M02-2314",
  "capacity": 0,
  "code": "ZF1200089",
  "credit": 3,
  "offerDept": "체육교육과"
 },
 {
  "name": "현대사회와스포츠",
  "section": "001",
  "professor": "이근모",
  "scheduleRaw": "월 10:30(75) 705-202,, 수 10:30(75) 705-202",
  "capacity": 0,
  "code": "ZF1200467",
  "credit": 3,
  "offerDept": "체육교육과"
 },
 {
  "name": "현대사회와스포츠",
  "section": "002",
  "professor": "조송현",
  "scheduleRaw": "금 13:00-16:00 705-202",
  "capacity": 0,
  "code": "ZF1200467",
  "credit": 3,
  "offerDept": "체육교육과"
 },
 {
  "name": "현대사회와스포츠",
  "section": "003",
  "professor": "권세창",
  "scheduleRaw": "월 15:00(75) 705-202,, 수 15:00(75) 705-202",
  "capacity": 0,
  "code": "ZF1200467",
  "credit": 3,
  "offerDept": "체육교육과"
 },
 {
  "name": "현대사회와스포츠",
  "section": "004",
  "professor": "곽주영",
  "scheduleRaw": "금 16:00-19:00 705-202",
  "capacity": 0,
  "code": "ZF1200467",
  "credit": 3,
  "offerDept": "체육교육과"
 },
 {
  "name": "현대사회와스포츠",
  "section": "005",
  "professor": "윤거일",
  "scheduleRaw": "화 15:00(75) 701-102,, 목 15:00(75) 701-102",
  "capacity": 0,
  "code": "ZF1200467",
  "credit": 3,
  "offerDept": "체육교육과"
 },
 {
  "name": "현대사회와스포츠",
  "section": "006",
  "professor": "곽주영",
  "scheduleRaw": "화 09:00(75) 701-105,, 목 09:00(75) 701-105",
  "capacity": 0,
  "code": "ZF1200467",
  "credit": 3,
  "offerDept": "체육교육과"
 },
 {
  "name": "현대사회와스포츠",
  "section": "200",
  "professor": "윤거일",
  "scheduleRaw": "월 12:00(75) 밀양M03-3454,, 수 12:00(75) 밀양M03-3454",
  "capacity": 0,
  "code": "ZF1200467",
  "credit": 3,
  "offerDept": "체육교육과"
 },
 {
  "name": "현대생활과레크레이션",
  "section": "001",
  "professor": "이현수",
  "scheduleRaw": "월 13:30(75) 705-202,, 수 13:30(75) 705-202",
  "capacity": 0,
  "code": "ZF1200468",
  "credit": 3,
  "offerDept": "체육교육과"
 },
 {
  "name": "현대생활과레크레이션",
  "section": "002",
  "professor": "조건상",
  "scheduleRaw": "화 13:30(75) 705-202,, 목 13:30(75) 705-202",
  "capacity": 0,
  "code": "ZF1200468",
  "credit": 3,
  "offerDept": "체육교육과"
 },
 {
  "name": "현대생활과레크레이션",
  "section": "003",
  "professor": "박진우",
  "scheduleRaw": "월 09:00(75) 701-202,, 수 09:00(75) 701-202",
  "capacity": 0,
  "code": "ZF1200468",
  "credit": 3,
  "offerDept": "체육교육과"
 },
 {
  "name": "현대생활과레크레이션",
  "section": "004",
  "professor": "강민서",
  "scheduleRaw": "화 10:30(75) 701-105,, 목 10:30(75) 701-105",
  "capacity": 0,
  "code": "ZF1200468",
  "credit": 3,
  "offerDept": "체육교육과"
 },
 {
  "name": "현대생활과레크레이션",
  "section": "200",
  "professor": "강민서",
  "scheduleRaw": "월 13:30(75) 밀양M02-2314,, 수 13:30(75) 밀양M02-2314",
  "capacity": 0,
  "code": "ZF1200468",
  "credit": 3,
  "offerDept": "체육교육과"
 },
 {
  "name": "현대생활과레크레이션",
  "section": "300",
  "professor": "강민서",
  "scheduleRaw": "목 14:00-17:00 양산Y15-311",
  "capacity": 0,
  "code": "ZF1200468",
  "credit": 3,
  "offerDept": "체육교육과"
 },
 {
  "name": "주택과실내디자인",
  "section": "001",
  "professor": "김동식",
  "scheduleRaw": "화 13:30(75) 602-202,, 목 13:30(75) 602-202",
  "capacity": 30,
  "code": "ZF1200332",
  "credit": 3,
  "offerDept": "실내환경디자인학과"
 },
 {
  "name": "현대인의체력관리",
  "section": "001",
  "professor": "류승호",
  "scheduleRaw": "화 10:30(75) 705-202,, 목 10:30(75) 705-202",
  "capacity": 0,
  "code": "ZF1200444",
  "credit": 3,
  "offerDept": "스포츠과학과"
 },
 {
  "name": "현대인의체력관리",
  "section": "002",
  "professor": "한승욱",
  "scheduleRaw": "월 12:00(75) 705-202,, 수 12:00(75) 705-202",
  "capacity": 0,
  "code": "ZF1200444",
  "credit": 3,
  "offerDept": "스포츠과학과"
 },
 {
  "name": "현대인의체력관리",
  "section": "003",
  "professor": "백경완",
  "scheduleRaw": "금 10:00-13:00 705-202",
  "capacity": 0,
  "code": "ZF1200444",
  "credit": 3,
  "offerDept": "스포츠과학과"
 },
 {
  "name": "현대인의체력관리",
  "section": "004",
  "professor": "조은아",
  "scheduleRaw": "화 15:00(75) 705-202,, 목 15:00(75) 705-202",
  "capacity": 0,
  "code": "ZF1200444",
  "credit": 3,
  "offerDept": "스포츠과학과"
 },
 {
  "name": "현대인의체력관리",
  "section": "005",
  "professor": "김성아",
  "scheduleRaw": "화 09:00(75) 705-202,, 목 09:00(75) 705-202",
  "capacity": 0,
  "code": "ZF1200444",
  "credit": 3,
  "offerDept": "스포츠과학과"
 },
 {
  "name": "스포츠와도시인문학",
  "section": "001",
  "professor": "윤거일",
  "scheduleRaw": "화 13:00(75) 416-B105,, 목 13:00(75) 416-B105",
  "capacity": 30,
  "code": "ZF1101239",
  "credit": 3,
  "offerDept": "교양교육원"
 }
];

const RAW_INSEONG = [
 {
  "name": "욕망과철학",
  "section": "001",
  "professor": "정대훈",
  "scheduleRaw": "화 13:30(75) 306-307,, 목 13:30(75) 306-307",
  "capacity": 30,
  "code": "ZF1100407",
  "credit": 3,
  "offerDept": "철학과"
 },
 {
  "name": "욕망과철학",
  "section": "002",
  "professor": "채정현",
  "scheduleRaw": "화 13:30(75) 306-203,, 목 13:30(75) 306-203",
  "capacity": 30,
  "code": "ZF1100407",
  "credit": 3,
  "offerDept": "철학과"
 },
 {
  "name": "욕망과철학",
  "section": "003",
  "professor": "서석구",
  "scheduleRaw": "화 12:00(75) 306-201,, 목 12:00(75) 306-201",
  "capacity": 35,
  "code": "ZF1100407",
  "credit": 3,
  "offerDept": "철학과"
 },
 {
  "name": "욕망과철학",
  "section": "200",
  "professor": "박수범",
  "scheduleRaw": "목 14:00-17:00 밀양M02-2111",
  "capacity": 30,
  "code": "ZF1100407",
  "credit": 3,
  "offerDept": "철학과"
 },
 {
  "name": "AI시대 도가사상의지혜",
  "section": "001",
  "professor": "정종모",
  "scheduleRaw": "월 13:30(75) 306-307,, 수 13:30(75) 306-307",
  "capacity": 30,
  "code": "ZF1101225",
  "credit": 3,
  "offerDept": "철학과"
 },
 {
  "name": "AI시대 도가사상의지혜",
  "section": "002",
  "professor": "구미숙",
  "scheduleRaw": "월 13:30(75) 306-203,, 수 13:30(75) 306-203",
  "capacity": 30,
  "code": "ZF1101225",
  "credit": 3,
  "offerDept": "철학과"
 },
 {
  "name": "AI시대 도가사상의지혜",
  "section": "003",
  "professor": "김효준",
  "scheduleRaw": "월 15:00(75) 306-501,, 수 15:00(75) 306-501",
  "capacity": 35,
  "code": "ZF1101225",
  "credit": 3,
  "offerDept": "철학과"
 },
 {
  "name": "AI시대 도가사상의지혜",
  "section": "200",
  "professor": "구미숙",
  "scheduleRaw": "목 14:00-17:00 밀양M02-2212",
  "capacity": 30,
  "code": "ZF1101225",
  "credit": 3,
  "offerDept": "철학과"
 },
 {
  "name": "다양성의 가치와 포용적 사회",
  "section": "001",
  "professor": "주현희 외 1명",
  "scheduleRaw": "화 10:00-13:00 206-11302",
  "capacity": 20,
  "code": "ZF1101007",
  "credit": 3,
  "offerDept": "교양교육원"
 },
 {
  "name": "다양성의 가치와 포용적 사회",
  "section": "200",
  "professor": "주현희 외 1명",
  "scheduleRaw": "수 14:00-17:00 밀양M03-3242",
  "capacity": 20,
  "code": "ZF1101007",
  "credit": 3,
  "offerDept": "교양교육원"
 },
 {
  "name": "마음돌봄리부트",
  "section": "001",
  "professor": "심효진",
  "scheduleRaw": "화 10:30(75) 201-6208,, 목 10:30(75) 201-6208",
  "capacity": 30,
  "code": "ZF1101240",
  "credit": 3,
  "offerDept": "교양교육원"
 },
 {
  "name": "방황하는청춘을위한희망의철학",
  "section": "001",
  "professor": "정진우",
  "scheduleRaw": "화 13:30(75) 105-3504,, 목 13:30(75) 105-3504",
  "capacity": 30,
  "code": "ZF1101241",
  "credit": 3,
  "offerDept": "교양교육원"
 },
 {
  "name": "미래세대와돌봄사회",
  "section": "001",
  "professor": "천명주",
  "scheduleRaw": "월 12:00(75) 417-303,, 수 12:00(75) 417-303",
  "capacity": 30,
  "code": "ZF1101242",
  "credit": 3,
  "offerDept": "교양교육원"
 },
 {
  "name": "효원사회봉사",
  "section": "001",
  "professor": "하상복",
  "scheduleRaw": "",
  "capacity": 200,
  "code": "ZF1101246",
  "credit": 2,
  "offerDept": "교양교육원"
 },
 {
  "name": "현대사회에서반려동물기르기와동물권",
  "section": "001",
  "professor": "이상현",
  "scheduleRaw": "화 15:00(75) 422-303,, 목 15:00(75) 422-303",
  "capacity": 30,
  "code": "ZF1200650",
  "credit": 3,
  "offerDept": "교양교육원"
 },
 {
  "name": "국제학생을위한인문학산책",
  "section": "001",
  "professor": "김인선 외 2명",
  "scheduleRaw": "금 10:00-13:00 422-303",
  "capacity": 0,
  "code": "ZF1101273",
  "credit": 3,
  "offerDept": "여성연구소"
 },
 {
  "name": "호모에로스,연애의정치학",
  "section": "001",
  "professor": "배혜정 외 1명",
  "scheduleRaw": "월 16:30-17:00 416-B102,, 수 16:30-17:00 416-B102",
  "capacity": 0,
  "code": "ZF1101275",
  "credit": 3,
  "offerDept": "여성연구소"
 }
];
