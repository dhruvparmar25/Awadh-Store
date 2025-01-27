
var slider = document.querySelector('.slider');
var btnleft = document.querySelector('.button-left');
var btnright = document.querySelector('.button-right');

var slider1 = document.querySelector('.slider-1');
var btnleft1 = document.querySelector('.button-left-1');
var btnright1 = document.querySelector('.button-right-1');


function scrollLeft() {
    slider.scrollBy({
        left: -250, // Scroll left
        behavior: 'smooth',
    });
}

function scrollRight() {
    slider.scrollBy({
        left: 250, // Scroll right
        behavior: 'smooth',
    });
}

function scrollLeft() {
    slider1.scrollBy({
        left: -250, // Scroll left
        behavior: 'smooth',
    });
}

function scrollRight() {
    slider1.scrollBy({
        left: 250, // Scroll right
        behavior: 'smooth',
    });
}

btnleft1.addEventListener('click', scrollLeft);
btnright1.addEventListener('click', scrollRight);

btnleft.addEventListener('click', scrollLeft);
btnright.addEventListener('click', scrollRight);

// Banner-slide

var container = document.querySelector('.slide-container');
var slides = document.querySelectorAll('.slideBanner');
var totalSlides = slides.length;

var currentIndex = 0;

// Function to update the slide position
var updateSliderPosition = () => {
    container.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Reset to the first slide after the last slide
    if (currentIndex === totalSlides) {
        setTimeout(() => {
            container.style.transition = 'none'; // Disable transition for seamless loop
            container.style.transform = `translateX(0)`;
            currentIndex = 0;
        }, 1000); // Match the transition duration (0.5s in CSS)
    } else {
        container.style.transition = 'transform 1s ease-in-out'; // Re-enable transition
    }
};

// Automatic scrolling function
var startAutoScroll = () => {
    setInterval(() => {
        currentIndex++;
        updateSliderPosition();
    }, 3000); // Scroll every 3 seconds
};

// Start the automatic scroll
startAutoScroll();

