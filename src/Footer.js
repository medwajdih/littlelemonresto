import React from 'react';
import './App.css';
import './Footer.css';
import { Link } from 'react-router-dom'; // Import components from react-router-dom
import Greenlogo from './Avatar/Greenlogo.png';


function Footer() {

    return (

        <div className="App">
            <div className="container-Footer">
                <div className="container-logo">
                    <img className="Greenlogo" src={Greenlogo} alt="Greenlogo" style={{ width: '100px', height: '200px', margin: '10px' }} />
                </div>
                <div className="container-Menu1">
                    <h3><Link to="/home" className="Navig">Home</Link> </h3>
                    <h3><Link to="/about" className="Navig">About</Link></h3>
                    <h3><Link to="/menu" className="Navig">Menu</Link></h3>
                    <h3><Link to="/reservations" className="Navig">Reservations</Link></h3>
                    <h3><Link to="/orderonline" className="Navig">Order Online</Link></h3>
                    <h3><Link Link to="/LoginMessage" className="Navig">Login</Link></h3>

                </div>
                <div className="container-Menu2">
                    <h3><i className="fa fa-map-marker"></i> 678 Pisa Ave, Chicago, IL 60611</h3>
                    <h3><i className="fa fa-phone"></i> (312) 558-2744</h3>
                    <h3><i className="fa fa-envelope"></i> customer@littlelemon.com</h3>
                </div>
                <div className="container-Menu3">
                    <h3 className="smallmargin">Be in Touch</h3>
                    <div className="footer-social">
                        <a href="https://www.facebook.com" className="social-icon">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href="https://twitter.com" className="social-icon">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://www.instagram.com" className="social-icon">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Footer;
