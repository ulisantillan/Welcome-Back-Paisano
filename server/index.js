var express = require('express');
var bodyParser = require('body-parser');
var database = require('../database/index.js')

var app = express();

	app.use(express.static(__dirname + '/../client/dist'));

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
		database.displayResources(function(err, data){
			if(err){
				res.sendStatus(500);
			}else{
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
