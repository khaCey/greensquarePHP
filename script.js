document.addEventListener('DOMContentLoaded', function() {
    var slides = document.querySelectorAll('.slideshow .slide');
    var dots = document.querySelectorAll('.slideshow-dots .dot');
    var currentSlide = 0;
    var slideInterval;

    // Function to initialize the slideshow
    function initializeSlideshow() {
        slides.forEach(function(slide) {
            slide.style.opacity = 0;
        });
        slides[currentSlide].style.opacity = 1; // Show the first slide
        dots[currentSlide].classList.add('active'); // Highlight the first dot
        slideInterval = setInterval(nextSlide, 5000); // Start the slideshow
    }

    // Function to go to the next slide
    function nextSlide() {
        goToSlide(currentSlide + 1);
    }

    // Function to go to a specific slide
    function goToSlide(n) {
        slides[currentSlide].style.opacity = 0; // Hide the current slide
        dots[currentSlide].classList.remove('active'); // Remove highlight from the current dot
        currentSlide = n % slides.length; // Correct the slide index
        slides[currentSlide].style.opacity = 1; // Show the new slide
        dots[currentSlide].classList.add('active'); // Highlight the new dot
    }

    // Event listeners for dots
    dots.forEach(function(dot, index) {
        dot.addEventListener('click', function() {
            clearInterval(slideInterval); // Stop the slideshow
            goToSlide(index); // Move to the slide corresponding to the dot clicked
            slideInterval = setInterval(nextSlide, 5000); // Restart the slideshow
            console.log('pressed');
        });
    });

    initializeSlideshow(); // Call the function to initialize and start the slideshow
});


document.addEventListener('DOMContentLoaded', function() {
    var hamburger = document.querySelector('.hamburger');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('open');
        console.log('pressed');
    });
});

