const carousel = document.querySelector('.carousel');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

// Função para atualizar o carrossel
function updateCarousel() {
    const width = document.querySelector('.notificacao').clientWidth;
    carousel.style.transform = `translateX(-${currentIndex * width}px)`;
}

// Botão Anterior
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : 0;
    updateCarousel();
});

// Botão Próximo
nextButton.addEventListener('click', () => {
    const totalItems = document.querySelectorAll('.notificacao').length;
    currentIndex = (currentIndex < totalItems - 1) ? currentIndex + 1 : totalItems - 1;
    updateCarousel();
});

// Atualiza ao redimensionar
window.addEventListener('resize', updateCarousel);
