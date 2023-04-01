const express = require('express');
const router = express.Router();

const UserController = require('../controllers/user');

// const checkUserAuth = require('../middleware/check-user-auth');

// GET routes
router.get('/create/', UserController.create);
// router.get('/login', UserController.login);
router.get('/',UserController.getUser)

module.exports = router;