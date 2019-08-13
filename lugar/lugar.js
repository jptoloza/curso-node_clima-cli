const axios = require('axios');

const getLugarLatLng = async(direccion) => {
    const encodedUrl = `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeURI(direccion)}`;
    const instance = axios.create({
        baseURL: encodedUrl,
        headers: {
            "x-rapidapi-host": "devru-latitude-longitude-find-v1.p.rapidapi.com",
            "x-rapidapi-key": "1f0c705465msh3c2492264539dbfp16b47ejsn195e3aa810d3"
        }
    });
    const response = await instance.get();
    if (response.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${direcion}`);
    }
    const data = response.data.Results[0];
    const dir = data.name;
    const lat = data.lat;
    const lng = data.lon;
    return {
        dir,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}