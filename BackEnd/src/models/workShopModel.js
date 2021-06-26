const mongoose = require('mongoose');

const WorkshopSchema = new mongoose.Schema({
    organizerName: {
        type: String,
        required: true,
        min: 2,
        max: 450
    },
    organizerContactNo: {
        type: String,
        required: true
    },
    organizerEmail: {
        type: String,
        required: true,
        min: 2,
        max: 450
    },
    description : {
        type: String,
        required: true,
        min: 2,
        max: 1050
    },
    proposalURL: {
        type: String,
        required: true,
        min: 2,
        max: 1050
    },
    estimatedDuration: {
        type: Number,
        required: true
    },
    paymentAmount: {
        type: Number,
        required: true
    },
});

module.exports = mongoose.model('workshops', WorkshopSchema);