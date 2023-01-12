import './style.css';

import { DISPLAY, renderUserSearch } from './modules/homepage.js';

const mobileNavBtn = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');
const body = document.querySelector('body');
const mobileLinks = document.querySelectorAll('.mobile-nav-links');

DISPLAY();
renderUserSearch();

const toggleMobileNav = () => {
  mobileNavBtn.classList.toggle('active');
  mobileNav.classList.toggle('active');
  body.classList.toggle('overflow');
};

mobileNavBtn.addEventListener('click', toggleMobileNav);
mobileLinks.forEach((link) => {
  link.addEventListener('click', toggleMobileNav);
});
