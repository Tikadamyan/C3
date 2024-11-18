import { login } from '../actions/loginActions';
import { verifyDashboardIsVisible } from '../actions/headerActions';
import { navigateToAdminModule } from '../actions/sidebarActions';
import { validationForEmptyFilds, validationForinvalidData, correctData } from '../actions/ValidationMessagesActions';
import { DeleteExistingUserForValidation } from '../actions/deletUserActions';
import { verifySuccessSavedToaster } from '../actions/toasterActions';

describe('Verifying Fields Validation Messages', () => {
    it('should verify validation messages', () => {
        login('Admin', 'admin123');
        verifyDashboardIsVisible();
        navigateToAdminModule();
        validationForEmptyFilds();
        validationForinvalidData();
        correctData();
        verifySuccessSavedToaster();
        DeleteExistingUserForValidation();
    });
});
