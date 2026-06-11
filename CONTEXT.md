# CONTEXT — Evgeny Travels

Личный брендовый сайт Евгения Абросимова — авторские туры по Южной Америке.  
**Живой URL:** eabrosimov.com (GitHub Pages, домен в файле `CNAME`)  
**Дата последнего обновления контекста:** 2026-06-11

---

## Архитектура

Полностью статический сайт. Никакого бэкенда, никаких серверных процессов.

```
index.html          ← главная страница (SPA-like, JS рендерит карточки туров)
tours/              ← 42 статических HTML-файла, по одному на тур×язык
css/style.css       ← все стили
js/content.js       ← источник истины: все тексты, туры, цены, даты
js/main.js          ← логика главной страницы
generate-tours.js   ← Node.js скрипт-сборщик: читает content.js → пишет tours/*.html
tours-content/      ← markdown-файлы с программой по дням (для длинных туров)
images/             ← все картинки (JPG)
```

**Инфраструктура:** GitHub → GitHub Pages. Нет CI/CD, деплой — просто `git push`.

---

## Деплой

```bash
git add <нужные файлы>
git commit -m "описание"
git push
```

GitHub Pages подхватывает за 5–30 секунд. Hard refresh в браузере: **Ctrl+Shift+R**.

**Важно:** `tours/*.html` — это сгенерированные файлы, их нужно коммитить вместе с изменениями в `content.js` или `generate-tours.js`. Они не генерируются автоматически на сервере.

---

## Сборка страниц туров

```bash
node generate-tours.js
```

Скрипт читает `js/content.js` и `tours-content/*.md`, генерирует **42 файла** (14 туров × 3 языка) в папку `tours/`. Запускать после любого изменения в `content.js` или `tours-content/`.

Соглашение по именам файлов:
- `tours/salta.html` — русская версия
- `tours/salta.en.html` — английская
- `tours/salta.es.html` — испанская

---

## Структура content.js

### CONTENT[lang]
Три объекта (ru / en / es), каждый содержит:

```js
CONTENT[lang] = {
  nav,            // навигация
  ticker,         // бегущая строка (HTML, можно <strong>)
  tickerCta,      // кнопка на тикере + waText для WhatsApp
  pricePrefix,    // "от" / "from" / "desde"
  cardCta,        // label и waTemplate кнопки на карточке
  hero,           // тексты hero-секции
  about,          // секция "О себе"
  tabs, tabSub,   // подписи вкладок категорий туров
  tours: {
    excursions: [...],   // однодневные экскурсии
    short: [...],        // короткие туры (2–5 дней)
    long: [...],         // длинные программы
    antarctica: {...},   // партнёрская программа
    individual: {...}    // индивидуальный тур
  },
  reviews,        // отзывы
  contact,        // контактная секция
  footer
}
```

**Структура RU отличается от EN/ES синтаксически:** RU-объект написан в голом JS-стиле (без кавычек у ключей), EN и ES — JSON-like (ключи в кавычках, на одной строке). При редактировании — соблюдай тот же стиль что вокруг.

### TOUR_DATES
```js
TOUR_DATES['tour-id'] = [
  { from: '2026-10-08', to: '2026-10-11' },             // обычная дата
  { from: '2026-10-26', to: '2026-11-08', soldOut: true } // распродана
]
```
Максимум 3 даты отображается на странице тура. Формат дат: ISO `YYYY-MM-DD`. Функция `formatDateRange()` форматирует их по-человечески с учётом языка.

### ACTIVE_TOURS
```js
const ACTIVE_TOURS = {
  short: ['salta', 'oktoberfest-cordoba'],
  long: ['patagonia-trekking', 'peru-bolivia-chile', 'easter-island', 'iguazu-extension'],
  excursions: ['football', 'history-ba', 'tango']
};
```
Туры, которых нет в этом списке, показываются на главной странице с наложением «СКОРО» (coming soon badge). Страницы туров генерируются для **всех** туров из content.js, независимо от ACTIVE_TOURS.

