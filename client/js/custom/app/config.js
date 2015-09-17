/**
 * @author: Alexander.Davidenko
 * @date: 9/14/15
 */
(function () {
    'use strict';

    angular
        .module('app')
        .config(function ($locationProvider, $httpProvider) {
            // ie
            delete $httpProvider.defaults.headers.common['X-Requested-With'];
            $httpProvider.defaults.useXDomain = true;

            $httpProvider.defaults.withCredentials = true;

            $locationProvider.html5Mode().enabled = true;

            //$httpProvider.interceptors.push('authInterceptor');
        });
})();
