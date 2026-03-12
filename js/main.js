/* ============================================================
   main.js
   ============================================================ */

/* ── 1. Yil ── */
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ── 2. Hamburger menyu ── */
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
  document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('open');
    }
  });
}

/* ── 3. FAQ accordion ── */
document.querySelectorAll('.faq-item').forEach(item => {
  item.addEventListener('click', () => {
    const isOpen = item.classList.contains('active');
    document.querySelectorAll('.faq-item').forEach(i => {
      i.classList.remove('active');
      const toggle = i.querySelector('.faq-toggle');
      if (toggle) toggle.textContent = '+';
    });
    if (!isOpen) {
      item.classList.add('active');
      const toggle = item.querySelector('.faq-toggle');
      if (toggle) toggle.textContent = '−';
    }
  });
});

/* ── 4. Fade-in ── */
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

/* ── 5. Hero rasm slider ── */
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

/* ── 6. Service card rasmlar slideri ── */
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