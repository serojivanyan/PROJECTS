const Joi = require('joi');
const validate = require("../validations/indexSchema.js");

const Validation = {};

Validation.getPatient = function(req,res,next){
	let paramsSchema = {
		id:Joi.number().integer().required(),
	};
	validate(req.params,paramsSchema,next);
};

Validation.createPatient = function(req,res,next){
	let bodySchema = {
		name:Joi.string().alphanum().min(3).max(30).required(),
		lastname:Joi.string().alphanum().min(3).max(30).required(),
		age:Joi.number().integer().required(),
		disease:Joi.string().alphanum().min(3).max(30).required(),
		DateOfTreatment:Joi.number().integer().required(),
		hospitalId: Joi.string().min(3).max(30)

	};
	validate(req.body,bodySchema,next);
	
};

Validation.updatePatientBody = function(req,res,next){
	let bodySchema = {
		name:Joi.string().alphanum().min(3).max(30),
		lastname:Joi.string().alphanum().min(3).max(30),
		age:Joi.number().integer(),
	};
	validate(req.body,bodySchema,next);
};
Validation.updatePatientParams = function(req,res,next){
	let paramsSchema = {
		id:Joi.string().required
	};
	validate(req.body,paramsSchema,next)
}

Validation.removePatient = function(req,res,next){
	let paramsSchema = {
		id:Joi.number().integer().required(),
	};
	validate(req.params,paramsSchema,next);
};

module.exports = Validation;


