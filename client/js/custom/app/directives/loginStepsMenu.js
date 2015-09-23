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

                //TODO: think of another behaviour
                controller: function ($scope, $state, $filter, validationService) {
                    var filter = $filter('filter'),
                        states = $state.get(),
                        steps = filter(states, {isStep: true});

                    /**
                     * adds enabled and active fields to steps
                     */
                    var processSteps = function () {
                        var isStepEnabled = function(item) {
                            return steps.reduce(function (previousValue, currentValue, index) {
                                var tmpStep = steps[index];

                                if (previousValue === false) {
                                    return false;
                                } else {
                                    if (tmpStep.stepOrder <= item.stepOrder) {
                                        return validationService.isStepValid(steps[index]);
                                    } else {
                                        return previousValue;
                                    }
                                }
                            }, true);
                        };

                        steps.map(function (item) {
                            item.active = item === $state.current;

                            if ($state.current  === item ) {
                                item.enabled = true;
                            } else {
                                item.enabled = isStepEnabled(item);
                            }
                        });
                    };

                    processSteps();

                    $scope.$watch(function () {
                        return validationService.isStepValid($state.current);
                    }, function () {
                        processSteps();
                    });

                    $scope.steps = steps;
                }
            };
        });
})();