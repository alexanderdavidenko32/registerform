/**
 * @author: Alexander.Davidenko
 * @date: 9/17/15
 */
(function () {
    'use strict';

    angular
        .module('app')
        .value('userData', {
            login: undefined,
            email: undefined,
            password: undefined,
            password_confirmation: undefined,

            name: undefined,
            lastName: undefined,
            gender: undefined,
            additionalInfo: undefined,

            phone: undefined,
            country: undefined,
            city: undefined,
            address: undefined,

            terms: undefined
        });
})();