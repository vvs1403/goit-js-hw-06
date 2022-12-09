let counterValue = 0;

const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const valueEl = document.querySelector('#value');

incrementBtn.addEventListener('click', () => {
        counterValue += 1;

    valueEl.textContent = counterValue;
});

decrementBtn.addEventListener('click', () => {
        counterValue -= 1;
    
    valueEl.textContent = counterValue;
});

