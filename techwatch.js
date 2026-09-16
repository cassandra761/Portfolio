// script.js — vanilla JS, pas de jQuery
document.addEventListener('DOMContentLoaded', function () {
  const cards = Array.from(document.querySelectorAll('.card'));

  // sécurité : si aucune carte, on arrête
  if (!cards.length) {
    console.warn('Aucune .card trouvée');
    return;
  }

  cards.forEach(card => {
    const expanderTrigger = card.querySelector('.js-expander');
    const collapser = card.querySelector('.js-collapser');

    // clic pour ouvrir/fermer la carte
    expanderTrigger.addEventListener('click', () => {
      const isCollapsed = card.classList.contains('is-collapsed');

      if (isCollapsed) {
        // fermer les autres et les rendre inactives
        cards.forEach(c => {
          if (c !== card) {
            c.classList.remove('is-expanded');
            c.classList.add('is-collapsed', 'is-inactive');
          }
        });
        // ouvrir celle cliquée
        card.classList.remove('is-collapsed', 'is-inactive');
        card.classList.add('is-expanded');
      } else {
        // la fermer
        card.classList.remove('is-expanded');
        card.classList.add('is-collapsed');
        // réactiver toutes
        cards.forEach(c => c.classList.remove('is-inactive'));
      }
    });

    // bouton fermer (dans l'expander)
    collapser.addEventListener('click', (ev) => {
      ev.stopPropagation(); // éviter que le clic remonte et réouvre
      card.classList.remove('is-expanded');
      card.classList.add('is-collapsed');
      cards.forEach(c => c.classList.remove('is-inactive'));
    });
  });
});
