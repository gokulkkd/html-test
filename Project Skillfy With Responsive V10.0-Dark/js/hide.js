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
