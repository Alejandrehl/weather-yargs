const axios = require("axios");

const getPlaceLatLbg = async(wanted_address) => {
    const encodeUrl = encodeURI(wanted_address);
    console.log(`Wanted city: ${encodeUrl}`);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: {
            "X-RapidAPI-Host": "devru-latitude-longitude-find-v1.p.rapidapi.com",
            "X-RapidAPI-Key": "d4f3af9f4fmshff0d0bac793f571p10cd2ajsn9ec9ff6a67c2"
        }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`Results not found for ${encodeUrl}`);
    }

    const data = resp.data.Results[0];
    const address = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        address,
        lat,
        lng
    };
};

module.exports = {
    getPlaceLatLbg
};