const express = require('express'),
      cors = require('cors'),
      morgan = require('morgan'),
      path = require('path'),
      mongoose = require('mongoose'),
      passport = require('passport'),
      bodyParser = require('body-parser');

// require dotenv to populate environment variables
require('dotenv').config();

// load config
const config = require('config');

// use bluebird for mongoose promises
mongoose.Promise = require('bluebird');

// create express app
const app = express();

// build db uri
let dbURI = 'mongodb://' + process.env.DB_USER + ':' + process.env.DB_PASSWORD + '@ds127802.mlab.com:27802/book-trading';

// change database uri if testing
if (config.util.getEnv('NODE_ENV') == 'test') {
    dbURI = 'mongodb://localhost:27017/booktradingtest';
}

// connect to the database
mongoose.connect(dbURI);

// on error
mongoose.connection.on('error', (err) => {
    console.info('Database error: ' + err);
});

// port number
const port = process.env.PORT || 8080;

// route variables
const users = require('./routes/users');

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

// passport middleware
app.use(passport.initialize());
app.use(passport.session());

// passport configuration file
require('./config/passport')(passport);

// routes
app.use('/api/users', users);

// catchall redirect
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/index.html'));
});

// server start
const server = app.listen(port, () => {
    console.info('Server listening on port %s\n', port);
});
