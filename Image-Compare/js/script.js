const slider = document.querySelector(".slider");
const overlay = document.querySelector(".image-overlay");
const overlayImage = overlay.querySelector("img");
let isDragging = false;

slider.addEventListener("mousedown", startDragging);
document.addEventListener("mousemove", drag);
document.addEventListener("mouseup", stopDragging);

slider.addEventListener("touchstart", startDragging);
document.addEventListener("touchmove", drag);
document.addEventListener("touchend", stopDragging);

function startDragging(e) {
  isDragging = true;
  e.preventDefault();
}

function stopDragging() {
  isDragging = false;
}

function drag(e) {
  if (!isDragging) return;

  const rect = slider.parentElement.getBoundingClientRect();
  const x = (e.clientX || e.touches[0].clientX) - rect.left;
  const percent = (x / rect.width) * 100;

  if (percent >= 0 && percent <= 100) {
    overlay.style.width = percent + "%";
    slider.style.left = percent + "%";
    overlayImage.style.width = (100 / percent) * 100 + "%";
  }
}
