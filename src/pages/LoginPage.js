import React, { Component } from 'react';
import './style.css';
class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
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
                            <button>login</button>
                            {/* <p class="message">Not registered? <a href="#">Create an account</a></p> */}
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginPage;
