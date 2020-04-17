import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListScripts from './services/ListScripts';
import * as Constants from '../constants';
import * as AppConstant from './../../constants/AppConstants';
import { onLoading } from './actions';
import { fetchEventsData, createTestScript, getTestScriptById, updateTestScript, fetchAllSubjects } from './axios';
import scriptObj from '../../components/TreeView/sample.data';
import './style.css';
import CreateTestScript from './services/CreateTestScript';
import UpdateTestScript from './services/UpdateTestScript';
import ListPracticalExams from './services/ListPracticalExams';
import ScriptTemplateJavaWeb from './services/template.Javaweb';
import ScriptTemplateJava from './services/template.Java';
import swal from 'sweetalert';
import { withRouter } from 'react-router-dom';

class HeadLecturerPageContainer extends Component {

    // code: 'public void testcase(){Driver.findViewById("txtUsername").clear();Driver.findViewById("txtUsername") .sendKey("NguyenVanA");Driver.findViewById("txtPassword").clear();Driver.findViewById("txtPassword") .sendKey("p4ssw0rd");assertEquals("admin",question1("NguyenVanA","p4ssw0rd"));}'

    constructor(props) {
        super(props);
        var tempScript = new scriptObj();
        this.state = {
            isLoading: true,
            pageType: '',
            eventData: null,
            subjectId: 0,
            currentTemplate: ScriptTemplateJavaWeb,
            currentScript: null,
            scriptId: null,
            isShowMessage:false,
        };
    }

    componentDidMount() {
        let { subjectId, scriptId, pageType } = this.props;
        this.props.onFetchEvents(subjectId);
        this.setState({ subjectId: subjectId });
        if (subjectId !== null) {
            let template = this.getTemplateBySubjectID(subjectId);
            this.setState({ currentTemplate: template });
        }
        if (pageType === AppConstant.PAGE_TYPE_UPDATE_SCRIPT) {
            this.props.getScriptById(scriptId);
        }
    }
    getTemplateBySubjectID = (subjectId) => {
        switch (subjectId) {
            case '1': return ScriptTemplateJava;
            case '2': return ScriptTemplateJava;
            case '3': return ScriptTemplateJavaWeb;
            default: return ScriptTemplateJavaWeb;
        }
        this.props.onFetchAllSubjects();
        this.setState({ subjectId: this.props.subjectId });
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log(nextProps);
        if (nextProps === prevState) {
            return null;
        }
        return {
            eventData: nextProps.eventData,
            isLoading: nextProps.isLoading,
            subjectId: nextProps.subjectId,
            scriptId: nextProps.scriptId,
            currentScript: nextProps.currentScript,
            pageType: nextProps.pageType,
            message: nextProps.message,
            action: nextProps.action,
            statusCode: nextProps.statusCode,
        }
    }

    componentDidUpdate(prevProps) {
        let { statusCode, message,subjectId,isShowMessage } = this.state;
        console.log(message)
        console.log(isShowMessage);
        if (isShowMessage && message !== '') {
            switch (statusCode) {
                case 200:
                    swal("Successfully !", message, "success");
                    break;
                case 500:
                case 409:
                    swal("Failed !", message, "error");
                    break;
            }
            this.setState({isShowMessage : false});
            this.props.history.push('/subjects/'+subjectId+'/scripts');
        }
    }

