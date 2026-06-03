// Все тексты сайта. Источник истины — content/texts.md
// При редактировании текстов — обновляйте оба файла

const CONTENT = {
  ru: {
    nav: { brand: "Евгений Абросимов" },
    lang: "ru",
    ticker: "Ближайший тур: Северо-Запад Аргентины (Жужуй) · 15–19 июля 2026",
    tickerCta: { label: "Написать", waText: "Привет! Хочу узнать подробности о ближайшем туре." },
    cardCta: {
      label: "Спросить",
      waTemplate: "Привет! Меня интересует «{tour}». Хочу узнать подробнее."
    },
    hero: {
      title: "Небольшие группы.\nБольшие приключения.",
      subtitle: "Более трёх лет я исследую Южную Америку — пешком, на автомобиле, в экспедициях и длительных путешествиях. От шумных кварталов Буэнос-Айреса до ледников Патагонии, от древних дорог инков до берегов Антарктиды. Этот опыт лёг в основу путешествий, которые помогают увидеть континент не глазами туриста, а глазами исследователя.",
      cta: "Написать мне"
    },
    about: {
      label: "ОБО МНЕ",
      title: "Привет, я Евгений",
      p1: "В детстве я зачитывался книгами о путешествиях и мечтал увидеть места, которые казались чем-то невероятно далёким. Со временем эта мечта привела меня в Южную Америку, где я живу уже более трёх лет.",
      p2: "За это время я проехал тысячи километров по Аргентине и соседним странам, побывал в горах, походах и экспедициях. Сейчас я организую путешествия для небольших групп и показываю места, которые люблю сам. Мне важно, чтобы поездка помогала не только увидеть новые пейзажи, но и лучше понять страну, её людей и культуру."
    },
    tabs: {
      excursions: "Экскурсии",
      short: "Короткие туры",
      long: "Длинные программы",
      antarctica: "Антарктида",
      individual: "Индивидуально"
    },
    tabSub: {
      excursions: "1 день · Буэнос-Айрес",
      short: "2–5 дней · Аргентина",
      long: "13–17 дней · Перу, Боливия, Чили, Патагония",
      antarctica: "Партнёрская программа",
      individual: "Ваш маршрут с нуля"
    },
    tours: {
      excursions: [
        {
          id: "history-ba",
          title: "Понять Буэнос-Айрес",
          duration: "1 день",
          location: "Буэнос-Айрес",
          description: "Как небольшой порт на краю империи превратился в один из самых необычных городов мира. Прогулка по старейшим районам Буэнос-Айреса через историю, людей и большие перемены.",
          image: "images/tours/excursions/history-ba.jpg"
        },
        {
          id: "recoleta",
          title: "Кладбище Реколеты",
          duration: "1 день",
          location: "Буэнос-Айрес",
          description: "История Аргентины через судьбы людей, которые её создавали. Президенты, национальные герои, миллиардеры и Эвита — все они встретятся нам среди мавзолеев Реколеты.",
          image: "images/tours/excursions/recoleta-cemetery.jpg"
        },
        {
          id: "football",
          title: "Аргентина футбольная",
          duration: "1 день",
          location: "Буэнос-Айрес",
          description: "Для многих поездка на аргентинский футбол становится главным впечатлением от путешествия. Если позволяет календарь — идём на матч. Если нет — всё равно поговорим о клубах, легендах и страсти, которая сделала местный футбол знаменитым на весь мир.",
          image: "images/tours/excursions/football-argentina.jpg"
        },
        {
          id: "tango",
          title: "Танго-шоу",
          duration: "1 день",
          location: "Буэнос-Айрес",
          description: "Рекомендации и бронирование танго-шоу в Буэнос-Айресе. Подберу оптимальный вариант по формату, расположению и бюджету, а также помогу получить скидку там, где это возможно.",
          image: "images/tours/excursions/tango-show.jpg"
        }
      ],
      short: [
        {
          id: "mendoza",
          title: "Мендоса: вино и Анды",
          duration: "3 дня",
          location: "Мендоса",
          description: "Лучшие вина Аргентины рождаются здесь, у подножия Анд. Нас ждут дегустации, винодельни разных масштабов, гастрономия и несколько дней в одном из самых приятных регионов страны.",
          image: "images/tours/short-programs/mendoza-wine.jpg"
        },
        {
          id: "iguazu-short",
          title: "Водопады Игуасу",
          duration: "2 дня",
          location: "Аргентина",
          description: "Один из самых впечатляющих природных феноменов планеты. Заходим с аргентинской стороны — ближе и мощнее всего. Звук, брызги, радуги. Это невозможно передать словами.",
          image: "images/tours/short-programs/iguazu-falls.jpg"
        },
        {
          id: "salta",
          title: "Высокогорная Аргентина",
          duration: "4 дня",
          location: "Сальта, Жужуй",
          description: "Северо-запад Аргентины ближе к Перу и Боливии, чем к Буэнос-Айресу. Край высокогорных деревень, древних культур и дорог, по которым когда-то двигались караваны инков. Здесь сохранились традиции коренных народов и одни из самых необычных пейзажей Южной Америки.",
          image: "images/tours/short-programs/salta-northwest.jpg"
        },
        {
          id: "bariloche",
          title: "Барилоче: сердце озёрного края",
          duration: "4 дня",
          location: "Патагония",
          description: "Регион, который сделал Патагонию знаменитой. Озёра ледникового происхождения, горные пейзажи, уютные городки и десятки красивых маршрутов на любой уровень подготовки.",
          image: "images/tours/short-programs/bariloche-lakes.jpg"
        }
      ],
      long: [
        {
          id: "peru-bolivia-chile",
          title: "Перу / Боливия / Чили",
          duration: "14–17 дней",
          location: "Перу · Боливия · Чили",
          description: "Куско, Мачу-Пикчу, озеро Титикака, боливийские соляные плато, пустыня Атакама. Маршрут, который охватывает сердце Южной Америки. Небольшая группа, живые контакты с местными, никакого автобусного туризма.",
          image: "images/tours/long-programs/peru-bolivia-chile.jpg"
        },
        {
          id: "patagonia-trekking",
          title: "Патагония: треккинг",
          duration: "13–15 дней",
          location: "Чили · Аргентина",
          description: "Торрес-дель-Пайне, Эль-Чальтен и Перито-Морено. Лучшие треки двух стран без палаток — только рефухиос и горные хижины. Программа для тех, кто хочет настоящий треккинг без компромиссов.",
          image: "images/tours/long-programs/patagonia-trekking.jpg"
        },
        {
          id: "easter-island",
          title: "Остров Пасхи",
          duration: "4–5 дней",
          location: "Остров Пасхи",
          description: "Затерянный в Тихом океане остров со статуями моаи и живой культурой рапануи. Добавляется к основной программе — несколько дней, которые меняют масштаб всей поездки.",
          image: "images/tours/long-programs/easter-island.jpg"
        },
        {
          id: "iguazu-extension",
          title: "Расширение: водопады Игуасу",
          duration: "2–3 дня",
          location: "Аргентина · Бразилия",
          description: "Дополнительные дни у водопадов Игуасу после основного маршрута. Аргентинская и бразильская стороны, джунгли, лодочные туры под водопады. Лучший финальный аккорд для любой длинной программы.",
          image: "images/tours/long-programs/iguazu-extension.jpg"
        }
      ],
      antarctica: {
        id: "antarctica",
        title: "Антарктида — с поддержкой на каждом шаге",
        label: "Партнёрская программа",
        description: "Я не веду антарктические экспедиции лично — но помогаю организовать тебе лучшее путешествие на континент. Работаю с проверенными партнёрами: подбираю рейс под твой бюджет и даты, сопровождаю на всех этапах оформления. Антарктида — это сложно, дорого и незабываемо. Я делаю так, чтобы всё прошло без сюрпризов.",
        image: "images/tours/antarctica/antarctica.jpg",
        cta: "Узнать о программе"
      },
      individual: {
        id: "individual",
        title: "Ваш маршрут с нуля",
        description: "Нет программы, которая подходит тебе на 100%? Тогда давай создадим её вместе. Расскажи мне, что тебя зажигает — горы, города, еда, экстрим, уединение, фотография, история — и я составлю маршрут именно под тебя. Сроки и бюджет — твои.",
        image: "images/tours/individual/individual-tour.jpg",
        cta: "Обсудить маршрут",
        tags: ["Горы", "Города", "Гастрономия", "Экстрим", "Фотография", "История"]
      }
    },
    reviews: {
      label: "ОТЗЫВЫ",
      title: "Что говорят путешественники",
      items: [
        { text: "С Женей ты перестаёшь быть туристом и становишься путешественником. Разница — огромная.", name: "Алексей К.", city: "Санкт-Петербург", tour: "Перу / Боливия / Чили" },
        { text: "Патагония с Евгением — лучшее приключение в жизни. Он знает каждую тропу и каждую хижину.", name: "Мария и Дмитрий Л.", city: "Москва", tour: "Патагония: треккинг" },
        { text: "Всегда на связи, всегда с решением. Когда наш рейс отменили, Женя нашёл выход за два часа.", name: "Наталья В.", city: "Екатеринбург", tour: "Короткие туры по Аргентине" },
        { text: "Это уже третья поездка с Евгением. И я снова хочу ещё.", name: "Игорь Р.", city: "Новосибирск", tour: "Буэнос-Айрес + Мендоса" }
      ]
    },
    contact: {
      label: "КОНТАКТ",
      title: "Напишите мне",
      subtitle: "Выберите удобный способ связи — отвечу быстро.",
      whatsapp: "WhatsApp", telegram: "Telegram", email: "Email"
    },
    footer: "© 2025 Евгений Абросимов · Туры по Южной Америке"
  },

  en: {
    nav: { brand: "Evgeny Abrosimov" },
    lang: "en",
    ticker: "Next tour: Northwest Argentina (Jujuy) · 15–19 July 2026",
    tickerCta: { label: "Enquire", waText: "Hi! I'd like to learn more about the upcoming tour." },
    cardCta: {
      label: "Ask",
      waTemplate: "Hi! I'm interested in «{tour}». I'd like to learn more."
    },
    hero: {
      title: "Small Groups.\nBig Adventures.",
      subtitle: "For more than three years I have been exploring South America — on foot, by car, on expeditions and extended journeys. From the vibrant neighborhoods of Buenos Aires to the glaciers of Patagonia, from the ancient Inca roads to the shores of Antarctica. This experience is the foundation of the journeys I create — helping people see the continent not through a tourist's eyes, but through an explorer's.",
      cta: "Get in touch"
    },
    about: {
      label: "ABOUT ME",
      title: "Hi, I'm Evgeny",
      p1: "As a child I devoured travel books and dreamed of seeing places that felt impossibly far away. Over time, that dream brought me to South America, where I have been living for more than three years.",
      p2: "In that time I have driven thousands of kilometers across Argentina and neighboring countries, and ventured into mountains, hikes and expeditions. Today I organize journeys for small groups and share the places I love myself. What matters to me is that every trip not only brings new landscapes, but helps travelers better understand the country, its people and its culture."
    },
    tabs: {
      excursions: "Day Excursions",
      short: "Short Tours",
      long: "Long Programs",
      antarctica: "Antarctica",
      individual: "Individual"
    },
    tabSub: {
      excursions: "1 day · Buenos Aires",
      short: "2–5 days · Argentina",
      long: "13–17 days · Peru, Bolivia, Chile, Patagonia",
      antarctica: "Partner program",
      individual: "Your route from scratch"
    },
    tours: {
      excursions: [
        { id: "history-ba", title: "Understanding Buenos Aires", duration: "1 day", location: "Buenos Aires", description: "How a small port on the edge of an empire became one of the world's most unusual cities. A walk through the oldest neighborhoods of Buenos Aires — through history, people and great upheavals.", image: "images/tours/excursions/history-ba.jpg" },
        { id: "recoleta", title: "Recoleta Cemetery", duration: "1 day", location: "Buenos Aires", description: "Argentine history through the lives of the people who shaped it. Presidents, national heroes, millionaires and Evita — all of them await us among the mausoleums of Recoleta.", image: "images/tours/excursions/recoleta-cemetery.jpg" },
        { id: "football", title: "Argentina and Football", duration: "1 day", location: "Buenos Aires", description: "For many, attending an Argentine football match becomes the defining memory of their trip. If the schedule allows — we go to a match. If not — we'll still talk about the clubs, the legends and the passion that made Argentine football famous around the world.", image: "images/tours/excursions/football-argentina.jpg" },
        { id: "tango", title: "Tango Show", duration: "1 day", location: "Buenos Aires", description: "Recommendations and booking assistance for tango shows in Buenos Aires. I'll find the best option by format, venue and budget, and help you get a discount where possible.", image: "images/tours/excursions/tango-show.jpg" }
      ],
      short: [
        { id: "mendoza", title: "Mendoza: Wine and the Andes", duration: "3 days", location: "Mendoza", description: "Argentina's finest wines are born here, at the foot of the Andes. Tastings, wineries of different scales, gastronomy and a few days in one of the country's most pleasant regions.", image: "images/tours/short-programs/mendoza-wine.jpg" },
        { id: "iguazu-short", title: "Iguazu Falls", duration: "2 days", location: "Argentina", description: "One of the most impressive natural phenomena on the planet. We enter from the Argentine side — closest and most powerful. Sound, spray, rainbows. Impossible to describe in words.", image: "images/tours/short-programs/iguazu-falls.jpg" },
        { id: "salta", title: "Highland Argentina", duration: "4 days", location: "Salta, Jujuy", description: "The northwest of Argentina is closer to Peru and Bolivia than to Buenos Aires. A land of high-altitude villages, ancient cultures and roads once traveled by Inca caravans. Here the traditions of indigenous peoples have been preserved alongside some of the most unusual landscapes in South America.", image: "images/tours/short-programs/salta-northwest.jpg" },
        { id: "bariloche", title: "Bariloche: Heart of the Lake District", duration: "4 days", location: "Patagonia", description: "The region that made Patagonia famous. Glacial lakes, mountain scenery, charming towns and dozens of beautiful routes for every fitness level.", image: "images/tours/short-programs/bariloche-lakes.jpg" }
      ],
      long: [
        { id: "peru-bolivia-chile", title: "Peru / Bolivia / Chile", duration: "14–17 days", location: "Peru · Bolivia · Chile", description: "Cusco, Machu Picchu, Lake Titicaca, Bolivian salt flats, Atacama Desert. A route that covers the heart of South America. Small group, genuine local connections, no bus tourism.", image: "images/tours/long-programs/peru-bolivia-chile.jpg" },
        { id: "patagonia-trekking", title: "Patagonia Trekking", duration: "13–15 days", location: "Chile · Argentina", description: "Torres del Paine, El Chaltén and Perito Moreno. Patagonia's finest trails across two countries without tents — refugios and mountain huts only. For those who want real trekking without compromise.", image: "images/tours/long-programs/patagonia-trekking.jpg" },
        { id: "easter-island", title: "Easter Island", duration: "4–5 days", location: "Easter Island", description: "A remote island in the Pacific with enigmatic moai statues and a living Rapa Nui culture. Added to the main program — a few days that completely change the scale of the entire trip.", image: "images/tours/long-programs/easter-island.jpg" },
        { id: "iguazu-extension", title: "Iguazu Extension", duration: "2–3 days", location: "Argentina · Brazil", description: "Extra days at Iguazu Falls after the main itinerary. Argentine and Brazilian sides, rainforest, boat rides under the falls. The perfect final chapter for any long program.", image: "images/tours/long-programs/iguazu-extension.jpg" }
      ],
      antarctica: {
        id: "antarctica", title: "Antarctica — Supported Every Step of the Way", label: "Partner Program",
        description: "I don't personally lead Antarctic expeditions — but I help you organize the best journey to the continent. I work with vetted partners: selecting a voyage that matches your budget and dates, supporting you through every step of the booking process. Antarctica is complex, expensive and unforgettable. I make sure everything goes without surprises.",
        image: "images/tours/antarctica/antarctica.jpg", cta: "Learn about the program"
      },
      individual: {
        id: "individual", title: "Your Route from Scratch",
        description: "No program fits you 100%? Let's build one together. Tell me what excites you — mountains, cities, food, adventure, solitude, photography, history — and I'll design a route just for you. Timeline and budget are yours to set.",
        image: "images/tours/individual/individual-tour.jpg", cta: "Discuss your route",
        tags: ["Mountains", "Cities", "Gastronomy", "Adventure", "Photography", "History"]
      }
    },
    reviews: {
      label: "REVIEWS",
      title: "What Travelers Say",
      items: [
        { text: "With Evgeny you stop being a tourist and become a traveler. The difference is huge.", name: "Alexey K.", city: "St. Petersburg", tour: "Peru / Bolivia / Chile" },
        { text: "Patagonia with Evgeny was the best adventure of my life. He knows every trail and every hut.", name: "Maria & Dmitry L.", city: "Moscow", tour: "Patagonia Trekking" },
        { text: "Always reachable, always with a solution. When our flight was cancelled, Evgeny found a way out in two hours.", name: "Natalia V.", city: "Yekaterinburg", tour: "Short Argentina Tours" },
        { text: "This is my third trip with Evgeny. And I want more.", name: "Igor R.", city: "Novosibirsk", tour: "Buenos Aires + Mendoza" }
      ]
    },
    contact: {
      label: "CONTACT", title: "Get in Touch", subtitle: "Choose the way you prefer — I reply fast.",
      whatsapp: "WhatsApp", telegram: "Telegram", email: "Email"
    },
    footer: "© 2025 Evgeny Abrosimov · South America Tours"
  },

  es: {
    nav: { brand: "Evgeny Abrosimov" },
    lang: "es",
    ticker: "Próximo tour: Noroeste Argentino (Jujuy) · 15–19 de julio de 2026",
    tickerCta: { label: "Escribir", waText: "¡Hola! Me gustaría saber más sobre el próximo tour." },
    cardCta: {
      label: "Preguntar",
      waTemplate: "¡Hola! Me interesa «{tour}». Me gustaría saber más."
    },
    hero: {
      title: "Grupos pequeños.\nGrandes aventuras.",
      subtitle: "Hace más de tres años exploro Sudamérica — a pie, en coche, en expediciones y viajes largos. Desde los animados barrios de Buenos Aires hasta los glaciares de la Patagonia, desde los antiguos caminos incas hasta las costas de la Antártida. Esta experiencia es la base de los viajes que diseño — para que cada persona descubra el continente no como turista, sino como explorador.",
      cta: "Escríbeme"
    },
    about: {
      label: "SOBRE MÍ",
      title: "Hola, soy Evgeny",
      p1: "De niño devoraba libros de viajes y soñaba con ver lugares que parecían increíblemente lejanos. Con el tiempo, ese sueño me llevó a Sudamérica, donde llevo más de tres años viviendo.",
      p2: "En ese tiempo he recorrido miles de kilómetros por Argentina y los países vecinos, y he ido a montañas, caminatas y expediciones. Hoy organizo viajes para grupos pequeños y muestro los lugares que amo. Me importa que cada viaje no solo traiga nuevos paisajes, sino que ayude a entender mejor el país, su gente y su cultura."
    },
    tabs: {
      excursions: "Excursiones",
      short: "Tours Cortos",
      long: "Programas Largos",
      antarctica: "Antártida",
      individual: "Individual"
    },
    tabSub: {
      excursions: "1 día · Buenos Aires",
      short: "2–5 días · Argentina",
      long: "13–17 días · Perú, Bolivia, Chile, Patagonia",
      antarctica: "Programa de socios",
      individual: "Tu ruta desde cero"
    },
    tours: {
      excursions: [
        { id: "history-ba", title: "Entender Buenos Aires", duration: "1 día", location: "Buenos Aires", description: "Cómo un pequeño puerto en el borde de un imperio se convirtió en una de las ciudades más singulares del mundo. Un recorrido por los barrios más antiguos de Buenos Aires — a través de la historia, la gente y los grandes cambios.", image: "images/tours/excursions/history-ba.jpg" },
        { id: "recoleta", title: "Cementerio de la Recoleta", duration: "1 día", location: "Buenos Aires", description: "La historia argentina a través de las vidas de quienes la construyeron. Presidentes, héroes nacionales, millonarios y Evita — todos nos aguardan entre los mausoleos de la Recoleta.", image: "images/tours/excursions/recoleta-cemetery.jpg" },
        { id: "football", title: "Argentina y el Fútbol", duration: "1 día", location: "Buenos Aires", description: "Para muchos, asistir a un partido de fútbol argentino se convierte en el recuerdo más especial del viaje. Si el calendario lo permite — vamos al partido. Si no — hablaremos de los clubes, las leyendas y la pasión que hizo famoso al fútbol argentino en todo el mundo.", image: "images/tours/excursions/football-argentina.jpg" },
        { id: "tango", title: "Show de Tango", duration: "1 día", location: "Buenos Aires", description: "Recomendaciones y asistencia para reservar espectáculos de tango en Buenos Aires. Encontraré la mejor opción según el formato, el lugar y el presupuesto, y te ayudaré a obtener un descuento donde sea posible.", image: "images/tours/excursions/tango-show.jpg" }
      ],
      short: [
        { id: "mendoza", title: "Mendoza: Vino y los Andes", duration: "3 días", location: "Mendoza", description: "Los mejores vinos de Argentina nacen aquí, al pie de los Andes. Degustaciones, bodegas de distintos tamaños, gastronomía y unos días en una de las regiones más agradables del país.", image: "images/tours/short-programs/mendoza-wine.jpg" },
        { id: "iguazu-short", title: "Cataratas del Iguazú", duration: "2 días", location: "Argentina", description: "Uno de los fenómenos naturales más impresionantes del planeta. Entramos por el lado argentino — el más cercano y poderoso. Sonido, salpicaduras, arcoíris. Imposible de describir con palabras.", image: "images/tours/short-programs/iguazu-falls.jpg" },
        { id: "salta", title: "Argentina de Altura", duration: "4 días", location: "Salta, Jujuy", description: "El noroeste argentino está más cerca de Perú y Bolivia que de Buenos Aires. Una tierra de pueblos de altura, culturas antiguas y caminos que alguna vez recorrieron las caravanas incas. Aquí se conservan las tradiciones de los pueblos originarios y algunos de los paisajes más inusuales de América del Sur.", image: "images/tours/short-programs/salta-northwest.jpg" },
        { id: "bariloche", title: "Bariloche: Corazón de la Región de los Lagos", duration: "4 días", location: "Patagonia", description: "La región que hizo famosa a la Patagonia. Lagos glaciares, paisajes de montaña, pueblos encantadores y decenas de rutas hermosas para todo nivel de condición física.", image: "images/tours/short-programs/bariloche-lakes.jpg" }
      ],
      long: [
        { id: "peru-bolivia-chile", title: "Perú / Bolivia / Chile", duration: "14–17 días", location: "Perú · Bolivia · Chile", description: "Cusco, Machu Picchu, lago Titicaca, salares bolivianos, desierto de Atacama. Una ruta que cubre el corazón de América del Sur. Grupo pequeño, conexiones locales genuinas, sin turismo de autobús.", image: "images/tours/long-programs/peru-bolivia-chile.jpg" },
        { id: "patagonia-trekking", title: "Trekking en la Patagonia", duration: "13–15 días", location: "Chile · Argentina", description: "Torres del Paine, El Chaltén y Perito Moreno. Los mejores senderos de dos países sin carpas — solo refugios y cabañas de montaña. Para quienes quieren trekking real sin compromisos.", image: "images/tours/long-programs/patagonia-trekking.jpg" },
        { id: "easter-island", title: "Isla de Pascua", duration: "4–5 días", location: "Isla de Pascua", description: "Una isla remota en el Pacífico con enigmáticas estatuas moái y una viva cultura rapanui. Se añade al programa principal — unos días que cambian completamente la escala del viaje.", image: "images/tours/long-programs/easter-island.jpg" },
        { id: "iguazu-extension", title: "Extensión Iguazú", duration: "2–3 días", location: "Argentina · Brasil", description: "Días adicionales en las cataratas del Iguazú tras el itinerario principal. Lados argentino y brasileño, selva, paseos en bote bajo las cataratas. El final perfecto para cualquier programa largo.", image: "images/tours/long-programs/iguazu-extension.jpg" }
      ],
      antarctica: {
        id: "antarctica", title: "Antártida — Con Apoyo en Cada Paso", label: "Programa de Socios",
        description: "No lidero expediciones antárticas personalmente — pero te ayudo a organizar el mejor viaje al continente. Trabajo con socios de confianza: seleccionando un crucero que se adapte a tu presupuesto y fechas, acompañándote en cada paso del proceso de reserva. La Antártida es compleja, cara e inolvidable. Me aseguro de que todo salga sin sorpresas.",
        image: "images/tours/antarctica/antarctica.jpg", cta: "Saber más"
      },
      individual: {
        id: "individual", title: "Tu Ruta desde Cero",
        description: "¿Ningún programa te encaja al 100%? Construyamos uno juntos. Cuéntame qué te emociona — montañas, ciudades, gastronomía, aventura, soledad, fotografía, historia — y diseñaré una ruta solo para ti. El tiempo y el presupuesto son tuyos.",
        image: "images/tours/individual/individual-tour.jpg", cta: "Hablar de tu ruta",
        tags: ["Montañas", "Ciudades", "Gastronomía", "Aventura", "Fotografía", "Historia"]
      }
    },
    reviews: {
      label: "TESTIMONIOS",
      title: "Lo Que Dicen los Viajeros",
      items: [
        { text: "Con Evgeny dejas de ser turista y te conviertes en viajero. La diferencia es enorme.", name: "Alexey K.", city: "San Petersburgo", tour: "Perú / Bolivia / Chile" },
        { text: "La Patagonia con Evgeny fue la mejor aventura de mi vida. Conoce cada sendero y cada cabaña.", name: "Maria y Dmitry L.", city: "Moscú", tour: "Trekking en la Patagonia" },
        { text: "Siempre disponible, siempre con una solución. Cuando cancelaron nuestro vuelo, Evgeny encontró la salida en dos horas.", name: "Natalia V.", city: "Ekaterimburgo", tour: "Tours Cortos por Argentina" },
        { text: "Este es mi tercer viaje con Evgeny. Y quiero más.", name: "Igor R.", city: "Novosibirsk", tour: "Buenos Aires + Mendoza" }
      ]
    },
    contact: {
      label: "CONTACTO", title: "Contáctame", subtitle: "Elige cómo prefieres escribirme — respondo rápido.",
      whatsapp: "WhatsApp", telegram: "Telegram", email: "Email"
    },
    footer: "© 2025 Evgeny Abrosimov · Tours por América del Sur"
  }
};

// Даты длинных туров (ISO формат, без привязки к языку — форматируются в main.js)
const TOUR_DATES = {
  'peru-bolivia-chile': [
    { from: '2026-10-26', to: '2026-11-08' }
  ],
  'easter-island': [
    { from: '2026-11-16', to: '2026-12-02' },
    { from: '2027-05-02', to: '2027-05-18' }
  ],
  'patagonia-trekking': [
    { from: '2027-02-15', to: '2027-02-28' },
    { from: '2027-04-04', to: '2027-04-17' }
  ]
};
