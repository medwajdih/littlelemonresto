import React from 'react';
import Header from '../Header';
import Nav from '../Nav';
import Main from '../Main';
import Avatar from '../Avatar';
import Founders from '../Founders';
import Footer from '../Footer';

function Home() {
    return (
        <div className="App">
            <Header />
            <Main />
            <Nav />
            <Avatar />
            <Founders />
            <Footer />
        </div>
    );
}

export default Home;
