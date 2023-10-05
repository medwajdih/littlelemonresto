import React from 'react';
import './App.css';
import './Nav.css';
import Moussaka from './Navimages/Moussaka.webp';
import Papoutsakia from './Navimages/Papoutsakia.jpg';
import Souvlaki from './Navimages/Souvlaki.webp';
import Delivary from './Navimages/Delivary.png';
function Nav() {
    return (
        <div className="App">
            <nav className="container-Specials">
                <div className="container-Specials">
                    <h1>This Weeks Specials !</h1>
                </div>
                <div className="container-Btonline">
                    <button className="Online-button">Online Menu</button>
                </div>
            </nav>

            <div class="cards-container">
                <div class="card1-container">
                    <img class="Moussaka" src={Moussaka} alt="Moussaka" />
                    <div class="text-container">
                        <h4>Moussaka<span>$24.99</span></h4>
                        <p>A creamy delicious dish made of spiced meat (beef or lamb) cooked in tomato sauce and then layered with fried eggplant and bechamel sauce. This is one of the ultimate traditional Greek dishes.</p>
                        <img class="Delivary" src={Delivary} alt="Delivary" />
                    </div>
                </div>

                <div class="card2-container">
                    <img class="Papoutsakia" src={Papoutsakia} alt="Papoutsakia" />
                    <div class="text-container">
                        <h4>Papoutsakia<span>$22.99</span></h4>
                        <p>Papoutsakia is stuffed
                            eggplants that are first baked
                            until soft and then filled with
                            a tomato-based meat sauce,
                            topped with bechamel sauce
                            and cheese, and baked till
                            they get a beautiful golden
                            color! </p>
                        <img class="Delivary" src={Delivary} alt="Delivary" />
                    </div>
                </div>

                <div class="card3-container">
                    <img class="Souvlaki" src={Souvlaki} alt="Souvlaki" />
                    <div class="text-container">
                        <h4>Souvlaki<span>$21.99</span></h4>
                        <p>It is all about the place
                            you buy it from. Almost every
                            restaurant has its own unique
                            recipe, and, as the quality of
                            the meat and sauce really
                            matters, they certainly do not
                            all taste the same</p>
                        <img class="Delivary" src={Delivary} alt="Delivary" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Nav;