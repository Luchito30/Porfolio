window.addEventListener('load', function() {
    const swiper = new Swiper('.Swiper-certi', {
        // Optional parameters
        slidesPerView: 1,
        spaceBrtween: 30,
        direction: 'horizontal',
        loop: true,
        /* autoplay:{
          delay:5000,
          pauseOnMouseEnter:true,
          disableOnInteraction:false,
        }, */
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable:true,
          dynamicBullets:true,
        },
        slidesPerView: 1,
            spaceBetween: 10,
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            breakpoints: {
              1200: {
                 slidesPerView: 3,
                 spaceBetween: 5,
                 direction: 'horizontal'
               }
             },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
});