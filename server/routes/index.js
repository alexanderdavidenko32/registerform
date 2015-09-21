var indexRoute = require('./IndexRoute'),
    api = require('./api'),
    routes;

routes = function(app) {
    api(app);

    app.get('*', indexRoute);
};

module.exports = routes;
