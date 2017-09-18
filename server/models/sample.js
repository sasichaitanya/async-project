var mongoose = require ('mongoose');

var schema = mongoose.Schema;

var config=require('../config/config.js')

var db = mongoose.connect(config.mongo.url);

var StudentSchema = new schema({
		name:String,
		age:{type: Number, required: true},
		location:{
			region:String,
			city:String,
			pin:Number

		},
		gender:Boolean
	});

	var StudentCollection = mongoose.model("students",StudentSchema);

module.exports = StudentCollection