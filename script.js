// Sensitive Information 
const apiKey = 'd07349617bf44b32d522cb1642e27435';
const city = 'Bhuj';

async function fetchWeatherData(cityName) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=metric`; // url get from https://openweathermap.org/forecast5
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
        let dateOnly = data.list[0].dt_txt;
        dateOnly = dateOnly.split(' ')[0];
        current_city_h2.textContent = data.city.name + ` ( ${dateOnly} ) `;
        current_city_p1.textContent = `Temperature: ${data.list[0].main.temp}°C`;
        current_city_p2.textContent = `Wind: ${data.list[0].wind.speed} M/S`;
        current_city_p3.textContent = `Humidity: ${data.list[0].main.humidity}%`;
        current_city_img.src = `http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`;
        current_city_p4.textContent = `${data.list[0].weather[0].description}`;
    }
    catch (error) {
        console.log(error);

    }
}

fetchWeatherData(city);
const cityInputElement = document.getElementById('city-input');
const searchBtn = document.getElementById('search-btn');

searchBtn.addEventListener('click', () => {
    const cityName = cityInputElement.value; // Gets the text from the input box
    fetchWeatherData(cityName); // We'll update this function next
});

const current_city_h2 = document.getElementById('current_city_h2');
const current_city_p1 = document.getElementById('current_city_p1');
const current_city_p2 = document.getElementById('current_city_p2');
const current_city_p3 = document.getElementById('current_city_p3');
const current_city_img = document.getElementById('current_city_img');
const current_city_p4 = document.getElementById('current_city_p4');