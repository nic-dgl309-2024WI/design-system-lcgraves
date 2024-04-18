// Trigger animation on scroll

document.addEventListener("DOMContentLoaded", function() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // Adding the animation class when the intersection ratio is at least 0.5
      if (entry.intersectionRatio >= 0.3) {
        const animationType = entry.target.getAttribute('data-animation');
        entry.target.classList.add(animationType);
      } 
      // Removing the class when no part of the element is visible
      if (entry.intersectionRatio === 0) {
        const animationType = entry.target.getAttribute('data-animation');
        entry.target.classList.remove(animationType);
      }
    });
  }, {
    threshold: [0, 0.3, 1.0] // 
  });

  const elements = document.querySelectorAll('.element--animate');
  elements.forEach(el => observer.observe(el));
});

// Banner text scrolling effect
document.getElementById('scrollingText').addEventListener('click', function() {
    this.classList.toggle('paused');
  });

  // Navigation

document.getElementById("plants").addEventListener("click", showPlants);
document.getElementById("hamburger").addEventListener("click", toggleNav);
document.getElementById("close-nav").addEventListener("click", toggleNav);

function toggleNav() {
    var element = document.getElementById("nav-items");
    var closeButton = document.getElementById("close-nav");
    var hamburgerIcon = document.getElementById("hamburger");
    element.classList.toggle("show-items");
    element.classList.toggle("c-nav__mobile--border");
    closeButton.classList.toggle("c-nav__close");
    hamburgerIcon.classList.toggle("is-hidden");
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

    const areAllClosed = Array.from(allDetails).every(detail => !detail.hasAttribute('open'));

    if (mediaQuery.matches) {
      if (areAllClosed) {
        buttonElement.style.marginTop = '0'; // Set margin to 0 if all panels are closed
      } else {
        if (targetDetail.open) {
          // Apply different styles if it's panel 2, 3, or 4
          if (index === 1 || index === 2 || index === 3) {
            buttonElement.style.marginTop = '28.5rem'; // Less margin
          } else {
            buttonElement.style.marginTop = '54.25rem'; // default
          }
        }
      }
    } else {
      // Ensure no inline styles are applied in mobile
      buttonElement.style.marginTop = ''; // Clear any inline styles
    }
  });
});


// Automatically open the first accordion on desktop
document.addEventListener("DOMContentLoaded", function() {
  const allDetails = document.querySelectorAll('.c-accordion__category');
  const mediaQuery = window.matchMedia('(min-width: 1000px)');

  if (mediaQuery.matches) {
      if (allDetails.length > 0) {
          allDetails[0].setAttribute('open', '');
          allDetails[0].querySelector('.c-accordion__button').classList.add('active');
      }
  }
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