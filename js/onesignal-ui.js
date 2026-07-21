/* ============================================================
   OneSignal — przycisk w Profilu
   ============================================================ */
'use strict';

function getOneSignal(){
  return window.AnfOneSignal || null;
}

function setPushStatus(text, show){
  var el = document.getElementById('profilePushStatus');
  if (!el) return;
  if (show === false){
    el.hidden = true;
    el.textContent = '';
    return;
  }
  el.hidden = false;
  el.textContent = text || '';
}

function syncPushUi(){
  var btn = document.getElementById('profilePushEnable');
  var OS = getOneSignal();
  if (!btn) return;
  if (!OS){
    btn.disabled = true;
    btn.textContent = 'Ładowanie OneSignal…';
    setPushStatus('Poczekaj chwilę albo odśwież stronę.', true);
    return;
  }
  btn.disabled = false;
  try {
    var sub = OS.User && OS.User.PushSubscription;
    var opted = !!(sub && (sub.optedIn || sub.id));
    btn.textContent = opted ? 'Powiadomienia włączone' : 'Włącz powiadomienia';
    if (opted) setPushStatus('Jesteś zapisana — możesz wysłać test z panelu OneSignal.', true);
    else setPushStatus('', false);
  } catch (e){
    btn.textContent = 'Włącz powiadomienia';
  }
}

function enablePush(){
  var OS = getOneSignal();
  var btn = document.getElementById('profilePushEnable');
  if (!OS){
    setPushStatus('OneSignal jeszcze się nie załadował. Odśwież stronę.', true);
    return;
  }
  if (btn) btn.disabled = true;
  setPushStatus('Proszę o zgodę w przeglądarce…', true);

  var run = Promise.resolve();
  if (OS.Slidedown && OS.Slidedown.promptPush){
    run = OS.Slidedown.promptPush();
  } else if (OS.Notifications && OS.Notifications.requestPermission){
    run = OS.Notifications.requestPermission();
  } else if (OS.User && OS.User.PushSubscription && OS.User.PushSubscription.optIn){
    run = OS.User.PushSubscription.optIn();
  }

  Promise.resolve(run).then(function(){
    syncPushUi();
  }).catch(function(err){
    console.error('[ANF OneSignal] enable failed', err);
    setPushStatus('Nie udało się włączyć powiadomień. Sprawdź ustawienia przeglądarki.', true);
    if (btn) btn.disabled = false;
  });
}

function bindPushUi(){
  var btn = document.getElementById('profilePushEnable');
  if (btn && !btn._anfBound){
    btn._anfBound = true;
    btn.addEventListener('click', enablePush);
  }
  syncPushUi();
  document.addEventListener('anf-onesignal-ready', syncPushUi);
}

window.AnfPushUi = {
  bind: bindPushUi,
  sync: syncPushUi
};
