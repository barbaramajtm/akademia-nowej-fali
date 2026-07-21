/* Akademia Nowej Fali — service worker (przypomnienia dzienne) */
'use strict';

var armedTimer = null;
var armedMessages = [];
var armedIcon = '';
var armedOpenUrl = './';

self.addEventListener('install', function(event){
  self.skipWaiting();
});

self.addEventListener('activate', function(event){
  event.waitUntil(self.clients.claim());
});

function pickMessage(){
  if (!armedMessages.length){
    return 'Jeśli stracisz dziś ciągłość nauki, Twoja rodzina straci włosy w wyniku starożytnej włosowej klątwy.';
  }
  return armedMessages[Math.floor(Math.random() * armedMessages.length)];
}

function showAbsurd(){
  var body = pickMessage();
  return self.registration.showNotification('Akademia Nowej Fali', {
    body: body,
    icon: armedIcon || undefined,
    badge: armedIcon || undefined,
    tag: 'anf-daily-absurd',
    renotify: true,
    data: { url: armedOpenUrl || './' }
  });
}

function clearArmed(){
  if (armedTimer){
    clearTimeout(armedTimer);
    armedTimer = null;
  }
}

function arm(delayMs){
  clearArmed();
  var delay = Math.max(1000, Math.min(delayMs || 0, 2147483647));
  armedTimer = setTimeout(function(){
    armedTimer = null;
    showAbsurd().then(function(){
      /* Po wysłaniu — spróbuj uzbroić kolejne ~24 h (SW może zostać uśpiony). */
      arm(24 * 60 * 60 * 1000);
    }).catch(function(){ /* ignore */ });
  }, delay);
}

self.addEventListener('message', function(event){
  var data = event.data || {};
  if (data.type === 'ANF_ARM_DAILY'){
    armedMessages = Array.isArray(data.messages) ? data.messages : armedMessages;
    armedIcon = data.icon || armedIcon;
    armedOpenUrl = data.openUrl || armedOpenUrl;
    arm(data.delayMs);
  }
  if (data.type === 'ANF_DISARM_DAILY'){
    clearArmed();
  }
  if (data.type === 'ANF_TEST_NOTIFY'){
    armedMessages = Array.isArray(data.messages) ? data.messages : armedMessages;
    armedIcon = data.icon || armedIcon;
    armedOpenUrl = data.openUrl || armedOpenUrl;
    event.waitUntil(showAbsurd());
  }
});

self.addEventListener('periodicsync', function(event){
  if (event.tag === 'anf-daily-absurd'){
    event.waitUntil(showAbsurd());
  }
});

self.addEventListener('notificationclick', function(event){
  event.notification.close();
  var target = (event.notification.data && event.notification.data.url) || './';
  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function(clientList){
      for (var i = 0; i < clientList.length; i++){
        var client = clientList[i];
        if ('focus' in client) return client.focus();
      }
      if (self.clients.openWindow) return self.clients.openWindow(target);
    })
  );
});
