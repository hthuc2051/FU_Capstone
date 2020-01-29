import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Constants from '../constants';
import { onLoading } from './actions';
import './style.css';

class LecturerPageContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            subjectCode : "",
        };
    }

    componentDidMount(){
        // Fetch API here with subject code 
    }

    // old : componentWillReceiveProps
    static getDerivedStateFromProps(nextProps, prevState) {
        // nếu props mới vào mà giống state cũ thì k thay đổi gì cả
        if (nextProps === prevState) {
            return null;
        }

        // Ngược lại nếu có bất kì props nào thay đổi thì set lại state;
        return {
            eventData: nextProps.eventData,
            file: nextProps.file,
            subjectCode: nextProps.subjectCode,
        }

    }


    render() {
        let { isLoading } = this.state;
        return (
            <div id="content-wrapper">
               
                <div className="card content">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">Practical date</th>
                                <th scope="col">Class</th>
                                <th scope="col">File import</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>25-02-2020</td>
                                <td>SE1268</td>
                                <td><a href="#">Download</a></td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>25-03-2020</td>
                                <td>SE1267</td>
                                <td><a href="#">Download</a></td>

                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>25-04-2020</td>
                                <td>SE1269</td>
                                <td><a href="#">Download</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        statusCode: state.headerLecturerPage.statusCode,
        isLoading: state.headerLecturerPage.isLoading,
        message: state.headerLecturerPage.message,
        error: state.headerLecturerPage.error,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onLoading: () => {
            dispatch(onLoading(Constants.FETCH_EVENTS + Constants.PREFIX_LOADING));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LecturerPageContainer);

