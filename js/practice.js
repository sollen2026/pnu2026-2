// ===== 모의 수강신청 연습 화면 =====
// app.js가 이미 로드한 ALL_COURSES / CATEGORY_META / getCourse 등 데이터 레이어를 그대로 재사용하고,
// 이 파일에서는 sugang-practice.html 전용 UI(희망과목담기/수강신청/대기순번제 시뮬레이션)만 담당한다.

const PRACTICE_KEY = "pnu-practice-2026-2-v1";
const CREDIT_LIMIT = 24;
const REMOTE_LIMIT = 6;

function loadPracticeState() {
  try {
    const raw = localStorage.getItem(PRACTICE_KEY);
    if (raw) return Object.assign({ hopeIds: [], appliedIds: [], waitlist: [] }, JSON.parse(raw));
  } catch (e) {}
  return { hopeIds: [], appliedIds: [], waitlist: [] };
}
let pState = loadPracticeState();
function savePracticeState() { localStorage.setItem(PRACTICE_KEY, JSON.stringify(pState)); }

function pHash(s) { let h = 0; for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0; return h; }

// 다른 학생들이 이미 채워둔 것으로 가정하는 시뮬레이션 인원(연습용 가상값, 새로고침해도 동일 과목은 항상 같은 값)
function baseEnrolled(course) {
  if (!course.capacity) return null;
  const r = pHash(course.id) % 100;
  if (r < 35) return course.capacity + 1 + (pHash(course.id + "x") % 4); // 이미 정원초과
  if (r < 65) return course.capacity; // 정원 딱 참
  return Math.max(0, course.capacity - 2 - (pHash(course.id + "y") % 6)); // 여유 있음
}
function currentEnrolled(course) {
  const base = baseEnrolled(course);
  if (base == null) return null;
  return base + (pState.appliedIds.includes(course.id) ? 1 : 0);
}
function hopeCount(course) {
  if (!course.capacity) return null;
  return Math.max(0, Math.round(course.capacity * 0.6) + (pHash(course.id + "h") % 8) - 3) + (pState.hopeIds.includes(course.id) ? 1 : 0);
}
function autoCount(course) {
  if (!course.capacity) return null;
  return pHash(course.id + "a") % Math.max(2, Math.round(course.capacity * 0.3));
}

function practiceCourses() { return ALL_COURSES; }
function pGetCourse(id) { return ALL_COURSES.find(c => c.id === id); }

function scheduleLabel(course) {
  if (!course.slots.length) return "시간 미정";
  return course.slots.map(s => `${DAY_LABEL[s.day] || s.dayLabel} ${fmtTime(s.start)}~${fmtTime(s.end)} ${buildingName(s.building)}${s.room ? "-" + s.room : ""}`).join(", ");
}

function timeConflicts(course, otherIds) {
  return otherIds.some(id => {
    const other = pGetCourse(id);
    if (!other || other.id === course.id) return false;
    return course.slots.some(s1 => other.slots.some(s2 => s1.day === s2.day && s1.start < s2.end && s2.start < s1.end));
  });
}
function appliedCreditTotal() { return pState.appliedIds.reduce((s, id) => s + ((pGetCourse(id) || {}).credit || 0), 0); }
function appliedRemoteCreditTotal() {
  return pState.appliedIds.reduce((s, id) => { const c = pGetCourse(id); return s + (c && c.remote ? (c.credit || 0) : 0); }, 0);
}

function showMsg(el, type, html) {
  el.className = "result-msg " + type;
  el.innerHTML = html;
}
function clearMsg(el) { el.className = "result-msg"; el.innerHTML = ""; }

// ===== 희망과목담기 =====
function addHope(course) {
  const msgEl = document.getElementById("hopeQuickMsg");
  if (pState.hopeIds.includes(course.id)) { showMsg(msgEl, "err", `이미 희망과목담기 되어 있는 과목입니다: ${course.name} ${course.section}분반`); return; }
  if (pState.hopeIds.length >= 13) { showMsg(msgEl, "err", "희망과목담기는 최대 13개 강좌까지만 담을 수 있습니다."); return; }
  pState.hopeIds.push(course.id);
  savePracticeState();
  showMsg(msgEl, "ok", `희망과목담기 완료: ${course.name} ${course.section}분반 (시간표 중복 여부와 관계없이 담깁니다)`);
  renderHopeList(); renderHopeSearch(); renderSugangHope();
}
function removeHope(id) { pState.hopeIds = pState.hopeIds.filter(x => x !== id); savePracticeState(); renderHopeList(); renderHopeSearch(); renderSugangHope(); }

