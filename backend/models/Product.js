const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    //array of elements
    name: {
        required: true,
        type: String
    },
    price: {
        required: true,
        type: Number
    },
    createdAt: {
        required: true,
        type: Date
    },
    experienceGain: {
        required: true,
        type: Number
    },
    
})

module.exports = mongoose.model('Product', dataSchema)