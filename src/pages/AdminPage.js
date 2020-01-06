import React, { Component } from 'react';
import {LeftSideBar, TopNavBar } from './../components/index';
import './Home.css';
const ADMIN_PAGE_TITLE = 'Admin page';

class AdminPage extends Component {
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
                    {/* Top navigation */}
                    <TopNavBar pageTitle={ADMIN_PAGE_TITLE} />

                    <div id="wrapper">

                        {/* Sidebar */}
                        <LeftSideBar />

                        {/* Content */}
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

export default AdminPage;
