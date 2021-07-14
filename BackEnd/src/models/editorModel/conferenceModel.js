const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const conferenceSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            trim: true,
            required: true,
            maxlength: 6000
        },
        description: {
            type: String,
            required: true,
            maxlength: 10000000
        },
        venue: {
            type: String,
            trim: true,
            required: true,
            maxlength: 2000
        },
        date: {
            type: Date,
            required: true
        },
        about: {
            type: String,
            trim: true,
            required: true,
            maxlength: 10000000
        },
        photo: {
            data: Buffer,
            contentType: String
        },
        status: {
            required: true,
            type: String
        }
    },
    { timestamps: true}
);

module.exports = mongoose.model("Conference", conferenceSchema);

