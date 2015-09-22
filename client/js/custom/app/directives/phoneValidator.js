/**
 * @author: Alexander.Davidenko
 * @date: 9/21/15
 */
(function () {
    'use strict';

    angular
        .module('app')
        .directive('phoneValidator', function () {
            return {
                restrict: 'A',
                require: 'ngModel',
                link: function (scope, element, attributes, ngModel) {
                    ngModel.$validators.phoneValidity = function (modelValue) {
                        var regex = /^\+{0,1}[0-9 ()-]+$/,
                            isValid = regex.test(modelValue),
                            purePhone = modelValue && modelValue.replace(/[^0-9]/g, '');

                        return isValid && purePhone && purePhone.length === 12;
                    }
                }
            }
        });
})();