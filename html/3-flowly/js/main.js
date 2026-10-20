document.addEventListener('DOMContentLoaded', () => {
  const burger = document.getElementById('burger');
  const nav = document.getElementById('nav');

  if (burger && nav) {
    const toggleMenu = () => {
      const isExpanded = burger.getAttribute('aria-expanded') === 'true';
      burger.setAttribute('aria-expanded', !isExpanded);
      
      nav.classList.toggle('is-visible');
    };

    burger.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMenu();
    });

    nav.querySelectorAll('.navlink').forEach(link => {
      link.addEventListener('click', () => {
        burger.setAttribute('aria-expanded', 'false');
        nav.classList.remove('is-visible');
      });
    });

    document.addEventListener('click', (e) => {
      const header = document.getElementById('header');
      if (header && !header.contains(e.target)) {
        burger.setAttribute('aria-expanded', 'false');
        nav.classList.remove('is-visible');
      }
    });
  }
});