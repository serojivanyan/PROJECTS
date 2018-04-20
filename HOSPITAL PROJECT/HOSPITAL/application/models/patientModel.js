const mongoose = require("mongoose");

const patientSchema = mongoose.Schema({
	name:String,
	lastname:String,
	age:Number,
	disease:String,
	DateOfTreatment:Number,
	hospitalId:String
});


patientSchema.statics.findPatients = function (patId,callBack){
	let querry = {patientId:patId};
	return this.find(querry,callBack);
};

const Patient = mongoose.model("Patient",patientSchema);


module.exports = Patient;
