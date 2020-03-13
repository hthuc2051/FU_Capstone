import callApi from '../api/ApiCaller';
import * as Actions from './actions';
import * as Constants from '../constants';

export const fetchEventsData = async (subjectId, dispatch) => {
    let res = await callApi(Constants.END_POINT_EVENTS,Constants.METHOD_GET,subjectId);
    if (res != null) {
        handleResponse(res, Constants.FETCH_EVENTS, dispatch);
    }
}

export const createTestScript = async (formData, dispatch) => {
    let res = await callApi(Constants.END_POINT_POST_TESTSCRIPT, Constants.PREFIX_POST, formData, null);
    if (res != null) {
        handleResponse(res, Constants.END_POINT_POST_TESTSCRIPT, dispatch);
    }
    console.log(res);
}


// Practical exam
export const fetchPracticalExams = async (subjectId, dispatch) => {
    let endPoint = Constants.generateEndPoint(
        Constants.END_POINT_SUBJECTS,
        subjectId,
        Constants.END_POINT_PRACTICAL_EXAMS);
    let res = await callApi(endPoint);
    if (res != null) {
        handleResponse(res, Constants.FETCH_PRACTICAL_EXAMS, dispatch);
    }
}

export const createPracticalExams = async (practicalExam, dispatch) => {
    let res = await callApi(Constants.END_POINT_PRACTICAL_EXAMS, Constants.PREFIX_POST, practicalExam, null);
    if (res != null) {
        handleResponse(res, Constants.CREATE_PRACTICAL_EXAMS, dispatch);
    }
}

const handleResponse = async (response, action, dispatch) => {
    let status = response.status;
    switch (status) {
        case 200:
            await dispatch(Actions.is2xx(200, action + Constants.PREFIX_OK, response.data));
            break;
        case 400:
            // await dispatch(Actions.isNot2xx(400, messages));
            break;
        case 401:
            // await dispatch(Actions.isNot2xx(401, Constants.MSG_REQUEST_LOGIN));
            break;
        case 403:
            // await dispatch(Actions.isNot2xx(403, Constants.MSG_REQUEST_LOGIN));
            break;
        case 404:
            // messages = await getMessages(res.data.message);
            // await dispatch(Actions.isNot2xx(404, messages));
            break;
        case 408:
            await dispatch(Actions.isNot2xx(408, action + Constants.PREFIX_TIME_OUT, response.data));
            break;
        default:
            await dispatch(Actions.isNot2xx(500, action + Constants.PREFIX_FAILED, response.data));
            break;
    }
}