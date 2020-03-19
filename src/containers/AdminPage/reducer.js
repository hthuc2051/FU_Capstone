import * as Actions from '../constants';
import * as Messages from '../messages';
const initStage = {
    listActions: null,
    isLoading: false,
    statusCode: 500,
    message: '',
    error: null,
};

const listActionsPage = (state = initStage, action) => {
    switch (action.type) {
        // Fetch events
        case Actions.FETCH_ACTIONS:
            return Object.assign({}, state, {
                isLoading: true,
            });
        case Actions.FETCH_ACTIONS_OK:
            return Object.assign({}, state, {
                isLoading: false,
                statusCode: 200,
                listActions: action.listActions,
            });
        case Actions.FETCH_ACTIONS_FAILED:
            return Object.assign({}, state, {
                isLoading: false,
                statusCode: action.statusCode,
                error: action.action,
                message: Messages.MSG_FAILED,
            });
        case Actions.FETCH_ACTIONS_TIME_OUT:
            return Object.assign({}, state, {
                isLoading: false,
                statusCode: action.statusCode,
                error: action.action,
                message: Messages.MSG_TIMEOUT,
            });

        // Answer ACTIONS
        default:
            return state;
    }
};

export default listActionsPage;