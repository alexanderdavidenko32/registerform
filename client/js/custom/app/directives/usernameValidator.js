/**
 * @author: Alexander.Davidenko
 * @date: 9/21/15
 */
(function () {
    'use strict';

    angular
        .module('app')
        .directive('usernameValidator', function ($q, userService) {
            return {
                restrict: 'A',
                require: 'ngModel',
                link: function (scope, element, attributes, ngModel) {
                    ngModel.$asyncValidators.usernamePresence = function (modelValue) {
                        var deferred = $q.defer();

                        userService.getUser(modelValue).then(function (data) {
                            return !!data.response ? deferred.reject() : deferred.resolve();
                        });

                        return deferred.promise;
                    }
                }
            }
        });
})();