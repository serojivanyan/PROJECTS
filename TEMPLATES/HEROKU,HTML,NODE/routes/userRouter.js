
const express = require("express");
const router = express.Router();

var User = require("../models/userModel.js");

  //POST route for creating data
router.post("/",function(req,res,next){
  if(req.body.fullname &&req.body.email &&req.body.password){
      User.findOne({fullname:req.body.fullname},function(err,user){
        if(err){
          console.log(err)
        }else if(user){
          var err = new Error();
          err.body = "The User are already exist"
          console.log(err)
        res.send(err)
        }else{
          var userData = {
                    fullname: req.body.fullname,
                    email: req.body.email,
                    password: req.body.password,
                  }
          var user = new User(userData);
          user.save(function(err,user){
            if(err){
             console.log(err);
             res.send(err)
             return next(err)
            }else {
              // return res.send('<h3 color= "violet">Name: </h3>' + user.fullname + '<h3  color= "violet">Mail: </h3>' + user.email)          
            res.redirect("logUser.html")
            }
          })

        }
      })

  }else {
    var err = new Error('All fields required.');
    err.status = 400;
    return next(err);
  }
})

 //POST route for login user
router.post("/log",function(req,res,next){
  // if(req.body.logemail&& req.body.password){
  // User.authenticate(req.body.logemail,function(err,user){
  //   if (error || !user) {
  //     var err = new Error('Wrong email or password.');
  //     err.status = 401;
  //   res.send(err);
  //   console.log(err)
  //   return next()
  //   } else {
  //     console.log(user)
  //     return res.send(user);
  //   }
  // })

  
  // }

  if (req.body.logemail && req.body.logpassword) {
    User.authenticate(req.body.logemail, function (error, user) {
      if (error || !user) {
        var err = new Error('Wrong email or password.');
        err.status = 401;
        console.log(err)
        return next(err);
      } else {

        return res.redirect('/profile');
      }
    });
  } else {
    var err = new Error('All fields required.');
    err.status = 400;
    return next(err);
  }
})



  
module.exports=router;