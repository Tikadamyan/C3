import { login } from '../actions/loginActions';
import { verifyDashboardIsVisible } from '../actions/headerActions';
import { navigateToAdminModule } from '../actions/sidebarActions';
import { apdatingUserStatus } from '../actions/updatingUserStatusActions';
import { verifySuccessUpdatedToaster } from '../actions/toasterActions';

describe('Update a User Status', () => {
    it('should update a user status', () => {
        login('Admin', 'admin123');
        verifyDashboardIsVisible();
        navigateToAdminModule();
        apdatingUserStatus();
        verifySuccessUpdatedToaster();
    });
});
