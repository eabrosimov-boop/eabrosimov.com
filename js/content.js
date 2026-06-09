// Все тексты сайта. Источник истины — content/texts.md
// При редактировании текстов — обновляйте оба файла

const CONTENT = {
  ru: {
    nav: { brand: "Евгений Абросимов" },
    lang: "ru",
    ticker: "Ближайший тур: <strong>Северо-Запад Аргентины (Хухуй)</strong> · 15–19 июля 2026",
    tickerCta: { label: "Написать", waText: "Привет! Хочу узнать подробности о ближайшем туре." },
    pricePrefix: "от",
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
          duration: "4 часа",
          location: "Буэнос-Айрес",
          description: "Буэнос-Айрес — это не просто красивый город, а ключ к пониманию Аргентины. За одну прогулку мы пройдём путь от старого порта Ла-Бока до ультрасовременного Пуэрто-Мадеро и увидим, как иммиграция, танго, политика, экономические кризисы и футбольная страсть сформировали город таким, каким он является сегодня.\n\nЭто экскурсия не только про историю и архитектуру. Это возможность разобраться, почему Аргентина живёт именно так, как живёт сейчас, и увидеть связь между прошлым и настоящим на улицах Буэнос-Айреса.",
          image: "images/tours/excursions/history-ba.jpg",
          price: "150",
          showPrefix: true,
          included: [
            "Пешеходная прогулка по ключевым районам города (4 часа)",
            "Профессиональный гид, говорящий на русском языке",
            "Подробный рассказ об истории города, иммиграции, танго, политике и культуре"
          ],
          notIncluded: [
            "Дополнительные расходы на кофе, напитки или еду по пути",
            "Входной билет в музей Boca Juniors (~$25, опционально)",
            "Транспорт до начальной точки маршрута"
          ],
          photos: Array.from({length: 15}, (_, i) => `/images/tours/excursions/history-ba-${i + 1}.jpg`)
        },
        {
          id: "recoleta",
          title: "Кладбище Реколеты",
          duration: "1 день",
          location: "Буэнос-Айрес",
          description: "История Аргентины через судьбы людей, которые её создавали. Президенты, национальные герои, миллиардеры и Эвита — все они встретятся нам среди мавзолеев Реколеты.",
          image: "images/tours/excursions/recoleta-cemetery.jpg",
          price: "80",
          showPrefix: true
        },
        {
          id: "football",
          title: "Аргентина футбольная",
          duration: "1 день",
          location: "Буэнос-Айрес",
          description: "Для многих поездка на аргентинский футбол становится главным впечатлением от путешествия. Если позволяет календарь — идём на матч. Если нет — всё равно поговорим о клубах, легендах и страсти, которая сделала местный футбол знаменитым на весь мир.",
          image: "images/tours/excursions/football-argentina.jpg",
          price: "150",
          showPrefix: true
        },
        {
          id: "tango",
          title: "Танго-шоу",
          duration: "1 день",
          location: "Буэнос-Айрес",
          description: "Рекомендации и бронирование танго-шоу в Буэнос-Айресе. Подберу оптимальный вариант по формату, расположению и бюджету, а также помогу получить скидку там, где это возможно.",
          image: "images/tours/excursions/tango.jpg",
          price: "65",
          showPrefix: true,
          photos: ['/images/tours/excursions/tango-1.jpg']
        }
      ],
      short: [
        {
          id: "mendoza",
          title: "Мендоса: вино и Анды",
          duration: "3 дня",
          location: "Мендоса",
          description: "Лучшие вина Аргентины рождаются здесь, у подножия Анд. Нас ждут дегустации, винодельни разных масштабов, гастрономия и несколько дней в одном из самых приятных регионов страны.",
          image: "images/tours/short-programs/mendoza-wine.jpg",
          price: "750",
          showPrefix: true
        },
        {
          id: "iguazu-short",
          title: "Водопады Игуасу",
          duration: "2 дня",
          location: "Аргентина",
          description: "Один из самых впечатляющих природных феноменов планеты. Заходим с аргентинской стороны — ближе и мощнее всего. Звук, брызги, радуги. Это невозможно передать словами.",
          image: "images/tours/short-programs/iguazu-falls.jpg",
          price: "700",
          showPrefix: true
        },
        {
          id: "salta",
          title: "Высокогорная Аргентина",
          duration: "5 дней",
          location: "Сальта, Хухуй",
          description: "Путешествие по той Аргентине, которую многие не ожидают увидеть. Высокогорные пустыни, солончаки на высоте более 3000 метров, колониальные церкви, андские деревни и пейзажи, больше похожие на Боливию или Перу. За несколько дней мы увидим регион, где история инков, испанское наследие и культура коренных народов до сих пор существуют бок о бок.",
          image: "images/tours/short-programs/salta-northwest.jpg",
          price: "550",
          showPrefix: true,
          included: [
            "4 ночи в отелях — 2х местное размещение",
            "Автомобили и бензин",
            "Пермиты на вход в регионы",
            "Входные билеты в национальные парки и достопримечательности",
            "Профессиональные русскоязычные гиды"
          ],
          notIncluded: [
            "Авиабилеты",
            "Питание (кроме завтраков в отелях)",
            "Личные расходы"
          ]
        },
        {
          id: "bariloche",
          title: "Барилоче: сердце озёрного края",
          duration: "4 дня",
          location: "Патагония",
          description: "Регион, который сделал Патагонию знаменитой. Озёра ледникового происхождения, горные пейзажи, уютные городки и десятки красивых маршрутов на любой уровень подготовки.",
          image: "images/tours/short-programs/bariloche-lakes.jpg",
          price: "650",
          showPrefix: true
        }
      ],
      long: [
        {
          id: "peru-bolivia-chile",
          title: "Перу / Боливия / Чили",
          duration: "14–17 дней",
          location: "Перу · Боливия · Чили",
          description: "Перу и Боливия — уникальные страны с удивительной историей, богатейшим археологическим наследием, аутентичной колониальной архитектурой и нетронутой природой гор. Побережье Тихого океана, Куско — столица империи инков, Священная долина, затерянный город Мачу Пикчу, Радужные горы, озеро Титикака, долина Марса в Боливии, солончак Уюни, лагуны, вулканы, гейзеры и розовые фламинго. Для граждан РФ, Молдавии, Беларуси виза в Перу не требуется, в Боливию ставится на границе.",
          image: "images/tours/long-programs/peru-bolivia-chile.jpg",
          price: "4250",
          showPrefix: false,
          included: [
            "Проживание в комфортных условиях",
            "Сопровождение русскоязычных и местных гидов",
            "Внутренние переезды и перелёты",
            "Все трансферы",
            "Питание на многих экскурсиях",
            "Входные билеты на достопримечательности"
          ],
          notIncluded: [
            "Перелёт в Лиму (Перу) и обратно из Сантьяго (Чили) — помогу подобрать",
            "Медицинская страховка",
            "Питание в ресторанах (около 400–500 долларов за тур в лучших)",
            "Сувениры (в этих регионах они самые аутентичные, оставляйте место в багаже)"
          ]
        },
        {
          id: "patagonia-trekking",
          title: "Патагония: Аргентина и Чили (треккинг)",
          duration: "13–15 дней",
          location: "Чили · Аргентина",
          description: "Лучшие маршруты аргентинской и чилийской Патагонии в одном путешествии. Торрес-дель-Пайне, Фицрой, Перито-Морено и Огненная Земля — без палаток, тяжёлых рюкзаков и походного быта.",
          image: "images/tours/long-programs/patagonia-trekking.jpg",
          price: "4250",
          showPrefix: true,
          included: [
            "Встреча в аэропорту в день прилета",
            "2-х местное проживание в отелях уровня 3-4*",
            "Групповой автотранспорт по маршруту",
            "2 внутренних перелета по Аргентине",
            "Экскурсия по Буэнос-Айресу",
            "Входные билеты в национальные парки",
            "Лодка на леднике Перито Морено",
            "Русскоязычные гиды",
            "Сопровождение русскоязычным тур-лидером",
            "Завтраки в отелях",
            "Все указанные в программе активности",
            "Помощь в подборе билетов"
          ],
          notIncluded: [
            "Авиаперелет в Аргентину и обратно (~1500$)",
            "Питание в городах (~60$ в день)",
            "Личные расходы и сувениры"
          ]
        },
        {
          id: "easter-island",
          title: "Расширение: Остров Пасхи",
          duration: "4–5 дней",
          location: "Остров Пасхи",
          description: "Остров Пасхи находится почти в 4000 километрах от ближайшего материка. Именно эта изоляция помогла создать одну из самых загадочных культур мира и её знаменитые каменные статуи.",
          image: "images/tours/long-programs/easter-island.jpg",
          price: "1400",
          showPrefix: false,
          included: [
            "Все трансферы по программе",
            "Местный гид по острову",
            "Сопровождающий гид-переводчик на русский язык",
            "Проживание 2 ночи в двухместных номерах",
            "Завтрак в отеле и завтрак-пикник на рассвете",
            "Помощь в подборе и покупке билетов"
          ],
          notIncluded: [
            "Перелёт из Сантьяго и обратно (около 1000 долларов)",
            "Питание на острове (около 150 долларов)"
          ]
        },
        {
          id: "iguazu-extension",
          title: "Расширение: водопады Игуасу",
          duration: "2–3 дня",
          location: "Аргентина · Бразилия",
          description: "Один из самых впечатляющих водопадов планеты. За два дня увидим Игуасу с аргентинской и бразильской стороны, чтобы оценить его и вблизи, и во всей полноте.",
          image: "images/tours/long-programs/iguazu-extension.jpg",
          price: "900",
          showPrefix: false,
          included: [
            "Внутренние перелеты из Буэнос-Айреса и в Буэнос-Айрес",
            "Проживание в отеле 4 звезды — 2 ночи",
            "Завтраки в отеле",
            "Все входы в парки, включая парк птиц",
            "Все трансферы по программе (аэропорт, экскурсии)"
          ],
          notIncluded: [
            "Прогулка на лодке под водопадом — $80 (по желанию)",
            "Полет на вертолете над водопадом — $150 (по желанию)",
            "Обеды и ужины — около $150"
          ]
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
    footer: "© 2025 Евгений Абросимов · Туры по Южной Америке",
    comingSoon: "СКОРО"
  },

  en: {
    nav: { brand: "Evgeny Abrosimov" },
    lang: "en",
    ticker: "Next tour: <strong>Northwest Argentina (Jujuy)</strong> · 15–19 July 2026",
    tickerCta: { label: "Enquire", waText: "Hi! I'd like to learn more about the upcoming tour." },
    pricePrefix: "from",
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
        { id: "history-ba", title: "Understanding Buenos Aires", duration: "4 hours", location: "Buenos Aires", description: "Buenos Aires is not just a beautiful city, but a key to understanding Argentina. In one walk, we'll travel from the old port of La Boca to the ultra-modern Puerto Madero and see how immigration, tango, politics, economic crises, and football passion shaped the city as it is today.\n\nThis is not just a tour about history and architecture. This is an opportunity to understand why Argentina lives the way it does now, and to see the connection between past and present on the streets of Buenos Aires.", image: "images/tours/excursions/history-ba.jpg",
          "price": "150",
          "showPrefix": true,
          included: [
            "Walking tour through key neighborhoods of the city (4 hours)",
            "Professional English-speaking guide",
            "In-depth commentary on the city's history, immigration, tango, politics and culture"
          ],
          notIncluded: [
            "Additional expenses for coffee, drinks or food along the way",
            "Entrance fee to the Boca Juniors Museum (~$25, optional)",
            "Transportation to the starting point of the route"
          ]
        },
        { id: "recoleta", title: "Recoleta Cemetery", duration: "1 day", location: "Buenos Aires", description: "Argentine history through the lives of the people who shaped it. Presidents, national heroes, millionaires and Evita — all of them await us among the mausoleums of Recoleta.", image: "images/tours/excursions/recoleta-cemetery.jpg",
          "price": "80",
          "showPrefix": true },
        { id: "football", title: "Argentina and Football", duration: "1 day", location: "Buenos Aires", description: "For many, attending an Argentine football match becomes the defining memory of their trip. If the schedule allows — we go to a match. If not — we'll still talk about the clubs, the legends and the passion that made Argentine football famous around the world.", image: "images/tours/excursions/football-argentina.jpg",
          "price": "150",
          "showPrefix": true },
        { id: "tango", title: "Tango Show", duration: "1 day", location: "Buenos Aires", description: "Recommendations and booking assistance for tango shows in Buenos Aires. I'll find the best option by format, venue and budget, and help you get a discount where possible.", image: "images/tours/excursions/tango.jpg",
          "price": "65",
          "showPrefix": true,
          photos: ['/images/tours/excursions/tango-1.jpg']
        }
      ],
      short: [
        { id: "mendoza", title: "Mendoza: Wine and the Andes", duration: "3 days", location: "Mendoza", description: "Argentina's finest wines are born here, at the foot of the Andes. Tastings, wineries of different scales, gastronomy and a few days in one of the country's most pleasant regions.", image: "images/tours/short-programs/mendoza-wine.jpg",
          "price": "750",
          "showPrefix": true },
        { id: "iguazu-short", title: "Iguazu Falls", duration: "2 days", location: "Argentina", description: "One of the most impressive natural phenomena on the planet. We enter from the Argentine side — closest and most powerful. Sound, spray, rainbows. Impossible to describe in words.", image: "images/tours/short-programs/iguazu-falls.jpg",
          "price": "700",
          "showPrefix": true },
        { id: "salta", title: "Highland Argentina", duration: "5 days", location: "Salta, Jujuy", description: "A journey through Argentina that many don't expect to see. High-altitude deserts, salt flats at over 3000 metres, colonial churches, Andean villages and landscapes that look more like Bolivia or Peru. In just a few days we'll see a region where Inca history, Spanish heritage and indigenous cultures still exist side by side.", image: "images/tours/short-programs/salta-northwest.jpg",
          "price": "550",
          "showPrefix": true,
          included: [
            "4 nights in hotels — double occupancy",
            "Vehicles and fuel",
            "Permits for access to regions",
            "Entrance fees to national parks and attractions",
            "Professional English-speaking guides"
          ],
          notIncluded: [
            "Airfare",
            "Meals (except hotel breakfasts)",
            "Personal expenses"
          ]
        },
        { id: "bariloche", title: "Bariloche: Heart of the Lake District", duration: "4 days", location: "Patagonia", description: "The region that made Patagonia famous. Glacial lakes, mountain scenery, charming towns and dozens of beautiful routes for every fitness level.", image: "images/tours/short-programs/bariloche-lakes.jpg",
          "price": "650",
          "showPrefix": true }
      ],
      long: [
        { id: "peru-bolivia-chile", title: "Peru / Bolivia / Chile", duration: "14–17 days", location: "Peru · Bolivia · Chile", description: "Peru and Bolivia are unique South American countries with amazing history, rich archaeological heritage, authentic colonial architecture and untouched mountain nature. Pacific coast in Lima, Cusco—capital of the Inca empire, Sacred Valley, lost city of Machu Picchu, Rainbow Mountains, Lake Titicaca, Valley of Mars in Bolivia, Uyuni salt flats, lagoons, volcanoes, geysers and pink flamingos. No visa required for citizens of Russia, Moldova, and Belarus to visit Peru; Bolivia visa issued at border.", image: "images/tours/long-programs/peru-bolivia-chile.jpg",
          "price": "4250",
          "showPrefix": false,
          "included": [
            "Accommodation in comfortable conditions",
            "Accompaniment of Russian-speaking and local guides",
            "Domestic transfers and flights",
            "All transportation",
            "Meals on many excursions",
            "Entrance tickets to attractions"
          ],
          "notIncluded": [
            "Flight to Lima (Peru) and return from Santiago (Chile) — I'll help you book",
            "Travel insurance",
            "Meals in restaurants (about 400–500 USD per tour in the best)",
            "Souvenirs (the most authentic in these regions, leave space in luggage)"
          ]
        },
        { id: "patagonia-trekking", title: "Patagonia: Argentina & Chile Trekking", duration: "13–15 days", location: "Chile · Argentina", description: "The finest routes of Argentine and Chilean Patagonia in one journey. Torres del Paine, Fitz Roy, Perito Moreno and Tierra del Fuego — without tents, heavy packs or camp life.", image: "images/tours/long-programs/patagonia-trekking.jpg",
          "price": "4250",
          "showPrefix": true,
          "included": [
            "Airport pickup on arrival day",
            "2-bed accommodation in 3-4* hotels",
            "Group transport along the route",
            "2 domestic flights in Argentina",
            "Buenos Aires city tour",
            "National park entrance fees",
            "Boat on Perito Moreno glacier",
            "English-speaking guides",
            "English-speaking tour leader support",
            "Hotel breakfasts",
            "All activities listed in the itinerary",
            "Flight booking assistance"
          ],
          "notIncluded": [
            "International flights to Argentina (~$1500)",
            "Meals in cities (~$60 per day)",
            "Personal expenses and souvenirs"
          ]
        },
        { id: "easter-island", title: "Extension: Easter Island", duration: "4–5 days", location: "Easter Island", description: "Easter Island lies nearly 4,000 kilometers from the nearest mainland. It is precisely this isolation that gave rise to one of the world's most enigmatic cultures and its famous stone statues.", image: "images/tours/long-programs/easter-island.jpg",
          "price": "1400",
          "showPrefix": false,
          "included": [
            "All transfers as per program",
            "Local island guide",
            "Accompanying guide-translator to Russian language",
            "2 nights accommodation in double rooms",
            "Breakfast at hotel and sunrise picnic breakfast",
            "Assistance in selecting and purchasing tickets"
          ],
          "notIncluded": [
            "Flight from Santiago and return (approximately 1000 USD)",
            "Meals on the island (approximately 150 USD)"
          ]
        },
        { id: "iguazu-extension", title: "Iguazu Extension", duration: "2–3 days", location: "Argentina · Brazil", description: "One of the most spectacular waterfalls on the planet. In two days we see Iguazu from both the Argentine and Brazilian sides — up close and in its full panoramic scale.", image: "images/tours/long-programs/iguazu-extension.jpg",
          "price": "900",
          "showPrefix": false,
          "included": [
            "Domestic flights from and to Buenos Aires",
            "4-star hotel accommodation — 2 nights",
            "Breakfast at hotel",
            "All park entrances, including bird park",
            "All transfers as per program (airport, excursions)"
          ],
          "notIncluded": [
            "Boat ride under the waterfall — $80 (optional)",
            "Helicopter flight over the waterfall — $150 (optional)",
            "Lunch and dinner — approximately $150"
          ]
        },
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
    footer: "© 2025 Evgeny Abrosimov · South America Tours",
    comingSoon: "COMING SOON"
  },

  es: {
    nav: { brand: "Evgeny Abrosimov" },
    lang: "es",
    ticker: "Próximo tour: <strong>Noroeste Argentino (Jujuy)</strong> · 15–19 de julio de 2026",
    tickerCta: { label: "Escribir", waText: "¡Hola! Me gustaría saber más sobre el próximo tour." },
    pricePrefix: "desde",
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
        { id: "history-ba", title: "Entender Buenos Aires", duration: "4 horas", location: "Buenos Aires", description: "Buenos Aires no es solo una ciudad hermosa, sino la clave para entender Argentina. En un paseo, viajaremos desde el antiguo puerto de La Boca hasta el ultra moderno Puerto Madero y veremos cómo la inmigración, el tango, la política, las crisis económicas y la pasión por el fútbol moldearon la ciudad tal como es hoy.\n\nEste no es solo un tour sobre historia y arquitectura. Esta es una oportunidad para entender por qué Argentina vive de la manera en que vive ahora, y para ver la conexión entre el pasado y el presente en las calles de Buenos Aires.", image: "images/tours/excursions/history-ba.jpg",
          "price": "150",
          "showPrefix": true,
          included: [
            "Recorrido a pie por los barrios clave de la ciudad (4 horas)",
            "Guía profesional hispanohablante",
            "Narración detallada sobre la historia de la ciudad, inmigración, tango, política y cultura"
          ],
          notIncluded: [
            "Gastos adicionales en café, bebidas o comida durante el recorrido",
            "Entrada al Museo de Boca Juniors (~$25, opcional)",
            "Transporte al punto de inicio del recorrido"
          ]
        },
        { id: "recoleta", title: "Cementerio de la Recoleta", duration: "1 día", location: "Buenos Aires", description: "La historia argentina a través de las vidas de quienes la construyeron. Presidentes, héroes nacionales, millonarios y Evita — todos nos aguardan entre los mausoleos de la Recoleta.", image: "images/tours/excursions/recoleta-cemetery.jpg",
          "price": "80",
          "showPrefix": true },
        { id: "football", title: "Argentina y el Fútbol", duration: "1 día", location: "Buenos Aires", description: "Para muchos, asistir a un partido de fútbol argentino se convierte en el recuerdo más especial del viaje. Si el calendario lo permite — vamos al partido. Si no — hablaremos de los clubes, las leyendas y la pasión que hizo famoso al fútbol argentino en todo el mundo.", image: "images/tours/excursions/football-argentina.jpg",
          "price": "150",
          "showPrefix": true },
        { id: "tango", title: "Show de Tango", duration: "1 día", location: "Buenos Aires", description: "Recomendaciones y asistencia para reservar espectáculos de tango en Buenos Aires. Encontraré la mejor opción según el formato, el lugar y el presupuesto, y te ayudaré a obtener un descuento donde sea posible.", image: "images/tours/excursions/tango.jpg",
          "price": "65",
          "showPrefix": true,
          photos: ['/images/tours/excursions/tango-1.jpg']
        }
      ],
      short: [
        { id: "mendoza", title: "Mendoza: Vino y los Andes", duration: "3 días", location: "Mendoza", description: "Los mejores vinos de Argentina nacen aquí, al pie de los Andes. Degustaciones, bodegas de distintos tamaños, gastronomía y unos días en una de las regiones más agradables del país.", image: "images/tours/short-programs/mendoza-wine.jpg",
          "price": "750",
          "showPrefix": true },
        { id: "iguazu-short", title: "Cataratas del Iguazú", duration: "2 días", location: "Argentina", description: "Uno de los fenómenos naturales más impresionantes del planeta. Entramos por el lado argentino — el más cercano y poderoso. Sonido, salpicaduras, arcoíris. Imposible de describir con palabras.", image: "images/tours/short-programs/iguazu-falls.jpg",
          "price": "700",
          "showPrefix": true },
        { id: "salta", title: "Argentina de Altura", duration: "5 días", location: "Salta, Jujuy", description: "Un viaje por la Argentina que muchos no esperan ver. Desiertos de altura, salares a más de 3000 metros, iglesias coloniales, pueblos andinos y paisajes que parecen más de Bolivia o Perú. En apenas unos días veremos una región donde la historia inca, la herencia española y la cultura de los pueblos originarios aún coexisten lado a lado.", image: "images/tours/short-programs/salta-northwest.jpg",
          "price": "550",
          "showPrefix": true,
          included: [
            "4 noches en hoteles — alojamiento doble",
            "Vehículos y gasolina",
            "Permisos de acceso a regiones",
            "Entradas a parques nacionales y atracciones",
            "Guías profesionales hispanohablantes"
          ],
          notIncluded: [
            "Pasajes aéreos",
            "Comidas (excepto desayunos en hoteles)",
            "Gastos personales"
          ]
        },
        { id: "bariloche", title: "Bariloche: Corazón de la Región de los Lagos", duration: "4 días", location: "Patagonia", description: "La región que hizo famosa a la Patagonia. Lagos glaciares, paisajes de montaña, pueblos encantadores y decenas de rutas hermosas para todo nivel de condición física.", image: "images/tours/short-programs/bariloche-lakes.jpg",
          "price": "650",
          "showPrefix": true }
      ],
      long: [
        { id: "peru-bolivia-chile", title: "Perú / Bolivia / Chile", duration: "14–17 días", location: "Perú · Bolivia · Chile", description: "Perú y Bolivia son países únicos de América del Sur con historia sorprendente, rico patrimonio arqueológico, arquitectura colonial auténtica y naturaleza montañosa intacta. Costa del Pacífico en Lima, Cusco—capital del imperio inca, Valle Sagrado, ciudad perdida de Machu Picchu, Montañas Arcoíris, lago Titicaca, Valle de Marte en Bolivia, salares de Uyuni, lagunas, volcanes, géiseres y flamencos rosas. No se requiere visa para ciudadanos de Rusia, Moldavia y Bielorrusia para visitar Perú; visa de Bolivia se expide en frontera.", image: "images/tours/long-programs/peru-bolivia-chile.jpg",
          "price": "4250",
          "showPrefix": false,
          "included": [
            "Alojamiento en condiciones cómodas",
            "Acompañamiento de guías rusohablantes y locales",
            "Traslados internos y vuelos",
            "Todos los transportes",
            "Comidas en muchas excursiones",
            "Entradas a atracciones"
          ],
          "notIncluded": [
            "Vuelo a Lima (Perú) y regreso desde Santiago (Chile) — te ayudaré a reservar",
            "Seguro de viaje",
            "Comidas en restaurantes (aproximadamente 400–500 USD por tour en los mejores)",
            "Recuerdos (los más auténticos en estas regiones, deja espacio en el equipaje)"
          ]
        },
        { id: "patagonia-trekking", title: "Patagonia: Trekking Argentina y Chile", duration: "13–15 días", location: "Chile · Argentina", description: "Las mejores rutas de la Patagonia argentina y chilena en un solo viaje. Torres del Paine, Fitz Roy, Perito Moreno y Tierra del Fuego — sin carpas, mochilas pesadas ni vida de campamento.", image: "images/tours/long-programs/patagonia-trekking.jpg",
          "price": "4250",
          "showPrefix": true,
          "included": [
            "Recogida en el aeropuerto el día de llegada",
            "Alojamiento doble en hoteles de 3-4*",
            "Transporte grupal en la ruta",
            "2 vuelos nacionales en Argentina",
            "Tour por Buenos Aires",
            "Entradas a parques nacionales",
            "Barco en el glaciar Perito Moreno",
            "Guías de habla hispana",
            "Acompañamiento de tour líder hispanohablante",
            "Desayunos en hoteles",
            "Todas las actividades mencionadas en el itinerario",
            "Asistencia con reserva de vuelos"
          ],
          "notIncluded": [
            "Vuelos internacionales a Argentina (~$1500)",
            "Comidas en ciudades (~$60 por día)",
            "Gastos personales y recuerdos"
          ]
        },
        { id: "easter-island", title: "Extensión: Isla de Pascua", duration: "4–5 días", location: "Isla de Pascua", description: "La Isla de Pascua se encuentra a casi 4.000 kilómetros del continente más cercano. Es precisamente ese aislamiento lo que permitió crear una de las culturas más enigmáticas del mundo y sus famosas estatuas de piedra.", image: "images/tours/long-programs/easter-island.jpg",
          "price": "1400",
          "showPrefix": false,
          "included": [
            "Todos los traslados según el programa",
            "Guía local de la isla",
            "Guía acompañante-traductor al idioma ruso",
            "Alojamiento 2 noches en habitaciones dobles",
            "Desayuno en el hotel y desayuno-pícnic al amanecer",
            "Asistencia en la selección y compra de entradas"
          ],
          "notIncluded": [
            "Vuelo desde Santiago e ida y vuelta (aproximadamente 1000 USD)",
            "Comidas en la isla (aproximadamente 150 USD)"
          ]
        },
        { id: "iguazu-extension", title: "Extensión Iguazú", duration: "2–3 días", location: "Argentina · Brasil", description: "Una de las cataratas más impresionantes del planeta. En dos días veremos el Iguazú desde el lado argentino y el brasileño — de cerca y en toda su amplitud panorámica.", image: "images/tours/long-programs/iguazu-extension.jpg",
          "price": "900",
          "showPrefix": false,
          "included": [
            "Vuelos internos desde y hacia Buenos Aires",
            "Hotel 4 estrellas — 2 noches",
            "Desayuno en el hotel",
            "Todas las entradas a parques, incluyendo parque de aves",
            "Todos los traslados según programa (aeropuerto, excursiones)"
          ],
          "notIncluded": [
            "Paseo en bote bajo la cascada — $80 (opcional)",
            "Vuelo en helicóptero sobre la cascada — $150 (opcional)",
            "Comidas y cenas — aproximadamente $150"
          ]
        }
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
    footer: "© 2025 Evgeny Abrosimov · Tours por América del Sur",
    comingSoon: "PRÓXIMAMENTE"
  }
};

