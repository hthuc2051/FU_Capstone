import React from 'react';
import { LoginPage, TeacherPage } from './pages/index';

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
    }

];

export default routes;