function renderHopeList() {
  const body = document.getElementById("hopeListBody");
  if (!pState.hopeIds.length) { body.innerHTML = `<tr class="empty-row"><td colspan="8">담은 과목이 없습니다.</td></tr>`; return; }
  body.innerHTML = pState.hopeIds.map((id, i) => {
    const c = pGetCourse(id);
    if (!c) return "";
    return `<tr>
      <td>${i + 1}</td><td>${c.name}</td><td>${c.section}분반</td><td>${c.professor}</td><td>${c.credit || "-"}</td>
      <td><button class="btn-red" data-hope-remove="${id}">삭제</button></td>
      <td><button class="btn-gray" data-hope-limit="${id}">보기</button></td>
      <td><button class="btn-outline" data-hope-auto="${id}">신청</button></td>
    </tr>`;
  }).join("");
}

function renderSearchTable(bodyEl, courses, mode) {
  if (!courses.length) { bodyEl.innerHTML = `<tr class="empty-row"><td colspan="${mode === "hope" ? 7 : 7}">검색 결과가 없습니다.</td></tr>`; return; }
  bodyEl.innerHTML = courses.slice(0, 100).map(c => {
    const already = mode === "hope" ? pState.hopeIds.includes(c.id) : pState.appliedIds.includes(c.id);
    const btn = already
      ? `<button class="btn-gray" disabled>완료</button>`
      : mode === "hope"
        ? `<button class="btn-navy" data-hope-add="${c.id}">담기</button>`
        : `<button class="btn-navy" data-sugang-apply="${c.id}">신청</button>`;
    const capCell = mode === "hope"
      ? `${hopeCount(c) != null ? hopeCount(c) : "-"} / ${autoCount(c) != null ? autoCount(c) : "-"}`
      : (c.capacity ? `<span class="${currentEnrolled(c) >= c.capacity ? "cap-full" : "cap-ok"}">${currentEnrolled(c)}</span> / ${c.capacity}` : "정원 없음");
    return `<tr>
      <td>${c.name}</td><td>${c.section}분반</td><td>${c.professor}</td>
      <td style="text-align:left;font-size:11.5px;">${scheduleLabel(c)}</td>
      <td>${c.credit || "-"}</td><td>${capCell}</td><td>${btn}</td>
    </tr>`;
  }).join("");
}

function renderHopeSearch() {
  const cat = document.getElementById("hopeSearchCat").value;
  const kw = document.getElementById("hopeSearchKeyword").value.trim().toLowerCase();
  let items = practiceCourses();
  if (cat !== "all") items = items.filter(c => c.category === cat);
  if (kw) items = items.filter(c => c.name.toLowerCase().includes(kw) || c.professor.toLowerCase().includes(kw));
  renderSearchTable(document.getElementById("hopeSearchBody"), items, "hope");
}
function renderHopeSame() {
  const kw = document.getElementById("hopeSameKeyword").value.trim().toLowerCase();
  const items = kw ? practiceCourses().filter(c => c.name.toLowerCase().includes(kw)) : [];
  renderSearchTable(document.getElementById("hopeSameBody"), items, "hope");
}
function renderSugangSearch() {
  const cat = document.getElementById("sugangSearchCat").value;
  const kw = document.getElementById("sugangSearchKeyword").value.trim().toLowerCase();
  let items = practiceCourses();
  if (cat !== "all") items = items.filter(c => c.category === cat);
  if (kw) items = items.filter(c => c.name.toLowerCase().includes(kw) || c.professor.toLowerCase().includes(kw));
  renderSearchTable(document.getElementById("sugangSearchBody"), items, "sugang");
}
function renderSugangSame() {
  const kw = document.getElementById("sugangSameKeyword").value.trim().toLowerCase();
  const items = kw ? practiceCourses().filter(c => c.name.toLowerCase().includes(kw)) : [];
  renderSearchTable(document.getElementById("sugangSameBody"), items, "sugang");
}
function renderSugangHope() {
  const body = document.getElementById("sugangHopeBody");
  if (!pState.hopeIds.length) { body.innerHTML = `<tr class="empty-row"><td colspan="6">희망과목담기 한 과목이 없습니다.</td></tr>`; return; }
  body.innerHTML = pState.hopeIds.map(id => {
    const c = pGetCourse(id); if (!c) return "";
    const already = pState.appliedIds.includes(id);
    return `<tr>
      <td>${c.name}</td><td>${c.section}분반</td><td>${c.professor}</td>
      <td style="text-align:left;font-size:11.5px;">${scheduleLabel(c)}</td><td>${c.credit || "-"}</td>
      <td>${already ? `<button class="btn-gray" disabled>완료</button>` : `<button class="btn-navy" data-sugang-apply="${id}">신청</button>`}</td>
    </tr>`;
  }).join("");
}

