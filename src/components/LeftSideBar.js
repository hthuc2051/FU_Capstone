import React, { Component } from 'react';
import './sidebar.css';


class LeftSideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

  

    render() {
        let { navArr } = this.props;
        return (
            <ul className="sidebar navbar-nav">
                {navArr ? this.renderNavArr(navArr) : ''}
            </ul>
        );
    }
    renderNavArr = (navArr) => {
        console.log(navArr.length);
        let result = [];
        if (navArr !== null && navArr.length > 0) {
            result = navArr.map((item, index) => {
                if (item.type === "drop-down") {
                console.log(item);
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
                return (
                    <a key={index} className="dropdown-item" href={item.link}>{item.title}</a>
                )
            })
        }
        return result;
    }
}
export default LeftSideBar;

