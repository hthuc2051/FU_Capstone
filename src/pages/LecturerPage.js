import React, { Component } from 'react';
import { LeftSideBar, TopNavBar } from './../components/index';
import { LecturerPageContainer } from './../containers/index';
import './style.css';
const CODE_PAGE_TITLE = 'Lecturer page';

const navArr = [
    {
        title:'Dashboard',
        type:'nav-item',
        link:'/lecturer'
    },
    {
        title:'Practical subjects',
        type:'drop-down',
        link:'nav-item-link',
        dropDownArr:[
            {
                title:'C#',
                link:'link for dropdown-item1'
            },
            {
                title:'Java',
                link:'link for dropdown-item1'
            }
        ]
    },
    {
        title:'Invigilate request',
        type:'nav-item',
        link:'/request'
    }
]
class LecturerPage extends Component {
    render() {
        return (
            <div>
                <div>
                    {/* Top navigation */}
                    <TopNavBar pageTitle={CODE_PAGE_TITLE} />
                    <div id="wrapper">
                        {/* Sidebar */}
                        <LeftSideBar navArr={navArr} />

                        {/* Container */}
                        <LecturerPageContainer />
                    </div>
                </div>
            </div>
        );
    }
}

export default LecturerPage;
