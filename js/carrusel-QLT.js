const wrappers = document.querySelectorAll(".carousel-wrapper");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentIndex = 0;

function updateCarousel() {
  wrappers.forEach((wrapper) => {
    wrapper.classList.remove("active", "prev", "next");
  });

  const totalItems = wrappers.length;
  const prevIndex = (currentIndex - 1 + totalItems) % totalItems;
  const nextIndex = (currentIndex + 1) % totalItems;

  wrappers[currentIndex].classList.add("active");
  wrappers[prevIndex].classList.add("prev");
  wrappers[nextIndex].classList.add("next");
}

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % wrappers.length;
  updateCarousel();
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + wrappers.length) % wrappers.length;
  updateCarousel();
});

// Inicializar el carrusel al cargar la página
updateCarousel();
