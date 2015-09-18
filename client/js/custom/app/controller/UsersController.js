/**
 * @author: Alexander.Davidenko
 * @date: 9/18/15
 */
(function () {
    'use strict';

    angular
        .module('app')
        .controller('UsersController', function ($scope, $state, userData) {
            $scope.userData = userData;
            $scope.users = [{name: 'user1'}, {name: 'user2'}]

            $scope.nextStep = function() {
                $state.go('login');
            }
        });
})();