


const categoriesNumber = document.querySelectorAll(`#categories .item`);
console.log(`Number of categories: ${categoriesNumber.length}`)

categoriesNumber.forEach(
  category => { 
    const categoryName = category.querySelector(`h2`);
    const categoryLi = category.querySelectorAll(`li`);
    console.log(`Category: ${categoryName.textContent}`)
    console.log(`Elements: ${categoryLi.length}`)
  }) 
