import React from 'react';
import { LoginPage, HeaderLecturerPage, AdminPage, CodePage, LecturerPage } from './pages/index';

const routes = [
    {
        path: '/header-lecturer',
        exact: false,
        main: () => <HeaderLecturerPage />
    },
    {
        path: '/login',
        exact: false,
        main: () => <LoginPage />
    },
    {
        path: '/lecturer',
        exact: false,
        main: () => <LecturerPage />
    },
    {
        path: '/admin',
        exact: true,
        main: () => <AdminPage />
    },
    {
        path: '/admin/action',
        exact: false,
        main: () => <CodePage />
    }
];

export default routes;