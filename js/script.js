document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.carousel-image');
    const leftReflection = document.querySelector('.left-reflection');
    const rightReflection = document.querySelector('.right-reflection');
    let currentIndex = 0;

    // Inicializa las imágenes reflejadas con la primera imagen del carrusel
    const initialImageUrl = images[currentIndex].style.backgroundImage;
    leftReflection.style.backgroundImage = initialImageUrl;
    rightReflection.style.backgroundImage = initialImageUrl;

    function changeImage() {
        // Cambia la imagen central
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');

        // Actualiza las imágenes reflejadas a la nueva imagen del carrusel
        const currentImageUrl = images[currentIndex].style.backgroundImage;
        leftReflection.style.backgroundImage = currentImageUrl;
        rightReflection.style.backgroundImage = currentImageUrl;
    }

    // Inicia el carrusel para cambiar la imagen cada 5 segundos
    setInterval(changeImage, 5000);
});


