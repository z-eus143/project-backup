const express = require("express")
const UserRouter = express.Router();
const userModel = require('../models/User')
const jwt = require('jsonwebtoken')

UserRouter.post("/User", async (req,res) => {
    try {
        const {id} = req.body;
        if (id) {
            const user = await userModel.findOne({ _id : id});
            res.status(201).json({user: user})
        } else {
            res.status(400).json({"message" : "Something went Wrong 1"})
        }
    } catch (error) {
        res.status(400).json({"message" : "Something went Wrong 2"})
    }
}) 

module.exports = UserRouter;