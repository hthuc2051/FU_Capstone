import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Treeview, TreeViewWeb } from '../../components/index';
import ListScripts from './services/ListScripts';
import * as Constants from '../constants';
import * as AppConstant from './../../constants/AppConstants';
import { onLoading } from './actions';
import { fetchEventsData, createTestScript } from './axios';
import scriptObj from '../../components/TreeView/sample.data';
import './style.css';
import CreateTestScript from './services/CreateTestScript';
import ListPracticalExams from './services/ListPracticalExams';

class HeadLecturerPageContainer extends Component {

    // code: 'public void testcase(){Driver.findViewById("txtUsername").clear();Driver.findViewById("txtUsername") .sendKey("NguyenVanA");Driver.findViewById("txtPassword").clear();Driver.findViewById("txtPassword") .sendKey("p4ssw0rd");assertEquals("admin",question1("NguyenVanA","p4ssw0rd"));}'

    constructor(props) {
        super(props);
        var tempScript = new scriptObj();
        this.state = {
            isLoading: true,
            pageType: '',
            eventData: null,
            subjectId: 0
        };
    }

    componentDidMount() {
        this.props.fetchEvents(this.props.subjectId);
        this.setState({ subjectId: this.props.subjectId });
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log(nextProps);
        if (nextProps === prevState) {
            return null;
        }
        // if(nextProps.eventData !== null){
        //     nextProps.eventData.forEach(element => {
        //         element.params = [{
        //             type: 'String',
        //             name: '$paramName',
        //             value: '$paramName',
        //           },
        //           {
        //             type: 'String',
        //             name: '$paramValue',
        //             value: '$paramValue',
        //           }]
        //     });
        // }
        return {
            eventData: nextProps.eventData,
            isLoading:nextProps.isLoading,
            pageType: nextProps.pageType,
        }
    }

    getDataBeforeSaveTestScript = (questionArr, scriptName, file) => {
        let { subjectId } = this.state;
        console.log(questionArr);
        console.log(file);
        // temp data
        //checkQuestion1:2-checkQuestion2:4-checkQuestion3:2-checkQuestion4:2
        let tempQuestionPointStr = this.createQuestionPointString(questionArr.questions);
        let headLecturerId = 1;
        let question = this.createQuestionString(questionArr.questions);
        let questionStr = JSON.stringify(question);
        let formData = new FormData();
        formData.append("name", scriptName);
        formData.append("questionPointStr", tempQuestionPointStr);
        formData.append("questions", questionStr);
        formData.append("headLecturerId", headLecturerId);
        formData.append("subjectId", subjectId);
        formData.append("docsFile", file);
        console.log(questionStr);
        this.props.saveTestScript(formData);
    }

    createQuestionString(questionArr) {
        // [{"testcase":"testcase1", "code":"ABC"}, {"testcase":"testcase2", "code":"AB2C"}]

        questionArr.forEach(element => {
            let code = Constants.ANOTATION_TEST + " \n" + element.code;
            element.code = code;
            delete element.point;
        });
        console.log(questionArr)
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
        console.log(questionStr);
        return questionStr;
    }

    render() {
        let { isLoading, eventData, pageType,subjectId } = this.state;
        console.log(eventData)
        return (

            <div className="page-wrapper" >
                <div className={isLoading ? 'loading' : 'none-loading'}>
                    <div className="loader"></div>
                </div>
                {pageType === AppConstant.PAGE_TYPE_LIST_SCRIPT ? <ListScripts subjectId= {subjectId}/> : ''}
                {pageType === AppConstant.PAGE_TYPE_CREATE_SCRIPT ? <CreateTestScript eventData={eventData} saveTestScript={this.getDataBeforeSaveTestScript} /> : ''}
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

