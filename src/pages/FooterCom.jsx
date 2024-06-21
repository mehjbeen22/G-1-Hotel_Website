import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 px-5">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-10 md:px-0">
        {/* Company Information */}
        <div className="footer-column ">
          <h3 className="text-lg font-semibold mb-4"> Disclaimer</h3>

          <p>
            StayEase provides hotel booking services for various properties.
            While we strive to ensure accuracy and quality, StayEase is not
            responsible for any discrepancies in the property listings or
            services provided by the hotels. Users are advised to verify details
            directly with the properties before making a booking.
          </p>
        </div>

        {/* Explore */}
        <div className="footer-column">
          <h3 className="text-lg font-semibold mb-4">Explore</h3>
          <ul>
            <li className="mb-2">
              <Link to="/destination" className="hover:text-gray-400">
                Destinations
              </Link>
            </li>

            <li className="mb-2">
              <Link to="/home" className="hover:text-gray-400">
                Hotels
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/experiences" className="hover:text-gray-400">
                Experiences
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div className="footer-column">
          <h3 className="text-lg font-semibold mb-4">Legal</h3>
          <ul>
            <li className="mb-2">
              <Link to="/contact" className="hover:text-gray-400">
                Contact Us
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/t&c" className="hover:text-gray-400">
                Terms & Conditions
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/privacypolicy" className="hover:text-gray-400">
                Privacy Policy
              </Link>
            </li>

            <li className="mb-2">
              <Link to="/cancellationPolicy" className="hover:text-gray-400">
                Cancellation Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gray-700 py-5 mt-8">
        <div className="container mx-auto text-center">
          <h3 className="text-lg font-semibold mb-4">
            Stay Updated with Our Latest Offers!
          </h3>
          <form className="flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 w-full max-w-xs rounded-l-lg focus:outline-none"
            />
            <button
              type="submit"
              className="p-2 bg-red-500 text-white rounded-r-lg hover:bg-red-600"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
