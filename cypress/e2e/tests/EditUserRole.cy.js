import { login } from '../actions/loginActions';
import { verifyDashboardIsVisible } from '../actions/headerActions';
import { navigateToAdminModule } from '../actions/sidebarActions';
import { EditingExistingUserRole } from '../actions/editUserRoleActions';
import { verifySuccessUpdatedToaster } from '../actions/toasterActions';

describe('Edit a User Role', () => {
    it('should edit a  user role', () => {
        login('Admin', 'admin123');
        verifyDashboardIsVisible();
        navigateToAdminModule();
        EditingExistingUserRole();
        verifySuccessUpdatedToaster();
    });
});
