
const serviceUser = require('../services/User');

exports.getUser = async (req, res) => {
    try {
        let user = await serviceUser.getUser(req.query.userId);

        return res.status(200).json({
            user: {
                id: user._id,
                name: user.name,
                role: user.role,
                experience: user.state,
                level: user.level,
                coins: user.coins,
                streak: user.streak,
                streakDate: user.streakDate,
                email: user.email,
            }
        });
    } catch (e) {
        res.status(401).json({
            message: e
        });
    }
};

exports.create = async (req, res) => {
    try {
        //Reject if email not set
        if (!req.query.email) {
            return res.status(401).json({
                message: 'Email parameter not set'
            });
        }

        //Reject if name not set
        if (!req.query.name) {
            return res.status(401).json({
                message: 'Name parameter not set'
            });
        }

        if (!req.query.password) {
            return res.status(401).json({
                message: 'Password parameter not set'
            });
        }

        let userId = await serviceUser.createUser(req.query.name, req.query.email, req.query.password);

        return res.status(200).json({
            id: userId,
            name: req.query.name,
            email: req.query.email,
        });
    } catch (e) {
        res.status(401).json({
            message: 'Auth failed'
        });
    }
};


