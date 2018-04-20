const express = require("express");
const router = express.Router();
const AboutModel = require("../models/aboutModel.js")




// getting all  about
router.get("/",function(req,res,next){
    AboutModel.find({},function (err,about) {
        if(err){
            console.log(err);
            return res.send(err)
        }
      
        res.send(about);

    })
});

// getting all  about
router.post("/",function(req,res,next){
    var data = req.body;
    var about = new AboutModel(data);
    about.save(function (err,about) {
        if(err){
            console.log(err);
            return res.send(err)
        }
      
        res.send(about);

    })
});

 

//ubdate about info
router.put("/:id",function(req,res,next){
var aboutId = req.params.id;
var data= req.body;

AboutModel.findByIdAndUpdate(aboutId,data,function(err,about){
    if(err){
        console.log(err);
        return res.send(about);     
         };
         res.send(about)
     });
 })

 //delete about
router.delete("/:id",function(req,res,next){
    var aboutId = req.params.id;
    AboutModel.findByIdAndRemove(tourId,function(err,tour){
        if(err){
            console.log(err);
            res.send(err)
        }
        res.send({status:1,id:tourId})

    })
});


module.exports = router