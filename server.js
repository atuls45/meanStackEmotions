const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
var morgan = require('morgan');

const app = express();
const port = 8000;

app.use(
    bodyParser.urlencoded({
        limit: '5mb',
        extended: true
    })
);

app.use(
    bodyParser.json()
);

app.use(
    morgan('dev')
);

app.use(cookieParser());

app.set('root', path.join(__dirname, './server'));
require('./routes')(app);
_listen();
_getConnection();

function _listen() {
    app.listen(port);
    console.info('Listening on port ' + port);
}

function _getConnection() {
    // connect to MongoDB
    mongoose.connect('mongodb://13.77.166.79:27017/task01')
        .then(() => console.log('connection succesful'))
        .catch((err) => console.error(err));
}
