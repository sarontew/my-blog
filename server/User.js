const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: {
        type: String,
        lowercase: true,
        required: true
    }
})

module.exports = mongoose.model("User", userSchema)