/**
 * @author: Alexander.Davidenko
 * @date: 9/17/15
 */
(function () {
    'use strict';

    angular
        .module('app')
        .controller('PersonalController', function ($scope, $state, userData, genderService) {
            $scope.userData = userData;

            $scope.genders = genderService.getList();

            $scope.nextStep = function() {
                if ($scope.personalForm.$valid) {
                    $state.go('contacts');
                }
            }
        });
})();