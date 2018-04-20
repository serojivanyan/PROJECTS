const mongoose = require("mongoose");

const hospitalSchema = mongoose.Schema({

	name:String,
	address:String,
	doctors:[],
	patients:[],
	workers:[]


	
});

hospitalSchema.statics.findHospitals = function (hosId,callBack){
	let querry = {_id:hosId};
	return this.find(querry,callBack);
};

const Hospital = mongoose.model("Hospital",hospitalSchema);


module.exports = Hospital;
