// Sensitive Information 
const apiKey = 'd07349617bf44b32d522cb1642e27435';
const city = 'Bhuj';

async function fetchWeatherDataByUrl(apiUrl) {
    // const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=metric`; // url get from https://openweathermap.org/forecast5
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
        let dateOnly = data.list[0].dt_txt;
        dateOnly = dateOnly.split(' ')[0];
        current_city_h2.textContent = data.city.name + ` ( ${dateOnly} ) `;
        saveSearch(data.city.name);
        current_city_p1.textContent = `Temperature: ${data.list[0].main.temp}°C`;
        current_city_p2.textContent = `Wind: ${data.list[0].wind.speed} M/S`;
        current_city_p3.textContent = `Humidity: ${data.list[0].main.humidity}%`;
        current_city_img.src = `http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`;
        current_city_p4.textContent = `${data.list[0].weather[0].description}`;



        // --- Forecast Card 1 ---
        // Get the date and clean it up
        let forecastDate1 = data.list[(8 * 1) - 1].dt_txt;
        forecastDate1 = forecastDate1.split(' ')[0];

        // Update the card's elements
        forecast_date_1_p1.textContent = `(${forecastDate1})`;
        forecast_date_1_img.src = `http://openweathermap.org/img/wn/${data.list[(8 * 1) - 1].weather[0].icon}@2x.png`;
        forecast_date_1_p2.textContent = `Temp: ${data.list[(8 * 1) - 1].main.temp}°C`;
        forecast_date_1_p3.textContent = `Wind: ${data.list[(8 * 1) - 1].wind.speed} M/S`;
        forecast_date_1_p4.textContent = `Humidity: ${data.list[(8 * 1) - 1].main.humidity}%`;

        // --- Forecast Card 2 ---
        // Get the date and clean it up
        let forecastDate2 = data.list[(8 * 2) - 1].dt_txt;
        forecastDate2 = forecastDate2.split(' ')[0];

        // Update the card's elements
        forecast_date_2_p1.textContent = `(${forecastDate2})`;
        forecast_date_2_img.src = `http://openweathermap.org/img/wn/${data.list[(8 * 2) - 1].weather[0].icon}@2x.png`;
        forecast_date_2_p2.textContent = `Temp: ${data.list[(8 * 2) - 1].main.temp}°C`;
        forecast_date_2_p3.textContent = `Wind: ${data.list[(8 * 2) - 1].wind.speed} M/S`;
        forecast_date_2_p4.textContent = `Humidity: ${data.list[(8 * 2) - 1].main.humidity}%`;

        // --- Forecast Card 3 ---
        // Get the date and clean it up
        let forecastDate3 = data.list[(8 * 3) - 1].dt_txt;
        forecastDate3 = forecastDate3.split(' ')[0];

        // Update the card's elements
        forecast_date_3_p1.textContent = `(${forecastDate3})`;
        forecast_date_3_img.src = `http://openweathermap.org/img/wn/${data.list[(8 * 3) - 1].weather[0].icon}@2x.png`;
        forecast_date_3_p2.textContent = `Temp: ${data.list[(8 * 3) - 1].main.temp}°C`;
        forecast_date_3_p3.textContent = `Wind: ${data.list[(8 * 3) - 1].wind.speed} M/S`;
        forecast_date_3_p4.textContent = `Humidity: ${data.list[(8 * 3) - 1].main.humidity}%`;

        // --- Forecast Card 4 ---
        // Get the date and clean it up
        let forecastDate4 = data.list[(8 * 4) - 1].dt_txt;
        forecastDate4 = forecastDate4.split(' ')[0];

        // Update the card's elements
        forecast_date_4_p1.textContent = `(${forecastDate4})`;
        forecast_date_4_img.src = `http://openweathermap.org/img/wn/${data.list[(8 * 4) - 1].weather[0].icon}@2x.png`;
        forecast_date_4_p2.textContent = `Temp: ${data.list[(8 * 4) - 1].main.temp}°C`;
        forecast_date_4_p3.textContent = `Wind: ${data.list[(8 * 4) - 1].wind.speed} M/S`;
        forecast_date_4_p4.textContent = `Humidity: ${data.list[(8 * 4) - 1].main.humidity}%`;


        // --- Forecast Card 5 ---
        // Get the date and clean it up
        let forecastDate5 = data.list[(8 * 5) - 1].dt_txt;
        forecastDate5 = forecastDate5.split(' ')[0];

        // Update the card's elements
        forecast_date_5_p1.textContent = `(${forecastDate5})`;
        forecast_date_5_img.src = `http://openweathermap.org/img/wn/${data.list[(8 * 5) - 1].weather[0].icon}@2x.png`;
        forecast_date_5_p2.textContent = `Temp: ${data.list[(8 * 5) - 1].main.temp}°C`;
        forecast_date_5_p3.textContent = `Wind: ${data.list[(8 * 5) - 1].wind.speed} M/S`;
        forecast_date_5_p4.textContent = `Humidity: ${data.list[(8 * 5) - 1].main.humidity}%`;
    }
    catch (error) {
        console.log(error);

    }
    cityInputElement.value = "";
}

