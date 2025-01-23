
const slider = document.querySelector('.slider');
const btnleft = document.querySelector('.button-left');
const btnright = document.querySelector('.button-right');

const slider1 = document.querySelector('.slider-1');
const btnleft1 = document.querySelector('.button-left-1');
const btnright1 = document.querySelector('.button-right-1');


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

const container = document.querySelector('.slide-container');
const slides = document.querySelectorAll('.slideBanner');
const totalSlides = slides.length;

let currentIndex = 0;

// Function to update the slide position
const updateSliderPosition = () => {
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
const startAutoScroll = () => {
    setInterval(() => {
        currentIndex++;
        updateSliderPosition();
    }, 3000); // Scroll every 3 seconds
};

// Start the automatic scroll
startAutoScroll();
