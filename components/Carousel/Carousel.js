class Carousel {

}


/* If You've gotten this far, you're on your own! Although we will give you some hints:
1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
2. You will need to grab a reference to all of the images
3. Create a current index
4. Those buttons are gonna need some click handlers.
5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
6. Have fun!
*/

let carousel = document.querySelector('.carousel');
let carouselLeft = document.querySelector('.left-button');
let carouselRight = document.querySelector('.right-button');

carouselImages = document.querySelectorAll('.carousel img');

currentIndex = 0
currentImage = carouselImages[currentIndex];
currentImage.style.display = "block";

carouselLeft.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentImage.style.display = "none";
        currentIndex = currentIndex - 1;
        currentImage = carouselImages[currentIndex];
        currentImage.style.display = "block";
    } else {
        currentImage = carouselImages[0];
        currentImage.style.display = "block";
    }
});

carouselRight.addEventListener('click', () => {
    if (currentIndex < carouselImages.length - 1) {
        currentImage.style.display = "none";
        currentIndex = currentIndex + 1;
        currentImage = carouselImages[currentIndex];
        // currentImage.classList.add('slide');
        currentImage.style.display = "block";
    } else {
        currentImage = carouselImages[carouselImages.length - 1];
        currentImage.style.display = "block";
    }
});