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