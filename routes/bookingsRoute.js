const express = require('express');
const router = express.Router();
const Booking = require('../models/bookingModel');

router.post("/bookcar",async (req,res) => {

    req.body.transactionId = '1234'

    try {
        const newbooking = new Booking(req.body)
        await newbooking.save()
        res.send('your booking is successfull')
    }catch(error){
         return res.status(400).json(error);
    }


});

module.exports = router;