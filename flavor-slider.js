// Flavor slider

$(".slider_component").each(function (index) {
    let parentSection = $(this).closest(".section");

    // const loopedSlidesValue = 1;

    const listSwiper = new Swiper($(this).find(".swiper.is-slider-info")[0], {
        speed: 500,
        loop: true,
        // loopedSlides: loopedSlidesValue,
        slidesPerView: 2,
        centeredSlides: true, 
        direction: "vertical",
        navigation: {
            nextEl: $(this).find(".swiper-next")[0],
            prevEl: $(this).find(".swiper-prev")[0],
            disabledClass: "is-disabled"
        },
        slideActiveClass: "is-active",
        slideDuplicateActiveClass: "is-active"
    });

    const photoSwiper = new Swiper($(this).find(".swiper.is-flavor")[0], {
        loop: true,
        // loopedSlides: loopedSlidesValue,
        slidesPerView: 2,
        centeredSlides: true,
        createElements: true,
        speed: 500
    });

    listSwiper.controller.control = photoSwiper;
    photoSwiper.controller.control = listSwiper;

    /* 
    photoSwiper.on("activeIndexChange", function (e) {
        let slideColor = $(e.slides[e.activeIndex]).find(".slider-photo_color").text();
        parentSection.css("background-color", slideColor);
    });
    */

    $(this).find(".swiper-bullet").each(function (index) {
        $(this).text(index + 1);
    });
});