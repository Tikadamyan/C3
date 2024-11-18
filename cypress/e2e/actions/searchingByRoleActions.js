import { userElements } from '../elements/userElements';

export const enterESSUserRoleandVeriy = () => {
    cy.get(userElements.userRoleDropdown).first().click().then(() => {
        cy.get(userElements.userRoleAndStatusOption).contains('ESS').click();
    });
    cy.get(userElements.saveButton).click();
    cy.wait(4000)
    cy.get(userElements.table).within(() => {
        cy.get(`${userElements.tableBody} ${userElements.tableRow}`).each(($row) => {
            cy.wrap($row).find(userElements.tableCell).eq(2)
                .should('contain.text', 'ESS');
        });
    })
}
