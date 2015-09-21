/**
 * @author: Alexander.Davidenko
 * @date: 9/17/15
 */
(function () {
    'use strict';

    angular
        .module('app')
        .controller('TermsController', function ($scope, $state, userData, userService) {
            $scope.userData = userData;

            $scope.nextStep = function() {
                if ($scope.termsForm.$valid) {
                    userService.createUser(userData).then(function (savedData) {
                        userData.saved = savedData;
                        $state.go('summary');
                    });
                }
            }
        });
})();