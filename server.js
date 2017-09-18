var router = require('./server/routes/asyncRouter.js');

var express =require("express");
var app =express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static('client', {index: 'views/index.html'}));



app.use('/async',router); 

app.listen(4040,function(){
	console.log("connected to server");
});