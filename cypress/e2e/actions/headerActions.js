import { headerElements } from '../elements/headerElements';

export const verifyDashboardIsVisible = () => {
    cy.get(headerElements.dashboardBreadcrumb)
        .should('be.visible')
        .and('contain', 'Dashboard');
};
