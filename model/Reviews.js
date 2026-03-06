const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({

    patientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    doctorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor",
        required: true
    },

    rating: {
        type: Number,
        min: 1,
        max: 5
    },

    comment: {
        type: String
    }

}, { timestamps: true });

module.exports = mongoose.model("Review", reviewSchema);