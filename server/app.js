const express = require('express');
const bodyParser = require('body-parser');

const HttpError = require('./models/http-error');
const usersRouter = require('./routes/users-routes');

const app = express();

// body-parser for incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Main routes
app.use('/api/users', usersRouter);

// The 404 error for unexisting routes
app.use((req, res, next) => {
    const error = new HttpError('Could not find this page.', 404);
    return next(error);
});

// The http errors handler
app.use((error, req, res, next) => {
    if (res.headerSent) {
        return next(error);
    }

    res.status(error.code || 500);
    res.json({
        message: error.message || 'An unknown error occurred!'
    });
});

// Run server
app.listen(5000, () => {
    console.log('Server has been started . . .');
});