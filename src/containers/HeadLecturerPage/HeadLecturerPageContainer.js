import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Treeview, TreeViewWeb } from '../../components/index';
import ListScripts from './services/ListScripts';
import * as Constants from '../constants';
import * as AppConstant from './../../constants/AppConstants';
import { onLoading } from './actions';
import { fetchEventsData, creatTestScript } from './axios';
import scriptObj from '../../components/TreeView/sample.data';
import './style.css';
import CreateTestScript from './services/CreateTestScript';
import ListPracticalExams from './services/ListPracticalExams';

const QUESTION = "question";
const QUESTION_UPPER = "Question";
class HeadLecturerPageContainer extends Component {

    // code: 'public void testcase(){Driver.findViewById("txtUsername").clear();Driver.findViewById("txtUsername") .sendKey("NguyenVanA");Driver.findViewById("txtPassword").clear();Driver.findViewById("txtPassword") .sendKey("p4ssw0rd");assertEquals("admin",question1("NguyenVanA","p4ssw0rd"));}'

    constructor(props) {
        super(props);
        var tempScript = new scriptObj();
        this.state = {
            isLoading: false,
            pageType: '',
            eventData: null,
        };
    }

    componentDidMount() {
        this.props.fetchEvents();
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps === prevState) {
            return null;
        }
        return {
            eventData: nextProps.eventData,
            file: nextProps.file,
            pageType: nextProps.pageType,
        }
    }

    render() {
        let { isLoading, eventData, pageType } = this.state;
        return (
            <div className="page-wrapper" >
                {pageType === AppConstant.PAGE_TYPE_LIST_SCRIPT ? <ListScripts /> : ''}
                {pageType === AppConstant.PAGE_TYPE_CREATE_SCRIPT ? <CreateTestScript eventData={eventData} /> : ''}
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
        file: state.headerLecturerPage.file,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onLoading: () => {
            dispatch(onLoading(Constants.FETCH_EVENTS + Constants.PREFIX_LOADING));
        },
        fetchEvents: () => {
            fetchEventsData(dispatch);
        },
        saveTestScript: (testScript) => {
            creatTestScript(testScript, dispatch);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeadLecturerPageContainer);

