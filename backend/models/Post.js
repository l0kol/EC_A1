const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    title: {
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

module.exports = mongoose.model('Post', dataSchema)