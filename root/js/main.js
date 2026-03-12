/* ============================================================
   main.js
   ============================================================ */

/* ── 1. Yil ── */
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ── 2. Til ma'lumotlari ── */
const translations = {
  uz: {
    nav_services: "Xizmatlar",
    nav_faq: "Savollar",
    hero_kicker: "24/7 tezkor texnika ta'miri",
    hero_title: "KONDISIINER VA KATYOL REMONTI",
    hero_subtitle: "Toshkent bo'yicha konditsioner, isitish katyoli va kir mashinasini tezkor, sifatli va kafolatli ta'mirlash xizmati.",
    hero_phone_label: "Ustaga bevosita qo'ng'iroq",
    btn_call: "Qo'ng'iroq qilish",
    btn_services: "Xizmatlarni ko'rish",
    social_label: "Tez aloqa:",
    meta_pill: "24/7 xizmat",
    meta_note: "Toshkent bo'ylab manzilingizga chiqib boramiz",
    stat1_val: "1000+", stat1_label: "Mamnun mijozlar",
    stat2_val: "8+ yil", stat2_label: "Tajriba",
    stat3_val: "24/7", stat3_label: "Tezkor xizmat",
    stat4_val: "100%", stat4_label: "Kafolat",
    slider_label: "Professional ta'mirlash xizmati",
    sec_services_kicker: "Bizning xizmatlarimiz",
    sec_services_title: "Nimani ta'mirlaymiz?",
    sec_services_desc: "Konditsioner, isitish katyoli va kir yuvish mashinalaringizni Toshkent bo'yicha uy yoki ofisingizda, qulay va kafolatli sharoitda ta'mirlab beramiz.",
    kat_tag: "Isitish katyollari remonti",
    kat_title: "Tez va sifatli katyol remonti",
    kat_sub: "Har qanday turdagi katyolni uyda yoki zavod sharoitida ta'mirlash.",
    kat_text: "Mutaxassislarimiz katyolingizni tez va aniq diagnostika qilib, kerakli ehtiyot qismlarni almashtiradi. Ish yakunida tizim to'liq sinovdan o'tkazilib, xavfsiz ishlashi kafolatlanadi.",
    kat_b1: "Gaz va elektr katyollari uchun to'liq diagnostika",
    kat_b2: "Issiqlik almashinish va bacalarni chuqur tozalash",
    kat_b3: "Nasos, avtomatika va elektron platalarni ta'mirlash",
    kat_b4: "Mavsumiy ishga tushirish va profilaktika",
    kat_note: "Belgilangan narx ish jarayonida o'zgarmaydi — hammasi oldindan kelishiladi.",
    kat_img_label: "Tez va ishonchli katyol servisi",
    ref_tag: "Konditsioner remonti",
    ref_title: "Sovuq va issiq rejimda barqaror ish",
    ref_sub: "Gaz to'ldirish, tozalash va murakkab remont ishlari bir joyda.",
    ref_text: "Konditsioneringiz yaxshi sovutmayaptimi, shovqin beryaptimi yoki ishlamay qoldimi — ustalarimiz joyiga borib, muammoni aniq aniqlashadi va tezda bartaraf etishadi.",
    ref_b1: "Freon gazini normaga muvofiq to'ldirish",
    ref_b2: "Ichki va tashqi blokni chuqur tozalash va dezinfeksiya",
    ref_b3: "Kompessor, plata va pult ta'miri",
    ref_b4: "Mavsumiy profilaktika va ishga tushirish",
    ref_note: "Tozalanib turgan konditsioner elektr sarfini kamaytiradi va uzoqroq xizmat qiladi.",
    ref_img_label: "Professional konditsioner xizmati",
    mach_tag: "Kir mashina remonti",
    mach_title: "Uy sharoitida qulay kir mashina servisi",
    mach_sub: "Motor, nasos va elektron qismlar ta'miri hammasi bir joyda.",
    mach_text: "Mashina suv olmayaptimi, suv chiqarmayaptimi yoki baland shovqin beryaptimi — biz muammoni joyida ko'rib chiqamiz va zarur bo'lsa, ustaxonaga olib ketib, to'liq ta'mirlab qaytaramiz.",
    mach_b1: "Motor, podshipnik va remenlarni almashtirish",
    mach_b2: "Nasos va drenaj tizimini tozalash va ta'mirlash",
    mach_b3: "Elektron plata, datchik va boshqaruv paneli ta'miri",
    mach_b4: "Tezkor test va balanslash ishlari",
    mach_note: "Ish tugagach, to'liq test o'tkazib beramiz va kafolat muddatini yozma ravishda beramiz.",
    mach_img_label: "Uyga kelib kir mashina ta'miri",
    about_kicker: "Kompaniya haqida",
    about_title: "8 yildan ortiq tajribali servis markazi",
    about_desc: "Har bir buyurtmaga individual yondashuv, adolatli narx va aniq muddat — bizning asosiy tamoyillarimizdan.",
    about_p1: "Toshkent shahrida 8 yildan ortiq tajribaga ega servis markazi. Biz konditsioner, isitish katyoli va kir mashinalarini professional darajada ta'mirlaymiz.",
    about_p2: "Biz mijozlarga qulay narx, tezkor xizmat va ishonchli natija taklif qilamiz. Ustalarimiz doimiy ravishda o'qitilib boriladi.",
    about_p3: "Qanday holatda texnikangiz ishlamay qolgan bo'lsa ham — avval diagnostika o'tkazamiz, so'ng aniq yechim va narxni kelishib olib, ishni boshlaymiz.",
    about_chip1: "Toshkent bo'ylab manzilingizga chiqib boramiz",
    about_chip2: "Original ehtiyot qismlar bilan ishlaymiz",
    about_chip3: "Har bir ish bo'yicha kafolat beramiz",
    about_card_title: "Servis markazi ofisi",
    about_card_sub: "Toshkent, markaziy hudud",
    about_badge: "Tajriba 8+ yil",
    about_team_title: "Ustalar jamoasi",
    about_team_text: "Har bir yo'nalish bo'yicha alohida mutaxassislar jamoasi mijozlar chaqiruviga tezkor javob beradi.",
    about_tag: "Servis ofisi",
    about_m1_label: "Yillik buyurtmalar", about_m1_val: "1200+",
    about_m2_label: "Qayta murojaatlar", about_m2_val: "70%",
    about_m3_label: "O'rtacha baho", about_m3_val: "4.9 / 5",
    about_tagline: "Biz uchun eng katta reklama — bu mamnun mijozlarning tavsiyasi.",
    faq_kicker: "Ko'p so'raladigan savollar",
    faq_title: "Savollaringizga qisqa javoblar",
    faq_desc: "Quyida eng ko'p beriladigan savollarga javoblarni jamladik. Agar bu yerda yo'q bo'lsa — bizga bemalol qo'ng'iroq qiling.",
    faq_q1: "Usta qancha vaqtda keladi?", faq_a1: "Toshkent bo'ylab o'rtacha yetib borish vaqti 40–60 daqiqa. Hududingizga yaqin navbatchi usta bo'lsa, bundan ham tezroq yetib borishimiz mumkin.",
    faq_q2: "Remont qancha vaqt oladi?", faq_a2: "Oddiy nosozliklar 1–2 soat ichida joyida hal qilinadi. Murakkab ta'mir yoki ehtiyot qism almashtirish talab qilinsa, muddat ustangiz tomonidan oldindan aytiladi.",
    faq_q3: "Kafolat bormi?", faq_a3: "Albatta. Har bir bajarilgan ish turi bo'yicha yozma kafolat beriladi. Agar kafolat davrida muammo qaytalanib qolsa, bepul bartaraf etamiz.",
    faq_q4: "Toshkent bo'ylab xizmat qilasizlarmi?", faq_a4: "Ha, Toshkent shahri va yaqin tumanlarning barcha hududlarida xizmat ko'rsatamiz. Manzilingizni aytsangiz, ustamiz yetib borish vaqtini aniq aytib beradi.",
    faq_aside_title: "Qo'shimcha savollaringiz bormi?",
    faq_aside_p: "Agar texnikangiz bilan bog'liq vaziyatni tushuntirib bersangiz, ustamiz telefon orqali taxminiy muammoni aytib berishi va dastlabki narxni hisoblab bera oladi.",
    faq_phone_label: "Telefon:", faq_tg_label: "Telegram:", faq_ig_label: "Instagram:", faq_time_label: "Ish vaqti:", faq_time_val: "24/7 — dam olishsiz",
    loc_kicker: "Lokatsiya",
    loc_title: "Toshkentdagi servis manzilimiz",
    loc_desc: "Quyidagi xarita orqali servis markazimiz lokatsiyasini ko'rishingiz mumkin.",
    loc_addr_label: "Manzil:", loc_addr_val: "Toshkent shahri, markaziy hudud (aniq manzil telefon orqali aytiladi)",
    loc_phone_label: "Telefon:", loc_tg_label: "Telegram:", loc_ig_label: "Instagram:",
    loc_time_label: "Ish vaqti:", loc_time_val: "24/7 — dam olish kunlarisiz",
    loc_zone_label: "Xizmat hududi:", loc_zone_val: "Toshkent shahri va yaqin tumanlar",
    loc_badge: "Usta manzilingizga o'zi boradi",
    footer_desc: "Toshkent shahrida konditsioner, isitish katyoli va kir mashinalarini professional darajada ta'mirlash xizmati. 24/7 ishlaydigan ishonchli servis markazi.",
    footer_contact: "Aloqa", footer_services: "Xizmatlar", footer_info: "Ma'lumot",
    footer_svc1: "Isitish katyoli remonti", footer_svc2: "Konditsioner remonti", footer_svc3: "Kir mashina remonti",
    footer_info1: "Ish vaqti: 24/7", footer_info2: "Toshkent bo'yicha xizmat", footer_info3: "Kafolatli ta'mirlash",
    footer_copy: "Barcha huquqlar himoyalangan.",
    brand_subtitle: "Toshkent bo'yicha tezkor servis",
  },
  ru: {
    nav_services: "Услуги",
    nav_faq: "Вопросы",
    hero_kicker: "Срочный ремонт 24/7",
    hero_title: "РЕМОНТ КОНДИЦИОНЕРОВ И КОТЛОВ",
    hero_subtitle: "Быстрый, качественный и гарантийный ремонт кондиционеров, отопительных котлов и стиральных машин по всему Ташкенту.",
    hero_phone_label: "Прямой звонок мастеру",
    btn_call: "Позвонить",
    btn_services: "Смотреть услуги",
    social_label: "Быстрая связь:",
    meta_pill: "Работаем 24/7",
    meta_note: "Выезжаем по всему Ташкенту",
    stat1_val: "1000+", stat1_label: "Довольных клиентов",
    stat2_val: "8+ лет", stat2_label: "Опыт",
    stat3_val: "24/7", stat3_label: "Срочный выезд",
    stat4_val: "100%", stat4_label: "Гарантия",
    slider_label: "Профессиональный ремонт",
    sec_services_kicker: "Наши услуги",
    sec_services_title: "Что мы ремонтируем?",
    sec_services_desc: "Ремонт кондиционеров, отопительных котлов и стиральных машин у вас дома или в офисе по всему Ташкенту — удобно и с гарантией.",
    kat_tag: "Ремонт отопительных котлов",
    kat_title: "Быстрый и качественный ремонт котла",
    kat_sub: "Ремонт котлов любого типа — дома или в мастерской.",
    kat_text: "Наши специалисты быстро и точно диагностируют котёл, заменят необходимые запчасти. После окончания работ система полностью тестируется и даётся гарантия безопасной работы.",
    kat_b1: "Полная диагностика газовых и электрических котлов",
    kat_b2: "Глубокая чистка теплообменника и дымохода",
    kat_b3: "Ремонт насоса, автоматики и электронных плат",
    kat_b4: "Сезонный запуск и профилактика",
    kat_note: "Фиксированная цена — всё согласовывается заранее.",
    kat_img_label: "Быстрый и надёжный сервис котлов",
    ref_tag: "Ремонт кондиционеров",
    ref_title: "Стабильная работа в режиме охлаждения и обогрева",
    ref_sub: "Заправка фреоном, чистка и сложный ремонт — всё в одном месте.",
    ref_text: "Кондиционер плохо охлаждает, шумит или не работает? Наши мастера выедут к вам, точно определят проблему и оперативно её устранят.",
    ref_b1: "Заправка фреоном согласно норме",
    ref_b2: "Глубокая чистка и дезинфекция внутреннего и внешнего блоков",
    ref_b3: "Ремонт компрессора, платы и пульта",
    ref_b4: "Сезонная профилактика и запуск",
    ref_note: "Чистый кондиционер экономит электроэнергию и служит дольше.",
    ref_img_label: "Профессиональный сервис кондиционеров",
    mach_tag: "Ремонт стиральных машин",
    mach_title: "Удобный сервис стиральных машин на дому",
    mach_sub: "Ремонт мотора, насоса и электронных компонентов — всё в одном месте.",
    mach_text: "Машина не набирает воду, не сливает или сильно шумит? Мы осмотрим на месте и при необходимости заберём в мастерскую для полного ремонта.",
    mach_b1: "Замена мотора, подшипников и ремней",
    mach_b2: "Чистка и ремонт насоса и дренажной системы",
    mach_b3: "Ремонт электронной платы, датчиков и панели управления",
    mach_b4: "Быстрое тестирование и балансировка",
    mach_note: "После работы проводим полный тест и выдаём письменную гарантию.",
    mach_img_label: "Ремонт стиральных машин с выездом на дом",
    about_kicker: "О компании",
    about_title: "Сервисный центр с опытом более 8 лет",
    about_desc: "Индивидуальный подход к каждому заказу, честная цена и чёткие сроки — наши основные принципы.",
    about_p1: "Сервисный центр в Ташкенте с опытом более 8 лет. Мы профессионально ремонтируем кондиционеры, котлы и стиральные машины.",
    about_p2: "Мы предлагаем клиентам доступные цены, быстрое обслуживание и надёжный результат. Наши мастера регулярно проходят обучение.",
    about_p3: "В каком бы состоянии ни была ваша техника — сначала проводим диагностику, затем согласовываем решение и цену, после чего приступаем к работе.",
    about_chip1: "Выезжаем по всему Ташкенту",
    about_chip2: "Работаем с оригинальными запчастями",
    about_chip3: "Даём гарантию на каждую работу",
    about_card_title: "Офис сервисного центра",
    about_card_sub: "Ташкент, центральный район",
    about_badge: "Опыт 8+ лет",
    about_team_title: "Команда мастеров",
    about_team_text: "Отдельные специалисты по каждому направлению оперативно реагируют на вызовы клиентов.",
    about_tag: "Офис сервиса",
    about_m1_label: "Заказов в год", about_m1_val: "1200+",
    about_m2_label: "Повторные обращения", about_m2_val: "70%",
    about_m3_label: "Средняя оценка", about_m3_val: "4.9 / 5",
    about_tagline: "Лучшая реклама для нас — рекомендации довольных клиентов.",
    faq_kicker: "Часто задаваемые вопросы",
    faq_title: "Краткие ответы на ваши вопросы",
    faq_desc: "Здесь собраны ответы на самые часто задаваемые вопросы. Если не нашли — звоните нам.",
    faq_q1: "Как быстро приедет мастер?", faq_a1: "Среднее время прибытия по Ташкенту — 40–60 минут. Если рядом есть дежурный мастер — приедем быстрее.",
    faq_q2: "Сколько времени займёт ремонт?", faq_a2: "Простые неисправности устраняются на месте за 1–2 часа. Если нужна замена запчастей, мастер заранее сообщит сроки.",
    faq_q3: "Есть ли гарантия?", faq_a3: "Да. На каждый вид выполненных работ выдаётся письменная гарантия. Если проблема повторится в гарантийный период — устраним бесплатно.",
    faq_q4: "Работаете ли по всему Ташкенту?", faq_a4: "Да, обслуживаем все районы Ташкента и близлежащие районы. Назовите адрес — мастер точно скажет время прибытия.",
    faq_aside_title: "Остались вопросы?",
    faq_aside_p: "Если опишете ситуацию с техникой, наш мастер сможет по телефону предварительно определить проблему и рассчитать стоимость.",
    faq_phone_label: "Телефон:", faq_tg_label: "Telegram:", faq_ig_label: "Instagram:", faq_time_label: "Время работы:", faq_time_val: "24/7 — без выходных",
    loc_kicker: "Местоположение",
    loc_title: "Наш адрес в Ташкенте",
    loc_desc: "На карте ниже вы можете найти расположение нашего сервисного центра.",
    loc_addr_label: "Адрес:", loc_addr_val: "г. Ташкент, центральный район (точный адрес уточняется по телефону)",
    loc_phone_label: "Телефон:", loc_tg_label: "Telegram:", loc_ig_label: "Instagram:",
    loc_time_label: "Время работы:", loc_time_val: "24/7 — без выходных",
    loc_zone_label: "Зона обслуживания:", loc_zone_val: "Ташкент и прилегающие районы",
    loc_badge: "Мастер приедет к вам сам",
    footer_desc: "Профессиональный ремонт кондиционеров, котлов и стиральных машин в Ташкенте. Надёжный сервисный центр, работающий 24/7.",
    footer_contact: "Контакты", footer_services: "Услуги", footer_info: "Информация",
    footer_svc1: "Ремонт котлов", footer_svc2: "Ремонт кондиционеров", footer_svc3: "Ремонт стиральных машин",
    footer_info1: "Время работы: 24/7", footer_info2: "Сервис по всему Ташкенту", footer_info3: "Гарантийный ремонт",
    footer_copy: "Все права защищены.",
    brand_subtitle: "Быстрый сервис по Ташкенту",
  }
};

