angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("contacts.html","\n<!--\n@author: Alexander.Davidenko \n@date: 9/18/15\n\n\n-->\n<md-content>\n  <login-steps-menu steps=\"steps\"></login-steps-menu>\n  <div class=\"center-form\">\n    <form name=\"contactsForm\">\n      <md-input-container>\n        <label>Phone</label>\n        <input ng-model=\"userData.phone\" name=\"phone\" ng-required=\"true\" autofocus=\"true\" phone-validator=\"phone-validator\"/>\n        <div ng-messages=\"contactsForm.phone.$error\">\n          <div ng-message=\"required\">This is required.</div>\n          <div ng-message=\"phoneValidity\">Phone number is not valid.</div>\n        </div>\n      </md-input-container>\n      <md-input-container>\n        <label>Country</label>\n        <input ng-model=\"userData.country\" name=\"contry\" ng-required=\"true\"/>\n        <div ng-messages=\"contactsForm.contry.$error\">\n          <div ng-message=\"required\">This is required.</div>\n        </div>\n      </md-input-container>\n      <md-input-container>\n        <label>City</label>\n        <input ng-model=\"userData.city\" name=\"city\" ng-required=\"true\"/>\n        <div ng-messages=\"contactsForm.city.$error\">\n          <div ng-message=\"required\">This is required.</div>\n        </div>\n      </md-input-container>\n      <md-input-container>\n        <label>Address</label>\n        <input ng-model=\"userData.address\" name=\"address\"/>\n      </md-input-container>\n    </form>\n    <md-button type=\"submit\" ng-click=\"nextStep()\" ng-disabled=\"!contactsForm.$valid\" class=\"next-button\">Next</md-button>\n  </div>\n</md-content>");
$templateCache.put("login.html","\n<!--\n@author: Alexander.Davidenko\n@date: 9/17/15\n\n-->\n<md-content>\n  <login-steps-menu steps=\"steps\"></login-steps-menu>\n  <div class=\"center-form\">\n    <form name=\"loginForm\">\n      <md-input-container>\n        <label>Login</label>\n        <input ng-model=\"userData.login\" name=\"login\" ng-required=\"true\" md-maxlength=\"30\" autofocus=\"true\" username-validator=\"username-validator\"/>\n        <div ng-messages=\"loginForm.login.$error\">\n          <div ng-message=\"required\">This is required.</div>\n          <div ng-message=\"md-maxlength\">The login has to be less than 30 characters long.</div>\n          <div ng-message=\"usernamePresence\">Username is exists.</div>\n        </div>\n      </md-input-container>\n      <md-input-container>\n        <label>Email</label>\n        <input ng-model=\"userData.email\" name=\"email\" ng-required=\"true\" type=\"email\"/>\n        <div ng-messages=\"loginForm.email.$error\">\n          <div ng-message=\"required\">This is required.</div>\n          <div ng-message=\"email\">Email is not valid</div>\n        </div>\n      </md-input-container>\n      <md-input-container>\n        <label>Password</label>\n        <input ng-model=\"userData.password\" name=\"password\" type=\"password\" ng-required=\"true\"/>\n        <div ng-messages=\"loginForm.password.$error\">\n          <div ng-message=\"required\">This is required.</div>\n        </div>\n      </md-input-container>\n      <md-input-container>\n        <label>Password confirmation</label>\n        <input ng-model=\"userData.password_confirmation\" name=\"password_confirmation\" type=\"password\" ng-required=\"true\" password-validator=\"password-validator\"/>\n        <div ng-messages=\"loginForm.password_confirmation.$error\">\n          <div ng-message=\"required\">This is required.</div>\n          <div ng-message=\"passwordConfirmation\">Password confirmation is not correct</div>\n        </div>\n      </md-input-container>\n      <md-button type=\"submit\" ng-click=\"nextStep()\" ng-disabled=\"!loginForm.$valid\" class=\"next-button\">Next</md-button>\n    </form>\n  </div>\n</md-content>");
$templateCache.put("personal.html","\n<!--\n@author: Alexander.Davidenko \n@date: 9/17/15\n\n-->\n<md-content>\n  <login-steps-menu steps=\"steps\"></login-steps-menu>\n  <div class=\"center-form\">\n    <form name=\"personalForm\">\n      <md-input-container>\n        <label>Name</label>\n        <input ng-model=\"userData.name\" name=\"name\" ng-required=\"true\" md-maxlength=\"30\" autofocus=\"true\"/>\n        <div ng-messages=\"personalForm.name.$error\">\n          <div ng-message=\"required\">This is required.</div>\n          <div ng-message=\"md-maxlength\">The name has to be less than 30 characters long.</div>\n        </div>\n      </md-input-container>\n      <md-input-container>\n        <label>Last name</label>\n        <input ng-model=\"userData.lastName\" name=\"last_name\" ng-required=\"true\"/>\n        <div ng-messages=\"personalForm.last_name.$error\">\n          <div ng-message=\"required\">This is required.</div>\n        </div>\n      </md-input-container>\n      <md-input-container>\n        <label>Birthday</label>\n        <input ng-model=\"userData.birthday\" name=\"birthday\" ng-required=\"true\" type=\"hidden\"/>\n      </md-input-container>\n      <md-datepicker ng-model=\"userData.birthday\" aria-label=\"birthday\"></md-datepicker>\n      <md-input-container>\n        <div ng-messages=\"personalForm.birthday.$error\">\n          <div ng-message=\"required\">This is required.</div>\n        </div>\n      </md-input-container>\n      <md-input-container>\n        <input ng-model=\"userData.gender\" name=\"gender\" ng-required=\"true\" type=\"hidden\" aria-label=\"user gender\"/>\n      </md-input-container>\n      <md-input-container>\n        <label>Gender</label>\n        <md-select ng-model=\"userData.gender\" aria-label=\"gender\">\n          <md-option ng-repeat=\"gender in genders\" ng-value=\"gender.id\">{{ gender.text }}</md-option>\n        </md-select>\n        <div ng-messages=\"personalForm.gender.$error\">\n          <div ng-message=\"required\">This is required.</div>\n        </div>\n      </md-input-container>\n      <md-input-container>\n        <label>Additional info</label>\n        <textarea ng-model=\"userData.additionalInfo\" md-maxlength=\"512\" name=\"additional_info\"></textarea>\n        <div ng-messages=\"personalForm.additional_info.$error\">\n          <div ng-message=\"required\">Length of this field is limited to 512 characters</div>\n        </div>\n      </md-input-container>\n      <md-button type=\"submit\" ng-click=\"nextStep()\" ng-disabled=\"!personalForm.$valid\" class=\"next-button\">Next</md-button>\n    </form>\n  </div>\n</md-content>");
$templateCache.put("summary.html","\n<!--\n@author: Alexander.Davidenko \n@date: 9/18/15\n\n-->\n<md-content>\n  <login-steps-menu steps=\"steps\"></login-steps-menu>\n  <div class=\"center-form\">\n    <md-content>\n      <div>Login : {{userData.saved.login}}</div>\n      <div>Email : {{userData.saved.email}}</div>\n      <div>Password : {{userData.saved.password}}</div>\n      <div>Password confirmation : {{userData.saved.password_confirmation}}</div>\n      <div>Name : {{userData.saved.name}}</div>\n      <div>Last name : {{userData.saved.lastName}}</div>\n      <div>Gender : {{gender}}</div>\n      <div>Additional info : {{userData.saved.additionalInfo}}</div>\n      <div>Phone : {{userData.saved.phone}}</div>\n      <div>Country : {{userData.saved.country}}</div>\n      <div>City : {{userData.saved.city}}</div>\n      <div>Address : {{userData.saved.address}}</div>\n      <div>Terms : {{userData.saved.terms}}</div>\n    </md-content>\n    <md-button type=\"submit\" ng-click=\"nextStep()\" class=\"next-button\">Next</md-button>\n  </div>\n</md-content>");
$templateCache.put("terms.html","\n<!--\n@author: Alexander.Davidenko \n@date: 9/18/15\n\n-->\n<md-content>\n  <login-steps-menu steps=\"steps\"></login-steps-menu>\n  <div class=\"center-form\">\n    <form name=\"termsForm\">\n      <md-content class=\"terms-of-use\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</md-content>\n      <md-input-container>\n        <md-checkbox ng-model=\"userData.terms\" name=\"terms\" ng-required=\"true\" autofocus=\"true\">agree with terms of use</md-checkbox>\n        <div ng-messages=\"termsForm.terms.$error\">\n          <div ng-message=\"required\">This is required.</div>\n        </div>\n      </md-input-container>\n      <md-button type=\"submit\" ng-click=\"nextStep()\" ng-disabled=\"!termsForm.$valid\" class=\"next-button\">Next</md-button>\n    </form>\n  </div>\n</md-content>");
$templateCache.put("users.html","\n<!--\n@author: Alexander.Davidenko \n@date: 9/18/15\n\n-->\n<md-content>\n  <login-steps-menu steps=\"steps\"></login-steps-menu>\n  <div class=\"center-form\">\n    <md-content>\n      <md-list class=\"users\">\n        <md-list-item ng-repeat=\"user in users\" class=\"md-2-line\"><span class=\"user\"><i class=\"material-icons\">person</i><span>{{user.name}}</span></span></md-list-item>\n      </md-list>\n    </md-content>\n  </div>\n</md-content>");
$templateCache.put("errors/page404.html","\n<h1>404 Not found</h1>");
$templateCache.put("directives/loginStepsMenu.html","\n<!--\n@author: Alexander.Davidenko \n@date: 9/17/15\n\n-->\n<div class=\"steps-menu\">\n  <ul>\n    <li ng-repeat=\"step in steps track by $index\">\n      <md-button ui-sref=\"{{step.name}}\" ng-class=\"{\'md-primary\': step.active}\" ng-disabled=\"!step.enabled\">{{step.text}}</md-button>\n    </li>\n  </ul>\n</div>");}]);