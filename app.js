const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la cuidad para obtener el clima',
        demand: true
    }
}).argv;
/*lugar.getLugarLatLng(argv.direccion)
    .then(response => console.log(response))
    .catch(error => console.log);

clima.getClima('-33.459999', '-70.639999')
    .then(response => console.log(response))
*/
const getInfo = async(direccion) => {
    try {
        const coordenadas = await lugar.getLugarLatLng(direccion);
        const temperatura = await clima.getClima(coordenadas.lat, coordenadas.lng);
        return `La temperatura actual en ${coordenadas.dir} es de ${temperatura.temp}ºC`;
    } catch (e) {
        return `No se pudo deteriminar la temperatura de ${direccion} ${e}`;
    }
}
getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);