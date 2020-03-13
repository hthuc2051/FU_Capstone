import React, { Component } from 'react';
import { getListActions } from './axios';
import { connect } from 'react-redux';
import './style.css';
class ListActionsPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            listActions: [],
        };
    }

    componentDidMount() {
        this.props.getListActions();
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps === prevState) {
            return null;
        }
        return {
            listActions: nextProps.listActions,
        }
    }

    renderActions = (listActions) => {
        let result = [];
        if (typeof (listActions) !== 'undefined') {
            if (listActions.length > 0) {
                result = listActions.map((item, index) => {
                    return (
                        <tr key={index}>
                            <th scope="row">{++index}</th>
                            <td>{item.name}</td>
                            <td>
                                <div>
                                    <p>
                                        <a className="btn btn-info" data-toggle="collapse" href={'#collapseCode' + index} >
                                            Details
                                        </a>
                                    </p>
                                    <div className="row">
                                        <div className="col">
                                            <div className="collapse multi-collapse" id={'collapseCode' + index}>
                                                <div className="card card-body code">
                                                    {item.code}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="collapse multi-collapse" id={'collapseCode' + index}>
                                    <div>
                                        {item.params ? this.renderParam(item.params) : ''}
                                    </div>
                                </div>
                            </td>
                            <td>{item.subjectId}</td>
                            <td><a className="btn btn-danger" onClick={() => this.onDelete(item.id)} href="#">Delete</a></td>
                            <td><a className="btn btn-primary" onClick={() => this.onUpdate(item.id)} href="#">Update</a></td>
                        </tr>
                    );
                });
            }
        }
        return result;
    }

    onDelete = (id) => {
        // render modal
    }

    onUpdate = (id) => {
        // render modal
    }

    renderParam = (params) => {
        let result = [];
        result = params.map((item, index) => {
            return (
                <p key={index}>{item.type} - {item.name}</p>
            );
        });
        return result;
    }

    render() {
        let { listActions } = this.state;
        return (
            <div id="content-wrapper">
                <div className="card content action-page">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">Action Name</th>
                                <th scope="col">Code</th>
                                <th scope="col">Params</th>
                                <th scope="col">Subject ID</th>
                                <th scope="col">Delete</th>
                                <th scope="col">Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listActions ? this.renderActions(listActions) : ''}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        listActions: state.listActionsPage.listActions,
        isLoading: state.listActionsPage.isLoading,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        getListActions: () => {
            getListActions(dispatch);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListActionsPage);
