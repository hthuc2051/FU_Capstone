import React, { Component } from 'react';

import ModalEditPracticalExam from '../modals/ModalEditPracticalExam';
import '../style.css';

let lecturers = ['HauDV - Đoàn Văn Hậu', 'PhuongNC - Nguyễn Công Phượng', 'HaiNQ - Nguyễn Quang Hải']


class ListPracticalExams extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            practicalExamArr: [],
            practicalExam: null,
        };
    }

    componentDidMount() {
        // Fetch API here with subject code 
    }
    viewDetails = (id) =>{
        let practicalExam = {
            code: 'Java_SE1269_14_02_2020_030013',
            time: '25-03-2020',
            lecturers:lecturers,
        }
        this.setState({
            practicalExam: practicalExam,
        })
        // Open modal
    }
    onDelete = (id) =>{
        // Open modal
    }
    onUpdate = (id) =>{
        // Open modal
    }

    // old : componentWillReceiveProps
    // static getDerivedStateFromProps(nextProps, prevState) {
    //     // nếu props mới vào mà giống state cũ thì k thay đổi gì cả
    //     if (nextProps === prevState) {
    //         return null;
    //     }

    //     // Ngược lại nếu có bất kì props nào thay đổi thì set lại state;
    //     return {
           
    //     }

    // }


    render() {
        let { practicalExam } = this.state;
        return (
            <div id="content-wrapper">
                <div className="card content">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">Pracical exam code</th>
                                <th scope="col">Date</th>
                                <th scope="col">Details</th>
                                <th scope="col">Delete</th>
                                <th scope="col">Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Practical_Java_SE1268</td>
                                <td>25-03-2020</td>
                                <td><a data-toggle="modal" data-target="#exampleModalCenter" onClick={() => this.viewDetails('5')} href="#">Details</a></td>
                                <td><a  onClick={() => this.onDelete('5')} href="#">Delete</a></td>
                                <td><a onClick={() => this.onUpdate('5')} href="#">Update</a></td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Practical_Java_SE1268</td>
                                <td>25-03-2020</td>
                                <td><a  onClick={() => this.viewDetails('5')} href="#">Details</a></td>
                                <td><a onClick={() => this.onDelete('5')} href="#">Delete</a></td>
                                <td><a onClick={() => this.onUpdate('5')} href="#">Update</a></td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Practical_Java_SE1268</td>
                                <td>25-03-2020</td>
                                <td><a  onClick={() => this.viewDetails('5')} href="#">Details</a></td>
                                <td><a onClick={() => this.onDelete('5')} href="#">Delete</a></td>
                                <td><a onClick={() => this.onUpdate('5')} href="#">Update</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {/* For modal */}
                {practicalExam ? <ModalEditPracticalExam practicalExam ={practicalExam} />:''}
            </div>
        );
    }
}



export default ListPracticalExams;

