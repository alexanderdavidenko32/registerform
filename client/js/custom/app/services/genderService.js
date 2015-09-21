/**
 * @author: Alexander.Davidenko
 * @date: 9/21/15
 */
(function () {
    'use strict';

    angular
        .module('app')
        .service('genderService', function () {
            var result = {},
                genders = [
                    { id: 1, text: 'male'},
                    { id: 2, text: 'female'}
                ];

            result.getList = function() {
                return genders;
            };

            return result;
        });
})();
