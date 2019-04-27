const axios = require("axios");

const getWeather = async(lat, lng) => {
    //if (!Number(lat) || !Number(lng)) throw Error("Numbers not found.");
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=605dcbe7a47e4cd8c75cf65968cb18f3&units=metric`);
    return resp.data.main.temp;
};

module.exports = {
    getWeather
};