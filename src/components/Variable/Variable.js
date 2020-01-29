import React, { Component } from 'react';
import './style.css';
import * as AppConstant from '../../constants/AppConstants';
import { connect } from 'react-redux';

const arrOptions = ['Boolean', 'Char', 'Integer', 'Float', 'Double', 'String'];
const arrEvents = ['findViewById', 'findViewByName'];

class Variable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            label: "",
            paramObj: null,
            parent: null,
            index: null,
            selectedType: 'String',
            txtName: "",
            txtValue: "",
            eventData: null,
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
            selectedType: paramObj.type,
            txtName: paramObj.name,
            txtValue: paramObj.value,
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
        let { paramObj, selectedType, txtName, txtValue } = this.state;

        paramObj.type = selectedType;
        paramObj.name = txtName;
        paramObj.value = txtValue;
        this.props.doneEdit(paramObj);
    }
    closeForm = () => {
        let { paramObj, parent, index } = this.state;
        this.props.closeForm(paramObj, parent, index);
    }
    render() {
        let { txtName, txtValue } = this.state;
        let { label } = this.props;
        let { paramObj } = this.props;
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
                    <button type="button" className="btn btn-success" onClick={(e) => { e.stopPropagation(); this.doneEdit() }} >Save</button>
                    <button type="button" className="btn btn-danger" onClick={(e) => { e.stopPropagation(); this.closeForm() }}>Discard</button>
                </div>
            </div>
        );
    }

    renderOptions = (label) => {
        let { eventData } = this.state;
        if(eventData === null){
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

const mapStateToProps = state => {
    return {
        eventData: state.headerLecturerPage.eventData,
    }
}


export default connect(mapStateToProps, null)(Variable);



