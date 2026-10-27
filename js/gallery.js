document.addEventListener('DOMContentLoaded', () => {
  // Elements: Landing Page Preview
  const previewGrid = document.getElementById('gallery-preview-grid');
  const openAlbumBtn = document.getElementById('open-album-btn');
  const totalHint = document.getElementById('gallery-total-hint');

  // Elements: Full Album Modal (Infinite Scroll)
  const albumModal = document.getElementById('album-modal');
  const albumClose = document.querySelector('.album-close');
  const albumFilters = document.getElementById('album-filters');
  const albumGrid = document.getElementById('album-grid');
  const albumProgressText = document.getElementById('album-progress-text');
  const albumScrollSentinel = document.getElementById('album-scroll-sentinel');

  // Elements: Lightbox
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxCategory = document.getElementById('lightbox-category');
  const lightboxCounter = document.getElementById('lightbox-counter');
  const lightboxWhatsappBtn = document.getElementById('lightbox-whatsapp-btn');
  const lightboxClose = document.querySelector('.lightbox-close');
  const lightboxPrev = document.querySelector('.lightbox-prev');
  const lightboxNext = document.querySelector('.lightbox-next');

  // State
  let galleryData = [];
  let currentFilteredData = [];
  let currentLightboxContext = [];
  let currentImageIndex = 0;

  const ITEMS_PER_BATCH = 6;
  let albumRenderedCount = 0;
  let scrollObserver = null;

  const categories = [
    { id: 'todos', label: 'Todos' },
    { id: 'vestidos', label: 'Vestidos' },
    { id: 'vestidos-noche', label: 'Vestidos de noche' },
    { id: 'quinceaneras', label: 'Quinceañeras' },
    { id: 'novias', label: 'Novias' },
    { id: 'damas', label: 'Damas' },
    { id: 'ropa-casual', label: 'Ropa casual' },
    { id: 'arreglos', label: 'Arreglos y ajustes' },
    { id: 'otros', label: 'Otros trabajos' }
  ];

  const FALLBACK_GALLERY_DATA = [
    { id: 'foto-15', src: 'assets/images/gallery/foto-15.jpg', alt: 'Vestido rojo profundo con encaje y hombros descubiertos', title: 'Vestido de Encaje Rojo', category: 'vestidos-noche', categoryLabel: 'Vestido de Noche', featured: true },
    { id: 'foto-09', src: 'assets/images/gallery/foto-09.jpg', alt: 'Vestido strapless verde esmeralda con detalle escultural de moño', title: 'Vestido Esmeralda con Moño', category: 'vestidos-noche', categoryLabel: 'Alta Costura', featured: true },
    { id: 'foto-14', src: 'assets/images/gallery/foto-14.jpg', alt: 'Vestido tinto de satín con hombros caídos y abertura en la pierna', title: 'Vestido Tinto de Satín', category: 'vestidos-noche', categoryLabel: 'Vestido de Noche', featured: true },
    { id: 'foto-06', src: 'assets/images/gallery/foto-06.jpg', alt: 'Vestido color magenta con mangas de encaje hecho a medida', title: 'Vestido Magenta con Encaje', category: 'vestidos-noche', categoryLabel: 'Confección a Medida', featured: true },
    { id: 'foto-13', src: 'assets/images/gallery/foto-13.jpg', alt: 'Vestido de gala azul marino con falda amplia', title: 'Vestido de Gala Azul Marino', category: 'vestidos-noche', categoryLabel: 'Eventos de Gala', featured: true },
    { id: 'foto-16', src: 'assets/images/gallery/foto-16.jpg', alt: 'Conjunto elegante de pantalón blanco y blusa de encaje', title: 'Conjunto Blanco de Encaje', category: 'ropa-casual', categoryLabel: 'Sastrería y Encaje', featured: true },
    { id: 'foto-08', src: 'assets/images/gallery/foto-08.jpg', alt: 'Vestido azul claro con pedrería en el busto', title: 'Vestido de Gala Azul', category: 'vestidos-noche', categoryLabel: 'Vestido de Noche' },
    { id: 'foto-10', src: 'assets/images/gallery/foto-10.jpg', alt: 'Vestido strapless color rojo oscuro', title: 'Vestido de Noche Rojo', category: 'vestidos-noche', categoryLabel: 'Vestido de Noche' },
    { id: 'foto-11', src: 'assets/images/gallery/foto-11.jpg', alt: 'Vestido color vino con escote halter', title: 'Vestido de Noche Tinto', category: 'vestidos-noche', categoryLabel: 'Vestido de Noche' },
    { id: 'foto-07', src: 'assets/images/gallery/foto-07.jpg', alt: 'Vestido amarillo vibrante corte sirena strapless', title: 'Vestido Sirena Amarillo', category: 'vestidos-noche', categoryLabel: 'Corte Sirena' },
    { id: 'foto-04', src: 'assets/images/gallery/foto-04.jpg', alt: 'Vestidos color coral confeccionados para damas', title: 'Vestidos para Damas', category: 'damas', categoryLabel: 'Damas' },
    { id: 'foto-03', src: 'assets/images/gallery/foto-03.jpg', alt: 'Vestido negro corte sirena elegante con encaje', title: 'Vestido Sirena Negro', category: 'vestidos-noche', categoryLabel: 'Corte Sirena' },
    { id: 'foto-12', src: 'assets/images/gallery/foto-12.jpg', alt: 'Vestido elegante estampado en negro y dorado', title: 'Vestido Elegante Dorado', category: 'vestidos-noche', categoryLabel: 'Vestido de Noche' },
    { id: 'foto-02', src: 'assets/images/gallery/foto-02.jpg', alt: 'Vestido largo verde esmeralda con aplicaciones florales', title: 'Vestido Esmeralda Floral', category: 'vestidos-noche', categoryLabel: 'Vestido de Noche' },
    { id: 'foto-01', src: 'assets/images/gallery/foto-01.jpg', alt: 'Vestido de noche strapless color rosa fucsia', title: 'Vestido de Noche Fucsia', category: 'vestidos-noche', categoryLabel: 'Vestido de Noche' },
    { id: 'foto-05', src: 'assets/images/gallery/foto-05.jpg', alt: 'Vestido verde oscuro con encaje y transparencias', title: 'Vestido de Noche Verde', category: 'vestidos-noche', categoryLabel: 'Vestido de Noche' }
  ];

  fetch('data/gallery.json')
    .then(response => response.json())
    .then(data => {
      galleryData = data;
      initGallery();
    })
    .catch(() => {
      galleryData = FALLBACK_GALLERY_DATA;
      initGallery();
    });

  function initGallery() {
    renderPreview();
    setupInfiniteScroll();

    if (openAlbumBtn && galleryData.length > 0) {
      openAlbumBtn.textContent = `Abrir Álbum Completo (${galleryData.length} diseños)`;
      openAlbumBtn.addEventListener('click', openAlbum);
    }
    if (totalHint && galleryData.length > 6) {
      totalHint.textContent = `Mostrando 6 diseños destacados de ${galleryData.length} confecciones en catálogo`;
    }
    if (albumClose) {
      albumClose.addEventListener('click', closeAlbum);
    }
  }

  // --- PREVIEW LOGIC ("PORTADA" EDITORIAL) ---
  function renderPreview() {
    if (!previewGrid) return;
    previewGrid.innerHTML = '';

    const featuredItems = galleryData.filter(item => item.featured);
    const topItems = (featuredItems.length >= 6 ? featuredItems : galleryData).slice(0, 6);

    topItems.forEach((item, index) => {
      const el = createGalleryItemHTML(item, index === 0);
      el.addEventListener('click', () => {
        currentLightboxContext = topItems;
        openLightbox(index);
      });
      previewGrid.appendChild(el);
    });
  }

  // --- ALBUM MODAL & INFINITE SCROLL LOGIC ---
  function openAlbum() {
    albumModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    albumModal.scrollTop = 0;
    renderAlbumFilters();
    renderAlbumCategory('todos');
  }

  function closeAlbum() {
    albumModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  function renderAlbumFilters() {
    if (!albumFilters) return;
    albumFilters.innerHTML = '';

    categories.forEach(cat => {
      const count = cat.id === 'todos'
        ? galleryData.length
        : galleryData.filter(item => item.category === cat.id).length;

      if (count > 0) {
        const btn = document.createElement('button');
        btn.classList.add('filter-btn');
        btn.setAttribute('role', 'tab');
        const isActive = cat.id === 'todos';
        if (isActive) btn.classList.add('active');
        btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
        btn.dataset.category = cat.id;
        btn.innerHTML = `${cat.label} <span class="filter-count">${count}</span>`;

        btn.addEventListener('click', () => {
          document.querySelectorAll('#album-filters .filter-btn').forEach(b => {
            b.classList.remove('active');
            b.setAttribute('aria-selected', 'false');
          });
          btn.classList.add('active');
          btn.setAttribute('aria-selected', 'true');
          renderAlbumCategory(cat.id);
        });

        albumFilters.appendChild(btn);
      }
    });
  }

  function renderAlbumCategory(category) {
    currentFilteredData = category === 'todos'
      ? galleryData
      : galleryData.filter(item => item.category === category);

    albumRenderedCount = 0;
    albumGrid.innerHTML = '';

    if (currentFilteredData.length === 0) {
      albumGrid.innerHTML = '<p class="album-empty">No hay diseños disponibles en esta categoría.</p>';
      updateAlbumProgress();
      return;
    }

    appendNextAlbumBatch();
  }

  function appendNextAlbumBatch() {
    if (albumRenderedCount >= currentFilteredData.length) {
      updateAlbumProgress();
      return;
    }

    const nextItems = currentFilteredData.slice(albumRenderedCount, albumRenderedCount + ITEMS_PER_BATCH);
    const startIndex = albumRenderedCount;

    nextItems.forEach((item, offset) => {
      const itemIndex = startIndex + offset;
      const el = createGalleryItemHTML(item, false);
      el.classList.add('album-item-enter');
      el.style.animationDelay = `${offset * 60}ms`;
      el.addEventListener('click', () => {
        currentLightboxContext = currentFilteredData;
        openLightbox(itemIndex);
      });
      albumGrid.appendChild(el);
    });

    albumRenderedCount += nextItems.length;
    updateAlbumProgress();
  }

  function updateAlbumProgress() {
    if (!albumProgressText) return;
    const total = currentFilteredData.length;
    if (total === 0) {
      albumProgressText.textContent = '';
    } else if (albumRenderedCount < total) {
      albumProgressText.textContent = `Mostrando ${albumRenderedCount} de ${total} diseños · Desliza hacia abajo para ver más`;
    } else {
      albumProgressText.textContent = `Has visto los ${total} diseños de esta selección`;
    }
  }

  function setupInfiniteScroll() {
    if (!albumScrollSentinel || !albumModal || !('IntersectionObserver' in window)) return;

    scrollObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && albumModal.classList.contains('active')) {
          appendNextAlbumBatch();
        }
      });
    }, {
      root: albumModal,
      rootMargin: '0px 0px 280px 0px',
      threshold: 0.01
    });

    scrollObserver.observe(albumScrollSentinel);
  }

  // --- HTML CARD GENERATOR ---
  function createGalleryItemHTML(item, isHeroCard) {
    const article = document.createElement('article');
    article.classList.add('gallery-item');
    if (isHeroCard) article.classList.add('gallery-item-featured');
    article.setAttribute('tabindex', '0');
    article.setAttribute('role', 'button');
    article.setAttribute('aria-label', `Ver ${item.title}`);

    const imgWrapper = document.createElement('div');
    imgWrapper.classList.add('gallery-img-wrapper');

    const img = document.createElement('img');
    img.src = item.src;
    img.alt = item.alt;
    img.loading = 'lazy';
    img.decoding = 'async';

    const overlay = document.createElement('div');
    overlay.classList.add('gallery-overlay');

    if (item.categoryLabel) {
      const badge = document.createElement('span');
      badge.classList.add('gallery-badge');
      badge.textContent = item.categoryLabel;
      overlay.appendChild(badge);
    }

    const title = document.createElement('h3');
    title.textContent = item.title;
    overlay.appendChild(title);

    const actionHint = document.createElement('span');
    actionHint.classList.add('gallery-card-cta');
    actionHint.textContent = 'Ampliar diseño';
    overlay.appendChild(actionHint);

    imgWrapper.appendChild(img);
    article.appendChild(imgWrapper);
    article.appendChild(overlay);

    article.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        article.click();
      }
    });

    return article;
  }

  // --- LIGHTBOX LOGIC ---
  function openLightbox(index) {
    currentImageIndex = index;
    updateLightboxImage();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    if (!albumModal.classList.contains('active')) {
      document.body.style.overflow = '';
    }
  }

  function updateLightboxImage() {
    if (!currentLightboxContext || currentLightboxContext.length === 0) return;
    const item = currentLightboxContext[currentImageIndex];
    lightboxImg.src = item.src;
    lightboxImg.alt = item.alt;

    if (lightboxTitle) lightboxTitle.textContent = item.title || '';
    if (lightboxCategory) lightboxCategory.textContent = item.categoryLabel || '';
    if (lightboxCounter) {
      lightboxCounter.textContent = `${currentImageIndex + 1} / ${currentLightboxContext.length}`;
    }
    if (lightboxWhatsappBtn && typeof BUSINESS_CONFIG !== 'undefined') {
      const msg = encodeURIComponent(
        `Hola, vi el diseño "${item.title}" en el catálogo de Confecciones y Detalles y me gustaría preguntar por un trabajo similar.`
      );
      lightboxWhatsappBtn.href = `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${msg}`;
    }
  }

  function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % currentLightboxContext.length;
    updateLightboxImage();
  }

  function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + currentLightboxContext.length) % currentLightboxContext.length;
    updateLightboxImage();
  }

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxNext) lightboxNext.addEventListener('click', nextImage);
  if (lightboxPrev) lightboxPrev.addEventListener('click', prevImage);

  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });

    // Mobile Touch Swipe Support inside Lightbox
    let touchStartX = 0;
    lightbox.addEventListener('touchstart', (e) => {
      if (e.changedTouches && e.changedTouches.length > 0) {
        touchStartX = e.changedTouches[0].screenX;
      }
    }, { passive: true });

    lightbox.addEventListener('touchend', (e) => {
      if (e.changedTouches && e.changedTouches.length > 0) {
        const diffX = e.changedTouches[0].screenX - touchStartX;
        if (Math.abs(diffX) > 45) {
          if (diffX < 0) nextImage();
          else prevImage();
        }
      }
    }, { passive: true });
  }

  document.addEventListener('keydown', (e) => {
    if (lightbox && lightbox.classList.contains('active')) {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    } else if (albumModal && albumModal.classList.contains('active')) {
      if (e.key === 'Escape') closeAlbum();
    }
  });
});
