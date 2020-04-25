import React, { Component } from 'react';
import './sidebar.css';
import * as Constant from './../constants/AppConstants';

class LeftSideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navType: '',
            navArr: [],
        };
    }

    onChangedLeftSideBar = (navType) => {
        this.props.onChangedLeftSideBar(navType);
    }

    render() {
        let { navArr } = this.props;
        if (this.state.navType === Constant.ADMIN_NAV_TYPE) {
            return (
                <ul className="sidebar navbar-nav">
                    {navArr ? this.renderAdminNavArr(navArr) : ''}
                </ul>
            );
        } else {
            return (
                <ul className="sidebar navbar-nav">
                    {navArr ? this.renderNavArr(navArr) : ''}
                </ul>
            );
        }
    }

    renderAdminNavArr = (navArr) => {
        let result = [];
        if (navArr !== null && navArr.length > 0) {
            result = navArr.map((item, index) => {
                return (
                    <li key={index} className="nav-item">
                        <a className="nav-link dropdown-toggle" onClick={() => this.onChangedLeftSideBar(item.title)} id="pagesDropdown" role="button" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="true">
                            <span>{item.title}</span>
                        </a>
                    </li>
                );
            });
        }
        return result;
    }

    renderNavArr = (navArr) => {
        let result = [];
        if (navArr !== null && navArr.length > 0) {
            result = navArr.map((item, index) => {
                if (item.type === "drop-down") {
                    return (
                        <li key={index} className="nav-item dropdown show">
                            <a className="nav-link dropdown-toggle" href="#" id="pagesDropdown" role="button" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="true">
                                <span>{item.title}</span>
                            </a>
                            <div className="dropdown-menu" aria-labelledby="pagesDropdown" x-placement="bottom-start"
                            >
                                {this.renderDropDownItems(item.dropDownArr)}
                            </div>
                        </li>
                    );
                } else {
                    return (
                        <li key={index} className="nav-item active">
                            <a className="nav-link" href={item.link}>
                                <span>{item.title}</span></a>
                        </li>
                    )
                }

            })
        }
        return result;
    };

    renderDropDownItems = (arr) => {
        let result = [];
        if (arr !== null && arr.length > 0) {
            result = arr.map((item, index) => {
                console.log(item)
                return (
                    <a key={index} className="dropdown-item" href={item.link}>{item.title}</a>
                )
            })
        }
        return result;
    }
}
export default LeftSideBar;

