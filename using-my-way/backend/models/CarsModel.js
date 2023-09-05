const mongoose = require('mongoose');

const carSchema = mongoose.Schema({
    Make:{
        type:String,
        required:true
    },
    Model:{
        type:Number,
        required:true
    },
    CurrentOwner:{
        type:String,
        required:true
    },
    PreviousOwner:{
        type:String,
        required:false,
        default:"unknown"
    },
    CurrentAddress:{
        type:String,
        required:true,
    }
})

module.exports = mongoose.model('testCarsInventory', carSchema)