const mongoose = require('../database/connection')
const { Schema } = require('mongoose')

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    state: {
        type: String,
        required: true
    },

    category: {
        type: String,
        required: true
    },

    description: {
        type: String
    },

    img: {
        type: String
    },

    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    location: {
        type: String
    },

    contact: {
        type: String
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
})


module.exports = mongoose.model("Post", PostSchema)