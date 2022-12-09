
function getRandomHexColor() {
  bodyRef.style.backgroundColor = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  colorSpanRef.textContent = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyRef = document.querySelector('body');
const changeColorBtnRef = document.querySelector('.change-color');
const colorSpanRef = document.querySelector('.color');

changeColorBtnRef.addEventListener('click', getRandomHexColor);
