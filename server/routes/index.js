var indexRoute = require('./IndexRoute'),
    apiRouter = require('./api'),
    routes;

routes = function(app) {
    app.use('/api', apiRouter);

    app.get('*', indexRoute);
};

module.exports = routes;
