/* ============================================================
   Akademia Nowej Fali — silnik lekcji (MVP)
   Zasada: cała treść pochodzi z pliku JSON w /lessons/.
   Silnik nie zawiera żadnych tekstów merytorycznych.
   ============================================================ */
'use strict';

/* ---------- konfiguracja silnika ---------- */
const CONFIG = {
  defaultLesson: 'ph-co-oznacza-ph',
  startKosmyki: 240,
  ui: {
    incorrectFallbackTitle: 'Prawie — spójrz jeszcze raz',
    ahaLabel: 'Wskazówka eksperta',
    continueLabel: 'Kontynuuj naukę',
    galleryLabel: 'Zobacz gablotkę',
    nextLabel: 'Dalej',
    errorTitle: 'Nie udało się otworzyć lekcji.',
    errorBody: 'Coś przerwało wczytywanie tej lekcji. Możesz spróbować ponownie albo wrócić do Akademii.',
    retryLabel: 'Spróbuj ponownie',
    backHomeLabel: 'Wróć do Akademii',
    lessonUnavailable: 'Ta lekcja nie jest już dostępna w głównej ścieżce.',
    lessonTasksPending: 'Zadania lekcji są w przygotowaniu.'
  }
};

/* ---------- stan aplikacji (jeden obiekt, serializowalny) ---------- */
const state = {
  lessonId: null,
  lesson: null,
  currentTaskIndex: 0,
  kosmyki: CONFIG.startKosmyki,
  earnedKosmyki: 0,
  isRepeat: false,
  isAdminSandbox: false,
  correctStreak: 0,
  mistakes: 0,
  bonusGiven: false,
  answers: [],
  /* punktacja: pierwsze podejście do zadania */
  taskHadMistake: false,
  scoredCorrect: 0,
  pendingCheckBtn: null
};

function getGlobalKosmyki(){
  if (window.AppState && window.AppState.get){
    return window.AppState.get().user.kosmyki;
  }
  return CONFIG.startKosmyki;
}

function isLessonAlreadyCompleted(lessonId){
  if (!window.AppState || !window.AppState.get) return false;
  return !!window.AppState.get().completedLessons[lessonId];
}

/* Typy zadań punktowanych — intro/guide nie wchodzą do wyniku */
var SCORED_TASK_TYPES = {
  singleChoice: true,
  trueFalse: true,
  findError: true,
  matching: true,
  ordering: true
};

function isScoredTask(task){
  return !!(task && SCORED_TASK_TYPES[task.type]);
}

function countScoredTasks(lesson){
  if (!lesson || !Array.isArray(lesson.tasks)) return 0;
  var n = 0;
  for (var i = 0; i < lesson.tasks.length; i++){
    if (isScoredTask(lesson.tasks[i])) n++;
  }
  return n;
}

/* ---------- ikony ----------
   Jedyne miejsce, w którym używamy innerHTML: statyczne, zaufane
   stałe SVG należące do silnika. Żadne dane z JSON-u nigdy tu nie trafiają. */
const ICONS = {
  kosmyk: '<svg width="19" height="19" viewBox="0 0 20 20"><path d="M12 2 C7 5 6 9 8 13 C9 16 8 18 6 18 C10 18 13 15 12 11 C11.4 8.5 12.5 5.5 15 4 C14 3 13 2.4 12 2Z" fill="#D06A4E"/></svg>',
  kosmykSm: '<svg width="13" height="13" viewBox="0 0 20 20"><path d="M12 2 C7 5 6 9 8 13 C9 16 8 18 6 18 C10 18 13 15 12 11 C11.4 8.5 12.5 5.5 15 4 C14 3 13 2.4 12 2Z" fill="#B85A42"/></svg>',
  close: '<svg width="12" height="12" viewBox="0 0 12 12"><path d="M1 1l10 10M11 1L1 11" stroke="#7A3344" stroke-width="2" stroke-linecap="round"/></svg>',
  check: '<svg width="20" height="20" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" fill="none" stroke="#434F2A" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  info: '<svg width="18" height="18" viewBox="0 0 24 24"><path d="M12 5v8m0 4v.5" stroke="#B83A52" stroke-width="2.6" stroke-linecap="round"/></svg>',
  face: '<svg width="32" height="32" viewBox="0 0 32 32"><circle cx="16" cy="13" r="7" fill="#B83A52"/><path d="M4 30 Q16 19 28 30 Z" fill="#B83A52"/><path d="M8 11 Q16 2 24 11 Q25 17 21 18 Q16 11 11 18 Q7 17 8 11Z" fill="#7A3344"/></svg>',
  faceHappy: '<svg width="54" height="54" viewBox="0 0 32 32"><circle cx="16" cy="13" r="7" fill="#B83A52"/><path d="M4 30 Q16 19 28 30 Z" fill="#B83A52"/><path d="M8 11 Q16 2 24 11 Q25 17 21 18 Q16 11 11 18 Q7 17 8 11Z" fill="#7A3344"/><path d="M12.5 15.5 Q16 18.5 19.5 15.5" fill="none" stroke="#fff" stroke-width="1.6" stroke-linecap="round"/></svg>',
  kosmykBig: '<svg width="24" height="24" viewBox="0 0 20 20"><path d="M12 2 C7 5 6 9 8 13 C9 16 8 18 6 18 C10 18 13 15 12 11 C11.4 8.5 12.5 5.5 15 4 C14 3 13 2.4 12 2Z" fill="#D06A4E"/></svg>',
  slotFilled: '<svg width="22" height="22" viewBox="0 0 24 24"><path d="M6 12 Q9 8 12 12 T18 12" fill="none" stroke="#7A3344" stroke-width="2.2" stroke-linecap="round"/></svg>',
  slotNew: '<svg width="22" height="22" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8" fill="none" stroke="#D2A900" stroke-width="2"/><path d="M9 12l2 2 4-4" fill="none" stroke="#D2A900" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  lock: '<svg width="26" height="26" viewBox="0 0 26 26" style="flex-shrink:0;"><rect x="4" y="6" width="18" height="16" rx="3" fill="none" stroke="#E5DACE" stroke-width="2"/><path d="M10 6V4a3 3 0 0 1 6 0v2" fill="none" stroke="#E5DACE" stroke-width="2"/><circle cx="13" cy="14" r="2.4" fill="#E5DACE"/></svg>',
  unlock: '<svg width="26" height="26" viewBox="0 0 26 26" style="flex-shrink:0;"><rect x="4" y="11" width="18" height="11" rx="3" fill="none" stroke="#E5DACE" stroke-width="2"/><path d="M10 11V8a3 3 0 0 1 6 0" fill="none" stroke="#E5DACE" stroke-width="2"/><circle cx="13" cy="16" r="2.4" fill="#E5DACE"/></svg>'
};
function iconEl(name){
  const span = document.createElement('span');
  span.innerHTML = ICONS[name] || '';
  return span.firstElementChild ? span : span;
}

/* ---------- pomocnicze budowanie DOM (bez innerHTML dla danych) ---------- */
function el(tag, className, text){
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined && text !== null) node.textContent = text;
  return node;
}
/* Tekst formatowany: string LUB tablica segmentów [{text, bold?}] */
function renderRich(target, content){
  target.textContent = '';
  if (content == null) return target;
  if (typeof content === 'string'){ target.textContent = content; return target; }
  if (Array.isArray(content)){
    content.forEach(seg => {
      if (seg == null) return;
      const t = typeof seg === 'string' ? seg : String(seg.text ?? '');
      if (typeof seg === 'object' && seg.bold){
        const b = document.createElement('b'); b.textContent = t; target.appendChild(b);
      } else {
        target.appendChild(document.createTextNode(t));
      }
    });
  }
  return target;
}
function richToPlain(content){
  if (content == null) return '';
  if (typeof content === 'string') return content;
  if (Array.isArray(content)) return content.map(s => typeof s === 'string' ? s : String(s.text ?? '')).join('');
  return '';
}

