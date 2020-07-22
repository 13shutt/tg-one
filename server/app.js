const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const cors = require('./middleware/cors');
const { unexistingRoutes, httpErrorsHandler } = require('./routes/http-errors-routes');

const usersRouter = require('./routes/users-routes');


module.exports = () => {
    const app = express();

    app.disable('x-powered-by');

    // middlewares
    app.use(cors);
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    // Static for images
    app.use('/uploads/images', express.static(path.join('uploads', 'images')));

    // Routes
    app.use('/api/users', usersRouter);
    // The 404 error handler for unexisting routes
    app.use(unexistingRoutes);
    // The http errors handler
    app.use(httpErrorsHandler);

    return app;
}