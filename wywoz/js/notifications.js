/**
 * Alerty i powiadomienia systemowe dla Wywóz.
 */
const Notif = {
  permission() {
    if (!("Notification" in window)) return "unsupported";
    return Notification.permission;
  },

  async requestPermission() {
    if (!("Notification" in window)) return "unsupported";
    if (Notification.permission === "granted") return "granted";
    if (Notification.permission === "denied") return "denied";
    try {
      return await Notification.requestPermission();
    } catch {
      return "denied";
    }
  },

  /**
   * Klucz dnia — żeby nie spamować tym samym alertem.
   */
  alertKey(status) {
    if (!status.hasData) return null;
    return `${status.level}:${status.nextDate}`;
  },

  shouldNotify(state, status) {
    if (!state.alertsEnabled) return false;
    if (!status.hasData) return false;
    if (status.level === "ok" || status.level === "empty") return false;
    const key = this.alertKey(status);
    return key && key !== state.lastNotifiedKey;
  },

  async show(title, body, tag = "wywoz-alert") {
    if (!("Notification" in window) || Notification.permission !== "granted") {
      return false;
    }

    try {
      if (navigator.serviceWorker?.controller) {
        navigator.serviceWorker.controller.postMessage({
          type: "SHOW_NOTIFICATION",
          title,
          body,
          tag,
        });
        return true;
      }

      const n = new Notification(title, {
        body,
        tag,
        icon: "assets/icon.svg",
        badge: "assets/icon.svg",
        lang: "pl",
      });
      n.onclick = () => {
        window.focus();
        n.close();
      };
      return true;
    } catch {
      return false;
    }
  },

  messageFor(status) {
    if (status.level === "overdue") {
      return {
        title: "Wywóz — termin przekroczony",
        body: status.sub,
      };
    }
    if (status.level === "due") {
      return {
        title: "Wywóz — dziś termin",
        body: "Zaplanuj wywóz szamba na dziś.",
      };
    }
    return {
      title: "Wywóz — zbliża się termin",
      body: status.sub,
    };
  },
};

window.WywozNotif = Notif;
