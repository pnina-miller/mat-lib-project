describe('matbea-ui-components', () => {
  beforeEach(() => cy.visit('/iframe.html?id=radiobuttontabcomponent--primary&knob-dataList&knob-value'));

  it('should render the component', () => {
    cy.get('matbea-radio-button-tab').should('exist');
  });
});
