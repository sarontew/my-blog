const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    caption : String
})

module.exports = mongoose.model("Post", postSchema)