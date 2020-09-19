const http = require('http');
const mongoose = require('mongoose');
const App = require('./app');

require('dotenv').config();

const PORT = process.env.PORT || 5000;
const HOST = '127.0.0.1';

const httpServer = http.createServer(App());

httpServer.on('listening', () => console.log(`Server has been started on ${HOST} ${PORT}`));

// Conncting to the mongodb
mongoose
    .connect(
        process.env.MONGO_URI, 
        { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        // Listen server
        httpServer.listen(PORT, HOST);
    })
    .catch(err => {
        console.log(err);
    });