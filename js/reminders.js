/* ============================================================
   Akademia Nowej Fali — codzienne absurdalne przypomnienia
   Powiadomienia przeglądarki (Notification API + Service Worker).
   Bez serwera push: raz dziennie, gdy aplikacja / SW się budzi,
   oraz Periodic Background Sync gdy przeglądarka na to pozwala.
   ============================================================ */
'use strict';

var ReminderPrefs = (function(){
  var KEY = 'anf-daily-reminders-v1';
  var HOUR = 10; /* lokalnie ok. 10:00 */

  var ABSURD_BODIES = [
    'Jeśli stracisz dziś ciągłość nauki, Twoja rodzina straci włosy w wyniku starożytnej włosowej klątwy.',
    'Jedna nieodrobiona lekcja i Twoje nożyczki zaczną ciąć powietrze zamiast włosów — na zawsze.',
    'Pominiesz dziś Akademię? Keratyna w Twoich własnych włosach wypowie Ci posłuszeństwo o północy.',
    'Bez dzisiejszej lekcji pH Twojej duszy spadnie poniżej 3 i zwiną się wszystkie Twoje loki.',
    'Jeśli nie otworzysz dziś lekcji, salonowa lampa UV zacznie migać alfabetem Morse’a: „WRÓĆ”.',
    'Przerwana seria nauki budzi pradawną amebę melaniny. Ona pamięta. Ona czeka.',
    'Jeden dzień bez nauki = Twoja grzebień zamieni się w węża i zacznie syczeć o egzaminie czeladniczym.',
    'Kosmyki płaczą w Gablotce. Dosłownie. Słychać to w sąsiednim budynku.',
    'Jeśli dziś nie uczysz się o włosie, jutro włos zacznie uczyć się o Tobie. Nie chcesz tego.',
    'Starożytna Rada Odżywki ogłasza: brak lekcji = wieczna puszywość i zero połysku.',
    'Pominięta lekcja sprawi, że wszystkie Twoje farby wyschną w tubkach jednocześnie. Wszystkie.',
    'Ciągłość nauki chroni Cię przed klątwą rozdwojonych końcówek duszy. Naprawdę.',
    'Bez dzisiejszego quizu Twoja szczotka będzie czesać tylko wspomnienia. Mokre wspomnienia.',
    'Jeśli nie wrócisz do Akademii, Twoja seria dni zamieni się w serię nieszczęść fryzjerskich.',
    'Jedna lekcja dziś albo wieczne tangles w karmie. Wybór należy do Ciebie.'
  ];

  function todayKey(d){
    d = d || new Date();
    var y = d.getFullYear();
    var m = String(d.getMonth() + 1).padStart(2, '0');
    var day = String(d.getDate()).padStart(2, '0');
    return y + '-' + m + '-' + day;
  }

  function load(){
    try {
      var raw = JSON.parse(localStorage.getItem(KEY) || '{}');
      return {
        enabled: !!raw.enabled,
        lastSentDate: typeof raw.lastSentDate === 'string' ? raw.lastSentDate : null,
        hour: typeof raw.hour === 'number' ? raw.hour : HOUR
      };
    } catch (e){
      return { enabled: false, lastSentDate: null, hour: HOUR };
    }
  }

  function save(prefs){
    try {
      localStorage.setItem(KEY, JSON.stringify({
        enabled: !!prefs.enabled,
        lastSentDate: prefs.lastSentDate || null,
        hour: typeof prefs.hour === 'number' ? prefs.hour : HOUR
      }));
    } catch (e){ /* private mode */ }
  }

  function pickBody(){
    return ABSURD_BODIES[Math.floor(Math.random() * ABSURD_BODIES.length)];
  }

  function studiedToday(){
    try {
      if (!window.AppState || !window.AppState.get) return false;
      var st = window.AppState.get();
      var last = st && st.stats && st.stats.lastLessonDate;
      return last === todayKey();
    } catch (e){
      return false;
    }
  }

  function nextFireDate(prefs){
    var now = new Date();
    var target = new Date(now.getFullYear(), now.getMonth(), now.getDate(), prefs.hour || HOUR, 0, 0, 0);
    if (now.getTime() >= target.getTime()){
      target.setDate(target.getDate() + 1);
    }
    return target;
  }

  function msUntilNext(prefs){
    return Math.max(1000, nextFireDate(prefs).getTime() - Date.now());
  }

  function supported(){
    return typeof window !== 'undefined'
      && 'Notification' in window
      && 'serviceWorker' in navigator;
  }

  function permission(){
    if (!('Notification' in window)) return 'unsupported';
    return Notification.permission;
  }

  function iconUrl(){
    try {
      return new URL('assets/images/nf-logo-gold.png', document.baseURI).href;
    } catch (e){
      return 'assets/images/nf-logo-gold.png';
    }
  }

  function payload(){
    return {
      title: 'Akademia Nowej Fali',
      body: pickBody(),
      icon: iconUrl(),
      badge: iconUrl(),
      tag: 'anf-daily-absurd',
      renotify: true,
      requireInteraction: false,
      data: { url: new URL('.', document.baseURI).href }
    };
  }

  function markSent(){
    var prefs = load();
    prefs.lastSentDate = todayKey();
    save(prefs);
  }

  function shouldSendNow(prefs){
    if (!prefs.enabled) return false;
    if (permission() !== 'granted') return false;
    if (prefs.lastSentDate === todayKey()) return false;
    if (studiedToday()) return false;
    var now = new Date();
    return now.getHours() >= (prefs.hour || HOUR);
  }

  function showViaRegistration(reg, data){
    data = data || payload();
    return reg.showNotification(data.title, {
      body: data.body,
      icon: data.icon,
      badge: data.badge,
      tag: data.tag,
      renotify: data.renotify,
      requireInteraction: data.requireInteraction,
      data: data.data
    });
  }

  function getRegistration(){
    if (!('serviceWorker' in navigator)) return Promise.resolve(null);
    return navigator.serviceWorker.ready.catch(function(){ return null; });
  }

  function notifyNow(force){
    if (!supported()) return Promise.reject(new Error('Powiadomienia niedostępne w tej przeglądarce.'));
    if (permission() !== 'granted') return Promise.reject(new Error('Brak zgody na powiadomienia.'));
    var prefs = load();
    if (!force){
      if (!shouldSendNow(prefs)) return Promise.resolve({ skipped: true });
    }
    return getRegistration().then(function(reg){
      var data = payload();
      var p = reg
        ? showViaRegistration(reg, data)
        : Promise.resolve(new Notification(data.title, data));
      return p.then(function(){
        if (!force) markSent();
        return { ok: true, body: data.body };
      });
    });
  }

  function armServiceWorker(){
    var prefs = load();
    if (!prefs.enabled || permission() !== 'granted') return;
    getRegistration().then(function(reg){
      if (!reg || !reg.active) return;
      reg.active.postMessage({
        type: 'ANF_ARM_DAILY',
        delayMs: msUntilNext(prefs),
        hour: prefs.hour || HOUR,
        messages: ABSURD_BODIES,
        icon: iconUrl(),
        openUrl: new URL('.', document.baseURI).href
      });
      if (reg.periodicSync && permission() === 'granted'){
        try {
          reg.periodicSync.register('anf-daily-absurd', {
            minInterval: 24 * 60 * 60 * 1000
          }).catch(function(){ /* unsupported / denied */ });
        } catch (e){ /* ignore */ }
      }
    });
  }

  function registerServiceWorker(){
    if (!('serviceWorker' in navigator)) return Promise.resolve(null);
    var swUrl = new URL('sw.js', document.baseURI).href;
    return navigator.serviceWorker.register(swUrl).catch(function(err){
      console.warn('[ANF reminders] SW register failed', err);
      return null;
    });
  }

  function requestPermission(){
    if (!supported()) return Promise.resolve('unsupported');
    if (Notification.permission === 'granted') return Promise.resolve('granted');
    if (Notification.permission === 'denied') return Promise.resolve('denied');
    return Notification.requestPermission();
  }

  function enable(){
    return registerServiceWorker().then(function(){
      return requestPermission();
    }).then(function(perm){
      if (perm !== 'granted'){
        var prefs = load();
        prefs.enabled = false;
        save(prefs);
        return { ok: false, permission: perm };
      }
      var prefs = load();
      prefs.enabled = true;
      save(prefs);
      armServiceWorker();
      return { ok: true, permission: perm };
    });
  }

  function disable(){
    var prefs = load();
    prefs.enabled = false;
    save(prefs);
    getRegistration().then(function(reg){
      if (reg && reg.active){
        reg.active.postMessage({ type: 'ANF_DISARM_DAILY' });
      }
      if (reg && reg.periodicSync){
        try { reg.periodicSync.unregister('anf-daily-absurd'); } catch (e){ /* ignore */ }
      }
    });
  }

  function tick(){
    var prefs = load();
    if (!prefs.enabled) return;
    registerServiceWorker().then(function(){
      armServiceWorker();
      if (shouldSendNow(prefs)){
        notifyNow(false).catch(function(){ /* ignore */ });
      }
    });
  }

  function init(){
    if (!supported()) return;
    registerServiceWorker().then(function(){
      tick();
    });
    document.addEventListener('visibilitychange', function(){
      if (document.visibilityState === 'visible') tick();
    });
    window.addEventListener('focus', tick);
  }

  return {
    KEY: KEY,
    supported: supported,
    permission: permission,
    load: load,
    save: save,
    enable: enable,
    disable: disable,
    notifyNow: notifyNow,
    tick: tick,
    init: init,
    studiedToday: studiedToday,
    pickBody: pickBody,
    ABSURD_BODIES: ABSURD_BODIES
  };
})();

window.ReminderPrefs = ReminderPrefs;
