const express = require('express'),
      cors = require('cors'),
      morgan = require('morgan'),
      path = require('path'),
      mongoose = require('mongoose'),
      bodyParser = require('body-parser');

// require dotenv to populate environment variables
require('dotenv').config();

// load config
const config = require('config');

// use bluebird for mongoose promises
mongoose.Promise = require('bluebird');

// create express app
const app = express();

// port number
const port = process.env.PORT || 8080;

// use morgan logger except during testing
if (config.util.getEnv('NODE_ENV') !== 'test') {
    app.use(morgan('combined'));
}

// cors middleware
app.use(cors());

// set static folder
app.use(express.static(path.join(__dirname, 'client')));

// set up express app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// catchall redirect
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/index.html'));
});

// server start
const server = app.listen(port, () => {
    console.info('Server listening on port %s\n', port);
});
