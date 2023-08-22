let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = ()=>{
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
//   var c = document.querySelector('#darkMode');
// console.log(c);
};
// var c = document.querySelector('#darkMode');
// alert(c);



let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');




window.onscroll = ()=>{
  sections.forEach(sec=>{
    let top = window.scrollY;
    let offset = sec.offsetTop-150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top>=offset && top<offset+height){
      navlinks.forEach(links => {
          links.classList.remove('active');
          document.querySelector('header nav a[href*=' +id+ ']').classList.add('active'); 
      })
    }
  })
let header = document.querySelector('.header');
header.classList.toggle('sticky', window.scrollY > 100);
menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');



};

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  let darkModeIcon = document.querySelector('#darkMode');
  darkModeIcon.onclick = function(){
  darkModeIcon.classList.toggle('bx-sun');
  // darkModeIcon.classList.toggle('darkMode');
  document.body.classList.toggle('dark-Mode');
};

ScrollReveal({ reset: true,
distance:'80px', 
duration:2000,
delay:200

});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, testimonial-wrapper, .contact form',  { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img',  { origin: 'left' });
ScrollReveal().reveal('.home-content h3,.home-content p, .about-content',  { origin: 'right' });