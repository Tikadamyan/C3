import { sidebarElements } from '../elements/sidebarElements';
import { userElements } from '../elements/userElements';
import { directoryElements } from '../elements/directoryElements'

export const verifyAdminSectionNotAccessible = () => {
  cy.get(sidebarElements.adminModuleLink).should('not.exist');
  cy.get(sidebarElements.directoryModuleLink).click();
  cy.get(directoryElements.jobTitle).first().click()
  cy.get(userElements.userRoleAndStatusOption).contains('Sales10').click();
  cy.get(userElements.saveButton).click();
  cy.get(directoryElements.directoryContanier).invoke('text').should((text) => {
    expect(text).to.match(/Record Found|Records Found/);
  });
};