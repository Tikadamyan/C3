import { headerElements } from '../elements/headerElements';

export const logout = () => {
    cy.get(headerElements.userDropDown).click()
    cy.get(headerElements.logout).click()
}