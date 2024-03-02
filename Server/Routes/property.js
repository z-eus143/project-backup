const express = require('express')
const PropertyData = express.Router()
const PropertyModel = require('../models/Property')
const usermodel = require('../models/User')

PropertyData.post("/propertydata", async(req,res) => {
    try {
        const {Property,
        Bedrooms,
        Bathrooms,
        Occupancy,
        Description,
        Amenities,
        Rules,
        Additional} = req.body.formData;
        const id = req.body.id;
        const existinguser = await usermodel.findOne({_id : id})
        if(existinguser){
            const result = await PropertyModel.create({
                Type : Property,
                NoBedRoom : Bedrooms,
                NoBathRoom : Bathrooms,
                NoOccupancy : Occupancy,
                Description : Description,
                Amenities : Amenities,
                HouseRules : Rules,
                Additionalinfo : Additional,
                userId : id
            });
            res.status(201).json({"message" : "Created" , id : result._id})
        } else {
            res.status(400).json({"message" : "Wrong data"})
        }
    } catch (error) {
        res.status(400).json({"message" : "Error"})
        console.log(error)
    }
})


PropertyData.get("/properties", async(req,res) => {
    try {
        const properties = await PropertyModel.find()
        res.status(200).json({properties})
    } catch (error) {
        res.status(400).json({"message" : "Error"})
    }
})

PropertyData.post("/property", async(req,res) => {
    try {
        const propertyid = await PropertyModel.find({_id : req.body.id})
        res.status(200).json({propertyid})
    } catch (error) {
        res.status(400).json({"message" : "Error"})
        console.log(error)
    }
})

module.exports = PropertyData;
