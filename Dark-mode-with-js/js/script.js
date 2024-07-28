// if not want to save local storage

const themeSwitch = document.getElementById("theme-switch");

const enableDarkmode = () => {
  document.body.classList.add("dark-mode");
  document.body.classList.remove("light-mode");
};

const enableLightmode = () => {
  document.body.classList.add("light-mode");
  document.body.classList.remove("dark-mode");
};

// Function to set the theme based on system preference
const setThemeBasedOnSystemPreference = () => {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    enableDarkmode();
  } else {
    enableLightmode();
  }
};

// Set initial theme based on system preference
setThemeBasedOnSystemPreference();

// Listen for changes in system color scheme
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", setThemeBasedOnSystemPreference);

// Toggle theme when the switch is clicked
themeSwitch.addEventListener("click", () => {
  document.body.classList.contains("dark-mode")
    ? enableLightmode()
    : enableDarkmode();
});

// if want to save the local storage for save current state.


// const themeSwitch = document.getElementById("theme-switch");

// const enableDarkmode = () => {
//   document.body.classList.add("dark-mode");
//   document.body.classList.remove("light-mode");
//   localStorage.setItem("dark-mode", "active");
// };

// const enableLightmode = () => {
//   document.body.classList.add("light-mode");
//   document.body.classList.remove("dark-mode");
//   localStorage.setItem("dark-mode", "inactive");
// };

// const setThemeBasedOnPreference = () => {
//   const savedMode = localStorage.getItem("dark-mode");
//   if (savedMode === "active") {
//     enableDarkmode();
//   } else if (savedMode === "inactive") {
//     enableLightmode();
//   } else {
//     // If no saved preference, use system preference
//     if (
//       window.matchMedia &&
//       window.matchMedia("(prefers-color-scheme: dark)").matches
//     ) {
//       enableDarkmode();
//     } else {
//       enableLightmode();
//     }
//   }
// };

// // Set initial theme
// setThemeBasedOnPreference();

// // Listen for changes in system color scheme
// window
//   .matchMedia("(prefers-color-scheme: dark)")
//   .addEventListener("change", (e) => {
//     const savedMode = localStorage.getItem("dark-mode");
//     if (savedMode !== "active" && savedMode !== "inactive") {
//       e.matches ? enableDarkmode() : enableLightmode();
//     }
//   });

// // Toggle theme when the switch is clicked
// themeSwitch.addEventListener("click", () => {
//   document.body.classList.contains("dark-mode")
//     ? enableLightmode()
//     : enableDarkmode();
// });



