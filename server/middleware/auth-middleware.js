const jwt = require('jsonwebtoken');
const config = require('config');
const HttpError = require('../models/http-error');

module.exports = (req, res, next) => {
    if (req.method === 'OPTIONS') {
        return next();
    }

    try {
        const auth = req.heareds.authorization;

        if (!auth) { return next(new HttpError('Forbidden.', 403)); }

        const token = auth.split(' ')[1];

        if (!token) { return next(new HttpError('Forbidden.', 403)); }

        const decoded = jwt.verify(token, config.get('jwtSecret'));
        req.user = decoded;
        next();
    } catch (err) {
        return next(new HttpError(err.message, 403));
    }
}