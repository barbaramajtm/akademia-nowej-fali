(function () {
  const S = window.WywozStorage;
  const N = window.WywozNotif;

  let state = S.loadState();
  let tickTimer = null;

  const els = {
    home: document.getElementById("view-home"),
    history: document.getElementById("view-history"),
    settings: document.getElementById("view-settings"),
    alertBanner: document.getElementById("alert-banner"),
    ringWrap: document.querySelector(".ring-wrap"),
    ringProgress: document.getElementById("ring-progress"),
    ringDays: document.getElementById("ring-days"),
    ringLabel: document.getElementById("ring-label"),
    statusHeadline: document.getElementById("status-headline"),
    statusSub: document.getElementById("status-sub"),
    metrics: document.getElementById("metrics"),
    metricLast: document.getElementById("metric-last"),
    metricElapsed: document.getElementById("metric-elapsed"),
    metricNext: document.getElementById("metric-next"),
    btnMark: document.getElementById("btn-mark"),
    btnHistory: document.getElementById("btn-history"),
    btnSettings: document.getElementById("btn-settings"),
    historyList: document.getElementById("history-list"),
    historyEmpty: document.getElementById("history-empty"),
    settingsForm: document.getElementById("settings-form"),
    intervalDays: document.getElementById("interval-days"),
    alertDays: document.getElementById("alert-days"),
    alertsEnabled: document.getElementById("alerts-enabled"),
    notificationsEnabled: document.getElementById("notifications-enabled"),
    notes: document.getElementById("notes"),
    notifStatus: document.getElementById("notif-status"),
    markDialog: document.getElementById("mark-dialog"),
    markForm: document.getElementById("mark-form"),
    emptyDate: document.getElementById("empty-date"),
    emptyNote: document.getElementById("empty-note"),
    markConfirm: document.getElementById("mark-confirm"),
    toast: document.getElementById("toast"),
    installHint: document.getElementById("install-hint"),
  };

  const CIRCUMFERENCE = 2 * Math.PI * 52;

  function showToast(message) {
    els.toast.textContent = message;
    els.toast.hidden = false;
    requestAnimationFrame(() => els.toast.classList.add("show"));
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => {
      els.toast.classList.remove("show");
      setTimeout(() => {
        els.toast.hidden = true;
      }, 250);
    }, 2600);
  }

  function showView(name) {
    const map = {
      home: els.home,
      history: els.history,
      settings: els.settings,
    };
    Object.entries(map).forEach(([key, el]) => {
      const active = key === name;
      el.hidden = !active;
      el.classList.toggle("active", active);
    });
    if (name === "history") renderHistory();
    if (name === "settings") fillSettingsForm();
  }

  function renderHome() {
    const status = S.computeStatus(state);

    els.statusHeadline.textContent = status.headline;
    els.statusSub.textContent = status.sub;
    els.ringWrap.dataset.level = status.level;

    if (!status.hasData) {
      els.ringDays.textContent = "—";
      els.ringLabel.textContent = "start";
      els.ringProgress.style.strokeDashoffset = String(CIRCUMFERENCE);
      els.metrics.hidden = true;
      els.alertBanner.hidden = true;
    } else {
      const remaining = status.remainingDays;
      if (remaining < 0) {
        els.ringDays.textContent = String(Math.abs(remaining));
        els.ringLabel.textContent = "dni spóźnienia";
      } else {
        els.ringDays.textContent = String(remaining);
        els.ringLabel.textContent = remaining === 1 ? "dzień" : "dni do wywozu";
      }

      const offset = CIRCUMFERENCE * (1 - status.progress);
      els.ringProgress.style.strokeDasharray = String(CIRCUMFERENCE);
      els.ringProgress.style.strokeDashoffset = String(offset);

      els.metrics.hidden = false;
      els.metricLast.textContent = S.formatPL(status.lastDate);
      els.metricElapsed.textContent = S.pluralDays(status.elapsedDays);
      els.metricNext.textContent = S.formatPL(status.nextDate);

      if (status.level === "ok") {
        els.alertBanner.hidden = true;
      } else if (state.alertsEnabled) {
        els.alertBanner.hidden = false;
        els.alertBanner.dataset.level = status.level;
        if (status.level === "overdue") {
          els.alertBanner.textContent = `Alert: termin przekroczony o ${S.pluralDays(Math.abs(status.remainingDays))}.`;
        } else if (status.level === "due") {
          els.alertBanner.textContent = "Alert: dziś jest termin wywozu szamba.";
        } else {
          els.alertBanner.textContent = `Alert: do wywozu zostało ${S.pluralDays(status.remainingDays)}.`;
        }
      } else {
        els.alertBanner.hidden = true;
      }
    }

    maybeNotify(status);
  }

  async function maybeNotify(status) {
    if (!state.notificationsEnabled) return;
    if (!N.shouldNotify(state, status)) return;
    if (N.permission() !== "granted") return;

    const msg = N.messageFor(status);
    const ok = await N.show(msg.title, msg.body);
    if (ok) {
      state.lastNotifiedKey = N.alertKey(status);
      S.saveState(state);
    }
  }

  function renderHistory() {
    const items = [...state.history].sort((a, b) => (a.date < b.date ? 1 : -1));
    els.historyList.innerHTML = "";
    els.historyEmpty.hidden = items.length > 0;

    items.forEach((item) => {
      const li = document.createElement("li");
      li.className = "history-item";
      li.innerHTML = `
        <span class="history-date">${S.formatPL(item.date)}</span>
        <button type="button" class="history-delete" data-id="${item.id}">Usuń</button>
        ${item.note ? `<span class="history-note">${escapeHtml(item.note)}</span>` : ""}
      `;
      els.historyList.appendChild(li);
    });
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function fillSettingsForm() {
    els.intervalDays.value = state.intervalDays;
    els.alertDays.value = state.alertDays;
    els.alertsEnabled.checked = state.alertsEnabled;
    els.notificationsEnabled.checked = state.notificationsEnabled;
    els.notes.value = state.notes || "";
    updateNotifStatus();
    document.querySelectorAll(".chip[data-interval]").forEach((chip) => {
      chip.classList.toggle(
        "active",
        Number(chip.dataset.interval) === Number(state.intervalDays)
      );
    });
  }

  function updateNotifStatus() {
    const p = N.permission();
    if (p === "unsupported") {
      els.notifStatus.textContent =
        "Ta przeglądarka nie obsługuje powiadomień systemowych. Alerty w aplikacji nadal działają.";
    } else if (p === "denied") {
      els.notifStatus.textContent =
        "Powiadomienia zablokowane w systemie. Włącz je w ustawieniach przeglądarki/telefonu.";
    } else if (p === "granted" && state.notificationsEnabled) {
      els.notifStatus.textContent =
        "Powiadomienia włączone. Dostaniesz alert przy zbliżającym się terminie.";
    } else {
      els.notifStatus.textContent =
        "Powiadomienia pozwalają dostać alert na telefonie. Wymagają zgody systemu.";
    }
  }

  function openMarkDialog() {
    els.emptyDate.value = S.todayISO();
    els.emptyNote.value = "";
    if (typeof els.markDialog.showModal === "function") {
      els.markDialog.showModal();
    } else {
      els.markDialog.setAttribute("open", "");
    }
  }

  function closeMarkDialog() {
    if (typeof els.markDialog.close === "function") {
      els.markDialog.close();
    } else {
      els.markDialog.removeAttribute("open");
    }
  }

  function addEmptying(date, note) {
    const entry = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      date,
      note: (note || "").trim(),
      createdAt: new Date().toISOString(),
    };
    state.history.push(entry);
    state.lastNotifiedKey = null;
    S.saveState(state);
    renderHome();
    showToast("Wywóz zapisany");
  }

  function deleteEmptying(id) {
    state.history = state.history.filter((h) => h.id !== id);
    state.lastNotifiedKey = null;
    S.saveState(state);
    renderHistory();
    renderHome();
    showToast("Usunięto z historii");
  }

  // Events
  els.btnMark.addEventListener("click", openMarkDialog);
  els.btnHistory.addEventListener("click", () => showView("history"));
  els.btnSettings.addEventListener("click", () => showView("settings"));

  document.querySelectorAll("[data-back]").forEach((btn) => {
    btn.addEventListener("click", () => showView(btn.dataset.back));
  });

  els.markForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const date = els.emptyDate.value;
    if (!date) {
      els.emptyDate.reportValidity();
      return;
    }
    addEmptying(date, els.emptyNote.value);
    closeMarkDialog();
  });

  document.getElementById("mark-cancel").addEventListener("click", closeMarkDialog);

  els.historyList.addEventListener("click", (e) => {
    const btn = e.target.closest(".history-delete");
    if (!btn) return;
    deleteEmptying(btn.dataset.id);
  });

  document.querySelectorAll(".chip[data-interval]").forEach((chip) => {
    chip.addEventListener("click", () => {
      els.intervalDays.value = chip.dataset.interval;
      document.querySelectorAll(".chip[data-interval]").forEach((c) => {
        c.classList.toggle("active", c === chip);
      });
    });
  });

  els.settingsForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const intervalDays = Math.max(7, Math.min(730, Number(els.intervalDays.value) || 90));
    const alertDays = Math.max(1, Math.min(60, Number(els.alertDays.value) || 14));

    state.intervalDays = intervalDays;
    state.alertDays = Math.min(alertDays, intervalDays);
    state.alertsEnabled = els.alertsEnabled.checked;
    state.notes = els.notes.value.trim();

    if (els.notificationsEnabled.checked) {
      const perm = await N.requestPermission();
      state.notificationsEnabled = perm === "granted";
      if (perm !== "granted") {
        els.notificationsEnabled.checked = false;
        showToast(
          perm === "unsupported"
            ? "Powiadomienia niedostępne — alerty w aplikacji działają"
            : "Brak zgody na powiadomienia"
        );
      }
    } else {
      state.notificationsEnabled = false;
    }

    state.lastNotifiedKey = null;
    S.saveState(state);
    updateNotifStatus();
    renderHome();
    showToast("Ustawienia zapisane");
    showView("home");
  });

  els.notificationsEnabled.addEventListener("change", async () => {
    if (els.notificationsEnabled.checked) {
      const perm = await N.requestPermission();
      if (perm !== "granted") {
        els.notificationsEnabled.checked = false;
        updateNotifStatus();
      }
    }
  });

  function maybeShowInstallHint() {
    const isStandalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      window.navigator.standalone === true;
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    els.installHint.hidden = isStandalone || !isMobile;
  }

  function startTicker() {
    clearInterval(tickTimer);
    tickTimer = setInterval(() => {
      renderHome();
    }, 60_000);
  }

  async function registerSW() {
    if (!("serviceWorker" in navigator)) return;
    try {
      await navigator.serviceWorker.register("./sw.js");
    } catch {
      // offline SW optional
    }
  }

  // Init
  els.ringProgress.style.strokeDasharray = String(CIRCUMFERENCE);
  renderHome();
  maybeShowInstallHint();
  startTicker();
  registerSW();

  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") renderHome();
  });
})();
