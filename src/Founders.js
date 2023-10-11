import React from 'react';
import './App.css';
import './Founders.css';
import MarionLuigi from './Avatar/MarionLuigi.png';

function Founders() {
    return (
        <div className="App">
            <div className="container-Founders">
                <div className="container-Founderstext">
                    <h1>Little Lemon</h1>
                    <p className="place">Chicago</p>
                    <p>Meet the creative minds behind Little Lemon :Mario and Luigi.
                        Together, they've curated a culinary experience that blends
                        to create a dining sensation you won't forget. Explore their passion on every plate
                        and enjoy the warm hospitality that makes Little Lemon a must-visit destination.
                    </p>
                </div>
                <div className="container-Photo">
                    <img className="logo" src={MarionLuigi} alt="MarionLuigi" style={{ width: '350px', height: '350px' }} />
                </div>
            </div>
        </div>
    );
}

export default Founders;