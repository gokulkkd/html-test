const classActive = document.querySelectorAll(".normal-link");

classActive.forEach((anchor) => {
  anchor.addEventListener("click", () => {
    removeActiveClasses();
    anchor.classList.add("active");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const testClass = document.querySelector(".test-class");
  const firstSvg = testClass.querySelector(".first-svg img");
  const secondSvg = testClass.querySelector(".second-svg img");
  const normalLink = testClass.querySelector(".normal-link");

  normalLink.addEventListener("mouseenter", () => {
    gsap.to(firstSvg, { opacity: 1, duration: 0.6, ease: "power2.out" });
    gsap.to(secondSvg, { opacity: 0, duration: 0.6, ease: "power2.out" });
  });

  normalLink.addEventListener("mouseleave", () => {
    gsap.to(firstSvg, { opacity: 0, duration: 0.6, ease: "power2.in" });
    gsap.to(secondSvg, { opacity: 1, duration: 0.6, ease: "power2.in" });
  });
});


