// ===== 요일/시간 파싱 =====
const DAY_INDEX = { "월": 0, "화": 1, "수": 2, "목": 3, "금": 4, "토": 5, "일": 6 };
const DAY_LABEL = ["월", "화", "수", "목", "금"];

function parseSchedule(raw) {
  // raw: "월 15:00(100) 201-6207" 또는 "월 15:00(75) 417-306, 수 15:00(75) 417-306"
  // 사이버 병행: "..., 토 사이버수업"
  const slots = [];
  let hasCyber = false;
  const parts = raw.split(",").map(s => s.trim());
  for (const part of parts) {
    if (part.includes("사이버수업") || part.includes("사이버 수업")) { hasCyber = true; continue; }
    const m = part.match(/^([월화수목금토일])\s+(\d{1,2}):(\d{2})\((\d+)\)\s+(.+)$/);
    if (!m) continue;
    const [, dayCh, hh, mm, dur, loc] = m;
    const start = parseInt(hh) * 60 + parseInt(mm);
    const duration = parseInt(dur);
    const dashIdx = loc.indexOf("-");
    let building = loc, room = "";
    if (dashIdx > -1) { building = loc.slice(0, dashIdx); room = loc.slice(dashIdx + 1); }
    slots.push({ day: DAY_INDEX[dayCh], dayLabel: dayCh, start, end: start + duration, building, room });
  }
  return { slots, hasCyber };
}

function fmtTime(min) {
  const h = Math.floor(min / 60), m = min % 60;
  return `${String(h).padStart(2,"0")}:${String(m).padStart(2,"0")}`;
}

// ===== 데이터 조립 =====
const CATEGORY_META = {
  goto: { label: "고전읽기와토론", color: "#3b6bf6", credit: 2, code: "ZE1000091", grading: "quasi" },
  indisa: { label: "인공지능과디지털사고", color: "#8c5bf0", credit: 3, code: "ZE1000453", grading: "quasi" },
  english: { label: "대학영어", color: "#0aa384", credit: 2, code: "ZE1000113", grading: "quasi" },
  gyogaeron: { label: "교육학개론(교직)", color: "#e08a2c", credit: 2, code: "XA4000026", grading: "quasi" },
  gyocholsa: { label: "교육철학및교육사(교직)", color: "#c2536b", credit: 2, code: "XA4000024", grading: "quasi" },
  fixed: { label: "고정과목", color: "#5a6472", credit: null, code: null, grading: null }
};

// 부산대학교 교육과정 편성 및 운영 규정 제30조(상대평가 등) 기준
const GRADING_RULES = {
  quasi: {
    label: "준상대평가",
    rule: "A+~A0 등급 합계 50% 이하 (하한 규정 없음)",
    article: "「부산대학교 교육과정 편성 및 운영 규정」 제30조제2항제2호 — 인공지능과 디지털사고, 대학영어, 열린사고와표현, 고전읽기와토론, 교직과목(학교현장실습 제외) 등",
    computeMax: (cap) => (cap ? [{ label: "A+~A0", max: Math.floor(cap * 0.5) }] : [])
  },
  relative: {
    label: "상대평가",
    rule: "A+~B0 등급 합계 70% 이하(이 중 A+~A0는 40% 이하), C+ 이하 30% 이상",
    article: "「부산대학교 교육과정 편성 및 운영 규정」 제30조제2항제1호 — 교양 및 전공과목 원칙",
    computeMax: (cap) => (cap ? [
      { label: "A+~B0", max: Math.floor(cap * 0.7) },
      { label: "(그 중) A+~A0", max: Math.floor(cap * 0.4) },
      { label: "C+ 이하", min: Math.ceil(cap * 0.3) }
    ] : [])
  },
  su: {
    label: "S/U 평가 (직업능력개발과정)",
    rule: "A+~F 등급 없이 S(이수)/U(미이수)로만 평가하며 평점평균(GPA)에 반영되지 않음",
    article: "「부산대학교 교육과정 편성 및 운영 규정」 제17조(직업능력개발과정)",
    computeMax: () => []
  }
};

function buildCourse(category, name, section, professor, scheduleRaw, capacity, extra) {
  const parsed = parseSchedule(scheduleRaw);
  return Object.assign({
    id: `${category}-${section}`,
    category, name, section,
    professor: professor || "미정",
    credit: CATEGORY_META[category].credit,
    capacity: capacity || null,
    code: CATEGORY_META[category].code,
    grading: CATEGORY_META[category].grading,
    scheduleRaw,
    slots: parsed.slots,
    hasCyber: parsed.hasCyber,
    fixed: category === "fixed",
    evaluation: null, textbook: null, goals: null, overview: null, curriculum: null,
    pdf: null
  }, extra || {});
}

const ALL_COURSES = [];

RAW_GOTO.forEach(([section, prof, sched, cap]) => {
  ALL_COURSES.push(buildCourse("goto", "고전읽기와토론", section, prof, sched, cap, {
    pdf: `assets/syllabus/goto/고토${section}.pdf`
  }));
});

