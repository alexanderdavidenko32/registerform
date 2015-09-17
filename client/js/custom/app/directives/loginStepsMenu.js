/**
 * @author: Alexander.Davidenko
 * @date: 9/17/15
 */
(function () {
    'use strict';

    angular
        .module('app')
        .directive('loginStepsMenu', function () {
            return {
                restrict: 'E',
                templateUrl: 'directives/loginStepsMenu.html',

                controller: function ($scope, $state, $filter) {
                    var filter = $filter('filter'),
                        states = $state.get();

                    $scope.steps = filter(states, {isStep: true});
                    console.log($scope.steps);
                }
            };
        });
})();