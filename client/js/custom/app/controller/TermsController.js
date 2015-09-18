/**
 * @author: Alexander.Davidenko
 * @date: 9/17/15
 */
(function () {
    'use strict';

    angular
        .module('app')
        .controller('TermsController', function ($scope, $state, userData, validationService) {
            $scope.userData = userData;

            $scope.nextStep = function() {
                if ($scope.termsForm.$valid) {
                    $state.go('summary');
                }
            }
        });
})();