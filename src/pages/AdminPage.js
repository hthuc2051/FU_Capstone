import React, { Component } from 'react';
import { LeftSideBar, TopNavBar } from '../components/index';
import { AdminPageContainer, CodePageContainer } from '../containers/index';
import './style.css';
const ADMIN_PAGE_TITLE = 'Admin page';
class CodePage extends Component {

    render() {
        return (
            <div>
                <div>
                    {/* Top navigation */}
                    <TopNavBar pageTitle={ADMIN_PAGE_TITLE} />
                    <div id="wrapper" className="admin-page">
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
