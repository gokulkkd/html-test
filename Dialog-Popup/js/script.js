// const enrollButton = document.getElementById("enroll-button");
// const enrollDialog = document.getElementById("enroll-dialog");
// const closeModal = document.getElementById("close-modal");

// enrollButton.addEventListener("click", function (e) {
//   e.preventDefault(); // ⬅️ IMPORTANT
//   enrollDialog.showModal();
// });

// closeModal.addEventListener("click", function (e) {
//   e.preventDefault(); // ⬅️ IMPORTANT
//   enrollDialog.close();
// });

const enrollButton = document.getElementById("enroll-button");
const enrollDialog = document.getElementById("enroll-dialog");
const closeModal = document.getElementById("close-modal");

enrollButton.addEventListener("click", function (e) {
  e.preventDefault();

  enrollDialog.showModal();

  // force browser to apply styles before adding class
  requestAnimationFrame(() => {
    enrollDialog.classList.add("is-visible");
  });
});

closeModal.addEventListener("click", function (e) {
  e.preventDefault();

  enrollDialog.classList.remove("is-visible");

  setTimeout(() => {
    enrollDialog.close();
  }, 300); // must match CSS duration
});
