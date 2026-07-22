/* ============================================================
   Avatary profilowe — ilustracje z arkusza (bez uploadu zdjęć)
   ============================================================ */
'use strict';

var AVATAR_PRESETS = [
  { id: 'blonde-sage', label: 'Blond + szałwia', src: 'assets/images/avatars/blonde-sage.png' },
  { id: 'ginger-coral', label: 'Ruda + koral', src: 'assets/images/avatars/ginger-coral.png' },
  { id: 'brunette-mustard', label: 'Brunetka + musztarda', src: 'assets/images/avatars/brunette-mustard.png' },
  { id: 'pink-sage', label: 'Różowe włosy', src: 'assets/images/avatars/pink-sage.png' },
  { id: 'lavender-cream', label: 'Lawenda', src: 'assets/images/avatars/lavender-cream.png' },
  { id: 'blonde-coral', label: 'Blond + koral', src: 'assets/images/avatars/blonde-coral.png' },
  { id: 'guy-navy', label: 'Krótkie włosy', src: 'assets/images/avatars/guy-navy.png' },
  { id: 'glasses-sage', label: 'Okulary', src: 'assets/images/avatars/glasses-sage.png' },
  { id: 'teal-mustard', label: 'Turkus', src: 'assets/images/avatars/teal-mustard.png' },
  { id: 'bangs-coral', label: 'Grzywka', src: 'assets/images/avatars/bangs-coral.png' },
  { id: 'blue-sage', label: 'Niebieskie włosy', src: 'assets/images/avatars/blue-sage.png' },
  { id: 'bun-coral', label: 'Kok', src: 'assets/images/avatars/bun-coral.png' }
];

var DEFAULT_AVATAR_ID = AVATAR_PRESETS[0].id;

function avatarAssetUrl(relativePath){
  try {
    return new URL(relativePath, document.baseURI).href;
  } catch (e){
    return relativePath;
  }
}

function avatarById(id){
  for (var i = 0; i < AVATAR_PRESETS.length; i++){
    if (AVATAR_PRESETS[i].id === id) return AVATAR_PRESETS[i];
  }
  return AVATAR_PRESETS[0];
}

function avatarImgMarkup(preset, size){
  size = size || 54;
  var p = preset || AVATAR_PRESETS[0];
  return '<img class="avatar-img" src="' + avatarAssetUrl(p.src) + '" alt="" width="' + size + '" height="' + size + '" decoding="async" draggable="false">';
}

function getSelectedAvatarId(){
  try {
    if (window.AppState && window.AppState.get){
      var u = window.AppState.get().user;
      if (u && u.avatarId){
        /* Stare ID (wave, kosmyk…) → pierwszy ilustracyjny zestaw */
        if (avatarById(u.avatarId).id === u.avatarId) return u.avatarId;
      }
    }
  } catch (e){ /* ignore */ }
  return DEFAULT_AVATAR_ID;
}

function setSelectedAvatarId(id){
  if (!window.AppState || !window.AppState.setAvatarId) return;
  window.AppState.setAvatarId(id);
}

function paintAvatarHosts(){
  var preset = avatarById(getSelectedAvatarId());
  var hosts = document.querySelectorAll('[data-avatar-host]');
  hosts.forEach(function(host){
    var size = parseInt(host.getAttribute('data-avatar-size') || '54', 10);
    host.style.background = '#F7F1EA';
    host.innerHTML = avatarImgMarkup(preset, size);
  });
}

function closeAvatarPicker(){
  var sheet = document.getElementById('avatarPickerSheet');
  if (sheet) sheet.hidden = true;
}

function openAvatarPicker(){
  var sheet = document.getElementById('avatarPickerSheet');
  var grid = document.getElementById('avatarPickerGrid');
  if (!sheet || !grid) return;
  var current = getSelectedAvatarId();
  grid.innerHTML = '';
  AVATAR_PRESETS.forEach(function(p){
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'avatar-pick' + (p.id === current ? ' is-selected' : '');
    btn.setAttribute('aria-label', p.label);
    btn.innerHTML = avatarImgMarkup(p, 72);
    btn.addEventListener('click', function(){
      setSelectedAvatarId(p.id);
      paintAvatarHosts();
      closeAvatarPicker();
    });
    grid.appendChild(btn);
  });
  sheet.hidden = false;
}

function bindAvatarUi(){
  paintAvatarHosts();
  var openBtn = document.getElementById('profileAvatarBtn');
  if (openBtn && !openBtn._anfBound){
    openBtn._anfBound = true;
    openBtn.addEventListener('click', openAvatarPicker);
  }
  var closeBtn = document.getElementById('avatarPickerClose');
  if (closeBtn && !closeBtn._anfBound){
    closeBtn._anfBound = true;
    closeBtn.addEventListener('click', closeAvatarPicker);
  }
  var sheet = document.getElementById('avatarPickerSheet');
  if (sheet && !sheet._anfBound){
    sheet._anfBound = true;
    sheet.addEventListener('click', function(e){
      if (e.target === sheet) closeAvatarPicker();
    });
  }
}

window.AnfAvatars = {
  presets: AVATAR_PRESETS,
  paint: paintAvatarHosts,
  bind: bindAvatarUi,
  open: openAvatarPicker,
  getId: getSelectedAvatarId
};
