/**
 * @author: Alexander.Davidenko
 * @date: 9/14/15
 */
(function() {
    'use strict';

    angular
        .module('app')
        .config(function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider
                .otherwise('/error/404');

            $stateProvider
                .state('404', {
                    url: '/error/404',
                    templateUrl: 'errors/page404.html'
                })
                .state('login', {
                    url: '/',
                    text: 'Login',
                    templateUrl: 'login.html',
                    controller: 'LoginController',
                    isStep: true
                })
                .state('personal', {
                    url: '/personal',
                    text: 'Personal',
                    templateUrl: 'personal.html',
                    controller: 'PersonalController',
                    isStep: true
                });
        });

    //angular
    //    .module('app')
    //    .run(function($rootScope, $state, userService) {
    //        $rootScope.$on('$stateChangeStart', function(event, next) {
    //            // todo: check if page can't be accessible
    //            if (next.access) {
    //                if (!userService.isLoggedIn()) {
    //                    event.preventDefault();
    //                    $state.go('404');
    //                }
    //            }
    //        });
    //    });
})();
