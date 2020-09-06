const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users-controllers');
const fileUpload = require('../middleware/file-upload');
const authMiddleware = require('../middleware/auth-middleware');

router.get('/', usersController.getUserByUserName);

router.get('/', usersController.getUsers);

router.get('/:uid', usersController.getUserById);

router.post('/signup',
    fileUpload.single('image'),
    usersController.signup);

router.post('/login', usersController.login);

router.patch('/edit',
    authMiddleware,
    fileUpload.single('image'),
    usersController.updateProfile);

module.exports = router;