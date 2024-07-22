$(document).ready(function(){
  $("#skil_nav_btn").click(function(){
    $(".skil_nav_item1").show(300);
    $(".skil_nav_item2").show(300);
    $("#skil_nav_btn").css({"display": "none"});
    $("#skil_nav_btn2").css({"display": "block"});
  });

  $("#skil_nav_btn2").click(function(){
    $(".skil_nav_item1").hide();
    $(".skil_nav_item2").hide();
    $("#skil_nav_btn2").css({"display": "none"});
    $("#skil_nav_btn").css({"display": "block"});
  });

  //! search hide function


  $(".fa-search").click(function(){
    $(".skil_nav_search").toggle();
    // $(".fa-search").css({"display":"none"});
    // $("#skil_nav_btn").css({"display": "block"});
  });

  //! view all & hide function function

  $("#view_all").click(function(){
    $(".skil_sec6_ul ul").css({"justify-content":"space-evenly"});
    $(".skil_sec6_ul ul").css({"flex-wrap":"wrap"});
    $('.view_all').css({"display" : "none"});
    $('.hide_all').css({"display" : "block"});
    $(".swiper-pagination-progressbar.swiper-pagination-horizontal").css({"display": "none"});
    $(".prev_btn").css({"display": "none"});
    $(".next_btn").css({"display": "none"});
    $('.skil_sec6_ul ul li').removeClass('swiper-slide');
  });

  $("#hide_all").click(function(){
    $('.view_all').css({"display" : "block"});
    $('.hide_all').css({"display" : "none"});
    location.reload(true);
    // $(".skil_sec6_ul ul").css({"justify-content":"none"});
    // $(".skil_sec6_ul ul").css({"flex-wrap":"no-wrap"});
    // $('.hide_all').css({"display" : "block"})
    // $(".swiper-pagination-progressbar.swiper-pagination-horizontal").css({"display": "block"});
    // $(".prev_btn").css({"display": "block"});
    // $(".next_btn").css({"display": "block"});
    // $()
  });

}); 

//+ For the Hamburger menu **********************


// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function() {
navLinks.style.left = "0";
}
menuCloseBtn.onclick = function() {
navLinks.style.left = "-100%";
}


// sidebar submenu open close js code

let homeArrow = document.querySelector(".home_arrow");
homeArrow.onclick = function() {
 navLinks.classList.toggle("show1");
}

let pagesArrow = document.querySelector(".pages_arrow");
pagesArrow.onclick = function() {
 navLinks.classList.toggle("show2");
}

let moreArrow = document.querySelector(".more-arrow");
moreArrow.onclick = function() {
navLinks.classList.toggle("show3");
}

let coursesArrow = document.querySelector(".courses_arrow");
coursesArrow.onclick = function() {
 navLinks.classList.toggle("show4");
}

let featuresArrow = document.querySelector(".features_arrow");
featuresArrow.onclick = function() {
 navLinks.classList.toggle("show5");
}

let blogArrow = document.querySelector(".blog_arrow");
blogArrow.onclick = function() {
 navLinks.classList.toggle("show6");
}

let shopArrow = document.querySelector(".shop_arrow");
shopArrow.onclick = function() {
 navLinks.classList.toggle("show7");
}

// Trigger CSS Animations when elements are scrolled into view

// This JS uses the Intersection Observer API to determine if objects are within the viewport
// It addes an 'in-view' class to elements when they come into view (and removes the class when not on screen)
// Use to add @keyframe or transition animations to elements so they animate once they are on screen

//TO USE
// Simply add the .animate class to those HTML elements that you wish to animate. For example, <h1 class="animate">
// Once in the viewport, the JS will add the 'in-view' class to those elements. For example, <h1 class="animate in-view">
// Define your CSS to enable animations once that element is in view. For example, h1.in-view { }

//Check if the document is loaded (so that this script can be placed in the <head>)

// document.addEventListener("DOMContentLoaded", () => {
//   // Use Intersection Observer to determine if objects are within the viewport
//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add("in-view");
//         return;
//       }
//       entry.target.classList.remove("in-view");
//     });
//   });

//   // Get all the elements with the .animate class applied
//   const allAnimatedElements = document.querySelectorAll(".animate");

//   // Add the observer to each of those elements
//   allAnimatedElements.forEach((element) => observer.observe(element));
// }); 

document.addEventListener("DOMContentLoaded", () => {
  let lastScrollY = window.scrollY;
  let isScrollingDown = true;

  // Function to determine scroll direction
  function checkScrollDirection() {
    const currentScrollY = window.scrollY;
    isScrollingDown = currentScrollY > lastScrollY;
    lastScrollY = currentScrollY;
  }

  // Use Intersection Observer to determine if objects are within the viewport
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && isScrollingDown) {
        entry.target.classList.add("in-view");
      } else {
        entry.target.classList.remove("in-view");
      }
    });
  });

  // Get all the elements with the .animate class applied
  const allAnimatedElements = document.querySelectorAll(".animate");

  // Add the observer to each of those elements
  allAnimatedElements.forEach((element) => observer.observe(element));

  // Listen to scroll events to update scroll direction
  window.addEventListener("scroll", checkScrollDirection);
});
