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
                level: 0,
                coins: 0,
                streak: 0,
                streakDate: new Date(),
                role: "user",
                experience: 0,
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

/**
 *
 * @param userId mongodb id of user object
 * @param pass current password, sent to email of not changed
 * @returns {Promise<true>}
 */
module.exports.authenticate = (userId, pass) => {
    return new Promise(async (resolve, reject) => {
        try {
            //Fetch user
            let user = await User.findById(userId);
            //Verify pass
            if (pass.localeCompare(user.password) !== 0) return reject("Wrong password")
            resolve(true);
        } catch (e) {
            reject(e)
        }
    })
}

/**
 *
 * @param registerCode for student contest this is their university id
 * @returns {Promise<User>}
 */
module.exports.getUserByEmail = (email) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await User.findOne({email: email});
            if (user) return resolve(user);
            reject("User not found");
        } catch (e) {
            reject(e);
        }
    })
}

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