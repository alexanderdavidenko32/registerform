var indexRoute = require('./IndexRoute'),
    routes;

routes = function(app) {

    app.get('*', indexRoute);
};

module.exports = routes;
