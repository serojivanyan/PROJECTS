const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
  };

var UserSchema = new mongoose.Schema({
    fullname :{
        type:String,

        
    },
    email:{
        type:String,
        lowercase:true,
        validate: [validateEmail, 'invalidate email'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password:{
        type:String,
        
    }
});


// UserSchema.statics.authenticate = function(email,callback){
//     User.findOne({email:email})
//     .exec(function(err,user){
//         if(err){
//             return  callback(err);
//         }
//        return callback(user)
//     })
// }

//authenticate input against database
// UserSchema.statics.authenticate = function (email, password, callback) {
//     User.findOne({ email: email })
//       .exec(function (err, user) {
//         if (err) {
//           return callback(err)
//         } else if (!user) {
//           var err = new Error('User not found.');
//           err.status = 401;
//           return callback(err);
//         }
//         bcrypt.compare(password, user.password, function (err, result) {
//           if (result === true) {
//             return callback(null, user);
//           } else {
//             return callback();
//           }
//         })
//       });
//   }


//authenticate input against database
UserSchema.statics.authenticate = function (email,  callback) {
    User.findOne({ email: email })
      .exec(function (err, user) {
        if (err) {
          return callback(err)
        } else if (!user) {
          var err = new Error('User not found.');
          err.status = 401;
          return callback(err);
        }else {
            return callback();
          }
    
      });
  }



var User  = mongoose.model("User",UserSchema);
module.exports = User;