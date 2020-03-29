
// Common prefix
export const PREFIX_LOADING = "_LOADING";
export const PREFIX_OK = "_OK";
export const PREFIX_FAILED = "_FAILED";
export const PREFIX_TIME_OUT = "_TIME_OUT";
export const PREFIX_GET = "GET";
export const PREFIX_POST = "POST";
export const PREFIX_PUT = "PUT";
export const PREFIX_DELETE = "DELETE";

export const RESET_ACTION_STATUS = "FREE";

// Actions constant
export const FETCH_EVENTS = 'FETCH_EVENTS';
export const FETCH_EVENTS_OK = 'FETCH_EVENTS_OK';
export const FETCH_EVENTS_FAILED = 'FETCH_EVENTS_FAILED';
export const FETCH_EVENTS_TIME_OUT = 'FETCH_EVENTS_TIME_OUT';

export const FETCH_ACTIONS = 'FETCH_ACTIONS';
export const FETCH_ACTIONS_OK = 'FETCH_ACTIONS_OK';
export const FETCH_ACTIONS_FAILED = 'FETCH_ACTIONS_FAILED';
export const FETCH_ACTIONS_TIME_OUT = 'FETCH_ACTIONS_TIME_OUT';

export const DELETE_ACTION = 'DELETE_ACTION';
export const DELETE_ACTION_OK = 'DELETE_ACTION_OK';
export const DELETE_ACTION_FAILED = 'DELETE_ACTION_FAILED';
export const DELETE_ACTION_TIME_OUT = 'DELETE_ACTION_TIME_OUT';

// Practical exam
export const FETCH_PRACTICAL_EXAMS = 'FETCH_PRACTICAL_EXAMS';
export const FETCH_PRACTICAL_EXAMS_OK = 'FETCH_PRACTICAL_EXAMS_OK';
export const FETCH_PRACTICAL_EXAMS_FAILED = 'FETCH_PRACTICAL_EXAMS_FAILED';
export const FETCH_PRACTICAL_EXAMS_TIME_OUT = 'FETCH_PRACTICAL_EXAMS_TIME_OUT';


export const CREATE_PRACTICAL_EXAMS = 'CREATE_PRACTICAL_EXAMS';
export const CREATE_PRACTICAL_EXAMS_OK = 'CREATE_PRACTICAL_EXAMS_OK';
export const CREATE_PRACTICAL_EXAMS_FAILED = 'CREATE_PRACTICAL_EXAMS_FAILED';
export const CREATE_PRACTICAL_EXAMS_TIME_OUT = 'CREATE_PRACTICAL_EXAMS_TIME_OUT';


export const DELETE_PRACTICAL_EXAMS = 'DELETE_PRACTICAL_EXAMS';
export const DELETE_PRACTICAL_EXAMS_OK = 'DELETE_PRACTICAL_EXAMS_OK';
export const DELETE_PRACTICAL_EXAMS_FAILED = 'DELETE_PRACTICAL_EXAMS_FAILED';
export const DELETE_PRACTICAL_EXAMS_TIME_OUT = 'DELETE_PRACTICAL_EXAMS_TIME_OUT';



// End point 
export const API_URL = 'http://localhost:2021/api';
export const API_URL_DUMMY = 'http://localhost:4000'
export const END_POINT_EVENTS = "actions/subjects";
export const END_POINT_SUBJECTS = "subjects";
export const END_POINT_LECTURER = "lecturers";
export const END_POINT_PRACTICAL_EXAMS = "practical-exam";
export const END_POINT_POST_TESTSCRIPT = "scripts";
export const END_POINT_ACTION = "actions";

// API Method
export const METHOD_GET = "GET";
export const METHOD_POST = "POST";

// Test Script
export const ANOTATION_TEST = "@Test";


export const generateEndPoint = (...params) => {
    let fullEnpoint = "";
    for (let i = 0; i < params.length; i++) {
        fullEnpoint += params[i] + "/";
    }
    return fullEnpoint;
}