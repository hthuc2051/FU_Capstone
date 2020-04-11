import * as Actions from '../constants';
import * as Messages from '../messages';
const initStage = {
    eventData: null,
    practicalExams: [],
    isLoading: false,
    statusCode: null,
    action: '',
    message: '',
    error: null,
    subjects: [
        {
            id: 1,
            name: "Java"
        },
        {
            id: 2,
            name: "CSharp"
        },
        {
            id: 3,
            name: "Java Web"
        },
        {
            id: 4,
            name: "C"
        }
    ],
    classes: [
        {
            id: 6,
            classCode: 'SE1269',
            subjectClassId: '7'
        },
        {
            id: 2,
            classCode: 'SE1270',
            subjectClassId: '8'
        },
        {
            id: 3,
            classCode: 'SE1200',
            subjectClassId: '9'
        }
    ],
    scripts: [
        {
            id: 1,
            name: 'Script Java Practical De 1',
        },
        {
            id: 3,
            name: 'Script Java Practical De 2',
        },
        {
            id: 5,
            name: 'Script Java Practical De 3',
        }
    ]
};

const headerLecturerPage = (state = initStage, action) => {
    state.action = action.type;
    switch (action.type) {
        // [NOTE] - Reset global action state after finish call api
        case Actions.RESET_ACTION_STATUS:
            return Object.assign({}, state, {
                action: action.type,
            });

        // Fetch events
        case Actions.FETCH_EVENTS:
            return Object.assign({}, state, {
                isLoading: true,
            });
        case Actions.FETCH_EVENTS_OK:
            return Object.assign({}, state, {
                isLoading: false,
                statusCode: 200,
                eventData: action.data,
            });
        case Actions.FETCH_EVENTS_FAILED:
            return Object.assign({}, state, {
                isLoading: false,
                statusCode: action.statusCode,
                message: action.error.message,
            });
        case Actions.FETCH_EVENTS_TIME_OUT:
            return Object.assign({}, state, {
                isLoading: false,
                statusCode: action.statusCode,
                message: action.error.message,
            });

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
                message: action.error.message,
            });
        case Actions.FETCH_PRACTICAL_EXAMS_TIME_OUT:
            return Object.assign({}, state, {
                isLoading: false,
                statusCode: action.statusCode,
                message: action.error.message,
            });


        // CREATE practical exam
        case Actions.CREATE_PRACTICAL_EXAMS:
            return Object.assign({}, state, {
                isLoading: true,
            });
        case Actions.CREATE_PRACTICAL_EXAMS_OK:
            return Object.assign({}, state, {
                isLoading: false,
                statusCode: 200,
                message: action.data,
            });
        case Actions.CREATE_PRACTICAL_EXAMS_FAILED:
            return Object.assign({}, state, {
                isLoading: false,
                statusCode: action.statusCode,
                message: action.error.message,
            });
        case Actions.CREATE_PRACTICAL_EXAMS_TIME_OUT:
            return Object.assign({}, state, {
                isLoading: false,
                statusCode: action.statusCode,
                message: action.error.message,
            });


        // Answer EVENTS
        // DELETE practical exam
        case Actions.DELETE_PRACTICAL_EXAMS:
            return Object.assign({}, state, {
                isLoading: true,
            });
        case Actions.DELETE_PRACTICAL_EXAMS_OK:
            return Object.assign({}, state, {
                isLoading: false,
                statusCode: 200,
                message: action.data,
            });
        case Actions.DELETE_PRACTICAL_EXAMS_FAILED:
            return Object.assign({}, state, {
                isLoading: false,
                statusCode: action.statusCode,
                message: action.error.message,
            });
        case Actions.DELETE_PRACTICAL_EXAMS_TIME_OUT:
            return Object.assign({}, state, {
                isLoading: false,
                statusCode: action.statusCode,
                message: action.error.message,
            });

        // Get Test Scripts
        case Actions.GET_TEST_SCRIPT:
            return Object.assign({}, state, {
                isLoading: true,
            });
        case Actions.GET_TEST_SCRIPT_OK:
            let scriptData = JSON.parse(action.data.scriptData);
            action.data.scriptData = scriptData;
            return Object.assign({}, state, {
                isLoading: false,
                statusCode: 200,
                currentScript: action.data,
                action: '',
            });
        case Actions.GET_TEST_SCRIPT_FAILED:
            return Object.assign({}, state, {
                isLoading: false,
                statusCode: action.statusCode,
                error: action.action,
                message: Messages.MSG_FAILED,
                action: '',
            });
        case Actions.GET_TEST_SCRIPT_TIME_OUT:
            return Object.assign({}, state, {
                isLoading: false,
                statusCode: action.statusCode,
                error: action.action,
                message: Messages.MSG_TIMEOUT,
                action: '',
            });

        // Fetch TestScripts
        case Actions.FETCH_TEST_SCRIPT:
            return Object.assign({}, state, {
                isLoading: true,
            });
        case Actions.FETCH_TEST_SCRIPT_OK:
            return Object.assign({}, state, {
                isLoading: false,
                statusCode: 200,
                listScripts: action.data,
                action: '',
            });
        case Actions.FETCH_TEST_SCRIPT_FAILED:
            return Object.assign({}, state, {
                isLoading: false,
                statusCode: action.statusCode,
                error: action.action,
                message: Messages.MSG_FAILED,
                action: '',
            });
        case Actions.FETCH_TEST_SCRIPT_TIME_OUT:
            return Object.assign({}, state, {
                isLoading: false,
                statusCode: action.statusCode,
                error: action.action,
                message: Messages.MSG_TIMEOUT,
                action: '',
            });

        // Create  Update TestScripts
        case Actions.CREATE_TEST_SCRIPT:
            return Object.assign({}, state, {
                isLoading: true,
            });
        case Actions.CREATE_TEST_SCRIPT_OK:
            console.log(action);
            return Object.assign({}, state, {
                isLoading: false,
                statusCode: 200,
                message: action.data,
            });
        case Actions.CREATE_TEST_SCRIPT_FAILED:
            return Object.assign({}, state, {
                isLoading: false,
                statusCode: action.statusCode,
                error: action.action,
                message: Messages.MSG_FAILED,
                action: '',
            });
        case Actions.CREATE_TEST_SCRIPT_TIME_OUT:
            return Object.assign({}, state, {
                isLoading: false,
                statusCode: action.statusCode,
                error: action.action,
                message: Messages.MSG_TIMEOUT,
                action: '',
            });
        case Actions.UPDATE_TEST_SCRIPT:
            return Object.assign({}, state, {
                isLoading: true,
            });
        case Actions.UPDATE_TEST_SCRIPT_OK:
            console.log(action);
            return Object.assign({}, state, {
                isLoading: false,
                statusCode: 200,
                message: action.data,
            });
        case Actions.UPDATE_TEST_SCRIPT_FAILED:
            return Object.assign({}, state, {
                isLoading: false,
                statusCode: action.statusCode,
                error: action.action,
                message: Messages.MSG_FAILED,
                action: '',
            });
        case Actions.UPDATE_TEST_SCRIPT_TIME_OUT:
            return Object.assign({}, state, {
                isLoading: false,
                statusCode: action.statusCode,
                error: action.action,
                message: Messages.MSG_TIMEOUT,
                action: '',
            });

        // DELETE test script
        case Actions.DELETE_TEST_SCRIPT:
            return Object.assign({}, state, {
                isLoading: true,
            });
        case Actions.DELETE_TEST_SCRIPT_OK:
            return Object.assign({}, state, {
                isLoading: false,
                statusCode: 200,
                message: action.data,
            });
        case Actions.DELETE_TEST_SCRIPT_FAILED:
            return Object.assign({}, state, {
                isLoading: false,
                statusCode: action.statusCode,
                message: action.error,
            });
        case Actions.DELETE_TEST_SCRIPT_TIME_OUT:
            return Object.assign({}, state, {
                isLoading: false,
                statusCode: action.statusCode,
                message: action.error,
            });

        default:
            return state;
    }
};

export default headerLecturerPage;