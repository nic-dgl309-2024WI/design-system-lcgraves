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

document.addEventListener('DOMContentLoaded', function() {
    // Select all accordion buttons
    var accButtons = document.querySelectorAll('.c-accordion__button');

    // Iterate through each button
    accButtons.forEach(function(btn) {
        btn.addEventListener('click', function() {
            // Use data-target attribute to find the panel
            var panelId = this.getAttribute('data-target');
            var panel = document.getElementById(panelId);

            if (panel.style.maxHeight) {
              // If panel is open, close it
              panel.style.maxHeight = null;
          } else {
              // Close any open panels first
              document.querySelectorAll('.c-accordion__panel').forEach(function(otherPanel) {
                  otherPanel.style.maxHeight = null;
              });

              // Then open the clicked panel
              panel.style.maxHeight = panel.scrollHeight + "px";
          }
      });
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