/* ---------- referencje do chrome silnika ---------- */
const dom = {
  stage: document.getElementById('stage'),
  progress: document.getElementById('progress'),
  kNum: document.getElementById('kNum'),
  kwrap: document.getElementById('kwrap'),
  floatK: document.getElementById('floatK'),
  fb: document.getElementById('fb'),
  fic: document.getElementById('fic'),
  ftitle: document.getElementById('ftitle'),
  fkchip: document.getElementById('fkchip'),
  fkval: document.getElementById('fkval'),
  fclient: document.getElementById('fclient'),
  fwhy: document.getElementById('fwhy'),
  fbonus: document.getElementById('fbonus'),
  faha: document.getElementById('faha'),
  fahab: document.getElementById('fahab'),
  fnext: document.getElementById('fnext'),
  closeBtn: document.getElementById('closeBtn')
};

/* ---------- walidacja lekcji ---------- */
function fail(msg){ throw new Error(msg); }
function req(obj, field, where){
  if (obj == null || obj[field] === undefined || obj[field] === null) fail('Brak pola "' + field + '" w ' + where);
  return obj[field];
}
function validateLesson(data){
  req(data, 'id', 'lekcji');
  req(data, 'title', 'lekcji');
  req(data, 'intro', 'lekcji');
  req(data, 'completion', 'lekcji');
  const tasks = req(data, 'tasks', 'lekcji');
  if (!Array.isArray(tasks)) fail('Lista zadań musi być tablicą');

  tasks.forEach((t, i) => {
    const where = 'zadaniu #' + (i + 1) + ' (' + (t && t.id || 'bez id') + ')';
    req(t, 'id', where); req(t, 'type', where);
    req(t, 'question', where); req(t, 'reward', where);
    const f = req(t, 'feedback', where);
    req(f, 'correctTitle', 'feedbacku ' + where);
    req(f, 'explanation', 'feedbacku ' + where);

    switch (t.type){
      case 'singleChoice': {
        const opts = req(t, 'options', where);
        if (!Array.isArray(opts) || opts.length < 2) fail('Za mało opcji w ' + where);
        const correct = req(t, 'correctOptionId', where);
        if (!opts.some(o => o.id === correct)) fail('correctOptionId nie pasuje do żadnej opcji w ' + where);
        break;
      }
      case 'trueFalse': {
        if (typeof t.correctValue !== 'boolean') fail('Brak poprawnej odpowiedzi (correctValue) w ' + where);
        break;
      }
      case 'findError': {
        const rows = req(t, 'rows', where);
        const ids = req(t, 'correctOptionIds', where);
        if (!Array.isArray(rows) || rows.length === 0) fail('Brak wierszy w ' + where);
        if (!Array.isArray(ids) || ids.length === 0) fail('Brak poprawnych odpowiedzi w ' + where);
        ids.forEach(id => { if (!rows.some(r => r.id === id)) fail('correctOptionIds zawiera nieznane id "' + id + '" w ' + where); });
        break;
      }
      case 'matching': {
        const left = req(t, 'left', where), right = req(t, 'right', where);
        if (!Array.isArray(left) || !Array.isArray(right) || left.length < 2 || left.length !== right.length)
          fail('Niepoprawne kolumny dopasowania w ' + where);
        left.forEach(item => {
          if (!right.some(r => r.pairId === item.pairId)) fail('Brak pary dla "' + item.pairId + '" w ' + where);
        });
        break;
      }
      case 'ordering': {
        const steps = req(t, 'steps', where);
        const orderArr = req(t, 'correctOrder', where);
        if (!Array.isArray(steps) || steps.length < 2) fail('Za mało kroków w ' + where);
        if (!Array.isArray(orderArr) || orderArr.length !== steps.length) fail('correctOrder nie pasuje do liczby kroków w ' + where);
        orderArr.forEach(id => { if (!steps.some(s => s.id === id)) fail('correctOrder zawiera nieznane id "' + id + '" w ' + where); });
        break;
      }
      default:
        fail('Nieznany typ zadania "' + t.type + '" w ' + where);
    }
  });
  return data;
}

/* ---------- ładowanie lekcji ---------- */
function resolveAppPath(relativePath){
  return new URL(relativePath, document.baseURI).href;
}

function getLessonIdFromUrl(){
  const raw = new URLSearchParams(location.search).get('lesson') || CONFIG.defaultLesson;
  /* stabilne identyfikatory plików: tylko [a-z0-9-] */
  return /^[a-z0-9-]+$/.test(raw) ? raw : CONFIG.defaultLesson;
}
async function loadLesson(id){
  let res;
  try {
    res = await fetch(resolveAppPath('lessons/' + id + '.json'), { cache: 'no-store' });
  } catch (e) {
    fail('Nie można pobrać pliku lekcji (fetch). Jeśli otwierasz index.html z dysku, uruchom lokalny serwer. Szczegóły: ' + e.message);
  }
  if (!res.ok){
    const err = new Error('Plik lekcji "' + id + '.json" nie istnieje (HTTP ' + res.status + ')');
    err.code = 'LESSON_UNAVAILABLE';
    throw err;
  }
  let data;
  try { data = await res.json(); }
  catch (e) { fail('Plik lekcji zawiera niepoprawny JSON: ' + e.message); }
  return validateLesson(data);
}

/* ---------- ekran błędu ---------- */
let lastErrorLessonId = null;
let mountActivationTimer = null;
let adminScreenKind = 'intro';
let adminTaskIndex = -1;
let adminImageInfo = null;

function isAdminMode(){
  return !!(window.AdminMode && window.AdminMode.isActive());
}

function buildAdminFlow(){
  const flow = ['intro'];
  const L = state.lesson;
  if (!L) return flow;
  const intro = L.intro || {};
  if (intro.scaleGuide) flow.push('scaleGuide');
  if (intro.hairGuide) flow.push('hairGuide');
  for (let i = 0; i < (L.tasks || []).length; i++) flow.push('task:' + i);
  flow.push('done');
  return flow;
}

function getAdminFlowIndex(){
  const flow = buildAdminFlow();
  if (adminScreenKind === 'intro') return flow.indexOf('intro');
  if (adminScreenKind === 'scaleGuide') return flow.indexOf('scaleGuide');
  if (adminScreenKind === 'hairGuide') return flow.indexOf('hairGuide');
  if (adminScreenKind === 'task') return flow.indexOf('task:' + adminTaskIndex);
  if (adminScreenKind === 'done') return flow.indexOf('done');
  return 0;
}

function getHairGuideImageMeta(){
  const hg = state.lesson && state.lesson.intro && state.lesson.intro.hairGuide;
  if (!hg || !hg.imageSrc) return null;
  const resolved = resolveAppPath(hg.imageSrc);
  return {
    src: hg.imageSrc,
    resolvedSrc: resolved,
    alt: hg.imageAlt || '',
    status: adminImageInfo && adminImageInfo.src === hg.imageSrc ? adminImageInfo.status : 'pending',
    naturalWidth: adminImageInfo && adminImageInfo.src === hg.imageSrc ? adminImageInfo.naturalWidth : null,
    naturalHeight: adminImageInfo && adminImageInfo.src === hg.imageSrc ? adminImageInfo.naturalHeight : null
  };
}

