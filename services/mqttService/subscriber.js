const { mqttClient } = require('./connecter');

const mqttSubscriber = (topic) => {

    mqttClient.on('connect', () => {

        console.log('Connected to broker')

        mqttClient.subscribe([topic], () => {
            console.log(`Subscribe to topic '${topic}'`)
        })
    })

    mqttClient.on('message', (topic, payload) => {
        console.log('Received Message:', topic, payload.toString())
    })

}

module.exports = { mqttSubscriber }