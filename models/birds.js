const mongoose = require("mongoose") 
const birdsSchema = mongoose.Schema({ 
 bird_name: String, 
 type: {
    type:String,
    minLength:3,
    maxLength:20
 },
 national_bird: {
     type:String,
     minLength:1,
     maxLength:20
 },
}) 
 
module.exports = mongoose.model("birds",birdsSchema) 