document.addEventListener('DOMContentLoaded', () => {
  const galleryGrid = document.getElementById('gallery-grid');
  const galleryFilters = document.getElementById('gallery-filters');
  
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxClose = document.querySelector('.lightbox-close');
  const lightboxPrev = document.querySelector('.lightbox-prev');
  const lightboxNext = document.querySelector('.lightbox-next');
  
  let galleryData = [];
  let currentImageIndex = 0;
  let currentFilteredData = [];

  // Categorías hardcodeadas o extraídas de los datos, aquí usamos las del SPEC
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

  // Fetch gallery data
  fetch('data/gallery.json')
    .then(response => response.json())
    .then(data => {
      galleryData = data;
      initGallery();
    })
    .catch(error => {
      console.error('Error loading gallery data:', error);
      galleryGrid.innerHTML = '<p>No se pudieron cargar las imágenes de la galería.</p>';
    });

  function initGallery() {
    renderFilters();
    renderGallery('todos');
  }

  function renderFilters() {
    galleryFilters.innerHTML = '';
    categories.forEach(cat => {
      // Solo mostrar filtro si hay items en la categoría (o si es 'todos')
      const hasItems = cat.id === 'todos' || galleryData.some(item => item.category === cat.id);
      
      if (hasItems) {
        const btn = document.createElement('button');
        btn.classList.add('filter-btn');
        if (cat.id === 'todos') btn.classList.add('active');
        btn.dataset.category = cat.id;
        btn.textContent = cat.label;
        
        btn.addEventListener('click', (e) => {
          document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
          e.target.classList.add('active');
          renderGallery(cat.id);
        });
        
        galleryFilters.appendChild(btn);
      }
    });
  }

  function renderGallery(category) {
    galleryGrid.innerHTML = '';
    
    currentFilteredData = category === 'todos' 
      ? galleryData 
      : galleryData.filter(item => item.category === category);

    if(currentFilteredData.length === 0) {
      galleryGrid.innerHTML = '<p>No hay imágenes en esta categoría.</p>';
      return;
    }

    currentFilteredData.forEach((item, index) => {
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
      
      div.addEventListener('click', () => openLightbox(index));
      
      galleryGrid.appendChild(div);
    });
  }

  function openLightbox(index) {
    currentImageIndex = index;
    updateLightboxImage();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  function updateLightboxImage() {
    const item = currentFilteredData[currentImageIndex];
    lightboxImg.src = item.src;
    lightboxImg.alt = item.alt;
  }

  function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % currentFilteredData.length;
    updateLightboxImage();
  }

  function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + currentFilteredData.length) % currentFilteredData.length;
    updateLightboxImage();
  }

  // Lightbox events
  lightboxClose.addEventListener('click', closeLightbox);
  lightboxNext.addEventListener('click', nextImage);
  lightboxPrev.addEventListener('click', prevImage);
  
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  });
});