RAW_INDISA.forEach(([section, prof, sched, cap]) => {
  ALL_COURSES.push(buildCourse("indisa", "인공지능과디지털사고", section, prof, sched, cap, {
    pdf: `assets/syllabus/indisa/인디사${section}.pdf`
  }));
});

["초급","중급","고급"].forEach(level => {
  RAW_ENGLISH[level].forEach(([section, prof, sched, cap]) => {
    ALL_COURSES.push(buildCourse("english", `대학영어(${level} 수준)`, section, prof, sched, cap, {
      level,
      pdf: null
    }));
  });
});

RAW_GYOGAERON.forEach(([section, prof, sched, cap]) => {
  ALL_COURSES.push(buildCourse("gyogaeron", "교육학개론", section, prof, sched, cap, {
    pdf: `assets/syllabus/gyogaeron/교개론${section}.pdf`
  }));
});

RAW_GYOCHOLSA.forEach(([section, prof, sched, cap]) => {
  ALL_COURSES.push(buildCourse("gyocholsa", "교육철학및교육사", section, prof, sched, cap, {
    pdf: `assets/syllabus/gyocholsa/교철사${section}.pdf`
  }));
});

// 경제학/대학생활설계와비전(고정 과목)과 시간이 겹치는 분반은 애초에 신청 불가능하므로 목록에서 제외
const FIXED_SLOTS = FIXED_COURSES_RAW.flatMap(fc => parseSchedule(fc.schedule).slots);
function overlapsFixedSlots(course) {
  return course.slots.some(s1 => FIXED_SLOTS.some(s2 => s1.day === s2.day && s1.start < s2.end && s2.start < s1.end));
}
for (let i = ALL_COURSES.length - 1; i >= 0; i--) {
  if (overlapsFixedSlots(ALL_COURSES[i])) ALL_COURSES.splice(i, 1);
}

FIXED_COURSES_RAW.forEach(fc => {
  const parsed = parseSchedule(fc.schedule);
  ALL_COURSES.push({
    id: fc.id, category: "fixed", name: fc.name, section: fc.section,
    professor: fc.professor, credit: fc.credit, capacity: fc.capacity || null,
    code: fc.code || null, grading: fc.grading || null, scheduleRaw: fc.schedule,
    slots: parsed.slots, hasCyber: false, fixed: true,
    evaluation: fc.evaluation, textbook: fc.textbook, goals: fc.goals,
    overview: fc.overview, curriculum: fc.curriculum, pdf: fc.pdf, dept: fc.dept
  });
});

// 별도 강의계획서 상세 데이터(SYLLABUS_*) 병합 — syllabus-data.js 에서 로드됨
function mergeSyllabusDetail(map, category) {
  if (!map) return;
  ALL_COURSES.forEach(c => {
    if (c.category !== category) return;
    const d = map[c.section];
    if (!d) return;
    c.evaluation = d.evaluation; c.textbook = d.textbook;
    c.goals = d.goals; c.overview = d.overview; c.curriculum = d.curriculum;
  });
}
if (typeof SYLLABUS_GOTO !== "undefined") mergeSyllabusDetail(SYLLABUS_GOTO, "goto");
if (typeof SYLLABUS_INDISA !== "undefined") mergeSyllabusDetail(SYLLABUS_INDISA, "indisa");
if (typeof SYLLABUS_GYOGAERON !== "undefined") mergeSyllabusDetail(SYLLABUS_GYOGAERON, "gyogaeron");
if (typeof SYLLABUS_GYOCHOLSA !== "undefined") mergeSyllabusDetail(SYLLABUS_GYOCHOLSA, "gyocholsa");

// ===== 상태 =====
const STORAGE_KEY = "pnu-timetable-2026-2";
let selectedIds = new Set(FIXED_COURSES_RAW.map(f => f.id));

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const arr = JSON.parse(raw);
      arr.forEach(id => selectedIds.add(id));
    }
  } catch (e) {}
}
function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...selectedIds]));
}

function getCourse(id) { return ALL_COURSES.find(c => c.id === id); }
function selectedCourses() { return [...selectedIds].map(getCourse).filter(Boolean); }

function hasConflict(course) {
  const existing = selectedCourses().filter(c => c.id !== course.id);
  for (const c of existing) {
    for (const s1 of course.slots) {
      for (const s2 of c.slots) {
        if (s1.day === s2.day && s1.start < s2.end && s2.start < s1.end) return c;
      }
    }
  }
  return null;
}

// 같은 시간대(요일+시간 겹침)에 개설된 동일 과목의 다른 분반 — 수강신청 실패(정원마감 등) 시 대안 참고용
function findAlternatives(course) {
  if (course.fixed) return [];
  return ALL_COURSES.filter(c => {
    if (c.id === course.id || c.fixed) return false;
    if (c.category !== course.category) return false;
    if (course.category === "english" && c.level !== course.level) return false;
    return course.slots.some(s1 => c.slots.some(s2 => s1.day === s2.day && s1.start < s2.end && s2.start < s1.end));
  });
}

