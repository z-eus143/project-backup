const express = require('express')
const PropertyData = express.Router()
const PropertyModel = require('../models/Property')
const usermodel = require('../models/User')

PropertyData.post("/propertydata", async(req,res) => {
    try {
        const {Type,NoBedRoom,NoBathRoom,NoOccupancy,Description,Amenities,HouseRules,Additionalinfo,userId} = req.body;
        const existinguser = await usermodel.findOne({_id : userId})
        if(existinguser){
            const create = await PropertyModel.create({
                Type : Type,
                NoBedRoom : NoBedRoom,
                NoBathRoom : NoBathRoom,
                NoOccupancy : NoOccupancy,
                Description : Description,
                Amenities : Amenities,
                HouseRules : HouseRules,
                Additionalinfo : Additionalinfo,
                userId : userId
            });
            res.status(201).json({property : create})
        } else {
            res.status(400).json({"message" : "Wrong data"})
        }
    } catch (error) {
        res.status(400).json({"message" : "Error"})
        console.log(error)
    }
})

module.exports = PropertyData;
