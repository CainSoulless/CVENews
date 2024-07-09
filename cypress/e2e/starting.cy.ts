describe('Should enter to the login page', () => {
    it('Visits the Ionic Angular app', () => {
        cy.visit('http://localhost:4200', {timeout: 30000}); 
        cy.url().should('include', '/login');
        cy.contains('CVENews'); 

        
    });
});
  
// describe('Login Test', () => {
//     it('Visits the login page and logs in', () => {
//         cy.visit('/');
//         cy.contains('Login').click();
  
//         // Interactuar con elementos dentro del shadow DOM
//         cy.get('ion-input[name="username"]').shadow().find('input').type('testuser');
//         cy.get('ion-input[name="password"]').shadow().find('input').type('testpassword');
  
//         cy.contains('Submit').click();
  
//         // Verificar que el usuario ha iniciado sesión
//         cy.url().should('include', '/dashboard');
//         cy.contains('Welcome, testuser');
//     });
// });
