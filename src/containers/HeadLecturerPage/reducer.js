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
    subjects: null,
    classes: [
        {
            id: 1,
            classCode: 'SE1269',
            subjectClassId: 7
        },
        {
            id: 2,
            classCode: 'SE1270',
            subjectClassId: 8
        },
        {
            id: 3,
            classCode: 'SE1200',
            subjectClassId: 9
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

        // Fetch subjects init
        case Actions.FETCH_SUBJECT_INIT:
            return Object.assign({}, state, {
                isLoading: true,
            });
        case Actions.FETCH_SUBJECT_INIT_OK:
            return Object.assign({}, state, {
                isLoading: false,
                statusCode: 200,
                subjects: action.data,
            });
        case Actions.FETCH_SUBJECT_INIT_FAILED:
            return Object.assign({}, state, {
                isLoading: false,
                statusCode: action.statusCode,
                message: action.error.message,
            });
        case Actions.FETCH_SUBJECT_INIT_TIME_OUT:
            return Object.assign({}, state, {
                isLoading: false,
                statusCode: action.statusCode,
                message: action.error.message,
            });

        // Fetch subject full info
        case Actions.FETCH_SUBJECT_FULLINFO:
            return Object.assign({}, state, {
                isLoading: true,
            });
        case Actions.FETCH_SUBJECT_FULLINFO_OK:
            return Object.assign({}, state, {
                isLoading: false,
                statusCode: 200,
                practicalExams: action.data,
            });
        case Actions.FETCH_SUBJECT_FULLINFO_FAILED:
            return Object.assign({}, state, {
                isLoading: false,
                statusCode: action.statusCode,
                message: action.error.message,
            });
        case Actions.FETCH_SUBJECT_FULLINFO_TIME_OUT:
            return Object.assign({}, state, {
                isLoading: false,
                statusCode: action.statusCode,
                message: action.error.message,
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


        // Create practical exam
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

        // Delete practical exam
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

        default:
            return state;
    }
};

export default headerLecturerPage;