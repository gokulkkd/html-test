// For Header

$(document).ready(function () {
  $("#abc-btn").click(function () {
    $(".abc-menu").addClass("abc-navhide");
    $(".abc-menu").removeClass("fade-in");
    $(".addcls").addClass("fa-xmark");
    $(".remclass").removeClass("fa-bars");
  });

  $("#abc-btn2").click(function () {
    $(".abc-hide-show").addClass("fade-in");
    $(".remclass").addClass("fa-bars");
    $(".addcls").removeClass("fa-xmark");
  });
});

// For Active class

const classActive = document.querySelectorAll(".abc-li-wrapper");

classActive.forEach((anchor) => {
  anchor.addEventListener("click", () => {
    removeActiveClasses();
    anchor.classList.add("active");
  });
});

const removeActiveClasses = () => {
  classActive.forEach((anchor) => {
    anchor.classList.remove("active");
  });
};

