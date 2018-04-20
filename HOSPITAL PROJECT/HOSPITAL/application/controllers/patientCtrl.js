const Controller = {};
const PatientModel = require("../models/patientModel.js");

Controller.getPatient = function(req,res){
	let patientId = req.params.id;
	PatientModel.findPatients(patientId,function(err,patient){
		if(err){
			return console.log(err);
		};
		res.send(patient);
	});

};

Controller.createPatient = function(req,res){
	console.log("Created Patient");
	let patientBody = req.body;
	let patient = new PatientModel(patientBody);
	patient.save(function(err,patient){
		if(err){
			return res.send("err",err);
		};
		res.send(patient);
	});

};

Controller.updatePatient = function(req,res){
	let patientBody = req.body;
	let patientId = req.params;
	PatientModel.findBiIdAndUpdate(patientId,patientBody,function(err,patient){
		if(err){
			return console.log(err);
		};
		res.send(patient)
	});
};

Controller.removePatient = function(req,res){
	let patientId = req.params.id;
	PatientModel.findByIdAndRemove(patientId,function(err,hospital){
		if(err){
			return console.log(err);
		};
		res.send({status:1,id:patientId});
	})
	
};

module.exports = Controller;
