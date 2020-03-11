import React, { Component } from 'react';
import { connect } from 'react-redux';


class ModalEditPracticalExam extends Component {

    // code: 'public void testcase(){Driver.findViewById("txtUsername").clear();Driver.findViewById("txtUsername") .sendKey("NguyenVanA");Driver.findViewById("txtPassword").clear();Driver.findViewById("txtPassword") .sendKey("p4ssw0rd");assertEquals("admin",question1("NguyenVanA","p4ssw0rd"));}'

    constructor(props) {
        super(props);
        this.state = {
            practicalExam: null,
            subjects: [],
            classes: [],
            isEdit: false,
            checkedItems: new Map(),
        };
    }



    static getDerivedStateFromProps(nextProps, prevState) {
        console.log(nextProps);
        if (nextProps === prevState) {
            return null;
        }
        return {
            subjects: nextProps.subjects,
            classes: nextProps.classes,
            practicalExam: nextProps.editObj,
            isEdit: nextProps.isEdit,
        }
    }
    onChangeCombobox = (value, index) => {

    }

    handleChange = (e)=> {
        let { checkedItems } = this.state;
        const id = e.target.name;
        const isChecked = e.target.checked;
        checkedItems.set(id, isChecked);
        console.log(checkedItems);
        this.setState({
            checkedItems: checkedItems,
        })
    }

    onCloseDetails = () => {
        this.setState({
            isEdit: false,
        })
        this.props.onCloseDetails(false);
    }

    render() {
        let { practicalExam, classes,checkedItems, isEdit } = this.state;
        console.log(checkedItems);
        let lecturers = practicalExam ? practicalExam.lecturers : [];
        let modalClass = isEdit ? "modal" : "modal fade";
        let modalStyle = isEdit ? "block" : "";
        console.log(isEdit);
        return (
            <div className={modalClass} style={{ display: modalStyle }} id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Edit Practical exam</h5>
                            <button onClick={this.onCloseDetails} type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        {
                            classes.map((item, index) => (
                                <label key={index}>
                                    {item.classCode}
                                    <Checkbox name={item.id} checked={checkedItems.get(item.id)} onChange={this.handleChange} />
                                </label>
                            ))
                        }
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="txtPracticalExamCode">Exam code</label>
                                    <input type="text" name="txtPracticalExamCode" className="form-control" id="txtPracticalExamCode" placeholder="Enter practical exam code" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="date">Date</label>
                                    <input readOnly={true} type="password" className="form-control" id="date" placeholder="Date" />
                                </div>
                                <div className="form-group">

                                </div>

                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
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
    }
}

export default connect(mapStateToProps, null)(ModalEditPracticalExam);

