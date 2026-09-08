(function () {
  const today = new Date();
  const iso = today.toISOString().slice(0, 10);
  document.querySelectorAll('.day[data-date="' + iso + '"]').forEach(function (el) {
    el.classList.add('today');
  });

  var KEY = 'family-menu-grocery-v1';
  var root = document.getElementById('grocery-root');
  if (!root) return;

  function load() {
    try { return JSON.parse(localStorage.getItem(KEY) || '{}'); } catch (e) { return {}; }
  }
  function save(state) {
    localStorage.setItem(KEY, JSON.stringify(state));
    var note = document.getElementById('grocery-saved');
    if (note) {
      note.textContent = 'Saved on this phone/browser';
      setTimeout(function () { note.textContent = ''; }, 1500);
    }
  }

  var state = load();
  root.querySelectorAll('label[data-id]').forEach(function (label) {
    var id = label.getAttribute('data-id');
    var input = label.querySelector('input');
    if (state[id] === 'removed') {
      label.remove();
      return;
    }
    if (state[id] === 'checked') {
      input.checked = true;
      label.classList.add('done');
    }
    input.addEventListener('change', function () {
      state = load();
      if (input.checked) {
        state[id] = 'checked';
        label.classList.add('done');
      } else {
        delete state[id];
        label.classList.remove('done');
      }
      save(state);
    });
  });

  var removeBtn = document.getElementById('grocery-remove-checked');
  if (removeBtn) {
    removeBtn.addEventListener('click', function () {
      state = load();
      root.querySelectorAll('label[data-id]').forEach(function (label) {
        var input = label.querySelector('input');
        if (input && input.checked) {
          state[label.getAttribute('data-id')] = 'removed';
          label.remove();
        }
      });
      save(state);
    });
  }

  var resetBtn = document.getElementById('grocery-reset');
  if (resetBtn) {
    resetBtn.addEventListener('click', function () {
      if (!confirm('Reset grocery list checkoffs for this week on this device?')) return;
      localStorage.removeItem(KEY);
      location.reload();
    });
  }
})();
