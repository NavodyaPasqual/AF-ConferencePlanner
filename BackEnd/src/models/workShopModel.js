const mongoose = require('mongoose');

const WorkshopSchema = new mongoose.Schema({
    organizerName: {
        type: String,
        required: true,
        trim: true
    },
    organizerContactNo: {
        type: String,
        required: true,
        trim: true
    },
    organizerEmail: {
        type: String,
        required: true
    },
    workShopTitle: {
        type: String,
        required: true
    },
    description : {
        type: String,
        required: true,
        trim: true
    },
    proposalURL: {
        type: String,
        required: true
    },
    estimatedDuration: {
        type: Number,
        required: true
    },
    paymentAmount: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        default: "not approved"
    }
});

module.exports = mongoose.model('workshops', WorkshopSchema);