// 교재 텍스트 속 <책제목>/『책제목』/《책제목》 을 교보문고 검색(또는 실제 상품) 링크로 변환하고,
// 조회된 경우 저자·출판사·판매가를 함께 표시
function linkifyTextbook(text) {
  if (!text) return text;
  return text.replace(/<([^<>]{2,50})>|『([^『』]{2,50})』|《([^《》]{2,50})》/g, (whole, a, b, c) => {
    const title = (a || b || c).trim();
    if (/^PNU\s*고전/.test(title)) return whole; // 대학 자체 선정 고전 목록은 특정 도서가 아니므로 링크하지 않음
    const info = (typeof BOOK_PRICES !== "undefined") ? BOOK_PRICES[title] : null;
    const url = (info && info.found && info.url) ? info.url : `https://search.kyobobook.co.kr/search?keyword=${encodeURIComponent(title)}`;
    let extra = "";
    if (info && info.found) {
      const bits = [];
      if (info.author) bits.push(info.author);
      if (info.publisher) bits.push(info.publisher);
      const meta = bits.length ? `${bits.join(", ")} · ` : "";
      const price = info.price ? `교보문고 ${info.price.toLocaleString()}원` : "교보문고";
      extra = ` <span class="book-price">${meta}${price}</span>`;
    }
    return `<a href="${url}" target="_blank" rel="noopener" class="book-link" title="교보문고에서 찾아보기">${whole}</a>${extra}`;
  });
}

// ===== 건물 클릭 -> 캠퍼스 약도 + 사진 모달 =====
function buildingLink(code, room, labelOverride) {
  if (!code) return "";
  const label = labelOverride || `${buildingName(code)} ${room || ""}`.trim();
  return `<a href="#" class="building-link" data-building="${code}">${label}</a>`;
}

// 시간표 화면(카드/그리드)에서는 건물 정보를 클릭할 수 없도록 일반 텍스트로만 표시.
// 팝업(모달) 안에서만 buildingLink()로 클릭 가능하게 함.
function buildingText(code, room, labelOverride) {
  if (!code) return "";
  return labelOverride || `${buildingName(code)} ${room || ""}`.trim();
}

const BUILDINGS_WITH_MAP_CROP = new Set(["102","105","201","206","210","306","311","314","401","416","417","422","514","516","701"]);

function openBuildingModal(code) {
  const name = buildingName(code);
  const zone = BUILDING_ZONE[code];
  const photo = (typeof BUILDING_PHOTOS !== "undefined") ? BUILDING_PHOTOS[code] : null;
  const hasCrop = BUILDINGS_WITH_MAP_CROP.has(code);
  document.getElementById("modalBody").innerHTML = `
    <span class="modal-close-x" id="modalCloseX">&times;</span>
    <h3>🏫 ${name}</h3>
    <div class="modal-sub">건물번호 ${code}${zone ? ` · ${zone} ZONE` : ""}</div>
    <div class="modal-section">
      <h4>캠퍼스 약도 상 위치</h4>
      ${hasCrop
        ? `<div style="font-size:12px;color:var(--text-dim);margin-bottom:8px;">빨간 원으로 표시된 건물이 ${name}(${code})입니다.</div>
           <img src="assets/images/buildings/${code}-map.jpg" alt="${name} 약도 위치" style="width:100%;border-radius:10px;border:1px solid var(--border);display:block;">`
        : `<div style="font-size:12px;color:var(--text-dim);margin-bottom:8px;">이 건물의 확대 이미지가 없어 전체 약도를 표시합니다. ${zone ? zone + " ZONE 근처를 확인하세요." : ""}</div>
           <img src="assets/images/campus-map.jpg" alt="부산대학교 부산캠퍼스 약도" style="width:100%;border-radius:10px;border:1px solid var(--border);">`}
    </div>
    <div class="modal-section">
      <h4>건물 사진</h4>
      ${photo && photo.imageUrl
        ? `<img src="${photo.imageUrl}" alt="${name}" style="width:100%;border-radius:10px;border:1px solid var(--border);">
           <div style="font-size:11px;color:var(--text-dim);margin-top:4px;">출처: <a href="${photo.sourceUrl}" target="_blank" rel="noopener">${photo.sourceUrl || photo.imageUrl}</a>${photo.license ? " · " + photo.license : ""}</div>`
        : `<p style="color:var(--text-dim)">등록된 사진이 없습니다.</p>`}
    </div>
    <div class="modal-actions">
      <a class="btn" href="https://map.naver.com/p/search/${encodeURIComponent("부산대학교 " + name)}" target="_blank" rel="noopener">네이버 지도에서 찾기</a>
      <button class="btn" id="modalCloseBtn">닫기</button>
    </div>`;
  document.getElementById("modalBackdrop").classList.add("open");
  document.getElementById("modalCloseX").onclick = closeModal;
  document.getElementById("modalCloseBtn").onclick = closeModal;
}
document.addEventListener("click", (e) => {
  const a = e.target.closest(".building-link");
  if (!a) return;
  e.preventDefault();
  e.stopPropagation();
  openBuildingModal(a.dataset.building);
});

