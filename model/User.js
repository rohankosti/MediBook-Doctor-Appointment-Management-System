import mongoose from  "mongoose";

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    role: {
        type: String,
        enum: ["patient", "doctor", "admin"],
        default: "patient"
    },

    profileImage: {
        type: String,
        default: ""
    }

}, { timestamps: true });

const Usermodel   = mongoose.model("User", userSchema);
export default Usermodel