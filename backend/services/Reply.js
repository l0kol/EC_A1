let Reply = require('../models/Reply');
module.exports.Reply = Reply;


module.exports.createReply = (content, userId, postId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let reply = new Reply({
                postId: postId,
                content: content,
                userId: userId,
                createdAt: new Date(),
                upvotes: 0,
                downvotes: 0
            });
            // console.log(user)
            let result = await reply.save();
            resolve(result);
        } catch (e) {
            console.log(e)
            reject(e);
        }
    })
}

//TODO: should be able to get replies by post id
module.exports.getReplies = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let replies = await Reply.find();
            if (replies) return resolve(replies);
            reject("No replies found");
        } catch (e) {
            reject(e);
        }
    })
}