function toast(msg) {
  const el = document.getElementById("toast");
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(toast._t);
  toast._t = setTimeout(() => el.classList.remove("show"), 2200);
}

function addCourse(id) {
  const course = getCourse(id);
  if (!course) return;
  const conflict = hasConflict(course);
  if (conflict) { toast(`시간이 겹칩니다: ${conflict.name} ${conflict.section}분반`); return; }
  selectedIds.add(id);
  saveState();
  renderAll();
  toast(`${course.name} (${course.section}분반) 추가됨`);
}
function removeCourse(id) {
  const course = getCourse(id);
  if (course && course.fixed) { toast("고정 과목은 삭제할 수 없습니다"); return; }
  selectedIds.delete(id);
  saveState();
  renderAll();
}

// ===== 렌더링: 사이드바 목록 =====
let activeTab = "goto";
let searchTerm = "";
let englishLevelFilter = "all";

function renderTabs() {
  const tabsEl = document.getElementById("tabs");
  tabsEl.innerHTML = "";
  Object.keys(CATEGORY_META).filter(k => k !== "fixed").forEach(key => {
    const btn = document.createElement("button");
    btn.className = "tab" + (activeTab === key ? " active" : "");
    btn.textContent = CATEGORY_META[key].label;
    btn.onclick = () => { activeTab = key; renderTabs(); renderCourseList(); };
    tabsEl.appendChild(btn);
  });
}

function renderCourseList() {
  const listEl = document.getElementById("courseList");
  listEl.innerHTML = "";
  let items = ALL_COURSES.filter(c => c.category === activeTab);
  if (searchTerm) {
    const t = searchTerm.toLowerCase();
    items = items.filter(c => c.professor.toLowerCase().includes(t) || c.section.includes(t) || c.scheduleRaw.toLowerCase().includes(t));
  }
  if (activeTab === "english") {
    listEl.insertAdjacentHTML("beforeend", `<div class="fixed-note">대학영어는 수준별 분반입니다. 자신에게 맞는 수준(초급/중급/고급)을 모르면 상단의 <a href="english-diagnostic.html">대학영어 분반 자가진단</a> 페이지를 먼저 확인하세요.</div>`);
    const levelRow = document.createElement("div");
    levelRow.className = "tabs";
    levelRow.style.marginBottom = "8px";
    ["all", "초급", "중급", "고급"].forEach(lv => {
      const b = document.createElement("button");
      b.className = "tab" + (englishLevelFilter === lv ? " active" : "");
      b.textContent = lv === "all" ? "전체" : lv;
      b.onclick = () => { englishLevelFilter = lv; renderCourseList(); };
      levelRow.appendChild(b);
    });
    listEl.appendChild(levelRow);
    if (englishLevelFilter !== "all") items = items.filter(c => c.level === englishLevelFilter);
  }
  items.forEach(c => {
    const already = selectedIds.has(c.id);
    const div = document.createElement("div");
    div.className = "course-card";
    const buildingLabel = c.slots.map(s => `${DAY_LABEL[s.day] || s.dayLabel} ${fmtTime(s.start)}-${fmtTime(s.end)} ${buildingText(s.building, s.room, `${buildingName(s.building)}(${s.building})-${s.room}`)}`).join(" / ");
    div.innerHTML = `
      <div class="name">${c.name} <span style="color:var(--text-dim);font-weight:400;">${c.section}분반</span></div>
      <div class="meta">${c.professor}${c.hasCyber ? " · 토 사이버수업 병행" : ""}<br>${buildingLabel || "시간 미정"}</div>
      <div class="row">
        <span style="font-size:11.5px;color:var(--text-dim);">${c.credit}학점${c.capacity ? ` · 정원 ${c.capacity}명` : ""}</span>
        <div style="display:flex; gap:6px;">
          <button class="btn small" data-detail="${c.id}">상세</button>
          ${already ? `<button class="btn small" disabled>추가됨</button>` : `<button class="btn small primary" data-add="${c.id}">담기</button>`}
        </div>
      </div>`;
    listEl.appendChild(div);
  });
  listEl.querySelectorAll("[data-add]").forEach(b => b.onclick = () => addCourse(b.dataset.add));
  listEl.querySelectorAll("[data-detail]").forEach(b => b.onclick = () => openModal(b.dataset.detail));
}

// ===== 렌더링: 시간표 그리드 =====
const GRID_START = 9 * 60; // 09:00
const GRID_END = 19 * 60;  // 19:00
const PX_PER_MIN = 1.1;

