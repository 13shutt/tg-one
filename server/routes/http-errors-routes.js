const fs = require('fs');
const HttpError = require('../helpers/http-error');

const unexistingRoutes = (req, res, next) => {
    const error = new HttpError('Could not find this page.', 404);
    return next(error);
}

const httpErrorsHandler = (error, req, res, next) => {
    if (req.file) {
        // eslint-disable-next-line node/prefer-promises/fs
        fs.unlink(req.file.path, err => {
            console.log(err);
        });
    }

    if (res.headerSent) {
        return next(error);
    }

    res.status(error.code || 500);
    res.json({
        data: { 
            message: error.message || 'An unknown error occurred!',
            stack: process.env.NODE_ENV === 'production' ? 'Nothing interesting here 😎' : error.stack
        }
    });
}

module.exports = {
    unexistingRoutes,
    httpErrorsHandler
}