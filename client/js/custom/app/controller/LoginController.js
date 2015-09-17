/**
 * @author: Alexander.Davidenko
 * @date: 9/14/15
 */
(function () {
    'use strict';

    angular
        .module('app')
        .controller('LoginController', function ($scope, $state, userData, validationService) {
            $scope.userData = userData;

            $scope.nextStep = function() {
                if ($scope.loginForm.$valid) {
                    $state.go('personal');
                }
            }
        });
})();