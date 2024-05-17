const h1Element = document.getElementById("header");
let animateH1 = document.querySelector("h1");

// Add the "animate__animated" class on mouseover (hover)
h1Element.addEventListener("mouseover", () => {
  animateH1.classList.add("animate__animated");
});

// Remove the "animate__animated" class on mouseout (no longer hovering)
h1Element.addEventListener("mouseout", () => {
  animateH1.classList.remove("animate__animated");
});
