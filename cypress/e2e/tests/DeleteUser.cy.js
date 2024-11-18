import { login } from '../actions/loginActions';
import { verifyDashboardIsVisible } from '../actions/headerActions';
import { navigateToAdminModule } from '../actions/sidebarActions';
import { DeleteExistingUser } from '../actions/deletUserActions';
import { verifySuccessdeleteToaster } from '../actions/toasterActions';
import { addNewAdminUser } from '../actions/addNewUserActions';
import { logout } from '../actions/logoutActions';

describe('Delete User', () => {
    it('should delete an existing user successfully', () => {
        login('Admin', 'admin123');
        verifyDashboardIsVisible();
        navigateToAdminModule();
        addNewAdminUser('Nuvama Wealth Uat', 'James007', 'James007');
        logout();
        login('Admin', 'admin123');
        navigateToAdminModule();
        DeleteExistingUser();
        verifySuccessdeleteToaster();
    });
});
