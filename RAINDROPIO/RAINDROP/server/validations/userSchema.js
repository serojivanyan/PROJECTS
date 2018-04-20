const Joi = require("joi");
const validate = require("../validations/indexSchema.js");

const Validation = {};

Validation.getUser = function(req,res,next){
	let paramsSchema = {
		id:Joi.string().required()
	};
	validate(req.params,paramsSchema,next);
};
Validation.createUser = function(req,res,next){
	let bodySchema = {
		name:Joi.string().required(),
		email:Joi.string().required(),
		id:Joi.number().required()
	};
	validate(req.body,bodySchema,next);
};
Validation.updateUserParams = function(req,res,next){
	let paramsSchema = {
		id:Joi.string().required(),
	};
	validate(req.params,paramsSchema,next);
};
Validation.updateUserBody = function(req,res,next){
	let bodySchema = {
		name:Joi.string(),
		email:Joi.string()
	};
	validate(req.body,bodySchema,next);
};
Validation.removeUser = function(req,res,next){
	let paramsSchema = {
		id:Joi.string().required(),
	};
	validate(req.params,paramsSchema,next);
};
module.exports = Validation;