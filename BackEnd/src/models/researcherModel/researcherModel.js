const mongoose = require('mongoose');

const ResearcherSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    number: {
        type: Number,
        required: true
    },
    paper: {
        type: String,
        required: true
    },
    status: {
        type: String, 
        default:"not decide"
    }
});

const Research = mongoose.model('researches', ResearcherSchema)
module.exports = Research;