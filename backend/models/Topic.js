const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    body: {
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
})

module.exports = mongoose.model('Topic', dataSchema)