function initSwiper() {
    const swiper = new Swiper('.mySwiper', {
        // Configuración del swiper
        slidesPerView: 1,
        spaceBetween: 30,
        direction: 'horizontal',
        loop: true,
        autoplay: {
            delay: 5000,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
        },
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}

// Llamar a la función de inicialización en load y resize
window.addEventListener('load', initSwiper);
window.addEventListener('resize', initSwiper);
