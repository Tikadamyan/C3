import { login } from '../actions/loginActions';
import { verifyDashboardIsVisible } from '../actions/headerActions';
import { navigateToAdminModule } from '../actions/sidebarActions';
import { addNewESSUser } from '../actions/addNewUserActions';
import { verifySuccessSavedToaster } from '../actions/toasterActions';
import { logout } from '../actions/logoutActions';
import { verifyAdminSectionNotAccessible } from '../actions/ValidatingUserRolePermissions';
import { DeleteExistingUserForValidation } from '../actions/deletUserActions';

describe('Validating User Role Permissions', () => {
    it('should vakidate user role', () => {
        login('Admin', 'admin123');
        verifyDashboardIsVisible();
        navigateToAdminModule();
        addNewESSUser('Elon21 A Musk', 'Ravi007', 'Ravi007');
        verifySuccessSavedToaster();
        logout();
        login('Ravi007', 'Ravi007');
        verifyAdminSectionNotAccessible();
        logout();
        login('Admin', 'admin123');
        navigateToAdminModule();
        DeleteExistingUserForValidation();
    });
});
