import React from 'react';
import Home from './Pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Keep the import for Router
import About from './Pages/About';
import Menu from './Pages/Menu';
import OrderOnline from './Pages/OrderOnline';
import Reservations from './Pages/Reservations';
import Login from './Pages/Login';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/OrderOnline" element={<OrderOnline />} />
          <Route path="/Reservations" element={<Reservations />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
