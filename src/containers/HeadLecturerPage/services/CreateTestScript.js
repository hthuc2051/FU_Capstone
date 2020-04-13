import React, { Component } from 'react';
import { TreeViewWeb } from './../../../components/index';
import * as AppConstant from './../../../constants/AppConstants';
import ScriptTemplateJavaWeb from './template.Javaweb';
import '../style.css';

const QUESTION = "question";
const QUESTION_UPPER = "Question";

class CreateTestScript extends Component {
    // code: 'public void testcase(){Driver.findViewById("txtUsername").clear();Driver.findViewById("txtUsername") .sendKey("NguyenVanA");Driver.findViewById("txtPassword").clear();Driver.findViewById("txtPassword") .sendKey("p4ssw0rd");assertEquals("admin",question1("NguyenVanA","p4ssw0rd"));}'
    constructor(props) {
        super(props);
        let template = new ScriptTemplateJavaWeb();
        this.state = {
            isLoading: false,
            pageType: '',
            eventData: null,
            questionArr: {
                name: 'test1',
                questions: [{
                    data: template.DEFAULT,
                    testcase: 'question1',
                    code: template.DEFAULT.code,
                    point: 0,
                    order:0,
                }],
                global_variable:
                {
                    label: AppConstant.LABEL_PARAM,
                    parentId: 39,
                    name: 'Global Variable',
                    showChildren: true,
                    editMode: false,
                    children: [
                        {
                            label: AppConstant.LABEL_PARAM,
                            parentId: 50,
                            type: 'String',
                            name: 'String',
                            value: 'value',
                            showChildren: false,
                            editMode: false,
                            children: [],
                        }
                    ],
                    code:'String String = "value";',
                },
            },
            scriptName: '',
            count: 2,
            selectedTab: 0,
            txtScriptName: '',
            selectedFile: null,
            currentTemplate : ScriptTemplateJavaWeb,
        };
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps === prevState) {
            return null;
        }
        let questionArr = prevState.questionArr;
        if(nextProps.currentTemplate !==  null && typeof(nextProps.currentTemplate) !== 'undefined' && nextProps.currentTemplate !== prevState.currentTemplate){
            questionArr.questions[0].data = new nextProps.currentTemplate().DEFAULT;
            return {
                eventData: nextProps.eventData,
                file: nextProps.file,
                pageType: nextProps.pageType,
                currentTemplate: nextProps.currentTemplate,
                questionArr: questionArr
            }
        }
        return {
            eventData: nextProps.eventData,
            file: nextProps.file,
            pageType: nextProps.pageType,
            currentTemplate: nextProps.currentTemplate,
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
        console.log(questionArr)
    }

    onSaveGlobalVariable = (globalVariable) => {
        let { global_variable } = this.state;
        global_variable = globalVariable;
        this.setState({ global_variable });
        console.log(global_variable)
    }

    createTestScript = () => {
        let { questionArr, txtScriptName, selectedFile } = this.state;
        let isvalid = this.checkValid(questionArr, txtScriptName);
        if (!isvalid) return;
        let newQuestionArr = { name: 'test1', questions: [] };
        for (let i = 0; i < questionArr.questions.length; i++) {
            let question = { testcase: questionArr.questions[i].data.methodName, code: questionArr.questions[i].code, point: questionArr.questions[i].point,order:questionArr.questions[i].order };
            newQuestionArr.questions.push(question);
        }
           this.props.saveTestScript(newQuestionArr,txtScriptName,selectedFile,questionArr,AppConstant.PAGE_TYPE_CREATE_SCRIPT,questionArr.global_variable.code);
    }

    checkValid(questionArr, txtScriptName) {
        if (txtScriptName === '') {
            window.alert(AppConstant.ERROR_MSG_EMPTY_SCRIPT_NAME);
            return false;
        }
        for (let i = 0; i < questionArr.questions.length; i++) {
            let code = questionArr.questions[i].code;
            let point = questionArr.questions[i].point;
            let order = questionArr.questions[i].order;
            let reg = /^\d+(.{1}\d+)?$/;
            if (code === '') {
                window.alert(AppConstant.ERROR_MSG_EMPTY_QUESTION_CODE + questionArr.questions[i].testcase);
                return false;
            }
            if (point === 0 || point === '') {
                window.alert(AppConstant.ERROR_MSG_EMPTY_QUESTION_POINT + questionArr.questions[i].testcase);
                return false;
            }
            if(!reg.test(point)){
                window.alert(AppConstant.ERROR_MSG_WRONG_FORMAT_POINT + questionArr.questions[i].testcase);
                return false;
            }
            if (order === 0 || order === '') {
                window.alert(AppConstant.ERROR_MSG_EMPTY_QUESTION_ORDER + questionArr.questions[i].testcase);
                return false;
            }
            if(!reg.test(order)){
                window.alert(AppConstant.ERROR_MSG_WRONG_FORMAT_ORDER + questionArr.questions[i].testcase);
                return false;
            }
        }
        return true;
    }

