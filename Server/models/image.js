const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imageSchema = new Schema({
  images: {
    type: [String], 
    required: true 
    },
    propertyId : {
        type : mongoose.Schema.Types.ObjectId,
        required : true
    }
} , {timestamps : true})

const imageModel = mongoose.model('image', imageSchema);

module.exports = imageModel;
