// LOADER

window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').style.display = 'none';
  }, 2000);
});

// MOBILE MENU

const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// HERO SLIDER

const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function changeSlide() {

  slides[currentSlide].classList.remove('active');

  currentSlide = (currentSlide + 1) % slides.length;

  slides[currentSlide].classList.add('active');
}

setInterval(changeSlide, 5000);

// TYPING EFFECT

const words = [
  'VIDEO PRODUCTION',
  'EVENTS',
  'MOTION GRAPHICS',
  'CREATIVE MEDIA',
  'DIGITAL PROMOTION'
];

let wordIndex = 0;
let charIndex = 0;
let currentWord = '';
let isDeleting = false;

function typeEffect() {

  currentWord = words[wordIndex];

  if (!isDeleting) {
    charIndex++;
  } else {
    charIndex--;
  }

  document.getElementById('typing').textContent =
    currentWord.substring(0, charIndex);

  if (!isDeleting && charIndex === currentWord.length) {

    isDeleting = true;

    setTimeout(typeEffect, 1500);

    return;
  }

  if (isDeleting && charIndex === 0) {

    isDeleting = false;

    wordIndex = (wordIndex + 1) % words.length;
  }

  setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();

// COUNTDOWN TIMER

const eventDate = new Date('December 31, 2026 18:00:00').getTime();

setInterval(() => {

  const now = new Date().getTime();

  const distance = eventDate - now;

  const days = Math.floor(
    distance / (1000 * 60 * 60 * 24)
  );

  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) /
    (1000 * 60 * 60)
  );

  const minutes = Math.floor(
    (distance % (1000 * 60 * 60)) /
    (1000 * 60)
  );

  const seconds = Math.floor(
    (distance % (1000 * 60)) /
    1000
  );

  document.getElementById('days').innerHTML = days;
  document.getElementById('hours').innerHTML = hours;
  document.getElementById('minutes').innerHTML = minutes;
  document.getElementById('seconds').innerHTML = seconds;

}, 1000);
