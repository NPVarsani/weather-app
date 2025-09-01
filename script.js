// Sensitive Information 
const apiKey = 'd07349617bf44b32d522cb1642e27435';

async function fetchWeatherData() {
    const apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=${apiKey} `; // Get Url from https://openweathermap.org/api/one-call-3
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