function notifyAdminContext(){
  if (!isAdminMode() || !window.AdminMode || !window.AdminMode.refreshPanel) return;
  if (!state.lesson){
    window.AdminMode.refreshPanel({ loading: true, lessonId: state.lessonId || '—' });
    return;
  }

  const flow = buildAdminFlow();
  const flowIdx = getAdminFlowIndex();
  const catalog = window.LessonsCatalog || [];
  let catIdx = -1;
  for (let i = 0; i < catalog.length; i++){
    if (catalog[i].id === state.lessonId){ catIdx = i; break; }
  }

  let stepLabel = '';
  let taskType = '';
  const taskCount = (state.lesson.tasks || []).length;
  if (adminScreenKind === 'intro') stepLabel = 'Intro';
  else if (adminScreenKind === 'scaleGuide') stepLabel = 'Część edukacyjna (skala)';
  else if (adminScreenKind === 'hairGuide') stepLabel = 'Część edukacyjna (grafika)';
  else if (adminScreenKind === 'task') {
    stepLabel = 'Zadanie ' + (adminTaskIndex + 1) + ' / ' + taskCount;
    const task = state.lesson.tasks[adminTaskIndex];
    taskType = task ? task.type : '';
  } else if (adminScreenKind === 'done') stepLabel = 'Zakończenie';
  else if (adminScreenKind === 'error') stepLabel = 'Błąd';

  /* Blok grafiki tylko na kroku hairGuide — inaczej wypycha przyciski QA poza viewport. */
  const image = adminScreenKind === 'hairGuide' ? getHairGuideImageMeta() : null;

  window.AdminMode.refreshPanel({
    lessonId: state.lessonId,
    stepLabel: stepLabel,
    screenKind: adminScreenKind,
    taskType: taskType,
    image: image,
    canPrevStep: flowIdx > 0,
    canNextStep: flowIdx >= 0 && flowIdx < flow.length - 1,
    canPrevLesson: catIdx > 0,
    canNextLesson: catIdx >= 0 && catIdx < catalog.length - 1
  });
}

function setAdminScreen(kind, taskIndex){
  adminScreenKind = kind;
  adminTaskIndex = typeof taskIndex === 'number' ? taskIndex : -1;
  notifyAdminContext();
}

function bindHairGuideImage(img, hg){
  if (!hg || !hg.imageSrc) return;
  adminImageInfo = {
    src: hg.imageSrc,
    status: 'loading',
    naturalWidth: null,
    naturalHeight: null
  };
  function syncLoaded(){
    if (img.naturalWidth){
      adminImageInfo.naturalWidth = img.naturalWidth;
      adminImageInfo.naturalHeight = img.naturalHeight;
    }
    adminImageInfo.status = 'loaded';
    notifyAdminContext();
  }
  img.addEventListener('load', syncLoaded);
  img.addEventListener('error', function(){
    adminImageInfo.status = 'missing';
    notifyAdminContext();
  });
  if (img.complete){
    if (img.naturalWidth) syncLoaded();
    else adminImageInfo.status = 'missing';
  }
}

function renderAdminStep(targetIndex){
  if (!state.lesson) return false;
  const flow = buildAdminFlow();
  if (targetIndex < 0 || targetIndex >= flow.length) return false;
  dom.fb.classList.remove('show');
  const target = flow[targetIndex];
  if (target === 'intro'){ setAdminScreen('intro', -1); renderIntro(); return true; }
  if (target === 'scaleGuide'){ setAdminScreen('scaleGuide', -1); renderScaleGuide(); return true; }
  if (target === 'hairGuide'){ setAdminScreen('hairGuide', -1); renderHairGuide(); return true; }
  if (target === 'done'){ setAdminScreen('done', -1); showDone(); return true; }
  if (target.indexOf('task:') === 0){
    const ti = Number(target.split(':')[1]);
    setAdminScreen('task', ti);
    showTask(ti);
    return true;
  }
  return false;
}

function adminNavigateFlow(delta){
  if (!state.lesson) return;
  const flow = buildAdminFlow();
  let idx = getAdminFlowIndex();
  if (idx < 0) idx = 0;
  renderAdminStep(idx + delta);
}

function adminSkipTask(){
  if (!state.lesson) return;
  if (adminScreenKind === 'done' || adminScreenKind === 'error') return;
  /* Poza zadaniem: to samo co „Następny krok” — szybki przegląd bez odpowiedzi. */
  if (adminScreenKind !== 'task'){
    adminNavigateFlow(1);
    return;
  }
  dom.fb.classList.remove('show');
  /* pominięcie = niezaliczone pierwsze podejście (tylko w sesji QA, bez zapisu) */
  state.taskHadMistake = true;
  state.mistakes++;
  state.answers.push({ taskId: state.lesson.tasks[adminTaskIndex].id, correct: false, skipped: true });
  const next = adminTaskIndex + 1;
  if (next >= state.lesson.tasks.length){
    setAdminScreen('done', -1);
    showDone();
  } else {
    setAdminScreen('task', next);
    showTask(next);
  }
}

function adminGoDone(){
  if (!state.lesson) return;
  dom.fb.classList.remove('show');
  setAdminScreen('done', -1);
  showDone();
}

function adminRestartLesson(){
  if (!state.lessonId) return;
  dom.fb.classList.remove('show');
  if (window.LessonEngine && window.LessonEngine.start){
    window.LessonEngine.start(state.lessonId);
  }
}

function adminBackToList(){
  dom.fb.classList.remove('show');
  if (window.LessonEngine && window.LessonEngine.abort) window.LessonEngine.abort();
  if (window.AppShell && window.AppShell.goHome) window.AppShell.goHome();
}

function adminChangeLesson(delta){
  const catalog = window.LessonsCatalog || [];
  let idx = -1;
  for (let i = 0; i < catalog.length; i++){
    if (catalog[i].id === state.lessonId){ idx = i; break; }
  }
  const next = idx + delta;
  if (next < 0 || next >= catalog.length) return;
  if (window.AppShell && window.AppShell.startLesson){
    window.AppShell.startLesson(catalog[next].id);
  }
}

function clearStage(){
  if (mountActivationTimer){
    clearTimeout(mountActivationTimer);
    mountActivationTimer = null;
  }
  dom.stage.textContent = '';
  activeStep = null;
}

function showLessonError(technicalDetail, lessonId){
  console.error('[Akademia Nowej Fali] ' + technicalDetail);
  lastErrorLessonId = lessonId || state.lessonId || null;
  dom.progress.textContent = '';
  dom.fb.classList.remove('show');
  clearStage();

  const step = el('div', 'step fatal active');
  step.appendChild(el('div', 'fico', '!'));
  const title = isAdminMode() ? 'Nie udało się otworzyć podglądu lekcji.' : CONFIG.ui.errorTitle;
  step.appendChild(el('h1', null, title));
  step.appendChild(el('p', null, CONFIG.ui.errorBody));

  if (isAdminMode()){
    const adminInfo = el('div', 'admin-error-meta');
    adminInfo.appendChild(el('p', null, 'ID lekcji: ' + (lastErrorLessonId || '—')));
    adminInfo.appendChild(el('p', null, 'Krok: ' + (adminScreenKind || '—')));
    if (adminScreenKind === 'task' && adminTaskIndex >= 0){
      const task = state.lesson && state.lesson.tasks ? state.lesson.tasks[adminTaskIndex] : null;
      adminInfo.appendChild(el('p', null, 'Typ kroku: ' + (task ? task.type : 'task')));
    } else {
      adminInfo.appendChild(el('p', null, 'Typ kroku: ' + (adminScreenKind || '—')));
    }
    adminInfo.appendChild(el('p', null, 'Błąd: ' + technicalDetail));
    step.appendChild(adminInfo);
  }

  const actions = el('div', 'fatal-actions');
  const retryBtn = primaryButton(CONFIG.ui.retryLabel);
  retryBtn.addEventListener('click', function(){
    if (lastErrorLessonId) startLessonEngine(lastErrorLessonId);
  });
  const homeBtn = el('button', 'btn btn-ghost', isAdminMode() ? 'Wróć do listy lekcji' : CONFIG.ui.backHomeLabel);
  homeBtn.type = 'button';
  homeBtn.addEventListener('click', function(){
    if (window.AppShell) window.AppShell.goHome();
  });
  actions.appendChild(retryBtn);
  actions.appendChild(homeBtn);
  step.appendChild(actions);
  dom.stage.appendChild(step);
  activeStep = step;

  if (isAdminMode() && window.AdminMode && window.AdminMode.refreshPanel){
    window.AdminMode.refreshPanel({
      lessonId: lastErrorLessonId,
      stepLabel: 'Błąd',
      screenKind: 'error',
      taskType: '—',
      image: null,
      canPrevStep: false,
      canNextStep: false,
      canPrevLesson: false,
      canNextLesson: false
    });
  }
}

