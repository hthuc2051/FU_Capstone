import React, { Component } from 'react';
class ModalEditPracticalExam extends Component {

    // code: 'public void testcase(){Driver.findViewById("txtUsername").clear();Driver.findViewById("txtUsername") .sendKey("NguyenVanA");Driver.findViewById("txtPassword").clear();Driver.findViewById("txtPassword") .sendKey("p4ssw0rd");assertEquals("admin",question1("NguyenVanA","p4ssw0rd"));}'

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            statusCode: false,
            editObj: null,
            document:null,
            database:null,
            templateQuestion:null,
        };
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps === prevState) {
            return null;
        }
        return {
            isOpenForm: nextProps.isOpenForm,
            editObj: nextProps.editObj
        }
    }

    onCloseDetails = () => {
        let { document,templateQuestion,database } = this.state;
        this.props.onCloseDetails(document,templateQuestion,database);
    }

    isOpenForm = (state) => {
        this.props.isOpenForm(state);
    }

    handelChange = (e) => {
        this.setState({ [e.target.name]: e.target.files[0] });
    }

    render() {
        let { isOpenForm, editObj } = this.state;
        let modalClass = isOpenForm ? "modal" : "modal fade";
        let modalStyle = isOpenForm ? "block" : "";
        return (
            <div className={modalClass} style={{ display: modalStyle }} id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">


                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">
                                DataBase Connection
                         </h5>
                            <button onClick={(e) => { e.preventDefault(); this.isOpenForm(false) }} type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        {editObj ?
                            <div className="modal-body">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="txtPracticalExamCode">Document File</label>
                                        <input type="file" name="document" onChange={(e) => { e.preventDefault(); this.handelChange(e) }} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="txtPracticalExamCode">Template Question File</label>
                                        <input type="file" name="templateQuestion" onChange={(e) => { e.preventDefault(); this.handelChange(e) }} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="txtPracticalExamCode">DataBase Script</label>
                                        <input type="file" name="database" onChange={(e) => { e.preventDefault(); this.handelChange(e) }} />
                                    </div>
                                </form>
                            </div>
                            :
                            ''
                        }
                        <div className="modal-footer">
                            <button type="button" onClick={(e) => { e.preventDefault(); this.onCloseDetails() }} className="btn btn-success">Save</button>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default ModalEditPracticalExam;

