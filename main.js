document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Stop observing once it has animated
      }
    });
  }, observerOptions);

  const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
  elementsToAnimate.forEach(el => observer.observe(el));
});

function toggleMenu() {
  document.getElementById('mobile-menu').classList.toggle('active');
}