function showFatal(technicalDetail){
  showLessonError(technicalDetail, state.lessonId);
}

/* ---------- nawigacja między krokami ---------- */
let activeStep = null;
function mountStep(stepEl){
  if (mountActivationTimer){
    clearTimeout(mountActivationTimer);
    mountActivationTimer = null;
  }
  const prev = activeStep;
  const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const instant = prefersReduced || isAdminMode();
  if (prev){
    if (instant){
      if (prev.parentNode) prev.remove();
    } else {
      prev.classList.add('exit');
      prev.classList.remove('active');
      setTimeout(() => { if (prev.parentNode) prev.remove(); }, 340);
    }
  }
  dom.stage.appendChild(stepEl);
  void stepEl.offsetWidth;
  if (instant){
    stepEl.classList.add('active');
  } else {
    mountActivationTimer = setTimeout(function(){
      stepEl.classList.add('active');
      mountActivationTimer = null;
    }, 16);
  }
  activeStep = stepEl;
}

/* ---------- wspólne klocki UI ---------- */
function clientBubble(quote, name){
  const wrap = el('div', 'client');
  const face = el('div', 'face'); face.appendChild(iconEl('face'));
  const bubble = el('div', 'bubble');
  renderRich(bubble, quote);
  if (name){ bubble.appendChild(el('span', 'cname', '— ' + name)); }
  wrap.appendChild(face); wrap.appendChild(bubble);
  return wrap;
}
function primaryButton(label){
  const b = el('button', 'btn btn-primary', label);
  b.type = 'button';
  return b;
}

function lessonTagText(lesson){
  if (lesson.caseNumber != null && lesson.category){
    return 'Sprawa nr ' + lesson.caseNumber + ' · ' + lesson.category;
  }
  const parts = [];
  if (lesson.category) parts.push(lesson.category);
  if (lesson.levelLabel) parts.push(lesson.levelLabel);
  return parts.join(' · ');
}

function notifyLessonUnavailable(){
  if (window.AppShell && window.AppShell.onLessonUnavailable){
    window.AppShell.onLessonUnavailable(CONFIG.ui.lessonUnavailable);
    return;
  }
  showFatal(CONFIG.ui.lessonUnavailable);
}

function showTasksPending(){
  const step = el('div', 'step intro');
  step.appendChild(el('p', null, CONFIG.ui.lessonTasksPending));
  step.appendChild(el('div', 'spacer'));
  const btn = primaryButton(CONFIG.ui.continueLabel);
  btn.addEventListener('click', function(){
    if (window.AppShell) window.AppShell.goHome();
  });
  step.appendChild(btn);
  mountStep(step);
}

/* ---------- INTRO ---------- */
function getScaleGuideReactionText(value){
  const v = Number(value);
  if (v <= 6) return 'pH ' + v + ' — odczyn kwaśny';
  if (v === 7) return 'pH 7 — odczyn obojętny';
  return 'pH ' + v + ' — odczyn zasadowy';
}

function getScaleGuideReactionClass(value){
  const v = Number(value);
  if (v <= 6) return 'is-acid';
  if (v === 7) return 'is-neutral';
  return 'is-base';
}

function renderScaleGuide(){
  const L = state.lesson;
  const intro = L.intro || {};
  const sg = intro.scaleGuide;
  if (!sg){
    showTask(0);
    return;
  }

  const step = el('div', 'step scale-guide');
  const tag = lessonTagText(L);
  if (tag) step.appendChild(el('div', 'case-tag', tag));
  step.appendChild(el('h2', 'scale-guide-title', sg.title));
  if (sg.text) step.appendChild(el('p', 'scale-guide-text', sg.text));
  if (sg.helperText) step.appendChild(el('p', 'scale-guide-helper', sg.helperText));

  const wrap = el('div', 'ph-scale-wrap');
  const track = el('div', 'ph-scale-track');
  track.appendChild(el('div', 'ph-scale-zone ph-scale-zone--acid'));
  track.appendChild(el('div', 'ph-scale-zone ph-scale-zone--neutral'));
  track.appendChild(el('div', 'ph-scale-zone ph-scale-zone--base'));
  wrap.appendChild(track);

  const range = document.createElement('input');
  range.type = 'range';
  range.className = 'ph-scale-range';
  range.min = '0';
  range.max = '14';
  range.step = '1';
  range.value = '7';
  range.setAttribute('aria-label', 'Wskaźnik pH na skali od 0 do 14');
  wrap.appendChild(range);

  const endpoints = el('div', 'ph-scale-endpoints');
  endpoints.appendChild(el('span', null, '0'));
  endpoints.appendChild(el('span', null, '14'));
  wrap.appendChild(endpoints);

  const labels = sg.labels || {};
  const labelsRow = el('div', 'ph-scale-labels');
  labelsRow.appendChild(el('span', null, labels.left || ''));
  labelsRow.appendChild(el('span', null, labels.center || ''));
  labelsRow.appendChild(el('span', null, labels.right || ''));
  wrap.appendChild(labelsRow);

  const hint = el('div', 'ph-scale-hint is-neutral', getScaleGuideReactionText(7));
  wrap.appendChild(hint);

  range.addEventListener('input', function(){
    hint.textContent = getScaleGuideReactionText(range.value);
    hint.classList.remove('is-acid', 'is-neutral', 'is-base');
    hint.classList.add(getScaleGuideReactionClass(range.value));
  });

  step.appendChild(wrap);
  step.appendChild(el('div', 'spacer'));
  const btn = primaryButton(sg.continueLabel || CONFIG.ui.nextLabel);
  btn.addEventListener('click', continueAfterScaleGuide);
  step.appendChild(btn);
  mountStep(step);
  setAdminScreen('scaleGuide', -1);
}

function continueAfterScaleGuide(){
  const intro = (state.lesson && state.lesson.intro) || {};
  if (intro.hairGuide) renderHairGuide();
  else showTask(0);
}

function renderHairGuide(){
  const L = state.lesson;
  const intro = L.intro || {};
  const hg = intro.hairGuide;
  if (!hg || !hg.imageSrc){
    showTask(0);
    return;
  }

  const step = el('div', 'step hair-guide');
  const tag = lessonTagText(L);
  if (tag) step.appendChild(el('div', 'case-tag', tag));
  step.appendChild(el('h2', 'hair-guide-title', hg.title));
  if (hg.text) step.appendChild(el('p', 'hair-guide-text', hg.text));

  const figure = el('figure', 'hair-guide-figure');
  const img = document.createElement('img');
  img.className = 'hair-guide-image';
  img.src = resolveAppPath(hg.imageSrc);
  img.alt = hg.imageAlt || '';
  img.loading = 'lazy';
  img.decoding = 'async';
  bindHairGuideImage(img, hg);
  figure.appendChild(img);
  if (hg.imageCaption) figure.appendChild(el('figcaption', 'hair-guide-caption', hg.imageCaption));
  step.appendChild(figure);

  if (hg.note) step.appendChild(el('p', 'hair-guide-note', hg.note));

  step.appendChild(el('div', 'spacer'));
  const btn = primaryButton(hg.continueLabel || CONFIG.ui.nextLabel);
  btn.addEventListener('click', function(){ showTask(0); });
  step.appendChild(btn);
  mountStep(step);
  setAdminScreen('hairGuide', -1);
}

