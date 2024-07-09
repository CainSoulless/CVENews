describe('Login Page Tests', () => {
  it('Should redirect to login page when accessing root', () => {
    cy.visit('http://localhost:4200', {timeout: 30000});
    cy.url().should('include', '/login');
    cy.contains('Bienvenido a CVENews');
  });

  it('Should login with valid credentials', () => {
    cy.login('test', 'test');
    cy.url().should('include', '/home')
    // cy.contains('Welcome, your-username'); // Ajusta esto según el mensaje de bienvenida o algún elemento específico de la página post-login
  });

  it('Should display a list of CVEs', () => {
    cy.get('ion-accordion').should('have.length.greaterThan', 0); // Ajusta según el número esperado de CVEs
  });

});