/* ── 3. Til o'zgartirish funksiyasi ── */
let currentLang = localStorage.getItem('lang') || 'uz';

function applyLang(lang) {
  const t = translations[lang];
  currentLang = lang;
  localStorage.setItem('lang', lang);

  // Lang toggle tugmasini yangilash
  const btn = document.getElementById('langToggle');
  if (btn) btn.textContent = lang === 'uz' ? 'RU' : 'UZ';

  // HTML lang atributi
  document.documentElement.lang = lang === 'uz' ? 'uz' : 'ru';

  // Brand
  const brandTitle = document.querySelector('.brand-title');
  if (brandTitle) brandTitle.textContent = t.hero_title;
  const brandSub = document.querySelector('.brand-subtitle');
  if (brandSub) brandSub.textContent = t.brand_subtitle;

  // Nav
  const navLinks = document.querySelectorAll('.nav-links a');
  if (navLinks[0]) navLinks[0].textContent = t.nav_services;
  if (navLinks[1]) navLinks[1].textContent = t.nav_faq;

  // Hero
  setText('hero-kicker-text', t.hero_kicker);
  setText('hero-title-text', t.hero_title);
  setText('hero-subtitle', t.hero_subtitle);
  setText('hero-phone-label', t.hero_phone_label);
  setText('btn-call', t.btn_call);
  setText('btn-services', t.btn_services);
  setText('social-label', t.social_label);
  setText('hero-meta-pill', t.meta_pill);
  setText('hero-meta-note', t.meta_note);
  setText('stat1-val', t.stat1_val); setText('stat1-label', t.stat1_label);
  setText('stat2-val', t.stat2_val); setText('stat2-label', t.stat2_label);
  setText('stat3-val', t.stat3_val); setText('stat3-label', t.stat3_label);
  setText('stat4-val', t.stat4_val); setText('stat4-label', t.stat4_label);
  setText('hero-slider-label', t.slider_label);

  // Services section
  setText('sec-services-kicker', t.sec_services_kicker);
  setText('sec-services-title', t.sec_services_title);
  setText('sec-services-desc', t.sec_services_desc);
  // Katyol
  setText('kat-tag', t.kat_tag); setText('kat-title', t.kat_title); setText('kat-sub', t.kat_sub);
  setText('kat-text', t.kat_text); setText('kat-note', t.kat_note); setText('kat-img-label', t.kat_img_label);
  setText('kat-b1', t.kat_b1); setText('kat-b2', t.kat_b2); setText('kat-b3', t.kat_b3); setText('kat-b4', t.kat_b4);
  // Konditsioner
  setText('ref-tag', t.ref_tag); setText('ref-title', t.ref_title); setText('ref-sub', t.ref_sub);
  setText('ref-text', t.ref_text); setText('ref-note', t.ref_note); setText('ref-img-label', t.ref_img_label);
  setText('ref-b1', t.ref_b1); setText('ref-b2', t.ref_b2); setText('ref-b3', t.ref_b3); setText('ref-b4', t.ref_b4);
  // Kir mashina
  setText('mach-tag', t.mach_tag); setText('mach-title', t.mach_title); setText('mach-sub', t.mach_sub);
  setText('mach-text', t.mach_text); setText('mach-note', t.mach_note); setText('mach-img-label', t.mach_img_label);
  setText('mach-b1', t.mach_b1); setText('mach-b2', t.mach_b2); setText('mach-b3', t.mach_b3); setText('mach-b4', t.mach_b4);
  // About
  setText('about-kicker', t.about_kicker); setText('about-title', t.about_title); setText('about-desc', t.about_desc);
  setText('about-p1', t.about_p1); setText('about-p2', t.about_p2); setText('about-p3', t.about_p3);
  setText('about-chip1', t.about_chip1); setText('about-chip2', t.about_chip2); setText('about-chip3', t.about_chip3);
  setText('about-card-title', t.about_card_title); setText('about-card-sub', t.about_card_sub);
  setText('about-badge', t.about_badge); setText('about-team-title', t.about_team_title);
  setText('about-team-text', t.about_team_text); setText('about-tag', t.about_tag);
  setText('about-m1-label', t.about_m1_label); setText('about-m1-val', t.about_m1_val);
  setText('about-m2-label', t.about_m2_label); setText('about-m2-val', t.about_m2_val);
  setText('about-m3-label', t.about_m3_label); setText('about-m3-val', t.about_m3_val);
  setText('about-tagline', t.about_tagline);
  // FAQ
  setText('faq-kicker', t.faq_kicker); setText('faq-title', t.faq_title); setText('faq-desc', t.faq_desc);
  setText('faq-q1', t.faq_q1); setText('faq-a1', t.faq_a1);
  setText('faq-q2', t.faq_q2); setText('faq-a2', t.faq_a2);
  setText('faq-q3', t.faq_q3); setText('faq-a3', t.faq_a3);
  setText('faq-q4', t.faq_q4); setText('faq-a4', t.faq_a4);
  setText('faq-aside-title', t.faq_aside_title); setText('faq-aside-p', t.faq_aside_p);
  setText('faq-phone-label', t.faq_phone_label); setText('faq-tg-label', t.faq_tg_label);
  setText('faq-ig-label', t.faq_ig_label); setText('faq-time-label', t.faq_time_label);
  setText('faq-time-val', t.faq_time_val);
  // Location
  setText('loc-kicker', t.loc_kicker); setText('loc-title', t.loc_title); setText('loc-desc', t.loc_desc);
  setText('loc-addr-label', t.loc_addr_label); setText('loc-addr-val', t.loc_addr_val);
  setText('loc-phone-label', t.loc_phone_label); setText('loc-tg-label', t.loc_tg_label);
  setText('loc-ig-label', t.loc_ig_label); setText('loc-time-label', t.loc_time_label);
  setText('loc-time-val', t.loc_time_val); setText('loc-zone-label', t.loc_zone_label);
  setText('loc-zone-val', t.loc_zone_val); setText('loc-badge-text', t.loc_badge);
  // Footer
  setText('footer-desc', t.footer_desc);
  setText('footer-contact', t.footer_contact); setText('footer-services-col', t.footer_services);
  setText('footer-info-col', t.footer_info);
  setText('footer-svc1', t.footer_svc1); setText('footer-svc2', t.footer_svc2); setText('footer-svc3', t.footer_svc3);
  setText('footer-info1', t.footer_info1); setText('footer-info2', t.footer_info2); setText('footer-info3', t.footer_info3);
  setText('footer-copy-text', t.footer_copy);
}

