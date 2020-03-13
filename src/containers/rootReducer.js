import { combineReducers } from 'redux';
import headerLecturerPage from './HeadLecturerPage/reducer';
import lecturerPage from './LecturerPage/reducer';
import listActionsPage from './AdminPage/reducer'
const rootReducer = combineReducers({
    headerLecturerPage,
    lecturerPage,
    listActionsPage,
});

export default rootReducer;