const express = require("express");
const router = express.Router();

var LangSiteModel = require("../models/langSiteModel.js");
var TourModel = require("../models/tourModel.js");
// var TypeModel =require("../models/typeModel.js")


// router.get("/",function(req,res,next){
//     res.redirect("/site/en")
// })
// getting all ru tags
router.get("/",function(req,res,next){
    LangSiteModel.find({langId:"arm"},function (err,lang) {
        if(err){
            console.log(err);
            return res.send(err)
        }
        console.log(lang)
        res.send(lang[0].arm);

    })
});
// getting all en tags
router.get("/en",function(req,res,next){
    LangSiteModel.find({langId:"en"},function (err,lang) {
        if(err){
            console.log(err);
            return res.send(err)
        }

        res.send(lang[0].en);

    })
});

// getting all arm tags
router.get("/ru",function(req,res,next){
    LangSiteModel.find({langId:"ru"},function (err,lang) {
        if(err){
            console.log(err);
            return res.send(err)
        }
        res.send(lang[0].ru);

    })
});

//post langSite


router.post("/",function(req,res,next){
    var data = req.body;
    var siteLang = new LangSiteModel(data);
    siteLang.save(function(err,obj){
        if(err){
            console.log(err);
            return res.send(err)
        }else{
            res.send(obj)
        }
    })
})

//get all arm hotOffers turs
router.get("/offers",function(req,res,next){
    TourModel.find({typeModel:"hotoffers"},function (err,tours) {
        if(err){
            console.log(err);
            return res.send(err)
        }
        res.send(tours);

    })
})
//get all incoming turs
router.get("/incoming",function(req,res,next){
    TourModel.find({typeModel:"incoming"},function (err,tours) {
        if(err){
            console.log(err);
            return res.send(err)
        }
        res.send(tours);

    })
})

//get all upcoming turs
router.get("/upcoming",function(req,res,next){
    TourModel.find({typeModel:"upcoming"},function (err,tours) {
        if(err){
            console.log(err);
            return res.send(err)
        }
        res.send(tours);

    })
})
//get all cargo turs
router.get("/cargo",function(req,res,next){
    TourModel.find({typeModel:"cargo"},function (err,tours) {
        if(err){
            console.log(err);
            return res.send(err)
        }
        res.send(tours);

    })
})
//get all cargo turs
router.get("/news",function(req,res,next){
    TourModel.find({typeModel:"news"},function (err,tours) {
        if(err){
            console.log(err);
            return res.send(err)
        }
        res.send(tours);

    })
})




router.post("/",function(req,res,next){
    var data = req.body;
    var siteLang = new LangSiteModel(data);
    siteLang.save(function(err,obj){
        if(err){
            console.log(err);
            return res.send(err)
        }else{
            res.send(obj)
        }
    })
})



module.exports = router;
