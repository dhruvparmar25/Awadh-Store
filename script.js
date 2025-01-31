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
        }, 3000); // Match the transition duration (0.5s in CSS)
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

///////fetch api
document.addEventListener("DOMContentLoaded", function () {
    const productContainer1 = document.getElementById("prod");
    const productContainer2 = document.getElementById("eltamd");

    const btnleft1 = document.querySelector('.button-left-1');
    const btnright1 = document.querySelector('.button-right-1');
    const btnleft2 = document.querySelector('.button-left-2');
    const btnright2 = document.querySelector('.button-right-2');
    const slider1 = document.querySelector('#prod');
    const slider2 = document.querySelector('#eltamd');

    async function fetchProduct(url, container) {
        try {
            let response = await fetch(url);
            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

            let products = await response.json();
            console.log(products);

            // Clear previous content before appending
            container.innerHTML = "";

            products.forEach((product) => {
                container.insertAdjacentHTML(
                    "beforeend",
                    `
                    <div class="card">
                        <img class="card-img-top img-fluid" src="${product.link}" alt="Product Image" />
                        <div class="card-body">
                            <h5 class="card-title">${product.title}</h5>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>

                            <h2>$ ${product.price}</h2>
                            <a href="#" class="btn btn-primary">Buy Now</a>
                        </div>      
                    </div>
                    `
                );
            });
        } catch (error) {
            console.error("Error fetching products:", error);
            container.innerHTML = `<p class="text-danger">Failed to load products. Please try again later.</p>`;
        }
    }

    function scrollLeft(slider) {
        slider.scrollBy({
            left: -250, // Scroll left
            behavior: 'smooth',
        });
    }

    function scrollRight(slider) {
        slider.scrollBy({
            left: 250, // Scroll right
            behavior: 'smooth',
        });
    }

    btnleft1.addEventListener('click', () => scrollLeft(slider1));
    btnright1.addEventListener('click', () => scrollRight(slider1));
    btnleft2.addEventListener('click', () => scrollLeft(slider2));
    btnright2.addEventListener('click', () => scrollRight(slider2));

    fetchProduct("https://636a539ec07d8f936d9a5d5e.mockapi.io/awadhStore/awadhStore", productContainer1);
    fetchProduct("https://636a539ec07d8f936d9a5d5e.mockapi.io/awadhStore/awadhStore", productContainer2);
});




