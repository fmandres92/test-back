const post = require('../models/postModel');
const HttpStatus = require('http-status-codes');

module.exports = {
    async getAllPosts(req, res) {
        try {
            const allPosts = await post.find().sort({ created_at_i: -1 })
            return res.status(HttpStatus.OK).json({
                message: 'All post',
                allPosts
            })
        } catch (err) {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                message: 'Error ocurred'
            })
        }
    },

    async deletePost(req, res) {
        try {
            await post.update( { 
                created_at_i : req.params.id
            }, {
                hidden: true
            });

            return res.status(HttpStatus.OK).json({
                message: 'Deleted success'
            });
        } catch (err) {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                message: 'Error ocurred'
            })
        }
    }
}