describe('matbea-shared-components', () => {
  beforeEach(() => cy.visit('/iframe.html?id=matbeaagafcombocomponent--primary&knob-misparChativa=03'));

  it('should render the component', () => {
    cy.get('pdesks-matbea-agaf-combo').should('exist');
  });
});
