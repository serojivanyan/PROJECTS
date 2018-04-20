
const express = require("express");
const router = express.Router();

var User = require("../models/userModel.js");

  //POST route for updating data
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
              return res.send('<h3 color= "violet">Name: </h3>' + user.fullname + '<h3  color= "violet">Mail: </h3>' + user.email)          
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

  
module.exports=router;