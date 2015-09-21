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
                    stepOrder: 0,
                    isStep: true
                })
                .state('personal', {
                    url: '/personal',
                    text: 'Personal',
                    templateUrl: 'personal.html',
                    controller: 'PersonalController',
                    stepOrder: 1,
                    isStep: true
                })
                .state('contacts', {
                    url: '/contacts',
                    text: 'Contacts',
                    templateUrl: 'contacts.html',
                    controller: 'ContactsController',
                    stepOrder: 2,
                    isStep: true
                })
                .state('terms', {
                    url: '/terms',
                    text: 'Terms of use',
                    templateUrl: 'terms.html',
                    controller: 'TermsController',
                    stepOrder: 3,
                    isStep: true
                })
                .state('summary', {
                    url: '/summary',
                    text: 'Summary',
                    templateUrl: 'summary.html',
                    controller: 'SummaryController',
                    stepOrder: 4,
                    isStep: true
                })
                .state('users', {
                    url: '/users',
                    text: 'Users',
                    templateUrl: 'users.html',
                    controller: 'UsersController',
                    stepOrder: 5,
                    isStep: true
                });
        });

    //angular
    //    .module('app')
    //    .run(function($rootScope, $state, validationService) {
    //        $rootScope.$on('$stateChangeStart', function(event, next) {
    //            if (!$state.current.abstract
    //                && !validationService.isStepValid($state.current)
    //                && $state.current.stepOrder < next.stepOrder) {
    //
    //                event.preventDefault();
    //            }
    //            if ($state.current.abstract && next.name !== 'login' && !validationService.isStepValid(next)) {
    //                event.preventDefault();
    //                $state.go('login');
    //            }
    //        });
    //    });
})();
