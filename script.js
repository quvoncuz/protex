/* ============================================
   PROFFSERVICE — script.js
   3 ta til: RU, UZ, EN
   ============================================ */

// ── TARJIMALAR ──────────────────────────────
const translations = {
  ru: {
    nav_title:    "Ремонт бытовой техники",
    menu_services:"Услуги",
    menu_about:   "О компании",
    menu_works:   "Наши работы",

    hero_title:   "Ремонт бытовой техники",
    hero_b1:      "Выезд",
    hero_t1:      "в течение 1 часа",
    hero_b2:      "Специалисты",
    hero_t2:      "с 10 летним опытом",

    services_h:   "Что мы",
    services_em:  "ремонтируем?",
    services_sub: "Наши услуги",

    s1_title: "Ремонт котлов",
    s1_li1:   "Быстрая диагностика",
    s1_li2:   "Гарантия на ремонт",

    s2_title: "Ремонт холодильников",
    s2_li1:   "Устранение утечки фреона",
    s2_li2:   "Ремонт любой сложности",

    s3_title: "Ремонт кондиционеров",
    s3_li1:   "Заправка и чистка",
    s3_li2:   "Работаем с любыми брендами",

    s4_title: "Ремонт льдогенераторов",
    s4_li1:   "Быстрое восстановление",
    s4_li2:   "Качественные запчасти",

    s5_title: "Ремонт электрозарядки",
    s5_li1:   "Точная диагностика",
    s5_li2:   "Надёжный ремонт",

    s6_title: "Ремонт стиральных машин",
    s6_li1:   "Замена деталей",
    s6_li2:   "Выезд в день обращения",

    btn_more: "Подробнее",
    btn_call: "Вызвать мастера",
    btn_price:"Узнать цену",

    cta1: "Все виды услуг по ремонту бытовой техники",
    cta2: "Гарантируем высокое качество ремонта",
    cta3: "Качественные расходные материалы",

    about_title: "О компании",
    about_p1: "Мы специализируемся на профессиональном ремонте бытовой техники любой сложности. Выполняем обслуживание и ремонт холодильников, стиральных машин, посудомоечных машин, кондиционеров, водонагревателей и другой техники для дома и офиса.",
    about_p2: "Наша команда состоит из опытных специалистов, которые проводят точную диагностику, быстро выявляют неисправности и устраняют их с соблюдением всех технических норм. Мы работаем с различными брендами и моделями бытовой техники.",
    about_p3: "Используем только проверенные комплектующие и предоставляем гарантию на выполненные работы. Ценим время клиентов, поэтому обеспечиваем оперативный выезд и быстрый ремонт без лишних задержек.",

    exp_title: "Более 10 лет опыта в ремонте и обслуживании техники",
    exp_sub:   "Быстрый выезд · Гарантия на работы · Честные цены",

    works_h:   "Наши",
    works_em:  "работы",
    works_sub: "Результаты нашей работы — от диагностики до полного восстановления",

    footer_city: "Работаем по всему Ташкенту",
  },

  uz: {
    nav_title:    "Maishiy texnika ta'miri",
    menu_services:"Xizmatlar",
    menu_about:   "Kompaniya haqida",
    menu_works:   "Ishlarimiz",

    hero_title:   "Maishiy texnika ta'miri",
    hero_b1:      "Chiqish",
    hero_t1:      "1 soat ichida",
    hero_b2:      "Mutaxassislar",
    hero_t2:      "10 yillik tajriba bilan",

    services_h:   "Biz nimani",
    services_em:  "ta'mirlashimiz?",
    services_sub: "Bizning xizmatlarimiz",

    s1_title: "Qozonlarni ta'mirlash",
    s1_li1:   "Tezkor diagnostika",
    s1_li2:   "Ta'mirga kafolat",

    s2_title: "Muzlatgichlarni ta'mirlash",
    s2_li1:   "Freon sizishini bartaraf etish",
    s2_li2:   "Har qanday murakkablikdagi ta'mir",

    s3_title: "Konditsionerlani ta'mirlash",
    s3_li1:   "To'ldirish va tozalash",
    s3_li2:   "Har qanday brendlar bilan ishlaymiz",

    s4_title: "Muz generatorlarni ta'mirlash",
    s4_li1:   "Tez tiklash",
    s4_li2:   "Sifatli ehtiyot qismlar",

    s5_title: "Elektr zaryadlagichlarni ta'mirlash",
    s5_li1:   "Aniq diagnostika",
    s5_li2:   "Ishonchli ta'mir",

    s6_title: "Kir yuvish mashinalarini ta'mirlash",
    s6_li1:   "Qismlarni almashtirish",
    s6_li2:   "Murojaat qilingan kuni chiqish",

    btn_more: "Batafsil",
    btn_call: "Usta chaqirish",
    btn_price:"Narxni bilish",

    cta1: "Maishiy texnika ta'mirining barcha turlari",
    cta2: "Yuqori sifatli ta'mirni kafolatlaymiz",
    cta3: "Sifatli sarf materiallari",

    about_title: "Kompaniya haqida",
    about_p1: "Biz har qanday murakkablikdagi maishiy texnikani professional ta'mirlashga ixtisoslashganmiz. Muzlatgichlar, kir yuvish mashinalari, idish yuvish mashinalari, konditsionerlar, suv isitgichlar va boshqa uy hamda ofis texnikasini xizmat ko'rsatish va ta'mirlashni amalga oshiramiz.",
    about_p2: "Bizning jamoamiz barcha texnik me'yorlarga rioya qilgan holda aniq diagnostika o'tkazadigan, nosozliklarni tezda aniqlaydi va bartaraf etadigan tajribali mutaxassislardan iborat. Biz turli xil brendlar va maishiy texnika modellari bilan ishlaymiz.",
    about_p3: "Faqat sinovdan o'tgan ehtiyot qismlardan foydalanamiz va bajarilgan ishlarimizga kafolat beramiz. Mijozlarimizning vaqtini qadrlaymiz, shuning uchun operativ chiqishni va ortiqcha kechikishlarsiz tezkor ta'mirni ta'minlaymiz.",

    exp_title: "Texnikani ta'mirlash va xizmat ko'rsatishda 10 yildan ortiq tajriba",
    exp_sub:   "Tezkor chiqish · Ishlarga kafolat · Halol narxlar",

    works_h:   "Bizning",
    works_em:  "ishlarimiz",
    works_sub: "Ishlarimizning natijalari — diagnostikadan to to'liq tiklanishgacha",

    footer_city: "Butun Toshkent bo'ylab ishlaymiz",
  },

  en: {
    nav_title:    "Home Appliance Repair",
    menu_services:"Services",
    menu_about:   "About Us",
    menu_works:   "Our Work",

    hero_title:   "Home Appliance Repair",
    hero_b1:      "Arrival",
    hero_t1:      "within 1 hour",
    hero_b2:      "Specialists",
    hero_t2:      "with 10 years of experience",

    services_h:   "What do we",
    services_em:  "repair?",
    services_sub: "Our Services",

    s1_title: "Boiler Repair",
    s1_li1:   "Fast diagnostics",
    s1_li2:   "Repair warranty",

    s2_title: "Refrigerator Repair",
    s2_li1:   "Freon leak elimination",
    s2_li2:   "Repair of any complexity",

    s3_title: "Air Conditioner Repair",
    s3_li1:   "Refilling and cleaning",
    s3_li2:   "All brands supported",

    s4_title: "Ice Maker Repair",
    s4_li1:   "Fast restoration",
    s4_li2:   "Quality spare parts",

    s5_title: "EV Charger Repair",
    s5_li1:   "Precise diagnostics",
    s5_li2:   "Reliable repair",

    s6_title: "Washing Machine Repair",
    s6_li1:   "Parts replacement",
    s6_li2:   "Same-day visit",

    btn_more: "Learn More",
    btn_call: "Call a Master",
    btn_price:"Get a Price",

    cta1: "All types of home appliance repair services",
    cta2: "We guarantee high quality repair",
    cta3: "Quality consumable materials",

    about_title: "About the Company",
    about_p1: "We specialize in professional repair of home appliances of any complexity. We service and repair refrigerators, washing machines, dishwashers, air conditioners, water heaters and other appliances for home and office.",
    about_p2: "Our team consists of experienced specialists who perform accurate diagnostics, quickly identify malfunctions and eliminate them in compliance with all technical standards. We work with various brands and models.",
    about_p3: "We use only proven components and provide a warranty on completed work. We value our clients' time, so we ensure prompt arrival and quick repair without unnecessary delays.",

    exp_title: "More than 10 years of experience in appliance repair and maintenance",
    exp_sub:   "Fast arrival · Work warranty · Fair prices",

    works_h:   "Our",
    works_em:  "Work",
    works_sub: "Results of our work — from diagnostics to full restoration",

    footer_city: "We work across all of Tashkent",
  }
};

