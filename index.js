const slides = document.querySelectorAll(".slider__item");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const counter = document.querySelector("#count");

const wrapper = document.querySelector(".slider__wrapper");

let currentSlide = 0
let x = 800;

next.addEventListener("click", () => {
    wrapper.style.cssText = `
                transition: all 0.5s;
				transform: translateX(-${x}px);`
    currentSlide++;
    x += 800;

    if (x >= slides.length * 800) {
        x = 0;
    }

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    setState(currentSlide);
})

prev.addEventListener("click", () => {
    x -= 800;
    wrapper.style.cssText = `
                transition: all 0.5s;
				transform: translateX(-${x}px);
            `
    if (x < 800) {
        x = slides.length * 800;
    }

    setState(currentSlide);
    currentSlide--;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
})

function setState (state) {
    counter.textContent = `${state + 1} / ${slides.length}`;
}

setState(currentSlide);