function renderGrid() {
  const cols = document.querySelectorAll(".tt-col");
  cols.forEach(c => c.innerHTML = "");
  const byDay = [[], [], [], [], []];
  selectedCourses().forEach(course => {
    course.slots.forEach(slot => {
      if (slot.day < 0 || slot.day > 4) return; // 월-금만 표시
      const col = document.getElementById(`col-${slot.day}`);
      if (!col) return;
      const top = (slot.start - GRID_START) * PX_PER_MIN;
      const height = (slot.end - slot.start) * PX_PER_MIN;
      const block = document.createElement("div");
      block.className = "tt-block" + (course.fixed ? " locked" : "");
      block.style.top = `${top}px`;
      block.style.height = `${Math.max(height, 30)}px`;
      block.style.background = CATEGORY_META[course.category].color;
      block.dataset.id = course.id;
      block.innerHTML = `<b>${course.name}</b><span class="tt-block-time">${fmtTime(slot.start)}~${fmtTime(slot.end)}</span><span>${course.section}분반 · ${course.professor}</span><div class="loc">${buildingText(slot.building, slot.room)}</div>${course.fixed ? "" : `<span class="remove-x" data-remove="${course.id}">✕</span>`}`;
      block.onclick = (e) => {
        if (e.target.dataset.remove) { e.stopPropagation(); removeCourse(e.target.dataset.remove); return; }
        openModal(course.id);
      };
      col.appendChild(block);
      byDay[slot.day].push({ course, slot });
    });
  });

  // 도보 이동시간 커넥터: 같은 요일에 연속으로 배치된 수업 사이 표시
  byDay.forEach((entries, day) => {
    const col = document.getElementById(`col-${day}`);
    if (!col) return;
    entries.sort((a, b) => a.slot.start - b.slot.start);
    for (let i = 0; i < entries.length - 1; i++) {
      const cur = entries[i], next = entries[i + 1];
      const gap = next.slot.start - cur.slot.end;
      if (gap <= 0 || gap > 60) continue; // 겹침이거나 1시간 넘게 여유있으면 표시 생략
      const walk = estimateWalkMinutes(cur.slot.building, next.slot.building, cur.slot.room, next.slot.room);
      const level = walkLevel(gap, walk);
      const conn = document.createElement("div");
      conn.className = `tt-connector tt-connector-${level}`;
      conn.style.top = `${(cur.slot.end - GRID_START) * PX_PER_MIN}px`;
      conn.style.height = `${Math.max(gap * PX_PER_MIN, 12)}px`;
      const label = level === "danger" ? `🚶 도보 약 ${walk}분 · 쉬는시간 ${gap}분 (이동시간 부족 위험)`
        : level === "warn" ? `🚶 도보 약 ${walk}분 · 쉬는시간 ${gap}분 (빠듯함)`
        : `🚶 도보 약 ${walk}분 · 쉬는시간 ${gap}분`;
      conn.title = label + " (클릭하면 지도 보기)";
      conn.textContent = gap * PX_PER_MIN >= 16 ? `🚶~${walk}분 (쉬는시간 ${gap}분)` : `🚶${walk}분`;
      conn.onclick = () => openMapModal(cur.slot.building, cur.slot.room, next.slot.building, next.slot.room, walk);
      col.appendChild(conn);
    }
  });
}

function renderTimeAxis() {
  const axis = document.getElementById("timeAxis");
  axis.innerHTML = "";
  for (let t = GRID_START; t <= GRID_END; t += 60) {
    const div = document.createElement("div");
    div.className = "tt-time";
    div.style.height = `${60 * PX_PER_MIN}px`;
    div.textContent = fmtTime(t);
    axis.appendChild(div);
  }
  document.querySelectorAll(".tt-col").forEach(col => {
    col.style.height = `${(GRID_END - GRID_START) * PX_PER_MIN}px`;
  });
}

function renderCreditSummary() {
  const total = selectedCourses().reduce((s, c) => s + (c.credit || 0), 0);
  const html = `선택 과목 <b>${selectedCourses().length}</b>개 · 합계 <b>${total}</b>학점`;
  document.getElementById("creditSummary").innerHTML = html;
  const top = document.getElementById("creditSummaryTop");
  if (top) top.innerHTML = html;
}

function resetSelections() {
  if (confirm("고정 과목을 제외한 모든 선택을 초기화할까요?")) {
    selectedIds = new Set(FIXED_COURSES_RAW.map(f => f.id));
    saveState();
    renderAll();
  }
}

