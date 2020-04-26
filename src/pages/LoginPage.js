import React, { Component } from 'react';
import './style.css';
import { history } from './../App';
class LoginPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            txtUsername: '',
            txtPassword: '',
        };
    }
    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        this.setState({
            [name]: target.value
        });
    }

    onLogin = (e) => {
        e.preventDefault();
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
        let { txtUsername, txtPassword } = this.state;
        console.log(txtUsername);
        localStorage.setItem('userInfo', JSON.stringify(userInfo));
        if (txtUsername === 'HoangNT') {
            history.push("/subjects/1/practical-exams");
        } else {
            history.push("/lecturer");
        }
        window.location.reload();
    }
    render() {
        return (
            <div className="login-wrapper">
                <div className="login-container">
                    <div className="form">
                        <img src="./images/logo.PNG" alt="Logo imgage" />
                        <form onSubmit={this.onLogin}  className="login-form">
                            <input  onChange={this.onChange} name="txtUsername" type="text" placeholder="Username" />
                            <input  onChange={this.onChange} name="txtPassword" type="password" placeholder="Password" />
                            <button>login</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginPage;
