/* ============================================================
   Akademia Nowej Fali — efekty wizualne nagród (bez logiki lekcji)
   ============================================================ */
'use strict';

var SPRING_MS = 780;

var EYE_BRAND_SRC = 'assets/images/eye-motif-brand.png';
var EYE_SVG =
  '<svg viewBox="0 0 80 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
    '<ellipse cx="40" cy="18" rx="28" ry="14" fill="#E8B23E" opacity="0.55"/>' +
    '<path d="M8 30 Q40 8 72 30 Q40 44 8 30Z" fill="#E8A8B8"/>' +
    '<ellipse cx="40" cy="28" rx="22" ry="12" fill="#FFFBF5"/>' +
    '<circle cx="40" cy="28" r="9" fill="#D97B94"/>' +
    '<circle cx="40" cy="28" r="4.5" fill="#1A2744"/>' +
    '<circle cx="43" cy="25" r="1.6" fill="#FFFBF5" opacity="0.7"/>' +
  '</svg>';

var KOSMYK_SVG =
  '<svg width="18" height="18" viewBox="0 0 20 20"><path d="M12 2 C7 5 6 9 8 13 C9 16 8 18 6 18 C10 18 13 15 12 11 C11.4 8.5 12.5 5.5 15 4 C14 3 13 2.4 12 2Z" fill="#E86A4A"/></svg>';

var MODULE_MOTIFS = {
  'ph':
    '<svg viewBox="0 0 120 120" fill="none" aria-hidden="true">' +
      '<circle cx="78" cy="36" r="34" fill="#E8B23E" opacity="0.28"/>' +
      '<path d="M60 18 C60 18 36 52 36 72 a24 24 0 0 0 48 0 C84 52 60 18 60 18Z" fill="#E86A4A" opacity="0.3"/>' +
      '<path d="M60 18 C60 18 36 52 36 72 a24 24 0 0 0 48 0 C84 52 60 18 60 18Z" stroke="#1A2744" stroke-width="2.2" fill="none" opacity="0.12"/>' +
    '</svg>',
  'wlos-kolor':
    '<svg viewBox="0 0 120 88" fill="none" aria-hidden="true">' +
      '<ellipse cx="72" cy="30" rx="34" ry="20" fill="#E8B23E" opacity="0.3"/>' +
      '<path d="M10 54 Q60 16 110 54" fill="#E8A8B8" opacity="0.4"/>' +
      '<ellipse cx="60" cy="54" rx="34" ry="18" fill="#FFFBF5" opacity="0.7"/>' +
      '<circle cx="60" cy="54" r="12" fill="#D97B94" opacity="0.85"/>' +
      '<circle cx="60" cy="54" r="6" fill="#1A2744"/>' +
    '</svg>',
  'wlos-ksztalt':
    '<svg viewBox="0 0 120 88" fill="none" aria-hidden="true">' +
      '<ellipse cx="72" cy="30" rx="34" ry="20" fill="#E8B23E" opacity="0.3"/>' +
      '<path d="M10 54 Q60 16 110 54" fill="#E8A8B8" opacity="0.4"/>' +
      '<ellipse cx="60" cy="54" rx="34" ry="18" fill="#FFFBF5" opacity="0.7"/>' +
      '<circle cx="60" cy="54" r="12" fill="#D97B94" opacity="0.85"/>' +
      '<circle cx="60" cy="54" r="6" fill="#1A2744"/>' +
    '</svg>',
  'wlos-teoria-koloru':
    '<svg viewBox="0 0 120 88" fill="none" aria-hidden="true">' +
      '<ellipse cx="72" cy="30" rx="34" ry="20" fill="#E8B23E" opacity="0.3"/>' +
      '<circle cx="60" cy="52" r="22" fill="#E8A8B8" opacity="0.45"/>' +
      '<circle cx="60" cy="52" r="12" fill="#E86A4A" opacity="0.55"/>' +
      '<circle cx="60" cy="52" r="5" fill="#1A2744"/>' +
    '</svg>',
  'trwala-procedura':
    '<svg viewBox="0 0 120 88" fill="none" aria-hidden="true">' +
      '<ellipse cx="78" cy="28" rx="28" ry="16" fill="#E8B23E" opacity="0.3"/>' +
      '<path d="M28 58 Q60 28 92 58" stroke="#D97B94" stroke-width="8" fill="none" opacity="0.5" stroke-linecap="round"/>' +
      '<circle cx="40" cy="58" r="7" fill="#E86A4A" opacity="0.7"/>' +
      '<circle cx="60" cy="52" r="7" fill="#E86A4A" opacity="0.7"/>' +
      '<circle cx="80" cy="58" r="7" fill="#E86A4A" opacity="0.7"/>' +
    '</svg>',
  'bhp-higiena-salonu':
    '<svg viewBox="0 0 120 88" fill="none" aria-hidden="true">' +
      '<ellipse cx="78" cy="28" rx="28" ry="16" fill="#E8B23E" opacity="0.3"/>' +
      '<path d="M60 18 C60 18 38 42 38 58 a22 22 0 0 0 44 0 C82 42 60 18 60 18Z" fill="#A6B58D" opacity="0.45"/>' +
      '<circle cx="60" cy="54" r="8" fill="#FFFBF5" opacity="0.7"/>' +
    '</svg>',
  'strzyzenie-narzedzia':
    '<svg viewBox="0 0 120 88" fill="none" aria-hidden="true">' +
      '<ellipse cx="78" cy="28" rx="28" ry="16" fill="#E8B23E" opacity="0.3"/>' +
      '<circle cx="40" cy="58" r="8" stroke="#1A2744" stroke-width="2.2" opacity="0.35" fill="none"/>' +
      '<circle cx="78" cy="58" r="8" stroke="#1A2744" stroke-width="2.2" opacity="0.35" fill="none"/>' +
      '<path d="M46 52 L74 40M70 64 L48 46" stroke="#E86A4A" stroke-width="3" stroke-linecap="round" opacity="0.7"/>' +
    '</svg>',
  'prostowanie-wlosow':
    '<svg viewBox="0 0 120 88" fill="none" aria-hidden="true">' +
      '<ellipse cx="78" cy="28" rx="28" ry="16" fill="#E8B23E" opacity="0.3"/>' +
      '<rect x="34" y="40" width="52" height="18" rx="6" fill="#A6B58D" opacity="0.4"/>' +
      '<path d="M40 49h40" stroke="#1A2744" stroke-width="2.2" stroke-linecap="round" opacity="0.25"/>' +
    '</svg>',
  'numeracja-farb':
    '<svg viewBox="0 0 120 88" fill="none" aria-hidden="true">' +
      '<ellipse cx="78" cy="28" rx="30" ry="18" fill="#E8B23E" opacity="0.32"/>' +
      '<rect x="28" y="34" width="64" height="40" rx="10" fill="#A6B58D" opacity="0.35"/>' +
      '<path d="M40 48h40M40 58h28" stroke="#1A2744" stroke-width="2.2" stroke-linecap="round" opacity="0.22"/>' +
      '<circle cx="86" cy="62" r="10" fill="#E86A4A" opacity="0.35"/>' +
    '</svg>'
};

