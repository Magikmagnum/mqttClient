const { mqttClient } = require('./connecter');


const mqttPublisher = (topic, payload) => {
    mqttClient.on('connect', () => {
        setInterval(() => {
            mqttClient.publish(topic, payload, { qos: 0, retain: false }, (error) => {
                if (error) {
                    console.error(error)
                }
            })
            //console.log('Publisher started on ' + payload);
        }, 3000);
    })
}

module.exports = { mqttPublisher }