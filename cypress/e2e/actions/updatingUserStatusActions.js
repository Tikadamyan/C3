import { userElements } from '../elements/userElements';

export const apdatingUserStatus = () => {
    cy.get(userElements.usernameInput).eq(1).type('Admin')
    cy.get(userElements.saveButton).click()
    cy.get(userElements.edDeButton).eq(1).click()
    cy.get(userElements.userRoleDropdown).eq(1).click().then(() => {
        cy.get(userElements.userRoleAndStatusOption).contains('Disabled').click();
    });
    cy.get(userElements.saveButton).click();

};