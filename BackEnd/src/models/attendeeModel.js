const mongoose = require('mongoose');

const AttendeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 2,
        max: 450
    },
    contactNo: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        min: 2,
        max: 450
    },
    affiliation : {
        type: String,
        required: true,
        min: 2,
        max: 450
    },
    interest : {
        type: String,
        required: true,
        min: 2,
        max: 1050
    },
    status: {
        type: String,
        default: "not approved"
    },
    workshops: [{
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: 'workshops'
    }],
});

module.exports = mongoose.model('attendees', AttendeeSchema);