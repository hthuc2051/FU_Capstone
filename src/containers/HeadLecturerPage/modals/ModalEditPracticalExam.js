import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Constants from '../../constants';
import { onLoading } from '../actions';
import { createPracticalExams } from '../axios';

const TYPE_CREATE = 'CREATE';
const TYPE_EDIT = 'EDIT';


class ModalEditPracticalExam extends Component {

    // code: 'public void testcase(){Driver.findViewById("txtUsername").clear();Driver.findViewById("txtUsername") .sendKey("NguyenVanA");Driver.findViewById("txtPassword").clear();Driver.findViewById("txtPassword") .sendKey("p4ssw0rd");assertEquals("admin",question1("NguyenVanA","p4ssw0rd"));}'

    constructor(props) {
        super(props);
        this.state = {
            isLoading :false,
            statusCode : false,
            practicalExam: null,
            subjects: [],
            classes: [],
            scripts: [],
            practicalDate: '',
            isOpenForm: false,
            checkedClasses: new Map(),
            checkedScripts: new Map(),
            subjectSelected: '',
        };
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps === prevState) {
            return null;
        }
        if(nextProps.statusCode === 200){
            console.log('OK');
        }
        return {
            subjects: nextProps.subjects,
            statusCode: nextProps.statusCode,
            classes: nextProps.classes,
            scripts: nextProps.scripts,
            practicalExam: nextProps.editObj,
            isOpenForm: nextProps.isOpenForm,
            formType: nextProps.formType,
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

    onCloseDetails = () => {
        this.setState({
            isOpenForm: false,
        })
        this.props.onCloseDetails(false);
    }

    onSave = () => {
        let { formType, checkedClasses, checkedScripts, practicalDate } = this.state;
        let listScripts = Array.from(checkedScripts.keys());
        let subjectClasses = Array.from(checkedClasses.keys());
        let practicalExam = null;
        switch (formType) {
            case TYPE_CREATE:
                practicalExam = {
                    listScripts: listScripts,
                    subjectClasses: subjectClasses,
                    date: practicalDate,
                }
                break;
            default:
        }
        this.props.onCreatePracticalExams(practicalExam);
    }

    render() {
        let { practicalExam, classes, scripts, checkedScripts, checkedClasses, isOpenForm, formType, selectValue } = this.state;
        let lecturers = practicalExam ? practicalExam.lecturers : [];
        let modalClass = isOpenForm ? "modal" : "modal fade";
        let modalStyle = isOpenForm ? "block" : "";
        console.log(isOpenForm);
        return (
            <div className={modalClass} style={{ display: modalStyle }} id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">
                                {formType === TYPE_EDIT ? 'Edit' : 'Create'} practical exam
                            </h5>
                            <button onClick={this.onCloseDetails} type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="dropdown-box">
                            <div>Subjects</div>
                            <select
                                name="subjectSelected"
                                value={selectValue}
                                onChange={this.onChange}
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
                                    classes.map((item, index) => (
                                        <label key={index}>
                                            <Checkbox name={item.subjectClassId} checked={checkedClasses.get(item.subjectClassId)} onChange={this.handleCheckedClasses} />
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
                                    scripts.map((item, index) => (
                                        <label key={index}>
                                            <Checkbox name={item.id} checked={checkedScripts.get(item.id)} onChange={this.handleCheckedScripts} />
                                            {item.name}
                                        </label>
                                    ))
                                }
                            </div>
                        </div>

                        <div className="modal-body">
                            <form>
                                {formType === TYPE_EDIT ?
                                    <div className="form-group">
                                        <label htmlFor="txtPracticalExamCode">Exam code</label>
                                        <input readOnly={true} type="text" name="txtPracticalExamCode" className="form-control" id="txtPracticalExamCode" placeholder="Enter practical exam code" />
                                    </div> : ''
                                }

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

const Checkbox = ({ type = 'checkbox', name, checked, onChange }) => (
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
        onCreatePracticalExams: (practicalExam) => {
            createPracticalExams(practicalExam, dispatch);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditPracticalExam);

