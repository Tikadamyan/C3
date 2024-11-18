import { toasterElements } from '../elements/toasterElements';

export const verifySuccessSavedToaster = () => {
    cy.get(toasterElements.successToaster)
        .should('be.visible')
        .and('contain', 'Successfully Saved');
    cy.wait(4000);
};

export const verifySuccessUpdatedToaster = () => {
    cy.get(toasterElements.successToaster)
        .should('exist')
        .and('contain', 'Successfully Updated');
};

export const verifySuccessdeleteToaster = () => {
    cy.get(toasterElements.successToaster)
        .should('exist')
        .and('contain', 'Successfully Deleted');
};



