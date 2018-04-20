const WorkerModel = require("../models/workerModel.js");
const Controller = {};


Controller.getWorker = function(req, res){
	let workerId = req.params.id;
	WorkerModel.findWorkers(workerId,function(err,worker){
		if(err){
			return console.log(err);
		};
		res.send(worker);
	});
		
};

Controller.createWorker = function(req, res){
	console.log("Created Worker");
	let workerBody = req.body;
	let worker = new WorkerModel(workerBody);
	worker.save(function(err,worker){
		if(err){
			return res.send('error ' + err);
		}
		res.send(worker);
	}); 
	
};

Controller.updateWorker = function(req,res){
	let workerBody = req.body;
	let workerId = req.params.id;
	WorkerModel.findByIdAndUpdate(workerId,workerBody,function(err,worer){
		if(err){
			return console.log(err);
		};
		res.send(worker);
	});

};

Controller.removeWorker = function(req,res){
	let workerId = req.params.id;
	WorkerModel.findByIdAndUpdate(workerId,function(err,worker){
		if(err){
			return console.log(err);
		};
		res.send({status:1,id:workerId})
	});
};

module.exports = Controller;
