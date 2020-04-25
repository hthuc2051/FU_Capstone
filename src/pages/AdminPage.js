import React, { Component } from 'react';
import { LeftSideBar, TopNavBar } from '../components/index';
import { AdminPageContainer } from '../containers/index';
import './style.css';
import * as Constant from './../constants/AppConstants';
import { adminleftNavigation } from './AdminPageLeftNavigation';

const ADMIN_PAGE_TITLE = 'Admin Page';
class CodePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            navType: 'Admin',
        };
    }

    onChangeLeftSideBar = (navType) => {
        this.setState({ navType: navType });
    }

    render() {
        return (
            <div>
                <div>
                    {/* Top navigation */}
                    <TopNavBar pageTitle={ADMIN_PAGE_TITLE} />
                    <div id="wrapper" className="admin-page">
                        <LeftSideBar navArr={adminleftNavigation} navType={Constant.ADMIN_NAV_TYPE} onChangeLeftSideBar={this.onChangeLeftSideBar}  />

                        {/* Container */}
                        <AdminPageContainer type={this.state.navType} />
                    </div>
                </div>
            </div>
        );
    }
}

export default CodePage;
