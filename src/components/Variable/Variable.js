import React, { Component } from 'react';
import './style.css';
import * as AppConstant from '../../constants/AppConstants';
// import { connect } from 'react-redux';

const arrOptions = ['Boolean', 'Char', 'Integer', 'Float', 'Double', 'String'];

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
        };
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        let { paramObj, appType, parent, index, eventData } = nextProps;
        console.log(eventData);
        if (nextProps.eventData === prevState.eventData) {
            return null;
        }
        // if is create new
        if (paramObj.type === '' || paramObj.type === null) {
            if(paramObj.label === AppConstant.LABEL_STEP){ // step
                return {
                    eventData: eventData,
                    paramObj: paramObj,
                    parent: parent,
                    index: index,
                    selectedType: eventData[0].name,
                    txtName: paramObj.name,
                    txtValue: paramObj.value,
                    isCreate : true,
                }
            }else if(paramObj.label === AppConstant.LABEL_PARAM){ // param
                return {
                    eventData: eventData,
                    paramObj: paramObj,
                    parent: parent,
                    index: index,
                    selectedType: arrOptions[0],
                    txtName: paramObj.name,
                    txtValue: paramObj.value,
                    isCreate : true,
                }
            }
            
        } else { //if update
            return {
                eventData: eventData,
                paramObj: paramObj,
                parent: parent,
                index: index,
                selectedType: paramObj.type,
                txtName: paramObj.name,
                txtValue: paramObj.value,
            }
        }

    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        this.setState({
            [name]: target.value
        });
    }

    doneEdit = () => {
        let { paramObj, selectedType, txtName, txtValue, eventData } = this.state;
        paramObj.type = selectedType;
        paramObj.name = txtName;
        paramObj.value = txtValue;
        if (paramObj.label === AppConstant.LABEL_STEP) {
            eventData.forEach(element => {
                if (element.name === selectedType) {
                    let code = element.code;
                    let codeReturn = this.renderCode(code, txtName, txtValue);
                    paramObj.code = codeReturn;
                }
            });

        }
        this.props.doneEdit(paramObj);
    }

    renderCode(code, name, value) {
        // change here
        do {
            code = code.replace(AppConstant.PARAM_NAME, '"'+name+'"');
            code = code.replace(AppConstant.PARAM_VALUE,'"'+ value +'"');
        } while (code.indexOf(AppConstant.PARAM_VALUE) > -1 || code.indexOf(AppConstant.PARAM_NAME) > -1)
        return code;
    }

    closeForm = () => {
        let { paramObj, parent, index } = this.state;
        this.props.closeForm(paramObj, parent, index);
    }
    render() {
        let { txtName, txtValue } = this.state;
        let { label } = this.props;
        let { paramObj } = this.props;
        console.log(paramObj);
        return (
            <div className="variable-item">
                <label>{paramObj.label}</label>
                <div className="d-flex justify-content-start">
                    <div className="input-group mb-3">
                        {/*  */}
                        {this.renderOptions(paramObj.label)}
                        {label === AppConstant.LABEL_PARAM ?
                            <input name="txtName" className="form-control" placeholder="Name"
                                value={txtName}
                                onChange={this.onChange}
                            /> : ''}
                        <input name="txtValue" className="form-control" placeholder="Value" value={txtValue} onChange={this.onChange} />
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
        } else {
            options = arrOptions.map((data, index) =>
                <option
                    key={index}
                    value={data}
                >
                    {data}
                </option>
            );
        }
        return (
            <select name="selectedType" value={this.state.selectedType} className="custom-select" onChange={this.onChange}>
                {options}
                {/* Extends more later */}
            </select>
        )
    }
}


export default Variable;



