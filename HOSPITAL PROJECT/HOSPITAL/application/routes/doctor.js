const express = require("express");
const doctorRouter = express.Router();
const Joi = require("joi");


const doctorCtrl = require("../controllers/doctorCtrl.js");
const validate = require("../validations/doctorSchema.js");


doctorRouter.get("/:id",
				validate.getDoctor,
				doctorCtrl.getDoctor);

doctorRouter.post("/",
				validate.createDoctor,
				doctorCtrl.createDoctor);

doctorRouter.put("/:id",
				validate.updateDoctorBody,
				validate.updateDoctorParams,
				doctorCtrl.updateDoctor);

doctorRouter.delete("/:id",
				validate.removeDoctor,
				doctorCtrl.removeDoctor);


module.exports = doctorRouter;