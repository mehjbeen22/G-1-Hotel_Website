import React from 'react';
import Navbar from './pages/Navbar';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Hotel from './pages/Hotel';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./Login/Login";
import Signup from "./Login/Signup";
import Book from "./Booking/Book"
import {ToastContainer} from "react-toastify"

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/hotel/:hotelId" element={<Hotel />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/booking" element={<Book />} />
        <ToastContainer/>
      </Routes>
    </Router>
  );
};

export default App;
