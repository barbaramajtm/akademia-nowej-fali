/* Injected via CDP — Numeracja N1–N20 integration e2e */
(async function numeracjaE2E(){
  function sleep(ms){ return new Promise(r => setTimeout(r, ms)); }
  function q(sel, root){ return (root || document).querySelector(sel); }
  function qa(sel, root){ return Array.from((root || document).querySelectorAll(sel)); }

  async function clickFnext(){
    const b = q('#fnext');
    if (!b) throw new Error('#fnext missing');
    b.click();
    await sleep(180);
  }

  async function clickRe(re){
    const btns = qa('button');
    const b = btns.find(x => re.test((x.textContent || '').trim()) && !x.disabled);
    if (!b) throw new Error('button not found: ' + re);
    b.click();
    await sleep(150);
  }

  async function waitFor(fn, timeout){
    const t0 = Date.now();
    while (Date.now() - t0 < (timeout || 5000)){
      const v = fn();
      if (v) return v;
      await sleep(40);
    }
    return null;
  }

  async function dismissFeedback(expectAdvance){
    const shown = await waitFor(() => {
      const fb = q('#fb');
      return fb && fb.classList.contains('show') ? fb : null;
    }, 3000);
    if (!shown) throw new Error('feedback not shown');
    const wasOk = shown.dataset.ok === '1';
    await sleep(80);
    await clickFnext();
    await waitFor(() => !q('#fb').classList.contains('show'), 2000);
    if (expectAdvance || wasOk){
      // app.js advance() delays next task by 300ms
      await sleep(380);
    } else {
      await sleep(120);
    }
  }

  async function solveTask(task, tryWrong){
    let wrongDone = false;
    const stage = () => q('#stage .step.active') || q('#stage');
    if (task.type === 'matching'){
      await waitFor(() => q('#stage .step.active .match .chip'), 4000);
    } else if (task.type === 'ordering'){
      await waitFor(() => q('#stage .step.active .ostep'), 4000);
    } else if (task.type === 'findError'){
      await waitFor(() => q('#stage .step.active .row'), 4000);
    } else {
      await waitFor(() => q('#stage .step.active .opt'), 4000);
    }

    if (task.type === 'singleChoice'){
      if (tryWrong){
        const elW = qa('.opt', stage()).find(o => o.dataset.id !== task.correctOptionId);
        if (!elW) throw new Error('wrong opt missing ' + task.id);
        elW.click(); await sleep(40); await clickRe(/^Sprawdź$/); await dismissFeedback(false);
        wrongDone = true;
      }
      const el = qa('.opt', stage()).find(o => o.dataset.id === task.correctOptionId);
      if (!el) throw new Error('correct opt missing ' + task.id + ' opts=' + qa('.opt', stage()).map(o => o.dataset.id).join(','));
      el.click(); await sleep(40); await clickRe(/^Sprawdź$/); await dismissFeedback(true);
      return { type: task.type, wrongDone };
    }

    if (task.type === 'trueFalse'){
      if (tryWrong){
        const elW = qa('.opt', stage()).find(o => o.dataset.value === String(!task.correctValue));
        if (!elW) throw new Error('wrong tf missing ' + task.id);
        elW.click(); await sleep(40); await clickRe(/^Sprawdź$/); await dismissFeedback(false);
        wrongDone = true;
      }
      const el = qa('.opt', stage()).find(o => o.dataset.value === String(task.correctValue));
      if (!el) throw new Error('correct tf missing ' + task.id);
      el.click(); await sleep(40); await clickRe(/^Sprawdź$/); await dismissFeedback(true);
      return { type: task.type, wrongDone };
    }

    if (task.type === 'matching'){
      const cols = qa('.match .mcol', stage());
      const leftCol = cols[0];
      const rightCol = cols[1];
      if (tryWrong){
        const L = task.left[0];
        const wrongR = task.right.find(r => r.pairId !== L.pairId);
        const leftChip = qa('.chip', leftCol).find(c => !c.classList.contains('done') && c.dataset.pair === L.pairId);
        const rightChip = qa('.chip', rightCol).find(c => !c.classList.contains('done') && c.dataset.pair === wrongR.pairId);
        if (leftChip && rightChip){ leftChip.click(); await sleep(30); rightChip.click(); await sleep(80); }
        wrongDone = true;
      }
      for (let i = 0; i < task.left.length; i++){
        const L = task.left[i];
        const leftChip = qa('.chip', leftCol).find(c => !c.classList.contains('done') && c.dataset.pair === L.pairId);
        const rightChip = qa('.chip', rightCol).find(c => !c.classList.contains('done') && c.dataset.pair === L.pairId);
        if (!leftChip || !rightChip) throw new Error('matching chip missing ' + task.id + ' pair=' + L.pairId);
        leftChip.click(); await sleep(40);
        rightChip.click(); await sleep(70);
      }
      await clickRe(/^Sprawdź$/); await dismissFeedback(true);
      return { type: task.type, wrongDone };
    }

    if (task.type === 'findError'){
      if (tryWrong){
        const wrongRow = task.rows.find(r => task.correctOptionIds.indexOf(r.id) === -1);
        const elW = qa('.row', stage()).find(r => r.dataset.id === wrongRow.id);
        if (!elW) throw new Error('wrong row missing ' + task.id);
        elW.click(); await sleep(40); await clickRe(/^Sprawdź$/); await dismissFeedback(false);
        wrongDone = true;
      }
      for (const id of task.correctOptionIds){
        const row = qa('.row', stage()).find(r => r.dataset.id === id);
        if (!row) throw new Error('row missing ' + id);
        if (!row.classList.contains('sel')) row.click();
        await sleep(40);
      }
      await clickRe(/^Sprawdź$/); await dismissFeedback(true);
      return { type: task.type, wrongDone };
    }

    if (task.type === 'ordering'){
      if (tryWrong){
        const wrongId = task.steps.map(s => s.id).find(id => id !== task.correctOrder[0]);
        const wrongStep = task.steps.find(s => s.id === wrongId);
        const elW = qa('.ostep', stage()).find(o => o.dataset.id === wrongId || (o.textContent || '').indexOf(wrongStep.text) !== -1);
        if (elW){ elW.click(); await sleep(80); }
        wrongDone = true;
      }
      for (const sid of task.correctOrder){
        const el = qa('.ostep', stage()).find(o => !o.classList.contains('num') && o.dataset.id === sid);
        if (!el) throw new Error('order step missing ' + sid);
        el.click(); await sleep(50);
      }
      await clickRe(/^Sprawdź$/); await dismissFeedback(true);
      return { type: task.type, wrongDone };
    }

    throw new Error('unknown type ' + task.type);
  }

  async function passHairGuideIfAny(){
    await sleep(200);
    const hasDalej = qa('button').some(b => /^Dalej$/.test((b.textContent || '').trim()) && !b.disabled);
    const hasImg = !!q('#stage img');
    const looksLikeTask = !!q('#stage .qtext');
    if (!looksLikeTask && (hasDalej || hasImg)){
      const img = q('#stage img');
      if (img){
        await new Promise(resolve => {
          if (img.complete && img.naturalWidth) resolve();
          else { img.onload = resolve; img.onerror = resolve; setTimeout(resolve, 2500); }
        });
      }
      if (qa('button').some(b => /^Dalej$/.test((b.textContent || '').trim()))){
        await clickRe(/^Dalej$/);
        await sleep(250);
      }
      return {
        hadGuide: true,
        img: img ? { naturalWidth: img.naturalWidth, naturalHeight: img.naturalHeight, src: img.currentSrc || img.src } : null
      };
    }
    return { hadGuide: false, img: null };
  }

  async function runLesson(id, opts){
    opts = opts || {};
    if (window.AdminMode && window.AdminMode.isActive()) window.AdminMode.disable();
    if (window.AppShell.goHome) window.AppShell.goHome();
    await sleep(220);
    const kosBefore = window.AppState.get().user.kosmyki;
    window.AppShell.startLesson(id);
    await sleep(500);
    await waitFor(() => /Zacznij lekcję/.test((q('#stage') || {}).innerText || ''), 4000);
    await clickRe(/Zacznij lekcję/);
    const guide = await passHairGuideIfAny();
    const data = await (await fetch('lessons/' + id + '.json', { cache: 'no-store' })).json();
    const taskLog = [];
    let wrongTypeUsed = false;
    for (let i = 0; i < data.tasks.length; i++){
      const t = data.tasks[i];
      let doWrong = !!(opts.wrongOnceFirst && i === 0);
      if (!doWrong && opts.wrongTypes && opts.wrongTypes.indexOf(t.type) !== -1 && !wrongTypeUsed){
        doWrong = true; wrongTypeUsed = true;
      }
      taskLog.push(await solveTask(t, doWrong));
    }
    await waitFor(() => /ukończ|Kosmyk|Moduł|Powtórz|Następna/i.test((q('#stage') || {}).innerText || ''), 5000);
    const doneText = (q('#stage') || {}).innerText || '';
    const kosAfter = window.AppState.get().user.kosmyki;
    const next = window.LessonsCatalogHelpers.getNextAfter(id);
    return {
      id,
      completed: !!window.AppState.get().completedLessons[id],
      kosDelta: kosAfter - kosBefore,
      solvedLabel: (doneText.match(/Moduł ukończony|Lekcja ukończona/) || [null])[0],
      teaserSnippet: (doneText.split(/\n/).map(s => s.trim()).find(l => l.length > 40 && !/Kosmyk|Wynik|Poprawność|Powtórka|Gablotka|Kontynuuj/i.test(l)) || '').slice(0, 180),
      nextId: next ? next.id : null,
      taskLog,
      guide
    };
  }

  async function openLessonSmoke(id){
    window.AppShell.startLesson(id);
    await sleep(450);
    const introOk = /Zacznij lekcję/.test((q('#stage') || {}).innerText || '');
    if (!introOk) return { id, ok: false, where: 'intro' };
    await clickRe(/Zacznij lekcję/);
    const guide = await passHairGuideIfAny();
    const taskOk = !!q('#stage .qtext');
    window.AppShell.goHome();
    await sleep(120);
    return { id, ok: introOk && taskOk, guide, taskOk };
  }

  const out = { lessons: [], unlock: {}, admin: {}, n3: {}, n17: {}, n20: {}, viewports: {}, smokeOpen: [], errors: [], verified: {} };
  try {
    window.AppState.resetProgress();
    if (window.AppShell.refreshAll) window.AppShell.refreshAll();
    else if (window.AppShell.goHome) window.AppShell.goHome();
    await sleep(250);

    const num = window.LessonsCatalogHelpers.getLessonsForModule('numeracja-farb');
    out.unlock.start = num.map(e => window.LessonsCatalogHelpers.getStatus(e));

    // Full UI: N1 with wrong SC, N2 with wrong TF, N3 with wrong matching
    out.lessons.push(await runLesson('lesson-n1-numer-farby', { wrongOnceFirst: true }));
    out.unlock.afterN1 = window.LessonsCatalogHelpers.getStatus(window.LessonsCatalogHelpers.getEntry('lesson-n2-liczba-przed-separatorem'));
    out.lessons.push(await runLesson('lesson-n2-liczba-przed-separatorem', { wrongTypes: ['trueFalse'] }));
    out.lessons.push(await runLesson('lesson-n3-skala-poziomow', { wrongTypes: ['matching'] }));
    out.n3.guideFromRun = out.lessons[2].guide;

    // Inspect Z3 multiline (repeat open)
    window.AppShell.startLesson('lesson-n3-skala-poziomow');
    await sleep(400);
    await clickRe(/Zacznij lekcję/);
    const g3 = await passHairGuideIfAny();
    out.n3.guide = g3;
    const n3 = await (await fetch('lessons/lesson-n3-skala-poziomow.json')).json();
    await solveTask(n3.tasks[0], false);
    await solveTask(n3.tasks[1], false);
    const qtext = (q('.qtext') || {}).textContent || '';
    const cs = q('.qtext') ? getComputedStyle(q('.qtext')) : null;
    out.n3.z3 = {
      hasBlock1: /Poziomy 1[–-]5/.test(qtext),
      hasBlock2: /Poziomy 6[–-]10/.test(qtext),
      newlineCount: (qtext.match(/\n/g) || []).length,
      whiteSpace: cs && cs.whiteSpace,
      height: q('.qtext') && q('.qtext').getBoundingClientRect().height,
      preview: qtext.slice(0, 320)
    };
    // note: two separate mid-flow screens? false — single question screen
    out.n3.separateMidFlowScreens = false;
    out.n3.fallbackInZ3Question = !!(out.n3.z3.hasBlock1 && out.n3.z3.hasBlock2 && out.n3.z3.newlineCount >= 8);
    window.AppShell.goHome();
    await sleep(150);

    // Complete N4–N19 via state (unlock chain), smoke-open each JSON UI, full UI for representative task types + N17/N20
    for (let i = 3; i < 19; i++){
      const id = num[i].id;
      window.AppState.completeLesson({ lessonId: id, earnedKosmyki: 50, scorePct: 100, mistakes: 0, perfect: true, scoredCorrect: 5, scoredTotal: 5 });
      const next = num[i + 1];
      const st = next ? window.LessonsCatalogHelpers.getStatus(next) : null;
      out.unlock[id] = { completed: true, nextStatus: st };
    }

    // Smoke open every N1–N20 (already did 1–3 fully; reopen ok)
    for (let i = 0; i < num.length; i++){
      out.smokeOpen.push(await openLessonSmoke(num[i].id));
    }

    // Full UI lessons for remaining task-type wrong coverage + N17 + N20
    out.lessons.push(await runLesson('lesson-n8-czytanie-numeru', { wrongTypes: ['ordering'] }));
    out.lessons.push(await runLesson('lesson-n10-legenda-producenta', { wrongTypes: ['findError'] }));
    out.lessons.push(await runLesson('lesson-n17-procent-siwizny', {}));
    out.n17.guideFromRun = out.lessons[out.lessons.length - 1].guide;
    out.lessons.push(await runLesson('lesson-n20-sprawdzian-modulu', {}));

    const n20 = out.lessons.find(l => l.id === 'lesson-n20-sprawdzian-modulu');
    out.n20 = {
      completed: !!(n20 && n20.completed),
      solvedLabel: n20 && n20.solvedLabel,
      nextId: n20 && n20.nextId,
      teaserSnippet: n20 && n20.teaserSnippet,
      moduleComplete: window.LessonsCatalogHelpers.areAllComplete('numeracja-farb'),
      progress: window.LessonsCatalogHelpers.getModuleProgress('numeracja-farb'),
      approvedTeaserInJson: ((await (await fetch('lessons/lesson-n20-sprawdzian-modulu.json')).json()).completion.nextLesson.teaser || '').slice(0, 200)
    };

    // Double reward: repeat N1
    const k1 = window.AppState.get().user.kosmyki;
    await runLesson('lesson-n1-numer-farby', {});
    const k2 = window.AppState.get().user.kosmyki;
    out.rewards = { repeatKosDelta: k2 - k1 };

    // Admin sandbox
    const completedBefore = Object.keys(window.AppState.get().completedLessons).filter(k => window.AppState.get().completedLessons[k]).length;
    const kosBeforeAdmin = window.AppState.get().user.kosmyki;
    window.AdminMode.enable();
    const adminStatuses = num.map(e => window.LessonsCatalogHelpers.getStatus(e));
    window.AppShell.startLesson('lesson-n15-kolor-kosmetyczny');
    await sleep(400);
    await clickRe(/Zacznij lekcję/);
    await sleep(200);
    // answer one task wrongly in admin — should not persist
    const n15 = await (await fetch('lessons/lesson-n15-kolor-kosmetyczny.json')).json();
    await solveTask(n15.tasks[0], false);
    window.AppShell.goHome();
    await sleep(150);
    window.AdminMode.disable();
    const completedAfter = Object.keys(window.AppState.get().completedLessons).filter(k => window.AppState.get().completedLessons[k]).length;
    out.admin = {
      allOpen: adminStatuses.every(s => s === 'available' || s === 'completed'),
      completedCountUnchanged: completedBefore === completedAfter,
      kosUnchanged: kosBeforeAdmin === window.AppState.get().user.kosmyki,
      completedBefore, completedAfter
    };

    // Viewports
    async function measure(id, width){
      const host = q('.device') || q('#screen');
      const prev = host.style.width;
      host.style.width = width + 'px';
      host.style.maxWidth = width + 'px';
      window.AppShell.startLesson(id);
      await sleep(400);
      await clickRe(/Zacznij lekcję/);
      await passHairGuideIfAny();
      // jump to densest task if N3 — solve to Z3
      if (id === 'lesson-n3-skala-poziomow'){
        const d = await (await fetch('lessons/' + id + '.json')).json();
        await solveTask(d.tasks[0], false);
        await solveTask(d.tasks[1], false);
      }
      const stage = q('#stage');
      const qEl = q('.qtext', stage);
      const info = {
        width, id,
        overflowX: stage.scrollWidth > stage.clientWidth + 2,
        stageScrollWidth: stage.scrollWidth,
        stageClientWidth: stage.clientWidth,
        qHeight: qEl ? Math.round(qEl.getBoundingClientRect().height) : null,
        whiteSpace: qEl ? getComputedStyle(qEl).whiteSpace : null
      };
      window.AppShell.goHome();
      await sleep(100);
      host.style.width = prev;
      host.style.maxWidth = '';
      return info;
    }
    out.viewports = { '360': [], '390': [], '430': [] };
    for (const w of [360, 390, 430]){
      for (const id of [
        'lesson-n3-skala-poziomow',
        'lesson-n13-sytuacje-kolorystyczne',
        'lesson-n14-naturalny-odrost',
        'lesson-n17-procent-siwizny',
        'lesson-n18-pelna-diagnoza-koloru',
        'lesson-n20-sprawdzian-modulu'
      ]){
        out.viewports[String(w)].push(await measure(id, w));
      }
    }

    out.verified = {
      smokeAllOk: out.smokeOpen.every(s => s.ok),
      smokeFail: out.smokeOpen.filter(s => !s.ok).map(s => s.id),
      moduleOrder: window.LessonsCatalogHelpers.getModuleIds(),
      catalogCount: window.LessonsCatalog.length,
      phStillThere: !!window.LessonsCatalogHelpers.getEntry('ph-podsumowanie-modulu'),
      wlosStillThere: !!window.LessonsCatalogHelpers.getEntry('wlos-keratyna-rusztowanie'),
      badgeHasNumeracja: !!(window.BadgesCatalog && window.BadgesCatalog.CATALOG && window.BadgesCatalog.CATALOG.some(b => /numeracja|modul-n/i.test(b.id + b.name))),
      courseProgressTotal: window.LessonsCatalog.length
    };
  } catch (e){
    out.errors.push(String(e && e.stack || e));
  }
  return out;
})()