---

## Поля объекта тура (content.js)

| Поле | Обязательное | Описание |
|------|--------------|----------|
| `id` | ✅ | kebab-case, уникальный. Используется как имя файла и ключ в TOUR_DATES |
| `title` | ✅ | Название тура |
| `duration` | ✅ | Строка без вилок: "12 дней", "5 days", "3 días" |
| `location` | ✅ | Место / страны |
| `description` | ✅ | Основной текст. Можно HTML (`<strong>`, `<br>`) |
| `shortDescription` | рекомендуется | 1–2 предложения для карточки на главной. Если нет — показывается `description` |
| `image` | ✅ | Путь к карточной картинке: `images/tours/[type]/name.jpg` |
| `price` | ✅ | Число без знака $: `"4500"` |
| `showPrefix` | | `false` → цена без "от/from/desde". По умолчанию true |
| `active` | | `false` → тур показывается с наложением «СКОРО». Не связано с ACTIVE_TOURS |
| `type` | авто | Проставляется generate-tours.js по позиции в массиве |
| `included` | | Массив строк: что включено |
| `notIncluded` | | Массив строк: что не включено |
| `days` | | Массив строк: программа по дням в виде плоского списка. Если есть — используется вместо слайдера из tours-content/ |
| `youtubeEmbed` | | ID видео YouTube (часть URL после `v=`). Вставляется как 16:9 iframe после программы |
| `faq` | | Массив `{q, a}`: блок FAQ после видео |
| `photos` | | Массив путей к фото: используется для карусели (только для экскурсий) |

---

## Изображения

### Соглашение по путям

| Тип | Папка |
|-----|-------|
| Экскурсии | `images/tours/excursions/` |
| Короткие туры | `images/tours/short-programs/` |
| Длинные туры | `images/tours/long-programs/` |

### Типы изображений на тур

| Суффикс | Назначение | Размер |
|---------|-----------|--------|
| `{id}.jpg` | Карточка на главной странице | ~800×600 |
| `{id}-topcover.jpg` | Шапка (hero) страницы тура | ~1920×1000, широкий горизонтальный |
| `{id}-day1.jpg`, `day2.jpg`, ... | Изображения дней в слайдере программы | ~1200×800 |

Если `{id}-topcover.jpg` отсутствует — в шапке тура будет сломанная картинка.

### Hero-изображения главной страницы
`images/hero/hero-1.jpg` ... `hero-5.jpg` — Ken Burns анимация, горизонтальные, минимум 1920×1080px.

### Настройка позиции фона для шапки тура
В `generate-tours.js` функция `genHtml()` есть блок `bgPosition` — хардкод для туров, где автоматическое `center 50%` смотрится плохо:
```js
const bgPosition = (tourId === 'patagonia-trekking')
  ? '; background-position: center calc(50% + 350px)'
  : (tourId === 'easter-island')
  ? '; background-position: center calc(50% - 135px)'
  : '';
```
Добавляй сюда новые туры по необходимости.

---

## Программа по дням (итинерарий)

Два способа — **автоматический выбор:**

**1. `tour.days` (простой список)** — если в объекте тура в content.js есть поле `days: [...]`, generate-tours.js рендерит простой `<p>` список. Подходит для коротких туров.

**2. Markdown-файлы (слайдер)** — если `tour.days` отсутствует, берётся файл `tours-content/{id}-{lang}.md`. Разбивается по заголовкам `# День N...`, каждый раздел — отдельная вкладка слайдера. Изображения для дней хардкодом в `buildItineraryTabs()` в generate-tours.js.

Экскурсии (`type === 'excursions'`) вместо итинерария показывают фотокарусель.

---

## Распроданные даты (sold-out)

Добавь `soldOut: true` к нужной дате в TOUR_DATES:
```js
{ from: '2026-10-26', to: '2026-11-08', soldOut: true }
```