// 특정 교수 관련 공개 보도 안내 — 각 항목은 실제 언론 보도로 확인된 내용만 기재
const PROFESSOR_ADVISORIES = {
  "양삼석": {
    text: "공개 보도에 따르면, 이 교수는 2011년 성희롱 논란으로 부산대 성희롱·성폭력 상담소 및 국가인권위원회 조사에서 성희롱이 인정되어 학교로부터 감봉 3개월 징계를 받았으며, 일부 학생·대학원생은 처분이 미흡하다고 반발한 바 있습니다(본인은 고의성을 부인하며 이의를 제기함). 2011~2013년 보도이며, 동명이인일 가능성을 배제할 수 없으니 정확한 사실관계는 아래 원문과 학교 공식 채널을 통해 직접 확인하시기 바랍니다.",
    sources: [
      "https://channelpnu.pusan.ac.kr/news/articleView.html?idxno=2084",
      "https://channelpnu.pusan.ac.kr/news/articleView.html?idxno=1452",
      "https://news.bbsi.co.kr/news/articleView.html?idxno=535932"
    ]
  }
};
function professorAdvisoryHtml(professorName) {
  if (!professorName) return "";
  const key = Object.keys(PROFESSOR_ADVISORIES).find(name => professorName.includes(name));
  if (!key) return "";
  const adv = PROFESSOR_ADVISORIES[key];
  return `<div class="prof-advisory">
    <div class="prof-advisory-head">⚠️ 담당 교수 관련 공개 보도 안내</div>
    <div>${adv.text}</div>
    <div class="prof-advisory-links">${adv.sources.map((u, i) => `<a href="${u}" target="_blank" rel="noopener">기사 원문 ${i + 1}</a>`).join(" · ")}</div>
  </div>`;
}

// ===== 모달 =====
function openModal(id) {
  const c = getCourse(id);
  if (!c) return;
  const backdrop = document.getElementById("modalBackdrop");
  const scheduleHtml = c.slots.map(s => `${DAY_LABEL[s.day] || s.dayLabel} ${fmtTime(s.start)}~${fmtTime(s.end)} · ${buildingLink(s.building, s.room, `${buildingName(s.building)}(건물번호 ${s.building}) ${s.room}호`)}`).join("<br>") + (c.hasCyber ? "<br>+ 토요일 사이버(온라인) 강의 병행" : "");
  const curriculumHtml = c.curriculum
    ? `<table class="week-table">${c.curriculum.map(w => `<tr><td>${w.week}주</td><td>${w.topic}</td></tr>`).join("")}</table>`
    : `<p style="color:var(--text-dim)">등록된 커리큘럼 정보가 없습니다.</p>`;
  const alts = findAlternatives(c);
  const altsHtml = alts.length
    ? `<div class="alt-chip-list">${alts.map(a => {
        const loc = a.slots.map(s => `${DAY_LABEL[s.day] || s.dayLabel} ${fmtTime(s.start)}~${fmtTime(s.end)} ${buildingName(s.building)} ${s.room}호`).join(", ");
        return `<button class="alt-chip" data-goto="${a.id}"><b>${a.section}분반</b> · ${a.professor}<span>${loc}</span></button>`;
      }).join("")}</div>`
    : `<p style="color:var(--text-dim)">같은 시간대에 개설된 다른 분반이 없습니다.</p>`;

  const badges = [
    { k: "분반", v: `${c.section}분반` },
    { k: "교수", v: c.professor },
    { k: "학점", v: `${c.credit}학점` },
    { k: "수강인원(정원)", v: c.capacity ? `${c.capacity}명` : "정보 없음" },
    { k: "과목코드", v: c.code || "정보 없음" }
  ];
  if (c.dept) badges.push({ k: "개설학과", v: c.dept });
  const badgeHtml = `<div class="badge-row">${badges.map(b => `<div class="badge"><span class="badge-k">${b.k}</span><span class="badge-v">${b.v}</span></div>`).join("")}</div>`;

  const gr = c.grading ? GRADING_RULES[c.grading] : null;
  const maxRows = gr ? gr.computeMax(c.capacity) : [];
  const gradingHtml = gr ? `
    <div class="modal-section"><h4>성적 평가 등급 배분</h4>
      <div><b>${gr.label}</b> — ${gr.rule}</div>
      ${maxRows.length ? `<table class="week-table" style="margin-top:6px;">${maxRows.map(r => `<tr><td>${r.label}</td><td>${r.max != null ? `최대 ${r.max}명` : `최소 ${r.min}명`} (정원 ${c.capacity}명 기준)</td></tr>`).join("")}</table>` : ""}
      <div class="cite">출처: ${gr.article}</div>
    </div>` : "";

  document.getElementById("modalBody").innerHTML = `
    <span class="modal-close-x" id="modalCloseX">&times;</span>
    <h3>${c.name}</h3>
    ${professorAdvisoryHtml(c.professor)}
    ${badgeHtml}
    ${!c.fixed ? `<div class="modal-section"><h4>이 시간대 대체 가능 분반 <span style="font-weight:400;text-transform:none;letter-spacing:0;">(수강신청 실패 시 참고)</span></h4>${altsHtml}</div>` : ""}
    <div class="modal-section"><h4>강의 시간 및 장소</h4><div>${scheduleHtml || "정보 없음"}</div></div>
    <div class="modal-section"><h4>평가 방법</h4><div>${c.evaluation || "등록된 정보가 없습니다."}</div></div>
    ${gradingHtml}
    <div class="modal-section"><h4>교재 및 참고문헌</h4><div>${linkifyTextbook(c.textbook) || "등록된 정보가 없습니다."}</div></div>
    ${c.overview ? `<div class="modal-section"><h4>강의 개요</h4><div>${c.overview}</div></div>` : ""}
    <div class="modal-section"><h4>주차별 커리큘럼</h4>${curriculumHtml}</div>
    <div class="modal-actions">
      ${c.pdf ? `<a class="btn primary" href="${c.pdf}" download>강의계획서 PDF 다운로드</a>` : `<button class="btn" disabled>강의계획서 없음</button>`}
      <button class="btn" id="modalCloseBtn">닫기</button>
    </div>`;
  backdrop.classList.add("open");
  document.getElementById("modalCloseX").onclick = closeModal;
  document.getElementById("modalCloseBtn").onclick = closeModal;
  document.querySelectorAll("[data-goto]").forEach(b => b.onclick = () => openModal(b.dataset.goto));
}

