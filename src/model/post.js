const mongoose = require('../database/connection')
const { Schema } = require('mongoose')

const PostSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    description: {
        type: String
    },

    imgUrl: {
        type: String
    },

    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
})


module.exports = mongoose.model("Post", PostSchema)