    getDataBeforeSaveTestScript = (questionArr, scriptName, originalArr, pageType, globalVariableCode,document,templateQuestion,database,connection) => {
        let { subjectId, scriptId } = this.state;
        // temp data
        //checkQuestion1:2-checkQuestion2:4-checkQuestion3:2-checkQuestion4:2
        let tempQuestionPointStr = this.createQuestionPointString(questionArr.questions);
        let headLecturerId = 1;
        let question = this.createQuestionString(questionArr.questions, globalVariableCode);
        let questionStr = JSON.stringify(question);
        let questionData = JSON.stringify(originalArr);
        let formData = new FormData();
        formData.append("name", scriptName);
        formData.append("questionPointStr", tempQuestionPointStr);
        formData.append("globalVariable", globalVariableCode);
        formData.append("questions", questionStr);
        formData.append("headLecturerId", headLecturerId);
        formData.append("subjectId", subjectId);
        console.log(connection);
        console.log(document);
        console.log(templateQuestion);
        console.log(database);
        if (document !== null) {
            formData.append("docsFile", document);
        }
        if (templateQuestion !== null) {
            formData.append("templateQuestion", templateQuestion);
        }
        if(database !== null){
            formData.append("database", database);
        }
        if(connection !== null && typeof (connection) !== 'undefined'){
            if(connection.online !== null && typeof (connection.online) !== 'undefined' ){
                formData.append("onlineConnection", connection.online);
            }
            if(connection.offline !== null && typeof (connection.offline) !== 'undefined'){
                formData.append("offlineConnection", connection.offline);
            }
        }
        formData.append("scriptData", questionData);
       
        switch (pageType) {
            case AppConstant.PAGE_TYPE_CREATE_SCRIPT:
                this.props.saveTestScript(formData);
                this.setState({isShowMessage:true});
                break;
            case AppConstant.PAGE_TYPE_UPDATE_SCRIPT:
                formData.append("id", scriptId);
                this.props.UpdateTestScript(formData);
                this.setState({isShowMessage:true});
                break;
        }
       

    }

    createQuestionString(questionArr) {
        // [{"testcase":"testcase1", "code":"ABC"}, {"testcase":"testcase2", "code":"AB2C"}]
        questionArr.forEach(element => {
            let orderAnotation = Constants.ANOTATION_ORDER + '(' + element.order + ')';
            let code = Constants.ANOTATION_TEST + " \n" + orderAnotation + " \n"+ element.code;
            element.code = code.replace(AppConstant.BODY_POSITION, '');
            console.log(element.code);
            delete element.point;
            delete element.order;
        });
        return questionArr;

    }

    createQuestionPointString(questionArr) {
        let questionStr = '';
        questionArr.forEach(element => {
            questionStr += element.testcase + ':' + element.point + '-';
        });
        if (questionStr.length > 0) {
            questionStr = questionStr.substring(0, questionStr.length - 1);
        }
        return questionStr;
    }

    render() {
        let { isLoading, eventData, pageType, subjectId, currentTemplate, currentScript } = this.state;
        return (

            <div className="page-wrapper" >
                <div className={isLoading ? 'loading' : 'none-loading'}>
                    <div className="loader"></div>
                </div>
                {pageType === AppConstant.PAGE_TYPE_LIST_SCRIPT ? <ListScripts subjectId={subjectId} /> : ''}
                {pageType === AppConstant.PAGE_TYPE_CREATE_SCRIPT ? <CreateTestScript eventData={eventData} currentTemplate={currentTemplate} saveTestScript={this.getDataBeforeSaveTestScript} /> : ''}
                {pageType === AppConstant.PAGE_TYPE_LIST_PRACTICAL_EXAM ? <ListPracticalExams /> : ''}
                {pageType === AppConstant.PAGE_TYPE_UPDATE_SCRIPT && currentScript ? <UpdateTestScript script={currentScript} eventData={eventData} currentTemplate={currentTemplate} saveTestScript={this.getDataBeforeSaveTestScript} /> : ''}
            </div>
        );
    }
}



const mapStateToProps = state => {
    return {
        statusCode: state.headerLecturerPage.statusCode,
        isLoading: state.headerLecturerPage.isLoading,
        eventData: state.headerLecturerPage.eventData,
        currentScript: state.headerLecturerPage.currentScript,
        statusCode: state.headerLecturerPage.statusCode,
        message: state.headerLecturerPage.message,
        error: state.headerLecturerPage.error,
        action: state.headerLecturerPage.action,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onLoading: () => {
            dispatch(onLoading(Constants.FETCH_EVENTS + Constants.PREFIX_LOADING));
        },
        onFetchEvents: (subjectId) => {
            fetchEventsData(subjectId, dispatch);
        },
        getScriptById: (scriptId) => {
            getTestScriptById(scriptId, dispatch);
        },
        saveTestScript: (formData) => {
            createTestScript(formData, dispatch);
        },
        UpdateTestScript: (formData, scriptId) => {
            updateTestScript(formData, dispatch);
        },
        onFetchAllSubjects: () => {
            fetchAllSubjects(dispatch);
        },
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HeadLecturerPageContainer));

