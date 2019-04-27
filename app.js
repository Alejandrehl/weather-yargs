const place = require('./place/place');
const weather = require('./weather/weather');
const argv = require("yargs").options({
    address: {
        alias: "a",
        desc: "City Address`s to obtain the weather.",
        demand: true
    }
}).argv;

const getInfo = async() => {
    try {
        const coords = await place.getPlaceLatLbg(argv.address);
        const temp = await weather.getWeather(coords.lat, coords.lng);
        return `El clima de ${coords.address} es de ${temp}`;
    } catch (err) {
        console.log(err);
    }
};

getInfo().then(resp => console.log(resp))
    .catch(err => console.log(err));