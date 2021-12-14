describe('matbea-ui-components', () => {
  beforeEach(() => cy.visit('/iframe.html?id=matbeatablecomponent--primary&knob-displayedColumns&knob-dataSource$&knob-columsToDisplay$'));

  it('should render the component', () => {
    cy.get('matbea-table').should('exist');
  });
});
