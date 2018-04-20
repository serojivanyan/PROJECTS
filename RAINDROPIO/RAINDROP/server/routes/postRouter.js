const express = require("express");
const postRouter = express.Router();
const Joi = require("joi");


const postCtrl = require("../controllers/postCtrl.js");
const validate = require("../validations/postSchema.js");


postRouter.get("/:id",
				validate.getPost,
				postCtrl.getPost);

postRouter.post("/",
				validate.createPost,
				postCtrl.createPost);

postRouter.put("/:id",
				validate.updatePostParams,
				validate.updatePostBody,
				postCtrl.updatePost);

postRouter.delete("/:id",
				validate.removePost,
				postCtrl.removePost);


module.exports = postRouter;