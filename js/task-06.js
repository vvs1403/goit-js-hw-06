const inputRef = document.querySelector('#validation-input');

const inputBlur = (event) => {
  const { dataset, value } = event.target;
  const requiredLength = Number(dataset.length);

    if (requiredLength === value.length) {
        inputRef.classList.add('valid');
    } else {
        inputRef.classList.add('invalid');

  }
};

inputRef.addEventListener('blur', inputBlur);










