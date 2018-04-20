const Controller = {};
const DoctorModel = require("../models/doctorModel.js");
const HospitalModel  = require("../models/hospitalModel.js")


Controller.getDoctor = function(req,res){
	let doctorId = req.params.id;
	DoctorModel.findDoctors(doctorId,function(err,doctor){
		if(err){
			return console.log(err);
		};
		res.send(doctor);
	});

};
// Controller.getDoctors = function(req,res){
// 	let doctorBody = req.body;
// 	let doctor = new Doctor(doctorBody);
// 	doctor.save(function(err,doctor){
// 		if(err){
// 			return res.send(err);
// 		};
// 		res.send(doctor);


// 	})
// }

Controller.createDoctor = function(req,res){
	console.log("Created Doctor");
	let doctorBody = req.body;
	let doctor = new DoctorModel(doctorBody);
	doctor.save(function(err,doctor){
		if(err){
			return res.send("Err ",err);
		};
		res.send(doctor);
	});


};

Controller.updateDoctor = function(req,res){
	let doctorBody = req.body;
	let doctorId=req.params.id;
	DoctorModel.findByIdAndUpdate(doctorId,doctorBody,function(err,doctor){
		if(err){
			return console.log(err);
		};
		res.send(doctor)
	})

};

Controller.removeDoctor = function(req,res){
	let doctorId = req.params.id;
	DoctorModel.findByIdAndRemove(doctorId,function(err,Doctor){
		if(err){
			return console.log(err);

		};
		res.send({status:1,id:doctorId})
	})
	
};

module.exports = Controller;