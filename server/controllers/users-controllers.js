const HttpError = require('../models/http-error');
const User = require('../models/user');

const getUserById = async (req, res, next) => {
    const userId = req.params.uid;
    let user;

    try {
        user = await User.findOne({ _id: userId }, '-password');
    } catch (err) {
        const error = new HttpError('Fetching users failded, please try again later.', 500);
        return next(error);
    }

    res.json({ user: user.toObject({ getters: true }) });
};

const getUserByUserName = async (req, res, next) => {
    const userName = req.query.u;
    let user;

    try {
        user = await User.findOne({ username: userName }, '-password');
    } catch (err) {
        const error = new HttpError('Fetching users failded, please try again later.', 500);
        return next(error);
    }

    res.json({ user: user.toObject({ getters: true }) });
};

const signup = async (req, res, next) => {
    const { username, email, password } = req.body;

    let existingUser;
    try {
        existingUser = await User.findOne({ email: email });
    } catch (err) {
        const error = new HttpError('Sing up failed, please try again later.', 500);
        return next(error);
    }

    if (existingUser) {
        const error = new HttpError('User exits already, please login insead.', 422);
        return next(error);
    }

    const createdUser = new User({
        username,
        email,
        password,
        image: req.file.path,
        chats: []
    });

    try {
        await createdUser.save();
    } catch (err) {
        const error = new HttpError('Signig up failed, please try again later.', 500);
        return next(error);
    }

    res.status(201).json({ user: createdUser.toObject({ getters: true }) });
};

const login = async (req, res, next) => {
    const { email, password } = req.body;

    let existingUser;

    try {
        existingUser = await User.findOne({ email: email });
    } catch (err) {
        const error = new HttpError('Logging in failed, please try again later.', 500);
        return next(error);
    }

    if (!existingUser || existingUser.password !== password) {
        const error = new HttpError('Cloud not identify user, credentials seem to be wrong.', 401);
        return next(error);
    }

    res.json({ message: 'Logged in.' })
};

module.exports = {
    getUserById,
    getUserByUserName,
    signup,
    login
}