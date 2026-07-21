/* ============================================================
   Akademia Nowej Fali — tryb administratora / QA
   Wejście: ?admin=1 lub przycisk w profilu — wymaga hasła.
   Odblokowanie tylko w sessionStorage (nie w localStorage uczennicy).
   W kodzie jest wyłącznie hash SHA-256 hasła, nigdy plaintext.
   ============================================================ */
'use strict';

/** SHA-256 (hex) hasła administratora — bez plaintextu w repo. */
var ADMIN_PASS_HASH = '1f718039c971b4000fc547af3bfea0139e406a04d296df6738a4fee142786656';
var ADMIN_SESSION_KEY = 'anf_admin_unlock_v1';

var adminActive = false;
var panelCollapsed = false;
var promptBusy = false;

function wantsAdminFromUrl(){
  try {
    return new URLSearchParams(window.location.search).get('admin') === '1';
  } catch (e){
    return false;
  }
}

function isSessionUnlocked(){
  try {
    return sessionStorage.getItem(ADMIN_SESSION_KEY) === '1';
  } catch (e){
    return false;
  }
}

function setSessionUnlocked(on){
  try {
    if (on) sessionStorage.setItem(ADMIN_SESSION_KEY, '1');
    else sessionStorage.removeItem(ADMIN_SESSION_KEY);
  } catch (e){ /* private mode / blocked storage */ }
}

function sha256Hex(text){
  var enc = new TextEncoder();
  return crypto.subtle.digest('SHA-256', enc.encode(String(text || ''))).then(function(buf){
    var bytes = new Uint8Array(buf);
    var hex = '';
    for (var i = 0; i < bytes.length; i++){
      hex += bytes[i].toString(16).padStart(2, '0');
    }
    return hex;
  });
}

function initAdminFromUrl(){
  adminActive = wantsAdminFromUrl() && isSessionUnlocked();
}

function notifyAdminUiChanged(){
  try {
    document.dispatchEvent(new CustomEvent('anf-admin-change', {
      detail: { active: adminActive }
    }));
  } catch (e){ /* ignore */ }
}

function activateAdminUi(){
  adminActive = true;
  document.documentElement.classList.add('is-admin');
  renderAdminBar();
  notifyAdminUiChanged();
}

function deactivateAdminUi(){
  adminActive = false;
  document.documentElement.classList.remove('is-admin');
  var bar = document.getElementById('adminBar');
  if (bar && bar.parentNode) bar.parentNode.removeChild(bar);
  var panel = document.getElementById('adminPanel');
  if (panel && panel.parentNode) panel.parentNode.removeChild(panel);
  var gate = document.getElementById('adminPassGate');
  if (gate && gate.parentNode) gate.parentNode.removeChild(gate);
  notifyAdminUiChanged();
}

/** Ponowne odczytanie ?admin=1 + sesji (np. po logowaniu). */
function syncAdminFromUrl(){
  var was = adminActive;
  initAdminFromUrl();
  if (adminActive){
    activateAdminUi();
  } else if (was && !adminActive){
    deactivateAdminUi();
  }
  if (wantsAdminFromUrl() && !isSessionUnlocked() && !adminActive){
    showAdminPasswordPrompt({ stripUrlOnCancel: true });
  }
  return adminActive;
}

function adminBarHost(){
  return document.querySelector('.device') || document.body;
}

function renderAdminBar(){
  if (!adminActive || document.getElementById('adminBar')) return;

  var bar = document.createElement('div');
  bar.id = 'adminBar';
  bar.className = 'admin-bar';
  bar.setAttribute('role', 'status');
  bar.innerHTML =
    '<span class="admin-bar-chip">TRYB ADMINISTRATORA</span>' +
    '<button type="button" class="admin-bar-users" id="adminUsersBtn">Konta</button>' +
    '<button type="button" class="admin-bar-off" id="adminDisableBtn">Wyłącz</button>';
  adminBarHost().appendChild(bar);

  document.getElementById('adminDisableBtn').addEventListener('click', function(){
    window.AdminMode.disable();
  });
  document.getElementById('adminUsersBtn').addEventListener('click', function(){
    if (window.AppShell && window.AppShell.showAdminUsers) window.AppShell.showAdminUsers();
  });
}

function hideAdminPasswordPrompt(){
  var gate = document.getElementById('adminPassGate');
  if (gate && gate.parentNode) gate.parentNode.removeChild(gate);
  promptBusy = false;
}

