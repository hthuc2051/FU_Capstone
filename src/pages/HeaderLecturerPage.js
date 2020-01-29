import React, { Component } from 'react';
import { LeftSideBar, TopNavBar,Footer } from '../components/index';
import { HeaderLecturerPageContainer } from '../containers/index';
import './style.css';

const PAGE_TITLE = 'Header-Lec page';

const navArr = [
    {
        title:'Dashboard',
        type:'nav-item',
        link:'/head-lecturer'
    },
    {
        title:'Practical subjects',
        type:'drop-down',
        link:'/head-lecturer/1/subjects',
        dropDownArr:[
            {
                title:'C#',
                link:'/head-lecturer/1/subject/c#'
            },
            {
                title:'Java',
                link:'/head-lecturer/1/subject/java'
            }
        ]
    },
    {
        title:'Invigilate request',
        type:'nav-item',
        link:'/request'
    }
]

class HeaderLecturerPage extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div>
                <div>
                    {/* Top navigation */}
                    <TopNavBar pageTitle={PAGE_TITLE} />

                    <div id="wrapper">

                        {/* Sidebar */}
                        <LeftSideBar navArr ={navArr} />

                        {/* Content */}
                        <HeaderLecturerPageContainer />
                    </div>
                </div>
                {/* <Footer/> */}
            </div>
        );
    }
}

export default HeaderLecturerPage;

