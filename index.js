const { mqttPublisher } = require('./services/mqttService/publisher');
const { mqttSubscriber } = require('./services/mqttService/subscriber');

const topic = 'HUB/TAIIB1030432';

//mqttPublisher(topic, 'nodejs mqtt coucou');
mqttSubscriber(topic);