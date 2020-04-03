import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListScripts from './services/ListScripts';
import * as Constants from '../constants';
import * as AppConstant from './../../constants/AppConstants';
import { onLoading } from './actions';
import { fetchEventsData, createTestScript } from './axios';
import scriptObj from '../../components/TreeView/sample.data';
import './style.css';
import CreateTestScript from './services/CreateTestScript';
import ListPracticalExams from './services/ListPracticalExams';
import ScriptTemplateJavaWeb from './services/template.Javaweb';
import ScriptTemplateJava from './services/template.Java';

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
            currentTemplate : ScriptTemplateJavaWeb
        };
    }

    componentDidMount() {
        let{subjectId} = this.props;
        this.props.fetchEvents(subjectId);
        this.setState({ subjectId: subjectId });
        if(subjectId !== null){
            let template = this.getTemplateBySubjectID(subjectId);
            this.setState({currentTemplate: template});
        }
    }
    getTemplateBySubjectID = (subjectId) =>{
        switch (subjectId){
            case '1': return ScriptTemplateJava;
            case '2': return ScriptTemplateJava;
            case '3': return ScriptTemplateJavaWeb;
            default: return ScriptTemplateJavaWeb;
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps === prevState) {
            return null;
        }
        return {
            eventData: nextProps.eventData,
            isLoading: nextProps.isLoading,
            pageType: nextProps.pageType,
            subjectId: nextProps.subjectId
        }
    }

    getDataBeforeSaveTestScript = (questionArr, scriptName, file, originalArr) => {
        let { subjectId } = this.state;
        // temp data
        //checkQuestion1:2-checkQuestion2:4-checkQuestion3:2-checkQuestion4:2
        let tempQuestionPointStr = this.createQuestionPointString(questionArr.questions);
        let headLecturerId = 1;
        let question = this.createQuestionString(questionArr.questions);
        let questionStr = JSON.stringify(question);
        let questionData = JSON.stringify(originalArr);
        let temp = JSON.parse(questionData);
        let formData = new FormData();
        formData.append("name", scriptName);
        formData.append("questionPointStr", tempQuestionPointStr);
        formData.append("questions", questionStr);
        formData.append("headLecturerId", headLecturerId);
        formData.append("subjectId", subjectId);
        formData.append("docsFile", file);
        formData.append("scriptData", questionData);
        this.props.saveTestScript(formData);
    }

    createQuestionString(questionArr) {
        // [{"testcase":"testcase1", "code":"ABC"}, {"testcase":"testcase2", "code":"AB2C"}]

        questionArr.forEach(element => {
            let code = Constants.ANOTATION_TEST + " \n" + element.code;
            delete element.point;
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
        let { isLoading, eventData, pageType, subjectId,currentTemplate } = this.state;
        return (

            <div className="page-wrapper" >
                <div className={isLoading ? 'loading' : 'none-loading'}>
                    <div className="loader"></div>
                </div>
                {pageType === AppConstant.PAGE_TYPE_LIST_SCRIPT ? <ListScripts subjectId={subjectId} /> : ''}
                {pageType === AppConstant.PAGE_TYPE_CREATE_SCRIPT ? <CreateTestScript eventData={eventData} currentTemplate={currentTemplate} saveTestScript={this.getDataBeforeSaveTestScript} /> : ''}
                {pageType === AppConstant.PAGE_TYPE_LIST_PRACTICAL_EXAM ? <ListPracticalExams /> : ''}

            </div>
        );
    }
}



const mapStateToProps = state => {
    return {
        statusCode: state.headerLecturerPage.statusCode,
        isLoading: state.headerLecturerPage.isLoading,
        message: state.headerLecturerPage.message,
        error: state.headerLecturerPage.error,
        eventData: state.headerLecturerPage.eventData,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onLoading: () => {
            dispatch(onLoading(Constants.FETCH_EVENTS + Constants.PREFIX_LOADING));
        },
        fetchEvents: (subjectId) => {
            fetchEventsData(subjectId, dispatch);
        },
        saveTestScript: (formData) => {
            createTestScript(formData, dispatch);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeadLecturerPageContainer);

