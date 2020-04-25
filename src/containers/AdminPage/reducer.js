import * as Actions from '../constants';
import * as Messages from '../messages';
const initStage = {
    listActions: null,
    listSubjects: null,
    listParams: null,
    listParamTypes: null,
    isLoading: false,
    statusCode: 500,
    message: '',
    error: null,
    action: null,
};

const adminPage = (state = initStage, action) => {
    state.action = action.type;
    switch (action.type) {
        // [NOTE] - Reset global action state after finish call api
        case Actions.RESET_ACTION_STATUS:
            return Object.assign({}, state, {
                action: action.type,
                message: '',
            });

        // Fetch subjects
        case Actions.FETCH_SUBJECT:
            return Object.assign({}, state, {
                isLoading: true,
            });
        case Actions.FETCH_SUBJECT_OK:
            return Object.assign({}, state, {
                isLoading: false,
                statusCode: 200,
                action: action.type,
                listSubjects: action.data,
            });
        case Actions.FETCH_SUBJECT_FAILED:
            return Object.assign({}, state, {
                isLoading: false,
                statusCode: action.statusCode,
                error: action.error,
                message: Messages.MSG_FAILED,
            });
        case Actions.FETCH_SUBJECT_TIME_OUT:
            return Object.assign({}, state, {
                isLoading: false,
                statusCode: action.statusCode,
                error: action.error,
                message: Messages.MSG_TIMEOUT,
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
                action: action.type,
                listActions: action.data,
            });
        case Actions.FETCH_ACTIONS_FAILED:
            return Object.assign({}, state, {
                isLoading: false,
                statusCode: action.statusCode,
                error: action.error,
                message: Messages.MSG_FAILED,
            });
        case Actions.FETCH_ACTIONS_TIME_OUT:
            return Object.assign({}, state, {
                isLoading: false,
                statusCode: action.statusCode,
                error: action.error,
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
                error: action.error,
                message: Messages.MSG_FAILED,
            });
        case Actions.DELETE_ACTION_TIME_OUT:
            return Object.assign({}, state, {
                isLoading: false,
                statusCode: action.statusCode,
                error: action.error,
                message: Messages.MSG_TIMEOUT,
            });

        // Fetch Params
        case Actions.FETCH_PARAM:
            return Object.assign({}, state, {
                isLoading: true,
            });
        case Actions.FETCH_PARAM_OK:
            return Object.assign({}, state, {
                isLoading: false,
                statusCode: 200,
                action: action.type,
                listParams: action.data,
            });
        case Actions.FETCH_PARAM_FAILED:
            return Object.assign({}, state, {
                isLoading: false,
                statusCode: action.statusCode,
                error: action.error,
                message: Messages.MSG_FAILED,
            });
        case Actions.FETCH_PARAM_TIME_OUT:
            return Object.assign({}, state, {
                isLoading: false,
                statusCode: action.statusCode,
                error: action.error,
                message: Messages.MSG_TIMEOUT,
            });

        // Delete Param
        case Actions.DELETE_PARAM:
            return Object.assign({}, state, {
                isLoading: true,
            });
        case Actions.DELETE_PARAM_OK:
            return Object.assign({}, state, {
                isLoading: false,
                statusCode: 200,
                message: action.data,
            });
        case Actions.DELETE_PARAM_FAILED:
            return Object.assign({}, state, {
                isLoading: false,
                statusCode: action.statusCode,
                error: action.error,
                message: Messages.MSG_FAILED,
            });
        case Actions.DELETE_PARAM_TIME_OUT:
            return Object.assign({}, state, {
                isLoading: false,
                statusCode: action.statusCode,
                error: action.error,
                message: Messages.MSG_TIMEOUT,
            });

        // Create param
        case Actions.CREATE_PARAM:
            return Object.assign({}, state, {
                isLoading: true,
            });
        case Actions.CREATE_PARAM_OK:
            return Object.assign({}, state, {
                isLoading: false,
                statusCode: 200,
                message: action.data,
            });
        case Actions.CREATE_PARAM_FAILED:
            return Object.assign({}, state, {
                isLoading: false,
                statusCode: action.statusCode,
                message: action.error.message,
                error: action.error,
            });
        case Actions.CREATE_PARAM_TIME_OUT:
            return Object.assign({}, state, {
                isLoading: false,
                statusCode: action.statusCode,
                message: action.error.message,
                error: action.error,
            });

            // Fetch Param types
        case Actions.FETCH_PARAM_TYPE:
            return Object.assign({}, state, {
                isLoading: true,
            });
        case Actions.FETCH_PARAM_TYPE_OK:
            return Object.assign({}, state, {
                isLoading: false,
                statusCode: 200,
                action: action.type,
                listParamTypes: action.data,
            });
        case Actions.FETCH_PARAM_TYPE_FAILED:
            return Object.assign({}, state, {
                isLoading: false,
                statusCode: action.statusCode,
                error: action.error,
                message: Messages.MSG_FAILED,
            });
        case Actions.FETCH_PARAM_TYPE_TIME_OUT:
            return Object.assign({}, state, {
                isLoading: false,
                statusCode: action.statusCode,
                error: action.error,
                message: Messages.MSG_TIMEOUT,
            });

        // Delete Param
        case Actions.DELETE_PARAM_TYPE:
            return Object.assign({}, state, {
                isLoading: true,
            });
        case Actions.DELETE_PARAM_TYPE_OK:
            return Object.assign({}, state, {
                isLoading: false,
                statusCode: 200,
                message: action.data,
            });
        case Actions.DELETE_PARAM_TYPE_FAILED:
            return Object.assign({}, state, {
                isLoading: false,
                statusCode: action.statusCode,
                error: action.error,
                message: Messages.MSG_FAILED,
            });
        case Actions.DELETE_PARAM_TYPE_TIME_OUT:
            return Object.assign({}, state, {
                isLoading: false,
                statusCode: action.statusCode,
                error: action.error,
                message: Messages.MSG_TIMEOUT,
            });

        // Create param
        case Actions.CREATE_PARAM_TYPE:
            return Object.assign({}, state, {
                isLoading: true,
            });
        case Actions.CREATE_PARAM_TYPE_OK:
            return Object.assign({}, state, {
                isLoading: false,
                statusCode: 200,
                message: action.data,
            });
        case Actions.CREATE_PARAM_TYPE_FAILED:
            return Object.assign({}, state, {
                isLoading: false,
                statusCode: action.statusCode,
                message: action.error.message,
                error: action.error,
            });
        case Actions.CREATE_PARAM_TYPE_TIME_OUT:
            return Object.assign({}, state, {
                isLoading: false,
                statusCode: action.statusCode,
                message: action.error.message,
                error: action.error,
            });

        // Answer ACTIONS
        default:
            return state;
    }
};

export default adminPage;