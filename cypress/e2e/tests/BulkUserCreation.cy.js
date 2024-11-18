import { login } from '../actions/loginActions';
import { verifyDashboardIsVisible } from '../actions/headerActions';
import { navigateToAdminModule } from '../actions/sidebarActions';
import { addBulkUsers } from '../actions/addNewUserActions';
import { verifySuccessSavedToaster } from '../actions/toasterActions';
import { deleteBulkUser } from '../actions/deletUserActions';

describe('Bulk User Creation and Validation', () => {
    const users = [
        { employeeName: 'Nuvama Wealth Uat', username: 'Trial2_2', password: 'Trial2_2', role: 'Admin', status: 'Enabled' },
        { employeeName: 'Hannah Marlowe Lang', username: 'Timothy Lewis', password: 'Timothy01', role: 'ESS', status: 'Disabled' },
        { employeeName: 'aniket Ashok patil', username: 'Tony111', password: '11Aldridge', role: 'Admin', status: 'Enabled' },
    ];

    it('should create multiple users and validate their details', () => {
        login('Admin', 'admin123');
        verifyDashboardIsVisible();
        navigateToAdminModule();
        cy.wrap(users).each((user) => {
            addBulkUsers(user.employeeName, user.username, user.password, user.role, user.status);
            verifySuccessSavedToaster();
        });
        cy.wrap(users).each((user) => {
            deleteBulkUser(user.username);
        });
    });
});
