function openTab(evt, tabName) {
  var i, tabcontent, tablinks;

  // Hide all tab content
  tabcontent = document.getElementsByClassName("for-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].classList.remove("active");
  }

  // Remove 'active' class from all tab buttons
  tablinks = document.getElementsByClassName("for-tab");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }

  // Show the selected tab content and mark the button as active
  document.getElementById(tabName).classList.add("active");
  evt.currentTarget.classList.add("active");
}

$(function ($) {
  $.autofilter();
});
