import { sidebarElements } from '../elements/sidebarElements';

export const navigateToAdminModule = () => {
    cy.get(sidebarElements.adminModuleLink).click();
};

