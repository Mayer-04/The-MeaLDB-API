const foodApi = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';
const $dataContainer = document.querySelector('[data-container]');

const fetchFood = async () => {
    try {
        const response = await fetch(foodApi);
        const food = await response.json();
        const foodHtml = food.meals.map(food => `
        <div>
            <img src="${food.strMealThumb}" alt="${food.strMeal}" width="300px">
            <span>${food.strMeal}</span>
        </div>
        `).join('');
        $dataContainer.innerHTML = foodHtml;
    } catch (error) {
        console.log(`Error: ${error}`);
    }
};
fetchFood();