// ===== 이동 경로 지도 모달 (네이버 지도) =====
function openMapModal(buildingA, roomA, buildingB, roomB, walkMin) {
  const nameA = buildingName(buildingA), nameB = buildingName(buildingB);
  const qA = encodeURIComponent(`부산대학교 ${nameA}`);
  const qB = encodeURIComponent(`부산대학교 ${nameB}`);
  const naverDirUrl = `https://map.naver.com/p/directions/${qA}/${qB}/-/walk`;
  const naverSearchA = `https://map.naver.com/p/search/${qA}`;
  const naverSearchB = `https://map.naver.com/p/search/${qB}`;
  document.getElementById("modalBody").innerHTML = `
    <span class="modal-close-x" id="modalCloseX">&times;</span>
    <h3>🚶 이동 경로</h3>
    <div class="modal-sub">${nameA}(${buildingA}) ${roomA}호 → ${nameB}(${buildingB}) ${roomB}호</div>
    <div class="modal-section">
      <h4>도보 이동시간 (참고용 추정치)</h4>
      <div>약 <b>${walkMin}분</b> — 부산대 약도의 ZONE 구분을 근거로 한 추정치이며, 네이버 지도의 실측 도보시간이 아닙니다.</div>
    </div>
    <div class="modal-actions" style="flex-direction:column; align-items:stretch; gap:8px;">
      <a class="btn primary" href="${naverDirUrl}" target="_blank" rel="noopener">🗺️ 네이버 지도에서 도보 길찾기 열기</a>
      <div style="display:flex; gap:8px;">
        <a class="btn" style="flex:1;" href="${naverSearchA}" target="_blank" rel="noopener">${nameA} 위치 보기</a>
        <a class="btn" style="flex:1;" href="${naverSearchB}" target="_blank" rel="noopener">${nameB} 위치 보기</a>
      </div>
    </div>
    <div class="note-box" style="margin-top:10px;">네이버 지도 링크는 건물명 검색을 기반으로 하며, 실제 실내 경로·출입구 위치와는 다를 수 있습니다. 정확한 도보 소요시간은 네이버 지도 길찾기 결과를 확인하세요.</div>
    <div class="modal-actions">
      <button class="btn" id="modalCloseBtn">닫기</button>
    </div>`;
  document.getElementById("modalBackdrop").classList.add("open");
  document.getElementById("modalCloseX").onclick = closeModal;
  document.getElementById("modalCloseBtn").onclick = closeModal;
}
function closeModal() { document.getElementById("modalBackdrop").classList.remove("open"); }

// ===== 다크모드 =====
function applyTheme(mode) {
  document.documentElement.setAttribute("data-theme", mode);
  localStorage.setItem("pnu-theme", mode);
  document.querySelectorAll(".theme-toggle button[data-theme]").forEach(b => b.classList.toggle("active", b.dataset.theme === mode));
}
function initTheme() {
  const saved = localStorage.getItem("pnu-theme");
  const mode = saved || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  applyTheme(mode);
}

// ===== 모바일/데스크톱 뷰 전환 =====
function applyViewMode(mode) {
  document.documentElement.setAttribute("data-viewmode", mode);
  localStorage.setItem("pnu-viewmode", mode);
  document.querySelectorAll("#viewToggle button[data-view]").forEach(b => b.classList.toggle("active", b.dataset.view === mode));
  if (mode === "mobile") renderMobileAgenda();
}
function initViewMode() {
  const saved = localStorage.getItem("pnu-viewmode");
  const mode = saved || (window.matchMedia("(max-width: 700px)").matches ? "mobile" : "desktop");
  applyViewMode(mode);
}

let activeDay = 0; // 월=0 ... 금=4
function renderDayTabs() {
  const el = document.getElementById("dayTabs");
  if (!el) return;
  el.innerHTML = "";
  const counts = [0, 0, 0, 0, 0];
  selectedCourses().forEach(c => c.slots.forEach(s => { if (s.day >= 0 && s.day <= 4) counts[s.day]++; }));
  DAY_LABEL.forEach((label, i) => {
    const btn = document.createElement("button");
    btn.className = activeDay === i ? "active" : "";
    btn.innerHTML = `${label}<span class="cnt">${counts[i]}개</span>`;
    btn.onclick = () => { activeDay = i; renderDayTabs(); renderAgendaList(); };
    el.appendChild(btn);
  });
}

