// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Flavor entrance 

const savedTheme = localStorage.getItem('theme');
const openingSliderComponent = document.querySelector('.opening_slider_component');

if (!savedTheme && openingSliderComponent) {
  const flavorSwiper = new Swiper(".swiper.enter_flavor", {
    loop: true,
    slidesPerView: 3,
    centeredSlides: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: true
    },
    navigation: {
      nextEl: ".swiper-next",
      prevEl: ".swiper-prev",
    },
    speed: 500,
    on: {
      slideChange: function () {
        // Get the active slide
        const activeSlide = this.slides[this.activeIndex];
        
        // Get the data attribute
        const dataAttribute = activeSlide.getAttribute('data-theme');
        
        // Apply the data attribute to another container
        if (openingSliderComponent) {
          openingSliderComponent.setAttribute('data-theme', dataAttribute);
        }
      }
    }
  });
}

// NAVIGATION
let isNavOpen = false;
const menuButton = document.querySelector(".menu-button");
const navVisible = document.querySelectorAll(".nav-list[data-gsap-hidden], .nav-backdrop[data-gsap-hidden], .nav-blurry-bg[data-gsap-hidden]");

menuButton.addEventListener("click", function() {
    const tl = gsap.timeline();

    if(isNavOpen) {
        // Close nav
        tl.to(".nav-menu", {
            opacity: 0,
            duration: 0.3,
            ease: "power2.out"
        })
        .to(".nav-backdrop", {
            height: "10%",
            opacity: 0,
            duration: 0.4,
            ease: "power2.out"
        }, "<50%")
        .to(".nav-blurry-bg", {
            opacity: 0, 
            duration: 0.4, 
            ease: "power1.out" 
        }, "<50%")
        .set(".nav-invert", { attr: { "data-theme": null } })
        .set(".navbar_main", { backdropFilter: "blur(0.5rem)" })
        .to(".navbar", { height: "4rem" })
        .set(navVisible, { visibility: "hidden" })
        .set(".nav-blurry-bg", { display: "none" });
    } else {
        // Open nav
        tl.set(navVisible, { visibility: "visible" })
        .set(".nav-blurry-bg", { display: "block" })
        .set(".navbar", { height: "auto" })
        .set(".navbar_main", { backdropFilter: "none" })
        .to(".nav-blurry-bg", { 
            opacity: 1, 
            duration: 0.2, 
            ease: "power2.out" 
        })
        .set(".nav-invert", { attr: { "data-theme": "invert" } })
        .to(".nav-backdrop", { 
            height: "100%", 
            opacity: 1, 
            duration: 0.4, 
            ease: "power2.out" 
        })
        .to(".nav-menu", { 
            opacity: 1, 
            duration: 0.2, 
            ease: "power1.out" 
        }, "<50%")
        .from(".navlink-item", { 
            opacity: 0, 
            y: 20, 
            stagger: 0.1, 
            duration: 0.5, 
            ease: "power1.out" 
        }, "<50%");
    }

    isNavOpen = !isNavOpen;
});

// Text animations


const splitType = new SplitType("[data-text-split]", {
    types: "words, chars",
    tagName: "span"
});


document.querySelectorAll("[data-letters-fade-up]").forEach(element => {
    const tl = gsap.timeline({
    scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "top 70%",
        toggleActions: "none play none reset"
    }
    });
    tl.set(element, { visibility: "visible" });
    tl.from(element.querySelectorAll(".char"), { 
        opacity: 0,
        yPercent: 50, 
        duration: 0.2, 
        ease: "power2.out", 
        stagger: { 
            amount: 0.6 
        } 
    });
});

document.querySelectorAll("[data-words-fade-in]").forEach(element => {
    const tl = gsap.timeline({
    scrollTrigger: {
        trigger: element,
        scrub: true
    }
    });
    tl.set(element, { visibility: "visible" });
    tl.from(element.querySelectorAll(".word"), { 
        opacity: 0.1,
        duration: 0.2, 
        ease: "power2.out", 
        stagger: { 
            amount: 0.6 
        } 
    });
});
