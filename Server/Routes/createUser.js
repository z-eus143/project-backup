const express = require('express')
const userDate = express.Router()
const userModel = require('../models/User')
const jwt = require('jsonwebtoken')
const SECRET_KEY = "RentalArc"

userDate.post("/createDate", async(req,res) => {
    const {firstname, lastname, email, mobileno, image} = req.body.user;
    const existingUser = await userModel.findOne({email : email})
    if(!existingUser){
    const result = await userModel.create({
        firstname : firstname,
        lastname : lastname,
        email : email,
        image : image,
        mobileno : mobileno
    });
    const token = jwt.sign({firstname : result.firstname, lastname : result.lastname, id : result._id, image : result.image, email : result.email}, SECRET_KEY)
    res.status(201).json({user: result, token: token})
}else{
        res.status(400).json({"message" : "user Already Exist"})
    }
    
})

module.exports = userDate;