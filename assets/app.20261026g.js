
(function () {
  var SYNC = {
    url: 'https://api2.cursor.sh/automations/webhook/bd767958-eac5-519b-bb18-30105734b88c',
    key: 'crsr_421919776feb6f0344ec51c3ddb8ad05ed63a4b0c6b1cc0094a84efb62df120f',
    week: '', // set from WEEK.week below
    dailyLimit: 40,
    stateUrl: 'assets/week-state.json'
  };

  var WEEK = {"week":"2026-10-26","deck":"Oct 26\u2013Nov 1","slots":[{"day":"mon","date":"2026-10-26","label":"Monday"},{"day":"tue","date":"2026-10-27","label":"Tuesday"},{"day":"wed","date":"2026-10-28","label":"Wednesday"},{"day":"thu","date":"2026-10-29","label":"Thursday"},{"day":"fri","date":"2026-10-30","label":"Friday"},{"day":"sat","date":"2026-10-31","label":"Saturday"},{"day":"sun","date":"2026-11-01","label":"Sunday"}],"meals":{"mas-masa":{"id":"mas-masa","title":"Mas Masa","do":"Dine out.","well":"4","protein":"out","prep":[],"grocery":[]},"salmon-bowls":{"id":"salmon-bowls","title":"Glazed salmon over greens + cucumber, edamame, scallions (dressing from <a href=\"https://cooking.nytimes.com/recipes/1022255-sesame-salmon-bowls\">Sesame Salmon Bowls</a>)","do":"Whisk \u00bc cup soy sauce, 3 Tbsp white vinegar, 2 Tbsp canola oil, 2 Tbsp chopped scallions, 2 Tbsp minced ginger, \u00bc tsp sesame oil. Oven 425\u00b0; rub salmon with \u00bd tsp sesame oil + salt; roast 10\u201312 min until it flakes, brushing with 2 Tbsp dressing for the last 2 min. Microwave edamame. Bowls: greens, salmon chunks, sliced cucumber, edamame, scallions; drizzle dressing.","well":"4","protein":"fish","prep":[{"kind":"thaw","item":"salmon fillet in fridge","nightsBefore":1}],"grocery":[{"id":"g-salmon-bowls-0-1026g","text":"Soy sauce (Thu)"},{"id":"g-salmon-bowls-1-1026g","text":"Scallions, 2 bunches (Thu)"},{"id":"g-salmon-bowls-2-1026g","text":"Canola or vegetable oil (Thu)"},{"id":"g-salmon-bowls-3-1026g","text":"Mixed greens or romaine, 1 large container (Thu)"},{"id":"g-salmon-bowls-4-1026g","text":"English cucumber, 1 (Thu)"},{"id":"g-salmon-bowls-5-1026g","text":"Frozen shelled edamame, 1 bag (Thu)"},{"id":"g-salmon-bowls-6-1026g","text":"Fresh ginger, 2-inch piece (Thu)"},{"id":"g-salmon-bowls-7-1026g","text":"Toasted sesame oil (Thu)"}]},"comforts-cafe":{"id":"comforts-cafe","title":"Comforts Cafe + cucumbers","do":"Pickup. Slice cucumbers; rice vinegar + salt.","well":"4","protein":"out","prep":[],"grocery":[{"id":"g-comforts-cafe-0-1026e","text":"Cucumbers, 2 (Fri)"}]},"creekside-pizza":{"id":"creekside-pizza","title":"Creekside Pizza + salads","do":"Pickup. Get salads too.","well":"3","protein":"out","prep":[],"grocery":[]},"grilled-chicken-skewers":{"id":"grilled-chicken-skewers","title":"<a href=\"https://cooking.nytimes.com/recipes/1021082-grilled-chicken-skewers-with-tarragon-and-yogurt\">Grilled Chicken Skewers With Tarragon and Yogurt</a> + pita + grilled veggie skewers","do":"Pull chicken 1 hr before; soak wooden skewers 15 min. Thread chicken; thread zucchini, red bell pepper, red onion on separate skewers; oil + salt. Grill chicken over high heat 3\u20135 min until it releases; flip. Melt butter + salt; add lime juice + tarragon; baste chicken; grill scallions + veggie skewers alongside 8 min until chicken is cooked through. Grill pitas 1 min; top with chicken, scallions, herb butter, reserved yogurt, lime, more herbs.","well":"4","protein":"chicken","prep":[{"kind":"marinate","item":"chicken thighs (halved, salted) in yogurt marinade (2\u00bd cups Greek yogurt, \u00bc cup lime juice, 1 Tbsp olive oil, 2\u00bd tsp salt, 1 crushed garlic clove; save 1 cup for serving; add grated ginger + 2 tsp cumin seeds to the bag)","nightsBefore":1}],"grocery":[{"id":"g-grilled-chicken-skewers-0-1026a","text":"Boneless, skinless chicken thighs, 2\u00bd lb (Sun)"},{"id":"g-grilled-chicken-skewers-1-1026a","text":"Full-fat Greek yogurt, 24 oz (Sun)"},{"id":"g-grilled-chicken-skewers-2-1026a","text":"Limes, 4 (Sun)"},{"id":"g-grilled-chicken-skewers-3-1026a","text":"Garlic, 1 head (Sun)"},{"id":"g-grilled-chicken-skewers-4-1026a","text":"Fresh ginger, 2-inch piece (Sun)"},{"id":"g-grilled-chicken-skewers-5-1026a","text":"Scallions, 8 (Sun)"},{"id":"g-grilled-chicken-skewers-6-1026a","text":"Pita breads, 6 (Sun)"},{"id":"g-grilled-chicken-skewers-7-1026a","text":"Butter, \u00bd stick (Sun)"},{"id":"g-grilled-chicken-skewers-8-1026a","text":"Fresh tarragon or mint (Sun)"},{"id":"g-grilled-chicken-skewers-9-1026a","text":"Zucchini, 2 (Sun)"},{"id":"g-grilled-chicken-skewers-10-1026a","text":"Red bell pepper, 1 (Sun)"},{"id":"g-grilled-chicken-skewers-11-1026a","text":"Red onion, 1 (Sun)"},{"id":"g-grilled-chicken-skewers-12-1026a","text":"Wooden skewers (Sun)"}],"url":"https://cooking.nytimes.com/recipes/1021082-grilled-chicken-skewers-with-tarragon-and-yogurt"},"grilled-sausages-peppers":{"id":"grilled-sausages-peppers","title":"Grilled sausages and peppers","do":"Grill sausages and peppers.","well":"3","protein":"pork","prep":[],"grocery":[]},"breakfast-for-dinner":{"id":"breakfast-for-dinner","title":"Breakfast for dinner: French toast, scrambled eggs, arugula salad (for Lauren), tomatoes and fruit for the kids","do":"Make French toast. Scramble eggs. Toss arugula salad. Slice tomatoes; cut fruit. Move salmon fillet to fridge to thaw.","well":"3","protein":"eggs","prep":[],"grocery":[{"id":"g-breakfast-for-dinner-0-1026g","text":"Eggs, 1 dozen (Wed)"},{"id":"g-breakfast-for-dinner-1-1026g","text":"Sliced bread, 1 loaf (Wed)"},{"id":"g-breakfast-for-dinner-2-1026g","text":"Milk (Wed)"},{"id":"g-breakfast-for-dinner-3-1026g","text":"Arugula (Wed)"},{"id":"g-breakfast-for-dinner-4-1026g","text":"Tomatoes (Wed)"},{"id":"g-breakfast-for-dinner-5-1026g","text":"Fruit (Wed)"}]}},"order":["mas-masa","grilled-sausages-peppers","breakfast-for-dinner","salmon-bowls","comforts-cafe","creekside-pizza","grilled-chicken-skewers"],"shops":[{"id":"sunday","title":"Sunday shop","days":["mon","tue","wed","thu"]},{"id":"thursday","title":"Thursday shop","days":["fri","sat","sun"]}]};
  var STATEKEY = 'family-menu-week-state-v2'; // order + meal-keyed scores + updatedAt
  var GKEY = 'family-menu-grocery-v3-' + WEEK.week; // week-scoped so removed checks don't carry over
  var RKEY = 'family-menu-sync-rate-v1';
  SYNC.week = WEEK.week;

  function load(key) { try { return JSON.parse(localStorage.getItem(key) || '{}'); } catch (e) { return {}; } }
  function sanitizeOrder(order) {
    var fallback = WEEK.order.slice();
    if (!Array.isArray(order) || order.length !== WEEK.slots.length) return fallback;
    var ok = order.every(function (id) { return WEEK.meals[id]; });
    return ok ? order.slice() : fallback;
  }
  function saveLocal(key, state) { localStorage.setItem(key, JSON.stringify(state)); }

  function defaultScores() {
    var out = {};
    Object.keys(WEEK.meals).forEach(function (mid) {
      out[mid] = {
        well: String(WEEK.meals[mid].well || ''),
        likes: '',
        ease: ''
      };
    });
    return out;
  }

  function emptyState() {
    return {
      week: WEEK.week,
      updatedAt: '',
      order: WEEK.order.slice(),
      scores: defaultScores()
    };
  }

  function getState() {
    var s = load(STATEKEY);
    if (s.week !== WEEK.week || !Array.isArray(s.order) || s.order.length !== WEEK.order.length) {
      // migrate from older keys once
      var legacyOrder = load('family-menu-order-v1');
      var legacyScores = load('family-menu-scores-v2');
      s = emptyState();
      if (legacyOrder.week === WEEK.week && Array.isArray(legacyOrder.order) && legacyOrder.order.length === WEEK.order.length) {
        s.order = legacyOrder.order.slice();
        s.updatedAt = legacyOrder.updatedAt || '';
      }
      // legacy scores were day-keyed; map current order slots → meals when possible
      if (legacyScores && typeof legacyScores === 'object') {
        WEEK.slots.forEach(function (slot, i) {
          var daySc = legacyScores[slot.day];
          if (!daySc) return;
          var mid = s.order[i];
          if (!mid) return;
          s.scores[mid] = {
            well: daySc.well != null && daySc.well !== '' ? String(daySc.well) : s.scores[mid].well,
            likes: daySc.likes != null ? String(daySc.likes) : '',
            ease: daySc.ease != null ? String(daySc.ease) : ''
          };
        });
      }
      saveLocal(STATEKEY, s);
    }
    if (!s.scores) s.scores = defaultScores();
    Object.keys(WEEK.meals).forEach(function (mid) {
      if (!s.scores[mid]) {
        s.scores[mid] = {
          well: String(WEEK.meals[mid].well || ''),
          likes: '',
          ease: ''
        };
      }
    });
    return s;
  }

  function setState(next) {
    next.week = WEEK.week;
    next.updatedAt = next.updatedAt || new Date().toISOString();
    saveLocal(STATEKEY, next);
  }

  function touchState(mutator) {
    var s = getState();
    mutator(s);
    s.updatedAt = new Date().toISOString();
    setState(s);
    return s;
  }

  function laToday() {
    try {
      return new Intl.DateTimeFormat('en-CA', {
        timeZone: 'America/Los_Angeles',
        year: 'numeric', month: '2-digit', day: '2-digit'
      }).format(new Date());
    } catch (e) {
      return new Date().toISOString().slice(0, 10);
    }
  }

  function flash(id, text) {
    var note = document.getElementById(id);
    if (!note) return;
    note.textContent = text;
    setTimeout(function () { note.textContent = ''; }, 2800);
  }

  function utcDay() { return new Date().toISOString().slice(0, 10); }

  function canSync() {
    var rate = load(RKEY);
    var day = utcDay();
    if (rate.day !== day) return { ok: true, count: 0, day: day };
    var count = rate.count || 0;
    if (count >= SYNC.dailyLimit) return { ok: false, count: count, day: day };
    return { ok: true, count: count, day: day };
  }
  function recordSync(day, count) { saveLocal(RKEY, { day: day, count: count + 1 }); }

  function normalizeRemoteScores(remote) {
    // Accept meal-keyed or legacy day-keyed
    var out = defaultScores();
    if (!remote || !remote.scores) return out;
    var keys = Object.keys(remote.scores);
    var dayNames = { mon:1, tue:1, wed:1, thu:1, fri:1, sat:1, sun:1 };
    var looksLikeDays = keys.length && keys.every(function (k) { return dayNames[k]; });
    if (looksLikeDays) {
      var order = (remote.order && remote.order.length === WEEK.order.length) ? remote.order : WEEK.order;
      keys.forEach(function (day) {
        var idx = WEEK.slots.findIndex(function (sl) { return sl.day === day; });
        if (idx < 0) return;
        var mid = order[idx];
        var sc = remote.scores[day] || {};
        out[mid] = {
          well: sc.well != null && sc.well !== '' ? String(sc.well) : out[mid].well,
          likes: sc.likes != null ? String(sc.likes) : '',
          ease: sc.ease != null ? String(sc.ease) : ''
        };
      });
      return out;
    }
    keys.forEach(function (mid) {
      if (!WEEK.meals[mid]) return;
      var sc = remote.scores[mid] || {};
      out[mid] = {
        well: sc.well != null && sc.well !== '' ? String(sc.well) : out[mid].well,
        likes: sc.likes != null ? String(sc.likes) : '',
        ease: sc.ease != null ? String(sc.ease) : ''
      };
    });
    return out;
  }

  function applyRemoteState(remote) {
    if (!remote || remote.week !== WEEK.week) return false;
    var local = getState();
    var remoteAt = remote.updatedAt || '';
    var localAt = local.updatedAt || '';
    if (localAt && remoteAt && localAt > remoteAt) return false;
    if (localAt && !remoteAt) return false;

    var next = emptyState();
    next.updatedAt = remoteAt || new Date().toISOString();
    if (Array.isArray(remote.order) && remote.order.length === WEEK.order.length) {
      next.order = remote.order.slice();
    } else {
      next.order = local.order.slice();
    }
    next.scores = normalizeRemoteScores(remote);
    setState(next);
    return true;
  }

  function shortDay(label) { return label.slice(0, 3); }

  function addDays(iso, n) {
    var p = iso.split('-').map(Number);
    var d = new Date(Date.UTC(p[0], p[1] - 1, p[2]));
    d.setUTCDate(d.getUTCDate() + n);
    return d.toISOString().slice(0, 10);
  }

  function slotByDate(date) {
    for (var i = 0; i < WEEK.slots.length; i++) {
      if (WEEK.slots[i].date === date) return WEEK.slots[i];
    }
    return null;
  }

  function shopList() {
    // Optional WEEK.shops: [{id, title, days:[...]}]; default Sunday + Wednesday shops.
    if (Array.isArray(WEEK.shops) && WEEK.shops.length) return WEEK.shops;
    return [{ id: 'sunday', title: 'Sunday shop' }, { id: 'wednesday', title: 'Wednesday shop' }];
  }

  function shopForSlotIndex(i) {
    if (Array.isArray(WEEK.shops) && WEEK.shops.length) {
      var day = WEEK.slots[i] && WEEK.slots[i].day;
      for (var k = 0; k < WEEK.shops.length; k++) {
        if ((WEEK.shops[k].days || []).indexOf(day) >= 0) return WEEK.shops[k].id;
      }
      return WEEK.shops[WEEK.shops.length - 1].id;
    }
    // Sun-start weeks: Sun–Wed → Sunday shop; Thu–Sat → Wednesday shop.
    // Mon-start weeks: Mon–Wed → Sunday shop; Thu–Sun → Wednesday shop.
    if (WEEK.slots[0] && WEEK.slots[0].day === 'sun') {
      return i <= 3 ? 'sunday' : 'wednesday';
    }
    return i <= 2 ? 'sunday' : 'wednesday';
  }

  function buildDo(meal, slotIndex, order) {
    var parts = [];
    if (!meal) return '';
    if (meal.do) parts.push(meal.do);
    if (slotIndex < order.length - 1) {
      var nextMeal = WEEK.meals[order[slotIndex + 1]];
      if (nextMeal && nextMeal.prep) {
        nextMeal.prep.forEach(function (p) {
          if (p.nightsBefore === 1) {
            var nextSlot = WEEK.slots[slotIndex + 1];
            if (p.kind === 'thaw') parts.push('Pull ' + p.item + ' tonight for ' + shortDay(nextSlot.label) + '.');
            if (p.kind === 'marinate') parts.push('Marinate ' + p.item + ' tonight for ' + shortDay(nextSlot.label) + '.');
          }
        });
      }
    }
    return parts.join(' ');
  }

  function renderHeadsUp(order) {
    var root = document.getElementById('heads-up-rows');
    if (!root) return;
    var rows = [];
    order.forEach(function (mealId, i) {
      var meal = WEEK.meals[mealId];
      var cook = WEEK.slots[i];
      if (!meal || !meal.prep) return;
      meal.prep.forEach(function (p) {
        var prepDate = addDays(cook.date, -p.nightsBefore);
        var prepSlot = slotByDate(prepDate);
        var when = prepSlot ? (shortDay(prepSlot.label) + ' night') : prepDate;
        var label = p.kind === 'thaw' ? 'Thaw' : (p.kind === 'marinate' ? 'Marinate' : p.kind);
        rows.push({ label: label, text: when + ' — ' + p.item + ' for ' + shortDay(cook.label) });
      });
    });
    if (!rows.length) {
      root.innerHTML = '<div class="row empty">None this week</div>';
      return;
    }
    root.innerHTML = rows.map(function (r) {
      return '<div class="row"><span class="label">' + r.label + '</span> ' + r.text + '</div>';
    }).join('');
  }

  function renderGrocery(order) {
    var root = document.getElementById('grocery-root');
    if (!root) return;
    var gstate = load(GKEY);
    var shops = shopList();
    var buckets = {};
    shops.forEach(function (sh) { buckets[sh.id] = []; });
    var seen = {};
    order.forEach(function (mealId, i) {
      var meal = WEEK.meals[mealId];
      if (!meal || !meal.grocery) return;
      var shop = shopForSlotIndex(i);
      var cookLabel = shortDay(WEEK.slots[i].label);
      meal.grocery.forEach(function (item) {
        if (seen[item.id]) return;
        seen[item.id] = true;
        // Retag cook day on every render so swaps update grocery day labels
        var text = String(item.text || '').replace(/\s*\((Mon|Tue|Wed|Thu|Fri|Sat|Sun)\)\s*$/, '');
        text = text.replace(/\s+$/, '') + ' (' + cookLabel + ')';
        buckets[shop].push({ id: item.id, text: text });
      });
    });

    function shopHtml(name, title, items) {
      var labels = '';
      if (name === 'sunday' && items.length === 0) {
        labels = '<label data-id="s-passed"><input type="checkbox"><span>(Sunday shop already passed — use Wednesday list)</span></label>';
      }
      items.forEach(function (it) {
        labels += '<label data-id="' + it.id + '"><input type="checkbox"><span>' + it.text + '</span></label>';
      });
      return '<section class="grocery" data-shop="' + name + '"><div class="gh">' + title + '</div><div class="gb"><h4>List</h4>' + labels + '</div></section>';
    }

    root.innerHTML = shops.map(function (sh) { return shopHtml(sh.id, sh.title, buckets[sh.id]); }).join('');

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
  }

  function laNowParts() {
    // America/Los_Angeles wall clock parts
    try {
      var parts = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/Los_Angeles',
        year: 'numeric', month: '2-digit', day: '2-digit',
        hour: '2-digit', minute: '2-digit', hourCycle: 'h23'
      }).formatToParts(new Date());
      var map = {};
      parts.forEach(function (p) { if (p.type !== 'literal') map[p.type] = p.value; });
      return {
        date: map.year + '-' + map.month + '-' + map.day,
        hour: parseInt(map.hour, 10),
        minute: parseInt(map.minute, 10)
      };
    } catch (e) {
      var d = new Date();
      return {
        date: d.toISOString().slice(0, 10),
        hour: d.getUTCHours(),
        minute: d.getUTCMinutes()
      };
    }
  }

  function markPastAndToday() {
    // A meal day grays out at 8:00pm PT that night (not at midnight).
    var now = laNowParts();
    var today = now.date;
    var afterDinner = now.hour >= 20;
    document.querySelectorAll('.day[data-date]').forEach(function (el) {
      var d = el.getAttribute('data-date');
      var isPast = d < today || (d === today && afterDinner);
      var isToday = d === today && !afterDinner;
      el.classList.toggle('today', isToday);
      el.classList.toggle('is-past', isPast);
      var wd = el.querySelector('.weekday');
      if (!wd) return;
      var mark = wd.querySelector('.done-mark');
      if (isPast) {
        if (!mark) {
          mark = document.createElement('span');
          mark.className = 'done-mark';
          mark.textContent = '(done)';
          wd.appendChild(mark);
        }
      } else if (mark) {
        mark.remove();
      }
    });
  }

  var swapFrom = null;

  function renderDays(order, scores) {
    var host = document.getElementById('days-root');
    if (!host) return;
    var html = '';
    order.forEach(function (mealId, i) {
      var slot = WEEK.slots[i];
      var meal = WEEK.meals[mealId];
      if (!slot || !meal) return;
      var doText = buildDo(meal, i, order);
      html += '<article class="day" data-date="' + slot.date + '" data-day="' + slot.day + '" data-meal="' + mealId + '" data-well="' + (meal.well || '') + '">';
      html += '<p class="weekday">' + slot.label + '</p>';
      html += '<p class="meal">' + meal.title + '</p>';
      html += '<p class="do">' + doText + '</p>';
      html += '<div class="day-actions"><button type="button" class="swap-btn" data-swap-index="' + i + '">Swap</button></div>';
      html += '<div class="scores-row">';
      html += '<button type="button" class="score-edit" aria-label="Edit scores">+</button>';
      html += '<div class="score-panel">';
      html += '<label>W — Well-rounded<select name="well"><option value="">—</option><option>1</option><option>2</option><option>3</option><option>4</option></select></label>';
      html += '<label>L — Liked<select name="likes"><option value="">—</option><option>1</option><option>2</option><option>3</option><option>4</option></select></label>';
      html += '<label>E — Ease<select name="ease"><option value="">—</option><option>1</option><option>2</option><option>3</option><option>4</option></select></label>';
      html += '<button type="button" class="save">Save</button>';
      html += '</div></div></article>';
    });
    host.innerHTML = html;
    markPastAndToday();

    host.querySelectorAll('.swap-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var idx = parseInt(btn.getAttribute('data-swap-index'), 10);
        var hint = document.getElementById('swap-hint');
        if (swapFrom === null) {
          swapFrom = idx;
          host.querySelectorAll('.day').forEach(function (d, j) {
            d.classList.toggle('swap-pick', j === idx);
          });
          if (hint) hint.textContent = 'Tap Swap on another day to switch meals. Tap the same day to cancel.';
          return;
        }
        if (swapFrom === idx) {
          swapFrom = null;
          host.querySelectorAll('.day').forEach(function (d) { d.classList.remove('swap-pick'); });
          if (hint) hint.textContent = '';
          return;
        }
        touchState(function (s) {
          var a = s.order[swapFrom];
          s.order[swapFrom] = s.order[idx];
          s.order[idx] = a;
        });
        swapFrom = null;
        if (hint) hint.textContent = 'Swapped — syncing…';
        renderAll();
        syncState('swap').then(function (result) {
          if (hint) {
            if (result.synced) hint.textContent = 'Swapped and saved for all devices.';
            else if (result.reason === 'limited') hint.textContent = 'Swapped on this phone — daily sync limit reached.';
            else hint.textContent = 'Swapped on this phone — sync pending.';
            setTimeout(function () { hint.textContent = ''; }, 2800);
          }
        });
      });
    });

    host.querySelectorAll('.day[data-meal]').forEach(function (day) {
      var mealId = day.getAttribute('data-meal');
      var plannedWell = day.getAttribute('data-well') || '';
      var saved = scores[mealId] || {};
      var values = {
        well: saved.well != null && saved.well !== '' ? String(saved.well) : plannedWell,
        likes: saved.likes != null && saved.likes !== '' ? String(saved.likes) : '',
        ease: saved.ease != null && saved.ease !== '' ? String(saved.ease) : ''
      };
      function chip(letter, val) {
        if (!val) return '';
        return '<span class="score-chip" data-v="' + val + '">' + letter + ':' + val + '</span>';
      }
      function renderChips() {
        var row = day.querySelector('.scores-row');
        var edit = row.querySelector('.score-edit');
        var panel = row.querySelector('.score-panel');
        row.querySelectorAll('.score-chip').forEach(function (n) { n.remove(); });
        var h = chip('W', values.well) + chip('L', values.likes) + chip('E', values.ease);
        if (!h) h = '<span class="score-chip empty">Add scores</span>';
        row.insertAdjacentHTML('afterbegin', h);
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
          touchState(function (s) {
            s.scores[mealId] = { well: values.well, likes: values.likes, ease: values.ease };
          });
          panel.classList.remove('open');
          renderChips();
          flash('scores-saved', 'Saving…');
          syncState('scores').then(function (result) {
            if (result.synced) flash('scores-saved', 'Saved for all devices');
            else if (result.reason === 'limited') flash('scores-saved', 'Saved on phone — daily sync limit reached (' + SYNC.dailyLimit + ')');
            else flash('scores-saved', 'Saved on phone — sync pending');
          }).catch(function () {
            flash('scores-saved', 'Saved on phone — sync failed');
          });
        });
      }
      renderChips();
    });
  }

  function collectDaysPayload() {
    var s = getState();
    var days = {};
    s.order.forEach(function (mealId, i) {
      var slot = WEEK.slots[i];
      var meal = WEEK.meals[mealId];
      var sc = s.scores[mealId] || {};
      days[slot.day] = {
        meal: meal ? meal.title : '',
        mealId: mealId,
        well: sc.well || '',
        likes: sc.likes || '',
        ease: sc.ease || ''
      };
    });
    return days;
  }

  function syncState(reason) {
    if (!SYNC.url || !SYNC.key) return Promise.resolve({ synced: false, reason: 'unconfigured' });
    var gate = canSync();
    if (!gate.ok) return Promise.resolve({ synced: false, reason: 'limited', count: gate.count });
    var s = getState();
    var payload = {
      source: 'family-menu',
      reason: reason || 'update',
      week: SYNC.week,
      savedAt: s.updatedAt || new Date().toISOString(),
      order: s.order,
      scores: s.scores,
      days: collectDaysPayload()
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
      try { document.execCommand('copy'); resolve(); }
      catch (e) { reject(e); }
      document.body.removeChild(ta);
    });
  }

  function copyShop(which) {
    var shop = document.querySelector('.grocery[data-shop="' + which + '"]');
    if (!shop) return;
    var lines = groceryLines(shop);
    if (!lines.length) { flash('grocery-saved', 'Nothing left to copy'); return; }
    copyText(lines.join('\n')).then(function () {
      flash('grocery-saved', 'Copied ' + lines.length + ' items — paste into AnyList');
    }).catch(function () {
      flash('grocery-saved', 'Copy failed — long-press and copy manually');
    });
  }

  function wireGroceryToolbar() {
    var removeBtn = document.getElementById('grocery-remove-checked');
    if (removeBtn) removeBtn.onclick = function () {
      var gstate = load(GKEY);
      var root = document.getElementById('grocery-root');
      root.querySelectorAll('label[data-id]').forEach(function (label) {
        var input = label.querySelector('input');
        if (input && input.checked) { gstate[label.getAttribute('data-id')] = 'removed'; label.remove(); }
      });
      saveLocal(GKEY, gstate);
      flash('grocery-saved', 'Removed checked items');
    };
    var resetBtn = document.getElementById('grocery-reset');
    if (resetBtn) resetBtn.onclick = function () {
      if (!confirm('Reset grocery checkoffs on this phone?')) return;
      localStorage.removeItem(GKEY); location.reload();
    };
    var shops = shopList();
    [document.getElementById('copy-sunday'), document.getElementById('copy-wednesday')].forEach(function (btn, i) {
      if (!btn) return;
      var sh = shops[i];
      if (!sh) { btn.style.display = 'none'; return; }
      btn.textContent = 'Copy ' + String(sh.title).replace(/\s*shop$/i, '') + ' \u2192 AnyList';
      btn.onclick = function () { copyShop(sh.id); };
    });
    var copyAll = document.getElementById('copy-all-grocery');
    if (copyAll) copyAll.onclick = function () {
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
    };
  }

  function renderAll() {
    var s = getState();
    renderHeadsUp(s.order);
    renderDays(s.order, s.scores);
    renderGrocery(s.order);
  }

  function boot() {
    if (!document.getElementById('days-root')) {
      markPastAndToday();
      return;
    }
    wireGroceryToolbar();
    var url = SYNC.stateUrl + '?t=' + Date.now();
    fetch(url, { cache: 'no-store' }).then(function (res) {
      if (!res.ok) throw new Error('no state');
      return res.json();
    }).then(function (remote) {
      var applied = applyRemoteState(remote);
      renderAll();
      if (!applied && getState().updatedAt) {
        syncState('resync').catch(function () {});
      }
    }).catch(function () {
      renderAll();
    });
  }

  boot();
})();
