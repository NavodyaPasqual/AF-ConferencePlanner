const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const speakerSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
            maxlength: 100
        },
        description: {
            type: String,
            required: true,
            maxlength: 10000000
        },

        photo: {
            data: Buffer,
            contentType: String
        },

        status: {
            type: String,
            required: true
        },
    },
    { timestamps: true}
);

module.exports = mongoose.model("Speaker", speakerSchema);

