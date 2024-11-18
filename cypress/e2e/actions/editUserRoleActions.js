import { userElements } from '../elements/userElements';

export const EditingExistingUserRole = () => {
    cy.get(userElements.usernameInput).eq(1).type('Admin')
    cy.get(userElements.saveButton).click()
    cy.get(userElements.edDeButton).eq(1).click()
    cy.get(userElements.userRoleDropdown).first().click().then(() => {
        cy.get(userElements.userRoleAndStatusOption).contains('ESS').click();
    });
    cy.get(userElements.saveButton).click();
};
