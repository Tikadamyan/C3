import { login } from '../actions/loginActions';
import { verifyDashboardIsVisible } from '../actions/headerActions';
import { navigateToAdminModule } from '../actions/sidebarActions';
import { addNewAdminUser } from '../actions/addNewUserActions';
import { verifySuccessSavedToaster } from '../actions/toasterActions';
import { DeleteExistingUser } from '../actions/deletUserActions';

describe('Admin - Add New User', () => {
    it('should add a new user successfully', () => {
        login('Admin', 'admin123');
        verifyDashboardIsVisible();
        navigateToAdminModule();
        addNewAdminUser('Antony timothy', 'Jame007', 'Jame007');
        verifySuccessSavedToaster();
        DeleteExistingUser();
    });
});
