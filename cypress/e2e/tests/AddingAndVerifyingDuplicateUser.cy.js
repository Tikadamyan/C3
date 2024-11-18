import { login } from '../actions/loginActions';
import { verifyDashboardIsVisible } from '../actions/headerActions';
import { navigateToAdminModule } from '../actions/sidebarActions';
import { addNewAdminUser } from '../actions/addNewUserActions';
import { verifySuccessSavedToaster } from '../actions/toasterActions';
import {DeleteForExistingUser} from '../actions/deletUserActions';
import {VerifyingDuplicateUser } from '../actions/VerifyingDuplicateUser';

describe('Adding and Verifying Duplicate User', () => {
    it('should add and verify duplicate user successfully', () => {
        login('Admin', 'admin123');
        verifyDashboardIsVisible();
        navigateToAdminModule();
        addNewAdminUser('Ranga Akunuri', 'Givi006', 'Givi006');
        verifySuccessSavedToaster();
        addNewAdminUser('Ranga Akunuri', 'Givi006', 'Givi006');
        VerifyingDuplicateUser();
        navigateToAdminModule();
        DeleteForExistingUser();
    });
});
