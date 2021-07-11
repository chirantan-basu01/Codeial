const express = require('express');
const router = express.Router();

const usersPost = require('../controllers/posts_controllers');

router.get('/profile', usersPost.profile);

module.exports = router;