generate-tours.js автоматически рендерит:
- Зачёркнутую дату (через `.date-text span`)
- Красный бейдж "МЕСТ НЕТ" / "SOLD OUT" / "AGOTADO"
- Ссылку на WhatsApp "Доступна запись в лист ожидания"

Зачёркивание применяется только к тексту даты, а не к ссылке на waitlist (CSS: `.date-item--sold-out .date-text { text-decoration: line-through }`).

---

## Главная страница (index.html + main.js)

Карточки туров рендерятся динамически через `main.js`. Вкладки: экскурсии / короткие / длинные / антарктика / индивидуально.

**Текст в карточке:** `tour.shortDescription || tour.description` — если есть `shortDescription`, показывается оно. Иначе — полное описание (может быть длинным).

**Цена в карточке:** `(showPrefix !== false ? pricePrefix + ' ' : '') + '$' + tour.price`

**Кнопка "Спросить":** ведёт в WhatsApp, номер `541134572193`, pre-filled текст из `cardCta.waTemplate` с подстановкой названия тура.

---

## Мультиязычность

- Три языка: `ru` / `en` / `es`
- Переключатель в хедере, переменная `currentLang` в main.js
- `setLang(lang)` → полный `render(lang)`
- На страницах туров (статический HTML): переключатель перезагружает страницу на нужную версию (`*.html` / `*.en.html` / `*.es.html`)
- Все тексты в CONTENT[lang]. Никаких текстов в HTML или CSS.

---

## Тикер (бегущая строка)

- Фон `#2C1E10`, под хедером
- Текст скроллит слева направо, повторяется
- Вся строка и кнопка "Написать" → WhatsApp
- Название тура внутри: `<strong>текст</strong>`
- Длина анимации: `Math.max(14, text.length * 0.22) + 's'` (автоматически)
- Редактировать: поле `ticker` в CONTENT[lang], поле `tickerCta.waText` для WhatsApp-сообщения

---

## WhatsApp

- Номер: `541134572193` (хардкод в main.js строка ~112)
- Функция `buildWaLink(tourTitle, lang)` — генерирует wa.me URL
- Точки входа: карточка тура, тикер, страница тура (кнопка CTA), waitlist ссылка для sold-out дат

---

## Analytics

### Google Analytics 4
В `index.html`: `<script async src="...gtag/js?id=GA_ID">` и `gtag('config', 'GA_ID')`.  
Отслеживаемые события: `language_switch`, `tab_switch`, `tour_contact_click`, `ticker_click`, `ticker_button_click`, `float_contact_toggle`, `float_contact_click`.

### Yandex.Metrika
В `index.html`: `ym(METRIC_ID, 'init'` (два вхождения) и `mc.yandex.ru/watch/METRIC_ID`.

---

## CSS

Файл: `css/style.css`. Подключается и в `index.html`, и в `tours/*.html` (относительный путь `../css/style.css`).

Ключевые CSS-переменные:
```css
--accent          /* оранжевый, основной цвет кнопок и акцентов */
--accent-hover    /* темнее при hover */
--dark            /* почти-чёрный, основной текст */
--gray            /* серый, вторичный текст */
--gray-light      /* светло-серый, разделители */
--light-bg        /* светлый фон блоков */
--white
```

Важные секции в style.css (есть комментарии-разделители):
- `/* ===== DATES ===== */` — стили дат, sold-out, waitlist
- `/* ===== VIDEO / FAQ ===== */` — `.video-wrapper`, `.faq-list`, `.faq-item`
- `/* ===== FOOTER ===== */`

---

## Как добавить новый тур

1. **content.js** — добавить объект в `tours[type]` для всех трёх языков (ru / en / es):
   ```js
   {
     id: "unique-id",
     title: "Название",
     duration: "N дней",     // без вилок!
     location: "Место",
     description: "...",
     shortDescription: "1–2 предложения для карточки",
     image: "images/tours/short-programs/unique-id.jpg",
     price: "1500",
     showPrefix: false,
     active: true,           // или убрать, чтобы показался "СКОРО"
     included: ["Авиабилеты", "..."],
     notIncluded: ["Питание", "..."]
   }
   ```
