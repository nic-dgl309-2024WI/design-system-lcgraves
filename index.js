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

// Accordion

const allDetails = document.querySelectorAll('.c-accordion__category');
allDetails.forEach((targetDetail) => {
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
