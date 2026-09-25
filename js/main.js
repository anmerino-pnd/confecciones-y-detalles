document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const menuToggle = document.getElementById('menu-toggle');
  const mainNav = document.getElementById('main-nav');
  const navLinks = document.querySelectorAll('.nav-link');

  menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('active');
    const isActive = mainNav.classList.contains('active');
    menuToggle.setAttribute('aria-expanded', isActive);
  });

  // Close menu on link click
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', false);
    });
  });

  // WhatsApp Button logic
  const whatsappBtns = document.querySelectorAll('.whatsapp-btn');
  whatsappBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const number = BUSINESS_CONFIG.whatsappNumber;
      const message = encodeURIComponent(BUSINESS_CONFIG.whatsappMessage);
      const url = `https://wa.me/${number}?text=${message}`;
      window.open(url, '_blank');
    });
  });

  // Dynamic Year in Footer
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});
