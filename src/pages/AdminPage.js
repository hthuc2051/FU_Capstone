import React, { Component } from 'react';
import { LeftSideBar, TopNavBar } from './../components/index';
import './style.css';
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
                            <div className="content">
                                <div className="card">
                                    <div className="card-header" id="headingOne">
                                        <h5 className="mb-0">
                                            <a className="btn btn-link toggle-btn" data-toggle="collapse"
                                                href="#toggleJava" role="button" aria-expanded="false"
                                                aria-controls="multiCollapseExample1">
                                                Java</a>
                                        </h5>
                                    </div>
                                    <div className="collapse multi-collapse" id="toggleJava">
                                        <div className="card card-body">
                                            <div className="row">
                                                <div className="col-sm-2">
                                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Folder.svg/1200px-Folder.svg.png" className="card-img-top" alt="..." />
                                                    <div className="card">
                                                        <div className="card-body">
                                                            <h5 className="card-title">Template for practical 2</h5>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-2">
                                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Folder.svg/1200px-Folder.svg.png" className="card-img-top" alt="..." />
                                                    <div className="card">
                                                        <div className="card-body">
                                                            <h5 className="card-title">Template for practical 2</h5>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-header" id="headingOne">
                                        <h5 className="mb-0">
                                            <a className="btn btn-link toggle-btn" data-toggle="collapse"
                                                href="#toggleCSharp" role="button" aria-expanded="false"
                                                aria-controls="multiCollapseExample1">
                                                C#</a>
                                        </h5>
                                    </div>
                                    <div className="collapse multi-collapse" id="toggleCSharp">
                                        <div className="card card-body">
                                            <div className="row">
                                                <div className="col-sm-2">
                                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Folder.svg/1200px-Folder.svg.png" className="card-img-top" alt="..." />
                                                    <div className="card">
                                                        <div className="card-body">
                                                            <h5 className="card-title">Template for practical 2</h5>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-2">
                                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Folder.svg/1200px-Folder.svg.png" className="card-img-top" alt="..." />
                                                    <div className="card">
                                                        <div className="card-body">
                                                            <h5 className="card-title">Template for practical 2</h5>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminPage;
