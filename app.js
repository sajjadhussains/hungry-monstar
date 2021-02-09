//getting all essential search related dom

const searchBtn = document.getElementById('search-btn');
const searchBox = document.getElementById('search-box');
const searchDiv = document.getElementById('search-result-div');

const foodName= document.getElementsByClassName('food-name');
const cardImages = document.getElementsByClassName('card-images');

searchDiv.style.display = 'none';

searchBtn.addEventListener('click', fetchApi);

async function fetchApi() {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchBox.value}`); // fetch data from api
    const data = await response.json() // convert server response to json format
    const mainData =data.meals;
     console.log(data);
    if (data.error) {
        alert(`Sorry, something goes wrong can't fetch from server`);
    } else {
        displayResult(mainData); // call display result function to show user search data
    }

}

function displayResult(data) {
    searchDiv.style.display = 'block';
    for (let i = 0; i < foodName.length; i++) {
        foodName[i].innerText = data[i].strMeal; // display lyrics name
        cardImages[i].src=data[i].strMealThumb;
    }
}