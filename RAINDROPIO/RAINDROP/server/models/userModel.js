const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
	name:String,
	email:String,
	// status:Boolean,
	id:Number
});
UserSchema.statics.findUsers = function (userId,callBack){
	let querry = {_id:userId};
	return this.find(querry,callBack);
};
var User = mongoose.model("User",UserSchema);
module.exports = User;