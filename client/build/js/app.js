angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("login.html","\n<!--\n@author: Alexander.Davidenko\n@date: 9/17/15\n\n-->\n<md-content>\n  <login-steps-menu steps=\"steps\"></login-steps-menu>\n  <div class=\"center-form\">\n    <form name=\"loginForm\">\n      <md-input-container>\n        <label>Login</label>\n        <input ng-model=\"userData.login\" name=\"login\" ng-required=\"true\" md-maxlength=\"30\" autofocus=\"true\"/>\n        <div ng-messages=\"loginForm.login.$error\">\n          <div ng-message=\"required\">This is required.</div>\n          <div ng-message=\"md-maxlength\">The login has to be less than 30 characters long.</div>\n        </div>\n      </md-input-container>\n      <md-input-container>\n        <label>Email</label>\n        <input ng-model=\"userData.email\" name=\"email\" ng-required=\"true\" type=\"email\"/>\n        <div ng-messages=\"loginForm.email.$error\">\n          <div ng-message=\"required\">This is required.</div>\n          <div ng-message=\"email\">Email is not valid</div>\n        </div>\n      </md-input-container>\n      <md-input-container>\n        <label>Password</label>\n        <input ng-model=\"userData.password\" name=\"password\" type=\"password\" ng-required=\"true\"/>\n        <div ng-messages=\"loginForm.password.$error\">\n          <div ng-message=\"required\">This is required.</div>\n        </div>\n      </md-input-container>\n      <md-input-container>\n        <label>Password confirmation</label>\n        <input ng-model=\"userData.password_confirmation\" name=\"password_confirmation\" type=\"password\" ng-required=\"true\" password-validator=\"password-validator\"/>\n        <div ng-messages=\"loginForm.password_confirmation.$error\">\n          <div ng-message=\"required\">This is required.</div>\n          <div ng-message=\"passwordConfirmation\">Password confirmation is not correct</div>\n        </div>\n      </md-input-container>\n      <md-button type=\"submit\" ng-click=\"nextStep()\" ng-disabled=\"!loginForm.$valid\" class=\"next-button\">Next</md-button>\n    </form>\n  </div>\n</md-content>");
$templateCache.put("personal.html","\n<!--\n@author: Alexander.Davidenko \n@date: 9/17/15\n\n-->\n<md-content>\n  <ul>\n    <li><a href=\"/\">Login</a></li>\n    <li><a href=\"/personal\">Personal</a></li>\n  </ul>\n  <div class=\"center-form\">\n    <form name=\"personalForm\">\n      <md-input-container>\n        <label>Name</label>\n        <input ng-model=\"userData.name\" name=\"name\" ng-required=\"true\" md-maxlength=\"30\" autofocus=\"true\"/>\n        <div ng-messages=\"personalForm.name.$error\">\n          <div ng-message=\"required\">This is required.</div>\n          <div ng-message=\"md-maxlength\">The name has to be less than 30 characters long.</div>\n        </div>\n      </md-input-container>\n      <md-input-container>\n        <label>Last name</label>\n        <input ng-model=\"userData.lastName\" name=\"last_name\" ng-required=\"true\"/>\n        <div ng-messages=\"personalForm.last_name.$error\">\n          <div ng-message=\"required\">This is required.</div>\n        </div>\n      </md-input-container>\n      <md-input-container>\n        <label>Birthday</label>\n        <input ng-model=\"userData.birthday\" name=\"birthday\" ng-required=\"true\" type=\"hidden\"/>\n      </md-input-container>\n      <md-datepicker ng-model=\"userData.birthday\" aria-label=\"birthday\"></md-datepicker>\n      <md-input-container>\n        <div ng-messages=\"personalForm.birthday.$error\">\n          <div ng-message=\"required\">This is required.</div>\n        </div>\n      </md-input-container>\n      <md-input-container>\n        <input ng-model=\"userData.userGender\" name=\"user_gender\" ng-required=\"true\" type=\"hidden\"/>\n      </md-input-container>\n      <md-input-container>\n        <label>Gender</label>\n        <md-select ng-model=\"userData.userGender\" aria-label=\"gender\">\n          <md-option ng-repeat=\"gender in genders\" ng-value=\"gender.id\">{{ gender.text }}</md-option>\n        </md-select>\n        <div ng-messages=\"personalForm.user_gender.$error\">\n          <div ng-message=\"required\">This is required.</div>\n        </div>\n      </md-input-container>\n      <md-input-container>\n        <label>Additional info</label>\n        <textarea ng-model=\"userData.additionalInfo\" md-maxlength=\"512\" name=\"additional_info\"></textarea>\n        <div ng-messages=\"personalForm.additional_info.$error\">\n          <div ng-message=\"required\">Length of this field is limited to 512 characters</div>\n        </div>\n      </md-input-container>\n      <md-button type=\"submit\" ng-click=\"nextStep()\" ng-disabled=\"!personalForm.$valid\" class=\"next-button\">Next</md-button>\n    </form>\n  </div>\n</md-content>");
$templateCache.put("directives/loginStepsMenu.html","\n<!--\n@author: Alexander.Davidenko \n@date: 9/17/15\n\n\n-->\n<ul>\n  <li ng-repeat=\"step in steps track by $index\"><a ui-sref=\"{{step.name}}\">{{step.text}}</a></li>\n</ul>");
$templateCache.put("errors/page404.html","\n<h1>404 Not found</h1>");}]);
/**
 * @author: Alexander.Davidenko
 * @date: 9/14/15
 */
