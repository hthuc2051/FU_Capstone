import React, { Component } from 'react';
import './style.css';
import * as AppConstant from '../../constants/AppConstants';

const arrOptions = ['Boolean', 'Char', 'Integer', 'Float', 'Double', 'String'];

class Variable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            label: "",
            selected: "String",
            txtName: "",
            txtValue: "",
        };
    }
    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        this.setState({
            [name]: target.value
        });
    }
    doneEdit = (value) => {
        this.props.doneEdit(value);
    }
    closeForm = (value, parent, index) => {
        this.props.closeForm(value, parent, index);
    }
    render() {
        let { label, paramObj, parent, index } = this.props;

        return (
            <div className="variable-item">
                <label>{label}</label>
                <div className="d-flex justify-content-start">
                    <div className="input-group mb-3">
                        {this.renderOptions()}
                        {label === AppConstant.LABEL_PARAM ?
                            <input name="txtName" className="form-control" placeholder="Name"
                                value={paramObj ? paramObj.name : ''}
                                onChange={this.onChange}
                            /> : ''}
                        <input name="txtValue" className="form-control" placeholder="Value" value={paramObj ? paramObj.value : ''} onChange={this.onChange} />
                    </div>
                </div>
                <div className="action-tab">
                    <button type="button" className="btn btn-success" onClick={(e) => { e.stopPropagation(); this.doneEdit(paramObj) }} >Save</button>
                    <button type="button" className="btn btn-danger" onClick={(e) => { e.stopPropagation(); this.closeForm(paramObj, parent, index) }}>Discard</button>
                </div>
            </div>
        );
    }

    renderOptions = () => {
        let options = arrOptions.map((data, index) =>
            <option
                key={index}
                value={data}
            >
                {data}
            </option>
        );
        return (
            <select value={this.state.selected} className="custom-select" onChange={this.onChange}>
                <option value={0} >Data type</option>
                {options}
                {/* Extends more later */}
            </select>
        )
    }
}




export default Variable;



