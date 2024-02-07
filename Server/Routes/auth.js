const express = require("express")
const authRouter = express.Router();
const userModel = require('../models/User')
const jwt = require('jsonwebtoken')
const SECRET_KEY = "RentalArc"

authRouter.post("/authanticate", async (req,res) => {
    const {email} = req.body;
    const existingUser = await userModel.findOne({email : email});
    if(existingUser)
    {
        const token = jwt.sign({firstname : existingUser.firstname, lastname : existingUser.lastname, id : existingUser._id, image : existingUser.image, email : existingUser.email}, SECRET_KEY)
        res.status(201).json({user: existingUser, token: token})
    } else {
        res.status(400).json({"message" : "Create Account"})
    }
})

module.exports = authRouter;