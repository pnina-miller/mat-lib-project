describe('matbea-shared-components', () => {
  beforeEach(() => cy.visit('/iframe.html?id=matbeasectorcombocomponent--primary&knob-misparAgaf=22'));

  it('should render the component', () => {
    cy.get('pdesks-matbea-sector-combo').should('exist');
  });
});
