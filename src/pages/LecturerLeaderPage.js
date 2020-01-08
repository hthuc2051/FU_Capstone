import React, { Component } from 'react';
import { LeftSideBar, TopNavBar } from './../components/index';
import { LecturerLeaderPageContainer } from '../containers/index';
import './style.css';

const LECTURER_PAGE_TITLE = 'Lecturer page';

class LecturerLeaderPage extends Component {

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
                    <TopNavBar pageTitle={LECTURER_PAGE_TITLE} />

                    <div id="wrapper">

                        {/* Sidebar */}
                        <LeftSideBar />

                        {/* Content */}
                        <LecturerLeaderPageContainer />
                    </div>
                </div>

            </div>
        );
    }
}

export default LecturerLeaderPage;

