const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const categoriesNumber = document.querySelector(`#ingredients`);


const createLi = ingredients.map(ingredient => {
  const item = document.createElement(`li`);
  item.textContent = ingredient;
  item.classList.add(`item`);
  return item;
}); 

categoriesNumber.append(...createLi)