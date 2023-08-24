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

//Create A Responsive Menu Hide Show Side Menu
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const menu = document.querySelector(".links");

// Onclick For Menu Bar
menuBtn.onclick = () => {
  menu.classList.add("active");
  menuBtn.classList.add("hide");
}

// Onclick For Cancel Menu 
cancelBtn.onclick = () => {
  menu.classList.remove("active");
  menuBtn.classList.remove("hide");
}

/* == BANNER SLIDER == */

/* == BANNER SLIDER == */
