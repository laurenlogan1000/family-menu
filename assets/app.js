(function () {
  var today = new Date().toISOString().slice(0, 10);
  document.querySelectorAll('.day[data-date="' + today + '"]').forEach(function (el) {
    el.classList.add('today');
  });

  var GKEY = 'family-menu-grocery-v2';
  var SKEY = 'family-menu-scores-v1';

  function load(key) {
    try { return JSON.parse(localStorage.getItem(key) || '{}'); } catch (e) { return {}; }
  }
  function save(key, state, noteId) {
    localStorage.setItem(key, JSON.stringify(state));
    var note = document.getElementById(noteId);
    if (note) {
      note.textContent = 'Saved on this phone';
      setTimeout(function () { note.textContent = ''; }, 1400);
    }
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
        save(GKEY, gstate, 'grocery-saved');
      });
    });
    var removeBtn = document.getElementById('grocery-remove-checked');
    if (removeBtn) removeBtn.addEventListener('click', function () {
      gstate = load(GKEY);
      root.querySelectorAll('label[data-id]').forEach(function (label) {
        var input = label.querySelector('input');
        if (input && input.checked) {
          gstate[label.getAttribute('data-id')] = 'removed';
          label.remove();
        }
      });
      save(GKEY, gstate, 'grocery-saved');
    });
    var resetBtn = document.getElementById('grocery-reset');
    if (resetBtn) resetBtn.addEventListener('click', function () {
      if (!confirm('Reset grocery checkoffs on this phone?')) return;
      localStorage.removeItem(GKEY);
      location.reload();
    });
  }

  // Scores
  var sstate = load(SKEY);
  document.querySelectorAll('.day[data-day]').forEach(function (day) {
    var dayId = day.getAttribute('data-day');
    var planned = {
      well: day.getAttribute('data-well') || '',
      likes: '',
      ease: ''
    };
    var saved = sstate[dayId] || {};
    var values = {
      well: saved.well != null && saved.well !== '' ? String(saved.well) : planned.well,
      likes: saved.likes != null && saved.likes !== '' ? String(saved.likes) : '',
      ease: saved.ease != null && saved.ease !== '' ? String(saved.ease) : ''
    };

    function chip(label, key, val) {
      if (!val) return '<span class="score-chip empty" data-key="' + key + '">' + label + ' +</span>';
      return '<span class="score-chip" data-key="' + key + '" data-v="' + val + '">' + label + ' ' + val + '</span>';
    }

    function render() {
      var row = day.querySelector('.scores-row');
      if (!row) return;
      var edit = row.querySelector('.score-edit');
      var panel = row.querySelector('.score-panel');
      row.querySelectorAll('.score-chip').forEach(function (n) { n.remove(); });
      // only show chips that exist
      var html = '';
      if (values.well) html += chip('Well-rounded', 'well', values.well);
      if (values.likes) html += chip('Likes', 'likes', values.likes);
      if (values.ease) html += chip('Ease', 'ease', values.ease);
      if (!values.well && !values.likes && !values.ease) html += '<span class="score-chip empty">Scores</span>';
      row.insertAdjacentHTML('afterbegin', html);
      // put edit button at end
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
      panel.querySelector('button.save').addEventListener('click', function () {
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