function stripAdminFromUrl(){
  try {
    var url = new URL(window.location.href);
    if (!url.searchParams.has('admin')) return;
    url.searchParams.delete('admin');
    var next = url.pathname + url.search + url.hash;
    if (window.history && window.history.replaceState){
      window.history.replaceState({}, '', next);
    }
  } catch (e){ /* ignore */ }
}

function setAdminInUrl(on){
  try {
    var url = new URL(window.location.href);
    if (on) url.searchParams.set('admin', '1');
    else url.searchParams.delete('admin');
    var next = url.pathname + url.search + url.hash;
    if (window.history && window.history.replaceState){
      window.history.replaceState({}, '', next);
    }
  } catch (e){ /* ignore */ }
}

/**
 * Modal hasła — tylko gdy ktoś celowo wchodzi w admin (?admin=1 / przycisk).
 * opts.stripUrlOnCancel — po Anuluj usuń ?admin=1 z paska adresu
 * opts.onSuccess — callback po poprawnym haśle
 */
function showAdminPasswordPrompt(opts){
  opts = opts || {};
  if (document.getElementById('adminPassGate')) return;
  if (typeof crypto === 'undefined' || !crypto.subtle){
    window.alert('Ta przeglądarka nie obsługuje bezpiecznego sprawdzania hasła administratora.');
    if (opts.stripUrlOnCancel) stripAdminFromUrl();
    return;
  }

  var gate = document.createElement('div');
  gate.id = 'adminPassGate';
  gate.className = 'admin-pass-gate';
  gate.setAttribute('role', 'dialog');
  gate.setAttribute('aria-modal', 'true');
  gate.setAttribute('aria-labelledby', 'adminPassTitle');
  gate.innerHTML =
    '<form class="admin-pass-sheet" id="adminPassForm" autocomplete="off">' +
      '<h2 id="adminPassTitle">Hasło administratora</h2>' +
      '<p class="admin-pass-note">Dostęp tylko dla trenerek Akademii.</p>' +
      '<label class="admin-pass-label" for="adminPassInput">Hasło</label>' +
      '<input id="adminPassInput" class="admin-pass-input" type="password" name="admin-pass" autocomplete="current-password" required>' +
      '<p class="admin-pass-error" id="adminPassError" hidden></p>' +
      '<div class="admin-pass-actions">' +
        '<button type="button" class="btn btn-ghost" id="adminPassCancel">Anuluj</button>' +
        '<button type="submit" class="btn btn-primary" id="adminPassSubmit">Odblokuj</button>' +
      '</div>' +
    '</form>';

  adminBarHost().appendChild(gate);

  var input = document.getElementById('adminPassInput');
  var errEl = document.getElementById('adminPassError');
  var form = document.getElementById('adminPassForm');

  function cancel(){
    hideAdminPasswordPrompt();
    if (opts.stripUrlOnCancel) stripAdminFromUrl();
  }

  document.getElementById('adminPassCancel').addEventListener('click', cancel);

  form.addEventListener('submit', function(ev){
    ev.preventDefault();
    if (promptBusy) return;
    promptBusy = true;
    errEl.hidden = true;
    errEl.textContent = '';
    var pass = input.value;
    sha256Hex(pass).then(function(hash){
      if (hash !== ADMIN_PASS_HASH){
        promptBusy = false;
        input.value = '';
        errEl.textContent = 'Nieprawidłowe hasło.';
        errEl.hidden = false;
        input.focus();
        return;
      }
      setSessionUnlocked(true);
      setAdminInUrl(true);
      hideAdminPasswordPrompt();
      activateAdminUi();
      if (typeof opts.onSuccess === 'function') opts.onSuccess();
      if (window.AppShell && window.AppShell.refreshAdminChrome){
        try { window.AppShell.refreshAdminChrome(); } catch (e){ /* ignore */ }
      }
    }).catch(function(){
      promptBusy = false;
      errEl.textContent = 'Nie udało się sprawdzić hasła. Spróbuj ponownie.';
      errEl.hidden = false;
    });
  });

  setTimeout(function(){ try { input.focus(); } catch (e){} }, 30);
}

function requestAdminUnlock(opts){
  opts = opts || {};
  if (isSessionUnlocked()){
    setAdminInUrl(true);
    activateAdminUi();
    if (typeof opts.onSuccess === 'function') opts.onSuccess();
    return;
  }
  showAdminPasswordPrompt({
    stripUrlOnCancel: !!opts.stripUrlOnCancel,
    onSuccess: opts.onSuccess
  });
}

