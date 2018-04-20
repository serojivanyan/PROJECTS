const Joi = require('joi');

module.exports = function(data,schema,next){
	let result = Joi.validate(data,schema);
	if(result.error){
		next("Error");	
	}
	console.log(result);
	next();	
};