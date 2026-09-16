// mark active nav link
(function markActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'skills.html';
  document.querySelectorAll('header a.headband').forEach(a => {
    const href = a.getAttribute('href');
    if (!href) return;
    if (href === path) { a.classList.add('active'); a.setAttribute('aria-current','page'); }
    else { a.classList.remove('active'); a.removeAttribute('aria-current'); }
  });
})();

// Animation des barres de progression
document.addEventListener("DOMContentLoaded", () => {
  const skills = document.querySelectorAll(".skill");

  skills.forEach(skill => {
    const level = skill.getAttribute("data-skill");
    const bar = document.createElement("div");
    bar.classList.add("skill-bar");

    // Barre interne (progression)
    const progress = document.createElement("div");
    progress.classList.add("progress");
    progress.style.width = "0%";
    progress.style.transition = "width 1.2s ease";

    bar.appendChild(progress);
    skill.appendChild(bar);

    // Lancer l'animation après un petit délai
    setTimeout(() => {
      progress.style.width = level + "%";
    }, 300);
  });
});
