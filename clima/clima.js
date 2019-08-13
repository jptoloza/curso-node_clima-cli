const axios = require('axios');

const getClima = async(lat, lng) => {
    const encodedUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=5c7f1733300ac0aaff8bf92cef659015`;
    const response = await axios.get(encodedUrl);
    const main = response.data.main;
    return {
        temp: main.temp,
        temp_min: main.temp_min,
        temp_max: main.temp_max
    }
}

module.exports = {
    getClima
}