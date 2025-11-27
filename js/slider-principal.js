let currentSlide = 0;
const slider = document.getElementById("slider");
const buttons = document.querySelectorAll(".nav button");
// Función para cambiar de slide
function goToSlide(index) {
  currentSlide = index;
  slider.style.transform = `translateX(-${currentSlide * 33.33}%)`;
  updateButtons();
}
// Actualizar botones activos
function updateButtons() {
  buttons.forEach((btn, i) => {
    btn.classList.toggle("active", i === currentSlide);
  });
}
// Auto-play cada 3 segundos
setInterval(() => {
  currentSlide = (currentSlide + 1) % 3; // Ciclo entre 0, 1, 2
  goToSlide(currentSlide);
}, 3000);
// Inicializar
updateButtons();
