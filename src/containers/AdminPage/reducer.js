import * as Actions from '../constants';
import * as Messages from '../messages';
const initStage = {
    listActions: null,
    isLoading: false,
    statusCode: 500,
    message: '',
    error: null,
    action: null,
};

const adminPage = (state = initStage, action) => {
    console.log(action);
    state.action = action.type;
    switch (action.type) {
        // [NOTE] - Reset global action state after finish call api
        case Actions.RESET_ACTION_STATUS:
            return Object.assign({}, state, {
                action: action.type,
            });

        // Fetch actions
        case Actions.FETCH_ACTIONS:
            return Object.assign({}, state, {
                isLoading: true,
            });
        case Actions.FETCH_ACTIONS_OK:
            return Object.assign({}, state, {
                isLoading: false,
                statusCode: 200,
                listActions: action.data,
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

        // DELETE action
        case Actions.DELETE_ACTION:
            return Object.assign({}, state, {
                isLoading: true,
            });
        case Actions.DELETE_ACTION_OK:
            return Object.assign({}, state, {
                isLoading: false,
                statusCode: 200,
                message: action.data,
            });
        case Actions.DELETE_ACTION_FAILED:
            return Object.assign({}, state, {
                isLoading: false,
                statusCode: action.statusCode,
                error: action.action,
                message: Messages.MSG_FAILED,
            });
        case Actions.DELETE_ACTION_TIME_OUT:
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

export default adminPage;