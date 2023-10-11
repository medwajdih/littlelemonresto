import './App.css';
import './Header.css';
import logo from './Logo .svg';
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {

    return (
        <div className="header">
            <header className="App-header">
                <div className="h2-container">
                    <img className="logo" src={logo} alt="logo" />
                    <h2>
                        <a><Link Link to="/home">HOME</Link></a>
                    </h2>
                    <h2>
                        <a><Link Link to="/about">ABOUT</Link></a>
                    </h2>
                    <h2>
                        <a><Link Link to="/menu">MENU</Link></a>
                    </h2>
                    <h2>
                        <a><Link Link to="/reservations">RESERVATIONS</Link></a>
                    </h2>
                    <h2>
                        <a><Link Link to="/orderonline">ORDER ONLINE</Link></a>
                    </h2>
                    <h2>
                        <a><Link Link to="/LoginMessage">LOGIN</Link></a>
                    </h2>
                </div>
            </header>
        </div>
    );
}

export default Header;
