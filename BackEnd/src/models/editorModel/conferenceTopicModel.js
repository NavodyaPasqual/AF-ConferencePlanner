const mongoose = require('mongoose');

const topicSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        min: 3,
        max: 120,
        required: true
    },
    slug: {
        type: String,
        unique: true,
        index: true,
        lowercase: true
    },
    content: {
        type: {},
        required: true,
        min: 20,
        max: 200000
    },
    status: {
        required: true,
        type: String
    }

}, {timestamps: true});

module.exports = mongoose.model('Topic', topicSchema);
