describe('matbea-ui-components', () => {
  beforeEach(() => cy.visit('/iframe.html?id=matbeapickerelementcomponent--primary&knob-type=add&knob-disabled=false'));

  it('should render the component', () => {
    cy.get('matbea-picker-element').should('exist');
  });
});
