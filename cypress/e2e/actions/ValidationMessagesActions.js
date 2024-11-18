import { userElements } from '../elements/userElements';

export const validationForEmptyFilds = () => {
   cy.get(userElements.addButton).click()
   cy.get(userElements.saveButton).click()
   cy.get('.orangehrm-card-container')
      .find('.oxd-grid-item--gutters')
      .each(($el, index) => {
         if (index < 5) {
            cy.wrap($el).should('contain.text', 'Required');
         } else if (index === 5) {
            cy.wrap($el).should('contain.text', 'Passwords do not match');
         }
      });
}

export const validationForinvalidData = () => {

   cy.get(userElements.userRoleDropdown).first().click().then(() => {
      cy.get(userElements.userRoleAndStatusOption).contains('ESS').click();
   });
   cy.get(userElements.userStatusDropdown).eq(1).click().then(() => {
      cy.get(userElements.userRoleAndStatusOption).contains('Enabled').click();
   });
   cy.get(userElements.employeeNameInput).type('!!!!!!!');
   cy.get(userElements.usernameInput).eq(1).type('Ravi0007');
   cy.get(userElements.passwordInput).first().type('!!!!!!!');
   cy.get(userElements.passwordInput).eq(1).type('!!!!!!!');
   cy.get(userElements.saveButton).click();
   cy.get('.orangehrm-card-container')
      .find('.oxd-grid-item--gutters')
      .each(($el, index) => {
         if (index === 1) {
            cy.wrap($el).should('contain.text', 'Invalid');
         } else if (index === 4) {
            cy.wrap($el).should('contain.text', 'Your password must contain minimum 1 lower-case letter');
         }
      });
}

export const correctData = () => {
   cy.get(userElements.employeeNameInput).clear().type('Elon21 A Musk').then(() => {
      cy.contains(userElements.employeeOption, 'Elon21 A Musk').click();
   })
   cy.get(userElements.passwordInput).first().type('Ravi0007');
   cy.get(userElements.passwordInput).eq(1).type('Ravi0007');
   cy.get(userElements.saveButton).click();
}