function setText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

/* ── 4. Dark mode ── */
let darkMode = localStorage.getItem('dark') === 'true';

function applyDark(dark) {
  darkMode = dark;
  localStorage.setItem('dark', dark);
  document.documentElement.classList.toggle('dark', dark);
  const btn = document.getElementById('darkToggle');
  if (btn) btn.textContent = dark ? '☀️' : '🌙';
}

/* ── 5. Hamburger menyu ── */
const navToggle = document.getElementById('navToggle');
const navLinksEl = document.getElementById('navLinks');
if (navToggle && navLinksEl) {
  navToggle.addEventListener('click', () => navLinksEl.classList.toggle('open'));
  document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && !navLinksEl.contains(e.target))
      navLinksEl.classList.remove('open');
  });
}

/* ── 6. FAQ accordion ── */
document.querySelectorAll('.faq-item').forEach(item => {
  item.addEventListener('click', () => {
    const isOpen = item.classList.contains('active');
    document.querySelectorAll('.faq-item').forEach(i => {
      i.classList.remove('active');
      const t = i.querySelector('.faq-toggle');
      if (t) t.textContent = '+';
    });
    if (!isOpen) {
      item.classList.add('active');
      const t = item.querySelector('.faq-toggle');
      if (t) t.textContent = '−';
    }
  });
});

