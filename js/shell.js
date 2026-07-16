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

  entries.forEach(function(entry){
    var status = helpers ? helpers.getStatus(entry) : 'locked';
    var tile = document.createElement('div');
    tile.className = 'mission lesson-tile';
    if (status === 'completed') tile.classList.add('is-completed');
    if (status === 'locked') tile.classList.add('is-locked');

    var ill = document.createElement('div');
    ill.className = 'ill';
    if (status === 'completed'){
      ill.innerHTML = '<svg width="26" height="26" viewBox="0 0 26 26"><circle cx="13" cy="13" r="11" fill="none" stroke="#5F7449" stroke-width="2"/><path d="M8 13l3 3 6-6" fill="none" stroke="#5F7449" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    } else if (status === 'locked'){
      ill.innerHTML = '<svg width="26" height="26" viewBox="0 0 26 26"><rect x="5" y="11" width="16" height="12" rx="2" fill="none" stroke="#B9AEC4" stroke-width="2"/><path d="M9 11V8a4 4 0 0 1 8 0v3" fill="none" stroke="#B9AEC4" stroke-width="2"/></svg>';
    } else {
      ill.innerHTML = '<svg width="26" height="26" viewBox="0 0 26 26"><rect x="9" y="3" width="8" height="13" rx="2.5" fill="#D86A3C"/><rect x="10.5" y="16" width="5" height="6" rx="1.5" fill="#C55B30"/></svg>';
    }

    var txt = document.createElement('div');
    txt.className = 'txt';
    var k = document.createElement('div');
    k.className = 'k';
    if (status === 'completed') k.textContent = 'Ukończona';
    else if (status === 'locked') k.textContent = 'Zablokowana';
    else k.textContent = 'Dostępna';

    var t = document.createElement('div');
    t.className = 't';
    t.textContent = entry.title;

    var r = document.createElement('div');
    r.className = 'r';
    if (status === 'completed'){
      r.textContent = entry.rewardLabel + ' · ukończono';
    } else if (status === 'locked'){
      r.textContent = entry.lockedReason || 'Wkrótce';
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
    } else {
      btn.textContent = entry.lockedReason || 'Wkrótce';
      btn.disabled = true;
    }

    tile.appendChild(ill);
    tile.appendChild(txt);
    tile.appendChild(btn);
    host.appendChild(tile);
  });
}

var GABLOTka_EMPTY_MSG = 'Osi\u0105gni\u0119cia pojawi\u0105 si\u0119 wraz z kolejnymi modu\u0142ami';
var LESSON_UNAVAILABLE_MSG = 'Ta lekcja nie jest ju\u017c dost\u0119pna w g\u0142\u00f3wnej \u015bcie\u017cce.';

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
  var head = section.querySelector('.home-module-lessons-head');
  if (head) head.textContent = moduleMeta.title + ' \u00b7 ' + moduleMeta.subtitle;

  var pct = progress.total ? Math.round(progress.completed / progress.total * 100) : 0;
  if (bar) bar.style.width = pct + '%';

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
    hero.className = 'hero home-module-hero';
    hero.innerHTML =
      '<div class="eyebrow home-module-eyebrow"></div>' +
      '<h2 class="home-module-title"></h2>' +
      '<div class="meta home-module-meta"></div>' +
      '<div class="hbar"><i class="home-module-bar" style="width:0%"></i></div>' +
      '<button class="cta home-module-start" type="button">' +
        'Zacznij nauk\u0119' +
        '<svg width="18" height="14" viewBox="0 0 18 14"><path d="M1 7h14M11 2l5 5-5 5" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>' +
      '</button>';
    section.appendChild(hero);

    var head = document.createElement('div');
    head.className = 'sec-head';
    var h3 = document.createElement('h3');
    h3.className = 'home-module-lessons-head';
    head.appendChild(h3);
    section.appendChild(head);

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

function renderHomeGabBadges(){
  var wrap = document.getElementById('homeGabBadges');
  if (!wrap) return;
  wrap.textContent = '';
  var empty = document.createElement('div');
  empty.className = 'b gab-empty-icon';
  empty.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8" fill="none" stroke="#B9AEC4" stroke-width="2" stroke-dasharray="3 3"/></svg>';
  wrap.appendChild(empty);
}

function renderGablotkaCollection(){
  var host = document.getElementById('gablotkaCollection');
  if (!host) return;
  host.textContent = '';
  var empty = document.createElement('div');
  empty.className = 'gab-empty-state';
  empty.textContent = GABLOTka_EMPTY_MSG;
  host.appendChild(empty);
}

function refreshUI(){
  var state = getState();
  var user = state.user;

  var kosEl = document.getElementById('homeKosmyki');
  if (kosEl) kosEl.textContent = formatKosmyki(user.kosmyki);

  var labelEls = [document.getElementById('homeUserLabel'), document.getElementById('profileName')];
  labelEls.forEach(function(el){ if (el) el.textContent = user.label; });

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

  var profileMeta = document.getElementById('profileMeta');
  if (profileMeta) profileMeta.textContent = falaText + ' · ' + formatKosmyki(user.kosmyki) + ' Kosmyków';

  var gabCount = document.getElementById('homeGabCount');
  if (gabCount) gabCount.textContent = 'Gablotka';

  var gabHint = document.getElementById('homeGabHint');
  if (gabHint) gabHint.textContent = GABLOTka_EMPTY_MSG;

  var gabTotalCard = document.getElementById('gablotkaTotalCard');
  if (gabTotalCard) gabTotalCard.hidden = true;

  renderHomeHero();
  renderHomeGabBadges();
  renderGablotkaCollection();
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

  setNavActive(name);
  refreshUI();
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

  document.getElementById('exitStayBtn').addEventListener('click', function(){
    window.AppShell.hideExitConfirm();
  });
  document.getElementById('exitLeaveBtn').addEventListener('click', function(){
    window.AppShell.confirmExit();
  });
  document.getElementById('exitModal').addEventListener('click', function(e){
    if (e.target === document.getElementById('exitModal')) window.AppShell.hideExitConfirm();
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
    showView('home');
  },

  goGablotka: function(){
    showView('gablotka');
  },

  goProfile: function(){
    showView('profile');
  },

  startLesson: function(lessonId){
    var helpers = window.LessonsCatalogHelpers;
    var entry = helpers ? helpers.getEntry(lessonId) : null;
    if (!entry){
      this.onLessonUnavailable(LESSON_UNAVAILABLE_MSG);
      return;
    }
    if (helpers.isLocked(entry)) return;
    showView('lesson');
    if (window.LessonEngine && window.LessonEngine.start){
      window.LessonEngine.start(lessonId);
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
    window.AppState.completeLesson(payload);
    refreshUI();
  },

  resetProgress: function(){
    window.AppState.resetProgress();
    refreshUI();
  }
};

document.addEventListener('DOMContentLoaded', function(){
  bindChrome();
  showView('home');
});
