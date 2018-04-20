const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
  };

var UserSchema = new mongoose.Schema({
    fullname :{
        type:String,
        unique:true,
        
    },
    email:{
        type:String,
        unique:true,
        lowercase:true,
        validate: [validateEmail, 'invalidate email'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password:{
        type:String,
        
    }
});

var User  = mongoose.model("User",UserSchema);
module.exports = User;