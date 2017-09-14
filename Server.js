var router = require('./server/routes/asyncRouter.js');

var express =require("express");
var app =express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));


app.use('/async',router); 

app.listen(4040);