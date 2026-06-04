#!/usr/bin/env node
const fs = require('fs');
delete require.cache[require.resolve('./js/content.js')];
const { CONTENT, TOUR_DATES } = require('./js/content.js');

const langs = ['ru', 'en', 'es'];
const allTours = [];

const markdownToHtml = (md) => {
  if (!md) return '';
  let html = md
    .replace(/^### (.*?)$/gm, '<h3>$1</h3>')
    .replace(/^## (.*?)$/gm, '<h2>$1</h2>')
    .replace(/^# (.*?)$/gm, '<h1>$1</h1>')
    .replace(/^\*\*(.*?)\*\*/gm, '<strong>$1</strong>')
    .replace(/^- (.*?)$/gm, '<li>$1</li>')
    .replace(/(<li>.*?<\/li>)/s, '<ul>$1</ul>')
    .replace(/\n\n+/g, '</p><p>')
    .replace(/^(.+)$/gm, (match) => {
      if (match.startsWith('<')) return match;
      return '<p>' + match + '</p>';
    });
  return html.replace(/<p><(h[123]|ul|li)/g, '<$1').replace(/<\/(h[123]|ul|li)><\/p>/g, '</$1>');
};

const getTourContent = (tourId, lang) => {
  const file = `tours-content/${tourId}-${lang}.md`;
  if (fs.existsSync(file)) {
    return markdownToHtml(fs.readFileSync(file, 'utf8'));
  }
  return '';
};

const buildItineraryTabs = (tourId, lang) => {
  const file = `tours-content/${tourId}-${lang}.md`;
  if (!fs.existsSync(file)) return '';

  const content = fs.readFileSync(file, 'utf8');
  const sections = content.split('\n# ');

  const dayImages = {
    'salta': [
      '/images/tours/short-programs/arrival.jpg',
      '/images/tours/short-programs/salta-purmamarca.jpg',
      '/images/tours/short-programs/salinas-grandes.jpg',
      '/images/tours/short-programs/uquia-tilcara.jpg',
      '/images/tours/short-programs/salta-return.jpg'
    ],
    'patagonia-trekking': Array.from({length: 12}, (_, i) => '/images/tours/long-programs/patagonia-trekking-day' + (i + 1) + '.jpg')
  };

  const images = dayImages[tourId] || [];

  let tabs = '<div class="itinerary-tabs">';
  let panels = '<div class="itinerary-panels">';

  sections.forEach((section, idx) => {
    const lines = section.trim().split('\n');
    let title = lines[0].trim();
    if (title.startsWith('#')) title = title.replace(/^#+\s*/, '');
    let body = lines.slice(1).join('\n').trim();
    body = body.replace(/\n---\n/g, '');

    const dayNum = idx + 1;
    const isActive = idx === 0 ? ' active' : '';
    const dayImage = images[idx] || 'images/placeholder.jpg';

    tabs += '<button class="itinerary-tab' + isActive + '" onclick="switchTab(event)">' + dayNum + '</button>';
    panels += '<div class="itinerary-panel' + isActive + '"><div class="day-header">' + title + '</div><div class="day-content"><img src="' + dayImage + '" alt="' + title + '" class="day-image"><div class="day-text">' + markdownToHtml(body) + '</div></div></div>';
  });

  tabs += '</div>';
  panels += '</div>';

  return tabs + panels;
};

langs.forEach(lang => {
  const c = CONTENT[lang];
  const tours = [
    ...c.tours.excursions.map(t => ({...t, type: 'excursions', lang})),
    ...c.tours.short.map(t => ({...t, type: 'short', lang})),
    ...c.tours.long.map(t => ({...t, type: 'long', lang}))
  ];

  tours.forEach(tour => {
    let existing = allTours.find(t => t.id === tour.id);
    if (!existing) {
      existing = {id: tour.id, type: tour.type, langs: {}};
      allTours.push(existing);
    }
    existing.langs[lang] = tour;
  });
});

const datesHtml = (tourId) => {
  const dates = TOUR_DATES[tourId] || [];
  return dates.slice(0, 3).map(d => '<div class="date-item">' + d.from + ' → ' + d.to + '</div>').join('');
};

const genHtml = (tour, lang, tourId) => {
  const c = CONTENT[lang];
  const langCode = lang === 'ru' ? 'ru' : (lang === 'en' ? 'en' : 'es');
  const topcoverPath = (tour.type === 'long')
    ? '/images/tours/long-programs/' + tourId + '-topcover.webp'
    : '/images/tours/short-programs/' + tourId + '-topcover.jpg';
  const labels = {
    ru: { overview: 'Обзор', itinerary: 'Программа по дням', included: 'Что включено', dates: 'Доступные даты', day1: 'День 1', day2: 'День 2', desc1: 'Подробное описание первого дня', desc2: 'Подробное описание второго дня', accom: 'Проживание в отобранных отелях', meals: 'Питание по программе', trans: 'Местный транспорт', guide: 'Профессиональный гид' },
    en: { overview: 'Overview', itinerary: 'Day-by-Day Itinerary', included: "What's Included", dates: 'Available Dates', day1: 'Day 1', day2: 'Day 2', desc1: 'Detailed description of day 1', desc2: 'Detailed description of day 2', accom: 'Accommodation in selected hotels', meals: 'Meals as per itinerary', trans: 'Local transportation', guide: 'Professional guide' },
    es: { overview: 'Descripción', itinerary: 'Itinerario por días', included: 'Incluido', dates: 'Fechas disponibles', day1: 'Día 1', day2: 'Día 2', desc1: 'Descripción detallada del día 1', desc2: 'Descripción detallada del día 2', accom: 'Alojamiento en hoteles seleccionados', meals: 'Comidas según itinerario', trans: 'Transporte local', guide: 'Guía profesional' }
  };
  const l = labels[lang];
  const priceStr = ((tour.showPrefix !== false) ? c.pricePrefix + ' ' : '');

  const parts = [
    '<!DOCTYPE html>',
    '<html lang="' + langCode + '">',
    '<head>',
    '  <meta charset="UTF-8">',
    '  <meta name="viewport" content="width=device-width, initial-scale=1.0">',
    '  <title>' + tour.title + ' — Evgeny Abrosimov</title>',
    '  <link rel="preconnect" href="https://fonts.googleapis.com">',
    '  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>',
    '  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet">',
    '  <link rel="stylesheet" href="../css/style.css">',
    '  <link rel="icon" type="image/svg+xml" href="../favicon.svg">',
    '</head>',
    '<body>',
    '',
    '  <header>',
    '    <nav>',
    '      <a href="../index.html" class="nav-brand">' + c.nav.brand + '</a>',
    '      <div class="lang-switcher">',
    '        <button class="lang-btn ' + (lang === 'ru' ? 'active' : '') + '" data-lang="ru">RU</button>',
    '        <button class="lang-btn ' + (lang === 'en' ? 'active' : '') + '" data-lang="en">EN</button>',
    '        <button class="lang-btn ' + (lang === 'es' ? 'active' : '') + '" data-lang="es">ES</button>',
    '      </div>',
    '    </nav>',
    '  </header>',
    '',
    '  <section class="tour-hero" style="background-image: url(' + JSON.stringify(topcoverPath) + ')">',
    '    <div class="tour-hero-overlay"></div>',
    '    <div class="tour-hero-content">',
    '      <h1>' + tour.title + '</h1>',
    '      <p class="tour-hero-meta">',
    '        <span>⏱️ ' + tour.duration + '</span>',
    '        <span>📍 ' + tour.location + '</span>',
    '      </p>',
    '    </div>',
    '  </section>',
    '',
    '  <article class="container tour-article">',
    '    <div class="tour-content">',
    '      <section class="tour-section">',
    '        <h2>' + l.overview + '</h2>',
    '        <p>' + tour.description + '</p>',
    '      </section>',
    '',
    '      <section class="tour-section">',
    '        <h2>' + l.itinerary + '</h2>',
    buildItineraryTabs(tourId, lang),
    '      </section>',
    '',
    '      <section class="tour-section">',
    '        <h2>' + l.included + '</h2>',
    '        <ul class="checklist">',
    '          <li>' + l.accom + '</li>',
    '          <li>' + l.meals + '</li>',
    '          <li>' + l.trans + '</li>',
    '          <li>' + l.guide + '</li>',
    '        </ul>',
    '      </section>',
    '',
    '      <section class="tour-section">',
    '        <h2>' + l.dates + '</h2>',
    '        <div class="dates-list">' + datesHtml(tour.id) + '</div>',
    '      </section>',
    '',
    '      <section class="tour-section cta-section">',
    '        <p class="tour-price-large">' + priceStr + '<strong>$' + tour.price + '</strong></p>',
    '        <a href="https://wa.me/541134572193" class="btn-primary" target="_blank" rel="noopener">' + c.cardCta.label + '</a>',
    '      </section>',
    '    </div>',
    '  </article>',
    '',
    '  <footer>',
    '    <div class="footer-content">',
    '      <p class="footer-text">© 2026 Evgeny Abrosimov. All rights reserved.</p>',
    '      <div class="footer-socials">',
    '        <a href="https://wa.me/541134572193" class="footer-social footer-wa" target="_blank"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg></a>',
    '        <a href="https://t.me/eabrosimov" class="footer-social footer-tg" target="_blank"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.19 13.664l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.958.895z"/></svg></a>',
    '        <a href="https://instagram.com/ah_etot_evgenij" class="footer-social footer-ig" target="_blank"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.646.069 4.85 0 3.204-.012 3.584-.07 4.85-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 110-2.881 1.44 1.44 0 010 2.881z"/></svg></a>',
    '      </div>',
    '    </div>',
    '  </footer>',
    '',
    '  <script>',
    "    function switchTab(e) {",
    "      const clicked = e.target;",
    "      const tabs = clicked.parentElement.querySelectorAll('.itinerary-tab');",
    "      const panels = clicked.parentElement.nextElementSibling.querySelectorAll('.itinerary-panel');",
    "      const index = Array.from(tabs).indexOf(clicked);",
    "      tabs.forEach(t => t.classList.remove('active'));",
    "      panels.forEach(p => p.classList.remove('active'));",
    "      clicked.classList.add('active');",
    "      panels[index].classList.add('active');",
    "    }",
    "    const tourId = '" + tour.id.replace(/'/g, "\\'") + "';",
    "    document.querySelectorAll('.lang-btn').forEach(btn => {",
    "      btn.addEventListener('click', () => {",
    "        const lang = btn.dataset.lang;",
    "        const file = lang === 'ru' ? tourId + '.html' : tourId + '.' + lang + '.html';",
    "        window.location.href = file;",
    '      });',
    '    });',
    '  </script>',
    '</body>',
    '</html>'
  ];

  return parts.join('\n');
};

allTours.forEach(tourGroup => {
  langs.forEach(lang => {
    const tour = tourGroup.langs[lang];
    if (!tour) return;
    const filename = lang === 'ru' ? ('tours/' + tourGroup.id + '.html') : ('tours/' + tourGroup.id + '.' + lang + '.html');
    fs.writeFileSync(filename, genHtml(tour, lang, tourGroup.id));
    console.log('✓ ' + filename);
  });
});

console.log('\n✅ Generated ' + (allTours.length * 3) + ' pages');
