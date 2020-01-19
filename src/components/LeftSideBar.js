import React, { Component } from 'react';
import  './sidebar.css';
class LeftSideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <ul className="sidebar navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <span>Dashboard</span>
                    </a>
                </li>
                {/* For dropdown */}
                {/* <li class="nav-item dropdown show">
                    <a class="nav-link dropdown-toggle" href="#" id="pagesDropdown" role="button" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="true">
                        <i class="fas fa-fw fa-folder"></i>
                        <span>Pages</span>
                    </a>
                    <div class="dropdown-menu show" aria-labelledby="pagesDropdown" x-placement="bottom-start"
                        style="position: absolute; transform: translate3d(5px, 56px, 0px); top: 0px; left: 0px; will-change: transform;">
                        <h6 class="dropdown-header">Login Screens:</h6>
                        <a class="dropdown-item" href="login.html">Login</a>
                        <a class="dropdown-item" href="register.html">Register</a>
                        <a class="dropdown-item" href="forgot-password.html">Forgot Password</a>
                        <div class="dropdown-divider"></div>
                        <h6 class="dropdown-header">Other Pages:</h6>
                        <a class="dropdown-item" href="404.html">404 Page</a>
                        <a class="dropdown-item" href="blank.html">Blank Page</a>
                    </div>
                </li> */}
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <span>New script</span></a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="#">
                        <span>Scripts's history</span></a>
                </li>
            </ul>

        );
    }
}

export default LeftSideBar;

