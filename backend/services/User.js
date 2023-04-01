let User = require('../models/User');
module.exports.User = User;


/**
 *
 * @param userId
 * @returns {Promise<User>}
 */
module.exports.getUser = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await User.findById(userId);
            if (user) return resolve(user);
            reject("User not found");
        } catch (e) {
            reject(e);
        }
    })
}

/**
 * @param name
 * @param email
 * @param password
 * @returns {Promise<string>}
    */
module.exports.createUser = (name, email, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = new User({
                name: name,
                email: email,
                password: password,
            });
            // console.log(user)
            let result = await user.save();
            console.log(result)
            resolve(result._id);
        } catch (e) {
            reject(e);
        }
    })
}