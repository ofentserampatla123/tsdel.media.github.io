// ==========================
// LOADER
// ==========================
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  if (loader) {
    setTimeout(() => {
      loader.style.display = "none";
    }, 2000);
  }
});


// ==========================
// MOBILE MENU
// ==========================
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}


// ==========================
// HERO SLIDER
// ==========================
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function changeSlide() {
  if (slides.length === 0) return;

  slides[currentSlide].classList.remove("active");

  currentSlide = (currentSlide + 1) % slides.length;

  slides[currentSlide].classList.add("active");
}

if (slides.length > 0) {
  setInterval(changeSlide, 5000);
}


// ==========================
// TYPING EFFECT
// ==========================
const words = [
  "VIDEO PRODUCTION",
  "EVENTS",
  "MOTION GRAPHICS",
  "CREATIVE MEDIA",
  "DIGITAL PROMOTION"
];

let wordIndex = 0;
let charIndex = 0;
let currentWord = "";
let isDeleting = false;

const typingEl = document.getElementById("typing");

function typeEffect() {
  if (!typingEl) return;

  currentWord = words[wordIndex];

  if (!isDeleting) {
    charIndex++;
  } else {
    charIndex--;
  }

  typingEl.textContent = currentWord.substring(0, charIndex);

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

if (typingEl) {
  typeEffect();
}


// ==========================
// COUNTDOWN TIMER
// ==========================
const eventDate = new Date("December 31, 2026 18:00:00").getTime();

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

if (daysEl && hoursEl && minutesEl && secondsEl) {
  setInterval(() => {
    const now = new Date().getTime();
    const distance = eventDate - now;

    if (distance < 0) return;

    daysEl.innerHTML = Math.floor(distance / (1000 * 60 * 60 * 24));
    hoursEl.innerHTML = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutesEl.innerHTML = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    secondsEl.innerHTML = Math.floor((distance % (1000 * 60)) / 1000);

  }, 1000);
}
