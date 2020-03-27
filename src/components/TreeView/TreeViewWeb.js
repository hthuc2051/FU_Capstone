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
      expectedResultType: 'String',
      eventData: null,
      listInputParam: '',
      global_variable: null,
      listStep: '',
      question: {
        testcase: 'question1',
        code: '',
        point: 0,
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
        // listInputParam: nextProps.question.data.params[0].children,
        global_variable: nextProps.global_variable,
        listStep: nextProps.question.data.params[0].children,
        eventData: nextProps.eventData,
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
    let isEmpty = false;
    if (paramObj.label === Constant.LABEL_STEP) {
      let array = paramObj.params;
      array.forEach(element => {
        if (element.value == '') {
          isEmpty = true;
        }
      });
      if (isEmpty) {
        window.alert("Please Insert All The Input Fields")
      } else {
        paramObj.editMode = false;
        this.setState({ paramObj }, () => { this.saveTestCase(); });
        if (paramObj.label == undefined) {
          this.setState({ expectedResultText: paramObj.value, expectedResultType: paramObj.type });
        }
      }
    }
    else if (paramObj.label === Constant.LABEL_PARAM) {
      if (paramObj.value == '') {
        isEmpty = true;
      }
      else if (paramObj.name == '') {
        isEmpty = true;
      }

      if (isEmpty) {
        window.alert("Please Insert All The Input Fields")
      } else {
        paramObj.editMode = false;
        this.setState({ paramObj }, () => { this.saveGlobalVariable(); });
      }
    }
  }

  saveGlobalVariable = () => {
    let { global_variable } = this.state;
    if(global_variable !== null){
      this.props.onSaveGlobalVariable(global_variable);
    }
  }

  toggleView = (ob) => {
    ob.showChildren = !ob.showChildren;
    this.setState({ ob });
  }

  addMember = (parent) => {
    let newChild = null;
    if (parent[0].label === Constant.LABEL_STEP) {
      let sampleData = this.state.eventData[0];
      if (sampleData !== null && typeof (sampleData) !== 'undefined') {
        sampleData.params.forEach(element => {
          element.value = element.name;
        });
        newChild = {
          label: parent[0].label,
          type: '',
          name: sampleData.name,
          value: '',
          code: sampleData.code,
          params: sampleData.params,
          showChildren: false,
          editMode: true,
          children: []
        }
      }
    } else if (parent[0].label === Constant.LABEL_PARAM) {
      newChild = {
        label: parent[0].label,
        type: 'String',
        name: 'name',
        value: 'value',
        showChildren: false,
        editMode: true,
        children: []
      }
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
            eventData={eventData}
            doneEdit={this.doneEdit}
            closeForm={this.closeForm}
          />
        </form>
      </div>
    )
  }
  addChild = (node) => {
    node.showChildren = true;
    let newChild = null;
    if (node.label === Constant.LABEL_STEP) {
      let sampleData = this.state.eventData[0];
      if (sampleData !== null && typeof (sampleData) !== 'undefined') {
        sampleData.params.forEach(element => {
          element.value = element.name;
        });
        newChild = {
          label: node.label,
          name: sampleData.name,
          code: sampleData.code,
          params: sampleData.params,
          showChildren: false,
          editMode: true,
          children: []
        }
      }
    } else if (node.label === Constant.LABEL_PARAM) {
      newChild = {
        label: node.label,
        type: 'String',
        name: 'name',
        value: 'value',
        showChildren: false,
        editMode: true,
        children: []
      }
    }
    node.children.push(newChild);
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
          <div className="node"><i className="fa fa-square-o"></i>
            {paramObj.label === Constant.LABEL_STEP ?
              //paramObj.type  +" - " + paramObj.params +" - " + paramObj.value
              this.renderParam(paramObj)
              :
              paramObj.type + " - " + paramObj.name + " - " + paramObj.value
            }

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

  renderParam(paramObject) {
    let strReturn = paramObject.name;
    let paramArr = paramObject.params;
    if (paramArr !== null && typeof (paramArr) !== 'undefined') {
      paramArr.map((item, index) => {
        strReturn += " - " + item.value;
      })
    }
    return strReturn;
  }

  getNodes = (param) => {
    if (typeof this.state.data.methodName === 'undefined') return null;
    let children = this.makeChildren(param);
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

  createParam = (item, index) => {
    if (item !== null && typeof (item) !== 'undefined') {
      let param = item.value;
      // type = string
      if (item.type === Constant.ARRAY_OPTIONS[5]) {
        param = '"' + param + '"';
      }
      return (
        <span>{item.type} {item.name} = <span key={index} className="codeParam">{param};</span><br /></span>
      )
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
    console.log(step);

    let code = this.getChildCode(step);

    return (
      <code key={index} className="codeLine" id="temp">
        {/* Driver.findViewById(<span className="codeParamBold">"{step.name}"</span>).clear();<br />
        Driver.findViewById(<span className="codeParamBold">"{step.name}"</span>).sendKey(<span className="codeParamBold">"{step.value}"</span>);<br /> */}
        {/* {step.code} */}
        {code}
        <br />
      </code>

    );
  }

  getChildCode(step) {
    let code = step.code;
    let child = step.children;
    let temp = '';
    if (child !== null && typeof (child) !== 'undefined') {
      if (child.length > 0) {
        child.map((item, i) => { temp += this.getChildCode(item) });
      }
    }
    if (code.indexOf('//body') > -1 && temp !== '' && typeof (temp) !== 'undefined') {
      code = code.replace('//body', temp);
    }
    if (code !== null && typeof (code) !== 'undefined') {
      return code;
    }
    return '';
  }

  handlePoint = (e) => {
    let point = e.target.value;
    let { question } = this.state;
    question.point = point;
    this.setState({ question })
  }

  renderExpectedResult(expectedResult, expectedResultType) {
    let strValue = '';
    strValue = expectedResultType + ".valueOf(" + expectedResult + ")";
    return strValue;
  }

  render() {
    let { expectedResult, question, data, expectedResultType, expectedResultText, listInputParam, global_variable } = this.state;
    console.log(global_variable);
    console.log(data.params);
    return (
      <div className="col-md-12">
        <div className="group_dropdown_content">
          <div className="tree">
            {question.point === 0 ?
              <p> Point <input type="text" name="txtPoint" value='' onChange={(e) => this.handlePoint(e)} /></p>
              :
              <p> Point <input type="text" name="txtPoint" value={question.point} onChange={(e) => this.handlePoint(e)} /></p>
            }

            <input type="text" id="txtMethodName" ref={this.txtMethodName} className="form-control root" placeholder="Method's name" onKeyUp={(e) => { e.stopPropagation(); this.editMethodName() }} />
            <ul>
              <li>
                <div className="node"><i className="fa fa-minus-square-o"></i>global_variable</div>
                {this.makeChildren(global_variable.children)}
              </li>

              {this.getNodes(data.params)}
            </ul>
          </div>
          <div className="codePage" id="code" name="code" >
            <code className="codeLine" id="codevalue">
              <p>{global_variable.children.map((item, index) => this.createParam(item, index))}</p>
              public void <span className="methodName">{this.state.data.methodName}</span>()&#123;<br />
              {this.state.listStep.map((item, index) => this.createStep(item, index))}
              &#125;
            </code>
          </div>

        </div>

      </div>
    );
  }
}
export default TreeViewWeb;