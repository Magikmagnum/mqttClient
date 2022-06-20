const { mqttPublisher } = require('./services/mqttService/publisher');
const { mqttSubscriber } = require('./services/mqttService/subscriber');

const topic = '/nodejs/mqtt';

mqttPublisher(topic, 'nodejs mqtt coucou');
mqttSubscriber(topic);