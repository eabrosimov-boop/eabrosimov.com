// ===== STATE =====
let currentLang = 'ru';
let currentTab = 'excursions';

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  render(currentLang);
  initTabButtons();
  initLangButtons();
  initSlideshow();
  initFloatingContact();
});

// ===== SLIDESHOW =====
const KB_CLASSES = ['kb-1', 'kb-2', 'kb-3', 'kb-4', 'kb-5'];
const SLIDE_DURATION = 5500;

function initSlideshow() {
  const slides = Array.from(document.querySelectorAll('.slide'));
  const dotsContainer = document.getElementById('slide-dots');
  if (!slides.length) return;

  let current = 0;

  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'slide-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', `Slide ${i + 1}`);
    dot.addEventListener('click', () => goTo(i));
    dotsContainer.appendChild(dot);
  });

  function goTo(index) {
    const dots = dotsContainer.querySelectorAll('.slide-dot');
    const outgoing = slides[current];

    outgoing.classList.remove('active');
    dots[current].classList.remove('active');
    setTimeout(() => outgoing.classList.remove(...KB_CLASSES), 1600);

    current = index;

    const kbClass = KB_CLASSES[current % KB_CLASSES.length];
    const slide = slides[current];
    slide.classList.remove(...KB_CLASSES);
    void slide.offsetWidth;
    slide.classList.add('active', kbClass);
    dots[current].classList.add('active');
  }

  goTo(0);
  setInterval(() => goTo((current + 1) % slides.length), SLIDE_DURATION);
}

// ===== FLOATING CONTACT =====
function initFloatingContact() {
  const wrap = document.getElementById('float-contact');
  const btn  = document.getElementById('float-main');
  if (!wrap || !btn) return;

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    wrap.classList.toggle('open');
  });

  document.addEventListener('click', (e) => {
    if (!wrap.contains(e.target)) wrap.classList.remove('open');
  });
}

// ===== WHATSAPP CTA =====
const WA_NUMBER = '541134572193';

function buildWaLink(tourTitle, lang) {
  const text = CONTENT[lang].cardCta.waTemplate.replace('{tour}', tourTitle);
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
}

function cardCtaHtml(tourTitle, lang) {
  return `<a href="${buildWaLink(tourTitle, lang)}" class="tour-card-cta" target="_blank" rel="noopener">${CONTENT[lang].cardCta.label}</a>`;
}

// ===== DATES =====
function formatDateRange(from, to, lang) {
  const locale = { ru: 'ru-RU', en: 'en-GB', es: 'es-ES' }[lang] || 'en-GB';
  const f = new Date(from + 'T12:00:00');
  const t = new Date(to + 'T12:00:00');
  const sameYear = f.getFullYear() === t.getFullYear();
  const fromStr = f.toLocaleDateString(locale, {
    day: 'numeric', month: 'short',
    ...(sameYear ? {} : { year: 'numeric' })
  });
  const toStr = t.toLocaleDateString(locale, { day: 'numeric', month: 'short', year: 'numeric' });
  return `${fromStr} – ${toStr}`;
}

function getDatesHtml(tourId, lang) {
  const dates = TOUR_DATES[tourId];
  if (!dates || !dates.length) return '';
  const badges = dates.map(d =>
    `<span class="date-badge">${formatDateRange(d.from, d.to, lang)}</span>`
  ).join('');
  return `<div class="tour-dates">${badges}</div>`;
}

// ===== LANGUAGE =====
function setLang(lang) {
  currentLang = lang;
  render(lang);
  document.documentElement.lang = lang;
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

function initLangButtons() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });
  document.querySelector('.lang-btn[data-lang="ru"]').classList.add('active');
}

// ===== RENDER ALL =====
function render(lang) {
  const c = CONTENT[lang];
  renderNav(c);
  renderTicker(c);
  renderHero(c);
  renderAbout(c);
  renderTabs(c);
  renderTourPanel(c, currentTab);
  renderReviews(c);
  renderContact(c);
  renderFooter(c);
}

// ===== NAV =====
function renderNav(c) {
  document.querySelector('.nav-brand').textContent = c.nav.brand;
}

// ===== TICKER =====
function renderTicker(c) {
  const track = document.getElementById('ticker-track');
  if (!track) return;
  const text = c.ticker + '   ·   ';
  track.innerHTML = `<span>${text}</span><span aria-hidden="true">${text}</span>`;
  track.style.animation = 'none';
  void track.offsetWidth;
  track.style.animation = '';
  track.style.animationDuration = Math.max(14, text.length * 0.22) + 's';
}

