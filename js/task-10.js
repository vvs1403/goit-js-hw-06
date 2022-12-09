function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const divBoxRef = document.querySelector('#boxes');
const inputRef = document.querySelector('input');
const createBtnRef = document.querySelector('[data-create]'); 
const destroyBtnRef = document.querySelector('[data-destroy]'); 

function createBoxes(amount) {
  amount = inputRef.value;
  let width = 30;
  let height = 30;

  for (let i = 1; i <= amount; i+= 1) {

    const divRef = document.createElement('div');
    divRef.style.backgroundColor = `#${Math.floor(Math.random() * 16777215) .toString(16) .padStart(6, 0)}`;
       width += 10;
       height += 10;    

    divRef.style.width = `${width}px`;
    divRef.style.height = `${height}px`;
    divRef.style.margin = '5px';

    divBoxRef.append(divRef);
  }
};

function destroyBoxes() {
  divBoxRef.innerHTML = "";
}

createBtnRef.addEventListener("click", createBoxes);
destroyBtnRef.addEventListener("click", destroyBoxes);











