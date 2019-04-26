const axios = require("axios");
const argv = require("yargs").options({
    address: {
        alias: "a",
        desc: "City Address`s to obtain the weather.",
        demand: true
    }
}).argv;

const encodeUrl = encodeURI(argv.address);
console.log(`Wanted city: ${encodeUrl}`);

const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
    headers: {
        "X-RapidAPI-Host": "devru-latitude-longitude-find-v1.p.rapidapi.com",
        "X-RapidAPI-Key": "d4f3af9f4fmshff0d0bac793f571p10cd2ajsn9ec9ff6a67c2"
    }
});

instance.get()
    .then(resp => {
        console.log(resp.data.Results[0]);
    }).catch(err => {
        console.log(`Error: ${err}`);
    });