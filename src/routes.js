import React from 'react';
import { LoginPage, LecturerLeaderPage, AdminPage } from './pages/index';
import AdminActionPage from './components/AdminAction/Action';

const routes = [
    {
        path: '/lecturer-leader',
        exact: false,
        main: () => <LecturerLeaderPage />
    },
    {
        path: '/login',
        exact: false,
        main: () => <LoginPage />
    },
    {
        path: '/admin',
        exact: true,
        main: () => <AdminPage />
    },
    {
        path: '/admin/action',
        exact: false,
        main: () => <AdminActionPage />
    }

];

export default routes;