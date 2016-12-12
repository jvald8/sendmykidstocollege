require(`nodejs-dashboard`);
require(`dotenv`).config();
// node dashboard, runs with 'npm dev'

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var path = require('path');

var _ = require('lodash');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var call = require('./call');

var port = process.env.PORT || 8080;

app.use(express.static('public/dist'));

// let's send the app file if loggedin
app.get('/', function(req, res, next) {
  res.sendFile(path.resolve('public/dist/index.html'));
});

var router = express.Router();

router.use(function(req, res, next) {
	console.log('something is happening');
	next();
})

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// api calls -- Gets
//router.get('/getDog/:dogId', call.getDog);


app.use('/api', router);

app.listen(port);
console.log(`Magic happens on port ${port}`);





