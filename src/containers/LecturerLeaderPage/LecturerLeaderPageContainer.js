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
        // nếu props mới vào mà giống state cũ thì k thay đổi gì cả
        console.log(nextProps);
        if (nextProps === prevState) {
            return null;
        }
        // Ngược lại nếu có bất kì props nào thay đổi thì set lại state;
        return {
            eventData: nextProps.eventData,
            file: nextProps.file,
        }

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

    onDownLoad = () => {
        window.open("http://localhost:8080/api/download");
    }

    createTestScript = () => {
        this.props.saveTestScript(this.state.questionArr);
    }

    // click Add question button
    addQuestionTab = () =>{
        var tab = document.getElementById("question-tab");
        if(tab === null) return;
        var newTab = document.createElement("a");
        newTab.setAttribute("class","nav-item nav-link");
        newTab.setAttribute("data-toggle","tab");
        newTab.setAttribute("href","#nav-home");
        newTab.setAttribute("role","tab");
        newTab.setAttribute("aria-controls","nav-home");
        newTab.setAttribute("aria-selected","true");
        newTab.innerHTML = "question2"
        tab.appendChild(newTab);
    }

    render() {
        let { isLoading, eventData } = this.state;
        return (
            <div id="content-wrapper">
                {isLoading ? '1' : 'OK'}
                <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <div id="question-tab" className="nav">
                        <a className="nav-item nav-link active" id="nav-home-tab"
                            data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Question 1</a>
                        <a className="nav-item nav-link" id="nav-profile-tab"
                            data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Question 2</a>
                        </div>
                        <button className="addQuestionButton" onClick={(e) => {e.stopPropagation();this.addQuestionTab()}}>
                            <i className="fa fa-plus" />
                        </button>
                        <button className="btn btn-success" style={{ float: 'right' }} onClick={this.onDownLoad}>
                            <i className="fa fa-download" style={{ fontSize: '22px' }}></i>
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
        file: state.lecturerLeaderPage.file,
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

