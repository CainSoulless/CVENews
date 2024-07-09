
describe('Home Page Tests', () => {
  beforeEach(() => {
    cy.login('test', 'test');
  });

  it('Should display the correct page title', () => {
    cy.contains('ion-title', 'Últimos CVEs registrados').should('be.visible');
  });

  it('Should display a list of CVEs', () => {
    cy.get('ion-accordion').should('have.length.greaterThan', 0);
  });

  it('Should display CVE details when expanded', () => {
    cy.get('ion-accordion').first().click();
    cy.get('ion-accordion .ion-padding').should('be.visible');
    cy.get('ion-accordion .ion-padding').should('contain.text', 'Summary:');
    cy.get('ion-accordion .ion-padding').should('contain.text', 'Published:');
  });

  it('Should toggle favorite status', () => {
    cy.get('ion-accordion').first().within(() => {
      cy.get('ion-icon[name="star-outline"]').click();
      cy.get('ion-icon[name="star"]').should('exist');
    });
  });

  it('Should switch to the "favoritos" segment', () => {
    cy.get('ion-segment-button[value="favoritos"]').click();
    cy.get('ion-list').should('be.visible');
    // cy.get('.favorite-item').should('have.length.greaterThan', -1);
  });

  it('Should be at least one "favoritos" element on the list', () => {
    cy.toggleFavorite('CVE-2024-36782');
    cy.get('ion-segment-button[value="favoritos"]').click();
    cy.get('.favorite-item').should('have.length.greaterThan', 0);
  })

  it('Should switch back to the "todos" segment', () => {
    cy.get('ion-segment-button[value="todos"]').click();
    cy.get('ion-accordion').should('be.visible');
  });
});
