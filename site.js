// Triad Atlas: the top bar shared by every page (logo, page menu, EN/SK language switch, light/dark button),
// the Slovak translation of the texts, and the sliding-dot animation of the chord boxes.
(function () {
  // ---- Settings you can change ------------------------------------------------
  // The menu. To add a page, add one line here: it then shows up on every page.
  const PAGES = [
    { href: './',                  label: 'Triads' },
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
