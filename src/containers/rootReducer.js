import { combineReducers } from 'redux';
import headerLecturerPage from './HeadLecturerPage/reducer';
import lecturerPage from './LecturerPage/reducer';
import listActionsPage from './AdminPage/reducer';
import duplicatedCodePage from './DuplicatedCodePage/reducer';
import githubResultPage from './GithubResultPage/reducer';
const rootReducer = combineReducers({
    headerLecturerPage,
    lecturerPage,
    listActionsPage,
    duplicatedCodePage,
    githubResultPage
});

export default rootReducer;