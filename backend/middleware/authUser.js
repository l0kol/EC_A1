const jwt = require('jsonwebtoken');
const secret = require('../config.js').jwt.secret;
const serviceUser = require('../services/User');

module.exports = async (req, res, next) => {
    try {
        const token = req.headers.authorization;
        const decodedToken = jwt.verify(token, secret);
        const userId = decodedToken.userId;
        let user;
        try {
            user = await serviceUser.getUser(userId);
            req.query.userId = user.id;
            if (user) next();
        }catch (e) {
            return res.status(401).json({
                message: 'Auth failed'
            });
        }
    } catch (error) {
        return res.status(401).json({
            error:"Auth failed",
            message: error
        })
    }
};