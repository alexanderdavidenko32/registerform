/**
 * @author: Alexander.Davidenko
 * @date: 9/21/15
 */
var path = require('path'),
    validateUser, findUser,
    create, read;

var users = {
    'items': [
        { name: 'admin', email: 'admin@admin.com'},
        { name: 'user1', email: 'user1@user1.com'}
    ]
};

create = function (req, res) {
    if (validateUser(req.body.user)) {
        users.items.push(req.body.user);
    
        res.end(JSON.stringify(req.body.user));
        
    } else {
        res.send(400, 'User is not valid');
    }
};

read = function(req, res) {
    res.end(JSON.stringify(users));
};

findUser = function (user) {
    // TODO: implement and use in create method for validation
};

validateUser = function (user) {
    var isBlank = function(value) {
        return !value;

    };
    var isCharactersFit = function(value) {
        return value.length <= 30;
    };

    var isEmail = function(value) {
        var re = /[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*/i;
        return re.test(value);
    };

    var stepValidators = {
        'login': function () {
            if (isBlank(user.login) || !isCharactersFit(user.login)) {
                return false;
            }
            if (isBlank(user.email) || !isEmail(user.email)) {
                return false;
            }
            if (isBlank(user.password) || isBlank(user.password_confirmation)) {
                return false;
            }
            return user.password === user.password_confirmation;

        },
        'personal': function () {
            if (isBlank(user.name) || !isCharactersFit(user.name)) {
                return false;
            }
            return !(isBlank(user.lastName) || isBlank(user.birthday) || isBlank(user.gender));

        },
        'contacts': function () {
            return !(isBlank(user.phone) || isBlank(user.country) || isBlank(user.city));

        },
        'terms': function () {
            return !isBlank(user.terms);

        }

    };

    return stepValidators['login']() && stepValidators['personal']() && stepValidators['contacts']() && stepValidators['terms']();
};

module.exports.create = create;
module.exports.read = read;