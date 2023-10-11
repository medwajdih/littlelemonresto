import React from 'react';
import Home from './Pages/Home';
import { HashRouter, Routes, Route } from 'react-router-dom';
import About from './Pages/About';
import Menu from './Pages/Menu';
import OrderOnline from './Pages/OrderOnline';
import Reservations from './Pages/Reservations';
import Login from './Pages/Login';
import Bookatable from './Pages/Bookatable';
import LoginMessage from './Pages/LoginMessage';

function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/OrderOnline" element={<OrderOnline />} />
          <Route path="/Reservations" element={<Reservations />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Bookatable" element={<Bookatable />} />
          <Route path="/LoginMessage" element={<LoginMessage />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
