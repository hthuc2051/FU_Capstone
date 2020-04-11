import React, { Component } from 'react';
import './style.css';

class CodePageContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            params: [],
            action: {
                name: '',
                code: '',
                params: [],
                subjects: []
            },
            subjects: [],
            paramTypes: [],
        };
    }

    leftBracket = '{';
    rightBracket = '}';

    saveAction = () => {
        let { params, action } = this.state;
        action.params = params;
        let formatedCode = action.code.replace(/\r?\n|\r/g, '');
        action.code = formatedCode;

        this.setState({ action });
        console.log(this.state.action);
    }

    addMoreParam = (e) => {
        e.preventDefault();
        let { params } = this.state;
        let randId = (+new Date).toString(36);

        params.push({
            id: randId,
            name: '',
            type: ''
        });

        this.setState({
            params: params
        });
    }

    onActionNameChangeHandler = (e, actionName) => {
        e.preventDefault();
        let { action } = this.state;
        actionName = e.target.value;
        action.name = actionName;
        this.setState({
            action
        });
    }

    onParamChangeHandler = (e, index) => {
        e.preventDefault();
        let { params } = this.state;

        let name = e.target.name;
        if (name === 'param-type') {
            params[index].type = e.target.value;
        }
        if (name === 'param-name') {
            params[index].name = e.target.value;
        }

        this.setState({
            params,
        });
    }

    renderParameter = (params) => {
        let result = [];
        result = params.map((item, index) => {
            return (
                <div className='form-group row params' key={index}>
                    <input className='form-control param-type'
                        name='param-type'
                        type='text'
                        value={item.type}
                        placeholder='Param type...'
                        onChange={(e) => this.onParamChangeHandler(e, index)} />
                    <input className='form-control param-value'
                        name='param-name'
                        type='text'
                        value={item.name}
                        placeholder='Param name...'
                        onChange={(e) => this.onParamChangeHandler(e, index)} />
                    <button className="btn btn-danger" onClick={() => this.removeParam(item.id)}>
                        <i className="fa fa-plus" /> Remove
                                            </button>
                </div>
            );
        });
        return result;
    }

    removeParam = (id) => {
        let { params } = this.state;
        var removeIndex = params.map(function (item) { return item.id; }).indexOf(id);

        if (removeIndex !== null && removeIndex >= 0) {
            params.splice(removeIndex, 1);
        }

        this.setState({params});
    }

    onCodeChangeHandler = (e, code) => {
        e.preventDefault();
        let { action } = this.state;
        code = e.target.value;
        action.code = code;
        this.setState({
            action
        });
    }

    renderCodeSnippet = (code) => {
        return (
            <div className="col-xl-5">
                <div className="code-block">
                    <div className="code-container">
                        <div id="highlighter_548907" className="syntaxhighlighter nogutter">
                            <div className="container">
                                <div>
                                    <code className="keyword" placeholder='actionName'>{this.state.action.name}() </code>
                                    <code className="plain">{this.leftBracket}</code>
                                </div>

                                <div className="line code-snippet">
                                    <span className="plain">{code}</span>
                                </div>

                                <div>
                                    <code className="plain">{this.rightBracket}</code>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div id="content-wrapper" >
                <div className="card content">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label >Action name:</label>
                                    <input type="text" className="form-control" onChange={(e) => this.onActionNameChangeHandler(e, this, this.state.action.name)} />
                                </div>

                                <div className='form-group'>
                                    <div>
                                        <label>Subject:</label>
                                    </div>

                                    <div className="form-check-inline">
                                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                        <label className="form-check-label" htmlFor="defaultCheck1">
                                            C
                                            </label>
                                    </div>
                                    <div className="form-check-inline">
                                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck2" />
                                        <label className="form-check-label" htmlFor="defaultCheck2">
                                            C#
                                            </label>
                                    </div>
                                    <div className="form-check-inline">
                                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck3" />
                                        <label className="form-check-label" htmlFor="defaultCheck3">
                                            Java Web
                                            </label>
                                    </div>
                                    <div className="form-check-inline">
                                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck4" />
                                        <label className="form-check-label" htmlFor="defaultCheck4">
                                            Java
                                            </label>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label >Code Snippet:</label>
                                    <textarea className="form-control" onChange={(e) => this.onCodeChangeHandler(e, this.state.action.code)} />
                                </div>

                                <div className="form-group">
                                    <label>Parameter:</label>
                                    <div>
                                        <button className="btn btn-success" onClick={this.addMoreParam}>
                                            Add Parameter
                                        </button>
                                    </div>
                                </div>

                                <div className="form-group" id="paramRoot" >
                                    {this.renderParameter(this.state.params)}
                                </div>

                                <br />
                                <div className=''>
                                    <button type="button" onClick={this.saveAction} className="btn btn-success">Save</button>
                                        &nbsp;
                                        <button type="reset" className="btn btn-danger">Clear</button>
                                </div>
                            </div>

                            <div className="vl" style={{ marginRight: '15px' }} ></div>

                            {this.renderCodeSnippet(this.state.action.code)}


                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CodePageContainer;