function renderIntro(){
  const L = state.lesson;
  const intro = L.intro || {};
  const step = el('div', 'step intro');
  const tag = lessonTagText(L);
  if (tag) step.appendChild(el('div', 'case-tag', tag));
  step.appendChild(el('h1', null, L.title));
  if (intro.clientQuote) step.appendChild(clientBubble(intro.clientQuote, intro.clientName));
  if (intro.narratorText) step.appendChild(el('p', null, intro.narratorText));
  if (intro.stakeText){
    const stake = el('div', 'stake');
    stake.appendChild(iconEl('kosmykSm'));
    stake.appendChild(document.createTextNode(' ' + intro.stakeText));
    step.appendChild(stake);
  }
  step.appendChild(el('div', 'spacer'));
  const btn = primaryButton(intro.startButtonLabel || 'Zacznij lekcję');
  btn.addEventListener('click', function(){
    if (!L.tasks || L.tasks.length === 0) showTasksPending();
    else if (intro.scaleGuide) renderScaleGuide();
    else if (intro.hairGuide) renderHairGuide();
    else showTask(0);
  });
  step.appendChild(btn);
  mountStep(step);
  setAdminScreen('intro', -1);
}

/* ---------- renderery zadań ----------
   Kontrakt: renderer(task, ctx) -> { el, check() -> boolean }
   ctx.setReady(bool) włącza/wyłącza przycisk "Sprawdź".
   ctx.countMistake() zlicza pomyłki interakcyjne (matching/ordering). */

function renderSingleChoice(task, ctx){
  const box = el('div', 'options');
  let selected = null;
  const buttons = task.options.map(o => {
    const b = el('button', 'opt');
    b.type = 'button'; b.dataset.id = o.id;
    b.appendChild(el('span', 'mark'));
    b.appendChild(renderRich(el('span'), o.text));
    b.addEventListener('click', () => {
      if (b.classList.contains('locked')) return;
      buttons.forEach(x => x.classList.remove('sel'));
      b.classList.add('sel'); selected = o.id;
      ctx.setReady(true);
    });
    box.appendChild(b);
    return b;
  });
  return {
    el: box,
    resetSelection(){ selected = null; },
    check(){
      const ok = selected === task.correctOptionId;
      buttons.forEach(b => {
        b.classList.add('locked');
        if (b.dataset.id === task.correctOptionId) b.classList.add('good');
        else if (b.classList.contains('sel')) b.classList.add('bad');
      });
      return ok;
    }
  };
}

function renderTrueFalse(task, ctx){
  const box = el('div', 'tf options');
  let selected = null;
  const defs = [
    { value: true,  label: task.trueLabel,  glyph: '✓', glyphClass: 'glyph-true'  },
    { value: false, label: task.falseLabel, glyph: '✕', glyphClass: 'glyph-false' }
  ];
  const buttons = defs.map(d => {
    const b = el('button', 'opt');
    b.type = 'button'; b.dataset.value = String(d.value);
    b.appendChild(el('span', d.glyphClass, d.glyph));
    b.appendChild(el('span', null, d.label));
    b.addEventListener('click', () => {
      if (b.classList.contains('locked')) return;
      buttons.forEach(x => x.classList.remove('sel'));
      b.classList.add('sel'); selected = d.value;
      ctx.setReady(true);
    });
    box.appendChild(b);
    return b;
  });
  return {
    el: box,
    resetSelection(){ selected = null; },
    check(){
      const ok = selected === task.correctValue;
      buttons.forEach(b => {
        b.classList.add('locked');
        if (b.dataset.value === String(task.correctValue)) b.classList.add('good');
        else if (b.classList.contains('sel')) b.classList.add('bad');
      });
      return ok;
    }
  };
}

function renderFindError(task, ctx){
  const wrap = el('div');
  const card = el('div', 'cardnote');
  card.appendChild(el('div', 'chead', task.cardTitle));
  const needed = task.correctOptionIds.length;
  const rows = task.rows.map(r => {
    const row = el('div', 'row');
    row.dataset.id = r.id;
    row.appendChild(el('span', 'dot'));
    row.appendChild(renderRich(el('span'), r.text));
    row.addEventListener('click', () => {
      if (row.classList.contains('locked')) return;
      row.classList.toggle('sel');
      const n = rows.filter(x => x.classList.contains('sel')).length;
      hint.textContent = 'Zaznaczono ' + n + ' z ' + needed;
      ctx.setReady(n === needed);
    });
    card.appendChild(row);
    return row;
  });
  const hint = el('div', 'hint', 'Zaznaczono 0 z ' + needed);
  wrap.appendChild(card); wrap.appendChild(hint);
  return {
    el: wrap,
    check(){
      const selectedIds = rows.filter(r => r.classList.contains('sel')).map(r => r.dataset.id);
      const correct = new Set(task.correctOptionIds);
      const ok = selectedIds.length === correct.size && selectedIds.every(id => correct.has(id));
      rows.forEach(r => {
        r.classList.add('locked'); r.classList.remove('sel');
        const isError = correct.has(r.dataset.id);
        const wasSelected = selectedIds.includes(r.dataset.id);
        if (isError) r.classList.add('good');
        else if (wasSelected) r.classList.add('miss');
      });
      return ok;
    }
  };
}

function renderMatching(task, ctx){
  const grid = el('div', 'match');
  let leftSel = null, matched = 0;
  const total = task.left.length;

  function makeCol(title, items, isLeft){
    const col = el('div', 'mcol');
    col.appendChild(el('div', 'ttl', title));
    items.forEach(item => {
      const chip = el('button', 'chip');
      chip.type = 'button'; chip.dataset.pair = item.pairId;
      renderRich(chip, item.text);
      chip.addEventListener('click', () => {
        if (chip.classList.contains('done')) return;
        if (isLeft){
          col.querySelectorAll('.chip').forEach(x => x.classList.remove('sel'));
          chip.classList.add('sel'); leftSel = chip;
        } else {
          if (!leftSel) return;
          if (chip.dataset.pair === leftSel.dataset.pair){
            chip.classList.add('done'); leftSel.classList.add('done'); leftSel.classList.remove('sel');
            leftSel = null; matched++;
            if (matched === total) ctx.setReady(true);
          } else {
            ctx.countMistake();
            chip.classList.add('shake');
            setTimeout(() => chip.classList.remove('shake'), 350);
          }
        }
      });
      col.appendChild(chip);
    });
    return col;
  }
  grid.appendChild(makeCol(task.leftTitle, task.left, true));
  grid.appendChild(makeCol(task.rightTitle, task.right, false));
  return {
    el: grid,
    /* Ukończenie puzzle ≠ pełny punkt: błędy z countMistake obniżają firstTryOk */
    check(){ return matched === total; }
  };
}

