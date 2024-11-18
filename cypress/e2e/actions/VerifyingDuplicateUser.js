import { userElements } from '../elements/userElements';

export const VerifyingDuplicateUser = () => {
    cy.get(userElements.usernameContanier).eq(3).should('contain.text', 'Already exists');
}