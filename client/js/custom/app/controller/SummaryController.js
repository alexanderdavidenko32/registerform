/**
 * @author: Alexander.Davidenko
 * @date: 9/17/15
 */
(function () {
    'use strict';

    angular
        .module('app')
        .controller('SummaryController', function ($scope, $state, $filter, userData, genderService) {
            var filter = $filter('filter'),
                genders = genderService.getList(),
                filtered;

            $scope.userData = userData;

            if (userData.saved) {
                filtered = filter(genders, {'id': userData.saved.gender});
                $scope.gender = filtered.length && filtered[0].text;
            }

            $scope.nextStep = function() {
                $state.go('users');
            }
        });
})();