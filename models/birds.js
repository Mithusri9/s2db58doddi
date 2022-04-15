const mongoose = require("mongoose") 
const costumeSchema = mongoose.Schema({ 
 bird_name: String, 
 type: String, 
 national_bird: String
}) 
 
module.exports = mongoose.model("birds", 
costumeSchema) 