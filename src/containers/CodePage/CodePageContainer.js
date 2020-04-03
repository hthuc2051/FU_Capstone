import React, { Component } from 'react';
import './style.css';

class CodePageContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            param: [],
            action: {
                name: '',
                code: '',
                param: [],
                subject: ''
            }
        };

        this.addMoreParam = this.addMoreParam.bind(this);
        this.onChangeHandle = this.onChangeHandle.bind(this);
        this.saveAction = this.saveAction.bind(this);
    }

    leftBracket = '{';
    rightBracket = '}';

    addMoreParam(e) {
        // var getDocument = document.getElementById('multiParam');
        //var createInput = document.createElement();
        e.preventDefault();
        let { param } = this.state;
        param.push({
            name: 'param',
            type: 'String'
        })

        this.setState({
            param: param
        });
        console.log(this.state.param);
        this.renderInputElement();

    }
    saveAction() {
        console.log(this.state.action);
    }

    onChangeHandle() {
        var name = this.refs.txtInput.value;
        var code = this.refs.txtCode.value;
        var subject = this.refs.slProgram.value;
        let action = this.state.action;
        action.name = name;
        action.code = code;
        action.param = this.state.param;
        action.subject = subject;
        this.setState({
            action: action
        });
        console.log(action);
    }

    renderInputElement() {
        var getDOMroot = document.getElementById('paramRoot');
        getDOMroot.innerHTML = "";
        this.state.param.forEach((element, index) => {
            var createDiv = document.createElement('div');
            createDiv.className = "row";
            createDiv.id = "multipleParam"
            createDiv.style = 'margin-left:0px;'
            var inputTextName = document.createElement("input");
            inputTextName.className = 'form-control';
            inputTextName.style = 'width:200px';
            inputTextName.value = element.name;
            inputTextName.onchange = (e) => {
                console.log(e.target.value);
                console.log(this.state);
                let { param } = this.state;
                param[index].name = e.target.value;
                console.log(param[index]);
                console.log(element);
                this.setState({
                    param: param
                })
            }
            var spaceDiv = document.createElement("div");
            spaceDiv.style = 'width:10px'
            var inputTextParam = document.createElement("input");
            inputTextParam.className = 'form-control';
            inputTextParam.style = 'width:200px;';
            inputTextParam.value = element.type;
            inputTextParam.onchange = (e) => {
                let { param } = this.state;
                param[index].type = e.target.value
                console.log(param[index]);

                this.setState({
                    param: param
                })
            }


            createDiv.appendChild(inputTextName)
            createDiv.appendChild(spaceDiv);
            createDiv.appendChild(inputTextParam)


            var space = document.createElement('br');
            getDOMroot.appendChild(createDiv);
            getDOMroot.appendChild(space);

        });
    }



    render() {
        return (
            <div id="content-wrapper" >
                <div className="card content">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-xs-6">
                                <form style={{ padding: '0 15px 0 0' }}>
                                    <div className="form-group">
                                        <label >Action name:</label>
                                        <input type="text" ref="txtInput" onChange={this.onChangeHandle} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Action name" style={{ width: '500px' }} />

                                    </div>
                                    <div className="form-group">
                                        <label >Code Generator</label>
                                        <textarea className="form-control" ref="txtCode" style={{ width: '500px' }} onChange={this.onChangeHandle} />
                                    </div>
                                    <div className="form-group">
                                        <label style={{ paddingTop: '5px' }} >Type Parameter</label>

                                        <button className="btn btn-success" style={{ float: 'right' }} onClick={this.addMoreParam}>
                                            <i className="fa fa-plus">
                                                &nbsp;
                                            </i>Add Parameter</button>
                                    </div>
                                    <div className="form-group" id="paramRoot" style={{ marginLeft: '3px' }}>

                                    </div>

                                    <label>Programming</label>
                                    <select ref="slProgram" onChange={this.onChangeHandle} style={{ width: '100px' }} name="slProgram" id="inputslProgram" className="form-control" required="required">
                                        <option value="C#">C#</option>
                                        <option value="Java">Java</option>
                                        <option value="Web">Web</option>

                                    </select>
                                    <br />
                                    <button type="button" onClick={this.saveAction} className="btn btn-success">Save</button>
                                    &nbsp;
                                                <button type="reset" className="btn btn-danger">Clear</button>

                                </form>
                            </div>

                            <div className="vl" style={{ marginRight: '15px' }} ></div>

                            <div className="col-xs-6">
                                <div className="code-block">
                                    <div className="code-container">
                                        <div id="highlighter_548907" className="syntaxhighlighter nogutter">
                                            <table border="0" cellPadding="0" cellSpacing="0">
                                                <tbody>
                                                    <tr>
                                                        <td className="code">
                                                            <div className="container">
                                                                <div className="line number4 index3 alt1">
                                                                    <code className="keyword">function()</code>
                                                                    <code className="plain"> {this.leftBracket}  </code>
                                                                </div>

                                                                <div className="line number4 index3 alt1">
                                                                    <p className="plain"> {this.state.action.code} </p>
                                                                </div>

                                                                <div className="line number4 index3 alt1">
                                                                    <code className="plain">  {this.rightBracket}  </code>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CodePageContainer;
