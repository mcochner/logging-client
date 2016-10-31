var express = require('express');

var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();
var counter = 0;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/',function(req, res, next){

    var headers = JSON.stringify(req.headers);
    var body = JSON.stringify(req.body);
    var method = JSON.stringify(req.method);
    var time = new Date().toUTCString();
    var url = req.url;

    var resultMessage = counter + ": " + time + ": " + "\n Method: " + method + " " +"\n Url: " + url  +"\n Headers: " + headers + "\n Body: " + body + "\n\n";
    res.send(resultMessage);
    console.log(resultMessage);

    counter += 1;
    next();
});

module.exports = app;
