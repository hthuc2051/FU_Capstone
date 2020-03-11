import React, { Component } from 'react';
import './style.css';
import { history } from './../App';
class LoginPage extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }
    componentDidMount() {

    }
    onLogin = () => {

        let userInfo = {
            id: "1",
            fullname: "Nguyen Huy Thuc",
            token: "Token",
            role: "Lecturer",
            subjects: [
                {
                    id: 1,
                    name: "Java",
                }, {
                    id: 2,
                    name: "Csharp",
                },
            ],
        };
        console.log(JSON.stringify(userInfo));
        localStorage.setItem('userInfo', JSON.stringify(userInfo));
        history.push("/lecturer");
    }
    render() {
        return (
            <div className="login-wrapper">
                <div className="login-container">
                    <div className="form">
                        <img src="./images/logo-dummy.png" alt="Logo imgage" />
                        <form className="login-form">
                            <input type="text" placeholder="Username" />
                            <input type="password" placeholder="Password" />
                            <button onClick={this.onLogin} >login</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginPage;
