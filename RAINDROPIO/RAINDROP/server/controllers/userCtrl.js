const Controller = {};
const UserModel = require("../models/userModel.js");


Controller.getUser = function(req,res){
	let userId = req.params.id;
	UserModel.findUsers(userId,function(err,user){
		if(err){
			return res.send("err to get a User" + err);
		};
		console.log("your User by ID:")
		res.send(user);
	});

};

Controller.createUser = function(req,res){
	console.log("Created User");
	let userBody = req.body;
	console.log("reqBody "+ JSON.stringify(req.body));
	
	let user = new UserModel(userBody);
	user.save(function(err,user){
		if(err){
			return res.send("Err ",err);
		};
		res.send(user);
	});

};

Controller.updateUser = function(req,res){
	let userBody = req.body;
	let userId=req.params.id;
	UserModel.findByIdAndUpdate(userId,userBody,function(err,user){
		if(err){
			return console.log(err);
		};
		res.send(user)
	})

};

Controller.removeUser = function(req,res){
	let userId = req.params.id;
	UserModel.findByIdAndRemove(userId,function(err,user){
		if(err){
			return console.log(err);

		};
		res.send({id:userId})
	})
	
};

module.exports = Controller;