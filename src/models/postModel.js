const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    created_at: {
        type: Date
    },
    title: {
        type: String,
        default: ''
    },
    url: {
        type: String,
        default: ''
    },
    author: {
        type: String,
        default: ''
    },
    story_text: {
        type: String,
        default: ''
    },
    comment_text: {
        type: String,
        default: ''
    }, 
    story_title: { 
        type: String,
        default: ''
    },
    story_url: {
        type: String,
        default: ''
    }, 
    created_at_i: {
        type: Number,
        unique: true
    },
    hidden: {
        type: Boolean,
        default: false
    }
});
module.exports = mongoose.model('Post', postSchema);
