/**
 * @author: Alexander.Davidenko
 * @date: 9/21/15
 */
var users = require('./users'),
    express = require('express'),
    apiRouter = express.Router(),
    routes;

routes = function() {

    apiRouter.route('/users')
        .get(users.read)
        .post(users.create);

    apiRouter.route('/user/:login')
        .get(users.readUser);

    return apiRouter;
};

module.exports = routes();
