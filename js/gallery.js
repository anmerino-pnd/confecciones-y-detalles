document.addEventListener('DOMContentLoaded', () => {
  // Elements: Landing Page Preview
  const previewGrid = document.getElementById('gallery-preview-grid');
  const openAlbumBtn = document.getElementById('open-album-btn');
  
  // Elements: Full Album Modal
  const albumModal = document.getElementById('album-modal');
  const albumClose = document.querySelector('.album-close');
  const albumFilters = document.getElementById('album-filters');
  const albumGrid = document.getElementById('album-grid');
  const albumLoadMoreContainer = document.getElementById('album-load-more');
  const albumLoadMoreBtn = document.getElementById('album-load-more-btn');
  
  // Elements: Lightbox
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxClose = document.querySelector('.lightbox-close');
  const lightboxPrev = document.querySelector('.lightbox-prev');
  const lightboxNext = document.querySelector('.lightbox-next');
  
  // State
  let galleryData = [];
  let currentFilteredData = [];
  let currentLightboxContext = [];
  let currentImageIndex = 0;
  
  const ITEMS_PER_PAGE = 6;
  let albumVisibleCount = ITEMS_PER_PAGE;

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

  fetch('data/gallery.json')
    .then(response => response.json())
    .then(data => {
      galleryData = data;
      initGallery();
    })
    .catch(error => console.error('Error loading gallery data:', error));

  function initGallery() {
    renderPreview();
    
    // Album Events
    if (openAlbumBtn) {
      openAlbumBtn.addEventListener('click', openAlbum);
    }
    if (albumClose) {
      albumClose.addEventListener('click', closeAlbum);
    }
    if (albumLoadMoreBtn) {
      albumLoadMoreBtn.addEventListener('click', () => {
        albumVisibleCount += ITEMS_PER_PAGE;
        renderAlbumItems();
      });
    }
  }

  // --- PREVIEW LOGIC ---
  function renderPreview() {
    if(!previewGrid) return;
    previewGrid.innerHTML = '';
    const topItems = galleryData.slice(0, 6); // Hard cap at 6
    
    topItems.forEach((item, index) => {
      const el = createGalleryItemHTML(item);
      el.addEventListener('click', () => {
        currentLightboxContext = topItems;
        openLightbox(index);
      });
      previewGrid.appendChild(el);
    });
  }

  // --- ALBUM LOGIC ---
  function openAlbum() {
    albumModal.classList.add('active');
    document.body.style.overflow = 'hidden'; // block scrolling on main page
    renderAlbumFilters();
    renderAlbumCategory('todos');
  }

  function closeAlbum() {
    albumModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  function renderAlbumFilters() {
    albumFilters.innerHTML = '';
    categories.forEach(cat => {
      const hasItems = cat.id === 'todos' || galleryData.some(item => item.category === cat.id);
      if (hasItems) {
        const btn = document.createElement('button');
        btn.classList.add('filter-btn');
        if (cat.id === 'todos') btn.classList.add('active');
        btn.dataset.category = cat.id;
        btn.textContent = cat.label;
        
        btn.addEventListener('click', (e) => {
          document.querySelectorAll('#album-filters .filter-btn').forEach(b => b.classList.remove('active'));
          e.target.classList.add('active');
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
      
    albumVisibleCount = ITEMS_PER_PAGE;
    renderAlbumItems();
  }

  function renderAlbumItems() {
    albumGrid.innerHTML = '';

    if(currentFilteredData.length === 0) {
      albumGrid.innerHTML = '<p>No hay imágenes en esta categoría.</p>';
      albumLoadMoreContainer.style.display = 'none';
      return;
    }

    const itemsToShow = currentFilteredData.slice(0, albumVisibleCount);

    itemsToShow.forEach((item, index) => {
      const el = createGalleryItemHTML(item);
      el.addEventListener('click', () => {
        currentLightboxContext = currentFilteredData;
        openLightbox(index);
      });
      albumGrid.appendChild(el);
    });

    if (albumLoadMoreContainer) {
      if (albumVisibleCount < currentFilteredData.length) {
        albumLoadMoreContainer.style.display = 'block';
      } else {
        albumLoadMoreContainer.style.display = 'none';
      }
    }
  }

  // --- HTML GENERATOR ---
  function createGalleryItemHTML(item) {
    const div = document.createElement('div');
    div.classList.add('gallery-item');
    
    const img = document.createElement('img');
    img.src = item.src;
    img.alt = item.alt;
    img.loading = 'lazy';
    
    const overlay = document.createElement('div');
    overlay.classList.add('gallery-overlay');
    const title = document.createElement('h3');
    title.textContent = item.title;
    overlay.appendChild(title);
    
    div.appendChild(img);
    div.appendChild(overlay);
    
    return div;
  }

  // --- LIGHTBOX LOGIC ---
  function openLightbox(index) {
    currentImageIndex = index;
    updateLightboxImage();
    lightbox.classList.add('active');
    // Si abrimos desde preview, body ya no tenía hidden. Si es de album, ya tenía.
    // Solo aseguramos que se quede hidden.
    document.body.style.overflow = 'hidden'; 
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    // Si cerramos el lightbox y el album ESTÁ abierto, el scroll del body debe seguir bloqueado.
    if (!albumModal.classList.contains('active')) {
      document.body.style.overflow = '';
    }
  }

  function updateLightboxImage() {
    if (!currentLightboxContext || currentLightboxContext.length === 0) return;
    const item = currentLightboxContext[currentImageIndex];
    lightboxImg.src = item.src;
    lightboxImg.alt = item.alt;
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
