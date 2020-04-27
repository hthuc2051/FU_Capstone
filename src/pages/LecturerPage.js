import React, { Component } from 'react';
import { LeftSideBar, TopNavBar } from './../components/index';
import { LecturerPageContainer } from './../containers/index';
import './style.css';
const CODE_PAGE_TITLE = 'Lecturer page';

let navArr = [
    {
        title: 'Invigilate request',
        type: 'nav-item',
        link: '/lecturer/1/invigilate-request'
    }
]



class LecturerPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            navArr: navArr,
        };
    }

    componentDidMount() {
        // let userInfo = JSON.parse(localStorage.getItem("userInfo"));
        // let { navArr } = this.state;
        // if (typeof (userInfo) !== 'undefined') {
        //     let subjects = userInfo.subjects;
        //     navArr[1].subjectsDropDownArr = this.createDropDownArr(userInfo.id, subjects);
        // }
        // this.setState({navArr});
    }

    createDropDownArr = (userId, subjects) => {
        // let result = [];
        // if (subjects && subjects.length > 0) {
        //     subjects.map((subject) => {
        //         result.push({
        //             title: subject.name,
        //             link: '/lecturer/' + userId + '/subjects/' + subject.id + '/' + subject.name
        //         })
        //     })
        // }
        // return result;
    }

    render() {
        let { id } = this.props.match.params;
        console.log(id);
        let {navArr}  = this.state;
        return (
            <div>
                <div>
                    {/* Top navigation */}
                    <TopNavBar pageTitle={CODE_PAGE_TITLE} />
                    <div id="wrapper">
                        {/* Sidebar */}
                        <LeftSideBar navArr={navArr} />

                        {/* Container */}
                        <LecturerPageContainer id ={id}/>
                        {/* <PracticalExamResult/> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default LecturerPage;
