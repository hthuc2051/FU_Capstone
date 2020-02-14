import React, { Component } from 'react';
import Combobox from 'react-widgets/lib/Combobox'
import 'react-widgets/dist/css/react-widgets.css';


class ModalEditPracticalExam extends Component {

    // code: 'public void testcase(){Driver.findViewById("txtUsername").clear();Driver.findViewById("txtUsername") .sendKey("NguyenVanA");Driver.findViewById("txtPassword").clear();Driver.findViewById("txtPassword") .sendKey("p4ssw0rd");assertEquals("admin",question1("NguyenVanA","p4ssw0rd"));}'

    constructor(props) {
        super(props);
        this.state = {
            practicalExam: null,
        };
    }



    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps === prevState) {
            return null;
        }
        return {
            practicalExam: nextProps.practicalExam,
        }
    }
    onChangeCombobox = (value, index) => {

    }

    render() {
        let { practicalExam } = this.state;
        let lecturers = practicalExam ? practicalExam.lecturers : [];
        return (
            <div className="modal fade" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Edit Practical exam</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
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
                                    <Combobox
                                        data={lecturers}
                                        defaultValue={lecturers[0]}
                                        // onChange={this.onChangeCombobox}
                                        onSelect={this.onChangeCombobox}
                                    />
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



export default ModalEditPracticalExam;

