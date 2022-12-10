const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientRef = document.querySelector('#ingredients');

const newArrayLi = ingredients.map(ingredient => {
  const linkRef = document.createElement('li');
  linkRef.classList.add('item');
  linkRef.textContent = `${ingredient}`;
  return linkRef;
})

  ingredientRef.append(...newArrayLi);

