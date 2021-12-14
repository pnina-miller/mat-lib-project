describe('matbea-ui-components', () => {
  beforeEach(() => cy.visit('/iframe.html?id=matbeadividercomponent--primary&knob-inset=false&knob-vertical=false'));

  it('should render the component', () => {
    cy.get('matbea-divider').should('exist');
  });
});
