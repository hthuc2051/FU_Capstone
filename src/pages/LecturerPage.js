import React, { Component } from 'react';
import { LeftSideBar, TopNavBar } from './../components/index';
import { LecturerPageContainer } from '../containers/index';
import './style.css';

const LECTURER_PAGE_TITLE = 'Lecturer page';

class LecturerPage extends Component {

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
                        <LecturerPageContainer />
                    </div>
                </div>

            </div>
        );
    }
}

export default LecturerPage;

