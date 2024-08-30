function closePopup() {
  const popup = document.querySelector(".popup");
  const overlay = document.querySelector(".overlay");

  popup.style.animation = "slideOut 300ms ease-in-out forwards";
  overlay.style.animation = "fadeOut 200ms ease-in-out forwards";

  setTimeout(() => {
    window.location.hash = "";
    popup.style.animation = "";
    overlay.style.animation = "";
  }, 300); // Match the timeout to the animation duration
}
