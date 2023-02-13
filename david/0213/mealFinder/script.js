const form = document.querySelector('form');
const name = document.querySelector('#name');
const btn = document.querySelector('.btn');
const single_meal = document.querySelector('#single_meal');
const meals = document.getElementById('meals');
const search_result = document.getElementById('result');
const result = document.getElementById('result');
const meals_by_category = document.getElementById('meals-by-category');
const mealImage = document.querySelector('.meal-img');

window.onload = callCategories;
form.addEventListener('submit', searchMeal);
const mealfind = document.querySelector('#search-meal');

// 음식 검색 로직 //
function searchMeal(e) {
  e.preventDefault();
  meals_by_category.innerHTML = '';
  single_meal.innerHTML = '';
  const meal = name.value;
  callAPI(meal);
  /* mealfind.addEventListener('click', () => {
    fetch(`www.themealdb.com/api/json/v1/1/lookup.php?i=${meals.idMeal}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }); */
}

// 로드시 api 실행
const callAPI = async (meal) => {
  await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${meal}`)
    .then((res) => res.json())
    .then(
      (data) =>
        (meals_by_category.innerHTML = data.meals.map(
          (meals) =>
            `<div class="meal-list">
    <h1>${meals.strMeal}</h1>
    <img id="search-meal" src=${meals.strMealThumb} alt=${meals.strMealThumb}>
    </div>`
        ))
    );
};

function callCategories() {
  single_meal.innerHTML = '';
  meals.innerHTML = '';
  search_result.innerHTML = '';
  fetch('https://www.themealdb.com/api/json/v1/1/categories.php', {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((data) => {
      meals.innerHTML = data.categories
        .map(
          (categories) =>
            `<div><h2>${categories.strCategory}</h2><id="category-img" src="${categories.strCategoryThumb}" alt="${categories.strCategory}" /></div>`
        )
        .join('');
    });
}
