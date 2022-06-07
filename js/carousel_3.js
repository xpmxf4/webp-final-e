
const slides_3 = document.querySelectorAll(".slide_3");

slides_3.forEach((slide, indx) => {
    slide.style.transform = `translateX(${indx * 100}%)`;
});

const nextSlide_3 = document.querySelector(".btn-next_3");


let curSlide_3 = 0;
let maxSlide_3 = slides_3.length - 1;

nextSlide_3.addEventListener("click", function () {
    if (curSlide_3 === maxSlide_3) {
        curSlide_3 = 0;
    } else {
        curSlide_3++;
    }

    slides_3.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - curSlide_3)}%)`;
    });
});

const prevSlide_3 = document.querySelector(".btn-prev");

prevSlide_3.addEventListener("click", function () {
    if (curSlide === 0) {
        curSlide_3 = maxSlide_3;
    } else {
        curSlide_3--;
    }

    slides_3.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - curSlide_3)}%)`;
    });
});
