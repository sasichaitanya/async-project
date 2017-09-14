var mongoose = require ('mongoose');

var schema = mongoose.Schema;

var db = mongoose.connect('mongodb://localhost:27017/test');

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