function ensureAdminPanel(){
  if (!adminActive) return null;
  var host = document.getElementById('view-lesson');
  if (!host) return null;

  var panel = document.getElementById('adminPanel');
  if (!panel){
    panel = document.createElement('aside');
    panel.id = 'adminPanel';
    panel.className = 'admin-panel is-collapsed';
    panelCollapsed = true;
    panel.setAttribute('aria-label', 'Panel QA administratora');
    panel.innerHTML =
      '<button type="button" class="admin-panel-toggle" id="adminPanelToggle" aria-expanded="false">' +
        '<span class="admin-panel-toggle-label">Panel QA</span>' +
        '<span class="admin-panel-toggle-icon" aria-hidden="true"></span>' +
      '</button>' +
      '<div class="admin-panel-body" id="adminPanelBody">' +
        '<p class="admin-sandbox-note">Przeglądanie w piaskownicy — bez Kosmyków, streaku i odblokowań.</p>' +
        '<div class="admin-actions">' +
          '<button type="button" class="admin-btn" id="adminPrevStep">← Poprzedni krok</button>' +
          '<button type="button" class="admin-btn" id="adminNextStep">Następny krok →</button>' +
          '<button type="button" class="admin-btn" id="adminSkipTask">Pomiń pytanie</button>' +
          '<button type="button" class="admin-btn admin-btn--accent" id="adminGoDone">Do zakończenia</button>' +
          '<button type="button" class="admin-btn" id="adminRestartLesson">Restart lekcji</button>' +
          '<button type="button" class="admin-btn" id="adminBackToList">Lista lekcji</button>' +
          '<button type="button" class="admin-btn" id="adminPrevLesson">← Poprzednia lekcja</button>' +
          '<button type="button" class="admin-btn" id="adminNextLesson">Następna lekcja →</button>' +
        '</div>' +
        '<dl class="admin-meta" id="adminMeta"></dl>' +
        '<div class="admin-image-block" id="adminImageBlock" hidden></div>' +
      '</div>';
    host.appendChild(panel);

    document.getElementById('adminPanelToggle').addEventListener('click', function(){
      panelCollapsed = !panelCollapsed;
      panel.classList.toggle('is-collapsed', panelCollapsed);
      this.setAttribute('aria-expanded', panelCollapsed ? 'false' : 'true');
    });

    document.getElementById('adminPrevStep').addEventListener('click', function(){
      if (window.LessonEngine && window.LessonEngine.adminPrevStep) window.LessonEngine.adminPrevStep();
    });
    document.getElementById('adminNextStep').addEventListener('click', function(){
      if (window.LessonEngine && window.LessonEngine.adminNextStep) window.LessonEngine.adminNextStep();
    });
    document.getElementById('adminSkipTask').addEventListener('click', function(){
      if (window.LessonEngine && window.LessonEngine.adminSkipTask) window.LessonEngine.adminSkipTask();
    });
    document.getElementById('adminGoDone').addEventListener('click', function(){
      if (window.LessonEngine && window.LessonEngine.adminGoDone) window.LessonEngine.adminGoDone();
    });
    document.getElementById('adminRestartLesson').addEventListener('click', function(){
      if (window.LessonEngine && window.LessonEngine.adminRestartLesson) window.LessonEngine.adminRestartLesson();
    });
    document.getElementById('adminBackToList').addEventListener('click', function(){
      if (window.LessonEngine && window.LessonEngine.adminBackToList) window.LessonEngine.adminBackToList();
    });
    document.getElementById('adminPrevLesson').addEventListener('click', function(){
      if (window.LessonEngine && window.LessonEngine.adminPrevLesson) window.LessonEngine.adminPrevLesson();
    });
    document.getElementById('adminNextLesson').addEventListener('click', function(){
      if (window.LessonEngine && window.LessonEngine.adminNextLesson) window.LessonEngine.adminNextLesson();
    });
  }

  panel.hidden = !document.getElementById('view-lesson').classList.contains('active');
  return panel;
}

function metaRow(label, value){
  return '<dt>' + label + '</dt><dd>' + (value == null || value === '' ? '—' : String(value)) + '</dd>';
}

function renderImageBlock(info){
  var block = document.getElementById('adminImageBlock');
  if (!block) return;

  if (!info || !info.src){
    block.hidden = true;
    block.textContent = '';
    return;
  }

  block.hidden = false;
  var statusClass = 'admin-img-status--' + (info.status || 'unknown');
  var statusLabel = info.status === 'loaded' ? 'Załadowano'
    : info.status === 'missing' ? 'BRAK OBRAZU'
    : info.status === 'loading' ? 'Ładowanie…'
    : info.status || '—';

  block.innerHTML =
    '<div class="admin-image-title">Grafika lekcji</div>' +
    '<div class="' + statusClass + ' admin-img-status">' + statusLabel + '</div>' +
    '<div class="admin-img-path"><code>' + info.resolvedSrc + '</code></div>' +
    '<div class="admin-img-alt">alt: ' + (info.alt || '—') + '</div>' +
    '<div class="admin-img-dim">' +
      (info.naturalWidth != null ? info.naturalWidth + ' × ' + info.naturalHeight + ' px' : 'Wymiary: oczekiwanie…') +
    '</div>';
}

