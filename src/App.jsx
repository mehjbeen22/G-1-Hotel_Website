import React from 'react';
import Navbar from './pages/Navbar';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Hotel from './pages/Hotel';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Book from './Booking/Book';
import { AuthProvider } from './pages/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/hotel/:hotelId" element={<Hotel />} />
          <Route path="/login" element={<Login />} />
          <Route path="/booking" element={<Book />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