/* ── 7. Fade-in ── */
const fadeEls = document.querySelectorAll('.fade-in');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.delay || 0;
        setTimeout(() => entry.target.classList.add('visible'), parseInt(delay));
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  fadeEls.forEach(el => observer.observe(el));
} else {
  fadeEls.forEach(el => el.classList.add('visible'));
}

/* ── 8. Hero slider ── */
(function () {
  const slider = document.getElementById('heroSlider');
  if (!slider) return;
  const images = slider.querySelectorAll('img');
  if (images.length <= 1) return;
  let current = 0;
  function goTo(index) {
    images[current].classList.remove('active');
    current = (index + images.length) % images.length;
    images[current].classList.add('active');
  }
  setInterval(() => goTo(current + 1), 2000);
})();

/* ── 9. Service card slider ── */
document.querySelectorAll('.service-media').forEach(media => {
  const images = media.querySelectorAll('.service-image');
  if (images.length <= 1) return;
  let current = 0;
  function goTo(index) {
    images[current].classList.remove('active');
    current = (index + images.length) % images.length;
    images[current].classList.add('active');
  }
  setInterval(() => goTo(current + 1), 3000);
});

/* ── 10. Init ── */
document.addEventListener('DOMContentLoaded', () => {
  applyLang(currentLang);
  applyDark(darkMode);

  const langBtn = document.getElementById('langToggle');
  if (langBtn) langBtn.addEventListener('click', () => applyLang(currentLang === 'uz' ? 'ru' : 'uz'));

  const darkBtn = document.getElementById('darkToggle');
  if (darkBtn) darkBtn.addEventListener('click', () => applyDark(!darkMode));
});

/* ── 11. Header scroll kichrayishi ── */
(function () {
  const header = document.querySelector('header');
  if (!header) return;
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });
})();