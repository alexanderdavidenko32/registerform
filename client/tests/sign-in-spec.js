describe('my project tests', function() {
    var index = 'http://localhost:8081';

    beforeEach(function() {
        browser.get(index);
    });

    it('creates a new user', function() {

        var randUser = 'user-' + Math.random(),
            password = Math.random().toString(),
            randUserName = randUser + ' name',
            activeButton;

        var updateActiveButtonState = function () {
            activeButton = element(by.className('md-primary'));
        };

        updateActiveButtonState();
        expect(activeButton.getText()).toBe('LOGIN');
        element(by.model('userData.login')).sendKeys(randUser);
        element(by.model('userData.email')).sendKeys(randUser + '@email.com');
        element(by.model('userData.password')).sendKeys(password);
        element(by.model('userData.password_confirmation')).sendKeys(password);
        element(by.className('next-button')).click();

        updateActiveButtonState();
        expect(activeButton.getText()).toBe('PERSONAL');
        element(by.model('userData.name')).sendKeys(randUserName);
        element(by.model('userData.lastName')).sendKeys(randUser + ' last name');
        element(by.className('md-datepicker-input')).sendKeys('01/01/1988');
        element(by.css('md-select')).click();
        element.all(by.repeater('gender in genders')).get(1).click();
        element(by.model('userData.additionalInfo')).sendKeys(randUser + ' additional info');
        element(by.className('next-button')).click();

        updateActiveButtonState();
        expect(activeButton.getText()).toBe('CONTACTS');
        element(by.model('userData.phone')).sendKeys('+375 29 123 12 12');
        element(by.model('userData.country')).sendKeys('Belarus');
        element(by.model('userData.city')).sendKeys('Minsk');
        element(by.model('userData.address')).sendKeys('ul. Kalvariyskaya 100/500');
        element(by.className('next-button')).click();

        updateActiveButtonState();
        expect(activeButton.getText()).toBe('TERMS OF USE');
        element(by.model('userData.terms')).click();
        element(by.className('next-button')).click();


        updateActiveButtonState();
        expect(activeButton.getText()).toBe('SUMMARY');
        element(by.className('next-button')).click();

        updateActiveButtonState();
        expect(activeButton.getText()).toBe('USERS');
        var users = element.all(by.repeater('user in users')).then(function (existingUsers) {
            var userName = existingUsers[existingUsers.length - 1].element(by.css('span span'));
            expect(userName.getText()).toEqual(randUserName)
        });
    });

});


