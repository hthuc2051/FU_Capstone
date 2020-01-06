import React from 'react';
import { LoginPage, TeacherPage, AdminPage } from './pages/index';

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
        exact: false,
        main: () => <AdminPage />
    }

];

export default routes;