// ===== HERO =====
function renderHero(c) {
  document.querySelector('.hero-title').textContent = c.hero.title;
  document.querySelector('.hero-subtitle').textContent = c.hero.subtitle;
  document.querySelector('.hero-cta').textContent = c.hero.cta;
}

// ===== ABOUT =====
function renderAbout(c) {
  document.querySelector('.about-label').textContent = c.about.label;
  document.querySelector('.about-title').textContent = c.about.title;
  document.querySelector('.about-p1').textContent = c.about.p1;
  document.querySelector('.about-p2').textContent = c.about.p2;
}

// ===== TABS =====
function initTabButtons() {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      currentTab = btn.dataset.tab;
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderTourPanel(CONTENT[currentLang], currentTab);
    });
  });
}

function renderTabs(c) {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    const key = btn.dataset.tab;
    btn.querySelector('.tab-label').textContent = c.tabs[key];
    btn.querySelector('.tab-sub').textContent = c.tabSub[key];
    btn.classList.toggle('active', key === currentTab);
  });
}

// ===== TOUR PANEL =====
function renderTourPanel(c, tab) {
  const container = document.getElementById('tours-container');

  if (tab === 'antarctica') {
    const t = c.tours.antarctica;
    container.innerHTML = `
      <div class="single-panel">
        <div class="single-panel-img">
          <img src="${t.image}" alt="${t.title}" loading="lazy">
        </div>
        <div class="single-panel-body">
          <span class="partner-badge">${t.label}</span>
          <h2>${t.title}</h2>
          <p>${t.description}</p>
          <a href="${buildWaLink(t.title, currentLang)}" class="btn-primary" target="_blank" rel="noopener">${c.cardCta.label}</a>
        </div>
      </div>`;
    return;
  }

  if (tab === 'individual') {
    const t = c.tours.individual;
    const tagsHtml = t.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
    container.innerHTML = `
      <div class="single-panel">
        <div class="single-panel-img">
          <img src="${t.image}" alt="${t.title}" loading="lazy">
        </div>
        <div class="single-panel-body">
          <h2>${t.title}</h2>
          <p>${t.description}</p>
          <div class="tags-wrap">${tagsHtml}</div>
          <a href="${buildWaLink(t.title, currentLang)}" class="btn-primary" target="_blank" rel="noopener">${c.cardCta.label}</a>
        </div>
      </div>`;
    return;
  }

  const tours = c.tours[tab];
  const cardsHtml = tours.map(tour => `
    <div class="tour-card">
      <div class="tour-card-img">
        <img src="${tour.image}" alt="${tour.title}" loading="lazy">
      </div>
      <div class="tour-card-body">
        <div class="tour-meta">
          <svg class="tour-meta-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="8" cy="8" r="6"/><path d="M8 5v3l2 2"/></svg>
          <span class="tour-meta-duration">${tour.duration}</span>
          <span class="tour-meta-sep">·</span>
          <span class="tour-meta-location">${tour.location}</span>
        </div>
        <h3>${tour.title}</h3>
        <p>${tour.description}</p>
        ${getDatesHtml(tour.id, currentLang)}
        ${cardCtaHtml(tour.title, currentLang)}
      </div>
    </div>`).join('');

  container.innerHTML = `<div class="tours-grid">${cardsHtml}</div>`;
}

// ===== REVIEWS =====
function renderReviews(c) {
  document.querySelector('.reviews-label').textContent = c.reviews.label;
  document.querySelector('.reviews-title').textContent = c.reviews.title;
  const grid = document.querySelector('.reviews-grid');
  grid.innerHTML = c.reviews.items.map(r => `
    <div class="review-card">
      <p class="review-text">${r.text}</p>
      <div class="review-author">${r.name}</div>
      <div class="review-meta">${r.city} · ${r.tour}</div>
    </div>`).join('');
}

// ===== CONTACT =====
function renderContact(c) {
  document.querySelector('.contact-label').textContent = c.contact.label;
  document.querySelector('.contact-title').textContent = c.contact.title;
  document.querySelector('.contact-subtitle').textContent = c.contact.subtitle;
  document.querySelector('.btn-whatsapp span').textContent = c.contact.whatsapp;
  document.querySelector('.btn-telegram span').textContent = c.contact.telegram;
  document.querySelector('.btn-email span').textContent = c.contact.email;
}

// ===== FOOTER =====
function renderFooter(c) {
  document.querySelector('.footer-text').textContent = c.footer;
}
