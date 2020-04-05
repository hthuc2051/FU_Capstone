import { LoginPage, AdminPage, LecturerPage, NotFoundPage, ListScriptsPage, CreateScriptPage,ListPracticalExamsPage,UpdateScripPage,CreateActionPage } from './pages/index';


const routes = [
    {
        path: '/login',
        exact: true,
        main: LoginPage
    },
    // Head lecturer,
    {
        path: '/subjects/:subjectId/scripts',
        exact: true,
        main: ListScriptsPage
    },
    {
        path: '/subjects/:subjectId/scripts/create',
        exact: false,
        main: CreateScriptPage
    },
    {
        path: '/subjects/:subjectId/scripts/:scriptId',
        exact: false,
        main: UpdateScripPage
    },
    {
        path: '/subjects/:subjectId/practical-exams',
        exact: true,
        main: ListPracticalExamsPage
    },
    {
        path: '/subjects/:subjectId/practical-exams/create',
        exact: false,
        main: ListPracticalExamsPage
    },
    // Lecturer
    {
        path: '/lecturer',
        exact: true,
        main: LecturerPage
    },
    {
        path: '/subjects/:id/:subjectName',
        exact: true,
        main: LecturerPage
    },
    {
        path: '/lecturer/:id/invigilate-request',
        exact: false,
        main: LecturerPage
    },
    {
        path: '/admin/action',
        exact: true,
        main: AdminPage
    },
    {
        path: '/admin/action/create',
        exact: false,
        main: CreateActionPage
    },
    {
        path: '/not-found',
        exact: false,
        main: NotFoundPage,
    }
];

export default routes;