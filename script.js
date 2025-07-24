// Smooth scroll to sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// Toggle mobile navigation
const mobileNavToggle = document.getElementById("mobile-nav-toggle");
const mobileNav = document.getElementById("mobile-nav");

if (mobileNavToggle && mobileNav) {
  mobileNavToggle.addEventListener("click", () => {
    mobileNav.classList.toggle("active");
  });
}

// Back to top button logic (optional)
const backToTopBtn = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

backToTopBtn?.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Set current year in footer
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("current-year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
document.getElementById("menu-toggle").addEventListener("click", function () {
  document.getElementById("nav").classList.toggle("active");
});
document.getElementById("mobile-nav-toggle").addEventListener("click", function () {
  document.getElementById("mobile-nav").classList.toggle("active");
});