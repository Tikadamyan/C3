import { login } from '../actions/loginActions';
import { verifyDashboardIsVisible } from '../actions/headerActions';
import { navigateToAdminModule } from '../actions/sidebarActions';
import { enterESSUserRoleandVeriy } from '../actions/searchingByRoleActions';

describe('Searching for Users by Role', () => {
    it('Verify that all displayed users match the selected role', () => {
        login('Admin', 'admin123');
        verifyDashboardIsVisible();
        navigateToAdminModule();
        enterESSUserRoleandVeriy();
    });
});
