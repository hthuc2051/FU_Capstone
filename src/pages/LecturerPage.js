import React, { Component } from 'react';
import { LeftSideBar, TopNavBar } from './../components/index';
import { LecturerPageContainer } from './../containers/index';
import './style.css';
const CODE_PAGE_TITLE = 'Lecturer page';

const navArr = [
    {
        title: 'Dashboard',
        type: 'nav-item',
        link: '/lecturer'
    },
    {
        title: 'Practical subjects',
        type: 'drop-down',
        link: '/lecturer/1/subjects',
        dropDownArr: [
            {
                title: 'C#',
                link: '/lecturer/1/subject/csharp'
            },
            {
                title: 'Java',
                link: '/lecturer/1/subject/java'
            }
        ]
    },
    {
        title: 'Invigilate request',
        type: 'nav-item',
        link: '/lecturer/1/invigilate-request'
    }
]



class LecturerPage extends Component {

    render() {
        let { subjectCode } = this.props.match.params;
        return (
            <div>
                <div>
                    {/* Top navigation */}
                    <TopNavBar pageTitle={CODE_PAGE_TITLE} />
                    <div id="wrapper">
                        {/* Sidebar */}
                        <LeftSideBar navArr={navArr} />

                        {/* Container */}
                        <LecturerPageContainer subjectCode={subjectCode ? "" : subjectCode} />
                    </div>
                </div>
            </div>
        );
    }
}

export default LecturerPage;
