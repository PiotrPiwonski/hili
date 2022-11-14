// Slider

const slideList = [
  {
    img: "images/img1.jpg",
    text: "Produkcja reklamowa",
  },
  {
    img: "images/img2.jpg",
    text: "Litery przestrzenne",
  },
  {
    img: "images/img3.jpg",
    text: "Kasetony, folie, tapety",
  },
];

const image = document.querySelector("img.slider");
const h1 = document.querySelector("h1.slider");
const dots = [...document.querySelectorAll(".dots span")];

// Interfejs
const time = 3000;
let active = 0;

// Implementacje

const changeDot = () => {
  const activeDot = dots.findIndex((dot) => dot.classList.contains("active"));
  dots[activeDot].classList.remove("active");
  dots[active].classList.add("active");
};

const changeSlide = () => {
  active++;
  if (active === slideList.length) {
    active = 0;
  }
  image.src = slideList[active].img;
  h1.textContent = slideList[active].text;
  changeDot();
};
let indexInterval = setInterval(changeSlide, time);

// Klawisze
const keyChangeSlide = (e) => {
  console.log(e.keyCode);
  if (e.keyCode == 37 || e.keyCode == 39) {
    clearInterval(indexInterval);
    e.keyCode == 37 ? active-- : active++;
    if (active === slideList.length) {
      active = 0;
    } else if (active < 0) {
      active = slideList.length - 1;
    }
    image.src = slideList[active].img;
    h1.textContent = slideList[active].text;
    changeDot();
    indexInterval = setInterval(changeSlide, time);
  }
};

// kropki

const changeDotOnClick = (e) => {
  // console.log(e.target.id);
  if (e.target.id === "one") {
    clearInterval(indexInterval);
    // console.log("działa");
    active = 0;
    image.src = slideList[active].img;
    h1.textContent = slideList[active].text;
    changeDot();
    indexInterval = setInterval(changeSlide, time);
  }
  if (e.target.id === "two") {
    clearInterval(indexInterval);
    // console.log("działa");
    active = 1;
    image.src = slideList[active].img;
    h1.textContent = slideList[active].text;
    changeDot();
    indexInterval = setInterval(changeSlide, time);
  }
  if (e.target.id === "three") {
    clearInterval(indexInterval);
    // console.log("działa");
    active = 2;
    image.src = slideList[active].img;
    h1.textContent = slideList[active].text;
    changeDot();
    indexInterval = setInterval(changeSlide, time);
  }
};

window.addEventListener("click", changeDotOnClick);
window.addEventListener("keydown", keyChangeSlide);
