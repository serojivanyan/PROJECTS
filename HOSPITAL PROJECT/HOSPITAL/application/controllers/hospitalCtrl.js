const Controller = {};

const HospitalModel = require("../models/hospitalModel.js");
const DoctorModel = require("../models/doctorModel.js");
const WorkerModel = require("../models/workerModel.js");
const PatientModel = require("../models/patientModel.js");


Controller.getHospital = function(req,res){
	let hospitalId = req.params.id;
	HospitalModel.findHospitals(hospitalId,function(err,result) {
		if(err){
			return res.send("err to get a Workers" + err)
		};
		res.send(result);

	});

};

Controller.getHospitalWorkers = function(req,res){
	let hospitalId = req.params.id;
	WorkerModel.findWorkers(hospitalId,function(err,result){
		if(err){
			return res.send("err to get a Workers" + err)
		};
		res.send(result);
	});
	
};

Controller.getHospitalDoctors = function(req,res){
	let hospitalId = req.params.id;
	DoctorModel.findDoctors(hospitalId,function(err,result){
		if(err){
			return res.send("err to get a Doctors" + err)
		};
		res.send(result);
	});
};

Controller.getHospitalPatients = function(req,res){
	let hospitalId = req.params.id;
	PatientModel.findPatients(hospitalId,function(err,result){
		if(err){
			res.send("err to get a Patients")
		};
		res.send(result);		
	});
};

Controller.createHospital = function(req,res){
	console.log("Created Hospital");
	let hospitalBody = req.body;
	console.log("reqBody "+ JSON.stringify(req.body));

	let hospital = new HospitalModel(hospitalBody);
	console.log("Create hospital"+hospital.name)
	hospital.save(function(err,hospital){
		if(err){
			return console.log("err");
		};
		res.send(hospital);
		
	});
};

Controller.updateHospital = function(req,res){
	let hospitalBody = req.body;
	let hospitalId = req.params.id
	HospitalModel.findByIdAndUpdate(hospitalId,hospitalBody, function(err, hospital){
  		if(err){
  			res.send(err);
  		};
  		res.send(hospital)	
	});

};

Controller.removeHospital = function(req,res){
	let hospitalId = req.params.id;
	HospitalModel.findByIdAndRemove(hospitalId,function(err,hosp){
		if(err){
			return res.send("err",err);
		};
		res.send({status:1,id:hospitalId});
	});
	
};



module.exports = Controller;