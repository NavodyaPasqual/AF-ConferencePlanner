const mongoose = require('mongoose');

const ResearchPaperPaymentSchema = new mongoose.Schema({
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
    depositedAmount : {
        type: Number,
        required: true
    },
    depositedDate: {
        type: Date,
        required: true
    },
    bank: {
        type: String,
        required: true
    },
    branch: {
        type: String,
        required: true
    },
    paymentSlip: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('researchpaperpayment', ResearchPaperPaymentSchema);