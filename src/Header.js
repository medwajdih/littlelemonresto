import React from 'react';
import './App.css';
import './Header.css';

import logo from './Logo .svg';

function Header() {
    return (
        <div className="header">
            <header className="App-header">

                <div className="h2-container">
                    <img className="logo" src={logo} alt="logo" />
                    <h2>
                        <a href="https://google.com">HOME</a>
                    </h2>
                    <h2>
                        <a href="https://google.com">ABOUT</a>
                    </h2>
                    <h2>
                        <a href="https://google.com">MENU</a>
                    </h2>
                    <h2>
                        <a href="https://google.com">RESERVATIONS</a>
                    </h2>
                    <h2>
                        <a href="https://google.com">ORDER ONLINE</a>
                    </h2>
                    <h2>
                        <a href="https://google.com">LOGIN</a>
                    </h2>
                </div>
            </header>
        </div>
    );
}

export default Header;