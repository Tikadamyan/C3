import { userElements } from '../elements/userElements';

export const addNewAdminUser = (employeeName, username, password) => {
    cy.get(userElements.addButton).click();
    cy.get(userElements.userRoleDropdown).first().click().then(() => {
        cy.get(userElements.userRoleAndStatusOption).contains('Admin').click();
    });
    cy.get(userElements.userStatusDropdown).eq(1).click().then(() => {
        cy.get(userElements.userRoleAndStatusOption).contains('Enabled').click();
    });
    cy.get(userElements.employeeNameInput).type(employeeName).then(() => {
        cy.contains(userElements.employeeOption, employeeName).click();
    });
    cy.get(userElements.usernameInput).eq(1).type(username);
    cy.get(userElements.passwordInput).first().type(password);
    cy.get(userElements.passwordInput).eq(1).type(password);
    cy.get(userElements.saveButton).click();
    cy.wait(2000)
};

export const addNewESSUser = (employeeName, username, password) => {
    cy.get(userElements.addButton).click();
    cy.get(userElements.userRoleDropdown).first().click().then(() => {
        cy.get(userElements.userRoleAndStatusOption).contains('ESS').click();
    });
    cy.get(userElements.userStatusDropdown).eq(1).click().then(() => {
        cy.get(userElements.userRoleAndStatusOption).contains('Enabled').click();
    });
    cy.get(userElements.employeeNameInput).type(employeeName).then(() => {
        cy.contains(userElements.employeeOption, employeeName).click();
    });
    cy.get(userElements.usernameInput).eq(1).type(username);
    cy.get(userElements.passwordInput).first().type(password);
    cy.get(userElements.passwordInput).eq(1).type(password);
    cy.get(userElements.saveButton).click();
};

export const addBulkUsers = (employeeName, username, password, role, status) => {
    cy.get(userElements.addButton).click();
    cy.get(userElements.employeeNameInput).type(employeeName).then(() => {
        cy.contains(userElements.employeeOption, employeeName).click();
    });
    cy.get(userElements.usernameInput).eq(1).type(username);
    cy.get(userElements.userRoleDropdown).first().click().then(() => {
        cy.get(userElements.userRoleAndStatusOption).contains(role).click();
    })
    cy.get(userElements.userStatusDropdown).eq(1).click().then(() => {
        cy.get(userElements.userRoleAndStatusOption).contains(status).click();
    });
    cy.get(userElements.passwordInput).first().type(password);
    cy.get(userElements.passwordInput).eq(1).type(password);
    cy.get(userElements.saveButton).click();
    cy.wait(3000)
};