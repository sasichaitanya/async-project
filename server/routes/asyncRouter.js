var getSeries = require('../modules/asyncSeries.js');
var getParallel = require('../modules/asyncParallel.js');

var express = require('express');
var router = express.Router();

router.get("/series",function(req,res){
	getSeries(function(result){
		res.json(result);
	})
});

router.get("/parallel",function(req,res){
	getParallel(function(result){
		res.json(result);
	})
});


module.exports=router;