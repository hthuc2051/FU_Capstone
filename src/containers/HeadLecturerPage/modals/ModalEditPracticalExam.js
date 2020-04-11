import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Constants from '../../constants';
import { onLoading } from '../actions';
import { createPracticalExams, updatePracticalExam } from '../axios';

const TYPE_CREATE = 'CREATE';
const TYPE_EDIT = 'EDIT';


class ModalEditPracticalExam extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            statusCode: false,
            practicalExam: null,
            subjects: [],
            classes: [],
            scripts: [],
            practicalDate: '',
            isOpenForm: false,
            checkedClasses: new Map(),
            checkedScripts: new Map(),
            subjectSelected: '',
            subjectId: 0,
        };
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log(nextProps);
        if (nextProps === prevState) {
            return null;
        }
        if (nextProps.statusCode === 200) {
        }
        let { subjectId } = prevState;
        let { editObj, subjects } = nextProps;
        let checkedClasses = new Map();
        let checkedScripts = new Map();
        if (editObj != null && typeof (editObj) !== 'undefined') {
            checkedClasses.set(editObj.subjectClass.id, true);
            if (editObj.scripts !== null) {
                editObj.scripts.forEach(element => {
                    checkedScripts.set(element.id, true);
                });
            }
        }
        let idSelected = subjectId;
        if (subjectId === 0) {
            idSelected = editObj.subjectId
        }

        let subjectSelected = null;

        if (subjects != null && typeof (subjects) !== 'undefined') {
            subjectSelected = subjects.find(item => item.id === idSelected);
        }

        return {
            subjects: nextProps.subjects,
            statusCode: nextProps.statusCode,
            classes: nextProps.classes,
            scripts: nextProps.scripts,
            practicalExam: nextProps.editObj,
            subjectSelected: subjectSelected,
            isOpenForm: nextProps.isOpenForm,
            checkedClasses: checkedClasses,
            checkedScripts: checkedScripts,
        }
    }

    onChangeCombobox = (value, index) => {

    }

    handleCheckedClasses = (e) => {
        let { checkedClasses } = this.state;
        const id = e.target.name;
        const isChecked = e.target.checked;
        checkedClasses.set(id, isChecked);
        this.setState({
            checkedClasses: checkedClasses,
        })
    }

    handleCheckedScripts = (e) => {
        let { checkedScripts } = this.state;
        const id = e.target.name;
        const isChecked = e.target.checked;
        checkedScripts.set(id, isChecked);
        this.setState({
            checkedScripts: checkedScripts,
        })
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        this.setState({
            [name]: target.value
        });
    }

    onChangeDropdown = (e) => {
        let { subjects } = this.state;
        var target = e.target;
        let value = target.value;
        let subjectSelected = subjects.find(item => item.id === parseInt(value));
        this.setState({
            subjectSelected: subjectSelected,
            subjectId: subjectSelected.id,
        })
    }

    onCloseDetails = () => {
        this.setState({
            isOpenForm: false,
        })
        this.props.onCloseDetails(false);
    }

    onSave = () => {
        let { checkedClasses, checkedScripts, practicalDate, practicalExam } = this.state;
        let listScripts = Array.from(checkedScripts.keys());
        let subjectClasses = Array.from(checkedClasses.keys());
        let obj = {
            id: practicalExam.id,
            listScripts: listScripts,
            subjectClasses: subjectClasses,
            date: practicalDate,
        }
        this.props.onCreatePracticalExams(obj);
    }

    render() {
        let { practicalExam, checkedScripts, checkedClasses, isOpenForm, subjectSelected, subjectId } = this.state;
        let modalClass = isOpenForm ? "modal" : "modal fade";
        let modalStyle = isOpenForm ? "block" : "";
        return (
            <div className={modalClass} style={{ display: modalStyle }} id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">
                                Edit practical exam
                            </h5>
                            <button onClick={this.onCloseDetails} type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="dropdown-box">
                            <div>Subjects</div>
                            <select
                                name="subjectId"
                                value={subjectId}
                                onChange={this.onChangeDropdown}
                            >
                                <option value="1">Java</option>
                                <option value="2">CSharp</option>
                                <option value="3">C</option>
                                <option value="4">Java web</option>
                            </select>
                        </div>
                        <div className="check-box">
                            <div>Classes</div>
                            <div className="classes-box">
                                {
                                    !subjectSelected ? '' : subjectSelected.classes.map((item, index) => (
                                        <label key={index}>
                                            <Checkbox name={item.subjectClassId}
                                                checked={checkedClasses ? checkedClasses.get(item.subjectClassId) : null}
                                                onChange={this.handleCheckedClasses} />
                                            {item.classCode}
                                        </label>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="check-box ">
                            <div>Script availables</div>
                            <div className="scripts-box" >
                                {
                                    !subjectSelected ? '' : subjectSelected.scripts.map((item, index) => (
                                        <label key={index}>
                                            <Checkbox name={item.id}
                                                checked={checkedScripts ? checkedScripts.get(item.id) : null}
                                                onChange={this.handleCheckedScripts} />
                                            {item.name}
                                        </label>
                                    ))
                                }
                            </div>
                        </div>

                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="txtPracticalExamCode">Exam code</label>
                                    <input readOnly={true} type="text" name="txtPracticalExamCode" className="form-control" id="txtPracticalExamCode" placeholder="Enter practical exam code" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="date">Date</label>
                                    <input onChange={this.onChange} type="date" name="practicalDate" className="form-control" id="date" placeholder="Date" />
                                </div>
                                <div className="form-group">
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button onClick={this.onSave} type="button" className="btn btn-success">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }


}

const Checkbox = ({ type = 'checkbox', name = '', checked = 'checked', onChange }) => (
    <input type={type} name={name} checked={checked} onChange={onChange} />
);

const mapStateToProps = (state) => {
    return {
        subjects: state.headerLecturerPage.subjects,
        classes: state.headerLecturerPage.classes,
        scripts: state.headerLecturerPage.scripts,
        statusCode: state.headerLecturerPage.statusCode,
        message: state.headerLecturerPage.message,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onLoading: () => {
            dispatch(onLoading(Constants.FETCH_PRACTICAL_EXAMS + Constants.PREFIX_LOADING));
        },
        onCreatePracticalExams: (practicalExamArr) => {
            createPracticalExams(practicalExamArr, dispatch);
        },
        onUpdatePracticalExam: (practicalExam) => {
            updatePracticalExam(practicalExam, dispatch);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditPracticalExam);

