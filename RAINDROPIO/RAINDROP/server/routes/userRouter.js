const express = require("express");
const userRouter = express.Router();
const Joi = require("joi");


const userCtrl = require("../controllers/userCtrl.js");
const validate = require("../validations/userSchema.js");


userRouter.get("/:id",
				validate.getUser,
				userCtrl.getUser);

userRouter.post("/",
				validate.createUser,
				userCtrl.createUser);

userRouter.put("/:id",
				validate.updateUserParams,
				validate.updateUserBody,
				userCtrl.updateUser);

userRouter.delete("/:id",
				validate.removeUser,
				userCtrl.removeUser);


module.exports = userRouter;