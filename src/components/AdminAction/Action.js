import React, { Component } from 'react';
import './Action.css'

class AdminActionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    leftBracket = '{';
    rightBracket = '}';

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





                            <form className="ml-30">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Action</label>
                                    <input type="email" value="findElementById" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Action name" style={{ width: '500px' }} />

                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Code generator</label>
                                    <textarea class="form-control" style={{ width: '500px', backgroundColor: 'silver' }} value="driver.findElementById(param)" />
                                </div>
                                <div class="form-group">
                                    <label for="exampleFormControlSelect2">Type Parameter</label>


                                </div>
                                <div class="form-group row">
                                    <div class="col-sm-5">
                                        <input style={{ width: '50px' }} type="email" value="param" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Action name" style={{ width: '500px' }} />

                                    </div>
                                    <select style={{ width: '100px' }} class="form-control" id="exampleFormControlSelect2">
                                        <option>int</option>
                                        <option>string</option>

                                    </select>

                                </div>
                                <div className="code-block">
                                    <div className="code-container">
                                        <div id="highlighter_548907" className="syntaxhighlighter nogutter">
                                            <table border="0" cellPadding="0" cellSpacing="0">
                                                <tbody>
                                                    <tr>
                                                        <td className="code">
                                                            <div className="container">
                                                                <div className="line number4 index3 alt1">
                                                                    <code class="keyword">class</code>
                                                                    <code class="plain"> example {this.leftBracket}  </code>


                                                                </div>
                                                                <div className="line number4 index3 alt1">

                                                                    <code class="plain"> driver.findElementById(param) </code>


                                                                </div>
                                                                <div className="line number4 index3 alt1">

                                                                    <code class="plain">  {this.rightBracket}  </code>


                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>

                                <button type="submit" class="btn btn-success">Save</button>
                                &nbsp;
                                <button type="reset" class="btn btn-danger">Clear</button>

                            </form>





                            <div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        );
    }
}

export default AdminActionPage;
