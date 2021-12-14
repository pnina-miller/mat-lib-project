describe('matbea-shared-components', () => {
  beforeEach(() => cy.visit('/iframe.html?id=matbeachativacombocomponent--primary'));

  it('should render the component', () => {
    cy.get('pdesks-matbea-chativa-combo').should('exist');
  });
});
