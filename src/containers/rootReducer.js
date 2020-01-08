import { combineReducers } from 'redux';
import lecturerPage from './LecturerPage/reducer';
const rootReducer = combineReducers({
    lecturerPage,
});

export default rootReducer;