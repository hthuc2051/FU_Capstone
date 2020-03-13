import { combineReducers } from 'redux';
import headerLecturerPage from './HeadLecturerPage/reducer';
import listActionsPage from './AdminPage/reducer';
const rootReducer = combineReducers({
    headerLecturerPage,
    listActionsPage,
});

export default rootReducer;