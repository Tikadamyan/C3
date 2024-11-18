import { login } from '../actions/loginActions';
import { verifyDashboardIsVisible } from '../actions/headerActions';
import { navigateToAdminModule } from '../actions/sidebarActions';
import { SearchByUserName, ResetPassword } from '../actions/resetUserPasswordActions';
import { verifySuccessUpdatedToaster } from '../actions/toasterActions';

describe('Reset a User Password', () => {
    it('should reset a user password', () => {
        login('Admin', 'admin123');
        verifyDashboardIsVisible();
        navigateToAdminModule();
        SearchByUserName();
        ResetPassword();
        verifySuccessUpdatedToaster();
    });
});
