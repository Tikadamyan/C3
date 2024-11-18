import { userElements } from '../elements/userElements';

export const SearchByUserName = () => {
    cy.get(userElements.usernameInput).eq(1).type('Admin')
    cy.get(userElements.saveButton).click();
    cy.get(userElements.edDeButton).eq(1).click()
}

export const ResetPassword = () => {
    const password = 'NewPassword123';
    cy.get(userElements.changePasswordBox).click()
    cy.get(userElements.passwordInput).first().type(password);
    cy.get(userElements.passwordInput).eq(1).type(password);
    cy.get(userElements.saveButton).click();
}