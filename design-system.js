/* Toggles mobile menu on and off with click/tap on hamburger icon */
/* Used chatGPT to help with figuring out how to toggle on/off two menus with separate ID's with one click event" */

function showNav() {
    var firstMenu = document.getElementById("c-mobile-menu__first");
    var secondMenu = document.getElementById("c-mobile-menu__second")
    firstMenu.classList.toggle("is-visible-dropdown-menu");
    secondMenu.classList.toggle("is-visible-dropdown-menu");
}


// Accordion

const allDetails = document.querySelectorAll('.c-accordion__category');
const elementBelow = document.querySelector('.html-code__heading');
// Define the media query for desktop layouts
const mediaQuery = window.matchMedia('(min-width: 1000px)');

allDetails.forEach((targetDetail, index) => {
  targetDetail.addEventListener('toggle', () => {
    const summary = targetDetail.querySelector('.c-accordion__button');
    if (targetDetail.open) {
      // Close all other details and remove active class
      allDetails.forEach((detail) => {
        if (detail !== targetDetail) {
          detail.removeAttribute('open');
          detail.querySelector('.c-accordion__button').classList.remove('active');
        }
      });
      // Add active class to the currently opened detail's summary
      summary.classList.add('active');
    } else {
      // Remove active class if this detail is being closed
      summary.classList.remove('active');
    }

if (mediaQuery.matches) {
    if (targetDetail.open) {
      // Apply different styles if it's panel 2, 3, or 4
      if (index === 1 || index === 2 || index === 3) {
          elementBelow.style.marginTop = '26rem'; // Less margin
      } else {
          elementBelow.style.marginTop = '49rem'; // default
      }
  }
}
else {
  // Ensure no inline styles are applied in mobile
  elementBelow.style.marginTop = ''; // Clear any inline styles
}

  });
});

/* Carousel and Pagination - with help from: https://dev.to/cwrcode/create-testimonial-slider-using-html-css-and-javascript-26gg*/
/*
var slideIndex = 0;
var slides = document.getElementsByClassName("c-carousel__item");
var paginationDots = document.getElementsByClassName("c-carousel__dot");

function showSlides(n) {
  if (n >= slides.length) { slideIndex = 0; }
  if (n < 0) { slideIndex = slides.length - 1; }
  
  // Hide all slides and remove the active class from all dots
  for (var i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
    paginationDots[i].classList.remove("active");
  }
  
  // Display the current slide and highlight the active dot
  slides[slideIndex].classList.add("active");
  paginationDots[slideIndex].classList.add("active");
}

function moveSlide(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Initially show the first slide
showSlides(slideIndex);

// Optional: Add automatic sliding
var slideInterval = setInterval(function() { moveSlide(1); }, 3000); // Change image every 3 seconds

// Optional: Stop automatic sliding on mouseover
document.getElementById('carousel').addEventListener('mouseover', function() {
  clearInterval(slideInterval);
});

// Optional: Resume automatic sliding on mouseout
document.getElementById('carousel').addEventListener('mouseout', function() {
  slideInterval = setInterval(function() { moveSlide(1); }, 3000);
});
*/


// HMTL Code Copy Button

document.querySelectorAll('.copy-btn').forEach(button => {
  button.addEventListener('click', function() {
      // Access the .html-code element using a more accurate path
      var codeContainer = this.parentNode.nextElementSibling; // Gets the next sibling of the parent div of the button
      var codeText = codeContainer.querySelector('.html-code').innerText;

      // Copy the code
      navigator.clipboard.writeText(codeText).then(() => {
          alert('Code copied to clipboard!');
      }).catch(err => {
          console.error('Failed to copy text: ', err);
      });
  });
});