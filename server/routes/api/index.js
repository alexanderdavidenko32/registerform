/**
 * @author: Alexander.Davidenko
 * @date: 9/21/15
 */
var users = require('./users'),
    routes;

routes = function(app) {

    var apiPrefix = '/api';

    app.post(apiPrefix + '/users', users.create);
    app.get(apiPrefix + '/users', users.read);
};

module.exports = routes;