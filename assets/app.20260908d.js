
(function () {
  var SYNC = {
    url: 'https://api2.cursor.sh/automations/webhook/bd767958-eac5-519b-bb18-30105734b88c',
    key: 'crsr_421919776feb6f0344ec51c3ddb8ad05ed63a4b0c6b1cc0094a84efb62df120f',
    week: '2026-09-14'
  };

  var today = new Date().toISOString().slice(0, 10);
  document.querySelectorAll('.day[data-date="' + today + '"]').forEach(function (el) {
    el.classList.add('today');
  });

  var GKEY = 'family-menu-grocery-v3';
  var SKEY = 'family-menu-scores-v2';
  function load(key) { try { return JSON.parse(localStorage.getItem(key) || '{}'); } catch (e) { return {}; } }
  function saveLocal(key, state) { localStorage.setItem(key, JSON.stringify(state)); }

  function flash(id, text) {
    var note = document.getElementById(id);
    if (!note) return;
    note.textContent = text;
    setTimeout(function () { note.textContent = ''; }, 1800);
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
    if (!SYNC.url || !SYNC.key) return Promise.resolve(false);
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
      return true;
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
    function chip(label, val) {
      if (!val) return '';
      return '<span class="score-chip" data-v="' + val + '">' + label + ' ' + val + '</span>';
    }
    function render() {
      var row = day.querySelector('.scores-row');
      var edit = row.querySelector('.score-edit');
      var panel = row.querySelector('.score-panel');
      row.querySelectorAll('.score-chip').forEach(function (n) { n.remove(); });
      var html = chip('Well-rounded', values.well) + chip('Likes', values.likes) + chip('Ease', values.ease);
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
        syncScores().then(function () {
          flash('scores-saved', 'Synced for meal planning');
        }).catch(function () {
          flash('scores-saved', 'Saved on phone — sync failed');
        });
      });
    }
    render();
  });
})();
