import React from 'react';
import { LoginPage, LecturerLeaderPage, AdminPage,CodePage } from './pages/index';

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
        main: () => <CodePage />
    }

];

export default routes;