document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const menuToggle = document.getElementById('menu-toggle');
  const mainNav = document.getElementById('main-nav');
  const navLinks = document.querySelectorAll('.nav-link');

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      mainNav.classList.toggle('active');
      const isActive = mainNav.classList.contains('active');
      menuToggle.setAttribute('aria-expanded', isActive ? 'true' : 'false');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mainNav.classList.contains('active')) {
        mainNav.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.focus();
      }
    });
  }

  // WhatsApp Button logic (assigns real hrefs + custom message per section)
  const whatsappBtns = document.querySelectorAll('.whatsapp-btn');
  whatsappBtns.forEach(btn => {
    const number = BUSINESS_CONFIG.whatsappNumber;
    const customMsg = btn.getAttribute('data-whatsapp-msg') || BUSINESS_CONFIG.whatsappMessage;
    const url = `https://wa.me/${number}?text=${encodeURIComponent(customMsg)}`;
    btn.setAttribute('href', url);
    btn.setAttribute('target', '_blank');
    btn.setAttribute('rel', 'noopener noreferrer');
  });

  // Dynamic Year in Footer
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Inline SVG logo marks grouped by src so each SVG inherits CSS currentColor
  const logoMarks = document.querySelectorAll('img.logo-mark[src$=".svg"]');
  const groupsBySrc = new Map();

  logoMarks.forEach(img => {
    const src = img.getAttribute('src');
    if (!groupsBySrc.has(src)) groupsBySrc.set(src, []);
    groupsBySrc.get(src).push(img);
  });

  groupsBySrc.forEach((imgs, src) => {
    fetch(encodeURI(src))
      .then(res => (res.ok ? res.text() : Promise.reject()))
      .then(svgText => {
        const parser = new DOMParser();
        const svgDoc = parser.parseFromString(svgText, 'image/svg+xml');
        const svgRoot = svgDoc.querySelector('svg');
        if (!svgRoot) return;
        svgRoot.removeAttribute('style');
        imgs.forEach(img => {
          const svgClone = svgRoot.cloneNode(true);
          svgClone.setAttribute('class', img.getAttribute('class'));
          svgClone.setAttribute('aria-hidden', 'true');
          img.replaceWith(svgClone);
        });
      })
      .catch(() => {
        // Fallback to <img> when opened directly via file://
      });
  });
});