// ===== 수강신청 =====
function registerCourse(course, opts) {
  opts = opts || {};
  const msgEl = document.getElementById("sugangQuickMsg");
  if (pState.appliedIds.includes(course.id)) { showMsg(msgEl, "err", `이미 신청 완료된 과목입니다: ${course.name} ${course.section}분반`); return; }
  if (timeConflicts(course, pState.appliedIds)) { showMsg(msgEl, "err", `시간표가 중복되어 신청할 수 없습니다: ${course.name} ${course.section}분반`); return; }
  if (appliedCreditTotal() + (course.credit || 0) > CREDIT_LIMIT) { showMsg(msgEl, "err", `학점 초과입니다. (신청 시 ${appliedCreditTotal() + (course.credit || 0)}학점 · 최대 ${CREDIT_LIMIT}학점)`); return; }
  const enrolled = currentEnrolled(course);
  if (!opts.force && enrolled != null && enrolled >= course.capacity) {
    showMsg(msgEl, "err", `<b>제한인원 초과</b>: ${course.name} ${course.section}분반 (${enrolled}/${course.capacity}명). 대기순번제를 신청하시겠습니까?
      <div style="margin-top:8px;display:flex;gap:8px;">
        <button class="btn-navy" id="msgWaitYes">예, 대기순번 신청</button>
        <button class="btn-gray" id="msgWaitNo">아니요</button>
      </div>`);
    document.getElementById("msgWaitYes").onclick = () => { clearMsg(msgEl); requestWaitlist(course); };
    document.getElementById("msgWaitNo").onclick = () => clearMsg(msgEl);
    return;
  }
  pState.appliedIds.push(course.id);
  pState.hopeIds = pState.hopeIds.filter(id => id !== course.id);
  savePracticeState();
  showMsg(msgEl, "ok", `수강신청 완료: ${course.name} ${course.section}분반`);
  renderAllPracticeViews();
}

function renderSugangList() {
  const body = document.getElementById("sugangListBody");
  if (!pState.appliedIds.length) { body.innerHTML = `<tr class="empty-row"><td colspan="8">신청된 과목이 없습니다.</td></tr>`; return; }
  body.innerHTML = pState.appliedIds.map(id => {
    const c = pGetCourse(id); if (!c) return "";
    return `<tr>
      <td>${c.name}</td><td>${c.section}분반</td><td>${c.professor}</td>
      <td style="text-align:left;font-size:11.5px;">${scheduleLabel(c)}</td><td>${c.credit || "-"}</td>
      <td><button class="btn-red" data-sugang-remove="${id}">삭제</button></td>
      <td><input type="text" placeholder="분반" style="width:60px;padding:5px;" data-change-input="${id}"> <button class="btn-outline" data-change-btn="${id}">변경</button></td>
      <td><button class="btn-gray" data-hope-limit="${id}">보기</button></td>
    </tr>`;
  }).join("");
  document.getElementById("sugangTotalCredit").textContent = appliedCreditTotal();
  document.getElementById("sugangRemoteCredit").textContent = appliedRemoteCreditTotal();
}

// ===== 대기순번제 =====
function waitlistCountFor(courseId) { return pState.waitlist.filter(w => w.id === courseId).length; }

function requestWaitlist(course) {
  const msgEl = document.getElementById("sugangQuickMsg");
  if (pState.waitlist.some(w => w.id === course.id)) { showMsg(msgEl, "err", "이미 대기순번을 신청한 과목입니다."); return; }
  if (pState.waitlist.length >= 2) { showMsg(msgEl, "err", "대기순번제는 학부생 기준 2과목까지만 신청할 수 있습니다."); return; }
  const limit = Math.max(1, Math.round((course.capacity || 0) * 0.3));
  if (waitlistCountFor(course.id) >= limit) { showMsg(msgEl, "err", `대기순번 제한인원(집단 배정인원의 30% · ${limit}명)이 가득 찼습니다.`); return; }

  const creditOver = appliedCreditTotal() + (course.credit || 0) > CREDIT_LIMIT;
  const conflict = timeConflicts(course, pState.appliedIds);
  if (creditOver || conflict) {
    openExchangeModal(course, creditOver, conflict);
    return;
  }
  pState.waitlist.push({ id: course.id, exchangeId: null });
  savePracticeState();
  showMsg(msgEl, "ok", `대기순번 신청 완료: ${course.name} ${course.section}분반 (현재 대기 ${waitlistCountFor(course.id)}번째)`);
  renderAllPracticeViews();
}

