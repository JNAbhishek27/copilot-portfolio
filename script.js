const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
const year = document.querySelector("#year");

if (year) {
  year.textContent = String(new Date().getFullYear());
}

if (!motionPreference.matches && "IntersectionObserver" in window) {
  document.documentElement.classList.add("js-motion");

  const revealObserver = new IntersectionObserver((entries, observer) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    }
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal").forEach((element) => {
    revealObserver.observe(element);
  });
}
