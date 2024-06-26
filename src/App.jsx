import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import Navbar from './pages/Navbar';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Hotel from './pages/Hotel';
import Login from './pages/Login';
import Signup from './pages/Signup';
import BookingForm from './pages/BookingForm';
import { AuthProvider } from './pages/AuthContext';
import Footer from './pages/FooterCom';
import Destination from './footer sections/Destination';
import PrivacyPolicy from './footer sections/PrivacyPolicy';
import TermsAndConditions from './footer sections/TermsAndConditions';
import CancellationPolicy from './footer sections/CancellationPolicy';
import ContactUs from './footer sections/Contact';
import Experience from './footer sections/Experience';

const App = () => {
  const location = useLocation(); // Get the current route

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/hotel/:hotelId" element={<Hotel />} />
        <Route path="/booking" element={<BookingForm />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/t&c" element={<TermsAndConditions />} />
        <Route path="/cancellationPolicy" element={<CancellationPolicy />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/experiences" element={<Experience />} />
      </Routes>
      {/* Conditionally render Footer based on the current route */}
      {location.pathname !== '/login' && location.pathname !== '/' && (
        <Footer />
      )}
    </>
  );
};

const AppWrapper = () => (
  <AuthProvider>
    <Router>
    <App />~
    </Router>
  </AuthProvider>
);

export default AppWrapper;
