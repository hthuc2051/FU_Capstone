import React from 'react';
import { LoginPage, TeacherPage, HomeAdmin } from './pages/index';

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
        main: () => <HomeAdmin />
    }

];

export default routes;