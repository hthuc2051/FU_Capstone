import { combineReducers } from 'redux';
import headerLecturerPage from './HeadLecturerPage/reducer';
import lecturerPage from './LecturerPage/reducer';
const rootReducer = combineReducers({
    headerLecturerPage,
    lecturerPage,
});

export default rootReducer;