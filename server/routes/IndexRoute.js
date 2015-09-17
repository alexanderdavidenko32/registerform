var path = require('path'),
    route;

route = function(req, res) {
    res.sendFile(path.resolve('client/build/html/index.html'));
};

module.exports = route;
