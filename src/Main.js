import React from 'react';
import './App.css';
import './Main.css';
import restopic from './Avatar/restauranfood.jpg';
function Main() {
    return (
        <div className="App">
            <main className="App-main">
                <div className="container-432x349">
                    <h1 className="title-margin">Little Lemon</h1>
                    <div class="pcolor">
                        <p>Chicago</p>
                        <p className="p-margin">
                            Bursting with flavor from the Mediterranean
                            The exquisite world of Greek cuisine
                            Experience the warmth and tradition of Greece through our culinary journey!
                        </p>
                    </div>
                    <button className="reserve-button">Reserve a Table</button>
                </div>
                <div className="container-restopic-wrapper">
                    <img className="container-restopic" src={restopic} alt="restopic" />
                </div>
            </main>
        </div>
    );
}

export default Main;