// Даты длинных туров (ISO формат, без привязки к языку — форматируются в main.js)
const TOUR_DATES = {
  'salta': [
    { from: '2026-07-15', to: '2026-07-19' }
  ],
  'peru-bolivia-chile': [
    { from: '2026-10-26', to: '2026-11-08' },
    { from: '2026-11-16', to: '2026-11-30' },
    { from: '2027-05-02', to: '2027-05-16' }
  ],
  'easter-island': [
    { from: '2026-11-30', to: '2026-12-02' },
    { from: '2027-05-16', to: '2027-05-18' }
  ],
  'patagonia-trekking': [
    { from: '2027-02-15', to: '2027-02-28' },
    { from: '2027-04-04', to: '2027-04-17' }
  ],
  'iguazu-extension': [
    { from: '2027-02-26', to: '2027-02-28' },
    { from: '2027-04-15', to: '2027-04-17' }
  ]
};

// Активные туры (с описанием и датами доступности)
// Отключенные туры будут показаны с наложением "СКОРО"
const ACTIVE_TOURS = {
  short: ['salta'], // активные короткие туры
  long: ['patagonia-trekking', 'peru-bolivia-chile', 'easter-island', 'iguazu-extension'], // активные длинные туры
  excursions: ['football', 'history-ba', 'tango'] // активные однодневные туры
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = { CONTENT, TOUR_DATES, ACTIVE_TOURS };
}
