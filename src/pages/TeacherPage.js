import React, { Component } from 'react';
import { Treeview, LeftSideBar, TopNavBar } from './../components/index';
import './style.css';

const TEACHER_PAGE_TITLE = 'Teacher page';

class TeacherPage extends Component {

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
                    <TopNavBar pageTitle={TEACHER_PAGE_TITLE} />

                    <div id="wrapper">

                        {/* Sidebar */}
                        <LeftSideBar />

                        {/* Content */}
                        <div id="content-wrapper">
                            <nav>
                                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                    <a className="nav-item nav-link active" id="nav-home-tab"
                                        data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Question 1</a>
                                    <a className="nav-item nav-link" id="nav-profile-tab"
                                        data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Question 2</a>

                                </div>
                            </nav>
                            <div className="tab-content" id="nav-tabContent">
                                <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                    <Treeview />
                                </div>
                                <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                    <Treeview />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default TeacherPage;

