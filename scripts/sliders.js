// Slider

const slideListS = [
  {
    img: "images/img1m.jpg",
    text: "Produkcja reklamowa",
  },
  {
    img: "images/img2m.jpg",
    text: "Litery przestrzenne",
  },
  {
    img: "images/img3m.jpg",
    text: "Kasetony, folie, tapety",
  },
];

const imageS = document.querySelector("img.sliders");
const h1S = document.querySelector("h1.sliders");
const dotsS = [...document.querySelectorAll(".dotss span")];

// Interfejs
const timeS = 3000;
let activeS = 0;

// Implementacje

const changeDotS = () => {
  const activeDot = dotsS.findIndex((dot) => dot.classList.contains("active"));
  dotsS[activeDot].classList.remove("active");
  dotsS[activeS].classList.add("active");
};

const changeSlideS = () => {
  activeS++;
  if (activeS === slideListS.length) {
    activeS = 0;
  }
  imageS.src = slideListS[activeS].img;
  h1S.textContent = slideListS[activeS].text;
  changeDotS();
};
let indexIntervalS = setInterval(changeSlideS, timeS);

// Klawisze
const keyChangeSlideS = (e) => {
  // console.log(e.keyCode);
  if (e.keyCode == 37 || e.keyCode == 39) {
    clearInterval(indexIntervalS);
    e.keyCode == 37 ? activeS-- : activeS++;
    if (activeS === slideListS.length) {
      activeS = 0;
    } else if (activeS < 0) {
      activeS = slideListS.length - 1;
    }
    imageS.src = slideListS[activeS].img;
    h1S.textContent = slideListS[activeS].text;
    changeDotS();
    indexIntervalS = setInterval(changeSlideS, timeS);
  }
};

// kropki

const changeDotOnClickS = (e) => {
  // console.log(e.target.id);
  if (e.target.id === "one") {
    clearInterval(indexIntervalS);
    // console.log("działa");
    activeS = 0;
    imageS.src = slideListS[activeS].img;
    h1S.textContent = slideListS[activeS].text;
    changeDotS();
    indexIntervalS = setInterval(changeSlideS, timeS);
  }
  if (e.target.id === "two") {
    clearInterval(indexIntervalS);
    // console.log("działa");
    activeS = 1;
    imageS.src = slideListS[activeS].img;
    h1S.textContent = slideListS[activeS].text;
    changeDotS();
    indexIntervalS = setInterval(changeSlideS, timeS);
  }
  if (e.target.id === "three") {
    clearInterval(indexIntervalS);
    // console.log("działa");
    activeS = 2;
    imageS.src = slideListS[activeS].img;
    h1S.textContent = slideListS[activeS].text;
    changeDotS();
    indexIntervalS = setInterval(changeSlideS, timeS);
  }
};

window.addEventListener("click", changeDotOnClickS);
window.addEventListener("keydown", keyChangeSlideS);
