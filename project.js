// File: test.js
(function(){
  const folders = document.querySelectorAll('.folder');

  folders.forEach(folder => {
    const header = folder.querySelector('.folder-header');
    const list = folder.querySelector('.file-list');

    function setOpen(open) {
      folder.setAttribute('data-open', open);
      folder.setAttribute('aria-expanded', open);
      list.setAttribute('aria-hidden', !open);

      // transition douce (hauteur auto)
      if (open) {
        const h = list.scrollHeight;
        list.style.maxHeight = h + 'px';
      } else {
        list.style.maxHeight = '';
      }
    }

    // Clic sur le header → toggle
    header.addEventListener('click', () => {
      const isOpen = folder.getAttribute('data-open') === 'true';
      setOpen(!isOpen);
    });

    // Clavier (Entrée / Espace pour ouvrir/fermer)
    folder.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        header.click();
      }
      if (e.key === 'Escape') {
        setOpen(false);
        folder.blur();
      }
    });

    // Fermer quand on clique ailleurs
    document.addEventListener('click', (e) => {
      if (!folder.contains(e.target)) {
        setOpen(false);
      }
    });

    // État initial (fermé)
    setOpen(false);
  });
})();
