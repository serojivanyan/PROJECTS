const express = require("express");
const hospitalRouter = express.Router();
const Joi = require('joi');


const hospitalCtrl = require("../controllers/hospitalCtrl.js");
const validate = require("../validations/hospitalSchema.js");


hospitalRouter.get("/:id",
				validate.getHospital,
				hospitalCtrl.getHospital);

hospitalRouter.get("/:id/workers",
				validate.getHospitalWorkers,
				hospitalCtrl.getHospitalWorkers);

hospitalRouter.get("/:id/doctors",
				validate.getHospitalDoctors,
				hospitalCtrl.getHospitalDoctors);

hospitalRouter.get("/:id/patients",
				validate.getHospitalPatients,
				hospitalCtrl.getHospitalPatients);


hospitalRouter.post("/",
				validate.createHospital,
				hospitalCtrl.createHospital);

hospitalRouter.put("/:id",
				validate.updateHospitalBody,
				validate.updateHospitalParams,	
				hospitalCtrl.updateHospital);

hospitalRouter.delete("/:id",
				validate.removeHospital,
				hospitalCtrl.removeHospital);


module.exports = hospitalRouter;