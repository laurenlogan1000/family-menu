(function () {
  var today = new Date().toISOString().slice(0, 10);
  document.querySelectorAll('.day[data-date="' + today + '"]').forEach(function (el) {
    el.classList.add('today');
  });

  var GKEY = 'family-menu-grocery-v3';
  var SKEY = 'family-menu-scores-v2';
  function load(key) { try { return JSON.parse(localStorage.getItem(key) || '{}'); } catch (e) { return {}; } }
  function save(key, state, noteId) {
    localStorage.setItem(key, JSON.stringify(state));
    var note = document.getElementById(noteId);
    if (note) { note.textContent = 'Saved on this phone'; setTimeout(function(){ note.textContent=''; }, 1400); }
  }

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
        save(GKEY, gstate, 'grocery-saved');
      });
    });
    var removeBtn = document.getElementById('grocery-remove-checked');
    if (removeBtn) removeBtn.addEventListener('click', function () {
      gstate = load(GKEY);
      root.querySelectorAll('label[data-id]').forEach(function (label) {
        var input = label.querySelector('input');
        if (input && input.checked) { gstate[label.getAttribute('data-id')] = 'removed'; label.remove(); }
      });
      save(GKEY, gstate, 'grocery-saved');
    });
    var resetBtn = document.getElementById('grocery-reset');
    if (resetBtn) resetBtn.addEventListener('click', function () {
      if (!confirm('Reset grocery checkoffs on this phone?')) return;
      localStorage.removeItem(GKEY); location.reload();
    });
  }

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
        save(SKEY, sstate, 'scores-saved');
        panel.classList.remove('open');
        render();
      });
    }
    render();
  });
})();
