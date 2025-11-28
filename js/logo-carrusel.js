document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel-track");
  const items = Array.from(track.children);
  const prevButton = document.querySelector(".carousel-button.prev");
  const nextButton = document.querySelector(".carousel-button.next");

  let itemsVisible = 7;
  let cIndex = 0;
  const autoScrollInterval = 3000; // 3 segundos para el movimiento automático
  let autoScrollTimer;

  // Ajusta el número de items visibles según el tamaño de la pantalla
  const adjustItemsVisible = () => {
    if (window.innerWidth <= 480) {
      itemsVisible = 2;
    } else if (window.innerWidth <= 768) {
      itemsVisible = 3;
    } else if (window.innerWidth <= 1024) {
      itemsVisible = 5;
    } else {
      itemsVisible = 7;
    }
    updateCarousel(); // Actualiza la vista si cambia el número de items visibles
  };

  // Actualiza la posición del carrusel y el estado de los botones
  const updateCarousel = () => {
    const itemWidth = items[0].offsetWidth;
    track.style.transform = `translateX(-${cIndex * itemWidth}px)`;

    prevButton.disabled = cIndex === 0;
    nextButton.disabled = cIndex >= items.length - itemsVisible;
  };

  // Función para avanzar al siguiente slide (con bucle)
  const moveToNextSlide = () => {
    if (cIndex < items.length - itemsVisible) {
      cIndex++;
    } else {
      // Vuelve al principio si llega al final
      cIndex = 0;
    }
    updateCarousel();
  };

  // Inicia el movimiento automático
  const startAutoScroll = () => {
    clearInterval(autoScrollTimer); // Limpia cualquier temporizador previo
    autoScrollTimer = setInterval(moveToNextSlide, autoScrollInterval);
  };

  // Detiene el movimiento automático
  const stopAutoScroll = () => {
    clearInterval(autoScrollTimer);
  };

  // --- EVENT LISTENERS ---

  // Inicia el movimiento automático al cargar
  startAutoScroll();

  // Navegación manual con botón "Siguiente"
  nextButton.addEventListener("click", () => {
    stopAutoScroll();
    if (cIndex < items.length - itemsVisible) {
      cIndex++;
      updateCarousel();
    }
    startAutoScroll(); // Reanuda después de la interacción
  });

  // Navegación manual con botón "Anterior"
  prevButton.addEventListener("click", () => {
    stopAutoScroll();
    if (cIndex > 0) {
      cIndex--;
      updateCarousel();
    }
    startAutoScroll(); // Reanuda después de la interacción
  });

  // Detener el scroll automático cuando el ratón está sobre el carrusel
  const carouselContainer = document.querySelector(".carouselClientes");
  carouselContainer.addEventListener("mouseenter", stopAutoScroll);
  carouselContainer.addEventListener("mouseleave", startAutoScroll);

  // Ajustar al cargar la página y al redimensionar la ventana
  adjustItemsVisible();
  window.addEventListener("resize", adjustItemsVisible);
});