fetchWeatherDataByUrl(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`);
const cityInputElement = document.getElementById('city-input');
const searchBtn = document.getElementById('search-btn');

searchBtn.addEventListener('click', () => {

    const cityName = cityInputElement.value;

    if (cityName === "") {
        alert("Please enter a city name.");
        return;
    }

    // fetchWeatherDataByUrl(cityName); // We'll update this function next
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=metric`;
    fetchWeatherDataByUrl(apiUrl);
});

const current_city_h2 = document.getElementById('current_city_h2');
const current_city_p1 = document.getElementById('current_city_p1');
const current_city_p2 = document.getElementById('current_city_p2');
const current_city_p3 = document.getElementById('current_city_p3');
const current_city_img = document.getElementById('current_city_img');
const current_city_p4 = document.getElementById('current_city_p4');

const forecast_date_5_p1 = document.getElementById('forecast_date_5_p1');
const forecast_date_5_img = document.getElementById('forecast_date_5_img');
const forecast_date_5_p2 = document.getElementById('forecast_date_5_p2');
const forecast_date_5_p3 = document.getElementById('forecast_date_5_p3');
const forecast_date_5_p4 = document.getElementById('forecast_date_5_p4');

const forecast_date_4_p1 = document.getElementById('forecast_date_4_p1');
const forecast_date_4_img = document.getElementById('forecast_date_4_img');
const forecast_date_4_p2 = document.getElementById('forecast_date_4_p2');
const forecast_date_4_p3 = document.getElementById('forecast_date_4_p3');
const forecast_date_4_p4 = document.getElementById('forecast_date_4_p4');

const forecast_date_3_p1 = document.getElementById('forecast_date_3_p1');
const forecast_date_3_img = document.getElementById('forecast_date_3_img');
const forecast_date_3_p2 = document.getElementById('forecast_date_3_p2');
const forecast_date_3_p3 = document.getElementById('forecast_date_3_p3');
const forecast_date_3_p4 = document.getElementById('forecast_date_3_p4');

const forecast_date_2_p1 = document.getElementById('forecast_date_2_p1');
const forecast_date_2_img = document.getElementById('forecast_date_2_img');
const forecast_date_2_p2 = document.getElementById('forecast_date_2_p2');
const forecast_date_2_p3 = document.getElementById('forecast_date_2_p3');
const forecast_date_2_p4 = document.getElementById('forecast_date_2_p4');

const forecast_date_1_p1 = document.getElementById('forecast_date_1_p1');
const forecast_date_1_img = document.getElementById('forecast_date_1_img');
const forecast_date_1_p2 = document.getElementById('forecast_date_1_p2');
const forecast_date_1_p3 = document.getElementById('forecast_date_1_p3');
const forecast_date_1_p4 = document.getElementById('forecast_date_1_p4');


const locationBtn = document.getElementById('location-btn');


locationBtn.addEventListener('click', () => {
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
});

// This function will run if the browser successfully gets the location
function onSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    // console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    getWeatherByCoordinates(latitude, longitude);
    // Next, we'll use these coordinates to call the weather API

}

// This function will run if there's an error
function onError(error) {
    alert("Unable to retrieve your location. Please try searching for a city manually.");
    console.error("Geolocation error:", error);
}

// New function to handle fetching by coordinates
function getWeatherByCoordinates(latitude, longitude) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    fetchWeatherDataByUrl(apiUrl); // We'll create this function next
}

function saveSearch(cityName) {

    let searches = JSON.parse(localStorage.getItem('weatherSearches')) || [];

    // Add the new city to the beginning of the list, only if it's not already there
    if (!searches.includes(cityName)) {
        searches.unshift(cityName);
    }

    // Keep the list at a maximum of 5 cities
    if (searches.length > 5) {
        searches.pop();
    }

    // Save the updated list back to localStorage
    localStorage.setItem('weatherSearches', JSON.stringify(searches));
}