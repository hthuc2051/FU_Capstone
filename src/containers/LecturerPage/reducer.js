import * as Actions from '../constants';
import * as Messages from '../messages';
const initStage = {
    practicalExams: [],
    isLoading: false,
    statusCode: null,
    message: '',
    error: null,
};

const lecturerPage = (state = initStage, action) => {
    console.log(action);
    switch (action.type) {
        // Fetch practical exam
        case Actions.FETCH_PRACTICAL_EXAMS:
            return Object.assign({}, state, {
                isLoading: true,
            });
        case Actions.FETCH_PRACTICAL_EXAMS_OK:
            return Object.assign({}, state, {
                isLoading: false,
                statusCode: 200,
                practicalExams: action.data,
            });
        case Actions.FETCH_PRACTICAL_EXAMS_FAILED:
            return Object.assign({}, state, {
                isLoading: false,
                statusCode: action.statusCode,
                error: action.action,
                message: Messages.MSG_FAILED,
            });
        case Actions.FETCH_PRACTICAL_EXAMS_TIME_OUT:
            return Object.assign({}, state, {
                isLoading: false,
                statusCode: action.statusCode,
                error: action.action,
                message: Messages.MSG_TIMEOUT,
            });
        // Answer EVENTS
        default:
            return state;
    }
};

export default lecturerPage;