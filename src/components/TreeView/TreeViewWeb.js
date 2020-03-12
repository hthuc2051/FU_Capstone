import React, { Component } from 'react';
import './style.css';
import { Variable } from '../index.js';
import * as Constant from '../../constants/AppConstants';
class TreeViewWeb extends Component {

  constructor(props) {
    super(props);
    this.txtMethodName = React.createRef();
    this.state = {
      data: '',
      editableNode: '',
      expectedResult: '',
      expectedResultText: '',
      eventData: null,
      listInputParam: '',
      listStep: '',
      question: {
        testcase: 'question1',
        code: '',
        point: 0 ,
      }
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {

    // if (nextProps.eventData === prevState.eventData && nextProps.eventData !== null) {
    //   return null;
    // }

    if (nextProps.question !== null) {
      if (document.getElementById('txtMethodName') !== null) {
        document.getElementById('txtMethodName').value = nextProps.question.data.methodName;
      }
      return {
        data: nextProps.question.data,
        question: nextProps.question,
        expectedResult: nextProps.question.data.expectedResult,
        expectedResultText: nextProps.question.data.expectedResult.value,
        listInputParam: nextProps.question.data.params[0].children,
        listStep: nextProps.question.data.params[1].children,
        eventData : nextProps.eventData,
      }

    }
    // Ngược lại nếu có bất kì props nào thay đổi thì set lại state;
    return { eventData: nextProps.eventData }

  }

  addRoot = () => {
    let root = {
      name: '',
      exportValue: '',
      showChildren: true,
      editMode: true,
      children: []
    }

    this.setState({
      data: root
    });
  }

  handleEditChange = (e, paramObj) => {
    paramObj[e.target.name] = e.target.paramObj;
    this.setState({ paramObj });
  }

  deleteNode = (parent, index) => {
    parent.splice(index, 1);
    this.setState({ parent });
  }

  makeEditable = (paramObj) => {
    this.setState({
      editableNode: JSON.parse(JSON.stringify(paramObj)),
    });
    paramObj.editMode = true;
    this.setState({ paramObj });
  }

  closeForm = (paramObj, parent, index) => {
    if (typeof (paramObj) === undefined) { return; }
    if (paramObj.name !== '' && paramObj.exportValue !== '') {
      paramObj.type = this.state.editableNode.type;
      paramObj.name = this.state.editableNode.name;
      paramObj.value = this.state.editableNode.value;

      paramObj.editMode = false;
      this.setState({ paramObj });
    }
    else {
      parent.splice(index, 1);
      this.setState({ parent });
    }
  }

  doneEdit = (paramObj) => {
    if (paramObj.value == '') {
      window.alert("Please Insert All The Input Fields")
    } else {
      paramObj.editMode = false;
      this.setState({ paramObj }, () => { this.saveTestCase(); });
      if (paramObj.label == undefined) {
        this.setState({ expectedResultText: paramObj.value });
      }
    }
  }

  toggleView = (ob) => {
    ob.showChildren = !ob.showChildren;
    this.setState({ ob });
  }

  addMember = (parent) => {
    let newChild = {
      label: parent[0].label,
      type: '',
      name: '',
      value: '',
      showChildren: false,
      editMode: true,
      children: []
    }
    parent.push(newChild);
    this.setState({ parent });
  }


  nodeEditForm = (label, paramObj, parent, index) => {
    let { eventData } = this.state;
    return (
      <div className="node node_edit" onClick={(e) => { e.stopPropagation() }}>
        <form className="node_edit_form">
          <Variable
            label={label}
            paramObj={paramObj}
            appType='Web'
            parent={parent}
            index={index}
            eventData = {eventData}
            doneEdit={this.doneEdit}
            closeForm={this.closeForm}
          />
        </form>
      </div>
    )
  }
  addChild = (node) => {
    node.showChildren = true;
    node.children.push({
      label: Constant.LABEL_PARAM,
      type: 'String',
      name: 'string',
      value: 'null',
      showChildren: false,
      editMode: false,
      children: []
    });
    this.setState({ node });
  }
  makeChildren = (node) => {
    if (typeof node === 'undefined' || node.length === 0) return null;
    let children;
    children = node.map((paramObj, index) => {

      let item = null;

      // A node has children and want to show her children
      if (paramObj.children.length > 0 && paramObj.showChildren) {
        let babies = this.makeChildren(paramObj.children);
        let normalMode = (
          <div className="node">
            <i className="fa fa-minus-square-o"></i>{paramObj.name}
            <span className="actions">
              <i className="fa fa-pencil" onClick={(e) => { e.stopPropagation(); this.makeEditable(paramObj) }}></i>
              <i className="fa fa-close" onClick={(e) => { e.stopPropagation(); this.deleteNode(node, index) }}></i>
            </span>
          </div>
        )
        item = (
          <li key={index} onClick={(e) => { e.stopPropagation(); this.toggleView(paramObj) }}>
            {(paramObj.editMode) ? this.nodeEditForm(Constant.LABEL_PARAM, paramObj, node, index) : normalMode}
            {babies}
          </li>
        )
      }

      // A node has children but don't want to showing her children
      else if (paramObj.children.length > 0 && !paramObj.showChildren) {
        item = (
          <li key={index} onClick={(e) => { e.stopPropagation(); this.toggleView(paramObj) }}>
            <div className="node"><i className="fa fa-plus-square-o"></i>{paramObj.name}</div>
          </li>
        );
      }

      // A node has no children
      else if (paramObj.children.length === 0) {
        let normalMode = (
          <div className="node"><i className="fa fa-square-o"></i>{paramObj.type}-{paramObj.name}-{paramObj.value}
            <span className="actions">
              <i className="fa fa-plus" onClick={(e) => { e.stopPropagation(); this.addChild(paramObj) }}> </i>
              <i className="fa fa-pencil" onClick={(e) => { e.stopPropagation(); this.makeEditable(paramObj) }}></i>
              <i className="fa fa-close" onClick={(e) => { e.stopPropagation(); this.deleteNode(node, index) }}></i>
            </span>
          </div>
        );

        item = (
          <li key={index} onClick={(e) => e.stopPropagation()}>
            {(paramObj.editMode) ? this.nodeEditForm(Constant.LABEL_PARAM, paramObj, node, index) : normalMode}
          </li>
        );
      }
      return item;
    });

    return (
      <ul className="child-ul">
        {children}
        <li>
          <div className="node add_node" onClick={(e) => { e.stopPropagation(); this.addMember(node) }}>
            <i className="fa fa-plus" ></i>
            <span>Add New</span>
          </div>
        </li>
      </ul>
    );
  }

  getNodes = () => {
    if (typeof this.state.data.methodName === 'undefined') return null;
    let children = this.makeChildren(this.state.data.params);
    return children;
  }

  editMethodName = () => {
    let method = this.txtMethodName.current.value.replace(/\s/g, '').trim();
    let { data } = this.state;
    if (method !== '') {
      data.methodName = method;
      this.setState({ data });
    }
  }

  createParam = (param, index) => {
    if (index !== this.state.listInputParam.length - 1) {
      return (
        <span key={index}><span className="codeParam">"{param}"</span>,</span>
      );
    } else {
      return (
        <span key={index} className="codeParam">"{param}"</span>
      );
    }
  }

  saveTestCase = () => {
    let getCode = document.getElementById('codevalue');
    if (getCode != null) {
      let code = getCode.textContent;
      let { question } = this.state;
      question.code = code;
      this.setState({ question });
      this.props.onSave(this.state.question);
    }
  }

  createStep(step, index) {
    return (
      <code key={index} className="codeLine" id="temp">
        {/* Driver.findViewById(<span className="codeParamBold">"{step.name}"</span>).clear();<br />
        Driver.findViewById(<span className="codeParamBold">"{step.name}"</span>).sendKey(<span className="codeParamBold">"{step.value}"</span>);<br /> */}
        {step.code}
      </code>
    );
  }

  handlePoint =(e)=>{
   let point = e.target.value;
   let {question} = this.state;
   question.point = point;
   this.setState({question}) 
  }

  render() {
    let { expectedResult ,question} = this.state;
    console.log(this.props.question);
    return (
      <div className="col-md-12">
        <div className="group_dropdown_content">
          <div className="tree">
            Point <input type ="text" name="txtPoint"  value = {question.point} onChange={(e) =>this.handlePoint(e)}/>
            <input type="text" id="txtMethodName" ref={this.txtMethodName} className="form-control root" placeholder="Method's name" onKeyUp={(e) => { e.stopPropagation(); this.editMethodName() }} />
            <ul>
              <li>
                <div className="node"><i className="fa fa-minus-square-o"></i>Expected Result</div>
                <ul>
                  <li onClick={(e) => e.stopPropagation()}>
                    {(expectedResult.editMode) ? this.nodeEditForm(Constant.LABEL_EXPECTED_RESULT, expectedResult) : <div className="node">
                      <i className="fa fa-square-o"></i>
                      {expectedResult.type}-{expectedResult.value}
                      <span className="actions">
                        <i className="fa fa-pencil" onClick={(e) => { e.stopPropagation(); this.makeEditable(expectedResult) }}></i>
                      </span>
                    </div>}
                  </li>
                </ul>
              </li>
              {this.getNodes()}
            </ul>
          </div>
          <div className="codePage" id="code" name="code" >
            <code className="codeLine" id="codevalue">
              public void <span className="methodName">{this.state.data.methodName}</span>()&#123;<br />
              {this.state.listStep.map((item, index) => this.createStep(item, index))}<br/>
    assertEquals("<span className="codeParam">{this.state.expectedResultText}</span>",templateQuestion.question{this.props.selectedTab}(
              {this.state.listInputParam.map((item, index) => this.createParam(item.value, index))}
              ));<br />
              &#125;
            </code>
          </div>

        </div>

      </div>
    );
  }
}
export default TreeViewWeb;