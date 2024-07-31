// Flavor slider

$(".slider_component").each(function (index) {
    let parentSection = $(this).closest(".section");

    // const loopedSlidesValue = 1;


    const photoSwiper = new Swiper($(this).find(".swiper.is-flavor")[0], {
        loop: true,
        // loopedSlides: loopedSlidesValue,
        slidesPerView: 3,
        centeredSlides: true,
        // createElements: true,
        speed: 500,
        on: {
            slideChange: function () {
              // Get the active slide
              const activeSlide = this.slides[this.activeIndex];
              
              // Get the data attribute (replace 'your-attribute' with the actual attribute name)
              const dataAttribute = activeSlide.getAttribute('data-theme');
              
              // Apply the data attribute to another container
              // Replace '.your-container' with the actual selector for your target container
              const targetContainer = document.querySelector('.our_flavors_wrapper');
              if (targetContainer) {
                targetContainer.setAttribute('data-theme', dataAttribute);
                // If you want to apply it as a class instead, use:
                // targetContainer.className = dataAttribute;
              }
            }
          },
        navigation: {
            nextEl: $(this).find(".swiper-next")[0],
            prevEl: $(this).find(".swiper-prev")[0],
            disabledClass: "is-disabled"
        },
        slideActiveClass: "is-active",
        slideDuplicateActiveClass: "is-active",
        breakpoints: {
            992: {
                slidesPerView: 2
            }
        }
    });

    const listSwiper = new Swiper($(this).find(".swiper.is-slider-info")[0], {
        allowTouchMove: false,
        speed: 500,
        loop: true,
        centeredSlides: true,
        // loopedSlides: loopedSlidesValue,
        slidesPerView: "auto", 
        direction: "vertical"
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