/* ============================================================
   Akademia Nowej Fali — tryb administratora / QA (?admin=1)
   Aktywacja tylko z URL (?admin=1) na czas sesji/karty.
   Nie zapisuje flagi admina w localStorage postępu uczennicy.
   ============================================================ */
'use strict';

var adminActive = false;
var panelCollapsed = false;

function initAdminFromUrl(){
  var params = new URLSearchParams(window.location.search);
  adminActive = params.get('admin') === '1';
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
    '<button type="button" class="admin-bar-off" id="adminDisableBtn">Wyłącz</button>';
  adminBarHost().appendChild(bar);

  document.getElementById('adminDisableBtn').addEventListener('click', function(){
    window.AdminMode.disable();
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

function reloadWithAdmin(on){
  var url = new URL(window.location.href);
  if (on) url.searchParams.set('admin', '1');
  else url.searchParams.delete('admin');
  // Keep other params (e.g. lesson) when useful
  window.location.href = url.pathname + url.search + url.hash;
}

initAdminFromUrl();
if (adminActive){
  document.documentElement.classList.add('is-admin');
  if (document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', renderAdminBar);
  } else {
    renderAdminBar();
  }
}

window.AdminMode = {
  isActive: function(){ return adminActive; },
  enable: function(){ reloadWithAdmin(true); },
  disable: function(){ reloadWithAdmin(false); },
  refreshPanel: refreshAdminPanel,
  onLessonViewChange: onLessonViewChange,
  ensurePanel: ensureAdminPanel,
  setPanelLoading: setPanelLoading
};
