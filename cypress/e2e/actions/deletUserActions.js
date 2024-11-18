import { userElements } from '../elements/userElements';

export const DeleteExistingUser = () => {
    cy.get(userElements.usernameInput).eq(1).type('James007')
    cy.get(userElements.saveButton).click()
    cy.get(userElements.edDeButton).eq(0).click()
    cy.get(userElements.noYesDelete).eq(1).click()
}

export const DeleteExistingUserForValidation = () => {
    cy.get(userElements.usernameInput).eq(1).type('Ravi0007')
    cy.get(userElements.saveButton).click()
    cy.get(userElements.edDeButton).eq(0).click()
    cy.get(userElements.noYesDelete).eq(1).click()
}

export const DeleteForExistingUser = () => {
    cy.get(userElements.usernameInput).eq(1).type('Givi006')
    cy.get(userElements.saveButton).click()
    cy.get(userElements.edDeButton).eq(0).click()
    cy.get(userElements.noYesDelete).eq(1).click()
}

export const deleteBulkUser = (username) => {
    cy.get(userElements.usernameInput).eq(1).clear().type(username);
    cy.get(userElements.saveButton).click();
    cy.get(userElements.edDeButton).eq(0).click();
    cy.get(userElements.noYesDelete).eq(1).click();
};