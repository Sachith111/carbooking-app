

const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({

    name: {type:String , required:true},
    image: {type:String , required:true},
    capacity: {type:Number , required:true},
    name: {type:String , required:true},
    booksTimeSlots : [
        {
        from : {type:String , required: true},
        to: {type:String, required:true}
    }
],
    rentPerHour : {type: Number, required: true}

}, 
)

const carModel = mongoose.model('cars', carSchema)
module.exports = carModel