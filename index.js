// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

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

// Stagger Headings
const splitType = new SplitType(".stagger", {
    types: "words, chars",
    tagName: "span"
});

document.querySelectorAll(".stagger").forEach((element) => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "top 70%",
            toggleActions: "none play none reset"
        }
    });

    tl.set(element, { visibility: "visible" })
    .from(element.querySelectorAll(".char"), {
        opacity: 0,
        y: 30,
        duration: 0.2,
        ease: "power2.out",
        stagger: { amount: 0.2 }
    });
});