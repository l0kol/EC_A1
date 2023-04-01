let Post = require('../models/Post');
module.exports.Post = Post;


/**
 * @param name
 * @param email
 * @param password
 * @returns {Promise<string>}
    */
module.exports.createPost = (title, content, topic, userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let post = new Post({
                title: title,
                content: content,
                userId: userId,
                createdAt: new Date(),
                topic: topic
            });
            // console.log(user)
            let result = await post.save();
            resolve(result);
        } catch (e) {
            console.log(e)
            reject(e);
        }
    })
}


/**
 * Return all posts
 * @param topic
 * @returns {Promise<Post>}
 */
module.exports.getPosts = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let posts = await Post.find();
            if (posts) return resolve(posts);
            reject("No post not found");
        } catch (e) {
            reject(e);
        }
    })
}