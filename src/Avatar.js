import React from 'react';
import './App.css';
import './Avatar.css';
import AV1 from './Avatar/AV1.webp';
import AV2 from './Avatar/AV2.jpeg';
import AV3 from './Avatar/AV3.webp';
import AV4 from './Avatar/AV4.jpeg';

function Avatar() {
    return (
        <div className="App">
            <div className="Avatarsize">
                <nav className="container-Title">
                        <h1>Testimonials</h1>
                </nav>

                <div class="Avatar-container">
                    <div class="cardav1-container">
                        <div class="ratings">
                            ★★★★☆
                        </div>
                        <div class="image-container">
                            <img class="AV1" src={AV1} alt="AV1" width="100" height="100" />
                        </div>
                        <h4>Pieter</h4>
                        <div class="Pieter-container">
                            <p1>"Little Lemon Restaurant has quickly become my go-to spot for authentic Greek cuisine. The flavors are incredible, and the warm atmosphere makes me feel like I'm dining in Greece itself. The staff is always friendly, and I can't get enough of their delicious souvlaki!"</p1>
                        </div>
                    </div>

                    <div class="cardav2-container">
                        <div class="ratings">
                            ★★★★★
                        </div>
                        <div class="image-container">
                            <img class="AV2" src={AV2} alt="AV2" width="100" height="100" />
                        </div>
                        <h4>Simone</h4>
                        <div class="Simone-container">
                            <p2>"I can't say enough good things about Little Lemon Restaurant. The food is consistently delicious, and their Greek salad is the best I've ever had. It's the perfect place for a casual meal with friends or a romantic dinner for two. Little Lemon truly captures the essence of Greek cuisine."</p2>
                        </div>
                    </div>

                    <div class="cardav3-container">
                        <div class="ratings">
                            ★★★★☆
                        </div>
                        <div class="image-container">
                            <img class="AV3" src={AV3} alt="AV3" width="100" height="100" />
                        </div>
                        <h4>Mary</h4>
                        <div class="Mary-container">
                            <p3>"As a Greek food enthusiast, I've tried many Greek restaurants, and Little Lemon stands out as one of the best. Their moussaka is to die for, and the baklava is the perfect sweet ending to a fantastic meal. The ambiance is charming, and it's clear that the chefs take pride in their craft."</p3>
                        </div>
                    </div>

                    <div class="cardav4-container">
                        <div class="ratings">
                            ★★★★★
                        </div>
                        <div class="image-container">
                            <img class="AV4" src={AV4} alt="AV4" width="100" height="100" />
                        </div>
                        <h4>Milka</h4>
                        <div class="Milka-container">
                            <p4>"Little Lemon Restaurant is a hidden gem for Greek food lovers like me. The flavors are spot-on, and the portions are generous. Whether it's their fresh tzatziki or the tender lamb dishes, every bite is a taste of Greece. I highly recommend this restaurant to anyone looking for an authentic Greek dining experience."</p4>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Avatar;