function openExchangeModal(course, creditOver, conflict) {
  const bg = document.getElementById("exchangeModalBg");
  const note = document.getElementById("exchangeModalNote");
  note.textContent = (creditOver ? "학점 초과" : "") + (creditOver && conflict ? " · " : "") + (conflict ? "시간표 중복" : "") +
    ` 오류가 있어 대기순번 신청을 완료하려면 이미 신청된 과목 중 교환교과목을 지정해야 합니다. (${course.name} ${course.section}분반, ${course.credit || 0}학점 이하인 과목만 선택 가능)`;
  const candidates = pState.appliedIds.map(pGetCourse).filter(c => c && (c.credit || 0) <= (course.credit || 0));
  const body = document.getElementById("exchangeModalBody");
  if (!candidates.length) {
    body.innerHTML = `<tr class="empty-row"><td colspan="4">교환 가능한 신청 과목이 없습니다. 학점이 더 적은 과목을 먼저 신청해보세요.</td></tr>`;
  } else {
    body.innerHTML = candidates.map(c => `<tr>
      <td><input type="radio" name="exchangePick" value="${c.id}"></td>
      <td>${c.name}</td><td>${c.section}분반</td><td>${c.credit || "-"}</td>
    </tr>`).join("");
  }
  bg.classList.add("open");
  document.getElementById("exchangeModalConfirm").onclick = () => {
    const picked = document.querySelector('input[name="exchangePick"]:checked');
    if (!picked) { alert("교환교과목을 선택하세요."); return; }
    pState.waitlist.push({ id: course.id, exchangeId: picked.value });
    savePracticeState();
    bg.classList.remove("open");
    showMsg(document.getElementById("sugangQuickMsg"), "ok", `대기순번 신청 완료(교환교과목 지정됨): ${course.name} ${course.section}분반`);
    renderAllPracticeViews();
  };
  document.getElementById("exchangeModalCancel").onclick = () => bg.classList.remove("open");
}

function renderSugangWaitlist() {
  const body = document.getElementById("sugangWaitlistBody");
  if (!pState.waitlist.length) { body.innerHTML = `<tr class="empty-row"><td colspan="7">대기순번 신청 내역이 없습니다.</td></tr>`; return; }
  body.innerHTML = pState.waitlist.map((w, i) => {
    const c = pGetCourse(w.id); if (!c) return "";
    const ex = w.exchangeId ? pGetCourse(w.exchangeId) : null;
    return `<tr>
      <td>${c.name}</td><td>${c.section}분반</td><td>${c.professor}</td><td>${c.credit || "-"}</td>
      <td>${waitlistCountFor(w.id)}번째 / 제한 ${Math.max(1, Math.round((c.capacity || 0) * 0.3))}명</td>
      <td>${ex ? `${ex.name} ${ex.section}분반` : "-"}</td>
      <td><button class="btn-red" data-waitlist-remove="${i}">삭제</button></td>
    </tr>`;
  }).join("");
}

function renderAllPracticeViews() {
  renderHopeList(); renderHopeSearch(); renderHopeSame();
  renderSugangHope(); renderSugangSearch(); renderSugangSame(); renderSugangList(); renderSugangWaitlist();
}

// ===== 초기화 =====
function findByCodeSection(code, section) {
  code = (code || "").trim(); section = (section || "").trim();
  if (!code || !section) return null;
  return practiceCourses().find(c => c.code === code && c.section === section);
}

