import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Treeview, TreeViewWeb } from '../../components/index';
import * as Constants from '../constants';
import { onLoading } from './actions';
import { fetchEventsData, creatTestScript } from './axios';

class LecturerPageContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            eventData: null,
            questionArr: {
                name: 'test1',
                questions: [{
                    tescase: 'question1',
                    code: 'public void testcase(){Driver.findViewById("txtUsername").clear();Driver.findViewById("txtUsername") .sendKey("NguyenVanA");Driver.findViewById("txtPassword").clear();Driver.findViewById("txtPassword") .sendKey("p4ssw0rd");assertEquals("admin",question1("NguyenVanA","p4ssw0rd"));}'
                }]
            }
        };
    }
    componentDidMount() {
        this.props.fetchEvents();
    }

    // old : componentWillReceiveProps
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log(nextProps);
        console.log(prevState);
        // nếu props mới vào mà giống state cũ thì k thay đổi gì cả
        if (nextProps.eventData === prevState.eventData) {
            return null;
        }

        // Ngược lại nếu có bất kì props nào thay đổi thì set lại state;
        return { eventData: nextProps.eventData }

    }
    onSave = (question) => {
        let { questionArr } = this.state;
        let isExisted = false;
        let testCaseName = question.tescase;
        for (let i = 0; i < questionArr.questions.length; i++) {
            if (questionArr.questions[i].tescase === testCaseName) {
                isExisted = true;
                questionArr.questions[i] = question;
            }
        }
        if (!isExisted) {
            questionArr.questions.push(question);
        }
        this.setState({ questionArr });
    }

    createTestScript = () => {
        this.props.saveTestScript(this.state.questionArr);
    }

    render() {
        let { isLoading, eventData } = this.state;
        return (
            <div id="content-wrapper">
                {isLoading ? '1' : 'OK'}
                <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <a className="nav-item nav-link active" id="nav-home-tab"
                            data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Question 1</a>
                        <a className="nav-item nav-link" id="nav-profile-tab"
                            data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Question 2</a>
                        <button className="addQuestionButton">
                            <i className="fa fa-plus" />
                        </button>
                    </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                        <TreeViewWeb eventData={eventData} onSave={this.onSave} />
                    </div>
                    <div className="bottomDiv">
                        <button className="btn btn-success" onClick={(e) => { e.stopPropagation(); this.createTestScript() }}>
                            <i className="fa fa-plus" />
                            &nbsp;CREATE TEST SCRIPT
                         </button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        statusCode: state.lecturerLeaderPage.statusCode,
        isLoading: state.lecturerLeaderPage.isLoading,
        message: state.lecturerLeaderPage.message,
        error: state.lecturerLeaderPage.error,
        eventData: state.lecturerLeaderPage.eventData,
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

export default connect(mapStateToProps, mapDispatchToProps)(LecturerPageContainer);

