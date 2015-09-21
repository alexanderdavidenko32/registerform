/**
 * @author: Alexander.Davidenko
 * @date: 9/21/15
 */
(function () {
    'use strict';

    angular
        .module('app')
        .service('userService', function ($resource) {
            var users = {};

            users.getUsers = function () {
                var userList = $resource('/api/users', {}, {
                    read: {method: 'GET'}
                });

                return userList.read().$promise;

            };

            users.createUser = function (userData) {
                var user = $resource('/api/users', {}, {
                    create: {method: 'POST'}
                });

                return user.create({user: userData}).$promise;
            };

            return users;
        });
})();