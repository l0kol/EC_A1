const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    //array of elements
    name: {
        required: true,
        type: String
    },
    createdAt: {
        required: true,
        type: Date
    },
    wheelId: {
        required: true,
        type: String
    },
    value: {
        required: true,
        type: Number
    },
})

module.exports = mongoose.model('Element', dataSchema)