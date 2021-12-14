describe('matbea-ui-components', () => {
  beforeEach(() => cy.visit('/iframe.html?id=matbeaiconbuttoncomponent--primary&knob-icon=home&knob-lable_text=lable text&knob-disabled=false&knob-positionTooltip=after&knob-tooltip='));

  it('should render the component', () => {
    cy.get('matbea-icon-button').should('exist');
  });
});
