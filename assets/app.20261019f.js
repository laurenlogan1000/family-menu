
(function () {
  var SYNC = {
    url: 'https://api2.cursor.sh/automations/webhook/bd767958-eac5-519b-bb18-30105734b88c',
    key: 'crsr_421919776feb6f0344ec51c3ddb8ad05ed63a4b0c6b1cc0094a84efb62df120f',
    week: '', // set from WEEK.week below
    dailyLimit: 40,
    stateUrl: 'assets/week-state.json'
  };

  var WEEK = {"week":"2026-10-19","deck":"Oct 19\u201325","slots":[{"day":"sun-lead","date":"2026-10-18","label":"Sunday"},{"day":"mon","date":"2026-10-19","label":"Monday"},{"day":"tue","date":"2026-10-20","label":"Tuesday"},{"day":"wed","date":"2026-10-21","label":"Wednesday"},{"day":"thu","date":"2026-10-22","label":"Thursday"},{"day":"fri","date":"2026-10-23","label":"Friday"},{"day":"sat","date":"2026-10-24","label":"Saturday"},{"day":"sun","date":"2026-10-25","label":"Sunday"}],"meals":{"baked-cod-cracker":{"id":"baked-cod-cracker","title":"<a href=\"https://cooking.nytimes.com/recipes/1022936-baked-cod-with-buttery-cracker-topping\">Baked Cod With Buttery Cracker Topping</a> + rice + <a href=\"https://cooking.nytimes.com/recipes/1015707-lemon-garlic-kale-salad\">Lemon-Garlic Kale Salad</a>","do":"Oven 425\u00b0. Crush crackers in a bowl; stir in 4 Tbsp melted butter, chives, parsley, lemon zest, onion powder, garlic powder. Put cod in ovenproof skillet; drizzle 1 Tbsp melted butter; salt + pepper. Mound crumbs on top. Roast 10\u201316 min, about 10 min per inch, until it flakes. Squeeze lemon over; sprinkle paprika. Rice. Toss kale with lemon, garlic, olive oil, salt; massage.","well":"4","protein":"fish","prep":[],"grocery":[{"id":"g-baked-cod-cracker-0-1018a","text":"Cod fillets, 4 (6\u20138 oz each) (Tue)"},{"id":"g-baked-cod-cracker-1-1018a","text":"Ritz crackers, 4 oz (about 1\u00bd sleeves) (Tue)"},{"id":"g-baked-cod-cracker-2-1018a","text":"Butter, 5 Tbsp (Tue)"},{"id":"g-baked-cod-cracker-3-1018a","text":"Fresh chives (Tue)"},{"id":"g-baked-cod-cracker-4-1018a","text":"Flat-leaf parsley, 1 bunch (Tue)"},{"id":"g-baked-cod-cracker-5-1018a","text":"Lemons, 2 (Tue)"},{"id":"g-baked-cod-cracker-6-1018a","text":"Onion powder (Tue)"},{"id":"g-baked-cod-cracker-7-1018a","text":"Garlic powder (Tue)"},{"id":"g-baked-cod-cracker-8-1018a","text":"Sweet paprika (Tue)"},{"id":"g-baked-cod-cracker-9-1018a","text":"Kosher salt and black pepper (Tue)"},{"id":"g-baked-cod-cracker-10-1018a","text":"Jasmine rice (Tue)"},{"id":"g-kale-salad-0-1020","text":"Kale, 2 bunches (Tue)"},{"id":"g-kale-salad-1-1020","text":"Lemons, 2 more for kale salad (Tue)"},{"id":"g-kale-salad-2-1020","text":"Garlic, 1 head (Tue)"},{"id":"g-kale-salad-3-1020","text":"Olive oil (Tue)"},{"id":"g-kale-salad-4-1020","text":"Parmesan (Tue)"}],"url":"https://cooking.nytimes.com/recipes/1022936-baked-cod-with-buttery-cracker-topping"},"mami-flank-steak":{"id":"mami-flank-steak","title":"Mami\u2019s Flank Steak + couscous + <a href=\"https://cooking.nytimes.com/recipes/1014449-julienne-carrot-salad\">Julienne Carrot Salad</a>","do":"Heat broiler or grill. Pull steak from marinade; pat dry. Cook 5\u20136 min per side to 130\u00b0; rest 10 min; slice thin across the grain. Couscous: boil 1\u00bc cups water + butter + salt; stir in couscous; cover 5 min; fluff. Julienne carrots; salt. Stir shallot, lemon juice, garlic, olive oil, salt, pepper; toss with carrots; rest 5\u201310 min. Chives.","well":"4","protein":"beef","prep":[{"kind":"marinate","item":"flank steak in Mami\u2019s marinade (\u00bc cup vegetable oil, \u2153 cup soy sauce, \u00bc cup red wine vinegar, 2 Tbsp lemon juice, 1 Tbsp Worcestershire, 1 tsp dry mustard, 3 minced garlic cloves, \u00bc tsp pepper; turn once)","nightsBefore":1}],"grocery":[{"id":"g-mami-flank-steak-0-1018a","text":"Flank steak, 2 lb (Thu)"},{"id":"g-mami-flank-steak-1-1018a","text":"Vegetable oil (Thu)"},{"id":"g-mami-flank-steak-2-1018a","text":"Soy sauce (Thu)"},{"id":"g-mami-flank-steak-3-1018a","text":"Red wine vinegar (Thu)"},{"id":"g-mami-flank-steak-4-1018a","text":"Lemon (Thu)"},{"id":"g-mami-flank-steak-5-1018a","text":"Worcestershire sauce (Thu)"},{"id":"g-mami-flank-steak-6-1018a","text":"Dry mustard (Thu)"},{"id":"g-mami-flank-steak-7-1018a","text":"Garlic, 1 head (Thu)"},{"id":"g-mami-flank-steak-8-1018a","text":"Black pepper (Thu)"},{"id":"g-mami-flank-steak-9-1018a","text":"Couscous, 10 oz (Thu)"},{"id":"g-mami-flank-steak-10-1018a","text":"Butter (Thu)"},{"id":"g-mami-flank-steak-12-1018a","text":"Olive oil (Thu)"},{"id":"g-mami-flank-steak-13-1018a","text":"Kosher salt (Thu)"},{"id":"g-carrot-salad-0-1022","text":"Carrots, 1 lb (Thu)"},{"id":"g-carrot-salad-1-1022","text":"Shallot, 1 small (Thu)"},{"id":"g-carrot-salad-2-1022","text":"Lemon, 1 more for carrot salad (Thu)"},{"id":"g-carrot-salad-3-1022","text":"Fresh chives (Thu)"}]},"roasted-tomato-white-bean-stew":{"id":"roasted-tomato-white-bean-stew","title":"<a href=\"https://cooking.nytimes.com/recipes/1020926-roasted-tomato-and-white-bean-stew\">Roasted Tomato and White Bean Stew</a> + sourdough + salad greens","do":"Oven 425\u00b0. Toss chopped parsley + lemon zest; set aside. Toss tomatoes with \u00bc cup olive oil + thyme; salt + pepper; roast 20\u201325 min until collapsed. Cook sliced onion + garlic in 2 Tbsp olive oil 4\u20135 min; skip red-pepper flakes. Add beans + 1\u00bd cups broth; simmer; smash \u00bd cup beans. Add roasted tomatoes + juices; simmer 5\u201310 min. Top with parsley-lemon + olive oil. Toast sourdough. Toss salad greens with olive oil + lemon juice.","well":"4","protein":"meatless","prep":[],"grocery":[{"id":"g-roasted-tomato-white-bean-stew-0-1018a","text":"Cherry or grape tomatoes, 2\u00d710 oz (Fri)"},{"id":"g-roasted-tomato-white-bean-stew-1-1018a","text":"Fresh thyme (Fri)"},{"id":"g-roasted-tomato-white-bean-stew-2-1018a","text":"Flat-leaf parsley, 1 bunch (Fri)"},{"id":"g-roasted-tomato-white-bean-stew-3-1018a","text":"Lemons, 2 (Fri)"},{"id":"g-roasted-tomato-white-bean-stew-4-1018a","text":"Yellow onion, 1 medium (Fri)"},{"id":"g-roasted-tomato-white-bean-stew-5-1018a","text":"Garlic, 1 head (Fri)"},{"id":"g-roasted-tomato-white-bean-stew-6-1018a","text":"Cannellini or butter beans, 2\u00d715 oz cans (Fri)"},{"id":"g-roasted-tomato-white-bean-stew-7-1018a","text":"Chicken or vegetable broth, 32 oz carton (Fri)"},{"id":"g-roasted-tomato-white-bean-stew-8-1018a","text":"Olive oil (Fri)"},{"id":"g-roasted-tomato-white-bean-stew-9-1018a","text":"Flaky salt (Fri)"},{"id":"g-roasted-tomato-white-bean-stew-10-1018a","text":"Kosher salt and black pepper (Fri)"},{"id":"g-roasted-tomato-white-bean-stew-11-1018a","text":"Sourdough loaf (MH Butter) (Fri)"},{"id":"g-roasted-tomato-white-bean-stew-12-1018a","text":"Salad greens, 5 oz (Fri)"}],"url":"https://cooking.nytimes.com/recipes/1020926-roasted-tomato-and-white-bean-stew"},"sol-food":{"id":"sol-food","title":"Sol Food","do":"Pickup.","well":"4","protein":"out","prep":[],"grocery":[]},"rotisserie-chicken":{"id":"rotisserie-chicken","title":"Rotisserie chicken + rice + green beans","do":"Warm rotisserie chicken. Microwave rice pouches. Microwave steam-in-bag green beans.","well":"4","protein":"chicken","prep":[],"grocery":[{"id":"g-rotisserie-chicken-0-1025","text":"Rotisserie chicken (Sun)"},{"id":"g-rotisserie-chicken-1-1025","text":"Microwave rice pouches, 2 (Sun)"},{"id":"g-rotisserie-chicken-2-1025","text":"Steam-in-bag green beans, 2 bags (Sun)"}]},"italian-wedding-soup":{"id":"italian-wedding-soup","title":"<a href=\"https://cooking.nytimes.com/recipes/1019925-italian-wedding-soup-with-turkey-meatballs\">Italian Wedding Soup With Turkey Meatballs</a> + crusty bread","do":"Boil 12 cups broth + 2 Tbsp olive oil. Mix turkey, panko, parsley, egg, garlic, salt, pepper, \u00bd cup Parmesan; roll 20 small meatballs onto oiled foil. Broil 3\u20134 min per side. Cook pasta in broth until al dente; lower to simmer. Add meatballs; simmer 3\u20135 min. Off heat: stir in spinach + lemon zest. Parmesan + lemon squeeze. Warm bread.","well":"4","protein":"turkey","url":"https://cooking.nytimes.com/recipes/1019925-italian-wedding-soup-with-turkey-meatballs","prep":[],"grocery":[{"id":"g-italian-wedding-soup-0-1018","text":"Chicken broth, 3\u00d732 oz cartons (Sun)"},{"id":"g-italian-wedding-soup-1-1018","text":"Lean ground turkey, 1 lb (Sun)"},{"id":"g-italian-wedding-soup-2-1018","text":"Panko (Sun)"},{"id":"g-italian-wedding-soup-3-1018","text":"Flat-leaf parsley, 1 bunch (Sun)"},{"id":"g-italian-wedding-soup-4-1018","text":"Eggs (Sun)"},{"id":"g-italian-wedding-soup-5-1018","text":"Garlic, 1 head (Sun)"},{"id":"g-italian-wedding-soup-6-1018","text":"Parmesan (Sun)"},{"id":"g-italian-wedding-soup-7-1018","text":"Orzo or ditalini, 8 oz (Sun)"},{"id":"g-italian-wedding-soup-8-1018","text":"Baby spinach, 5 oz (Sun)"},{"id":"g-italian-wedding-soup-9-1018","text":"Lemon (Sun)"},{"id":"g-italian-wedding-soup-10-1018","text":"Fresh dill (Sun)"},{"id":"g-italian-wedding-soup-11-1018","text":"Olive oil (Sun)"},{"id":"g-italian-wedding-soup-12-1018","text":"Kosher salt (Sun)"},{"id":"g-italian-wedding-soup-13-1018","text":"Black pepper (Sun)"},{"id":"g-italian-wedding-soup-14-1018","text":"Crusty bread loaf (Sun)"}]},"creekside-pizza":{"id":"creekside-pizza","title":"Creekside Pizza + salads","do":"Pickup. Get salads too.","well":"3","protein":"out","prep":[],"grocery":[]},"chicken-burgers":{"id":"chicken-burgers","title":"Chicken burgers + sliced cucumbers","do":"Grill or pan-cook chicken burgers. Buns, lettuce, tomato. Slice cucumbers.","well":"3","protein":"chicken","prep":[],"grocery":[{"id":"g-chicken-burgers-0-1019","text":"Chicken burger patties, store-bought, 1 pack (4\u20136) (Mon)"},{"id":"g-chicken-burgers-1-1019","text":"Hamburger buns (Mon)"},{"id":"g-chicken-burgers-2-1019","text":"Lettuce, 1 head (Mon)"},{"id":"g-chicken-burgers-3-1019","text":"Tomato, 1 large (Mon)"},{"id":"g-chicken-burgers-4-1019","text":"Cucumbers, 2 (Mon)"}]}},"order":["italian-wedding-soup","chicken-burgers","baked-cod-cracker","creekside-pizza","mami-flank-steak","roasted-tomato-white-bean-stew","sol-food","rotisserie-chicken"],"shops":[{"id":"sunday","title":"Sunday shop","days":["sun-lead","mon","tue","wed","thu"]},{"id":"thursday","title":"Thursday shop","days":["fri","sat","sun"]}]};
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