    // click Add question button
    addQuestionTab = () => {
        let { questionArr, currentTemplate } = this.state;
        let template = new currentTemplate;
        let index = questionArr.questions.length;
        if (index > 0) {
            let item = { testcase: QUESTION + (index + 1), data: template.DEFAULT, point: 0, code: template.DEFAULT.code,order:0 };
            questionArr.questions.push(item);
            this.setState({ questionArr });
        }
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

    closeQuestionTab = (name) => {
        let { questionArr } = this.state;
        if (questionArr.questions.length !== 1) {
            for (let i = 0; i < questionArr.questions.length; i++) {
                if (questionArr.questions[i].testcase === name) {
                    questionArr.questions.splice(i, 1);
                    if (this.state.selectedTab === i) {
                        this.setState({ selectedTab: 0 });
                        let element = questionArr.questions[0].testcase;
                      //  document.getElementById(element).setAttribute("class", "nav-item nav-link active");
                    }
                    i -= 1;
                } else {
                    questionArr.questions[i].testcase = QUESTION + (i + 1);
                }
            }
            this.setState({ questionArr });
        }
    }

    onchangeTemplate = (selectedTempalate, selectedTab) => {
        let { questionArr,currentTemplate } = this.state;
        if (selectedTempalate !== null && typeof (selectedTempalate) !== 'undefined') {
            switch (selectedTempalate) {
                case 'Login':
                    let login = new currentTemplate;
                    questionArr.questions[selectedTab].data = login.LOGIN;
                    questionArr.questions[selectedTab].code = login.LOGIN.code;
                    break;
                case 'Create':
                    let create = new currentTemplate;
                    questionArr.questions[selectedTab].data = create.CREATE;
                    questionArr.questions[selectedTab].code = create.CREATE.code;
                    break;
                case 'Update':
                    let update = new currentTemplate;
                    questionArr.questions[selectedTab].data = update.UPDATE;
                    questionArr.questions[selectedTab].code = update.UPDATE.code;
                    break;
                case 'Delete':
                    let deleteTemplate = new currentTemplate;
                    questionArr.questions[selectedTab].data = deleteTemplate.DELETE;
                    questionArr.questions[selectedTab].code = deleteTemplate.DELETE.code;
                    break;
                default: 
                questionArr.questions[selectedTab].data = new currentTemplate().DEFAULT;
                questionArr.questions[selectedTab].code = new currentTemplate().DEFAULT.code;
            }
            this.setState({ questionArr });
        }
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        this.setState({
            [name]: target.value
        });
        if(name === 'txtScriptName'){
            let {questionArr} = this.state;
            questionArr.name = target.value;
            this.setState({questionArr});
        }
    }

    handleFile = (e) => {
        this.setState({ selectedFile: e.target.files[0] });
    }
    renderQuestionTab(questionArr) {
        let question = questionArr.questions;
        let result = null;
        if (question !== null && typeof (question) !== 'undefined') {
            if (question.length > 0) {
                result = question.map((item, index) => {
                    if (index == 0) {
                        return (
                            <a className="nav-item nav-link active" id={item.testcase} key={index}
                                data-toggle="tab" onClick={(e) => { e.stopPropagation(); this.resetTreeView(item.testcase) }} href="#panel2" role="tab" aria-controls="nav-home" aria-selected="true">
                                {item.testcase}&nbsp;
                                <button className="closeQuestionTab" onClick={(e) => { e.stopPropagation(); this.closeQuestionTab(item.testcase, index) }}>
                                    <i className="fa fa-close" />
                                </button>
                            </a>
                        )
                    } else {
                        return (
                            <a className="nav-item nav-link" id={item.testcase} key={index}
                                data-toggle="tab" onClick={(e) => { e.stopPropagation(); this.resetTreeView(item.testcase) }} href="#panel2" role="tab" aria-controls="nav-home" aria-selected="true">
                                {item.testcase}&nbsp;
                                <button className="closeQuestionTab" onClick={(e) => { e.stopPropagation(); this.closeQuestionTab(item.testcase, index) }}>
                                    <i className="fa fa-close" />
                                </button>
                            </a>
                        )
                    }

                })
            }
        }
        return result;
    }
    render() {
        let { isLoading, eventData, questionArr } = this.state;
        return (
            <div>
                <div id="content-wrapper">
                    <div className={isLoading ? 'loading' : 'none-loading'}>
                        <div className="loader"></div>
                    </div>
                    <nav className="question-nav">

                        <input type="text" name="txtScriptName" id="txtScriptName" onChange={this.onChange} className="form-control script-name" placeholder="Script's name" />
                        <div id="nav-tab" role="tablist">
                            <div className="nav nav-tabs ">
                                {questionArr ? <div className="nav">{this.renderQuestionTab(questionArr)}</div> : ''}
                                <button className="addQuestionButton" onClick={(e) => { e.stopPropagation(); this.addQuestionTab() }}>
                                    <i className="fa fa-plus" />
                                </button>
                            </div>
                        </div>

                    </nav>
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-panel fade show active" id="panel1" role="tabpanel" aria-labelledby="question1">
                            <TreeViewWeb eventData={eventData} onSave={this.onSave} question={this.state.questionArr.questions[this.state.selectedTab]} selectedTab={this.state.selectedTab}
                                global_variable={this.state.questionArr.global_variable} onSaveGlobalVariable={this.onSaveGlobalVariable} onchangeTemplate={this.onchangeTemplate} />
                            <div className="tab-create">
                                <input type="file" name="file" onChange={(e) => { this.handleFile(e) }} />
                                <button className="btn btn-success btn_create" onClick={(e) => { e.stopPropagation(); this.createTestScript() }}>
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

