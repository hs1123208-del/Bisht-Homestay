/* --- Navbar scroll effect --- */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

/* --- Mobile menu toggle --- */
function toggleMenu() {
  const menu = document.getElementById('mobile-menu');
  const icon = document.getElementById('hamburger-icon');
  const isOpen = menu.classList.toggle('open');
  icon.className = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
}

/* --- Smooth scroll --- */
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}
function navClick(e, id) {
  e.preventDefault();
  scrollToSection(id);
  // close mobile menu if open
  const menu = document.getElementById('mobile-menu');
  const icon = document.getElementById('hamburger-icon');
  menu.classList.remove('open');
  icon.className = 'fa-solid fa-bars';
}

/* --- Scroll reveal animations --- */
const reveals = document.querySelectorAll('.reveal, .reveal-scale');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
reveals.forEach(el => observer.observe(el));

/* --- Background Slideshow --- */
const bgSlides = document.querySelectorAll('.bg-slide');
let currentSlide = 0;

if(bgSlides.length > 1) {
  setInterval(() => {
    const prevSlide = currentSlide;
    bgSlides[prevSlide].classList.remove('active');
    
    currentSlide = (currentSlide + 1) % bgSlides.length;
    bgSlides[currentSlide].classList.add('active', 'animate');
    
    // Remove animation class after fade out to reset the scale for next cycle
    setTimeout(() => {
      bgSlides[prevSlide].classList.remove('animate');
    }, 2500);
  }, 6000); // Crossfade every 6 seconds
}