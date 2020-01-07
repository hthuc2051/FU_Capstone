import React, { Component } from 'react';
import './Action.css'

class AdminActionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            param: []

        };
        this.addMoreParam = this.addMoreParam.bind(this);
        this.onChangeHandle = this.onChangeHandle.bind(this);

    }
    leftBracket = '{';
    rightBracket = '}';
    addMoreParam(e) {
        // var getDocument = document.getElementById('multiParam');
        //var createInput = document.createElement();

        e.preventDefault();
        let { param } = this.state;
        param.push({
            name: 'a',
            type: 'b'
        })

        this.setState({
            param: param
        });
        console.log(this.state.param);
        this.renderInputElement();

    }
    onChangeHandle() {
        console.log(this.state.param);
    }
    renderInputElement() {
        var getDOMroot = document.getElementById('paramRoot');
        getDOMroot.innerHTML = "";
        this.state.param.forEach((element, index) => {
            var createDiv = document.createElement('div');
            createDiv.className = "row";
            createDiv.id = "multipleParam"
            createDiv.style = 'margin-left:0px;'
            var inputTextName = document.createElement("input");
            inputTextName.className = 'form-control';
            inputTextName.style = 'width:200px';
            inputTextName.value = element.name;
            inputTextName.onchange = () => {
                console.log(this.state);
                let { param } = this.state;
                param[index] = {
                    name: 'ab4324c',
                    type: 'bc432'
                }
                console.log(param[index]);
                console.log(element);
                this.setState({
                    param: param
                })
            }
            var spaceDiv = document.createElement("div");
            spaceDiv.style = 'width:10px'
            var inputTextParam = document.createElement("input");
            inputTextParam.className = 'form-control';
            inputTextParam.style = 'width:200px;';
            inputTextParam.value = element.name;
            
            inputTextParam.onchange = () => {
                // console.log(element);
                console.log(this.state)
            }


            createDiv.appendChild(inputTextName)
            createDiv.appendChild(spaceDiv);
            createDiv.appendChild(inputTextParam)


            var space = document.createElement('br');
            getDOMroot.appendChild(createDiv);
            getDOMroot.appendChild(space);

        });
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

                            <div class="card" style={{ width: '80%', marginLeft: '120px' }}>
                                <div class="card-header">
                                    Action Design
                                </div>
                                <div class="card-body">
                                    <form className="ml-30">
                                        <div class="form-group">
                                            <label >Action</label>
                                            <input type="text" value="findElementById" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Action name" style={{ width: '500px' }} />

                                        </div>
                                        <div class="form-group">
                                            <label >Code generator</label>
                                            <textarea class="form-control" style={{ width: '500px', backgroundColor: 'silver' }} value="driver.findElementById(param)" />
                                        </div>
                                        <div class="form-group">
                                            <label >Type Parameter</label>

                                            &nbsp;
                                            &nbsp;
                                            &nbsp;
                                            &nbsp;
                                            &nbsp;
                                            &nbsp;
                                            &nbsp;
                                            &nbsp;
                                            &nbsp;
                                            &nbsp;
                                            &nbsp;
                                            &nbsp;
                                            &nbsp;

                                            <button className="btn btn-success" onClick={this.addMoreParam}>
                                                <i className="fa fa-plus">

                                                </i>
                                                &nbsp;Add Parameter</button>

                                        </div>
                                        <div class="form-group" id="paramRoot" style={{ marginLeft: '3px' }}>

                                            {/* 
                                            <div className="row">
                                                <input type="text" value="param" className="form-control"
                                                    id="exampleInputEmail1" aria-describedby="emailHelp"
                                                    placeholder="Action name" style={{ width: '200px' }} />

                                                <div style={{ width: '10px' }}>

                                                </div>

                                                <input type="text" value="param" className="form-control"
                                                    id="exampleInputEmail1" aria-describedby="emailHelp"
                                                    placeholder="Action name" style={{ width: '200px' }} />
                                            </div> */}



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

export default AdminActionPage;