(function() {
    'use strict';

    angular.
        module('app', ['ngResource', 'ngCookies', 'ui.router', 'templates', 'ngMaterial', 'ngMessages', 'ngAnimate', 'autofocus']);
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

/**
 * @author: Alexander.Davidenko
 * @date: 9/14/15
 */
(function () {
    'use strict';

    angular
        .module('app')
        .controller('LoginController', function ($scope, $state, userData, validationService) {
            $scope.userData = userData;

            $scope.nextStep = function() {
                if ($scope.loginForm.$valid) {
                    $state.go('personal');
                }
            }
        });
})();
/**
 * @author: Alexander.Davidenko
 * @date: 9/17/15
 */
(function () {
    'use strict';

    angular
        .module('app')
        .controller('PersonalController', function ($scope, $state, userData, validationService) {
            $scope.userData = userData;

            $scope.genders = [
                { id: 1, text: 'male'},
                { id: 2, text: 'female'}
            ];

            $scope.nextStep = function() {
                if ($scope.personalForm.$valid) {
                    $state.go('login');
                }
            }
        });
})();
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
/**
 * @author: Alexander.Davidenko
 * @date: 9/17/15
 */
(function () {
    'use strict';

    angular
        .module('app')
        .directive('passwordValidator', function (userData) {
            return {
                restrict: 'A',
                require: 'ngModel',
                link: function (scope, element, attributes, ngModel) {
                    ngModel.$validators.passwordConfirmation = function (modelValue) {
                        return userData.password === modelValue;
                    }
                }
            }
        });
})();
/**
 * @author: Alexander.Davidenko
 * @date: 9/17/15
 */
(function () {
    'use strict';

    angular
        .module('app')
        .service('validationService', function (userData) {
            var validation = {};

            var isBlank = function(field) {
                if (field) {
                    return false;
                }
                return true;
            };
            var isCharactersFit = function(field) {
                if (field.length > 30) {
                    return false;
                }
                return true;
            };

            var isEmail = function(field) {
                var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
                return re.test(userData.email);
            };

            //validation.isLoginDataValid = function (form) {
            validation.validateForm = function (form) {


                if (isBlank(userData.login)) {
                    form['login'].$error.required = 'it\'s blank';
                    form.$setValidity(undefined, false);
                } else {
                    form.$setValidity(undefined, true);
                }

                if (!isCharactersFit(userData.login)) {
                    form['login'].$error['md-maxlength'] = 'The login has to be less than 30 characters long.';
                    form.$setValidity(undefined, false);
                } else {
                    form.$setValidity(undefined, true);
                }
                //if (!userData.login || userData.login.length > 30) {
                //    return false;
                //}

                if (isBlank(userData.email)) {
                    form['email'].$error.required = 'it\'s blank';
                    form.$setValidity(undefined, false);
                } else {
                    form.$setValidity(undefined, true);
                }
                //if (!isEmail(userData.email)) {
                //    form.email.$setValidity('email', false);
                //    form['email'].$error.email = 'Email is not valid';
                //    form.$setValidity(undefined, false);
                //} else {
                //    form.email.$setValidity('email', true);
                //    form.$setValidity(undefined, true);
                //}

                //if (!userData.password) {
                //    return false;
                //}
                //
                //if (!userData.password_confirmation) {
                //    return false;
                //}
                //
                //if (userData.password !== userData.password_confirmation) {
                //    return false;
                //}

                return true;
            };
            return validation;
        });
})();
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
            additionalInfo: undefined
        });
})();