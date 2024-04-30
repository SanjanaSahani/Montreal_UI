let slideIndex = 0;
const slides = document.getElementsByClassName("carousel-slide");

function showSlide(n) {
  if (n >= slides.length) { slideIndex = 0; }
  if (n < 0) { slideIndex = slides.length - 1; }
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  slides[slideIndex].classList.add("active");
}

function nextSlide() {
  showSlide(slideIndex += 1);
}

function prevSlide() {
  showSlide(slideIndex -= 1);
}

showSlide(slideIndex);

document.getElementById("prevBtn").addEventListener("click", function() {
  prevSlide();
});

document.getElementById("nextBtn").addEventListener("click", function() {
  nextSlide();
});


// JavaScript for Second Carousel

const carousel3 = document.querySelector('.carousel-container.carousel-2');
const nextBtn3 = carousel3.querySelector('.nextBtn2');
const prevBtn3 = carousel3.querySelector('.prevBtn2');
const track = carousel3.querySelector('.carousel-track');
const slides3 = carousel3.querySelectorAll('.carousel-slide2');
const totalSlides3 = slides3.length;
let currentSlide3 = 0;

function showSlide3(index) {
    track.style.transform = `translateX(-${index * (100 / totalSlides3)}%)`;
}

function updateSlideCounter3(index) {
    const currentNumber = index + 1;
    document.querySelector('.carousel-2 .number2').textContent = `${currentNumber.toString().padStart(2, '0')} / ${totalSlides3.toString().padStart(2, '0')}`;
}

showSlide3(currentSlide3);
updateSlideCounter3(currentSlide3);

nextBtn3.addEventListener('click', () => {
    currentSlide3 = (currentSlide3 + 1) % totalSlides3;
    showSlide3(currentSlide3);
    updateSlideCounter3(currentSlide3);
});

prevBtn3.addEventListener('click', () => {
    currentSlide3 = (currentSlide3 - 1 + totalSlides3) % totalSlides3;
    showSlide3(currentSlide3);
    updateSlideCounter3(currentSlide3);
});


// JavaScript for Third Carousel 

const carousel4 = document.querySelector('.carousel-container.carousel-3');
const nextBtn4 = carousel4.querySelector('.nextBtn3');
const prevBtn4 = carousel4.querySelector('.prevBtn3');
const slides4 = carousel4.querySelectorAll('.carousel-slide3');
const totalSlides4 = slides4.length;
let currentSlide4 = 0;

function showSlide4(index) {
    slides4.forEach((slide, i) => {
        slide.style.display = i === index ? 'flex' : 'none';
    });
}

function updateSlideCounter4(index) {
    const currentNumber = index + 1;
    document.querySelector('.carousel-3 .number3').textContent = `${currentNumber.toString().padStart(2, '0')} / ${totalSlides4.toString().padStart(2, '0')}`;
}

showSlide4(currentSlide4);
updateSlideCounter4(currentSlide4);

nextBtn4.addEventListener('click', () => {
    currentSlide4 = (currentSlide4 + 1) % totalSlides4;
    showSlide4(currentSlide4);
    updateSlideCounter4(currentSlide4);
});

prevBtn4.addEventListener('click', () => {
    currentSlide4 = (currentSlide4 - 1 + totalSlides4) % totalSlides4;
    showSlide4(currentSlide4);
    updateSlideCounter4(currentSlide4);
});

// Adding event listener to each image to move the next slide on click
slides4.forEach((slide, index) => {
    slide.addEventListener('click', () => {
        currentSlide4 = (currentSlide4 + 1) % totalSlides4;
        showSlide4(currentSlide4);
        updateSlideCounter4(currentSlide4);
    });
});
