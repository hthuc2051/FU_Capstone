import React, { Component } from 'react';
import './style.css';
import * as AppConstant from '../../constants/AppConstants';
// import { connect } from 'react-redux';



class Variable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            label: "",
            paramObj: null,
            parent: null,
            index: 1,
            selectedType: 'String',
            txtName: "",
            txtValue: "",
            eventData: null,
            isCreate: false,
            backUpdParamObj: null,
        };
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        let { paramObj, appType, parent, index, eventData } = nextProps;
        if (nextProps.eventData === prevState.eventData) {
            return null;
        }
        return {
            eventData: eventData,
            paramObj: paramObj,
            parent: parent,
            index: index,
            selectedType: paramObj.name,
        }
    }

    componentDidMount() {
        let { backUpdParamObj, paramObj } = this.state;
        if (backUpdParamObj === null && paramObj !== null) {
            backUpdParamObj = this.iterationCopy(paramObj);
            this.setState({ backUpdParamObj });
        }
    }

    doneEdit = () => {
        let { paramObj, selectedType, txtName, txtValue, eventData } = this.state;
        if(paramObj.label === AppConstant.LABEL_STEP){
            paramObj.name = selectedType;
            if (paramObj.label === AppConstant.LABEL_STEP) {
                eventData.forEach(element => {
                    if (element.name === selectedType) {
                        let code = element.code;
                        let codeReturn = this.renderCode(code, paramObj);
                        paramObj.code = codeReturn;
                    }
                });
    
            }
        }
       
        this.props.doneEdit(paramObj);
    }

    renderCode(code, paramObj) {
        // change here
        let arr = paramObj.params;
        if (paramObj != null && typeof (paramObj) !== 'undefined') {
            if (arr != null && typeof (arr) !== 'undefined' && arr.length > 0) {
                arr.forEach(element => {
                    code = code.split(element.name).join(this.checkParameterType(element));
                });
            }

        }
        return code;
    }

    checkParameterType(param) {
        let type = param.type;
        let value = param.value;
        if (type !== null && type !== 'undefined' && value !== null && value !== 'undefined') {
            switch (type) {
                case AppConstant.ARRAY_OPTIONS[5]:
                    return '"' + value + '"';
                default: return value;
            }
        }
        return "";
    }

    closeForm = () => {
        let { paramObj, parent, index } = this.state;
        this.props.closeForm(paramObj, parent, index);
    }
    render() {
        let { paramObj } = this.state;
        return (
            <div className="variable-item">
                <label>{paramObj.label}</label>
                <div className="d-flex justify-content-start">
                    <div className="input-group mb-3">
                        {/*  */}
                        {this.renderOptions(paramObj.label)}
                        {paramObj.label === AppConstant.LABEL_STEP ?
                            this.renderInput(paramObj) : ''}
        
                        {paramObj.label === AppConstant.LABEL_PARAM ?
                            <input name="name" className="form-control" placeholder="Name" value={paramObj.name} onChange={this.onChange}/>
                            : ''}

                        {paramObj.label === AppConstant.LABEL_PARAM ?
                            <input name="value" className="form-control" placeholder="Value" value={paramObj.value} onChange={this.onChange} />
                            : ''}
                        {/*  */}
                    </div>
                </div>
                <div className="action-tab">
                    <button type="button" className="btn btn-success" onClick={this.doneEdit} >Save</button>
                    <button type="button" className="btn btn-danger" onClick={this.closeForm}>Discard</button>
                </div>
            </div>
        );
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        let { paramObj } = this.state;
        if(paramObj.label === AppConstant.LABEL_STEP){
            paramObj.params[name].value = target.value;
        }else {
            paramObj[name] = target.value;
        }
        this.setState({ paramObj });
    }

    renderInput(paramObj) {
        if (paramObj.label !== AppConstant.LABEL_STEP) return;
        let result = null;
        let arr = null;
        arr = paramObj.params;
        if (paramObj != null && typeof (paramObj) !== 'undefined') {
            if (arr != null && typeof (arr) !== 'undefined' && arr.length > 0) {
                result = arr.map((item, index) => {
                    return (<input name={index} key={index} className="form-control" placeholder={item.name}
                        value={item.value}
                        onChange={this.onChange}
                    />);
                })
            }

        }
        return result;
    }

    changeSelectType = (e) => {
        e.preventDefault();
        var target = e.target;
        var name = target.name;
        let value = target.value;
        this.setState({
            [name]: value
        });
        let { backUpdParamObj, paramObj, eventData } = this.state;
        if (value !== null && typeof (value) !== 'undefined' && backUpdParamObj !== null && typeof (backUpdParamObj) !== 'undefined') {
            if (value == backUpdParamObj.name) {
                paramObj = this.iterationCopy(backUpdParamObj);
            } else {
                eventData.forEach(element => {
                    if (element.name === value) {
                        let tempEvent = this.iterationCopy(element);
                        let arr = [];
                        element.params.forEach(param => {
                            let tempParam = this.iterationCopy(param);
                            tempParam.value = tempParam.name;
                            arr.push(tempParam);
                        });
                        paramObj.name = tempEvent.name;
                        paramObj.params = arr;
                        paramObj.code = tempEvent.code;
                        this.setState({ paramObj });
                    }
                });
            }
        }
    }

    iterationCopy(src) {
        let target = {};
        for (let prop in src) {
            if (src.hasOwnProperty(prop)) {
                // if the value is a nested object, recursively copy all it's properties
                if (this.isObject(src[prop])) {
                    target[prop] = this.iterationCopy(src[prop]);
                } else {
                    target[prop] = src[prop];
                }
            }
        }
        return target;
    }
    isObject(obj) {
        var type = typeof obj;
        return type === 'function' || type === 'object' && !!obj;
    };

    renderOptions = (label) => {
        let { eventData } = this.state;
        if (eventData === null) {
            return;
        }
        let options;
        if (label == AppConstant.LABEL_STEP) {
            options = eventData.map((item, index) =>
                <option
                    key={index}
                    value={item.name}
                >
                    {item.name}
                </option>
            );
            return (
                <select name="selectedType" value={this.state.selectedType} className="custom-select" onChange={this.changeSelectType} autoFocus>
                    {options}
                    {/* Extends more later */}
                </select>
            )
        } else {
            options = AppConstant.ARRAY_OPTIONS.map((data, index) =>
                <option
                    key={index}
                    value={data}
                >
                    {data}
                </option>
            );
            return (
                <select name="type" value={this.state.paramObj.type} className="custom-select" onChange={this.onChange} autoFocus>
                    {options}
                    {/* Extends more later */}
                </select>
            )
        }

    }
}


export default Variable;



