var express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),

    app = express(),
    port = 8081,

    routes = require('./routes');

app.use(express.static('client/build/html'));
app.use('/build', express.static('client/build'));
app.use('/vendors', express.static('client/vendors'));

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);

app.listen(port, function() {
    console.log('server started at http://localhost:' + port);
});

