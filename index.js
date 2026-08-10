// Dark/Light Mode Toggle
const toggleBtn = document.getElementById("theme-toggle");
toggleBtn.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
  toggleBtn.textContent = document.documentElement.classList.contains("dark") ? "☀️" : "🌙";
});

// Fade & Slide Animations
document.addEventListener("DOMContentLoaded", () => {
  const fadeElements = document.querySelectorAll(".animate-fadeIn");
  const slideElements = document.querySelectorAll(".animate-slideUp");

  fadeElements.forEach(el => {
    el.style.opacity = 0;
    setTimeout(() => {
      el.style.transition = "opacity 1.5s ease-in";
      el.style.opacity = 1;
    }, 300);
  });

  slideElements.forEach(el => {
    el.style.transform = "translateY(30px)";
    el.style.opacity = 0;
    setTimeout(() => {
      el.style.transition = "all 1.5s ease-out";
      el.style.transform = "translateY(0)";
      el.style.opacity = 1;
    }, 600);
  });
});

// Scroll-triggered animations
const scrollElements = document.querySelectorAll(".scroll-animate");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.remove("opacity-0", "translate-y-10");
      entry.target.classList.add("opacity-100", "translate-y-0");
    }
  });
}, { threshold: 0.2 });
scrollElements.forEach(el => observer.observe(el));

// Scroll Progress Bar
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  document.getElementById("progress-bar").style.width = scrollPercent + "%";
});

// Back to Top Button
const backToTopBtn = document.getElementById("back-to-top");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.remove("hidden");
  } else {
    backToTopBtn.classList.add("hidden");
  }
});
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