// ── JORIY TIL ────────────────────────────────
let currentLang = localStorage.getItem('lang') || 'ru';

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);

  const t = translations[lang];
  if (!t) return;

  // HTML lang atributi
  document.documentElement.lang = lang;

  // Barcha data-i18n elementlarini yangilash
  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      el.textContent = t[key];
    }
  });

  // Faol tugmani belgilash
  document.querySelectorAll('.lang-btn').forEach(function (btn) {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

// ── DOM TAYYOR ───────────────────────────────
document.addEventListener('DOMContentLoaded', function () {

  // Til tugmalari
  document.querySelectorAll('.lang-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      applyLanguage(this.dataset.lang);
    });
  });

  // Boshlang'ich til
  applyLanguage(currentLang);


  // ── BURGER MENU ──
  const burger = document.getElementById('burger');
  const mobileMenu = document.getElementById('mobileMenu');

  if (burger && mobileMenu) {
    burger.addEventListener('click', function () {
      mobileMenu.classList.toggle('open');
      burger.innerHTML = mobileMenu.classList.contains('open') ? '✕' : '&#9776;';
    });
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.remove('open');
        burger.innerHTML = '&#9776;';
      });
    });
    document.addEventListener('click', function (e) {
      if (!burger.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.remove('open');
        burger.innerHTML = '&#9776;';
      }
    });
  }


  // ── SLIDER ──
  const slider  = document.getElementById('worksSlider');
  const btnPrev = document.getElementById('sliderPrev');
  const btnNext = document.getElementById('sliderNext');
  const SCROLL  = 240;

  if (slider && btnPrev && btnNext) {
    btnPrev.addEventListener('click', function () { slider.scrollBy({ left: -SCROLL, behavior: 'smooth' }); });
    btnNext.addEventListener('click', function () { slider.scrollBy({ left:  SCROLL, behavior: 'smooth' }); });
  }


  // ── SCROLL TO TOP ──
  const scrollTopBtn = document.getElementById('scrollTop');
  if (scrollTopBtn) {
    window.addEventListener('scroll', function () {
      scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
    });
    scrollTopBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }


  // ── NAVBAR SHADOW ──
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', function () {
      navbar.style.boxShadow = window.scrollY > 10 ? '0 2px 16px rgba(0,0,0,.35)' : 'none';
    });
  }


  // ── SMOOTH SCROLL ──
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.scrollY - 72;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });


  // ── THUMB ROW AUTO SLIDER ──
  const thumbTrack = document.querySelector('.thumb-track');
  if (thumbTrack) {
    const imgs = thumbTrack.querySelectorAll('img');
    const total = imgs.length;   // 7
    const visible = 4;           // 4 ta ko'rinadi
    let current = 0;

    function slideThumb() {
      current = (current + 1) % (total - visible + 1);
      const imgWidth = thumbTrack.parentElement.offsetWidth;
      const step = imgWidth / visible;
      thumbTrack.style.transform = 'translateX(-' + (current * (step + 8)) + 'px)';
    }

    setInterval(slideThumb, 2500);
  }
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.service-card').forEach(function (card, i) {
      card.style.opacity = '0';
      card.style.transform = 'translateY(24px)';
      card.style.transition = 'opacity .4s ease ' + (i * 0.08) + 's, transform .4s ease ' + (i * 0.08) + 's';
      observer.observe(card);
    });
  }

});