2. **TOUR_DATES** — добавить даты в конце content.js
3. **ACTIVE_TOURS** — добавить id в нужный массив
4. **Картинки** — `unique-id.jpg` и `unique-id-topcover.jpg` в нужную папку
5. **Программа по дням** — либо `days: [...]` в объект тура, либо файлы `tours-content/unique-id-ru.md`, `unique-id-en.md`, `unique-id-es.md` + добавить массив dayImages в `buildItineraryTabs()` в generate-tours.js
6. **Сборка:** `node generate-tours.js`
7. **Деплой:** `git add ... && git commit -m "..." && git push`

---

## Вспомогательные скрипты

| Файл | Назначение |
|------|-----------|
| `generate-tours.js` | Генерирует `tours/*.html` из content.js |
| `compress-images.js` | Сжатие картинок через sharp |
| `convert-webp.js` / `convert-webp-to-jpg.js` | Конвертация форматов |
| `convert-patagonia.js` | Разовый скрипт конвертации (legacy) |

Зависимость: `sharp` (npm). Установка: `npm install`.

---

## Файловая карта

| Файл/папка | Назначение |
|------------|-----------|
| `index.html` | Главная страница |
| `css/style.css` | Все стили |
| `js/content.js` | Единственный источник истины по контенту |
| `js/main.js` | Логика главной: slideshow, язык, рендер карточек |
| `generate-tours.js` | Сборщик страниц туров |
| `tours/*.html` | Сгенерированные страницы (коммитить!) |
| `tours-content/*.md` | Программа по дням для длинных туров |
| `content/texts.md` | Устаревший markdown-черновик текстов (для справки) |
| `images/hero/` | 5 фото для Ken Burns на главной |
| `images/tours/excursions/` | Фото экскурсий |
| `images/tours/short-programs/` | Фото коротких туров |
| `images/tours/long-programs/` | Фото длинных туров |
| `images/about/` | Портрет |
| `favicon.svg` | EA монограмма |
| `CNAME` | Домен для GitHub Pages |
| `package.json` | Только зависимость sharp |

---

## Критические правила

- **ХУХУЙ — никогда не "ЖУЖУЙ"**. Правильно: Хухуй (RU), Jujuy (EN/ES).
- **Никаких вилок в длительности туров** (не "12–15 дней", а "12 дней"). Это касается полей `duration` и всех текстов.
- **Коммитить `tours/*.html`** — они не генерируются на сервере.
- **После изменений в content.js** — запустить `node generate-tours.js` перед коммитом.
- **showPrefix: false** — когда цена точная и без "от".
- **Структура RU vs EN/ES в content.js** — разная (RU без кавычек у ключей, EN/ES JSON-стиль на одной строке). Не смешивай стили.

---

## Текущее состояние туров (на 2026-06-11)

### Активные (показываются полностью)
| Тур | Длительность | Цена | Примечания |
|-----|-------------|------|-----------|
| Высокогорная Аргентина (Salta) | 5 дней | — | shortDescription есть |
| Октоберфест в Кордове | 4 дня | $1100 | days[], youtubeEmbed, faq; топкавер добавлен |
| Патагония | 12 дней | $4500 | |
| Перу / Боливия / Чили | 15 дней | $4250 | Октябрь 2026 — soldOut |
| Остров Пасхи (расширение) | 3 дня | — | |
| Игуасу (расширение) | 3 дня | — | |
| Экскурсии: футбол, история БА, танго | 1 день | — | |

### Неактивные (показываются с «СКОРО»)
Барилоче, Мендоса, Игуасу-шорт, Киты в Пунта-Пирамидес, и остальные экскурсии.
