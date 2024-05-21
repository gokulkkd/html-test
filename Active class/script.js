const classActive = document.querySelectorAll(".normal-link");

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
