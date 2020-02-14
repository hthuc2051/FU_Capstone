import React, { Component } from 'react';
import { TreeViewWeb } from './../../../components/index';
import scriptObj from './sample.data';
import '../style.css';

const QUESTION = "question";
const QUESTION_UPPER = "Question";

class CreateTestScript extends Component {
    // code: 'public void testcase(){Driver.findViewById("txtUsername").clear();Driver.findViewById("txtUsername") .sendKey("NguyenVanA");Driver.findViewById("txtPassword").clear();Driver.findViewById("txtPassword") .sendKey("p4ssw0rd");assertEquals("admin",question1("NguyenVanA","p4ssw0rd"));}'
    constructor(props) {
        super(props);
        var tempScript = new scriptObj();
        this.state = {
            isLoading: false,
            pageType: '',
            eventData: null,
            questionArr: {
                name: 'test1',
                questions: [{
                    data: tempScript.scriptObj,
                    testcase: 'question1',
                    code: '',
                }]
            },
            scriptName: '',
            count: 2,
            selectedTab: 0,
        };
    }
    componentDidMount() {

        // this.props.fetchEvents();
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

    onSave = (question) => {
        let { questionArr } = this.state;
        let isExisted = false;
        let testCaseName = question.testcase;
        for (let i = 0; i < questionArr.questions.length; i++) {
            if (questionArr.questions[i].testcase === testCaseName) {
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
        let { questionArr } = this.state;
        let newQuestionArr = { name: 'test1', questions: [] };
        for (let i = 0; i < questionArr.questions.length; i++) {
            let question = { testcase: questionArr.questions[i].testcase, code: questionArr.questions[i].code };
            newQuestionArr.questions.push(question);
        }
        // Save here
        console.log(questionArr);
        // this.props.saveTestScript(newQuestionArr);
    }

    // click Add question button
    addQuestionTab = () => {
        let { count } = this.state;
        let tab = document.getElementById("question-tab");
        if (tab === null) return;
        let newTab = document.createElement("a");
        newTab.setAttribute("class", "nav-item nav-link");
        newTab.setAttribute("id", QUESTION + count);
        newTab.setAttribute("data-toggle", "tab");
        newTab.setAttribute("href", "#panel2");
        newTab.setAttribute("role", "tab");
        newTab.setAttribute("aria-controls", "nav-home");
        newTab.setAttribute("aria-selected", "true");
        newTab.innerHTML = QUESTION_UPPER + count + "&nbsp;";
        let closeButton = document.createElement("button");
        closeButton.setAttribute("class", "closeQuestionTab");
        closeButton.addEventListener("click", (e) => { this.closeQuestionTab(QUESTION + count, count) });
        let closeIcon = document.createElement("i");
        closeIcon.setAttribute("class", "fa fa-close");
        closeButton.appendChild(closeIcon);
        newTab.appendChild(closeButton);
        tab.appendChild(newTab);
        newTab.addEventListener("click", (e) => { this.resetTreeView(newTab.id) });
        this.setState({ count: count + 1 });
        //add question into questionarr
        let { questionArr } = this.state;
        let item = { testcase: QUESTION + count, code: '', data: new scriptObj().scriptObj };
        questionArr.questions.push(item);
        this.setState({ questionArr });
    }

    resetTreeView = (tabId) => {
        let tab = document.getElementById(tabId);
        let { questionArr } = this.state;
        if (tab !== null) {
            let index = -1;
            for (let i = 0; i < questionArr.questions.length; i++) {
                if (questionArr.questions[i].testcase === tabId) {
                    index = i;
                }
            }
            this.setState({ selectedTab: index });
        }
    }

    closeQuestionTab = (tabId) => {
        let { questionArr } = this.state;
        if (questionArr.questions.length !== 1) {
            let tab = document.getElementById(tabId);
            tab.parentNode.removeChild(tab);
            for (let i = 0; i < questionArr.questions.length; i++) {
                if (questionArr.questions[i].testcase === tabId) {
                    questionArr.questions.splice(i, 1);
                    if (this.state.selectedTab === i) {
                        this.setState({ selectedTab: 0 });
                        let element = questionArr.questions[0].testcase;
                        document.getElementById(element).setAttribute("class", "nav-item nav-link active");
                    }
                }
            }
            this.setState({ questionArr });
        }
    }

    render() {
        let { isLoading, eventData, pageType } = this.state;
        return (
            <div>
                <div id="content-wrapper">
                    <div className={isLoading ? 'loading' : 'none-loading'}>
                        <div className="loader"></div>
                    </div>
                    <nav className="question-nav">
                        <input type="text" name="txtScriptName" className="form-control script-name" placeholder="Script's name" />
                        <div id="nav-tab" role="tablist">
                            <div className="nav nav-tabs ">
                                <div id="question-tab" className="nav">
                                    <a className="nav-item nav-link active" id="question1"
                                        data-toggle="tab" onClick={(e) => { e.stopPropagation(); this.resetTreeView("question1") }} href="#panel1" role="tab" aria-controls="nav-home" aria-selected="true">
                                        Question 1&nbsp;
                                <button className="closeQuestionTab" onClick={(e) => { e.stopPropagation(); this.closeQuestionTab(QUESTION + "1", "1") }}>
                                            <i className="fa fa-close" />
                                        </button>
                                    </a>
                                </div>
                                <button className="addQuestionButton" onClick={(e) => { e.stopPropagation(); this.addQuestionTab("question1") }}>
                                    <i className="fa fa-plus" />
                                </button>
                            </div>
                        </div>

                    </nav>
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-panel fade show active" id="panel1" role="tabpanel" aria-labelledby="question1">
                            <TreeViewWeb eventData={eventData} onSave={this.onSave} question={this.state.questionArr.questions[this.state.selectedTab]} />
                            <div className="tab-create">
                                <button className="btn btn-success" onClick={(e) => { e.stopPropagation(); this.createTestScript() }}>
                                    <i className="fa fa-plus" />
                                    &nbsp;CREATE TEST SCRIPT
                         </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}



export default CreateTestScript;

