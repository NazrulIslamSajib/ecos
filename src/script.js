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
var splide = new Splide( '.splide', { 
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