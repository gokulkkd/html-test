var swiper = new Swiper('.swiper-1', {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 3,
  spaceBetween: 50,
  loop: false,
    // Responsive breakpoints
breakpoints: {
  // when window width is >= 320px
  320: {
    slidesPerView: 1,
    spaceBetween: 20,
    slidesPerView:'auto'
  },
  // when window width is >= 480px
  480: {
    slidesPerView: 3,
    spaceBetween: 30
  },
  // when window width is >= 640px
  768: {
    slidesPerView: 3,
    spaceBetween: 17,
    slidesPerView:'auto'
  }
},


  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
  },

  // Navigation arrows
  navigation: {


    nextEl: '.next_btn',
    prevEl: '.prev_btn',

    //+ this is og button

    //! nextEl: '.swiper-button-next',
    //! prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

var swiper = new Swiper('.swiper-2', {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 3,
  spaceBetween: 50,
  loop: false,
    // Responsive breakpoints
breakpoints: {
  // when window width is >= 320px
  320: {
    slidesPerView: 1,
    spaceBetween: 20,
    slidesPerView:'auto'
  },
  // when window width is >= 480px
  480: {
    slidesPerView: 3,
    spaceBetween: 30
  },
  // when window width is >= 640px
  768: {
    spaceBetween: 17,
    slidesPerView:'auto'
  }
},


  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  //   type: 'progressbar',
  // },

  // Navigation arrows
  navigation: {


    nextEl: '.right',
    prevEl: '.left',

    //+ this is og button

    //! nextEl: '.swiper-button-next',
    //! prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
