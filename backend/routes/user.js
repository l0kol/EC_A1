const express = require('express');
const router = express.Router();

const UserController = require('../controllers/user');

const checkUserAuth = require('../middleware/authUser');

// GET routes
router.get('/create', UserController.create);
router.get('/login', UserController.login);
// router.get('/login', UserController.login);
router.get('/', checkUserAuth, UserController.getUser)

module.exports = router;