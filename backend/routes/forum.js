const express = require('express');
const router = express.Router();

const ForumController = require('../controllers/forum');

const checkUserAuth = require('../middleware/authUser');

// GET routes
router.get('/createPost', checkUserAuth, ForumController.create);
router.get('/getPosts', checkUserAuth, ForumController.getPosts);
// router.get('/createTopic/', ForumController.createPost);
router.get('/reply', ForumController.createReply);
// router.get('/upvote',UserController.get);
// router.get('/downvote',UserController.get);

module.exports = router;