document.addEventListener("DOMContentLoaded", () => {
  // 교과목번호 자동완성 목록
  const codes = new Set();
  practiceCourses().forEach(c => { if (c.code) codes.add(c.code); });
  document.getElementById("courseCodeList").innerHTML = [...codes].map(code => `<option value="${code}">`).join("");

  // 카테고리 셀렉트 채우기
  ["hopeSearchCat", "sugangSearchCat"].forEach(id => {
    const sel = document.getElementById(id);
    sel.innerHTML = `<option value="all">전체 영역</option>` + Object.keys(CATEGORY_META).filter(k => k !== "fixed").map(k => `<option value="${k}">${CATEGORY_META[k].label}</option>`).join("");
  });

  // 상단 메뉴 탭
  document.querySelectorAll(".menu-tab").forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll(".menu-tab").forEach(b => b.classList.toggle("active", b === btn));
      document.getElementById("menu-hope").style.display = btn.dataset.menu === "hope" ? "" : "none";
      document.getElementById("menu-sugang").style.display = btn.dataset.menu === "sugang" ? "" : "none";
    };
  });
  // 서브 탭 공통 처리
  document.querySelectorAll(".sub-tabs").forEach(row => {
    row.querySelectorAll(".sub-tab").forEach(btn => {
      btn.onclick = () => {
        row.querySelectorAll(".sub-tab").forEach(b => b.classList.toggle("active", b === btn));
        const panelIds = [...row.querySelectorAll(".sub-tab")].map(b => b.dataset.sub);
        panelIds.forEach(pid => { const el = document.getElementById(pid); if (el) el.classList.toggle("active", pid === btn.dataset.sub); });
      };
    });
  });

  document.getElementById("hopeQuickBtn").onclick = () => {
    const c = findByCodeSection(document.getElementById("hopeCode").value, document.getElementById("hopeSection").value);
    if (!c) { showMsg(document.getElementById("hopeQuickMsg"), "err", "일치하는 교과목을 찾을 수 없습니다. 교과목번호·분반을 확인하세요."); return; }
    addHope(c);
  };
  document.getElementById("sugangQuickBtn").onclick = () => {
    const c = findByCodeSection(document.getElementById("sugangCode").value, document.getElementById("sugangSection").value);
    if (!c) { showMsg(document.getElementById("sugangQuickMsg"), "err", "일치하는 교과목을 찾을 수 없습니다. 교과목번호·분반을 확인하세요."); return; }
    registerCourse(c);
  };
  document.getElementById("sugangWaitBtn").onclick = () => {
    const c = findByCodeSection(document.getElementById("sugangCode").value, document.getElementById("sugangSection").value);
    if (!c) { showMsg(document.getElementById("sugangQuickMsg"), "err", "일치하는 교과목을 찾을 수 없습니다. 교과목번호·분반을 확인하세요."); return; }
    requestWaitlist(c);
  };

  document.getElementById("hopeSearchBtn").onclick = renderHopeSearch;
  document.getElementById("hopeSameBtn").onclick = renderHopeSame;
  document.getElementById("sugangSearchBtn").onclick = renderSugangSearch;
  document.getElementById("sugangSameBtn").onclick = renderSugangSame;

  // 위임 클릭 처리(테이블 내부 동적 버튼)
  document.body.addEventListener("click", (e) => {
    const t = e.target;
    if (t.dataset.hopeAdd) addHope(pGetCourse(t.dataset.hopeAdd));
    else if (t.dataset.hopeRemove) removeHope(t.dataset.hopeRemove);
    else if (t.dataset.hopeAuto) {
      const c = pGetCourse(t.dataset.hopeAuto);
      if (c) registerCourse(c);
    } else if (t.dataset.hopeLimit) {
      const c = pGetCourse(t.dataset.hopeLimit);
      if (c) alert(`[${c.name} ${c.section}분반 제한인원]\n정원: ${c.capacity || "정보 없음"}명\n현재 신청인원: ${currentEnrolled(c) != null ? currentEnrolled(c) : "정보 없음"}명`);
    } else if (t.dataset.sugangApply) registerCourse(pGetCourse(t.dataset.sugangApply));
    else if (t.dataset.sugangRemove) {
      pState.appliedIds = pState.appliedIds.filter(id => id !== t.dataset.sugangRemove);
      savePracticeState(); renderAllPracticeViews();
    } else if (t.dataset.waitlistRemove !== undefined) {
      pState.waitlist.splice(parseInt(t.dataset.waitlistRemove), 1);
      savePracticeState(); renderAllPracticeViews();
    } else if (t.dataset.changeBtn) {
      const id = t.dataset.changeBtn;
      const cur = pGetCourse(id);
      const input = document.querySelector(`[data-change-input="${id}"]`);
      const newSection = (input.value || "").trim();
      const target = practiceCourses().find(c => c.name === cur.name && c.section === newSection);
      if (!target) { alert("해당 분반을 찾을 수 없습니다."); return; }
      if (timeConflicts(target, pState.appliedIds.filter(x => x !== id))) { alert("변경하려는 분반은 시간표가 중복됩니다."); return; }
      pState.appliedIds = pState.appliedIds.map(x => x === id ? target.id : x);
      savePracticeState(); renderAllPracticeViews();
      alert(`분반이 변경되었습니다: ${target.name} ${target.section}분반`);
    }
  });

  renderAllPracticeViews();
});
