const express = require("express");
const commentsRouter = express.Router();

commentsRouter.get("/raindropio.canny.io/feature-requests/p",function(req,res,next){
	res.send("Index Page");
});

module.exports = commentsRouter;