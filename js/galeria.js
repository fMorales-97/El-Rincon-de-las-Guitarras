document.addEventListener('DOMContentLoaded', function(){
  new Splide('.splide', {
    autoplay : true,
    cover    : true,
    height   : '50vh',
    interval : 5000,
    type     : 'loop' 
  }).mount();
});

ScrollReveal({
  duration : 1200,
  delay    : 100,
  reset    : true
});

ScrollReveal().reveal("#titulo-galeria");
ScrollReveal().reveal(".img1");
ScrollReveal().reveal(".img2");
ScrollReveal().reveal(".img3");
ScrollReveal().reveal(".img4");
ScrollReveal().reveal(".img5");
ScrollReveal().reveal(".img6");
ScrollReveal().reveal(".img7");
ScrollReveal().reveal(".img8");
ScrollReveal().reveal(".img9");