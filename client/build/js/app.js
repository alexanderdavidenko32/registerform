angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("contacts.html","\n<!--\n@author: Alexander.Davidenko \n@date: 9/18/15\n\n\n-->\n<md-content>\n  <login-steps-menu steps=\"steps\"></login-steps-menu>\n  <div class=\"center-form\">\n    <form name=\"contactsForm\">\n      <md-input-container>\n        <label>Phone</label>\n        <input ng-model=\"userData.phone\" name=\"phone\" ng-required=\"true\" autofocus=\"true\"/>\n        <div ng-messages=\"contactsForm.phone.$error\">\n          <div ng-message=\"required\">This is required.</div>\n        </div>\n      </md-input-container>\n      <md-input-container>\n        <label>Country</label>\n        <input ng-model=\"userData.country\" name=\"contry\" ng-required=\"true\"/>\n        <div ng-messages=\"contactsForm.contry.$error\">\n          <div ng-message=\"required\">This is required.</div>\n        </div>\n      </md-input-container>\n      <md-input-container>\n        <label>City</label>\n        <input ng-model=\"userData.city\" name=\"city\" ng-required=\"true\"/>\n        <div ng-messages=\"contactsForm.city.$error\">\n          <div ng-message=\"required\">This is required.</div>\n        </div>\n      </md-input-container>\n      <md-input-container>\n        <label>Address</label>\n        <input ng-model=\"userData.address\" name=\"address\"/>\n      </md-input-container>\n    </form>\n    <md-button type=\"submit\" ng-click=\"nextStep()\" ng-disabled=\"!contactsForm.$valid\" class=\"next-button\">Next</md-button>\n  </div>\n</md-content>");
$templateCache.put("login.html","\n<!--\n@author: Alexander.Davidenko\n@date: 9/17/15\n\n-->\n<md-content>\n  <login-steps-menu steps=\"steps\"></login-steps-menu>\n  <div class=\"center-form\">\n    <form name=\"loginForm\">\n      <md-input-container>\n        <label>Login</label>\n        <input ng-model=\"userData.login\" name=\"login\" ng-required=\"true\" md-maxlength=\"30\" autofocus=\"true\"/>\n        <div ng-messages=\"loginForm.login.$error\">\n          <div ng-message=\"required\">This is required.</div>\n          <div ng-message=\"md-maxlength\">The login has to be less than 30 characters long.</div>\n        </div>\n      </md-input-container>\n      <md-input-container>\n        <label>Email</label>\n        <input ng-model=\"userData.email\" name=\"email\" ng-required=\"true\" type=\"email\"/>\n        <div ng-messages=\"loginForm.email.$error\">\n          <div ng-message=\"required\">This is required.</div>\n          <div ng-message=\"email\">Email is not valid</div>\n        </div>\n      </md-input-container>\n      <md-input-container>\n        <label>Password</label>\n        <input ng-model=\"userData.password\" name=\"password\" type=\"password\" ng-required=\"true\"/>\n        <div ng-messages=\"loginForm.password.$error\">\n          <div ng-message=\"required\">This is required.</div>\n        </div>\n      </md-input-container>\n      <md-input-container>\n        <label>Password confirmation</label>\n        <input ng-model=\"userData.password_confirmation\" name=\"password_confirmation\" type=\"password\" ng-required=\"true\" password-validator=\"password-validator\"/>\n        <div ng-messages=\"loginForm.password_confirmation.$error\">\n          <div ng-message=\"required\">This is required.</div>\n          <div ng-message=\"passwordConfirmation\">Password confirmation is not correct</div>\n        </div>\n      </md-input-container>\n      <md-button type=\"submit\" ng-click=\"nextStep()\" ng-disabled=\"!loginForm.$valid\" class=\"next-button\">Next</md-button>\n    </form>\n  </div>\n</md-content>");
$templateCache.put("personal.html","\n<!--\n@author: Alexander.Davidenko \n@date: 9/17/15\n\n-->\n<md-content>\n  <login-steps-menu steps=\"steps\"></login-steps-menu>\n  <div class=\"center-form\">\n    <form name=\"personalForm\">\n      <md-input-container>\n        <label>Name</label>\n        <input ng-model=\"userData.name\" name=\"name\" ng-required=\"true\" md-maxlength=\"30\" autofocus=\"true\"/>\n        <div ng-messages=\"personalForm.name.$error\">\n          <div ng-message=\"required\">This is required.</div>\n          <div ng-message=\"md-maxlength\">The name has to be less than 30 characters long.</div>\n        </div>\n      </md-input-container>\n      <md-input-container>\n        <label>Last name</label>\n        <input ng-model=\"userData.lastName\" name=\"last_name\" ng-required=\"true\"/>\n        <div ng-messages=\"personalForm.last_name.$error\">\n          <div ng-message=\"required\">This is required.</div>\n        </div>\n      </md-input-container>\n      <md-input-container>\n        <label>Birthday</label>\n        <input ng-model=\"userData.birthday\" name=\"birthday\" ng-required=\"true\" type=\"hidden\"/>\n      </md-input-container>\n      <md-datepicker ng-model=\"userData.birthday\" aria-label=\"birthday\"></md-datepicker>\n      <md-input-container>\n        <div ng-messages=\"personalForm.birthday.$error\">\n          <div ng-message=\"required\">This is required.</div>\n        </div>\n      </md-input-container>\n      <md-input-container>\n        <input ng-model=\"userData.userGender\" name=\"user_gender\" ng-required=\"true\" type=\"hidden\" aria-label=\"user gender\"/>\n      </md-input-container>\n      <md-input-container>\n        <label>Gender</label>\n        <md-select ng-model=\"userData.userGender\" aria-label=\"gender\">\n          <md-option ng-repeat=\"gender in genders\" ng-value=\"gender.id\">{{ gender.text }}</md-option>\n        </md-select>\n        <div ng-messages=\"personalForm.user_gender.$error\">\n          <div ng-message=\"required\">This is required.</div>\n        </div>\n      </md-input-container>\n      <md-input-container>\n        <label>Additional info</label>\n        <textarea ng-model=\"userData.additionalInfo\" md-maxlength=\"512\" name=\"additional_info\"></textarea>\n        <div ng-messages=\"personalForm.additional_info.$error\">\n          <div ng-message=\"required\">Length of this field is limited to 512 characters</div>\n        </div>\n      </md-input-container>\n      <md-button type=\"submit\" ng-click=\"nextStep()\" ng-disabled=\"!personalForm.$valid\" class=\"next-button\">Next</md-button>\n    </form>\n  </div>\n</md-content>");
$templateCache.put("summary.html","\n<!--\n@author: Alexander.Davidenko \n@date: 9/18/15\n\n-->\n<md-content>\n  <login-steps-menu steps=\"steps\"></login-steps-menu>\n  <div class=\"center-form\">\n    <md-content>\n      <div>Login : {{login}}</div>\n      <div>Email : {{email}}</div>\n      <div>Password : {{password}}</div>\n      <div>Password confirmation : {{password_confirmation}}</div>\n      <div>Name : {{name}}</div>\n      <div>Last name : {{lastName}}</div>\n      <div>Gender : {{gender}}</div>\n      <div>Additional info : {{additionalInfo}}</div>\n      <div>Phone : {{phone}}</div>\n      <div>Country : {{country}}</div>\n      <div>City : {{city}}</div>\n      <div>Address : {{address}}</div>\n      <div>Terms : {{terms}}</div>\n    </md-content>\n    <md-button type=\"submit\" ng-click=\"nextStep()\" class=\"next-button\">Next</md-button>\n  </div>\n</md-content>");
$templateCache.put("terms.html","\n<!--\n@author: Alexander.Davidenko \n@date: 9/18/15\n\n-->\n<md-content>\n  <login-steps-menu steps=\"steps\"></login-steps-menu>\n  <div class=\"center-form\">\n    <form name=\"termsForm\">\n      <md-content class=\"terms-of-use\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</md-content>\n      <md-input-container>\n        <md-checkbox ng-model=\"userData.terms\" name=\"terms\" ng-required=\"true\" autofocus=\"true\">agree with terms of use</md-checkbox>\n        <div ng-messages=\"termsForm.terms.$error\">\n          <div ng-message=\"required\">This is required.</div>\n        </div>\n      </md-input-container>\n      <md-button type=\"submit\" ng-click=\"nextStep()\" ng-disabled=\"!termsForm.$valid\" class=\"next-button\">Next</md-button>\n    </form>\n  </div>\n</md-content>");
$templateCache.put("users.html","\n<!--\n@author: Alexander.Davidenko \n@date: 9/18/15\n\n-->\n<md-content>\n  <login-steps-menu steps=\"steps\"></login-steps-menu>\n  <div class=\"center-form\">\n    <md-content>\n      <md-list class=\"users\">\n        <md-list-item ng-repeat=\"user in users\" class=\"md-2-line\"><span class=\"user\"><i class=\"material-icons\">person</i><span>{{user.name}}</span></span></md-list-item>\n      </md-list>\n    </md-content>\n    <md-button type=\"submit\" ng-click=\"nextStep()\" class=\"next-button\">Next</md-button>\n  </div>\n</md-content>");
$templateCache.put("directives/loginStepsMenu.html","\n<!--\n@author: Alexander.Davidenko \n@date: 9/17/15\n\n-->\n<div class=\"steps-menu\">\n  <ul>\n    <li ng-repeat=\"step in steps track by $index\">\n      <md-button ui-sref=\"{{step.name}}\" ng-class=\"{\'md-primary\': step.active}\" ng-disabled=\"!step.enabled\">{{step.text}}</md-button>\n    </li>\n  </ul>\n</div>");
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
        .config(function ($locationProvider, $httpProvider, $mdIconProvider) {
            // ie
            delete $httpProvider.defaults.headers.common['X-Requested-With'];
            $httpProvider.defaults.useXDomain = true;

            $httpProvider.defaults.withCredentials = true;

            $locationProvider.html5Mode().enabled = true;

            //$httpProvider.interceptors.push('authInterceptor');
            $mdIconProvider
                //.iconSet('social', 'client/vendors/svg/ic_person_black_24px.svg', 24)
                .defaultIconSet('client/vendors/svg/ic_person_black_24px.svg', 24);
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

    angular
        .module('app')
        .run(function($rootScope, $state, validationService) {
            $rootScope.$on('$stateChangeStart', function(event, next) {
                if (!$state.current.abstract
                    && !validationService.isStepValid($state.current)
                    && $state.current.stepOrder < next.stepOrder) {

                    event.preventDefault();
                }
                if ($state.current.abstract && next.name !== 'login' && !validationService.isStepValid(next)) {
                    event.preventDefault();
                    $state.go('login');
                }
            });
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
        .controller('ContactsController', function ($scope, $state, userData, validationService) {
            $scope.userData = userData;

            $scope.nextStep = function() {
                if ($scope.contactsForm.$valid) {
                    $state.go('terms');
                }
            }
        });
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
                    $state.go('contacts');
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
        .controller('SummaryController', function ($scope, $state, userData, validationService) {
            $scope.userData = userData;

            $scope.nextStep = function() {
                $state.go('users');
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
        .controller('TermsController', function ($scope, $state, userData, validationService) {
            $scope.userData = userData;

            $scope.nextStep = function() {
                if ($scope.termsForm.$valid) {
                    $state.go('summary');
                }
            }
        });
})();
/**
 * @author: Alexander.Davidenko
 * @date: 9/18/15
 */
(function () {
    'use strict';

    angular
        .module('app')
        .controller('UsersController', function ($scope, $state, userData) {
            $scope.userData = userData;
            $scope.users = [{name: 'user1'}, {name: 'user2'}]

            $scope.nextStep = function() {
                $state.go('login');
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

                controller: function ($scope, $state, $filter, validationService) {
                    var filter = $filter('filter'),
                        states = $state.get(),
                        steps = filter(states, {isStep: true});

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

                    steps.map(function (item, index) {
                        item.active = item === $state.current;

                        if ($state.current  === item ) {
                            item.enabled = true;
                        } else {
                            item.enabled = isStepEnabled(item);
                        }
                    });
                    $scope.steps = steps;
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

            var isBlank = function(value) {
                return !value;

            };
            var isCharactersFit = function(value) {
                return value.length <= 30;
            };

            var isEmail = function(value) {
                var re = /[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*/i;
                return re.test(value);
            };

            validation.isStepValid = function (step) {
                var stepValidators = {
                    'login': function () {
                        if (isBlank(userData.login) || !isCharactersFit(userData.login)) {
                            return false;
                        }
                        if (isBlank(userData.email) || !isEmail(userData.email)) {
                            return false;
                        }
                        if (isBlank(userData.password) || isBlank(userData.password_confirmation)) {
                            return false;
                        }
                        return userData.password === userData.password_confirmation;

                    },
                    'personal': function () {
                        if (isBlank(userData.name) || !isCharactersFit(userData.name)) {
                            return false;
                        }
                        return !(isBlank(userData.lastName) || isBlank(userData.birthday) || isBlank(userData.userGender));

                    },
                    'contacts': function () {
                        return !(isBlank(userData.phone) || isBlank(userData.country) || isBlank(userData.city));

                    },
                    'terms': function () {
                        return !isBlank(userData.terms);

                    }

                };
                return stepValidators[step.name] && stepValidators[step.name]();
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
            additionalInfo: undefined,

            phone: undefined,
            country: undefined,
            city: undefined,
            address: undefined,

            terms: undefined
        });
})();