const express = require('express');
const router = express.Router();

const postCtrl = require('../controllers/post');

router.get('/getAll', postCtrl.getAllPosts);

router.delete('/:id', postCtrl.deletePost);

module.exports = router;