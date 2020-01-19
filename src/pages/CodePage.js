import React, { Component } from 'react';
import { LeftSideBar, TopNavBar } from './../components/index';
import { CodePageContainer } from './../containers/index';
import './style.css';
const CODE_PAGE_TITLE = 'Code page';
class CodePage extends Component {

    render() {
        return (
            <div>
                <div>
                    {/* Top navigation */}
                    <TopNavBar pageTitle={CODE_PAGE_TITLE} />
                    <div id="wrapper">
                        {/* Sidebar */}
                        <LeftSideBar />

                        {/* Container */}
                        <CodePageContainer />
                    </div>
                </div>
            </div>
        );
    }
}

export default CodePage;
