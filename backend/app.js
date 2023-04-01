const express = require('express');
const mongoose = require('mongoose');
const config = require('./config.js');
const cors = require('cors');
const morgan = require('morgan');



// Connecting to database
mongoose.connect(config.db.url, {dbName: config.db.name})
    .then(async () => {
        console.log("Connected to database");
    })
    .catch(err => {
        console.log(err.message);
    });

const app = express();


// Routes which should handle requests
const userRoutes = require('./routes/user');
const gameRoutes = require('./routes/forum');
const forumRoutes = require('./routes/forum');
app.use('/user', userRoutes);
app.use('/game', gameRoutes);
app.use('/forum', forumRoutes);

const bodyParser = require('body-parser');
app.use(bodyParser.json());


// Logger of requests
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

// server-side
const http = require('http').Server(app);
const io = require("socket.io")(http, {
    cors: {
        //URL of the frontend
        origin: config.serverReactUrl,
        methods: ["GET", "POST"]
    }
});

http.listen(8000, () => {
    console.log('Server is running on port 8000');
});

