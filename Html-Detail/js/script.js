function setDetailsState() {
  const detailsElements = document.querySelectorAll("details");
  detailsElements.forEach((details) => {
    if (window.innerWidth > 768) {
      details.setAttribute("open", "open");
    } else {
      details.removeAttribute("open");
    }
  });
}

// Set the initial state
setDetailsState();

// Update the state on window resize
window.addEventListener("resize", setDetailsState);