function renderOrdering(task, ctx){
  const wrap = el('div');
  const list = el('div', 'order');
  let nextPos = 0;
  const stepsById = {};
  const rows = task.steps.map(s => {
    const row = el('button', 'ostep');
    row.type = 'button'; row.dataset.id = s.id;
    row.appendChild(el('span', 'n', '·'));
    row.appendChild(renderRich(el('span'), s.text));
    stepsById[s.id] = row;
    row.addEventListener('click', () => {
      if (row.classList.contains('num')) return;
      if (s.id === task.correctOrder[nextPos]){
        nextPos++;
        row.classList.add('num');
        row.querySelector('.n').textContent = String(nextPos);
        if (nextPos === task.correctOrder.length) ctx.setReady(true);
      } else {
        ctx.countMistake();
        row.classList.add('shake');
        setTimeout(() => row.classList.remove('shake'), 350);
      }
    });
    list.appendChild(row);
    return row;
  });
  const reset = el('button', 'order-reset', task.resetLabel);
  reset.type = 'button';
  reset.addEventListener('click', () => {
    nextPos = 0;
    rows.forEach(r => { r.classList.remove('num', 'good'); r.querySelector('.n').textContent = '·'; });
    ctx.setReady(false);
  });
  wrap.appendChild(list); wrap.appendChild(reset);
  return {
    el: wrap,
    check(){
      const ok = nextPos === task.correctOrder.length;
      if (ok) rows.forEach(r => r.classList.add('good'));
      return ok;
    }
  };
}

const RENDERERS = {
  singleChoice: renderSingleChoice,
  trueFalse: renderTrueFalse,
  findError: renderFindError,
  matching: renderMatching,
  ordering: renderOrdering
};

/* ---------- ekran zadania ---------- */
let currentTaskApi = null;

function unlockTaskForRetry(){
  const step = dom.stage && dom.stage.querySelector('.step.active');
  if (!step) return;
  step.querySelectorAll('.opt').forEach(function(b){
    b.classList.remove('locked', 'sel', 'good', 'bad');
  });
  step.querySelectorAll('.row').forEach(function(r){
    r.classList.remove('locked', 'sel', 'good', 'miss');
  });
  if (state.pendingCheckBtn){
    state.pendingCheckBtn.disabled = true;
  }
  if (currentTaskApi && typeof currentTaskApi.resetSelection === 'function'){
    currentTaskApi.resetSelection();
  }
}

function showTask(index){
  try {
    const L = state.lesson;
    if (!L || !Array.isArray(L.tasks)){
      showLessonError('Brak listy zadań w lekcji.', state.lessonId);
      return;
    }
    state.currentTaskIndex = index;
    state.taskHadMistake = false;
    const task = L.tasks[index];
    if (!task){
      showLessonError('Zadanie #' + (index + 1) + ' nie istnieje w lekcji.', state.lessonId);
      return;
    }

    const step = el('div', 'step');
    if (task.kicker) step.appendChild(el('div', 'kicker', task.kicker));
    if (task.clientIntro) step.appendChild(clientBubble(task.clientIntro));
    const q = el('div', 'qtext' + (task.clientIntro ? ' compact' : ''));
    renderRich(q, task.question);
    step.appendChild(q);

    const checkBtn = primaryButton(task.checkButtonLabel || 'Sprawdź');
    checkBtn.disabled = true;
    state.pendingCheckBtn = checkBtn;
    const ctx = {
      setReady(v){ checkBtn.disabled = !v; },
      countMistake(){ state.mistakes++; state.taskHadMistake = true; }
    };

    const renderer = RENDERERS[task.type];
    if (!renderer){
      showLessonError('Nieobsługiwany typ zadania: "' + task.type + '".', state.lessonId);
      return;
    }
    currentTaskApi = renderer(task, ctx);
    if (!currentTaskApi || !currentTaskApi.el){
      showLessonError('Renderer zadania nie zwrócił widoku.', state.lessonId);
      return;
    }
    step.appendChild(currentTaskApi.el);
    step.appendChild(el('div', 'spacer'));
    checkBtn.addEventListener('click', () => {
      const ok = currentTaskApi.check();
      if (!ok){
        state.mistakes++;
        state.taskHadMistake = true;
        openFeedback(task, false, false);
        return;
      }
      /* ok: punkt tylko za poprawną odpowiedź za pierwszym razem */
      const firstTryOk = !state.taskHadMistake;
      if (isScoredTask(task)){
        if (firstTryOk) state.scoredCorrect++;
        else state.correctStreak = 0;
        state.answers.push({ taskId: task.id, correct: firstTryOk });
      }
      openFeedback(task, true, firstTryOk);
    });
    step.appendChild(checkBtn);
    mountStep(step);
    setAdminScreen('task', index);
  } catch (e){
    showLessonError(e.message || String(e), state.lessonId);
  }
}

/* ---------- feedback ---------- */
function openFeedback(task, ok, firstTryOk){
  const f = task.feedback;
  const bonusCfg = state.lesson.rewards && state.lesson.rewards.streakBonus;
  const awardEligible = !!(ok && firstTryOk);

  dom.fb.classList.remove('ok', 'no');
  dom.fb.classList.add(ok ? 'ok' : 'no');
  if (ok && !firstTryOk){
    dom.ftitle.textContent = f.correctTitle || 'Dobrze — idziemy dalej';
  } else {
    dom.ftitle.textContent = ok ? f.correctTitle : (f.incorrectTitle || CONFIG.ui.incorrectFallbackTitle);
  }
  dom.fic.textContent = '';
  dom.fic.appendChild(iconEl(ok ? 'check' : 'info'));

  if (ok && f.clientQuote){ dom.fclient.hidden = false; renderRich(dom.fclient, f.clientQuote); }
  else dom.fclient.hidden = true;

  renderRich(dom.fwhy, f.explanation);

  dom.fkchip.hidden = !awardEligible;
  dom.fkval.textContent = '+' + task.reward;

  if (awardEligible) state.correctStreak++;
  else if (!ok) state.correctStreak = 0;

  let bonusNow = false;
  if (awardEligible && bonusCfg && !state.bonusGiven && state.correctStreak === bonusCfg.threshold){
    bonusNow = true; state.bonusGiven = true;
    dom.fbonus.textContent = '';
    dom.fbonus.appendChild(document.createTextNode('✦ ' + bonusCfg.label + ' '));
    dom.fbonus.appendChild(el('span', 'bplus', '+' + bonusCfg.amount));
  }
  dom.fbonus.hidden = !bonusNow;

  const hasAha = awardEligible && f.funFact && f.funFact.text;
  dom.faha.hidden = !hasAha;
  if (hasAha) dom.fahab.textContent = richToPlain(f.funFact.text);

  dom.fb.dataset.ok = ok ? '1' : '0';
  dom.fb.dataset.firstTry = awardEligible ? '1' : '0';
  dom.fb.dataset.bonus = bonusNow ? '1' : '0';
  dom.fb.dataset.reward = String(task.reward || 0);
  dom.fnext.textContent = ok ? CONFIG.ui.nextLabel : 'Spróbuj ponownie';
  if (isAdminMode() && document.getElementById('adminPanel')){
    document.getElementById('adminPanel').classList.add('is-collapsed');
  }
  dom.fb.classList.add('show');
}

function advance(){
  /* błędna odpowiedź: pozwól poprawić, bez kasowania błędu */
  if (dom.fb.dataset.ok === '0'){
    dom.fb.classList.remove('show');
    unlockTaskForRetry();
    return;
  }

  dom.fb.classList.remove('show');
  const bonusCfg = state.lesson && state.lesson.rewards && state.lesson.rewards.streakBonus;
  if (dom.fb.dataset.firstTry === '1'){
    const n = Number(dom.fb.dataset.reward) + (dom.fb.dataset.bonus === '1' && bonusCfg ? bonusCfg.amount : 0);
    if (n > 0) awardKosmyki(n);
  }
  const seg = dom.progress.children[state.currentTaskIndex];
  if (seg) seg.firstElementChild.style.width = '100%';

  const nextIndex = state.currentTaskIndex + 1;
  setTimeout(() => {
    try {
      if (!state.lesson || !state.lesson.tasks){
        showLessonError('Lekcja nie jest wczytana.', state.lessonId);
        return;
      }
      if (nextIndex >= state.lesson.tasks.length) showDone();
      else showTask(nextIndex);
    } catch (e){
      showLessonError(e.message || String(e), state.lessonId);
    }
  }, 300);
}

