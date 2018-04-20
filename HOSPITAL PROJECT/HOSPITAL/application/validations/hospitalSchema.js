const Joi = require('joi');
const validate = require("../validations/indexSchema.js");

const Validation = {};

Validation.getHospital = function(req,res,next){
	let paramsSchema = {
		id:Joi.string().required()
	};
	validate(req.params,paramsSchema,next);
};

Validation.getHospitalWorkers = function(req,res,next){
	let paramsSchema = {
		id:Joi.string().required()
	};
	console.log(req.params);
	validate(req.params,paramsSchema,next);
};

Validation.getHospitalDoctors = function(req,res,next){
	let paramsSchema = {
		id:Joi.string().required()
	};
	console.log(req.params);
	validate(req.params,paramsSchema,next);
};

Validation.getHospitalPatients = function(req,res,next){
	let paramsSchema = {
		id:Joi.string().required()
	};
	console.log(req.params);
	validate(req.params,paramsSchema,next);
};


Validation.createHospital = function(req,res,next){
	let bodySchema = {
		name:Joi.string().min(3).max(30),
		address:Joi.string().min(3).max(30),
		doctors:Joi.array(),
		patients:Joi.array(),
		workers:Joi.array()	
	};
	validate(req.body,bodySchema,next);
};

Validation.updateHospitalBody = function(req,res,next){
	let bodySchema = {
		name:Joi.string().alphanum().min(3).max(30),
		address:Joi.string().alphanum().min(3).max(30),
		doctors:Joi.array(),
		patients:Joi.array(),
		workers:Joi.array()	

	};

	validate(req.body,bodySchema,next);
};

Validation.updateHospitalParams = function(req,res,next){
	let paramsSchema = {
		id:Joi.string().required()
	};

	validate(req.params,paramsSchema,next);
};

Validation.removeHospital = function(req,res,next){
	let paramsSchema = {
		id:Joi.string().required()
	};
	validate(req.params,paramsSchema,next);
};

module.exports = Validation;

