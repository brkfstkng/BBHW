// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Spec pills
gsap.from('.spec_pill', {
  scrollTrigger: {
    trigger: '.key_features',
    start: '10% 70%', // Adjust as needed
    end: '70% 10%', // Adjust as needed
    scrub: true
  },
  opacity: 0,
  y: 20,
  stagger: 0.5,
  ease: 'power2.out'
});

// Hero text slide
let heroTimeline = gsap.timeline();

// Set visibility for hero elements
heroTimeline.set(".hero-1, .hero-2", { visibility: "visible" });

// Animate .hero-1 on page load
heroTimeline.from(".hero-1", {
  opacity: 0,
  x: -500,
  delay: 0.4,
  duration: 1.2,
  ease: "power2.out"
});

// Animate .hero-1 on scroll
heroTimeline.to(".hero-1", {
  opacity: 1,
  x: 0
}, {
  scrollTrigger: {
    trigger: ".hero",
    start: "top bottom",
    end: "bottom top",
    scrub: true
  },
  opacity: 0.5,
  x: 700,
  ease: "power2.out"
});

// Animate .hero-2 on page load
heroTimeline.from(".hero-2", {
  opacity: 0,
  x: 500,
  delay: 0.4,
  duration: 1.2,
  ease: "power2.out"
});

// Fade in flavor section
let flavorTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".home-flavor-item",
    start: "top bottom",
    end: "top 70%",
    toggleActions: "none play none reset"
  }
});

flavorTimeline.from(".home-flavor-item", {
  opacity: 0,
  y: 100,
  duration: 1,
  ease: "power2.out"
});