
(function () {
  var SYNC = {
    url: 'https://api2.cursor.sh/automations/webhook/bd767958-eac5-519b-bb18-30105734b88c',
    key: 'crsr_421919776feb6f0344ec51c3ddb8ad05ed63a4b0c6b1cc0094a84efb62df120f',
    week: '2026-09-07',
    dailyLimit: 20
  };

  var today = new Date().toISOString().slice(0, 10);
  document.querySelectorAll('.day[data-date="' + today + '"]').forEach(function (el) {
    el.classList.add('today');
  });

  var GKEY = 'family-menu-grocery-v3';
  var SKEY = 'family-menu-scores-v2';
  var RKEY = 'family-menu-sync-rate-v1';

  function load(key) { try { return JSON.parse(localStorage.getItem(key) || '{}'); } catch (e) { return {}; } }
  function saveLocal(key, state) { localStorage.setItem(key, JSON.stringify(state)); }

  function flash(id, text) {
    var note = document.getElementById(id);
    if (!note) return;
    note.textContent = text;
    setTimeout(function () { note.textContent = ''; }, 2200);
  }

  function utcDay() {
    return new Date().toISOString().slice(0, 10);
  }

  function canSync() {
    var rate = load(RKEY);
    var day = utcDay();
    if (rate.day !== day) return { ok: true, count: 0, day: day };
    var count = rate.count || 0;
    if (count >= SYNC.dailyLimit) return { ok: false, count: count, day: day };
    return { ok: true, count: count, day: day };
  }

  function recordSync(day, count) {
    saveLocal(RKEY, { day: day, count: count + 1 });
  }

  function collectScores() {
    var sstate = load(SKEY);
    var days = {};
    document.querySelectorAll('.day[data-day]').forEach(function (day) {
      var dayId = day.getAttribute('data-day');
      var plannedWell = day.getAttribute('data-well') || '';
      var mealEl = day.querySelector('.meal');
      var saved = sstate[dayId] || {};
      var well = saved.well != null && saved.well !== '' ? String(saved.well) : plannedWell;
      var likes = saved.likes != null && saved.likes !== '' ? String(saved.likes) : '';
      var ease = saved.ease != null && saved.ease !== '' ? String(saved.ease) : '';
      days[dayId] = {
        meal: mealEl ? mealEl.textContent.trim() : '',
        well: well,
        likes: likes,
        ease: ease
      };
    });
    return days;
  }

  function syncScores() {
    if (!SYNC.url || !SYNC.key) return Promise.resolve({ synced: false, reason: 'unconfigured' });
    var gate = canSync();
    if (!gate.ok) {
      return Promise.resolve({ synced: false, reason: 'limited', count: gate.count });
    }
    var payload = {
      source: 'family-menu',
      week: SYNC.week,
      savedAt: new Date().toISOString(),
      days: collectScores()
    };
    return fetch(SYNC.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + SYNC.key
      },
      body: JSON.stringify(payload),
      keepalive: true
    }).then(function (res) {
      if (!res.ok) throw new Error('sync failed');
      recordSync(gate.day, gate.count);
      return { synced: true, count: gate.count + 1 };
    });
  }


  function groceryLines(shopEl) {
    var lines = [];
    shopEl.querySelectorAll('label[data-id]').forEach(function (label) {
      if (label.classList.contains('done')) return;
      var span = label.querySelector('span');
      if (span) lines.push(span.textContent.trim());
    });
    return lines;
  }

  function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text);
    }
    return new Promise(function (resolve, reject) {
      var ta = document.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', '');
      ta.style.position = 'fixed';
      ta.style.left = '-9999px';
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand('copy');
        resolve();
      } catch (e) { reject(e); }
      document.body.removeChild(ta);
    });
  }

  function copyShop(which) {
    var shop = document.querySelector('.grocery[data-shop="' + which + '"]');
    if (!shop) return;
    var lines = groceryLines(shop);
    if (!lines.length) {
      flash('grocery-saved', 'Nothing left to copy');
      return;
    }
    copyText(lines.join('\\n')).then(function () {
      flash('grocery-saved', 'Copied ' + lines.length + ' items — paste into AnyList');
    }).catch(function () {
      flash('grocery-saved', 'Copy failed — long-press and copy manually');
    });
  }

  // Grocery
  var root = document.getElementById('grocery-root');
  if (root) {
    var gstate = load(GKEY);
    root.querySelectorAll('label[data-id]').forEach(function (label) {
      var id = label.getAttribute('data-id');
      var input = label.querySelector('input');
      if (gstate[id] === 'removed') { label.remove(); return; }
      if (gstate[id] === 'checked') { input.checked = true; label.classList.add('done'); }
      input.addEventListener('change', function () {
        gstate = load(GKEY);
        if (input.checked) { gstate[id] = 'checked'; label.classList.add('done'); }
        else { delete gstate[id]; label.classList.remove('done'); }
        saveLocal(GKEY, gstate);
        flash('grocery-saved', 'Saved on this phone');
      });
    });
    var removeBtn = document.getElementById('grocery-remove-checked');
    if (removeBtn) removeBtn.addEventListener('click', function () {
      gstate = load(GKEY);
      root.querySelectorAll('label[data-id]').forEach(function (label) {
        var input = label.querySelector('input');
        if (input && input.checked) { gstate[label.getAttribute('data-id')] = 'removed'; label.remove(); }
      });
      saveLocal(GKEY, gstate);
      flash('grocery-saved', 'Removed checked items');
    });
    var resetBtn = document.getElementById('grocery-reset');
    if (resetBtn) resetBtn.addEventListener('click', function () {
      if (!confirm('Reset grocery checkoffs on this phone?')) return;
      localStorage.removeItem(GKEY); location.reload();
    });
    var copySun = document.getElementById('copy-sunday');
    if (copySun) copySun.addEventListener('click', function () { copyShop('sunday'); });
    var copyWed = document.getElementById('copy-wednesday');
    if (copyWed) copyWed.addEventListener('click', function () { copyShop('wednesday'); });
    var copyAll = document.getElementById('copy-all-grocery');
    if (copyAll) copyAll.addEventListener('click', function () {
      var all = [];
      document.querySelectorAll('.grocery[data-shop]').forEach(function (shop) {
        groceryLines(shop).forEach(function (line) { all.push(line); });
      });
      if (!all.length) { flash('grocery-saved', 'Nothing left to copy'); return; }
      copyText(all.join('\n')).then(function () {
        flash('grocery-saved', 'Copied ' + all.length + ' items — paste into AnyList');
      }).catch(function () {
        flash('grocery-saved', 'Copy failed — long-press and copy manually');
      });
    });
  }

  // Scores
  var sstate = load(SKEY);
  document.querySelectorAll('.day[data-day]').forEach(function (day) {
    var dayId = day.getAttribute('data-day');
    var plannedWell = day.getAttribute('data-well') || '';
    var saved = sstate[dayId] || {};
    var values = {
      well: saved.well != null && saved.well !== '' ? String(saved.well) : plannedWell,
      likes: saved.likes != null && saved.likes !== '' ? String(saved.likes) : '',
      ease: saved.ease != null && saved.ease !== '' ? String(saved.ease) : ''
    };
    function chip(letter, val) {
      if (!val) return '';
      return '<span class="score-chip" data-v="' + val + '">' + letter + ':' + val + '</span>';
    }
    function render() {
      var row = day.querySelector('.scores-row');
      var edit = row.querySelector('.score-edit');
      var panel = row.querySelector('.score-panel');
      row.querySelectorAll('.score-chip').forEach(function (n) { n.remove(); });
      var html = chip('W', values.well) + chip('L', values.likes) + chip('E', values.ease);
      if (!html) html = '<span class="score-chip empty">Add scores</span>';
      row.insertAdjacentHTML('afterbegin', html);
      if (edit) row.appendChild(edit);
      if (panel) row.appendChild(panel);
    }
    var editBtn = day.querySelector('.score-edit');
    var panel = day.querySelector('.score-panel');
    if (editBtn && panel) {
      editBtn.addEventListener('click', function () {
        panel.classList.toggle('open');
        panel.querySelector('[name=well]').value = values.well || '';
        panel.querySelector('[name=likes]').value = values.likes || '';
        panel.querySelector('[name=ease]').value = values.ease || '';
      });
      panel.querySelector('.save').addEventListener('click', function () {
        values.well = panel.querySelector('[name=well]').value;
        values.likes = panel.querySelector('[name=likes]').value;
        values.ease = panel.querySelector('[name=ease]').value;
        sstate = load(SKEY);
        sstate[dayId] = { well: values.well, likes: values.likes, ease: values.ease };
        saveLocal(SKEY, sstate);
        panel.classList.remove('open');
        render();
        flash('scores-saved', 'Saved on this phone…');
        syncScores().then(function (result) {
          if (result.synced) flash('scores-saved', 'Synced for meal planning');
          else if (result.reason === 'limited') flash('scores-saved', 'Saved on phone — daily sync limit reached (' + SYNC.dailyLimit + ')');
          else flash('scores-saved', 'Saved on phone');
        }).catch(function () {
          flash('scores-saved', 'Saved on phone — sync failed');
        });
      });
    }
    render();
  });
})();
