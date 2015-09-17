/**
 * @author: Alexander.Davidenko
 * @date: 9/14/15
 */
(function () {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', function ($scope) {
            $scope.value = 'value';
            console.log('asd');
        });
})();