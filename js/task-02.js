const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientRef = document.querySelector('#ingredients');

ingredients.forEach(ingredient => {
  const linkRef = document.createElement('li');
  linkRef.classList.add('item');
  linkRef.textContent = `${ingredient}`;
  ingredientRef.appendChild(linkRef);

})

