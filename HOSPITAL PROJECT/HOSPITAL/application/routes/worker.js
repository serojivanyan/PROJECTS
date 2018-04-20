const express = require("express");
const workerRouter = express.Router();
const Joi = require('joi');


const workerCtrl = require("../controllers/workerCtrl.js");
const validate = require("../validations/workerSchema.js");


workerRouter.get("/:id", 
				validate.getWorker,
				workerCtrl.getWorker);
	
workerRouter.post("/",
				validate.createWorker,
				workerCtrl.createWorker);

workerRouter.put("/:id",
				validate.updateWorkerBody,
				validate.updateWorkerParams,
				workerCtrl.updateWorker);

workerRouter.delete("/:id",
				validate.removeWorker,
				workerCtrl.removeWorker);


module.exports = workerRouter;