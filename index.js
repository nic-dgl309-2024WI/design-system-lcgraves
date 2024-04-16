// Banner text scrolling effect
document.getElementById('scrollingText').addEventListener('click', function() {
    this.classList.toggle('paused');
  });

  // Navigation

document.getElementById("plants").addEventListener("click", showPlants);
document.getElementById("hamburger").addEventListener("click", showNav);

function showNav() {
    var element = document.getElementById("nav-items");
    element.classList.toggle("show-items");
}

function showPlants() {
    var plantstuff = document.getElementById("plant-items");
    plantstuff.classList.toggle("show-plants");
}

// Add sticky class to navbar after scroll past banner 

window.addEventListener('scroll', function() {
  var nav = document.querySelector('.c-nav__container');
  var banner = document.querySelector('.c-banner');
  var stickyStart = banner.offsetHeight;

  if (window.scrollY> stickyStart) {
    nav.classList.add('c-nav--sticky');
  } else {
    nav.classList.remove('c-nav--sticky');
  }
});

// Accordion

const allDetails = document.querySelectorAll('.c-accordion__category');
const buttonElement = document.querySelector('.c-plants__buttons');
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
          buttonElement.style.marginTop = '28rem'; // Less margin
      } else {
          buttonElement.style.marginTop = '53rem'; // default
      }
  }
}
else {
  // Ensure no inline styles are applied in mobile
  buttonElement.style.marginTop = ''; // Clear any inline styles
}

  });
});



/* Carousel and Pagination - with help from: https://dev.to/cwrcode/create-testimonial-slider-using-html-css-and-javascript-26gg*/

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

// Add automatic sliding
var slideInterval = setInterval(function() { moveSlide(1); }, 3000); // Change image every 3 seconds

// Stop automatic sliding on mouseover
document.getElementById('carousel').addEventListener('mouseover', function() {
  clearInterval(slideInterval);
});

// Resume automatic sliding on mouseout
document.getElementById('carousel').addEventListener('mouseout', function() {
  slideInterval = setInterval(function() { moveSlide(1); }, 3000);
});

// Add ability to change slides with enter key for accessibility

function handleKeyPress(event, slideIndex) {
  // Check if the key pressed is 'Enter'
  if (event.key === "Enter") {
      currentSlide(slideIndex);
  }
}