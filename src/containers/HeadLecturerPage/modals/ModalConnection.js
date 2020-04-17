import React, { Component } from 'react';
class ModalEditPracticalExam extends Component {

    // code: 'public void testcase(){Driver.findViewById("txtUsername").clear();Driver.findViewById("txtUsername") .sendKey("NguyenVanA");Driver.findViewById("txtPassword").clear();Driver.findViewById("txtPassword") .sendKey("p4ssw0rd");assertEquals("admin",question1("NguyenVanA","p4ssw0rd"));}'

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            statusCode: false,
            editObj: null,
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
        let { editObj } = this.state;
        this.props.onCloseDetails(editObj);
    }

    isOpenForm = (state) => {
        this.props.isOpenForm(state);
    }

    handelChange = (e) => {
        let name = e.target.name;
        let targetName = name.split('_');
        let value = e.target.value;
        let { editObj } = this.state;
        editObj[targetName[0]][targetName[1]] = value;
        console.log(editObj);
        this.setState({ editObj });
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
                                    <h3>Online</h3>
                                    <div className="form-group">
                                        <label htmlFor="txtPracticalExamCode">URL String</label>
                                        <input type="text" name="online_url" value={editObj.online.url} className="form-control" onChange={(e) => { e.preventDefault(); this.handelChange(e) }} placeholder="Enter DataBase Url" />
                                    </div>
                                    <label htmlFor="date">Authentication</label>
                                    <div className="form-row">
                                        <div className="col-7">
                                            <input type="text" name="online_username" value={editObj.online.username} className="form-control" placeholder="username" onChange={(e) => { e.preventDefault(); this.handelChange(e) }} />
                                        </div>
                                        <div className="col">
                                            <input type="text" name="online_password" value={editObj.online.password} className="form-control" placeholder="password" onChange={(e) => { e.preventDefault(); this.handelChange(e) }} />
                                        </div>
                                    </div>
                                </form>
                            </div>
                            :
                            ''
                        }
                        {editObj ?
                            <div className="modal-body">
                                <form>
                                    <h2><span className="badge badge-success">Offline</span></h2>
                                    <div className="form-group">
                                        <label htmlFor="txtPracticalExamCode">URL String</label>
                                        <input type="text" onChange={(e) => { e.preventDefault(); this.handelChange(e) }} name="offline_url" value={editObj.offline.url} className="form-control" id="txtPracticalExamCode" placeholder="Enter DataBase Url" />
                                    </div>
                                    <label htmlFor="date">Authentication</label>
                                    <div className="form-row">
                                        <div className="col-7">
                                            <input type="text" onChange={(e) => { e.preventDefault(); this.handelChange(e) }} name="offline_username" value={editObj.offline.username} className="form-control" placeholder="username" />
                                        </div>
                                        <div className="col">
                                            <input type="text" onChange={(e) => { e.preventDefault(); this.handelChange(e) }} name="offline_password" value={editObj.offline.password} className="form-control" placeholder="password" />
                                        </div>
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

