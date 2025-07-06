// Animate hero section using GSAP
gsap.from(".hero-title", { duration: 1, y: -50, opacity: 0, ease: "power2.out" });
gsap.from(".hero-text", { duration: 1, y: -30, opacity: 0, ease: "power2.out", delay: 0.3 });
gsap.from(".btn", { duration: 1, scale: 0.8, opacity: 0, ease: "bounce.out", delay: 0.6 });

// Animate products on scroll
gsap.utils.toArray('.product-card').forEach(card => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 85%"
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
  });
});

// Add to Cart functionality
const addCartButtons = document.querySelectorAll('.add-cart');

addCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    alert('Added to cart! (Save to localStorage later)');
    // You’ll replace this alert with real add-to-cart logic & localStorage later
  });
});
