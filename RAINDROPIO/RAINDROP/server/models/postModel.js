const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
	suggestion:String,
	description:String,
	
});

PostSchema.statics.findPosts = function (posId,callBack){
	let querry = {_id:posId};
	return this.find(querry,callBack);
};

const Post = mongoose.model("Post",PostSchema);


module.exports = Post;