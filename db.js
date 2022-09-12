const mongoose = require("mongoose");

function connectDB() {
    mongoose.connect('mongodb+srv://spacezero:SpaceZero@cluster0.fjhsa.mongodb.net/spacezero-cars', {useUnifiedTopology: true , useNewUrlParser: true})

    const connection = mongoose.connection

    connection.on('connected', () => {
        console.log('Mongo DB conncection successful')
    })
    connection.on('error', () => {
        console.log('Mongo DB conncection error')
    })
}

connectDB()
module.exports = mongoose