/**
 * @author: Alexander.Davidenko
 * @date: 9/17/15
 */
(function () {
    'use strict';

    angular
        .module('app')
        .controller('PersonalController', function ($scope, $state, userData, validationService) {
            $scope.userData = userData;

            $scope.genders = [
                { id: 1, text: 'male'},
                { id: 2, text: 'female'}
            ];

            $scope.nextStep = function() {
                if ($scope.personalForm.$valid) {
                    $state.go('contacts');
                }
            }
        });
})();