const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users-controllers');
const fileUpload = require('../middleware/file-upload');
const authMiddleware = require('../middleware/auth-middleware');
const pagination = require('../middleware/pagination-middleware');
const User = require('../models/user');

router.get('/', authMiddleware, usersController.getUserByUserName);

router.get('/', authMiddleware, pagination(User), usersController.getUsers);

router.get('/:uid', authMiddleware, usersController.getUserById);

router.post('/signup',
    fileUpload.single('image'),
    usersController.signup);

router.post('/login', usersController.login);

router.patch('/edit',
    authMiddleware,
    fileUpload.single('image'),
    usersController.updateProfile);

module.exports = router;