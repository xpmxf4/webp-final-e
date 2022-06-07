
const slides_2 = document.querySelectorAll(".slide_2");

slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${indx * 100}%)`;
});

const nextSlide_2 = document.querySelector(".btn-next_2");


let curSlide_2 = 0;
let maxSlide_2 = slides_2.length - 1;

nextSlide_2.addEventListener("click", function () {
    if (curSlide_2 === maxSlide_2) {
        curSlide_2 = 0;
    } else {
        curSlide_2++;
    }

    slides_2.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - curSlide_2)}%)`;
    });
});

const prevSlide_2 = document.querySelector(".btn-prev_2");

prevSlide_2.addEventListener("click", function () {
    if (curSlide_2 === 0) {
        curSlide_2 = maxSlide_2;
    } else {
        curSlide_2--;
    }

    slides_2.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - curSlide_2)}%)`;
    });
});