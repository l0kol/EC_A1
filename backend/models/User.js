const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    age: {
        required: false,
        type: Number
    },
    email: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    },
    level: {
        required: false,
        type: Number
    },
    experience: {
        required: false,
        type: Number
    },
    coins: {
        required: false,
        type: Number
    },
    streak: {   
        required: false,
        type: Number
    },
    streakDate: {
        required: false,
        type: Date
    },
    role: {
        required: false,
        type: String
    },
            
    
})

module.exports = mongoose.model('User', dataSchema)