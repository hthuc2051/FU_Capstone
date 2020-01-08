import { combineReducers } from 'redux';
import lecturerPage from './LecturerLeaderPage/reducer';
const rootReducer = combineReducers({
    lecturerPage,
});

export default rootReducer;