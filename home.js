// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Spec pills section
gsap.from('.spec_pill', {
  scrollTrigger: {
    trigger: '.key_features',
    start: '10% 70%', // Adjust as needed
    end: '70% 10%', // Adjust as needed
    scrub: true
  },
  opacity: 0,
  y: 20,
  stagger: 0.6,
  ease: 'power2.out'
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
  scale: 0.95,
  y: 50,
  duration: 1,
  ease: "power2.out"
});