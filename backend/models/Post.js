const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    content: {
        required: true,
        type: String
    },
    createdAt: {
        required: true, 
        type: Date
    },
    userId: {
        required: true,
        type: String
    },
    topic: {
        required: true,
        type: String
    }

})

module.exports = mongoose.model('Post', dataSchema)