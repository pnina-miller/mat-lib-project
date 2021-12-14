describe('matbea-shared-components', () => {
  beforeEach(() => cy.visit('/iframe.html?id=matbeamakalcombocomponent--primary&knob-kodSector='));

  it('should render the component', () => {
    cy.get('pdesks-matbea-makal-combo').should('exist');
  });
});
