// Triad Atlas: the top bar shared by every page (logo, page menu, EN/SK language switch, light/dark button),
// the Slovak translation of the texts, the link with settings, the sound (notes and metronome click),
// and the sliding-dot animation of the chord boxes.
(function () {
  // ---- Settings you can change ------------------------------------------------
  // The menu. To add a page, add one line here: it then shows up on every page.
  const PAGES = [
    { href: './',                  label: 'Triads' },
    { href: 'harmonized-scale.html', label: 'Chords of a key' },
    { href: 'progressions.html',   label: 'Progressions' },
    { href: 'major-minor.html',    label: 'Major & minor' },
    { href: 'seventh-chords.html', label: 'Seventh chords' },
    { href: 'sus-chords.html',     label: 'Sus chords' },
    { href: 'added-chords.html',   label: '6 & add9 chords' }
  ];
  const SITE_NAME = 'Triad Atlas';
  // Languages. English is written directly in the pages. The Slovak texts are all in lang-sk.js.
  const LANGS = [
    { code: 'en', label: 'EN', name: 'English' },
    { code: 'sk', label: 'SK', name: 'Slovensky' }
  ];
  // -----------------------------------------------------------------------------

  // Language: a link with ?lang=sk (or ?lang=en) wins, then the choice remembered from the switch,
  // then the language of the device (Slovak or Czech device = Slovak, everything else = English).
  const isLang = c => LANGS.some(l => l.code === c);
  let lang = null;
  try {
    const fromLink = new URLSearchParams(location.search).get('lang');
    if (isLang(fromLink)) { lang = fromLink; localStorage.setItem('triadAtlasLang', lang); }
    else { const saved = localStorage.getItem('triadAtlasLang'); if (isLang(saved)) lang = saved; }
  } catch (err) { /* storage not available */ }
  if (!lang) lang = /^(sk|cs)\b/i.test(navigator.language || '') ? 'sk' : 'en';
  const DICT = (lang === 'sk' && window.TRIAD_SK) || {};

  // T('English text') gives the text in the chosen language. If lang-sk.js has no translation, the English stays.
  // Changing parts are written as {name}: T('Step {n}', { n: 2 }) gives "Step 2" or "Krok 2".
  function T(en, vars) {
    let s = Object.prototype.hasOwnProperty.call(DICT, en) ? DICT[en] : en;
    if (vars && typeof s === 'string') s = s.replace(/\{(\w+)\}/g, (m, k) => (k in vars ? vars[k] : m));
    return s;
  }
  window.T = T;
  window.LANG = lang;

  // Link with settings: a page writes its current choices into the address (?root=Eb&type=min ...), so the link
  // can be bookmarked or sent to somebody and opens the page exactly as it was. The language part (?lang=) is kept.
  window.Link = {
    // the value of one setting from the address, or null
    get(name) { try { return new URLSearchParams(location.search).get(name); } catch (err) { return null; } },
    // writes the settings into the address without loading the page again
    set(values) {
      try {
        const url = new URL(location.href);
        Object.keys(values).forEach(k => url.searchParams.set(k, values[k]));
        history.replaceState(null, '', url);
      } catch (err) { /* address cannot be changed here */ }
    },
    // copies the address; the button says "Link copied" for a moment
    copy(btn) {
      const done = () => { btn.textContent = T('Link copied'); setTimeout(() => { btn.textContent = T('Copy link'); }, 1600); };
      const old = () => {
        const ta = document.createElement('textarea');
        ta.value = location.href; document.body.appendChild(ta); ta.select();
        try { document.execCommand('copy'); done(); } catch (err) { /* copying not available */ }
        ta.remove();
      };
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(location.href).then(done, old);
      else old();
    }
  };

  // Sound: one place for the guitar-like tone and the metronome click, used by every page.
  //   Sound.notes([60, 64, 67])                      plays the notes (MIDI numbers) as a strummed chord
  //   Sound.notes(pitches, { gap: 0.34, dur: 1.8 })  gap = seconds between two notes (bigger = arpeggio), dur = how long a note rings,
  //                                                  wait = seconds from now (for playing in tempo)
  //   Sound.tick(true)                               metronome click; true = the first beat (higher and louder)
  const SOUND = {
    volume: 0.2,        // loudness of one note (0 to about 0.3)
    full: 0.8,          // chords of four or more notes are played this much quieter per note (1 = the same)
    strum: 0.05,        // seconds between two notes of a chord
    ring: 2.4,          // how long a note rings, in seconds
    wave: 'sawtooth',   // the raw tone: 'sawtooth' (bright), 'triangle' (soft), 'square' (hollow)
    click: [0.11, 0.06] // loudness of the metronome: first beat, other beats
  };
  let ac = null;
  function audio() {
    try {
      ac = ac || new (window.AudioContext || window.webkitAudioContext)();
      if (ac.state === 'suspended') ac.resume();
    } catch (err) { ac = null; /* audio not available */ }
    return ac;
  }
  // one plucked note: a bright tone that quickly gets duller and fades, like a string
  function pluck(midi, t0, dur, vol) {
    const f = 440 * Math.pow(2, (midi - 69) / 12);
    const osc = ac.createOscillator(), lp = ac.createBiquadFilter(), g = ac.createGain();
    osc.type = SOUND.wave; osc.frequency.value = f;
    lp.type = 'lowpass';
    lp.frequency.setValueAtTime(Math.min(f * 9, 7000), t0);
    lp.frequency.exponentialRampToValueAtTime(Math.max(f * 1.6, 320), t0 + 0.6);
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.linearRampToValueAtTime(vol, t0 + 0.005);
    g.gain.exponentialRampToValueAtTime(0.0008, t0 + dur);
    osc.connect(lp); lp.connect(g); g.connect(ac.destination);
    osc.start(t0); osc.stop(t0 + dur + 0.05);
  }
  window.Sound = {
    // wakes the sound up (browsers allow sound only after a click); returns false when there is no sound
    ready() { return !!audio(); },
    notes(pitches, o) {
      o = o || {};
      if (!pitches || !pitches.length || !audio()) return;
      try {
        const t = ac.currentTime + 0.03 + (o.wait || 0), gap = o.gap === undefined ? SOUND.strum : o.gap;
        const vol = SOUND.volume * (pitches.length > 3 ? SOUND.full : 1);
        pitches.forEach((m, i) => pluck(m, t + i * gap, o.dur || SOUND.ring, vol));
      } catch (err) { /* audio not available */ }
    },
    tick(first, wait) {
      if (!audio()) return;
      try {
        const t = ac.currentTime + 0.03 + (wait || 0), osc = ac.createOscillator(), g = ac.createGain();
        osc.type = 'square'; osc.frequency.value = first ? 1600 : 1050;
        g.gain.setValueAtTime(SOUND.click[first ? 0 : 1], t);
        g.gain.exponentialRampToValueAtTime(0.0005, t + 0.05);
        osc.connect(g); g.connect(ac.destination);
        osc.start(t); osc.stop(t + 0.07);
      } catch (err) { /* audio not available */ }
    }
  };

  // Texts written directly in the HTML of a page (headings, paragraphs, legends, labels for screen readers)
  // are looked up in lang-sk.js as they are, so they need no special marking.
  function translatePage() {
    if (lang === 'en') return;
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    for (let n = walker.nextNode(); n; n = walker.nextNode()) {
      const txt = n.nodeValue.trim();
      if (!txt || !Object.prototype.hasOwnProperty.call(DICT, txt)) continue;
      const tag = n.parentNode && n.parentNode.nodeName;
      if (tag === 'SCRIPT' || tag === 'STYLE') continue;
      n.nodeValue = n.nodeValue.replace(txt, DICT[txt]);
    }
    document.querySelectorAll('[aria-label]').forEach(el => el.setAttribute('aria-label', T(el.getAttribute('aria-label'))));
  }
  document.documentElement.lang = lang;
  if (lang !== 'en') {
    document.title = T(document.title);
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', T(desc.getAttribute('content')));
  }

  // Light or dark: follows the device until the button is pressed, then remembers the choice.
  const root = document.documentElement;
  try {
    const saved = localStorage.getItem('triadAtlasTheme');
    if (saved === 'light' || saved === 'dark') root.dataset.theme = saved;
  } catch (err) { /* storage not available */ }
  const isDark = () => root.dataset.theme ? root.dataset.theme === 'dark'
    : !!(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);

  const LOGO = '<svg viewBox="0 0 28 28" aria-hidden="true"><rect width="28" height="28" rx="7" fill="#211915"/>'
    + '<path d="M7 20.5 14 13l7-5.5" fill="none" stroke="#BDB4A3" stroke-width="1.6" stroke-linecap="round"/>'
    + '<circle cx="7" cy="20.5" r="3.6" fill="#FF3B3B"/><circle cx="14" cy="13" r="3.6" fill="#F4ECDA"/><circle cx="21" cy="7.5" r="3.6" fill="#F4ECDA"/></svg>';
  const ICON = '<svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="7.5" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M10 2.5a7.5 7.5 0 0 1 0 15z" fill="currentColor"/></svg>';

  function buildBar() {
    const here = location.pathname.split('/').pop() || 'index.html';
    const links = PAGES.map(p => {
      const file = p.href === './' ? 'index.html' : p.href;
      return `<a href="${p.href}"${file === here ? ' aria-current="page"' : ''}>${T(p.label)}</a>`;
    }).join('');
    document.body.insertAdjacentHTML('afterbegin',
      `<header class="bar"><div class="bar-in"><a class="brand" href="./">${LOGO}${SITE_NAME}</a>`
      + `<nav class="nav" aria-label="${T('Pages')}">${links}</nav>`
      + `<div class="lang" role="group" aria-label="${T('Language')}">`
      + LANGS.map(l => `<button type="button" data-lang="${l.code}" lang="${l.code}" title="${l.name}" aria-label="${l.name}" aria-pressed="${l.code === lang}">${l.label}</button>`).join('')
      + `</div><button type="button" class="theme-btn" id="theme-btn" aria-label="${T('Switch between light and dark colours')}" title="${T('Light / dark')}">${ICON}</button></div></header>`);
    // Language switch: remember the choice and load the page again in that language.
    document.querySelector('.lang').addEventListener('click', e => {
      const b = e.target.closest('[data-lang]');
      if (!b || b.dataset.lang === lang) return;
      try { localStorage.setItem('triadAtlasLang', b.dataset.lang); } catch (err) { /* storage not available */ }
      const url = new URL(location.href);
      url.searchParams.set('lang', b.dataset.lang);
      location.replace(url);
    });
    document.getElementById('theme-btn').addEventListener('click', () => {
      root.dataset.theme = isDark() ? 'light' : 'dark';
      try { localStorage.setItem('triadAtlasTheme', root.dataset.theme); } catch (err) { /* storage not available */ }
    });
    const cur = document.querySelector('.nav a[aria-current]');
    if (cur && cur.scrollIntoView) cur.scrollIntoView({ block: 'nearest', inline: 'center' });
  }

  // Chord boxes: play the sliding-dot animation once when a box first scrolls into view, and again on every click.
  function watchCards() {
    if (!('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver(entries => entries.forEach(en => {
      if (!en.isIntersecting) return;
      en.target.classList.add('go');
      io.unobserve(en.target);
    }), { threshold: 0.4 });
    document.querySelectorAll('.card').forEach(c => io.observe(c));
  }
  document.addEventListener('click', e => {
    const card = e.target.closest && e.target.closest('.card');
    if (!card) return;
    card.classList.remove('go');
    void card.offsetWidth;          // lets the browser notice the change, so the animation starts again
    card.classList.add('go');
  });

  function start() { translatePage(); buildBar(); watchCards(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
