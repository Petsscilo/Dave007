
// ===============================
// ✅ HAMBURGER MENU TOGGLE
// ===============================
const hamburger = document.getElementById('hamburger');
const slideMenu = document.getElementById('slideMenu');

if (hamburger && slideMenu) {
  hamburger.addEventListener('click', () => {
    slideMenu.classList.toggle('active');
    slideMenu.classList.toggle('open');
  });
}

// ===============================
// ✅ FLOATING AD HANDLING
// ===============================
const floatingAd = document.getElementById('floatingAd');
const closeAdBtn = document.getElementById('closeAd');

if (floatingAd && closeAdBtn) {
  // Show floating ad after 5 seconds
  setTimeout(() => {
    floatingAd.style.display = 'block';
  }, 5000);

  // Close ad on click
  closeAdBtn.addEventListener('click', () => {
    floatingAd.style.display = 'none';
  });
}

// ===============================
// ✅ SMOOTH SCROLL TO PRODUCTS
// ===============================
const exploreBtn = document.getElementById('exploreBtn');
if (exploreBtn) {
  exploreBtn.addEventListener('click', () => {
    const productsSection = document.querySelector('#products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

// ===============================
// ✅ BACKGROUND FADE WORDS ANIMATION
// ===============================
const fadeWords = ["Luxury", "Comfort", "Elegance"];
let fadeIndex = 0;

const bgText = document.querySelector('.background-fade-text');
if (bgText) {
  setInterval(() => {
    bgText.style.opacity = 0;
    setTimeout(() => {
      bgText.textContent = fadeWords[fadeIndex];
      bgText.style.opacity = 0.1;
      fadeIndex = (fadeIndex + 1) % fadeWords.length;
    }, 500);
  }, 3000);
}

// ===============================
// ✅ STAR RATING SYSTEM (Review Page)
// ===============================
const stars = document.querySelectorAll('.star');
const ratingValue = document.getElementById('ratingValue');

if (stars.length > 0) {
  stars.forEach((star, index) => {
    star.addEventListener('click', () => {
      let selectedRating = index + 1;

      // Update stars appearance
      stars.forEach((s, i) => {
        if (i < selectedRating) {
          s.classList.add('active'); // highlighted star
        } else {
          s.classList.remove('active');
        }
      });

      // Display selected rating
      if (ratingValue) {
        ratingValue.textContent = `You rated us: ⭐ ${selectedRating}/5`;
      }
    });
  });
}

// ===============================
// ✅ CONTACT FORM HANDLING (Optional Simulation)
// ===============================
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name')?.value.trim();
    const email = document.getElementById('email')?.value.trim();
    const message = document.getElementById('message')?.value.trim();

    if (name && email && message) {
      alert(`✅ Thank you, ${name}! Your message has been sent.`);
      contactForm.reset();
    } else {
      alert('⚠️ Please fill in all fields before submitting.');
    }
  });
}
