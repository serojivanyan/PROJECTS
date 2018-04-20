const express = require("express");
const patientRouter = express.Router();
const Joi = require('joi');


const patientCtrl = require("../controllers/patientCtrl.js");
const validate = require("../validations/patientSchema.js");


patientRouter.get("/:id",
				validate.getPatient,
				patientCtrl.getPatient);

patientRouter.post("/",
				validate.createPatient,
				patientCtrl.createPatient);

patientRouter.put("/:id",
				validate.updatePatientBody,
				validate.updatePatientParams,
				patientCtrl.updatePatient);

patientRouter.delete("/:id",
				validate.removePatient,
				patientCtrl.removePatient);


module.exports = patientRouter;