const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title:
    {
        type: Number,
        required: true
    },
    discription:
    {
        type: String,
        required: true,
    }
});

const postModel = mongoose.model('Post', postSchema);

module.exports = postModel;


