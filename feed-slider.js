const feedSwiper = new Swiper(".swiper.is-feed", {
    loop: true,
    slidesPerView: 3,
    centeredSlides: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false
    },
    navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
    },
    speed: 500
});