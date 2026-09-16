// Keep welcome.js minimal: mark the active nav link.
(function markActiveNav() {
  document.querySelectorAll('.headband').forEach(a => a.classList.remove('active'));
  const path = window.location.pathname.split('/').pop() || 'welcome.html';
  const el = document.querySelector(`.headband[href="${path}"]`);
  if (el) { el.classList.add('active'); el.setAttribute('aria-current','page'); }
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
    progress.style.height = "100%";
    progress.style.background = "var(--accent-color)";
    progress.style.borderRadius = "8px";
    progress.style.transition = "width 1.2s ease";

    bar.appendChild(progress);
    skill.appendChild(bar);

    // Lancer l'animation après un petit délai
    setTimeout(() => {
      progress.style.width = level + "%";
    }, 300);
  });
});

