const Joi = require('joi');
const validate = require("../validations/indexSchema.js");

const Validation = {};

Validation.getPost = function(req,res,next){
	let paramsSchema = {
		id:Joi.string().required()
	};
	validate(req.params,paramsSchema,next);
};

Validation.createPost = function(req,res,next){
	let bodySchema = {
		suggestion:Joi.string().alphanum().min(3).max(30),
		description:Joi.string().alphanum().min(3).max(30),
		
	};
	validate(req.body,bodySchema,next);
};

Validation.updatePostParams = function(req,res,next){
	let paramsSchema = {
		id:Joi.string().required()
	};
	validate(req.body,paramsSchema,next)
}

Validation.updatePostBody = function(req,res,next){
	let bodySchema = {
		suggestion:Joi.string().alphanum().min(3).max(30),
		lastname:Joi.string().alphanum().min(3).max(30),
		
	};
	validate(req.body,bodySchema,next);
};


Validation.removePost = function(req,res,next){
	let paramsSchema = {
		id:Joi.string().required()
	};
	validate(req.params,paramsSchema,next)
	
};

module.exports = Validation;