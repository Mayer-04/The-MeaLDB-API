const $dataContainer = document.querySelector('[data-container]');
const fetchFood = async () => {
    try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');
        const data = await response.json();
        $dataContainer.innerHTML = data.meals.map(food => {
            return `
            <div>
                <img src="${food.strMealThumb}" alt="${food.strMeal}" width="300px"><span>  ${food.strMeal}</span>
            </div>
            `;
        }).join('');


    } catch (error) {
        console.log(error);
    }
}
fetchFood();