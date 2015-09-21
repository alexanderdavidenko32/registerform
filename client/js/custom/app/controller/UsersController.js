/**
 * @author: Alexander.Davidenko
 * @date: 9/18/15
 */
(function () {
    'use strict';

    angular
        .module('app')
        .controller('UsersController', function ($scope, $state, userData, userService) {
            $scope.userData = userData;

            userService.getUsers().then(function (users) {
                $scope.users = users.items;
            })
            //$scope.users = [{name: 'user1'}, {name: 'user2'}]

            $scope.nextStep = function() {
                $state.go('login');
            }
        });
})();