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