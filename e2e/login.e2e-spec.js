describe('Login Page', () => {
    beforeAll(() => {
      browser.get('/login');
    });
  
    it('should display the login page and allow login', () => {
      let usernameInput = element(by.css('input[name="username"]'));
      let passwordInput = element(by.css('input[name="password"]'));
      let loginButton = element(by.css('button[type="submit"]'));
  
      usernameInput.sendKeys('test');
      passwordInput.sendKeys('test');
      loginButton.click();
  
      expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + '/home');
    });
  
    it('should show an error message for invalid login', () => {
      let usernameInput = element(by.css('input[name="username"]'));
      let passwordInput = element(by.css('input[name="password"]'));
      let loginButton = element(by.css('button[type="submit"]'));
  
      usernameInput.sendKeys('wrong');
      passwordInput.sendKeys('credentials');
      loginButton.click();
  
      let toastMessage = element(by.css('ion-toast'));
  
      expect(toastMessage.getText()).toContain('Credenciales no son correctas');
    });
  });
  