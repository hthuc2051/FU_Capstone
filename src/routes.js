import { LoginPage, HeadLecturerPage, AdminPage, CodePage, 
    LecturerPage, NotFoundPage, ListScriptsPage, CreateScriptPage,ListPracticalExamsPage } from './pages/index';
import DuplicatedCodeResultPage from './containers/LecturerPage/DuplicatedCodeResultPage';
const routes = [
    {
        path: '/',
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
    },
    {
        path: '/test',
        exact: true,
        main: DuplicatedCodeResultPage,
    },
    
];

export default routes;