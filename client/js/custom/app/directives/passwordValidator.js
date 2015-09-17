/**
 * @author: Alexander.Davidenko
 * @date: 9/17/15
 */
(function () {
    'use strict';

    angular
        .module('app')
        .directive('passwordValidator', function (userData) {
            return {
                restrict: 'A',
                require: 'ngModel',
                link: function (scope, element, attributes, ngModel) {
                    ngModel.$validators.passwordConfirmation = function (modelValue) {
                        return userData.password === modelValue;
                    }
                }
            }
        });
})();