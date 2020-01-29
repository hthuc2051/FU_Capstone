import React from 'react';
import { LoginPage, HeaderLecturerPage, AdminPage, CodePage, LecturerPage,NotFoundPage } from './pages/index';

const routes = [
    {
        path: '/header-lecturer',
        exact: false,
        main: HeaderLecturerPage
    },
    {
        path: '/login',
        exact: false,
        main: LoginPage 
    },
    // Lecturer
    {
        path: '/lecturer',
        exact: true,
        main: LecturerPage 
    },
    {
        path: '/lecturer/:id/subject',
        exact: true,
        main: LecturerPage 
    },
    {
        path: '/lecturer/:id/subject/:subjectCode',
        exact: false,
        main: LecturerPage 
    },
    {
        path: '/lecturer/:id/invigilate-request',
        exact: false,
        main: LecturerPage 
    },
    {
        path: '/admin',
        exact: true,
        main: AdminPage 
    },
    {
        path: '/admin/action',
        exact: false,
        main: CodePage 
    },
    {
        path: '/not-found',
        exact: false,
        main: NotFoundPage,
    }
];

export default routes;