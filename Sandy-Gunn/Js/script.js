// For Header

$(document).ready(function () {
  $("#sg-btn").click(function () {
    $(".sg-menu").addClass("sg-navhide","fade-in");
    $(".addcls").addClass("fa-xmark");
    $(".remclass").removeClass("fa-bars");

    // $("#btn2").css({"display": "block"});
  });

  $("#sg-btn2").click(function () {
    $(".sg-hide-show").removeClass("sg-navhide");
    $(".remclass").addClass("fa-bars");
    $(".addcls").removeClass("fa-xmark");
    
  });
});



// For Swiper


const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  slidesPerView: 3,
  spaceBetween: 50,
  loop: true,
  autoplay: {
    delay: 3000,
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".next_btn",
    prevEl: ".prev_btn",

    //+ this is og button

    //! nextEl: '.swiper-button-next',
    //! prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});


// As A jQuery Plugin For Lightbox -->
var gallery = $(".gallery a").simpleLightbox({
  /* options */
  
});

