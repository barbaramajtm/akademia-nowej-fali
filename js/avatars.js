/* ============================================================
   Avatary profilowe — wybór z zestawu (bez uploadu zdjęć)
   ============================================================ */
'use strict';

var AVATAR_PRESETS = [
  { id: 'wave', label: 'Fala', bg: '#FFE8C8', fg: '#E65298' },
  { id: 'kosmyk', label: 'Kosmyk', bg: '#FCE4EC', fg: '#FF4794' },
  { id: 'mustard', label: 'Musztarda', bg: '#FFF3D6', fg: '#F1A520' },
  { id: 'sage', label: 'Szałwia', bg: '#E8F0E3', fg: '#6B8F71' },
  { id: 'plum', label: 'Śliwka', bg: '#F3E8F0', fg: '#8B4A6B' },
  { id: 'navy', label: 'Granat', bg: '#E8EEF6', fg: '#1A2744' },
  { id: 'coral', label: 'Koral', bg: '#FFE4DC', fg: '#E05A45' },
  { id: 'mint', label: 'Mięta', bg: '#E4F5F0', fg: '#3D9B8F' }
];

function avatarById(id){
  for (var i = 0; i < AVATAR_PRESETS.length; i++){
    if (AVATAR_PRESETS[i].id === id) return AVATAR_PRESETS[i];
  }
  return AVATAR_PRESETS[0];
}

function avatarSvgMarkup(preset, size){
  size = size || 54;
  var p = preset || AVATAR_PRESETS[0];
  var r = Math.round(size * 0.2);
  var cy = Math.round(size * 0.37);
  var cr = Math.round(size * 0.2);
  return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 ' + size + ' ' + size + '" aria-hidden="true">' +
    '<circle cx="' + (size / 2) + '" cy="' + cy + '" r="' + cr + '" fill="' + p.fg + '"/>' +
    '<path d="M' + Math.round(size * 0.13) + ' ' + Math.round(size * 0.9) +
      ' Q' + (size / 2) + ' ' + Math.round(size * 0.55) + ' ' + Math.round(size * 0.87) + ' ' + Math.round(size * 0.9) +
      ' Z" fill="' + p.fg + '" opacity=".85"/>' +
    '</svg>';
}

function getSelectedAvatarId(){
  try {
    if (window.AppState && window.AppState.get){
      var u = window.AppState.get().user;
      if (u && u.avatarId) return u.avatarId;
    }
  } catch (e){ /* ignore */ }
  return 'wave';
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
    host.style.background = preset.bg;
    host.innerHTML = avatarSvgMarkup(preset, size);
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
    btn.style.background = p.bg;
    btn.innerHTML = avatarSvgMarkup(p, 48);
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