function awardKosmyki(n){
  if (state.isAdminSandbox) return;
  state.earnedKosmyki += n;
  if (!state.isRepeat){
    state.kosmyki += n;
  }
  dom.floatK.textContent = '+' + n;
  dom.floatK.classList.remove('go');
  void dom.floatK.offsetWidth;
  dom.floatK.classList.add('go');
  if (window.UIEffects && window.UIEffects.kosmykBurst){
    var origin = dom.fkchip && !dom.fkchip.hidden ? dom.fkchip : dom.kwrap;
    window.UIEffects.kosmykBurst(origin);
  }
  setTimeout(() => {
    dom.kNum.textContent = String(state.kosmyki);
    dom.kwrap.classList.add('pulse');
    setTimeout(() => dom.kwrap.classList.remove('pulse'), 240);
  }, 380);
}

/* ---------- ekran końcowy ---------- */
function showDone(){
  try {
  const L = state.lesson;
  const C = L.completion || {};
  const perfectCfg = L.rewards && L.rewards.perfectBonus;
  const scoredTotal = countScoredTasks(L);
  const scoredCorrect = state.scoredCorrect || 0;
  const scorePct = scoredTotal ? Math.round((scoredCorrect / scoredTotal) * 100) : 0;
  const lessonPerfect = scoredTotal > 0 && scoredCorrect === scoredTotal && state.mistakes === 0;
  const perfect = lessonPerfect
    && scorePct === 100
    && !!perfectCfg
    && !state.isAdminSandbox
    && !state.isRepeat;
  if (perfect){
    state.earnedKosmyki += perfectCfg.amount;
    if (!state.isRepeat){
      state.kosmyki += perfectCfg.amount;
      if (dom.kNum) dom.kNum.textContent = String(state.kosmyki);
    }
  }

  const step = el('div', 'step done-step editorial-grain');

  const r1 = el('div', 'reveal');
  r1.appendChild(el('div', 'solved', C.solvedLabel || 'Lekcja ukończona'));
  const hasClientStory = !!(L.intro && L.intro.clientQuote);
  if (hasClientStory){
    const face = el('div', 'done-face'); face.appendChild(iconEl('faceHappy'));
    r1.appendChild(face);
  }
  if (C.title) r1.appendChild(el('h1', null, C.title));
  if (C.subtitle) r1.appendChild(el('div', 'sub', C.subtitle));

  if (scoredTotal > 0){
    const scoreBox = el('div', 'score-summary');
    scoreBox.appendChild(el('div', 'score-line', 'Wynik: ' + scoredCorrect + '/' + scoredTotal));
    scoreBox.appendChild(el('div', 'score-line score-line--pct', 'Poprawność: ' + scorePct + '%'));
    r1.appendChild(scoreBox);
  }

  const r2 = el('div', 'reveal ktotal');
  const kv = el('div', 'kv');
  kv.appendChild(iconEl('kosmykBig'));
  const kvNum = el('span', null, '+0');
  kv.appendChild(kvNum);
  r2.appendChild(kv);
  const kosLabel = state.isAdminSandbox
    ? 'Tryb administratora — bez nagród'
    : (state.isRepeat ? 'Zdobyte w tej powt\u00f3rce' : (C.kosmykiLabel || 'Kosmyków za tę lekcję'));
  r2.appendChild(el('div', 'kl', kosLabel));
  const perfectEl = el('div', 'perfect', perfect ? ('\u2726 ' + perfectCfg.label + ' +' + perfectCfg.amount) : '');
  r2.appendChild(perfectEl);

  const r3 = el('div', 'reveal collection');
  const col = C.collection;
  const collectionFull = col && col.earnedBefore >= col.total;
  const collectionId = col && col.id;
  const badgeName = C.badge && C.badge.name;
  const badgeAlready = col && badgeName && collectionId && window.AppState && window.AppState.isCollectionBadgeEarned
    && window.AppState.isCollectionBadgeEarned(collectionId, badgeName);

  if (state.isRepeat){
    const repHead = el('div', 'chead2');
    repHead.appendChild(el('span', 'cname', 'Powt\u00f3rka'));
    r3.appendChild(repHead);
    const repNote = el('div', 'cfoot');
    repNote.textContent = 'Post\u0119p i saldo bez zmian \u2014 to trening, nie nowa nagroda.';
    r3.appendChild(repNote);
  } else if (col){
    const earnedAfter = collectionFull ? col.total : col.earnedBefore + 1;
    const head = el('div', 'chead2');
    head.appendChild(el('span', 'cname', 'Kolekcja: ' + col.name));
    head.appendChild(el('span', 'ccount', earnedAfter + ' / ' + col.total));
    r3.appendChild(head);
    const slots = el('div', 'slots');
    let newSlot = null;
    for (let i = 0; i < col.total; i++){
      let slot;
      if (i < col.earnedBefore){ slot = el('div', 'slot filled'); slot.appendChild(iconEl('slotFilled')); }
      else if (!collectionFull && i === col.earnedBefore){ slot = el('div', 'slot newb'); slot.appendChild(iconEl('slotNew')); newSlot = slot; }
      else slot = el('div', 'slot empty');
      slots.appendChild(slot);
    }
    r3.appendChild(slots);
    const cprog = el('div', 'cprog');
    const cbar = el('i');
    cbar.style.width = Math.round((collectionFull ? col.total : col.earnedBefore) / col.total * 100) + '%';
    cprog.appendChild(cbar);
    r3.appendChild(cprog);
    const cfoot = el('div', 'cfoot');
    if (collectionFull || badgeAlready){
      cfoot.appendChild(document.createTextNode('Kolekcja uko\u0144czona'));
      if (badgeName){
        cfoot.appendChild(document.createTextNode(' \u2014 odznaka '));
        cfoot.appendChild(el('b', null, '\u201E' + badgeName + '\u201D'));
      }
    } else if (badgeName){
      const remaining = col.total - earnedAfter;
      cfoot.appendChild(document.createTextNode('Nowa odznaka: '));
      cfoot.appendChild(el('b', null, '\u201E' + badgeName + '\u201D'));
      cfoot.appendChild(document.createTextNode(' \u00b7 jeszcze '));
      cfoot.appendChild(el('b', null, String(remaining)));
      cfoot.appendChild(document.createTextNode(' do trofeum kolekcji'));
    } else {
      cfoot.appendChild(document.createTextNode('Postęp kolekcji zapisany.'));
    }
    r3.appendChild(cfoot);
    if (newSlot) setTimeout(() => newSlot.classList.add('pop'), 1650);
    if (!collectionFull){
      setTimeout(() => { cbar.style.width = Math.round(earnedAfter / col.total * 100) + '%'; }, 1900);
    }
  }

  const helpers = window.LessonsCatalogHelpers;
  const nextLessonEntry = helpers && helpers.getNextAfter ? helpers.getNextAfter(L.id) : null;
  const nextMeta = C.nextLesson || {};

  const r4 = el('div', 'reveal hook');
  r4.appendChild(iconEl(nextLessonEntry ? 'unlock' : 'lock'));
  const hookTxt = el('div');
  hookTxt.appendChild(el('div', 'ht', nextMeta.label || 'Kolejna lekcja'));
  hookTxt.appendChild(el('div', 'hn', nextMeta.teaser || ''));
  r4.appendChild(hookTxt);

  if (nextLessonEntry && window.AppShell){
    r4.setAttribute('role', 'button');
    r4.setAttribute('tabindex', '0');
    r4.dataset.lessonId = nextLessonEntry.id;
    r4.style.cursor = 'pointer';
    function startNextFromHook(){
      window.AppShell.startLesson(nextLessonEntry.id);
    }
    r4.addEventListener('click', startNextFromHook);
    r4.addEventListener('keydown', function(e){
      if (e.key === 'Enter' || e.key === ' '){
        e.preventDefault();
        startNextFromHook();
      }
    });
  }

  const r5 = el('div', 'reveal done-btns');
  const bContinue = primaryButton(CONFIG.ui.continueLabel);
  bContinue.addEventListener('click', function(){
    if (window.AppShell) window.AppShell.goHome();
  });
  const bGallery = el('button', 'btn btn-ghost', CONFIG.ui.galleryLabel);
  bGallery.type = 'button';
  bGallery.addEventListener('click', function(){
    if (window.AppShell) window.AppShell.goGablotka();
  });
  r5.appendChild(bContinue); r5.appendChild(bGallery);

  const revealBlocks = [r1, r2];
  if (col || state.isRepeat) revealBlocks.push(r3);
  revealBlocks.push(r4, r5);
  revealBlocks.forEach(r => step.appendChild(r));
  if (revealBlocks[0]) revealBlocks[0].classList.add('in');
  mountStep(step);
  setAdminScreen('done', -1);
  if (!state.isRepeat && !state.isAdminSandbox && window.UIEffects && window.UIEffects.markCompletionReward){
    try { window.UIEffects.markCompletionReward(step); } catch (fxErr){ console.warn(fxErr); }
  }

  /* Persist dopiero po montażu UI — błąd w shellu nie kasuje ekranu wyniku */
  if (!state.isRepeat && !state.isAdminSandbox && window.AppShell && window.AppShell.onLessonComplete){
    try {
      const payload = {
        lessonId: L.id,
        earnedKosmyki: state.earnedKosmyki,
        scoredCorrect: scoredCorrect,
        scoredTotal: scoredTotal,
        scorePct: scorePct,
        mistakes: state.mistakes,
        perfect: lessonPerfect
      };
      if (col && collectionId){
        const earnedAfter = collectionFull ? col.total : col.earnedBefore + 1;
        payload.collectionId = collectionId;
        payload.earnedAfter = earnedAfter;
        payload.badgeName = badgeName;
      }
      window.AppShell.onLessonComplete(payload);
    } catch (persistErr){
      console.warn('[Akademia Nowej Fali] onLessonComplete', persistErr);
    }
  }

  /* sekwencja odsłon — pierwszy blok widoczny od razu, reszta z opóźnieniem */
  revealBlocks.forEach((r, i) => {
    if (i === 0) return;
    setTimeout(() => { if (r.isConnected) r.classList.add('in'); }, 200 + i * 380);
  });
  setTimeout(() => {
    if (!kvNum.isConnected) return;
    let c = 0;
    const target = state.isAdminSandbox ? 0 : state.earnedKosmyki;
    const iv = setInterval(() => {
      c += 2;
      if (c >= target){ c = target; clearInterval(iv); }
      kvNum.textContent = '+' + c;
    }, 22);
    if (perfect) setTimeout(() => { if (perfectEl.isConnected) perfectEl.classList.add('on'); }, Math.max(200, target * 13));
  }, 800);
  } catch (e){
    showLessonError(e.message || String(e), state.lessonId);
  }
}

