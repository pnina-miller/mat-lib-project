describe('matbea-shared-components', () => {
  beforeEach(() => cy.visit('/iframe.html?id=matbeahierarchycombocomponent--primary&knob-misparChativa=03&knob-misparAgaf=&knob-kodSector='));

  it('should render the component', () => {
    cy.get('pdesks-matbea-hierarchy-combo').should('exist');
  });
});
