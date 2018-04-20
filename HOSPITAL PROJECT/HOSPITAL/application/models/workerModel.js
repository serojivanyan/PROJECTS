const mongoose = require("mongoose");

const workerSchema = mongoose.Schema({
	name: String,
	lastname:String,
	age:Number,
	role:String,
	comensation:Number,
	hospitalId:String
});

workerSchema.statics.findWorkers = function(workId,cb){
	let query = {workerId: workId};
	return this.find(query,cb);
}

const Worker = mongoose.model("Worker",workerSchema);

module.exports = Worker;