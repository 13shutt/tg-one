const jwt = require('jsonwebtoken');
const HttpError = require('../helpers/http-error');

module.exports = (req, res, next) => {
    if (req.method === 'OPTIONS') {
        return next();
    }

    try {
        const auth = req.headers.authorization;

        if(!auth) { return next(new HttpError('Forbidden.', 403)); }

        const token = auth.split(' ')[1];

        if (!token) { return next(new HttpError('Forbidden.', 403)); }

        const decoded = jwt.verify(token, 
            process.env.JWT_SECRET
            );
        req.user = decoded;
        next();

    } catch (err) {
        return next(new HttpError(err.message, 403));
    }
}