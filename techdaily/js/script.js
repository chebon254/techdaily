/* == BACK TO TOP == */
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
/* == BACK TO TOP == */


/* == ANIMATION CSS == */
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 1;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("showreveal");
    }
  }
}

window.addEventListener("scroll", reveal);
/* == ANIMATION CSS == */


/* == BANNER SLIDER == */

/* == BANNER SLIDER == */

/* == EVENTS DROPDOWN == */
var customInput = document.getElementById("customInput");

function toggleDropdown() {
  var dropdownContent = customInput.nextElementSibling;
  dropdownContent.classList.toggle("show");
}

function selectItem(item) {
  customInput.value = item;
  var dropdownContent = customInput.nextElementSibling;
  dropdownContent.classList.remove("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.querySelectorAll(".dropdown-content");
    dropdowns.forEach(function(dropdown) {
      if (dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
      }
    });
  }
}
/* == EVENTS DROPDOWN == */