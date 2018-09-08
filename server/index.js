var express = require('express');
var bodyParser = require('body-parser');
var database = require('../database/index.js')

var app = express();

	console.log("dirname ", __dirname + '/public')
	app.use(express.static(__dirname + '/../public'));

	app.get('/sources', function(req, res){
		database.selectAll(function(err, data){
			if(err) {
				res.sendStatus(500);
			}else{
				res.json(data);
			}
		});
	});

	app.get('/resources', function(req, res){
		console.log('this is the resources ');
		database.displayResources(function(err, data){
			if(err){
				console.log('ERROR HERE');
				console.log(err)
				res.sendStatus(500);
			}else{
				console.log('RESULTS HERE');
				res.json(data);
			}
		});
	});

	app.get('/about', function(req,res){
		database.displayTeamMembers(function(err, data){
			if(err){
				res.sendStatus(500);
			}else{
				res.json(data);
			}
		});
	});

	app.listen(3000, function() {
  console.log('listening on port 3000!');
});
