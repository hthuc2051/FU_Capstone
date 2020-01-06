import React from 'react';
import { LoginPage, TeacherPage, AdminPage } from './pages/index';
import AdminActionPage from './components/AdminAction/Action';

const routes = [
    {
        path: '/teacher',
        exact: false,
        main: () => <TeacherPage />
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