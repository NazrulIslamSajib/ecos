/*
new Splide('#reasons-slider', {
    type: 'slide',
    perPage: 5,
    perMove: 1,
    arrows: false,
    pagination: true,
    gap: '1rem',
    breakpoints: {
      1024: { perPage: 3 },
      640: { perPage: 1 },
    },
}).mount(); 
*/  
/*header*/ 
/* header*/ 
      const toggle = document.getElementById('menu-toggle');
      const closeBtn = document.getElementById('menu-close');
      const menu = document.getElementById('mobile-menu');
      const submenuToggles = menu.querySelectorAll('.submenu-toggle');

      /* ---------- Open / close the drawer ---------- */
      function setMenu(open, { restoreFocus = false } = {}) {
        menu.hidden = !open;
        toggle.setAttribute('aria-expanded', open);
        document.body.classList.toggle('overflow-hidden', open); // lock page scroll behind the drawer

        if (open) {
          closeBtn.focus();
        } else {
          closeAllSubmenus();
          if (restoreFocus) toggle.focus();
        }
      }

      toggle.addEventListener('click', () => setMenu(true));
      closeBtn.addEventListener('click', () => setMenu(false, { restoreFocus: true }));

      /* ---------- Accordion submenus ---------- */
      function setSubmenu(button, open) {
        const panel = document.getElementById(button.getAttribute('aria-controls'));
        button.setAttribute('aria-expanded', open);
        button.querySelector('.chevron').classList.toggle('rotate-180', open);
        panel.hidden = !open;
      }

      function closeAllSubmenus() {
        submenuToggles.forEach((btn) => setSubmenu(btn, false));
      }

      submenuToggles.forEach((btn) => {
        btn.addEventListener('click', () => {
          const willOpen = btn.getAttribute('aria-expanded') !== 'true';
          closeAllSubmenus();          // only one open at a time
          setSubmenu(btn, willOpen);
        });
      });

      /* ---------- Close on Escape ---------- */
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !menu.hidden) {
          setMenu(false, { restoreFocus: true });
        }
      });

      /* ---------- Close when clicking outside the drawer ---------- */
      document.addEventListener('click', (e) => {
        if (!menu.hidden && !menu.contains(e.target) && !toggle.contains(e.target)) {
          setMenu(false);
        }
      });

      /* ---------- Close when resizing up to desktop ---------- */
      window.matchMedia('(min-width: 1024px)').addEventListener('change', (e) => {
        if (e.matches) setMenu(false);
      });



    
var splide = new Splide( '#reasons-slider', { 
  arrows:false, 
  pagination:true,
  type   : 'loop',
  drag   : 'free',
  snap   : true,
  perPage: 5,
  perMove: 1,
  gap: '1rem',
   breakpoints: {
      1024: { perPage: 3 },
      640: { perPage: 1 },
    },
} );

splide.mount();  


/* testimonial */ 
 const testimonialSlider = new Splide('#testimonial-slider', {
    type: 'loop',
    perPage: 5,
    perMove: 1,
    gap: '1.25rem',
    arrows: false,
    pagination: false,
    padding: { left: '4rem', right: '4rem' }, 
    breakpoints: {
      1280: { perPage: 4 },
      900:  { perPage: 2 },
      640:  { perPage: 1, padding: { left: '1.5rem', right: '1.5rem' } },
    },
  }).mount();

  // "Read more" toggles the clamped text
  document.querySelectorAll('#testimonial-slider .read-more').forEach((btn) => {
    btn.addEventListener('click', () => {
      const text = btn.previousElementSibling;
      const expanded = text.classList.toggle('line-clamp-4');
      btn.textContent = expanded ? 'Read more' : 'Read less';
    });
  });  


  /* social section */ 
  new Splide('#social-slider', {
    type: 'loop',
    perPage: 6,
    perMove: 1,
    gap: '0.75rem',
    arrows: false,
    pagination: false,
    drag: 'free',
    padding: { left: '0.5rem', right: '0.5rem' },
    breakpoints: {
      1280: { perPage: 5 },
      1024: { perPage: 4 },
      768:  { perPage: 3 },
      480:  { perPage: 2 },
    },
  }).mount(); 

  