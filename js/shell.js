/* ============================================================
   Akademia Nowej Fali — powłoka nawigacji (Home, Gablotka, Profil)
   ============================================================ */
'use strict';

function getState(){
  return window.AppState.get();
}

var VIEWS = ['home', 'gablotka', 'profile', 'lesson'];
var currentView = 'home';
var chromeBound = false;

function formatKosmyki(n){
  return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

function getDisplayLabel(label){
  if (label === 'Uczennica') return 'Uczennico';
  return label || 'Uczennico';
}

function getCollection(id){
  var state = getState();
  for (var i = 0; i < state.collections.length; i++){
    if (state.collections[i].id === id) return state.collections[i];
  }
  return null;
}

function isLessonCompleted(lessonId){
  return !!getState().completedLessons[lessonId];
}

function isCollectionBadgeEarned(collectionId, badgeName){
  var col = getCollection(collectionId);
  return !!(col && col.earnedBadges && col.earnedBadges[badgeName]);
}

function renderHomeLessons(moduleId, host){
  if (!host || !window.LessonsCatalog) return;
  host.textContent = '';

  var helpers = window.LessonsCatalogHelpers;
  var entries = helpers && helpers.getLessonsForModule
    ? helpers.getLessonsForModule(moduleId)
    : window.LessonsCatalog;

  var adminBrowse = !!(window.AdminMode && window.AdminMode.isActive());

  entries.forEach(function(entry){
    var status = helpers ? helpers.getStatus(entry) : 'locked';
    var tile = document.createElement('div');
    tile.className = 'mission lesson-tile';
    if (status === 'completed') tile.classList.add('is-completed');
    if (status === 'locked') tile.classList.add('is-locked');
    if (status === 'locked' && adminBrowse) tile.classList.add('is-admin-unlock');

    if (status === 'locked' && !adminBrowse){
      tile.setAttribute('role', 'group');
      tile.setAttribute('aria-label', 'Lekcja zablokowana. Odblokuje się po ukończeniu poprzedniej lekcji.');

      var body = document.createElement('div');
      body.className = 'lesson-tile-body';

      var k = document.createElement('div');
      k.className = 'k';
      k.textContent = 'Zablokowana';

      var t = document.createElement('div');
      t.className = 't';
      t.textContent = entry.title;

      body.appendChild(k);
      body.appendChild(t);

      var lock = document.createElement('div');
      lock.className = 'lesson-tile-lock';
      lock.setAttribute('aria-hidden', 'true');
      lock.innerHTML = '<svg width="22" height="22" viewBox="0 0 26 26"><rect x="5" y="11" width="16" height="12" rx="2" fill="none" stroke="#A6B58D" stroke-width="2"/><path d="M9 11V8a4 4 0 0 1 8 0v3" fill="none" stroke="#A6B58D" stroke-width="2"/></svg>';

      tile.appendChild(body);
      tile.appendChild(lock);
      host.appendChild(tile);
      return;
    }

    if (status === 'locked' && adminBrowse){
      var illA = document.createElement('div');
      illA.className = 'ill';
      illA.innerHTML = '<svg width="26" height="26" viewBox="0 0 26 26"><rect x="5" y="11" width="16" height="12" rx="2" fill="none" stroke="#1E2A44" stroke-width="2"/><path d="M9 11V8a4 4 0 0 1 8 0v3" fill="none" stroke="#1E2A44" stroke-width="2"/></svg>';

      var txtA = document.createElement('div');
      txtA.className = 'txt';
      var kA = document.createElement('div');
      kA.className = 'k';
      kA.textContent = 'QA · zablokowana';
      var tA = document.createElement('div');
      tA.className = 't';
      tA.textContent = entry.title;
      var rA = document.createElement('div');
      rA.className = 'r';
      rA.textContent = 'Podgląd administratora';
      txtA.appendChild(kA);
      txtA.appendChild(tA);
      txtA.appendChild(rA);

      var btnA = document.createElement('button');
      btnA.type = 'button';
      btnA.className = 'go btn-start';
      btnA.textContent = 'Otwórz';
      btnA.addEventListener('click', function(){
        window.AppShell.startLesson(entry.id);
      });

      tile.appendChild(illA);
      tile.appendChild(txtA);
      tile.appendChild(btnA);
      host.appendChild(tile);
      return;
    }

    var ill = document.createElement('div');
    ill.className = 'ill';
    if (status === 'completed'){
      ill.innerHTML = '<svg width="26" height="26" viewBox="0 0 26 26"><circle cx="13" cy="13" r="11" fill="none" stroke="#7E8C68" stroke-width="2"/><path d="M8 13l3 3 6-6" fill="none" stroke="#7E8C68" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    } else {
      ill.innerHTML = '<svg width="26" height="26" viewBox="0 0 26 26"><circle cx="13" cy="13" r="9" fill="none" stroke="#E7795B" stroke-width="2"/><circle cx="13" cy="13" r="3" fill="#E7795B"/></svg>';
    }

    var txt = document.createElement('div');
    txt.className = 'txt';
    var k = document.createElement('div');
    k.className = 'k';
    if (status === 'completed') k.textContent = 'Ukończona';
    else k.textContent = 'Dostępna';

    var t = document.createElement('div');
    t.className = 't';
    t.textContent = entry.title;

    var r = document.createElement('div');
    r.className = 'r';
    if (status === 'completed'){
      r.textContent = entry.rewardLabel + ' · ukończono';
    } else {
      r.textContent = entry.rewardLabel + ' · ok. 4 min';
    }

    txt.appendChild(k);
    txt.appendChild(t);
    txt.appendChild(r);

    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'go';
    if (status === 'completed'){
      btn.textContent = 'Powtórz';
      btn.classList.add('btn-start');
      btn.addEventListener('click', function(){
        window.AppShell.startLesson(entry.id);
      });
    } else if (status === 'available'){
      btn.textContent = 'Zacznij';
      btn.classList.add('btn-start');
      btn.addEventListener('click', function(){
        window.AppShell.startLesson(entry.id);
      });
    }

    tile.appendChild(ill);
    tile.appendChild(txt);
    tile.appendChild(btn);
    host.appendChild(tile);
  });
}

var GABLOTka_EMPTY_MSG = 'Osi\u0105gni\u0119cia pojawi\u0105 si\u0119 wraz z kolejnymi modu\u0142ami';
var LESSON_UNAVAILABLE_MSG = 'Ta lekcja nie jest ju\u017c dost\u0119pna w g\u0142\u00f3wnej \u015bcie\u017cce.';

/** Podgląd QA Gablotki — tylko w pamięci sesji, bez zapisu do localStorage */
var gablotkaQaPreview = null; /* null | 'earned' | 'locked' | 'empty' */

function formatBadgeDate(iso){
  if (!iso) return '';
  try {
    var d = new Date(iso);
    if (isNaN(d.getTime())) return '';
    return d.toLocaleDateString('pl-PL', { day: 'numeric', month: 'long', year: 'numeric' });
  } catch (e){
    return '';
  }
}

function getGablotkaListOptions(){
  if (gablotkaQaPreview === 'earned') return { forceStatus: 'earned' };
  if (gablotkaQaPreview === 'locked') return { forceStatus: 'locked' };
  return {};
}

function isGablotkaEmptyView(state){
  if (gablotkaQaPreview === 'empty') return true;
  if (gablotkaQaPreview === 'earned') return false;
  if (!window.BadgesCatalog) return true;
  return window.BadgesCatalog.countEarned(state, getGablotkaListOptions()) === 0;
}

function findFirstAvailableLessonId(){
  var helpers = window.LessonsCatalogHelpers;
  var catalog = window.LessonsCatalog || [];
  if (helpers && helpers.getModuleIds){
    var modules = helpers.getModuleIds();
    for (var m = 0; m < modules.length; m++){
      var next = helpers.getNextAvailable(modules[m]);
      if (next) return next.id;
    }
  }
  for (var i = 0; i < catalog.length; i++){
    var entry = catalog[i];
    var status = helpers ? helpers.getStatus(entry) : 'available';
    if (status === 'available') return entry.id;
  }
  return catalog[0] ? catalog[0].id : null;
}

function badgeSymbolHtml(symbolKey){
  var map = window.BadgesCatalog && window.BadgesCatalog.SYMBOLS;
  return (map && map[symbolKey]) || (map && map.medal) || '';
}

function openBadgeModal(view){
  var modal = document.getElementById('badgeModal');
  if (!modal || !view || !view.badge) return;
  var b = view.badge;
  var sym = document.getElementById('badgeModalSymbol');
  if (sym){
    sym.className = 'badge-modal-symbol accent-' + (b.accent || 'coral') + (view.earned ? ' is-earned' : ' is-locked');
    sym.innerHTML = badgeSymbolHtml(b.symbol);
  }
  var title = document.getElementById('badgeModalTitle');
  if (title) title.textContent = b.name;
  var status = document.getElementById('badgeModalStatus');
  if (status){
    status.textContent = view.earned ? 'Zdobyta' : 'Jeszcze niezdobyta';
    status.className = 'badge-modal-status' + (view.earned ? ' is-earned' : '');
  }
  var desc = document.getElementById('badgeModalDesc');
  if (desc) desc.textContent = b.description || '';
  var cond = document.getElementById('badgeModalCond');
  if (cond) cond.textContent = 'Warunek: ' + (b.conditionLabel || '');
  var dateEl = document.getElementById('badgeModalDate');
  if (dateEl){
    var formatted = formatBadgeDate(view.earnedAt);
    if (view.earned && formatted){
      dateEl.hidden = false;
      dateEl.textContent = 'Zdobyta: ' + formatted;
    } else {
      dateEl.hidden = true;
      dateEl.textContent = '';
    }
  }
  modal.hidden = false;
  modal.classList.toggle('badge-modal--earned', !!view.earned);
}

function closeBadgeModal(){
  var modal = document.getElementById('badgeModal');
  if (modal) modal.hidden = true;
}

function renderHomeGabBadges(){
  var wrap = document.getElementById('homeGabBadges');
  if (!wrap) return;
  wrap.textContent = '';
  var state = getState();
  var earnedViews = window.BadgesCatalog
    ? window.BadgesCatalog.listBadgeViews(state).filter(function(v){ return v.earned; }).slice(0, 4)
    : [];

  if (!earnedViews.length){
    var empty = document.createElement('div');
    empty.className = 'b gab-empty-icon';
    empty.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8" fill="none" stroke="#B9AEC4" stroke-width="2" stroke-dasharray="3 3"/></svg>';
    wrap.appendChild(empty);
    return;
  }

  earnedViews.forEach(function(v, i){
    var disc = document.createElement('div');
    disc.className = 'b gab-badge-mini accent-' + (v.badge.accent || 'coral');
    disc.style.zIndex = String(10 - i);
    disc.innerHTML = badgeSymbolHtml(v.badge.symbol);
    disc.setAttribute('title', v.badge.name);
    wrap.appendChild(disc);
  });
}

function appendStatCard(grid, label, value){
  var card = document.createElement('div');
  card.className = 'gab-stat';
  var lab = document.createElement('div');
  lab.className = 'gab-stat-label';
  lab.textContent = label;
  var val = document.createElement('div');
  val.className = 'gab-stat-value';
  val.textContent = value;
  card.appendChild(lab);
  card.appendChild(val);
  grid.appendChild(card);
}

function renderGablotkaEmpty(host){
  var box = document.createElement('div');
  box.className = 'gab-empty editorial-grain';
  var h = document.createElement('h3');
  h.textContent = 'Gablotka czeka na pierwszy eksponat';
  var p = document.createElement('p');
  p.textContent = 'Ukończ pierwszą lekcję, a pojawi się tutaj coś znacznie ciekawszego niż kurz.';
  var btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'btn btn-primary';
  btn.textContent = 'Przejdź do nauki';
  btn.addEventListener('click', function(){
    var id = findFirstAvailableLessonId();
    if (id) window.AppShell.startLesson(id);
    else window.AppShell.goHome();
  });
  box.appendChild(h);
  box.appendChild(p);
  box.appendChild(btn);
  host.appendChild(box);
}

function renderBadgeCard(view){
  var b = view.badge;
  var card = document.createElement('button');
  card.type = 'button';
  card.className = 'gab-badge-card' + (view.earned ? ' is-earned' : ' is-locked') + ' accent-' + (b.accent || 'coral');
  card.setAttribute('aria-label', b.name + (view.earned ? ', zdobyta' : ', niezdobyta'));

  var media = document.createElement('div');
  media.className = 'gab-badge-media';
  media.innerHTML = badgeSymbolHtml(b.symbol);
  media.setAttribute('aria-hidden', 'true');

  var body = document.createElement('div');
  body.className = 'gab-badge-body';
  var name = document.createElement('div');
  name.className = 'gab-badge-name';
  name.textContent = b.name;
  var desc = document.createElement('div');
  desc.className = 'gab-badge-desc';
  desc.textContent = view.earned ? (b.description || '') : (b.conditionLabel || '');
  body.appendChild(name);
  body.appendChild(desc);

  if (view.earned){
    var tag = document.createElement('span');
    tag.className = 'gab-badge-tag';
    tag.textContent = 'Zdobyta';
    card.appendChild(tag);
  }

  card.appendChild(media);
  card.appendChild(body);
  card.addEventListener('click', function(){ openBadgeModal(view); });
  return card;
}

function renderGablotkaAdminQa(host){
  if (!(window.AdminMode && window.AdminMode.isActive())) return;
  var sec = document.createElement('section');
  sec.className = 'gab-section gab-qa';
  sec.setAttribute('aria-label', 'QA Gablotki');
  var h = document.createElement('h3');
  h.textContent = 'QA — podgląd Gablotki';
  var note = document.createElement('p');
  note.className = 'gab-qa-note';
  note.textContent = 'Podgląd tymczasowy — bez zapisu odznak, Kosmyków ani postępu.';
  var actions = document.createElement('div');
  actions.className = 'gab-qa-actions';

  function makeBtn(label, mode){
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'btn btn-ghost gab-qa-btn' + (gablotkaQaPreview === mode ? ' is-active' : '');
    btn.textContent = label;
    btn.addEventListener('click', function(){
      gablotkaQaPreview = mode;
      renderGablotkaCollection();
    });
    return btn;
  }

  actions.appendChild(makeBtn('Rzeczywisty stan', null));
  actions.appendChild(makeBtn('Podgląd: zdobyte', 'earned'));
  actions.appendChild(makeBtn('Podgląd: niezdobyte', 'locked'));
  actions.appendChild(makeBtn('Podgląd: pusta', 'empty'));

  sec.appendChild(h);
  sec.appendChild(note);
  sec.appendChild(actions);

  if (window.BadgesCatalog){
    var list = document.createElement('ul');
    list.className = 'gab-qa-list';
    window.BadgesCatalog.listBadgeViews(getState()).forEach(function(v){
      var li = document.createElement('li');
      li.textContent = v.badge.name + ' — ' + (v.earned ? 'zdobyta' : 'niezdobyta') + ' · ' + v.badge.conditionLabel;
      list.appendChild(li);
    });
    sec.appendChild(list);
  }

  host.appendChild(sec);
}

function renderGablotkaCollection(){
  var host = document.getElementById('gablotkaBody');
  if (!host) return;
  host.textContent = '';
  var state = getState();
  var opts = getGablotkaListOptions();

  if (!window.BadgesCatalog){
    var fallback = document.createElement('div');
    fallback.className = 'gab-empty-state';
    fallback.textContent = GABLOTka_EMPTY_MSG;
    host.appendChild(fallback);
    return;
  }

  renderGablotkaAdminQa(host);

  if (isGablotkaEmptyView(state)){
    renderGablotkaEmpty(host);
    return;
  }

  /* A. Podsumowanie */
  var sumSec = document.createElement('section');
  sumSec.className = 'gab-section';
  sumSec.setAttribute('aria-labelledby', 'gabSumTitle');
  var sumTitle = document.createElement('h3');
  sumTitle.id = 'gabSumTitle';
  sumTitle.textContent = 'Podsumowanie';
  sumSec.appendChild(sumTitle);

  var grid = document.createElement('div');
  grid.className = 'gab-stats';
  var completedCount = Object.keys(state.completedLessons || {}).filter(function(k){
    return !!state.completedLessons[k];
  }).length;
  var earnedCount = window.BadgesCatalog.countEarned(state, opts);
  var stats = state.stats || {};

  appendStatCard(grid, 'Ukończone lekcje', String(completedCount));
  appendStatCard(grid, 'Zdobyte odznaki', String(earnedCount));
  appendStatCard(grid, 'Seria', (state.user.streakDays || 0) + ' dni');
  appendStatCard(grid, 'Kosmyki', formatKosmyki(state.user.kosmyki));
  if (typeof stats.bestScorePct === 'number'){
    appendStatCard(grid, 'Najlepszy wynik', stats.bestScorePct + '%');
  }
  if (typeof stats.perfectLessons === 'number'){
    appendStatCard(grid, 'Bez błędu', String(stats.perfectLessons));
  }
  sumSec.appendChild(grid);
  host.appendChild(sumSec);

  /* B. Kolekcje i odznaki */
  var colSec = document.createElement('section');
  colSec.className = 'gab-section';
  colSec.setAttribute('aria-labelledby', 'gabColTitle');
  var colTitle = document.createElement('h3');
  colTitle.id = 'gabColTitle';
  colTitle.textContent = 'Kolekcje i odznaki';
  colSec.appendChild(colTitle);

  window.BadgesCatalog.listCollectionViews(state, opts).forEach(function(colView){
    var block = document.createElement('div');
    block.className = 'gab-collection-block' + (colView.complete ? ' is-complete' : '');

    var head = document.createElement('div');
    head.className = 'gab-collection-head';
    var cname = document.createElement('h4');
    cname.textContent = colView.collection.name;
    var ccount = document.createElement('span');
    ccount.className = 'gab-collection-count';
    ccount.textContent = colView.complete
      ? 'Kolekcja ukończona'
      : (colView.earnedCount + ' z ' + colView.total + ' zdobytych');
    head.appendChild(cname);
    head.appendChild(ccount);
    block.appendChild(head);

    var barWrap = document.createElement('div');
    barWrap.className = 'gab-collection-bar';
    var bar = document.createElement('i');
    var pct = colView.total ? Math.round(colView.earnedCount / colView.total * 100) : 0;
    bar.style.width = pct + '%';
    barWrap.appendChild(bar);
    block.appendChild(barWrap);

    var gridB = document.createElement('div');
    gridB.className = 'gab-badge-grid';
    colView.badges.forEach(function(v){
      gridB.appendChild(renderBadgeCard(v));
    });
    block.appendChild(gridB);
    colSec.appendChild(block);
  });
  host.appendChild(colSec);

  /* C. Najbliższe osiągnięcia */
  if (gablotkaQaPreview !== 'earned'){
    var goals = window.BadgesCatalog.listNearestGoals(state, 3);
    if (goals.length){
      var goalSec = document.createElement('section');
      goalSec.className = 'gab-section';
      goalSec.setAttribute('aria-labelledby', 'gabGoalTitle');
      var goalTitle = document.createElement('h3');
      goalTitle.id = 'gabGoalTitle';
      goalTitle.textContent = 'Najbliższe osiągnięcia';
      goalSec.appendChild(goalTitle);
      var ul = document.createElement('ul');
      ul.className = 'gab-goals';
      goals.forEach(function(g){
        var li = document.createElement('li');
        li.className = 'gab-goal';
        var sym = document.createElement('span');
        sym.className = 'gab-goal-sym accent-' + (g.badge.accent || 'coral');
        sym.innerHTML = badgeSymbolHtml(g.badge.symbol);
        var txt = document.createElement('div');
        txt.className = 'gab-goal-txt';
        var t = document.createElement('div');
        t.className = 'gab-goal-name';
        t.textContent = g.badge.name;
        var h = document.createElement('div');
        h.className = 'gab-goal-hint';
        h.textContent = g.hint;
        txt.appendChild(t);
        txt.appendChild(h);
        li.appendChild(sym);
        li.appendChild(txt);
        ul.appendChild(li);
      });
      goalSec.appendChild(ul);
      host.appendChild(goalSec);
    }
  }
}

function showHomeNotice(message){
  var el = document.getElementById('homeNotice');
  if (!el) return;
  el.textContent = message;
  el.hidden = false;
  clearTimeout(showHomeNotice._timer);
  showHomeNotice._timer = setTimeout(function(){
    el.hidden = true;
  }, 6000);
}

function renderModuleHero(moduleId, section){
  var helpers = window.LessonsCatalogHelpers;
  if (!helpers || !section) return;

  var hero = section.querySelector('.home-module-hero');
  var eyebrow = section.querySelector('.home-module-eyebrow');
  var title = section.querySelector('.home-module-title');
  var meta = section.querySelector('.home-module-meta');
  var bar = section.querySelector('.home-module-bar');
  var btn = section.querySelector('.home-module-start');
  if (!hero || !btn) return;

  var moduleMeta = helpers.getModuleMeta(moduleId);
  var progress = helpers.getModuleProgress(moduleId);
  var next = helpers.getNextAvailable(moduleId);

  if (title) title.textContent = moduleMeta.title;
  var motifEl = section.querySelector('.module-motif');
  if (motifEl && window.UIEffects && window.UIEffects.getMotifSvg){
    motifEl.innerHTML = window.UIEffects.getMotifSvg(moduleId);
  }
  var head = section.querySelector('.home-module-lessons-head');
  if (head) head.textContent = moduleMeta.title + ' \u00b7 ' + moduleMeta.subtitle;

  var pct = progress.total ? Math.round(progress.completed / progress.total * 100) : 0;
  if (bar) bar.style.width = pct + '%';
  var progLabel = section.querySelector('.home-module-progress-label');
  if (progLabel){
    progLabel.textContent = progress.completed + ' / ' + progress.total + ' lekcji w module';
  }
  if (hero){
    hero.classList.toggle('continue-card--ph', moduleId === 'ph');
    hero.classList.toggle('continue-card--hair', moduleId === 'wlos-kolor');
    hero.classList.toggle('continue-card--numeracja', moduleId === 'numeracja-farb');
  }

  if (next){
    if (eyebrow) eyebrow.textContent = progress.completed > 0 ? 'Kontynuuj nauk\u0119' : 'Zacznij nauk\u0119';
    if (meta) meta.textContent = moduleMeta.subtitle + ' \u00b7 ' + next.title;
    btn.textContent = progress.completed > 0 ? 'Kontynuuj nauk\u0119' : 'Zacznij nauk\u0119';
    btn.disabled = false;
    btn.setAttribute('data-lesson-id', next.id);
  } else if (helpers.areAllComplete(moduleId)){
    if (eyebrow) eyebrow.textContent = 'Modu\u0142 uko\u0144czony';
    if (meta) meta.textContent = moduleMeta.subtitle + ' \u00b7 ' + progress.total + ' lekcji';
    btn.textContent = 'Powt\u00f3rz lekcj\u0119';
    btn.disabled = false;
    var lessons = helpers.getLessonsForModule(moduleId);
    if (lessons[0]) btn.setAttribute('data-lesson-id', lessons[0].id);
  } else {
    if (eyebrow) eyebrow.textContent = moduleMeta.title;
    if (meta) meta.textContent = moduleMeta.subtitle;
    btn.textContent = 'Wkr\u00f3tce';
    btn.disabled = true;
    btn.removeAttribute('data-lesson-id');
  }
}

function renderHomeModules(){
  var host = document.getElementById('homeModules');
  var helpers = window.LessonsCatalogHelpers;
  if (!host || !helpers || !helpers.getModuleIds) return;
  host.textContent = '';

  helpers.getModuleIds().forEach(function(moduleId){
    var section = document.createElement('section');
    section.className = 'home-module';
    section.dataset.moduleId = moduleId;

    var hero = document.createElement('div');
    hero.className = 'hero home-module-hero continue-card';
    hero.dataset.moduleId = moduleId;
    hero.innerHTML =
      '<div class="continue-motif module-motif editorial-grain" aria-hidden="true"></div>' +
      '<div class="continue-surface editorial-grain">' +
        '<div class="eyebrow home-module-eyebrow"></div>' +
        '<h2 class="home-module-title"></h2>' +
        '<div class="meta home-module-meta"></div>' +
        '<div class="home-module-progress"><span class="home-module-progress-label"></span><div class="hbar"><i class="home-module-bar" style="width:0%"></i></div></div>' +
        '<button class="cta home-module-start" type="button">' +
          'Zacznij nauk\u0119' +
          '<svg width="18" height="14" viewBox="0 0 18 14"><path d="M1 7h14M11 2l5 5-5 5" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>' +
        '</button>' +
      '</div>';
    section.appendChild(hero);

    var head = document.createElement('div');
    head.className = 'sec-head';
    var h3 = document.createElement('h3');
    h3.className = 'home-module-lessons-head';
    head.appendChild(h3);
    section.appendChild(head);

    var lessonsNote = document.createElement('p');
    lessonsNote.className = 'home-lessons-note';
    lessonsNote.textContent = 'Lekcje odblokowuj\u0105 si\u0119 kolejno.';
    section.appendChild(lessonsNote);

    var lessons = document.createElement('div');
    lessons.className = 'home-lessons home-module-lessons';
    section.appendChild(lessons);

    host.appendChild(section);

    hero.querySelector('.home-module-start').addEventListener('click', function(){
      var id = this.getAttribute('data-lesson-id');
      if (id) window.AppShell.startLesson(id);
    });

    renderModuleHero(moduleId, section);
    renderHomeLessons(moduleId, lessons);
  });
}

function renderHomeHero(){
  renderHomeModules();
}

function renderCourseProgress(){
  var catalog = window.LessonsCatalog || [];
  var completed = getState().completedLessons;
  var total = catalog.length;
  var done = 0;
  for (var i = 0; i < catalog.length; i++){
    if (completed[catalog[i].id]) done++;
  }
  var track = document.getElementById('homeCourseTrack');
  var valEl = document.getElementById('homeCourseVal');
  var footEl = document.getElementById('homeCourseFoot');
  if (!track || !valEl || !footEl) return;

  track.textContent = '';
  var segs = 10;
  var filled = total ? Math.round(done / total * segs) : 0;
  for (var s = 0; s < segs; s++){
    var seg = document.createElement('span');
    var cls = 'course-seg';
    if (s < filled) cls += ' is-filled';
    else if (s === filled && done < total) cls += ' is-current';
    seg.className = cls;
    seg.setAttribute('aria-hidden', 'true');
    track.appendChild(seg);
  }

  track.setAttribute('aria-label', done + ' z ' + total + ' dostępnych lekcji');
  if (total > 0){
    valEl.textContent = done + ' z ' + total + ' dostępnych lekcji';
  } else {
    valEl.textContent = 'Brak dostępnych lekcji';
  }

  if (total === 0){
    footEl.textContent = 'Lekcje pojawią się tutaj wraz z rozwojem kursu.';
  } else if (done >= total){
    footEl.textContent = 'Ukończono wszystkie dostępne lekcje. Kolejne etapy będą pojawiać się tutaj wraz z rozwojem kursu.';
  } else {
    footEl.textContent = 'Każda lekcja przybliża Cię do kolejnej Fali.';
  }
}

function prefersReducedMotion(){
  return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function playStreakTodayEnter(){
  var today = document.querySelector('#homeStreakDays .streak-day.is-today');
  if (!today || prefersReducedMotion()) return;
  today.classList.remove('is-today-enter');
  void today.offsetWidth;
  today.classList.add('is-today-enter');
  setTimeout(function(){
    today.classList.remove('is-today-enter');
  }, 480);
}

function renderStreakVisual(days){
  var host = document.getElementById('homeStreakDays');
  var bar = document.getElementById('homeStreakBar');
  var foot = document.getElementById('homeStreakFoot');
  var card = document.getElementById('homeStreakCard');
  if (!host) return;

  host.textContent = '';
  var week = Math.min(Math.max(days, 0), 7);
  for (var d = 1; d <= 7; d++){
    var day = document.createElement('span');
    day.className = 'streak-day';
    if (d <= week) day.classList.add('is-on');
    if (d === week && week > 0) day.classList.add('is-today');
    day.setAttribute('aria-hidden', 'true');
    host.appendChild(day);
  }

  if (host){
    host.setAttribute('aria-label', week > 0
      ? 'Aktywne dni serii: ' + week + ' z 7'
      : 'Brak aktywnych dni w serii');
  }

  if (bar){
    var pct = Math.min(100, Math.round(week / 7 * 100));
    bar.style.width = pct + '%';
  }
  if (foot){
    foot.textContent = week > 0
      ? 'Zrób dziś jedną lekcję.'
      : 'Zacznij serię — ukończ lekcję dziś';
  }
  if (card){
    card.setAttribute('aria-label', 'Seria: ' + days + ' dni');
  }
}

function refreshUI(){
  var state = getState();
  var user = state.user;

  var kosEl = document.getElementById('homeKosmyki');
  if (kosEl) kosEl.textContent = formatKosmyki(user.kosmyki);
  var kosPill = document.querySelector('.kosmyk-pill');
  if (kosPill) kosPill.setAttribute('aria-label', 'Kosmyki: ' + formatKosmyki(user.kosmyki));

  var labelEls = [document.getElementById('homeUserLabel'), document.getElementById('profileName')];
  labelEls.forEach(function(el){ if (el) el.textContent = getDisplayLabel(user.label); });

  var falaText = 'Fala ' + user.fala;
  var falaPct = Math.round(user.falaProgress.current / user.falaProgress.goal * 100);
  var falaFoot = user.falaProgress.current + ' / ' + user.falaProgress.goal + ' do Fali ' + (user.fala + 1);

  ['homeFala', 'profileFala'].forEach(function(id){
    var el = document.getElementById(id);
    if (el) el.textContent = falaText;
  });
  ['homeFalaBar', 'profileFalaBar'].forEach(function(id){
    var el = document.getElementById(id);
    if (el) el.style.width = falaPct + '%';
  });
  ['homeFalaFoot', 'profileFalaFoot'].forEach(function(id){
    var el = document.getElementById(id);
    if (el) el.textContent = falaFoot;
  });

  var streakText = user.streakDays + ' ';
  ['homeStreak', 'profileStreak'].forEach(function(id){
    var el = document.getElementById(id);
    if (el) el.innerHTML = streakText + '<small>dni</small>';
  });
  renderStreakVisual(user.streakDays);

  var profileMeta = document.getElementById('profileMeta');
  if (profileMeta) profileMeta.textContent = falaText + ' · ' + formatKosmyki(user.kosmyki) + ' Kosmyków';

  var profileKos = document.getElementById('profileKosmyki');
  if (profileKos) profileKos.textContent = formatKosmyki(user.kosmyki);
  var profileStreakFoot = document.getElementById('profileStreakFoot');
  if (profileStreakFoot){
    profileStreakFoot.textContent = user.streakDays > 0
      ? 'Zrób dziś jedną lekcję.'
      : 'Zacznij serię — ukończ lekcję dziś';
  }
  var profileRhythm = document.getElementById('profileRhythmVal');
  if (profileRhythm){
    var completedCount = Object.keys(state.completedLessons || {}).length;
    profileRhythm.textContent = completedCount > 0
      ? completedCount + ' ukończonych lekcji · seria ' + user.streakDays + ' dni'
      : 'Ukończ pierwszą lekcję, aby zobaczyć swój rytm';
  }
  var profileLevelLabel = document.getElementById('profileLevelLabel');
  if (profileLevelLabel) profileLevelLabel.textContent = 'TWÓJ POZIOM';
  var profileStreakLabel = document.getElementById('profileStreakLabel');
  if (profileStreakLabel) profileStreakLabel.textContent = 'UTRZYMAJ SERIĘ';

  var earnedForHome = window.BadgesCatalog ? window.BadgesCatalog.countEarned(state) : 0;
  var gabCount = document.getElementById('homeGabCount');
  if (gabCount) gabCount.textContent = 'Gablotka';

  var gabHint = document.getElementById('homeGabHint');
  if (gabHint){
    gabHint.textContent = earnedForHome > 0
      ? (earnedForHome + (earnedForHome === 1 ? ' odznaka' : ' odznaki') + ' w kolekcji')
      : GABLOTka_EMPTY_MSG;
  }

  renderHomeHero();
  renderHomeGabBadges();
  renderGablotkaCollection();
  renderCourseProgress();
  syncProfileAccountUi();
  syncProfileAdminUi();
}

function setNavActive(view){
  var items = document.querySelectorAll('#shellNav .nav-item');
  items.forEach(function(item){
    var nav = item.getAttribute('data-nav');
    var on = (view === 'home' && nav === 'home') ||
             (view === 'gablotka' && nav === 'home') ||
             (view === 'profile' && nav === 'profile');
    item.classList.toggle('active', on);
  });
}

function showView(name){
  if (VIEWS.indexOf(name) === -1) return;
  currentView = name;

  VIEWS.forEach(function(v){
    var el = document.getElementById('view-' + v);
    if (el) el.classList.toggle('active', v === name);
  });

  var screen = document.getElementById('screen');
  var nav = document.getElementById('shellNav');
  var isLesson = name === 'lesson';

  if (screen){
    screen.classList.toggle('screen-lesson', isLesson);
    screen.classList.toggle('screen-shell', !isLesson);
  }
  if (nav) nav.hidden = isLesson;

  if (window.AdminMode && window.AdminMode.onLessonViewChange){
    window.AdminMode.onLessonViewChange(isLesson);
  }
  if (isLesson && window.AdminMode && window.AdminMode.ensurePanel){
    window.AdminMode.ensurePanel();
  }

  setNavActive(name);
  refreshUI();
  if (name === 'home'){
    playStreakTodayEnter();
  }
}

function syncProfileAdminUi(){
  var toggle = document.getElementById('profileAdminToggle');
  var section = document.getElementById('profileAdminSection');
  var active = window.AdminMode && window.AdminMode.isActive();
  var showGate = window.AdminMode && (
    active ||
    (window.AdminMode.isUnlocked && window.AdminMode.isUnlocked()) ||
    (window.AdminMode.wantsFromUrl && window.AdminMode.wantsFromUrl())
  );
  if (section) section.hidden = !showGate;
  if (!toggle) return;
  toggle.textContent = active ? 'Wyłącz tryb administratora' : 'Włącz tryb administratora';
  toggle.classList.toggle('is-admin-on', !!active);
  var usersBtn = document.getElementById('profileAdminUsers');
  if (usersBtn) usersBtn.hidden = !active;
}

function syncProfileAccountUi(){
  var meta = document.getElementById('profileAccountMeta');
  var openBtn = document.getElementById('profileAuthOpen');
  var logoutBtn = document.getElementById('profileLogout');
  if (!meta) return;
  var user = window.Auth && window.Auth.currentUser ? window.Auth.currentUser() : null;
  if (user){
    meta.textContent = user.displayName + ' · ' + user.email;
    if (openBtn) openBtn.hidden = true;
    if (logoutBtn) logoutBtn.hidden = false;
  } else if (window.Auth && window.Auth.isGuestMode && window.Auth.isGuestMode()){
    meta.textContent = 'Tryb gościa — postęp tylko na tym urządzeniu.';
    if (openBtn){ openBtn.hidden = false; openBtn.textContent = 'Zaloguj / Załóż konto'; }
    if (logoutBtn) logoutBtn.hidden = true;
  } else {
    meta.textContent = 'Nie jesteś zalogowana.';
    if (openBtn){ openBtn.hidden = false; openBtn.textContent = 'Zaloguj / Załóż konto'; }
    if (logoutBtn) logoutBtn.hidden = true;
  }
}

function setAuthTab(tab){
  var isLogin = tab === 'login';
  var isReg = tab === 'register';
  var isVerify = tab === 'verify';
  var isReset = tab === 'reset';
  var tabLogin = document.getElementById('authTabLogin');
  var tabReg = document.getElementById('authTabRegister');
  var panelLogin = document.getElementById('authPanelLogin');
  var panelReg = document.getElementById('authPanelRegister');
  var panelVerify = document.getElementById('authPanelVerify');
  var panelReset = document.getElementById('authPanelReset');
  if (tabLogin){
    tabLogin.classList.toggle('is-active', isLogin);
    tabLogin.hidden = isVerify || isReset;
  }
  if (tabReg){
    tabReg.classList.toggle('is-active', isReg);
    tabReg.hidden = isVerify || isReset;
  }
  var tabs = document.querySelector('.auth-tabs');
  if (tabs) tabs.hidden = isVerify || isReset;
  if (panelLogin) panelLogin.hidden = !isLogin;
  if (panelReg) panelReg.hidden = !isReg;
  if (panelVerify) panelVerify.hidden = !isVerify;
  if (panelReset) panelReset.hidden = !isReset;
}

function showVerifyPanel(opts){
  opts = opts || {};
  setAuthTab('verify');
  var emailEl = document.getElementById('authVerifyEmail');
  var codeEl = document.getElementById('authVerifyCode');
  var box = document.getElementById('authVerifyCodeBox');
  var codeVal = document.getElementById('authVerifyCodeValue');
  var err = document.getElementById('authVerifyError');
  if (err) err.textContent = '';
  if (emailEl && opts.email) emailEl.value = opts.email;
  if (codeEl) codeEl.value = '';
  if (opts.verificationCode && codeVal && box){
    codeVal.textContent = opts.verificationCode;
    box.hidden = false;
  } else if (box && !opts.keepCodeVisible){
    box.hidden = true;
  }
}

function showResetPanel(opts){
  opts = opts || {};
  setAuthTab('reset');
  var emailEl = document.getElementById('authResetEmail');
  var err = document.getElementById('authResetError');
  var stepReq = document.getElementById('authResetStepRequest');
  var stepConf = document.getElementById('authResetStepConfirm');
  var box = document.getElementById('authResetCodeBox');
  if (err) err.textContent = '';
  if (emailEl && opts.email) emailEl.value = opts.email;
  if (stepReq) stepReq.hidden = false;
  if (stepConf) stepConf.hidden = true;
  if (box) box.hidden = true;
}

function bindPasswordPeek(root){
  var scope = root || document;
  scope.querySelectorAll('.auth-peek-btn').forEach(function(btn){
    if (btn.dataset.peekBound === '1') return;
    btn.dataset.peekBound = '1';
    btn.addEventListener('click', function(){
      var id = btn.getAttribute('data-peek-for');
      var input = id ? document.getElementById(id) : null;
      if (!input) return;
      var show = input.type === 'password';
      input.type = show ? 'text' : 'password';
      btn.textContent = show ? 'Ukryj' : 'Pokaż';
      btn.setAttribute('aria-label', show ? 'Ukryj hasło' : 'Pokaż hasło');
    });
  });
}

function showAuthGate(force){
  var gate = document.getElementById('authGate');
  if (!gate) return;
  if (!force && window.Auth && !window.Auth.needsAuthGate()){
    gate.hidden = true;
    return;
  }
  gate.hidden = false;
  setAuthTab('login');
}

function hideAuthGate(){
  var gate = document.getElementById('authGate');
  if (gate) gate.hidden = true;
}

function afterAuthSuccess(){
  hideAuthGate();
  /* Auth nie wyłącza admina — odblokowana sesja admina nadal obowiązuje po logowaniu. */
  if (window.AdminMode && window.AdminMode.syncFromUrl){
    window.AdminMode.syncFromUrl();
  }
  syncProfileAdminUi();
  syncProfileAccountUi();
  refreshUI();
}

function bindAuthUi(){
  var gate = document.getElementById('authGate');
  if (!gate || gate.dataset.bound === '1') return;
  gate.dataset.bound = '1';

  bindPasswordPeek(gate);

  document.getElementById('authTabLogin').addEventListener('click', function(){ setAuthTab('login'); });
  document.getElementById('authTabRegister').addEventListener('click', function(){ setAuthTab('register'); });

  function onEnterSubmit(inputId, buttonId){
    var input = document.getElementById(inputId);
    var btn = document.getElementById(buttonId);
    if (!input || !btn) return;
    input.addEventListener('keydown', function(e){
      if (e.key === 'Enter'){
        e.preventDefault();
        btn.click();
      }
    });
  }
  onEnterSubmit('authLoginPassword', 'authLoginSubmit');
  onEnterSubmit('authRegPassword2', 'authRegisterSubmit');
  onEnterSubmit('authVerifyCode', 'authVerifySubmit');
  onEnterSubmit('authResetPassword2', 'authResetSubmit');

  document.getElementById('authLoginSubmit').addEventListener('click', function(){
    var err = document.getElementById('authLoginError');
    if (err) err.textContent = '';
    var email = document.getElementById('authLoginEmail').value;
    var pass = document.getElementById('authLoginPassword').value;
    window.Auth.login(email, pass).then(function(res){
      if (res.needsEmailVerification){
        if (err) err.textContent = (res.errors || []).join(' ');
        showVerifyPanel({ email: res.email || email });
        return;
      }
      if (!res.ok){
        if (err) err.textContent = (res.errors || []).join(' ');
        return;
      }
      afterAuthSuccess();
    });
  });

  document.getElementById('authRegisterSubmit').addEventListener('click', function(){
    var err = document.getElementById('authRegisterError');
    if (err) err.textContent = '';
    window.Auth.register({
      displayName: document.getElementById('authRegName').value,
      email: document.getElementById('authRegEmail').value,
      password: document.getElementById('authRegPassword').value,
      passwordConfirm: document.getElementById('authRegPassword2').value,
      consentPrivacy: document.getElementById('authConsentPrivacy').checked,
      consentTerms: document.getElementById('authConsentTerms').checked,
      consentAge: document.getElementById('authConsentAge').checked,
      consentMarketing: document.getElementById('authConsentMarketing').checked
    }).then(function(res){
      if (!res.ok){
        if (err) err.textContent = (res.errors || []).join(' ');
        return;
      }
      showVerifyPanel({
        email: (res.user && res.user.email) || document.getElementById('authRegEmail').value,
        verificationCode: res.verificationCode
      });
    });
  });

  document.getElementById('authVerifySubmit').addEventListener('click', function(){
    var err = document.getElementById('authVerifyError');
    if (err) err.textContent = '';
    var email = document.getElementById('authVerifyEmail').value;
    var code = document.getElementById('authVerifyCode').value;
    window.Auth.completeEmailVerification(email, code).then(function(res){
      if (!res.ok){
        if (err) err.textContent = (res.errors || []).join(' ');
        return;
      }
      afterAuthSuccess();
    });
  });

  document.getElementById('authVerifyResend').addEventListener('click', function(){
    var err = document.getElementById('authVerifyError');
    if (err) err.textContent = '';
    var email = document.getElementById('authVerifyEmail').value;
    window.Auth.resendVerificationCode(email).then(function(res){
      if (!res.ok){
        if (err) err.textContent = (res.errors || []).join(' ');
        return;
      }
      if (res.alreadyVerified){
        afterAuthSuccess();
        return;
      }
      showVerifyPanel({ email: email, verificationCode: res.verificationCode });
    });
  });

  document.getElementById('authVerifyBack').addEventListener('click', function(){
    setAuthTab('login');
  });

  document.getElementById('authForgotOpen').addEventListener('click', function(){
    var email = document.getElementById('authLoginEmail').value;
    showResetPanel({ email: email });
  });

  document.getElementById('authResetBack').addEventListener('click', function(){
    setAuthTab('login');
  });

  document.getElementById('authResetRequest').addEventListener('click', function(){
    var err = document.getElementById('authResetError');
    if (err) err.textContent = '';
    var email = document.getElementById('authResetEmail').value;
    window.Auth.requestPasswordReset(email).then(function(res){
      if (!res.ok){
        if (err) err.textContent = (res.errors || []).join(' ');
        return;
      }
      var stepReq = document.getElementById('authResetStepRequest');
      var stepConf = document.getElementById('authResetStepConfirm');
      var box = document.getElementById('authResetCodeBox');
      var codeVal = document.getElementById('authResetCodeValue');
      var codeInput = document.getElementById('authResetCode');
      if (stepReq) stepReq.hidden = true;
      if (stepConf) stepConf.hidden = false;
      if (codeVal && box){
        codeVal.textContent = res.resetCode;
        box.hidden = false;
      }
      if (codeInput) codeInput.value = res.resetCode || '';
    });
  });

  document.getElementById('authResetSubmit').addEventListener('click', function(){
    var err = document.getElementById('authResetError');
    if (err) err.textContent = '';
    window.Auth.resetPassword({
      email: document.getElementById('authResetEmail').value,
      code: document.getElementById('authResetCode').value,
      password: document.getElementById('authResetPassword').value,
      passwordConfirm: document.getElementById('authResetPassword2').value
    }).then(function(res){
      if (!res.ok){
        if (err) err.textContent = (res.errors || []).join(' ');
        return;
      }
      afterAuthSuccess();
    });
  });

  document.getElementById('authGuestBtn').addEventListener('click', function(){
    window.Auth.continueAsGuest();
    afterAuthSuccess();
  });

  var openBtn = document.getElementById('profileAuthOpen');
  if (openBtn){
    openBtn.addEventListener('click', function(){ showAuthGate(true); });
  }
  var logoutBtn = document.getElementById('profileLogout');
  if (logoutBtn){
    logoutBtn.addEventListener('click', function(){
      window.Auth.logout();
      window.Auth.continueAsGuest();
      syncProfileAccountUi();
      refreshUI();
      showAuthGate(true);
    });
  }
}

function renderAdminUsersList(){
  var list = document.getElementById('adminUsersList');
  var sheet = document.getElementById('adminUsersSheet');
  if (!list || !sheet) return;
  if (!(window.AdminMode && window.AdminMode.isActive())){
    sheet.hidden = true;
    return;
  }
  var users = window.Auth && window.Auth.listUsersForAdmin ? window.Auth.listUsersForAdmin() : [];
  if (!users.length){
    list.innerHTML = '<li><div class="u-name">Brak kont</div><div class="u-meta">Nikt jeszcze nie zarejestrował się na tym urządzeniu.</div></li>';
  } else {
    list.innerHTML = users.map(function(u){
      var cons = u.consents || {};
      return '<li>' +
        '<div class="u-name">' + escapeHtml(u.displayName || '—') + '</div>' +
        '<div class="u-meta">' + escapeHtml(u.email || '') + '</div>' +
        '<div class="u-meta">Kosmyki: ' + (u.kosmyki || 0) + ' · Lekcje: ' + (u.completedCount || 0) + '</div>' +
        '<div class="u-meta">Zgody: prywatność ' + (cons.privacy ? 'tak' : 'nie') +
          ', regulamin ' + (cons.terms ? 'tak' : 'nie') +
          ', marketing ' + (cons.marketing ? 'tak' : 'nie') + '</div>' +
        '<div class="u-meta">Utworzono: ' + escapeHtml(u.createdAt || '—') + '</div>' +
      '</li>';
    }).join('');
  }
  sheet.hidden = false;
}

function escapeHtml(s){
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function hideAdminUsersList(){
  var sheet = document.getElementById('adminUsersSheet');
  if (sheet) sheet.hidden = true;
}

function bindChrome(){
  if (chromeBound) return;
  chromeBound = true;

  document.getElementById('homeGablotkaBtn').addEventListener('click', function(){
    window.AppShell.goGablotka();
  });
  document.getElementById('homeAvatarBtn').addEventListener('click', function(){
    window.AppShell.goProfile();
  });

  document.querySelectorAll('#shellNav .nav-item').forEach(function(item){
    item.addEventListener('click', function(){
      if (item.disabled) return;
      var nav = item.getAttribute('data-nav');
      if (nav === 'home') window.AppShell.goHome();
      else if (nav === 'profile') window.AppShell.goProfile();
    });
  });

  var adminToggle = document.getElementById('profileAdminToggle');
  if (adminToggle){
    adminToggle.addEventListener('click', function(){
      if (!window.AdminMode) return;
      if (window.AdminMode.isActive()){
        window.AdminMode.disable();
        syncProfileAdminUi();
      } else {
        window.AdminMode.enable();
      }
    });
  }
  var adminUsersBtn = document.getElementById('profileAdminUsers');
  if (adminUsersBtn){
    adminUsersBtn.addEventListener('click', function(){
      renderAdminUsersList();
    });
  }
  var adminUsersClose = document.getElementById('adminUsersClose');
  if (adminUsersClose){
    adminUsersClose.addEventListener('click', hideAdminUsersList);
  }
  var resetBtn = document.getElementById('profileResetProgress');
  if (resetBtn){
    resetBtn.addEventListener('click', function(){
      if (!window.confirm('Zresetować postęp uczennicy (Kosmyki, ukończone lekcje, odznaki)?')) return;
      window.AppShell.resetProgress();
    });
  }

  document.getElementById('exitStayBtn').addEventListener('click', function(){
    window.AppShell.hideExitConfirm();
  });
  document.getElementById('exitLeaveBtn').addEventListener('click', function(){
    window.AppShell.confirmExit();
  });
  document.getElementById('exitModal').addEventListener('click', function(e){
    if (e.target === document.getElementById('exitModal')) window.AppShell.hideExitConfirm();
  });

  var badgeClose = document.getElementById('badgeModalClose');
  if (badgeClose) badgeClose.addEventListener('click', closeBadgeModal);
  var badgeModal = document.getElementById('badgeModal');
  if (badgeModal){
    badgeModal.addEventListener('click', function(e){
      if (e.target === badgeModal) closeBadgeModal();
    });
  }
  document.addEventListener('keydown', function(e){
    if (e.key === 'Escape'){
      closeBadgeModal();
      hideAdminUsersList();
    }
  });

  bindAuthUi();
  syncProfileAdminUi();
  syncProfileAccountUi();
  document.addEventListener('anf-admin-change', function(){
    syncProfileAdminUi();
  });
}

window.AppShell = {
  getUser: function(){ return getState().user; },
  getSession: function(){
    var s = getState();
    return {
      completedLessons: s.completedLessons,
      totalBadges: s.totalBadges,
      collections: s.collections
    };
  },

  goHome: function(){
    if (window.LessonEngine && window.LessonEngine.abort){
      window.LessonEngine.abort();
    }
    if (window.UIEffects && window.UIEffects.onReturnHome){
      window.UIEffects.onReturnHome();
    }
    showView('home');
  },

  goGablotka: function(){
    showView('gablotka');
  },

  goProfile: function(){
    showView('profile');
    syncProfileAdminUi();
  },

  startLesson: function(lessonId){
    var helpers = window.LessonsCatalogHelpers;
    var entry = helpers ? helpers.getEntry(lessonId) : null;
    if (!entry){
      this.onLessonUnavailable(LESSON_UNAVAILABLE_MSG);
      return;
    }
    if (helpers.isLocked(entry) && !(window.AdminMode && window.AdminMode.isActive())) return;
    showView('lesson');
    if (window.AdminMode && window.AdminMode.setPanelLoading){
      window.AdminMode.setPanelLoading(lessonId);
    }
    if (window.LessonEngine && window.LessonEngine.start){
      Promise.resolve(window.LessonEngine.start(lessonId)).catch(function(err){
        console.error('[Akademia Nowej Fali] startLesson failed', err);
      });
    } else {
      console.error('[Akademia Nowej Fali] LessonEngine niedostępny — nie można otworzyć lekcji.');
      var stage = document.getElementById('stage');
      if (stage){
        stage.textContent = '';
        var err = document.createElement('div');
        err.className = 'step fatal active';
        var icon = document.createElement('div');
        icon.className = 'fico';
        icon.textContent = '!';
        var h1 = document.createElement('h1');
        h1.textContent = 'Nie udało się otworzyć podglądu lekcji.';
        var p = document.createElement('p');
        p.textContent = 'Silnik lekcji nie załadował się. Odśwież stronę albo sprawdź konsolę JavaScript.';
        err.appendChild(icon);
        err.appendChild(h1);
        err.appendChild(p);
        stage.appendChild(err);
      }
      if (window.AdminMode && window.AdminMode.refreshPanel){
        window.AdminMode.refreshPanel({
          lessonId: lessonId,
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
  },

  onLessonUnavailable: function(message){
    if (window.LessonEngine && window.LessonEngine.abort){
      window.LessonEngine.abort();
    }
    showHomeNotice(message || LESSON_UNAVAILABLE_MSG);
    showView('home');
  },

  showExitConfirm: function(){
    var modal = document.getElementById('exitModal');
    if (modal) modal.hidden = false;
  },

  hideExitConfirm: function(){
    var modal = document.getElementById('exitModal');
    if (modal) modal.hidden = true;
  },

  confirmExit: function(){
    this.hideExitConfirm();
    if (window.LessonEngine && window.LessonEngine.abort){
      window.LessonEngine.abort();
    }
    this.goHome();
  },

  onLessonComplete: function(payload){
    if (window.AdminMode && window.AdminMode.isActive()) return;
    window.AppState.completeLesson(payload);
    if (window.UIEffects && window.UIEffects.afterLessonComplete){
      window.UIEffects.afterLessonComplete(payload.lessonId);
    }
    refreshUI();
  },

  resetProgress: function(){
    gablotkaQaPreview = null;
    window.AppState.resetProgress();
    refreshUI();
  },

  showAdminUsers: function(){
    if (!(window.AdminMode && window.AdminMode.isActive())) return;
    renderAdminUsersList();
  },

  refreshAdminChrome: function(){
    syncProfileAdminUi();
  },

  showAuth: function(){
    showAuthGate(true);
  }
};

document.addEventListener('DOMContentLoaded', function(){
  if (window.AdminMode && window.AdminMode.syncFromUrl){
    window.AdminMode.syncFromUrl();
  }
  bindChrome();
  if (window.AppState && window.AppState.syncAchievements){
    try { window.AppState.syncAchievements(); } catch (e){ /* ignore */ }
  }
  showAuthGate(false);
  var params = new URLSearchParams(window.location.search);
  var lessonParam = params.get('lesson');
  var adminDeepLink = lessonParam && window.AdminMode && window.AdminMode.isActive() && window.LessonEngine;
  if (adminDeepLink){
    window.AppShell.startLesson(lessonParam);
  } else {
    showView('home');
  }
});
