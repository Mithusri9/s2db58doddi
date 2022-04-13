const mongoose = require("mongoose") 
const birdsSchema = mongoose.Schema({ 
 name: String, 
 type: String, 
 national_bird: String 
}) 
 
module.exports = mongoose.model("birds", 
birdsSchema) 