import * as Actions from '../constants';
import * as Messages from '../messages';
const initStage = {
    eventData: null,
    isLoading: false,
    statusCode: 500,
    message: '',
    error: null,
};

const headerLecturerPage = (state = initStage, action) => {
    console.log(action);

    switch (action.type) {
        // Fetch events
        case Actions.FETCH_EVENTS:
            return Object.assign({}, state, {
                isLoading: true,
            });
        case Actions.FETCH_EVENTS_OK:
            return Object.assign({}, state, {
                isLoading: false,
                statusCode: 200,
                eventData: action.eventData,
            });
        case Actions.FETCH_EVENTS_FAILED:
            return Object.assign({}, state, {
                isLoading: false,
                statusCode: action.statusCode,
                error: action.action,
                message: Messages.MSG_FAILED,
            });
        case Actions.FETCH_EVENTS_TIME_OUT:
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

export default headerLecturerPage;