function prefersReducedMotion(){
  return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function createEyeElement(className){
  var span = document.createElement('span');
  span.className = className || 'eye-motif';
  span.setAttribute('aria-hidden', 'true');
  var img = document.createElement('img');
  img.src = EYE_BRAND_SRC;
  img.alt = '';
  img.width = 72;
  img.height = 108;
  img.decoding = 'async';
  span.appendChild(img);
  return span;
}

function getMotifSvg(moduleId){
  return MODULE_MOTIFS[moduleId] || '';
}

function flyKosmykToCounter(fromEl, index){
  if (prefersReducedMotion() || !fromEl) return;
  var target = document.getElementById('kwrap');
  var host = document.getElementById('screen');
  if (!target || !host) return;

  var fr = fromEl.getBoundingClientRect();
  var tr = target.getBoundingClientRect();
  var hr = host.getBoundingClientRect();
  var jitter = (index || 0) * 7;
  var sx = fr.left - hr.left + fr.width / 2 - 9 + jitter;
  var sy = fr.top - hr.top + fr.height / 2 - 9 - jitter;
  var tx = tr.left - hr.left + tr.width / 2 - sx - 9;
  var ty = tr.top - hr.top + tr.height / 2 - sy - 9;

  var p = document.createElement('span');
  p.className = 'kosmyk-particle kosmyk-particle--fly';
  p.innerHTML = KOSMYK_SVG;
  p.style.left = sx + 'px';
  p.style.top = sy + 'px';
  p.style.setProperty('--tx', tx + 'px');
  p.style.setProperty('--ty', ty + 'px');
  host.appendChild(p);
  setTimeout(function(){ p.remove(); }, SPRING_MS + 80);
}

function kosmykBurst(fromEl){
  if (prefersReducedMotion()) return;
  var count = 6 + Math.floor(Math.random() * 3);
  for (var i = 0; i < count; i++){
    (function(idx){
      setTimeout(function(){ flyKosmykToCounter(fromEl, idx); }, idx * 55);
    })(i);
  }
  var target = document.getElementById('kwrap');
  setTimeout(function(){
    if (!target) return;
    target.classList.remove('reward-glow', 'reward-pop');
    void target.offsetWidth;
    target.classList.add('reward-glow', 'reward-pop');
    setTimeout(function(){
      target.classList.remove('reward-glow', 'reward-pop');
    }, 720);
  }, 640);
}

function animateModuleBars(lessonId){
  if (!lessonId || !window.LessonsCatalogHelpers) return;
  var entry = window.LessonsCatalogHelpers.getEntry(lessonId);
  if (!entry) return;
  var section = document.querySelector('.home-module[data-module-id="' + entry.moduleId + '"]');
  if (!section) return;
  var barWrap = section.querySelector('.hbar');
  var bar = section.querySelector('.home-module-bar');
  if (!bar || !barWrap) return;
  if (prefersReducedMotion()) return;

  setTimeout(function(){
    bar.classList.add('bar-animating');
    barWrap.classList.add('bar-reward');
    setTimeout(function(){
      barWrap.classList.remove('bar-reward');
      bar.classList.remove('bar-animating');
    }, 2400);
  }, 280);
}

function findUnlockedTile(lessonId){
  var helpers = window.LessonsCatalogHelpers;
  if (!helpers) return null;
  var entry = helpers.getEntry(lessonId);
  if (!entry) return null;
  var next = helpers.getNextAfter(lessonId);
  if (!next) return null;
  var section = document.querySelector('.home-module[data-module-id="' + entry.moduleId + '"]');
  if (!section) return null;
  var tiles = section.querySelectorAll('.lesson-tile');
  for (var i = 0; i < tiles.length; i++){
    var title = tiles[i].querySelector('.txt .t');
    if (title && title.textContent === next.title) return tiles[i];
  }
  return null;
}

function animateUnlockedTile(lessonId){
  if (prefersReducedMotion()) return;
  var tile = findUnlockedTile(lessonId);
  if (!tile) return;
  tile.classList.remove('is-unlock-enter');
  void tile.offsetWidth;
  tile.classList.add('is-unlock-enter');
  setTimeout(function(){ tile.classList.remove('is-unlock-enter'); }, 950);
}

function blinkModuleMotif(moduleId){
  if (prefersReducedMotion() || !moduleId) return;
  var motif = document.querySelector('.home-module[data-module-id="' + moduleId + '"] .module-motif');
  if (!motif) return;
  motif.classList.add('blink');
  setTimeout(function(){ motif.classList.remove('blink'); }, 500);
}

function spawnCompletionSparkles(stepEl){
  if (prefersReducedMotion() || !stepEl) return;
  var host = stepEl;
  var colors = ['#E7795B', '#E8B544', '#D86F88', '#A6B58D'];
  for (var i = 0; i < 6; i++){
    var s = document.createElement('span');
    s.className = 'completion-spark';
    s.style.background = colors[i % colors.length];
    s.style.left = (20 + Math.random() * 60) + '%';
    s.style.top = (18 + Math.random() * 28) + '%';
    s.style.animationDelay = (i * 0.08) + 's';
    host.appendChild(s);
    setTimeout(function(el){ el.remove(); }, 2000, s);
  }
}

window.UIEffects = {
  eyeSvg: EYE_SVG,
  createEye: createEyeElement,
  getMotifSvg: getMotifSvg,

  kosmykBurst: function(fromEl){
    kosmykBurst(fromEl || document.getElementById('fkchip') || document.getElementById('kwrap'));
  },

  afterLessonComplete: function(lessonId){
    window.__lastRewardLessonId = lessonId;
    if (window.LessonsCatalogHelpers){
      var entry = window.LessonsCatalogHelpers.getEntry(lessonId);
      window.__lastRewardModuleId = entry ? entry.moduleId : null;
    }
    animateModuleBars(lessonId);
  },

  onReturnHome: function(){
    var id = window.__lastRewardLessonId;
    var moduleId = window.__lastRewardModuleId;
    if (!id){
      window.__lastRewardModuleId = null;
      return;
    }

    var delay = prefersReducedMotion() ? 0 : 920;
    setTimeout(function(){
      animateUnlockedTile(id);
    }, delay);

    if (moduleId === 'wlos-kolor' || moduleId === 'wlos-ksztalt' || moduleId === 'wlos-teoria-koloru' || moduleId === 'trwala-procedura' || moduleId === 'bhp-higiena-salonu' || moduleId === 'strzyzenie-narzedzia' || moduleId === 'prostowanie-wlosow'){
      setTimeout(function(){
        blinkModuleMotif(moduleId);
      }, delay + 400);
    }

    window.__lastRewardLessonId = null;
    window.__lastRewardModuleId = null;
  },

  markCompletionReward: function(stepEl){
    if (!stepEl) return;
    stepEl.classList.add('is-reward');
    if (!stepEl.querySelector('.eye-motif--done')){
      var eye = createEyeElement('eye-motif eye-motif--done');
      var solved = stepEl.querySelector('.solved');
      if (solved && solved.nextSibling){
        stepEl.insertBefore(eye, solved.nextSibling);
      } else {
        stepEl.insertBefore(eye, stepEl.firstChild);
      }
    }
    spawnCompletionSparkles(stepEl);
    if (!prefersReducedMotion()){
      var doneEye = stepEl.querySelector('.eye-motif--done');
      if (doneEye){
        setTimeout(function(){ doneEye.classList.add('blink'); }, 1200);
        setTimeout(function(){ doneEye.classList.remove('blink'); }, 1700);
      }
    }
  }
};
