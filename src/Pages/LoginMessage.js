import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';
import './LoginMessage.css';

function LoginMessage() {
    return (
        <div className="container-message">

                <div className="login-box">
                    <h3>Login in One Click</h3>
                    <div container-icons>
                    <a href="https://google.com" className="login-option">
                        <FontAwesomeIcon icon={faGoogle} />

                    </a>
                    <a href="https://facebook.com" className="login-option">
                        <FontAwesomeIcon icon={faFacebook} />

                    </a>
                    </div>
                </div>

        </div>
    );
}

export default LoginMessage;
