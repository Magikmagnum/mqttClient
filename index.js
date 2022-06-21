// On instancie express
const app = require('express')();
// On cree le serveur HTTP; 
const http = require('http').createServer(app);
// On instancie le websoket http
const io = require('socket.io')(http);





// On ecoute l'evenement "connection" de socket.io
io.on('connection', (socket) => {
    console.log(socket)
})

// On cree une route index
app.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html');
})


// On precise le port de reponse http sur le 3000
http.listen(3000, () => {
    console.log("j'ecoute le port 3000");
})


/*

const { mqttPublisher } = require('./services/mqttService/publisher');
const { mqttSubscriber } = require('./services/mqttService/subscriber');

const topic = '#';

mqttPublisher(topic, 'nodejs mqtt coucou');
mqttSubscriber(topic);

*/