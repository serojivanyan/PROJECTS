const Joi = require('joi');
const validate = require("../validations/indexSchema.js");


const Validation = {};


Validation.getWorker = function(req,res,next){
	let paramsSchema = {
		id: Joi.number().integer().required(),
    };
	validate(req.params,paramsSchema,next);
};
 
Validation.createWorker = function(req,res,next) {
	let bodySchema = { 
		name: Joi.string().alphanum().min(3).max(30).required(),
		lastname: Joi.string().alphanum().min(3).max(30).required(),
		age: Joi.number().integer().required(),
		role:Joi.string().required(),
		compensation:Joi.number().integer().required(),
		hospitalId: Joi.string().min(3).max(30)
	};
	validate(req.body,bodySchema,next);
};

Validation.updateWorkerBody = function(req,res,next){
	let bodySchema = {
		name:Joi.string().alphanum().min(3).max(30),
		lastname:Joi.string().alphanum().min(3).max(30),
		age:Joi.number().integer(),
	};
	validate(req.body,bodySchema,next);
};
Validation.updateWorkerParams = function(req,res,next){
	let paramsSchema = {
		id:Joi.string().required
	};
	validate(req.body,paramsSchema,next)
}

Validation.removeWorker = function(req,res,next){
	let paramsSchema = {
		id: Joi.number().integer().required()
	};
	validate(req.params,paramsSchema,next);
}

module.exports = Validation;