const mongoose = require("mongoose");

const doctorSchema = mongoose.Schema({
	name:String,
	lastname:String,
	age:Number,
	specialization:String,
	experience:Number,
	hospitalId:String
});
// doctorSchema.statics.findDoctors   it is a callback function
doctorSchema.statics.findDoctors = function (docId,callBack){
	let querry = {doctorId:docId};
	return this.find(querry,callBack);
};

const Doctor = mongoose.model("Doctor",doctorSchema);


module.exports = Doctor;
