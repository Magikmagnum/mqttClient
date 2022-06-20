const mqtt = require('mqtt')
const { readFile } = require('../readFile');
const parametres = require('./parametre.json');

// parametre de l'iden
const clientId = `mqtt_${Math.random().toString(16).slice(3)}`;
// La fonction de connection au borcker du serveur mqtt
const connectUrl = `mqtt://${parametres.host}:${parametres.port}`


const mqttClient = mqtt.connect(connectUrl, {
    clientId,
    clean: parametres.true,
    connectTimeout: parametres.connectTimeout,
    //username: parametres.username,
    //password: parametres.password,
    reconnectPeriod: parametres.reconnectPeriod,

    // A décommenter si la connection nececite des certifications
    ca: [readFile(parametres.caFile)],
    cert: readFile(parametres.certFile),
    key: readFile(parametres.keyFile)
})

module.exports = { mqttClient };