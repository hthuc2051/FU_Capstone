import React, { Component } from 'react';
import { Treeview } from './../components/index';
import './style.css';
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
                    <nav className="navbar navbar-expand navbar-dark bg-dark static-top">
                        <a className="navbar-brand mr-1" href="index.html">Teacher page</a>
                        <button className="btn btn-link btn-sm text-white order-1 order-sm-0" id="sidebarToggle" href="#">
                            <i className="fas fa-bars" />
                        </button>
                        {/* Navbar Search
        <form class="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
            <div class="input-group">
                <input type="text" class="form-control" placeholder="Search for..." aria-label="Search"
                    aria-describedby="basic-addon2">
                <div class="input-group-append">
                    <button class="btn btn-primary" type="button">
                        <i class="fas fa-search"></i>
                    </button>
                </div>
            </div>
        </form> */}
                        {/* Navbar */}
                        <ul className="navbar-nav ml-auto ">
                            <li className="nav-item dropdown no-arrow mx-1">
                                <a className="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fas fa-bell fa-fw" />
                                    <span className="badge badge-danger">9+</span>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="alertsDropdown">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <div className="dropdown-divider" />
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown no-arrow mx-1">
                                <a className="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fas fa-envelope fa-fw" />
                                    <span className="badge badge-danger">7</span>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="messagesDropdown">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <div className="dropdown-divider" />
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown no-arrow">
                                <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fas fa-user-circle fa-fw" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                                    <a className="dropdown-item" href="#">Settings</a>
                                    <a className="dropdown-item" href="#">Activity Log</a>
                                    <div className="dropdown-divider" />
                                    <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">Logout</a>
                                </div>
                            </li>
                        </ul>
                    </nav>
                    <div id="wrapper">
                        {/* Sidebar */}
                        <ul className="sidebar navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i className="fas fa-fw fa-tachometer-alt" />
                                    <span>Dashboard</span>
                                </a>
                            </li>
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
                                    <i className="fas fa-fw fa-chart-area" />
                                    <span>Generate new script</span></a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#">
                                    <i className="fas fa-fw fa-table" />
                                    <span>Scripts's history</span></a>
                            </li>
                        </ul>
                        <div id="content-wrapper">
                            
                            {/* Add content */}
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

