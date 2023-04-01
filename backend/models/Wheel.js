const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    //array of elements
    elements: {
        required: true,
        type: Array
    },
    createdAt: {
        required: true,
        type: Date
    },
})

module.exports = mongoose.model('Wheel', dataSchema)