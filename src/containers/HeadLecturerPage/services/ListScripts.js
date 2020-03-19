import React, { Component } from 'react';
import '../style.css';
import {connect} from 'react-redux';
class ListScripts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            listScripts:[],
        };
    }

    componentDidMount() {
       this.props.onLoading(this.props.subjectId);
    }
    
    viewScriptDetails = () => {
    
        // Open modal
    }

    onToggleModal = (isOpen) => {
        this.setState({
            isOpen: isOpen,
        })
    }

    onDelete = (id) => {
        // Open modal
    }
    onUpdate = (id) => {
        // Open modal
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps === prevState) {
            return null;
        }
        return {
            listScripts: nextProps.listScripts,
            isLoading:nextProps.isLoading,
        }
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
        let { scriptEdit, isToggle } = this.state;
        return (
            <div id="content-wrapper">
                <div className="card content">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">Script code</th>
                                <th scope="col">Time created</th>
                                <th scope="col">Details</th>
                                <th scope="col">Delete</th>
                                <th scope="col">Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Java_SE1269_14_02_2020_030013</td>
                                <td>25-03-2020</td>
                                <td><a onClick={() => this.viewScriptDetails('5')} href="#">Details</a></td>
                                <td><a onClick={() => this.onDelete('5')} href="#">Delete</a></td>
                                <td><a onClick={() => this.onUpdate('5')} href="#">Update</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {/* For Edit */}
            </div>
        );
    }
}



const mapStateToProps = state => {
    return {
        isLoading: state.headerLecturerPage.isLoading,
        listScripts: state.headerLecturerPage.listScripts,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onLoading: (subjectId) => {
            
        },
        // fetchEvents: (subjectId) => {
        //     fetchEventsData(subjectId, dispatch);
        // },
        // saveTestScript: (formData) => {
        //     createTestScript(formData, dispatch);
        // }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListScripts);

