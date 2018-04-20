const Joi = require('joi');
const validate = require("../validations/indexSchema.js");

const Validation = {};

Validation.getDoctor = function(req,res,next){
	let paramsSchema = {
		id:Joi.string().required
	};
	validate(req.params,paramsSchema,next);
};

Validation.createDoctor = function(req,res,next){
	let bodySchema = {
		name:Joi.string().alphanum().min(3).max(30),
		lastname:Joi.string().alphanum().min(3).max(30),
		age:Joi.number().integer(),
		specialization:Joi.string().alphanum().min(3).max(30),
		experience:Joi.number().integer(),
	};
	validate(req.body,bodySchema,next);
};

Validation.updateDoctorBody = function(req,res,next){
	let bodySchema = {
		name:Joi.string().alphanum().min(3).max(30),
		lastname:Joi.string().alphanum().min(3).max(30),
		age:Joi.number().integer(),
	};
	validate(req.body,bodySchema,next);
};
Validation.updateDoctorParams = function(req,res,next){
	let paramsSchema = {
		id:Joi.string().required
	};
	validate(req.body,paramsSchema,next)
}

Validation.removeDoctor = function(req,res,next){
	let paramsSchema = {
		id:Joi.number().integer().required(),
	};
	validate(req.params,paramsSchema,next)
	
};

module.exports = Validation;



