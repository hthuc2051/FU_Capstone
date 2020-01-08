import React from 'react';
import { LoginPage, LecturerPage, AdminPage } from './pages/index';
import AdminActionPage from './components/AdminAction/Action';

const routes = [
    {
        path: '/lecturer',
        exact: false,
        main: () => <LecturerPage />
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
    }
    ,
    {
        path: '/admin/action',
        exact: false,
        main: () => <AdminActionPage />
    }

];

export default routes;