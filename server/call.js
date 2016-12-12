require('dotenv').config();
// require the .env variables

var key = process.env.KEY,
secret = process.env.SECRET;

var fs = require(`fs`),
request = require(`superagent`),
moment = require(`moment`),
_ = require('lodash');

module.exports.getDogs = function(req, res) {
	//console.log(req.body)
	var zipCode = req.body.user[0].location;
	petfinder.pet.find(zipCode, {output: 'basic', count: 30}).then(function(dogIds) {
		console.log(dogIds.map(function(x) {return parseInt(x.id)}));
		res.json({res: dogIds})
	}).catch(function (err) {
		console.log(`Error: ${err.message}`)
	})
}