function renderAgendaList() {
  const el = document.getElementById("agendaList");
  if (!el) return;
  el.innerHTML = "";
  const entries = [];
  selectedCourses().forEach(course => {
    course.slots.forEach(slot => {
      if (slot.day === activeDay) entries.push({ course, slot });
    });
  });
  entries.sort((a, b) => a.slot.start - b.slot.start);
  if (entries.length === 0) {
    el.innerHTML = `<div class="agenda-empty">${DAY_LABEL[activeDay]}요일에는 담은 수업이 없습니다.</div>`;
    return;
  }
  entries.forEach((entry, i) => {
    if (i > 0) {
      const prev = entries[i - 1].slot;
      const cur = entry.slot;
      const gap = cur.start - prev.end;
      if (gap > 0 && gap <= 60) {
        const walk = estimateWalkMinutes(prev.building, cur.building, prev.room, cur.room);
        const level = walkLevel(gap, walk);
        const conn = document.createElement("div");
        conn.className = `agenda-connector ${level === "ok" ? "" : level}`;
        conn.innerHTML = `<span class="dot"></span> 🚶 도보 약 ${walk}분 · 쉬는시간 ${gap}분${level === "danger" ? " (이동시간 부족 위험)" : level === "warn" ? " (빠듯함)" : ""}`;
        el.appendChild(conn);
      }
    }
    const { course, slot } = entry;
    const card = document.createElement("div");
    card.className = "agenda-card" + (course.fixed ? " locked" : "");
    card.innerHTML = `
      <div class="agenda-time">${fmtTime(slot.start)} ~ ${fmtTime(slot.end)}</div>
      <div class="agenda-name">${course.name} <span style="font-weight:400;color:var(--text-dim);">${course.section}분반</span></div>
      <div class="agenda-meta">${course.professor} · ${buildingText(slot.building, slot.room)}${course.hasCyber ? " · 토 사이버수업 병행" : ""}</div>
      <div class="agenda-actions">
        <button class="btn small" data-agenda-detail="${course.id}">상세보기</button>
        ${course.fixed ? "" : `<button class="btn small" data-agenda-remove="${course.id}">삭제</button>`}
      </div>`;
    el.appendChild(card);
  });
  el.querySelectorAll("[data-agenda-detail]").forEach(b => b.onclick = () => openModal(b.dataset.agendaDetail));
  el.querySelectorAll("[data-agenda-remove]").forEach(b => b.onclick = () => removeCourse(b.dataset.agendaRemove));
}

function renderMobileAgenda() {
  renderDayTabs();
  renderAgendaList();
}

function renderAll() {
  renderCourseList();
  renderGrid();
  renderCreditSummary();
  if (document.documentElement.getAttribute("data-viewmode") === "mobile") renderMobileAgenda();
}

document.addEventListener("DOMContentLoaded", () => {
  loadState();
  initTheme();
  initViewMode();
  const params = new URLSearchParams(location.search);
  const lv = params.get("englishLevel");
  if (lv && ["초급","중급","고급"].includes(lv)) {
    activeTab = "english";
    englishLevelFilter = lv;
  }
  renderTabs();
  renderTimeAxis();
  renderAll();

  document.getElementById("searchInput").addEventListener("input", (e) => {
    searchTerm = e.target.value.trim();
    renderCourseList();
  });
  document.querySelectorAll(".theme-toggle button[data-theme]").forEach(b => {
    b.onclick = () => applyTheme(b.dataset.theme);
  });
  document.querySelectorAll("#viewToggle button[data-view]").forEach(b => {
    b.onclick = () => applyViewMode(b.dataset.view);
  });
  document.getElementById("modalBackdrop").addEventListener("click", (e) => {
    if (e.target.id === "modalBackdrop") closeModal();
  });
  document.getElementById("eligibilityToggle").onclick = () => {
    const body = document.getElementById("eligibilityBody");
    const arrow = document.getElementById("eligibilityArrow");
    const collapsed = body.style.display === "none";
    body.style.display = collapsed ? "" : "none";
    arrow.textContent = collapsed ? "▾" : "▸";
  };
  document.getElementById("gradingToggle").onclick = () => {
    const body = document.getElementById("gradingBody");
    const arrow = document.getElementById("gradingArrow");
    const collapsed = body.style.display === "none";
    body.style.display = collapsed ? "" : "none";
    arrow.textContent = collapsed ? "▾" : "▸";
  };
  document.getElementById("resetBtn").onclick = resetSelections;
  const resetBtnTop = document.getElementById("resetBtnTop");
  if (resetBtnTop) resetBtnTop.onclick = resetSelections;
});
