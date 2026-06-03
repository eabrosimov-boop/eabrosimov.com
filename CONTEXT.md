# Context для сменщика

## Проект
Личный брендовый сайт Евгения Абросимова (tour operator) — туры по Южной Америке. Статический HTML/CSS/JS на GitHub Pages (eabrosimov.com).

## Структура контента
**Источник истины:** `content/texts.md` — все тексты на 3 языках (RU/EN/ES)
**Runtime:** `js/content.js` — JS объект CONTENT[lang] с синхронизацией из texts.md

⚠️ **При любом изменении текстов:** обновляй ОБА файла одновременно. texts.md для ревью, content.js для сайта.

## Языки и локализация
- Переключатель RU/EN/ES в header
- `currentLang` переменная в main.js
- Все UI renderers берут текст из `CONTENT[currentLang]`
- Функция `setLang(lang)` вызывает полный `render(lang)`

## Структура контента в content.js
```
CONTENT[lang] = {
  nav, ticker, tickerCta, pricePrefix, cardCta,
  hero, about, tabs, tabSub,
  tours: {
    excursions: [...],
    short: [...],
    long: [...],
    antarctica: {...},
    individual: {...}
  },
  reviews, contact, footer
}

TOUR_DATES[tourId] = [{ from: "2026-07-15", to: "2026-07-19" }]
```

## Как добавить/отредактировать тур
1. **texts.md** — добавь секцию с RU/EN/ES описаниями
2. **content.js** — добавь объект в нужный массив tours[type]:
   ```js
   {
     id: "unique-id",
     title: "Tour Name",
     duration: "N дней",
     location: "Place",
     description: "...",
     image: "images/tours/type/file.jpg",
     price: "$9999"  // плейсхолдер
   }
   ```
3. **TOUR_DATES** — добавь даты (ISO формат)
4. **Картинка** — положи в `images/tours/type/` (JPG, ~1MB max)
5. Коммит + deploy

## Тикер (бегущая строка)
- Под header с фоном #2C1E10
- Текст скролит слева направо, повторяется
- **Кликабельна** вся строка И кнопка "Написать" → WhatsApp
- Название тура внутри помечено `<strong>` тегом
- Длина анимации автоматически зависит от длины текста: `Math.max(14, text.length * 0.22) + 's'`

## WhatsApp интеграция
- WA номер: `541134572193` (хардкод в main.js)
- Функция `buildWaLink(tourTitle, lang)` → создает wa.me URL с pre-filled текстом
- На каждой карточке кнопка "Спросить"/"Ask"/"Preguntar"
- На тикере текст и кнопка обе ведут в WhatsApp
- Текст шаблона в `cardCta.waTemplate` с плейсхолдером `{tour}`

## Картинки
- **Hero:** `images/hero/hero-1.jpg` ... `hero-5.jpg` (Ken Burns анимация)
  - Горизонтальные JPG, 1920×1080px мин
  - Макс ~1MB каждая (компресс Pillow если нужно)
- **Туры:** `images/tours/[type]/file.jpg`
- **About:** `images/about/evgeny-portrait.jpg`
- **Antarctica:** `images/tours/antarctica/antarctica.jpg`

## Верстка
- Flex-based grid, responsive
- CSS переменные: `--accent` (оранжевый), `--dark`, `--gray`, `--white`
- Tour card meta line: иконка часов → длительность (badge) + иконка → локация
- Card footer: цена слева, кнопка справа
- Float contact button (угол экрана) — раскрывается в 3 опции

## Критические требования
⚠️ **Провинция ХУХУЙ — НИКОГДА "ЖУЖУЙ"**. Это данные, не текст. Во всех файлах только Хухуй/Jujuy.

## Деплой
```bash
git add -A
git commit -m "message"
git push
# 5–10 сек → GitHub Actions → eabrosimov.com обновляется
```
Hard refresh браузера: **Ctrl+Shift+R**

## Файлы по назначению
| Файл | Назначение |
|------|-----------|
| `index.html` | Разметка, слайды, секции, контакты |
| `css/style.css` | Стили, animation, responsive, цветовая схема |
| `js/main.js` | Логика: slideshow, language switcher, rendering |
| `js/content.js` | Все тексты на 3 языках + цены, даты |
| `content/texts.md` | Редактируемый markdown (источник для review) |
| `favicon.svg` | Иконка (EA монограмма на тёмном фоне) |
| `CNAME` | GitHub Pages домен (eabrosimov.com) |

## Цены (плейсхолдеры)
- Все туры сейчас `"$9999"`
- Когда будут реальные цены → обновить в content.js (каждый тур + cardCta.waTemplate может упоминать)
- `pricePrefix` переводится: RU "от", EN "from", ES "desde"

## Bugs / fixes история
- Ken Burns snap (1.6s delay на remove классов) — уже fixed
- DNS (GitHub Pages A records) — уже setup
- Hero image size (1MB compression) — уже done
- Tour card height inconsistency (meta line with ellipsis) — уже fixed
- Ticker: made text clickable + button both open WA — done

---

**Дата создания:** 2026-06-03  
**Версия:** 1.0 (после переводов и цен)
