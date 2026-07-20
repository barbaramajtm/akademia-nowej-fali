/**
 * Trwały stan aplikacji Wywóz (localStorage).
 */
const STORAGE_KEY = "wywoz-szambo-v1";

const DEFAULT_STATE = {
  intervalDays: 90,
  alertDays: 14,
  alertsEnabled: true,
  notificationsEnabled: false,
  notes: "",
  history: [],
  lastNotifiedKey: null,
};

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return structuredClone(DEFAULT_STATE);
    const parsed = JSON.parse(raw);
    return {
      ...structuredClone(DEFAULT_STATE),
      ...parsed,
      history: Array.isArray(parsed.history) ? parsed.history : [],
    };
  } catch {
    return structuredClone(DEFAULT_STATE);
  }
}

function saveState(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function todayISO() {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function parseISODate(iso) {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d);
}

function daysBetween(fromISO, toISO) {
  const a = parseISODate(fromISO);
  const b = parseISODate(toISO);
  const ms = b.setHours(0, 0, 0, 0) - a.setHours(0, 0, 0, 0);
  return Math.round(ms / 86400000);
}

function addDays(iso, days) {
  const d = parseISODate(iso);
  d.setDate(d.getDate() + days);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function formatPL(iso) {
  return parseISODate(iso).toLocaleDateString("pl-PL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function pluralDays(n) {
  const abs = Math.abs(n);
  if (abs === 1) return `${n} dzień`;
  const mod10 = abs % 10;
  const mod100 = abs % 100;
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) {
    return `${n} dni`;
  }
  return `${n} dni`;
}

function getLatestEmptying(state) {
  if (!state.history.length) return null;
  return [...state.history].sort((a, b) => (a.date < b.date ? 1 : -1))[0];
}

/**
 * @returns {{
 *   hasData: boolean,
 *   lastDate: string|null,
 *   nextDate: string|null,
 *   elapsedDays: number|null,
 *   remainingDays: number|null,
 *   progress: number,
 *   level: 'empty'|'ok'|'soon'|'due'|'overdue',
 *   headline: string,
 *   sub: string,
 * }}
 */
function computeStatus(state, nowISO = todayISO()) {
  const latest = getLatestEmptying(state);
  if (!latest) {
    return {
      hasData: false,
      lastDate: null,
      nextDate: null,
      elapsedDays: null,
      remainingDays: null,
      progress: 0,
      level: "empty",
      headline: "Dodaj pierwszy wywóz",
      sub: "Zapisz datę ostatniego wywozu szamba, ustaw cykl i włącz alerty.",
    };
  }

  const lastDate = latest.date;
  const nextDate = addDays(lastDate, state.intervalDays);
  const elapsedDays = daysBetween(lastDate, nowISO);
  const remainingDays = daysBetween(nowISO, nextDate);
  const progress = Math.min(1, Math.max(0, elapsedDays / state.intervalDays));

  let level = "ok";
  let headline = "Wszystko w porządku";
  let sub = `Następny wywóz za ${pluralDays(remainingDays)} (${formatPL(nextDate)}).`;

  if (remainingDays < 0) {
    level = "overdue";
    headline = "Termin przekroczony";
    sub = `Wywóz spóźniony o ${pluralDays(Math.abs(remainingDays))}. Oznacz nowy wywóz po wykonaniu.`;
  } else if (remainingDays === 0) {
    level = "due";
    headline = "Dziś termin wywozu";
    sub = "Zaplanuj wywóz szamba na dziś.";
  } else if (remainingDays <= state.alertDays) {
    level = "soon";
    headline = "Zbliża się termin";
    sub = `Do wywozu zostało ${pluralDays(remainingDays)}. Warto umówić firmę.`;
  }

  return {
    hasData: true,
    lastDate,
    nextDate,
    elapsedDays,
    remainingDays,
    progress,
    level,
    headline,
    sub,
  };
}

window.WywozStorage = {
  loadState,
  saveState,
  todayISO,
  parseISODate,
  daysBetween,
  addDays,
  formatPL,
  pluralDays,
  getLatestEmptying,
  computeStatus,
  DEFAULT_STATE,
};
