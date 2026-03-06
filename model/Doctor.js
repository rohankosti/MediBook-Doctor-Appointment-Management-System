const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    specialization: {
        type: String,
        required: true
    },

    experience: {
        type: Number
    },

    hospital: {
        type: String
    },

    fees: {
        type: Number
    },

    availableDays: {
        type: [String]
    },

    availableTime: {
        type: String
    },

    about: {
        type: String
    }

}, { timestamps: true });

module.exports = mongoose.model("Doctor", doctorSchema);