function setAdminActionButtonsDisabled(disabled){
  [
    'adminPrevStep', 'adminNextStep', 'adminSkipTask', 'adminGoDone',
    'adminPrevLesson', 'adminNextLesson', 'adminRestartLesson', 'adminBackToList'
  ].forEach(function(id){
    var btn = document.getElementById(id);
    if (btn) btn.disabled = disabled;
  });
}

function refreshAdminPanel(ctx){
  if (!adminActive) return;
  ensureAdminPanel();

  var meta = document.getElementById('adminMeta');
  if (!meta || !ctx) return;

  if (ctx.loading){
    meta.innerHTML = metaRow('Status', 'Ładowanie lekcji…') + metaRow('Lekcja', ctx.lessonId || '—');
    renderImageBlock(null);
    setAdminActionButtonsDisabled(true);
    return;
  }

  meta.innerHTML =
    metaRow('Lekcja', ctx.lessonId) +
    metaRow('Krok', ctx.stepLabel) +
    metaRow('Typ ekranu', ctx.screenKind) +
    metaRow('Typ pytania', ctx.taskType || '—');

  renderImageBlock(ctx.image);

  var prevStep = document.getElementById('adminPrevStep');
  var nextStep = document.getElementById('adminNextStep');
  if (prevStep) prevStep.disabled = !ctx.canPrevStep;
  if (nextStep) nextStep.disabled = !ctx.canNextStep;

  /* Pomiń: na zadaniu omija pytanie; na intro/guide działa jak „następny krok”. */
  var skipBtn = document.getElementById('adminSkipTask');
  if (skipBtn){
    skipBtn.disabled = ctx.screenKind === 'done' || ctx.screenKind === 'error' || !ctx.canNextStep;
  }

  var prevLes = document.getElementById('adminPrevLesson');
  var nextLes = document.getElementById('adminNextLesson');
  if (prevLes) prevLes.disabled = !ctx.canPrevLesson;
  if (nextLes) nextLes.disabled = !ctx.canNextLesson;

  var goDone = document.getElementById('adminGoDone');
  if (goDone) goDone.disabled = ctx.screenKind === 'error';

  var restartBtn = document.getElementById('adminRestartLesson');
  if (restartBtn) restartBtn.disabled = !ctx.lessonId || ctx.screenKind === 'error';
  var backBtn = document.getElementById('adminBackToList');
  if (backBtn) backBtn.disabled = false;
}

function setPanelLoading(lessonId){
  if (!adminActive) return;
  ensureAdminPanel();
  refreshAdminPanel({ loading: true, lessonId: lessonId || '—' });
}

function onLessonViewChange(isLesson){
  if (!adminActive) return;
  var panel = document.getElementById('adminPanel');
  if (panel) panel.hidden = !isLesson;
}

function enableAdmin(){
  requestAdminUnlock({ stripUrlOnCancel: false });
}

function disableAdmin(){
  setSessionUnlocked(false);
  hideAdminPasswordPrompt();
  deactivateAdminUi();
  stripAdminFromUrl();
  if (window.AppShell && window.AppShell.refreshAdminChrome){
    try { window.AppShell.refreshAdminChrome(); } catch (e){ /* ignore */ }
  }
}

initAdminFromUrl();
if (adminActive){
  document.documentElement.classList.add('is-admin');
  if (document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', renderAdminBar);
  } else {
    renderAdminBar();
  }
} else if (wantsAdminFromUrl()){
  var bootPrompt = function(){ showAdminPasswordPrompt({ stripUrlOnCancel: true }); };
  if (document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', bootPrompt);
  } else {
    bootPrompt();
  }
}

window.AdminMode = {
  isActive: function(){ return adminActive; },
  isUnlocked: isSessionUnlocked,
  wantsFromUrl: wantsAdminFromUrl,
  syncFromUrl: syncAdminFromUrl,
  enable: enableAdmin,
  disable: disableAdmin,
  refreshPanel: refreshAdminPanel,
  onLessonViewChange: onLessonViewChange,
  ensurePanel: ensureAdminPanel,
  setPanelLoading: setPanelLoading
};
