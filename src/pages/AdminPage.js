import React, { Component } from 'react';
import { LeftSideBar, TopNavBar } from '../components/index';
import { AdminPageContainer } from '../containers/index';
import './style.css';
import * as AppConstant from './../constants/AppConstants';
import { adminleftNavigation } from './AdminPageLeftNavigation';

const ADMIN_PAGE_TITLE = 'Admin Page';
class CodePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            navType: 'Action',
            isAddnew: false,
        };
    }

    onChangedAddNew = (isAddnew) => {
        this.setState({isAddnew: isAddnew});
    }

    onChangedLeftSideBar = (navType) => {
        this.setState({ navType: navType, isAddnew: false });
    }

    render() {
        return (
            <div>
                <div>
                    {/* Top navigation */}
                    <TopNavBar pageTitle={ADMIN_PAGE_TITLE} />
                    <div id="wrapper" className="admin-page">
                        <LeftSideBar navArr={adminleftNavigation} 
                                    navType={AppConstant.ACTION_NAV_TITLE} 
                                    onChangedLeftSideBar={this.onChangedLeftSideBar}  />

                        {/* Container */}
                        <AdminPageContainer type={this.state.navType} 
                                        isAddnew={this.state.isAddnew} onChangedAddNew={this.onChangedAddNew}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default CodePage;
