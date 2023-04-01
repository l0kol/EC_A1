const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    achivementType: {
        required: true,
        type: String
    },
    craetedAt: {
        required: true,
        type: Date
    },
    requirements: {
        required: true,
        type: Number
    },
    userId: {
        required: true,
        type: String
    },
    
})

module.exports = mongoose.model('Badge', dataSchema)