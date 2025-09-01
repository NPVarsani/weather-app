// Sensitive Information 
const apiKey = 'd07349617bf44b32d522cb1642e27435';
const city = 'Bhuj';

async function fetchWeatherData() {
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`; // url get from https://openweathermap.org/forecast5
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
    }
    catch (error) {
        console.log(error);

    }
}

fetchWeatherData();