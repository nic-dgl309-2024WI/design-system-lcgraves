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
            // This variable will toggle between true and false
            var panel = this.nextElementSibling;

            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                // Close any already open panels
                var openPanel = document.querySelector('.c-accordion__panel[style]');
                if (openPanel) openPanel.style.maxHeight = null;

                // Open the clicked panel
                panel.style.maxHeight = panel.scrollHeight + "px";
            } 
        });
    });
});
