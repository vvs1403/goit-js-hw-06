const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');


const handleInputName = (event) => {
  const { value } = event.target;
  outputRef.textContent = value ? value : 'Anonimys';
};
inputRef.addEventListener('input', handleInputName);
