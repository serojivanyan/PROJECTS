const Controller = {};
const PostModel = require("../models/postModel.js");


Controller.getPost = function(req,res){
	let postId = req.params.id;
	PostModel.findPosts(postId,function(err,post){
		if(err){
			return res.send("err to get a post" + err);
		};
		console.log("your post by ID:dsaadsaasdsada");
		console.log(post);
		res.send(post);
	});

};

Controller.createPost = function(req,res){
	console.log("Created Post");
	let postBody = req.body;
	console.log("reqBody "+ JSON.stringify(req.body));
	
	let post = new PostModel(postBody);
	post.save(function(err,post){
		if(err){
			return res.send("Err ",err);
		};
		res.send(post);
	});


};

Controller.updatePost = function(req,res){
	let postBody = req.body;
	let postId=req.params.id;
	PostModel.findByIdAndUpdate(postId,postBody,function(err,post){
		if(err){
			return console.log(err);
		};
		res.send(post)
	})

};

Controller.removePost = function(req,res){
	let postId = req.params.id;
	PostModel.findByIdAndRemove(postId,function(err,post){
		if(err){
			return console.log(err);

		};
		res.send({status:1,id:postId})
	})
	
};

module.exports = Controller;