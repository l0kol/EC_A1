const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    postId: {
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
    upvotes: {
        required: true,
        type: Number
    },
    downvotes: {
        required: true,
        type: Number
    }
})

module.exports = mongoose.model('Reply', dataSchema)