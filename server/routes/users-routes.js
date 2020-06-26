const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users-controllers');
const fileUpload = require('../middleware/file-upload');

// router.get('/', usersController.getUsers);

router.get('/', usersController.getUserByUserName);

router.get('/:uid', usersController.getUserById);

router.post('/signup',
    fileUpload.single('image'),
    usersController.signup);

router.post('/login', usersController.login);

module.exports = router;