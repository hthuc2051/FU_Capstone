import * as Actions from '../constants';
import * as Messages from '../messages';
const initStage = {
    eventData: null,
    practicalExams: [],
    isLoading: false,
    statusCode: 500,
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
    classes:[
        {
            id:1,
            classCode:'SE1269',
            subjectClassId:'7'
        },
        {
            id:2,
            classCode:'SE1270',
            subjectClassId:'8'
        },
        {
            id:3,
            classCode:'SE1200',
            subjectClassId:'9'
        }
    ]
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
                eventData: action.data,
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

export default headerLecturerPage;