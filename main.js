// Search Box
let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
  search.classList.toggle('active');
  navbar.classList.remove('active');
};

// Menu (responsive)
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () => {
  navbar.classList.toggle('active');
  search.classList.remove('active');
};

window.onscroll = () => {
  navbar.classList.remove('active');
  search.classList.remove('active');
};

// Sticky Navbar
let header = document.querySelector('header');

window.addEventListener('scroll', () => {
  header.classList.toggle('shadow', window.scrollY > 0);
});

// Active Navbar
const navLinkEls = document.querySelectorAll('.navbar a');
const windowsPathname = window.location.pathname;

navLinkEls.forEach((navLinkEls) => {
  if (navLinkEls.href.includes(windowsPathname)) {
    navLinkEls.classList.add('active');
  }
});

/*========== scroll reveal ==========*/
ScrollReveal({
  // reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal('.navbar, .header-icon i, .logo img, .heading', {
  origin: 'left',
});

ScrollReveal().reveal('.home-img img, .home-text a, .products-container, .customers-container, .footer-box, .btn-home', {
  origin: 'right',
});

ScrollReveal().reveal('.home-text h1, .home-text p, .about-img img', {
  origin: 'left',
});

ScrollReveal().reveal('.about-text', {
  origin: 'right',
});
