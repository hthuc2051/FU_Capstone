import React, { Component } from 'react';
import './Home.css'
class HomeAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
            expanded1: false
        };
        this.onExpand = this.onExpand.bind(this);
        this.onExpand1 = this.onExpand1.bind(this);
    }


    onExpand() {

        this.setState({
            expanded: !this.state.expanded,

        })

    }
    onExpand1() {

        this.setState({

            expanded1: !this.state.expanded1
        })

    }
    render() {
        return (
            <div>
                <div>
                    <nav className="navbar navbar-expand navbar-dark bg-dark static-top">
                        <a className="navbar-brand mr-1" href="index.html">Admin page</a>
                        <button className="btn btn-link btn-sm text-white order-1 order-sm-0" id="sidebarToggle" href="#">
                            <i className="fas fa-bars" />
                        </button>

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


                        <div id="content-wrapper" >


                            <div className="list-group">

                                <p className="ml-50">
                                    <span>
                                        <i onClick={this.onExpand} className={this.state.expanded === false ? "fa fa-plus" : "fa fa-minus"} data-toggle="collapse" href="#collapseExample">

                                        </i>
                                        <a class="btn" onClick={this.onExpand} data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                            C#
                                </a>
                                    </span>


                                </p>
                                <div class="collapse ml-80" id="collapseExample" >
                                    <div class="row">
                                        <div class="col-sm-2">
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Folder.svg/1200px-Folder.svg.png" class="card-img-top" alt="..." />
                                            <div class="card">
                                                <div class="card-body">
                                                    <h5 class="card-title">Template for practical 2</h5>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-2">
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Folder.svg/1200px-Folder.svg.png" class="card-img-top" alt="..." />
                                            <div class="card">
                                                <div class="card-body">
                                                    <h5 class="card-title">Template for practical 2</h5>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <p className="ml-50">
                                    <span>
                                        <i className={this.state.expanded1 === false ? "fa fa-plus" : "fa fa-minus"} onClick={this.onExpand1} data-toggle="collapse" href="#collapseExample2">

                                        </i>
                                        <a onClick={this.onExpand1} class="btn" data-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample">
                                            Java
                                </a>
                                    </span>


                                </p>
                                <div class="collapse ml-80" id="collapseExample2" >
                                    <div class="row">
                                        <div class="col-sm-2">
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Folder.svg/1200px-Folder.svg.png" class="card-img-top" alt="..." />
                                            <div class="card">
                                                <div class="card-body">
                                                    <h5 class="card-title">Template for practical 2</h5>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-2">
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Folder.svg/1200px-Folder.svg.png" class="card-img-top" alt="..." />
                                            <div class="card">
                                                <div class="card-body">
                                                    <h5 class="card-title">Template for practical 2</h5>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>






                            <div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        );
    }
}

export default HomeAdmin;
