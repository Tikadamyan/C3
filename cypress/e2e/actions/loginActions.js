import { loginElements } from '../elements/loginElements';

export const login = (username, password) => {
    cy.visit(loginElements.loginUrl);
    cy.get(loginElements.usernameInput).type(username);
    cy.get(loginElements.passwordInput).type(password);
    cy.get(loginElements.loginButton).click();
};
