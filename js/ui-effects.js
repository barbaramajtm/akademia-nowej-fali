/* ============================================================
   Akademia Nowej Fali — efekty wizualne nagród (bez logiki lekcji)
   ============================================================ */
'use strict';

var EYE_SVG =
  '<svg viewBox="0 0 80 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
    '<path d="M6 30 Q40 6 74 30" fill="#E8C3B9"/>' +
    '<ellipse cx="40" cy="30" rx="26" ry="15" fill="#F1E9DE"/>' +
    '<circle cx="40" cy="30" r="9" fill="#1E2A44"/>' +
  '</svg>';

var KOSMYK_SVG =
  '<svg width="16" height="16" viewBox="0 0 20 20"><path d="M12 2 C7 5 6 9 8 13 C9 16 8 18 6 18 C10 18 13 15 12 11 C11.4 8.5 12.5 5.5 15 4 C14 3 13 2.4 12 2Z" fill="#D06A4E"/></svg>';

function prefersReducedMotion(){
  return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function createEyeElement(className){
  var span = document.createElement('span');
  span.className = className || 'eye-motif';
  span.innerHTML = EYE_SVG;
  return span;
}

function spawnKosmykParticles(originEl, count){
  if (prefersReducedMotion() || !originEl) return;
  var host = document.getElementById('screen') || document.body;
  var rect = originEl.getBoundingClientRect();
  var hostRect = host.getBoundingClientRect();
  var baseX = rect.left - hostRect.left + rect.width / 2;
  var baseY = rect.top - hostRect.top + rect.height / 2;
  var n = Math.min(count || 3, 4);

  for (var i = 0; i < n; i++){
    (function(idx){
      setTimeout(function(){
        var p = document.createElement('span');
        p.className = 'kosmyk-particle';
        p.innerHTML = KOSMYK_SVG;
        var kx = (idx - 1) * 18 + 'px';
        p.style.left = baseX + 'px';
        p.style.top = baseY + 'px';
        p.style.setProperty('--kx', kx);
        host.appendChild(p);
        setTimeout(function(){ p.remove(); }, 950);
      }, idx * 90);
    })(i);
  }
}

function popCounter(el){
  if (!el || prefersReducedMotion()) return;
  el.classList.remove('reward-pop');
  void el.offsetWidth;
  el.classList.add('reward-pop');
  setTimeout(function(){ el.classList.remove('reward-pop'); }, 500);
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
  if (prefersReducedMotion()){
    return;
  }
  bar.classList.add('bar-animating');
  barWrap.classList.add('bar-reward');
  setTimeout(function(){
    barWrap.classList.remove('bar-reward');
    bar.classList.remove('bar-animating');
  }, 2200);
}

function highlightUnlockedLesson(lessonId){
  if (!lessonId || prefersReducedMotion()) return;
  var helpers = window.LessonsCatalogHelpers;
  if (!helpers) return;
  var entry = helpers.getEntry(lessonId);
  if (!entry) return;
  var next = helpers.getNextAfter(lessonId);
  if (!next) return;
  var section = document.querySelector('.home-module[data-module-id="' + entry.moduleId + '"]');
  if (!section) return;
  var tiles = section.querySelectorAll('.lesson-tile');
  tiles.forEach(function(tile){
    var title = tile.querySelector('.txt .t');
    if (title && title.textContent === next.title){
      tile.classList.add('is-unlock-reward');
      setTimeout(function(){ tile.classList.remove('is-unlock-reward'); }, 2000);
    }
  });
}

function blinkHomeEye(){
  if (prefersReducedMotion()) return;
  var eye = document.querySelector('.eye-watermark--home');
  if (!eye) return;
  eye.classList.add('blink');
  setTimeout(function(){ eye.classList.remove('blink'); }, 520);
}

window.UIEffects = {
  eyeSvg: EYE_SVG,
  createEye: createEyeElement,
  kosmykBurst: function(fromEl, amount){
    var n = amount > 20 ? 4 : amount > 10 ? 3 : 2;
    spawnKosmykParticles(fromEl, n);
    popCounter(document.getElementById('kwrap'));
    var homePill = document.querySelector('.kosmyk-pill');
    if (homePill) popCounter(homePill);
  },
  afterLessonComplete: function(lessonId){
    window.__lastRewardLessonId = lessonId;
    animateModuleBars(lessonId);
  },
  onReturnHome: function(){
    var id = window.__lastRewardLessonId;
    if (!id) return;
    highlightUnlockedLesson(id);
    blinkHomeEye();
    window.__lastRewardLessonId = null;
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
    if (!prefersReducedMotion()){
      var doneEye = stepEl.querySelector('.eye-motif--done');
      if (doneEye){
        setTimeout(function(){ doneEye.classList.add('blink'); }, 1400);
        setTimeout(function(){ doneEye.classList.remove('blink'); }, 1900);
      }
    }
  }
};
