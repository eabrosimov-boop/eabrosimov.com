// Все тексты сайта. Источник истины — content/texts.md
// При редактировании текстов — обновляйте оба файла

const CONTENT = {
  ru: {
    nav: { brand: "Евгений Абросимов" },
    lang: "ru",
    hero: {
      title: "Небольшие группы.\nБольшие приключения.",
      subtitle: "Более десяти лет я живу в Южной Америке и продолжаю исследовать её каждый день. От улиц Буэнос-Айреса до патагонских треков, от Мачу-Пикчу до Антарктиды — я создаю путешествия, которые помогают увидеть континент глубже, чем это позволяют путеводители.",
      cta: "Написать мне"
    },
    about: {
      label: "ОБО МНЕ",
      title: "Привет, я Евгений",
      p1: "В детстве я зачитывался книгами о путешествиях и мечтал оказаться в местах, которые казались другой планетой. Эта мечта привела меня в Южную Америку, где я живу уже более десяти лет.",
      p2: "За эти годы были треккинги, восхождения, экспедиции на байдарках и десятки маршрутов по Аргентине, Чили, Перу и Боливии. Сегодня я создаю путешествия для небольших групп, основанные на личном опыте. Мне интересно не просто показать красивые места, а помочь понять страну, её людей и культуру."
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
          title: "История Буэнос-Айреса",
          duration: "1 день",
          location: "Буэнос-Айрес",
          description: "Как иммигранты из десятков стран построили один из самых самобытных городов мира. Прогулка через Монсеррат, Сан-Тельмо и Пуэрто-Мадеро — с рассказом о том, что осталось за кадром учебников.",
          image: "images/tours/excursions/history-ba.jpg"
        },
        {
          id: "recoleta",
          title: "Кладбище Реколеты",
          duration: "1 день",
          location: "Буэнос-Айрес",
          description: "Самое знаменитое кладбище Латинской Америки — и один из лучших способов войти в аргентинскую историю. Гробницы президентов, военных героев и, конечно, Эвиты — каждая со своей историей.",
          image: "images/tours/excursions/recoleta-cemetery.jpg"
        },
        {
          id: "football",
          title: "Футбол в Аргентине",
          duration: "1 день",
          location: "Буэнос-Айрес",
          description: "Трибуны, ритуалы, история дерби и культ Марадоны. Если позволяет расписание — идём на матч. Если нет — я покажу стадион и объясню, почему это больше чем спорт.",
          image: "images/tours/excursions/football-argentina.jpg"
        },
        {
          id: "tango",
          title: "Танго-шоу",
          duration: "1 день",
          location: "Буэнос-Айрес",
          description: "Танго не смотрят — его переживают. Я помогу выбрать правильное шоу под твой бюджет и вкус: от камерных милонг в Сан-Тельмо до больших театральных постановок. Никаких туристических ловушек.",
          image: "images/tours/excursions/tango-show.jpg"
        }
      ],
      short: [
        {
          id: "mendoza",
          title: "Мендоса и виноградники",
          duration: "3 дня",
          location: "Мендоса",
          description: "Предгорья Анд, лучшие вина Аргентины, неторопливые дегустации и закаты над виноградниками. Едем не только на топовые бодеги — я знаю небольшие семейные хозяйства, куда туристов не возят.",
          image: "images/tours/short-programs/mendoza-wine.jpg"
        },
        {
          id: "iguazu-short",
          title: "Игуасу: мощь воды",
          duration: "2 дня",
          location: "Аргентина",
          description: "Один из самых впечатляющих природных феноменов планеты. Заходим с аргентинской стороны — ближе и мощнее всего. Звук, брызги, радуги. Это невозможно передать словами.",
          image: "images/tours/short-programs/iguazu-falls.jpg"
        },
        {
          id: "salta",
          title: "Северо-Запад Аргентины",
          duration: "4 дня",
          location: "Сальта, Жужуй",
          description: "Гора семи цветов, соляные поля, индейские рынки, высота 4000+ метров. Это совсем другая Аргентина — древняя, медленная и очень красивая.",
          image: "images/tours/short-programs/salta-northwest.jpg"
        },
        {
          id: "bariloche",
          title: "Барилоче и озёра",
          duration: "4 дня",
          location: "Патагония",
          description: "Горы, прозрачные озёра, национальный парк Науэль-Уапи. Хороший вариант, если хочешь почувствовать Патагонию, но не готов к длинному треккингу. Горный воздух и невероятные виды.",
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
    hero: {
      title: "Small Groups.\nBig Adventures.",
      subtitle: "For more than ten years South America has been my home. From Buenos Aires to Patagonia, from Machu Picchu to Antarctica, I create journeys that help travelers discover the continent beyond the guidebooks.",
      cta: "Get in touch"
    },
    about: {
      label: "ABOUT ME",
      title: "Hi, I'm Evgeny",
      p1: "A childhood passion for exploration eventually brought me to South America, where I have lived for more than a decade.",
      p2: "Treks, climbs, kayak expeditions and countless journeys across Argentina, Chile, Peru and Bolivia shaped the way I travel today. My trips are built on personal experience, not brochures."
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
        { id: "history-ba", title: "History of Buenos Aires", duration: "1 day", location: "Buenos Aires", description: "How immigrants from dozens of countries built one of the world's most distinctive cities. A walk through Monserrat, San Telmo and Puerto Madero — with stories that textbooks leave out.", image: "images/tours/excursions/history-ba.jpg" },
        { id: "recoleta", title: "Recoleta Cemetery", duration: "1 day", location: "Buenos Aires", description: "The most famous cemetery in Latin America — and one of the best entry points into Argentine history. The tombs of presidents, military heroes and, of course, Evita — each with its own story.", image: "images/tours/excursions/recoleta-cemetery.jpg" },
        { id: "football", title: "Football in Argentina", duration: "1 day", location: "Buenos Aires", description: "The terraces, the rituals, the derby history and the cult of Maradona. If the schedule allows — we go to a match. If not — I'll show you the stadium and explain why this is so much more than a sport.", image: "images/tours/excursions/football-argentina.jpg" },
        { id: "tango", title: "Tango Show", duration: "1 day", location: "Buenos Aires", description: "Tango isn't watched — it's felt. I'll help you choose the right show for your budget and taste: from intimate milongas in San Telmo to grand theatrical productions. No tourist traps.", image: "images/tours/excursions/tango-show.jpg" }
      ],
      short: [
        { id: "mendoza", title: "Mendoza and Vineyards", duration: "3 days", location: "Mendoza", description: "Foothills of the Andes, Argentina's finest wines, leisurely tastings and sunsets over the vineyards. We visit not only top wineries — I know small family estates that don't open for regular tourists.", image: "images/tours/short-programs/mendoza-wine.jpg" },
        { id: "iguazu-short", title: "Iguazu: The Power of Water", duration: "2 days", location: "Argentina", description: "One of the most impressive natural phenomena on the planet. We enter from the Argentine side — closest and most powerful. Sound, spray, rainbows. Impossible to describe in words.", image: "images/tours/short-programs/iguazu-falls.jpg" },
        { id: "salta", title: "Northwest Argentina", duration: "4 days", location: "Salta, Jujuy", description: "Hill of Seven Colors, salt flats, indigenous markets, 4000+ meters above sea level. A completely different Argentina — ancient, unhurried and very beautiful.", image: "images/tours/short-programs/salta-northwest.jpg" },
        { id: "bariloche", title: "Bariloche and the Lakes", duration: "4 days", location: "Patagonia", description: "Mountains, crystal-clear lakes, Nahuel Huapi National Park. A great option if you want to feel Patagonia but aren't ready for long trekking. Mountain air and incredible views.", image: "images/tours/short-programs/bariloche-lakes.jpg" }
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
    hero: {
      title: "Grupos pequeños.\nGrandes aventuras.",
      subtitle: "Sudamérica ha sido mi hogar durante más de diez años. Desde Buenos Aires hasta la Patagonia, desde Machu Picchu hasta la Antártida, diseño viajes que permiten descubrir el continente más allá de las guías turísticas.",
      cta: "Escríbeme"
    },
    about: {
      label: "SOBRE MÍ",
      title: "Hola, soy Evgeny",
      p1: "Mi pasión por los viajes me llevó a Sudamérica, donde vivo desde hace más de diez años.",
      p2: "Trekking, montañismo, expediciones en kayak y numerosos recorridos por Argentina, Chile, Perú y Bolivia forman la base de los viajes que organizo hoy."
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
        { id: "history-ba", title: "Historia de Buenos Aires", duration: "1 día", location: "Buenos Aires", description: "Cómo inmigrantes de decenas de países construyeron una de las ciudades más singulares del mundo. Un recorrido por Monserrat, San Telmo y Puerto Madero — con historias que los libros omiten.", image: "images/tours/excursions/history-ba.jpg" },
        { id: "recoleta", title: "Cementerio de la Recoleta", duration: "1 día", location: "Buenos Aires", description: "El cementerio más famoso de América Latina — y uno de los mejores puntos de entrada a la historia argentina. Las tumbas de presidentes, héroes militares y, por supuesto, Evita — cada una con su propia historia.", image: "images/tours/excursions/recoleta-cemetery.jpg" },
        { id: "football", title: "Fútbol en Argentina", duration: "1 día", location: "Buenos Aires", description: "Las tribunas, los rituales, la historia de los clásicos y el culto a Maradona. Si el calendario lo permite — vamos a un partido. Si no — te mostraré el estadio y explicaré por qué esto es mucho más que un deporte.", image: "images/tours/excursions/football-argentina.jpg" },
        { id: "tango", title: "Show de Tango", duration: "1 día", location: "Buenos Aires", description: "El tango no se ve — se siente. Te ayudaré a elegir el espectáculo adecuado según tu presupuesto y gusto: desde milongas íntimas en San Telmo hasta grandes producciones teatrales. Sin trampas turísticas.", image: "images/tours/excursions/tango-show.jpg" }
      ],
      short: [
        { id: "mendoza", title: "Mendoza y Viñedos", duration: "3 días", location: "Mendoza", description: "Piedemonte de los Andes, los mejores vinos de Argentina, degustaciones tranquilas y atardeceres sobre los viñedos. Conozco pequeñas fincas familiares que no abren a los turistas comunes.", image: "images/tours/short-programs/mendoza-wine.jpg" },
        { id: "iguazu-short", title: "Iguazú: El Poder del Agua", duration: "2 días", location: "Argentina", description: "Uno de los fenómenos naturales más impresionantes del planeta. Entramos por el lado argentino — el más cercano y poderoso. Sonido, salpicaduras, arcoíris. Imposible de describir con palabras.", image: "images/tours/short-programs/iguazu-falls.jpg" },
        { id: "salta", title: "Noroeste Argentino", duration: "4 días", location: "Salta, Jujuy", description: "Cerro de los Siete Colores, salinas, mercados indígenas, más de 4000 metros sobre el nivel del mar. Una Argentina completamente diferente — antigua, tranquila y muy hermosa.", image: "images/tours/short-programs/salta-northwest.jpg" },
        { id: "bariloche", title: "Bariloche y los Lagos", duration: "4 días", location: "Patagonia", description: "Montañas, lagos cristalinos, Parque Nacional Nahuel Huapi. Una gran opción si quieres sentir la Patagonia pero no estás listo para el trekking largo. Aire de montaña y vistas increíbles.", image: "images/tours/short-programs/bariloche-lakes.jpg" }
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
