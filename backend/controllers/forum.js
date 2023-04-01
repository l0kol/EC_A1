const jwt = require('jsonwebtoken');
const secret = require('../config.js').jwt.secret
const servicePost = require('../services/Post.js');
const serviceReply = require('../services/Reply.js');

exports.getPosts= async (req, res) => {
    try {
        console.log("Getting posts")
        let posts = await servicePost.getPosts(req.query.topic);

        return res.status(200).json({
            posts
        });
    } catch (e) {
        res.status(401).json({
            message: e
        });
    }
};

exports.create = async (req, res) => {
    try {
        //Reject if title not set
        if (!req.query.title) {
            return res.status(401).json({
                message: 'Title parameter not set'
            });
        }
        //Reject if body is missing
        if (!req.query.content) {
            return res.status(401).json({
                message: 'Content parameter not set'
            });
        }

        //Reject if tpic is missing
        if (!req.query.topic) {
            return res.status(401).json({
                message: 'Topic parameter not set'
            });
        }

        let post = await servicePost.createPost(req.query.title, req.query.content, req.query.topic, req.query.userId);

        return res.status(200).json({
            post: post._id,
            title: req.query.title,
            content: req.query.content,
            topic: req.query.topic,

        });
    } catch (e) {
        res.status(401).json({
            message: 'Auth failed'
        });
    }
};

exports.createReply = async (req, res) => {
    try {
        //Reject if title not set
        if (!req.query.content) {
            return res.status(401).json({
                message: 'Title parameter not set'
            });
        }
        //Reject if body is missing
        if (!req.query.postId) {
            return res.status(401).json({
                message: 'Content parameter not set'
            });
        }

        let reply = await serviceReply.createReply(req.query.content, req.query.postId, req.query.userId);

        return res.status(200).json({
            reply: reply._id,
            content: req.query.content,
            postId: req.query.postId,
        });

    } catch (e) {
        res.status(401).json({
            message: 'Auth failed'
        });
    }
};

