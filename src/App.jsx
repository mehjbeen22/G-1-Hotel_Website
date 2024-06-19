import React from 'react';
import Navbar from './pages/Navbar';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Hotel from './pages/Hotel';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { hotelData } from './data/hotelData';
import BookingForm from './pages/BookingForm';
import FooterCom from './pages/FooterCom';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/hotel/:hotelId" element={<Hotel />} />
        <Route path='/BookingForm' element={BookingForm}/>
      </Routes>
      <div>
        <FooterCom />
      </div>
    </Router>
  );
};

export default App;