/* ---------- restart / start ---------- */
function buildProgress(){
  dom.progress.textContent = '';
  state.lesson.tasks.forEach(() => {
    const seg = el('div', 'seg');
    seg.appendChild(el('i'));
    dom.progress.appendChild(seg);
  });
}
function restart(){
  state.currentTaskIndex = 0;
  state.isAdminSandbox = isAdminMode();
  state.isRepeat = isLessonAlreadyCompleted(state.lessonId) || state.isAdminSandbox;
  state.kosmyki = getGlobalKosmyki();
  state.earnedKosmyki = 0;
  state.correctStreak = 0;
  state.mistakes = 0;
  state.bonusGiven = false;
  state.answers = [];
  state.taskHadMistake = false;
  state.scoredCorrect = 0;
  state.pendingCheckBtn = null;
  adminImageInfo = null;
  if (dom.kNum) dom.kNum.textContent = String(state.kosmyki);
  if (dom.kwrap) dom.kwrap.hidden = state.isAdminSandbox;
  dom.fb.classList.remove('show');
  clearStage();
  buildProgress();
  renderIntro();
  if (isAdminMode() && window.AdminMode.ensurePanel){
    window.AdminMode.ensurePanel();
  }
}

let chromeReady = false;

function bindLessonChrome(){
  if (chromeReady) return;
  chromeReady = true;
  document.getElementById('kicon').appendChild(iconEl('kosmyk'));
  document.getElementById('fkicon').appendChild(iconEl('kosmykSm'));
  dom.closeBtn.appendChild(iconEl('close'));
  dom.fnext.textContent = CONFIG.ui.nextLabel;
  dom.fnext.addEventListener('click', advance);
  dom.closeBtn.addEventListener('click', function(){
    if (window.AppShell) window.AppShell.showExitConfirm();
  });
}

function abortLesson(){
  dom.fb.classList.remove('show');
  clearStage();
  if (dom.kwrap) dom.kwrap.hidden = false;
}

function bindGlobalLessonSafety(){
  if (bindGlobalLessonSafety.done) return;
  bindGlobalLessonSafety.done = true;
  function lessonViewActive(){
    const v = document.getElementById('view-lesson');
    return !!(v && v.classList.contains('active'));
  }
  window.addEventListener('error', function(ev){
    if (!lessonViewActive() || !ev.message) return;
    /* Nie nadpisuj ekranu ukończenia ani już widocznego błędu */
    if (document.querySelector('.done-step.active') || document.querySelector('.step.fatal.active')) return;
    console.error('[Akademia Nowej Fali]', ev.message, ev.error);
    showLessonError(ev.message, state.lessonId);
  });
  window.addEventListener('unhandledrejection', function(ev){
    if (!lessonViewActive()) return;
    if (document.querySelector('.done-step.active') || document.querySelector('.step.fatal.active')) return;
    const msg = ev.reason && ev.reason.message ? ev.reason.message : String(ev.reason);
    console.error('[Akademia Nowej Fali] unhandledrejection', ev.reason);
    showLessonError(msg, state.lessonId);
  });
}

async function startLessonEngine(lessonId){
  try {
    bindLessonChrome();
    bindGlobalLessonSafety();
  } catch (chromeErr){
    showLessonError(chromeErr.message || String(chromeErr), lessonId || state.lessonId);
    return;
  }
  const id = lessonId || CONFIG.defaultLesson;
  const helpers = window.LessonsCatalogHelpers;
  if (helpers && !helpers.getEntry(id)){
    notifyLessonUnavailable();
    return;
  }
  try {
    state.lessonId = id;
    if (isAdminMode() && window.AdminMode && window.AdminMode.setPanelLoading){
      window.AdminMode.setPanelLoading(id);
    }
    state.lesson = await loadLesson(id);
    restart();
  } catch (e) {
    if (e && e.code === 'LESSON_UNAVAILABLE') notifyLessonUnavailable();
    else showFatal(e.message || String(e));
  }
}

window.LessonEngine = {
  start: function(lessonId){ return startLessonEngine(lessonId); },
  abort: abortLesson,
  adminPrevStep: function(){ adminNavigateFlow(-1); },
  adminNextStep: function(){ adminNavigateFlow(1); },
  adminSkipTask: adminSkipTask,
  adminGoDone: adminGoDone,
  adminPrevLesson: function(){ adminChangeLesson(-1); },
  adminNextLesson: function(){ adminChangeLesson(1); },
  adminRestartLesson: adminRestartLesson,
  adminBackToList: adminBackToList,
  renderAdminStep: renderAdminStep
};
