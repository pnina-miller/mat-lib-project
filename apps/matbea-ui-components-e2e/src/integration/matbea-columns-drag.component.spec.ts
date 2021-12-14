describe('matbea-ui-components', () => {
  beforeEach(() => cy.visit('/iframe.html?id=matbeacolumnsdragcomponent--primary&knob-inUseList&knob-toChooseList&knob-locked'));

  it('should render the component', () => {
    cy.get('matbea-columns-drag').should('exist');
  });
});
