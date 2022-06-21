// On instancie express
const app = require('express')();
// On cree le serveur HTTP; 
const serverHttp = require('http').createServer(app);
// On instancie le websoket http
const { Server } = require("socket.io");
const io = new Server(serverHttp);


// On ecoute l'evenement "connection" du socket.io, pour savoir si un utilisateur c'est connecté
io.on('connection', (socket) => {
    console.log('a user connected');

    // On ecoute l'evenement "disconnect" du socket.io, pour savoir si un utilisateur c'est déconnecté
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});


// On cree une route index
app.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html');
})


// On precise le port de reponse http sur le 3000
serverHttp.listen(3000, () => {
    console.log("j'ecoute le port 3000");
})









/*

const { mqttPublisher } = require('./services/mqttService/publisher');
const { mqttSubscriber } = require('./services/mqttService/subscriber');

const topic = '#';

mqttPublisher(topic, 'nodejs mqtt coucou');
mqttSubscriber(topic);

*/