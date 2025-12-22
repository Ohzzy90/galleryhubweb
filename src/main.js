import AOS from 'aos';

// Initialize Animate On Scroll
AOS.init({
  duration: 1000, // Duration of animation
  once: true,     // Whether animation should happen only once
});

const navbar = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('shadow-lg');
    navbar.style.padding = '1rem 0';
  } else {
    navbar.classList.remove('shadow-lg');
    navbar.style.padding = '1.5rem 0';
  }
});