describe('matbea-ui-components', () => {
  beforeEach(() => cy.visit('/iframe.html?id=matbeacolumnspickercomponent--primary'));

  it('should render the component', () => {
    cy.get('matbea-columns-picker').should('exist');
  });
});
