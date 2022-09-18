const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({

    car: {type : mongoose.Schema.Types.ObjectId , ref:'cars'},
    user: {type : mongoose.Schema.Types.ObjectId , ref:'users'},
   
    totalHours : {type : Number},
    totalAmount : {type: Number},
    transactionId : {type : String},
    driverRequired : {type : Boolean},
    bookedTimeSlots : {
        from : {type : String},
        to : {type : String}
    } ,
},
    {timestamps : true}
)
const bookingModel = mongoose.model('bookings', bookingSchema)
module.exports = bookingModel