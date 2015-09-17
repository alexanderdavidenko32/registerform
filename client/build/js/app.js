angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("home.html","\n<md-content>\n  <ul>\n    <li><a href=\"/\">Login</a></li>\n    <li><a href=\"/presonal\">Personal</a></li>\n  </ul>\n  <div class=\"center-form\">\n    <form name=\"loginForm\">\n      <md-input-container>\n        <label>Login</label>\n        <input ng-model=\"login\" name=\"login\" placeholder=\"Login\" required=\"required\" md-maxlength=\"30\"/>\n        <div ng-messages=\"loginForm.login.$error\">\n          <div ng-message=\"required\">This is required.</div>\n          <div ng-message=\"md-maxlength\">The name has to be less than 30 characters long.</div>\n        </div>\n      </md-input-container>\n      <md-input-container>\n        <label>Email</label>\n        <input ng-model=\"email\" name=\"email\" placeholder=\"Email\" required=\"required\"/>\n        <div ng-messages=\"loginForm.email.$error\">\n          <div ng-message=\"required\">This is required.</div>\n        </div>\n      </md-input-container>\n      <md-input-container>\n        <label>Password</label>\n        <input ng-model=\"password\" name=\"password\" placeholder=\"Password\" type=\"password\" required=\"required\"/>\n        <div ng-messages=\"loginForm.password.$error\">\n          <div ng-message=\"required\">This is required.</div>\n        </div>\n      </md-input-container>\n      <md-input-container>\n        <label>Password confirmation</label>\n        <input ng-model=\"password_confirmation\" name=\"password_confirmation\" placeholder=\"Password confirmation\" type=\"password\" required=\"required\"/>\n        <div ng-messages=\"loginForm.password_confirmation.$error\">\n          <div ng-message=\"required\">This is required.</div>\n        </div>\n      </md-input-container>\n      <md-button type=\"submit\">Next</md-button>\n    </form>\n  </div>\n</md-content>");
$templateCache.put("personal.html","\n<!--\n@author: Alexander.Davidenko \n@date: 9/17/15\n-->");
$templateCache.put("errors/page404.html","\n<h1>404 Not found</h1>");}]);
/**
 * @author: Alexander.Davidenko
 * @date: 9/14/15
 */
(function() {
    'use strict';

    angular.
        module('app', ['ngResource', 'ngCookies', 'ui.router', 'templates', 'ngMaterial', 'ngMessages']);
})();

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
                .state('home', {
                    url: '/',
                    templateUrl: 'home.html',
                    controller: 'HomeController'
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