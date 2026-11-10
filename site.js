// Triad Atlas: the top bar shared by every page (logo, page menu, light/dark button),
// and the sliding-dot animation of the chord boxes.
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
  // -----------------------------------------------------------------------------

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
      return `<a href="${p.href}"${file === here ? ' aria-current="page"' : ''}>${p.label}</a>`;
    }).join('');
    document.body.insertAdjacentHTML('afterbegin',
      `<header class="bar"><div class="bar-in"><a class="brand" href="./">${LOGO}${SITE_NAME}</a>`
      + `<nav class="nav" aria-label="Pages">${links}</nav>`
      + `<button type="button" class="theme-btn" id="theme-btn" aria-label="Switch between light and dark colours" title="Light / dark">${ICON}</button></div></header>`);
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

  function start() { buildBar(); watchCards(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
