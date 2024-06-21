import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { hotelData } from '../data/hotelData';

const Destination = () => {
  const [selectedState, setSelectedState] = useState('Mumbai'); // Default selected state

  const filterAllCities = new Set(hotelData.map((hotel) => hotel.city));

  // Filter hotels based on selected state
  const filteredHotels = hotelData.filter(
    (hotel) => hotel.city === selectedState,
  );

  const handleStateChange = (state) => {
    setSelectedState(state);
  };

  return (
    <div className="container mx-auto py-12 px-6">
      <h2 className="text-3xl font-semibold mb-6 text-center">
        Explore Destinations
      </h2>

      {/* State selection */}
      <div className="flex justify-center mb-6 space-x-4">
        {[...filterAllCities].map((city, index) => (
          <button
            key={index}
            onClick={() => handleStateChange(city)}
            className={`${
              selectedState === city
                ? 'bg-blue-500 text-white'
                : 'bg-gray-300 text-gray-700'
            } px-4 py-2 rounded-md`}
          >
            {city}
          </button>
        ))}
      </div>

      {/* Grid of hotels based on selected state */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredHotels.slice(0, 4).map((hotel) => (
          <div
            key={hotel.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={hotel.images[0]}
              alt={hotel.hotel_name}
              className="w-full h-56 object-cover object-center"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2 bg-blue-200 px-2 rounded">
                {hotel.hotel_name}
              </h3>
              <p className="text-gray-600 mb-4">{hotel.description}</p>
              <div className="flex items-center mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-500 mr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 0l2.75 6.5L20 7.5l-5 5 1.25 7-6.25-3.75-6.25 3.75L4 12.5l-5-5 7.25-1L10 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-gray-700">
                  {hotel.rating} ({Math.floor(hotel.rating * 100) / 100})
                </p>
              </div>
              <p className="text-gray-700 mb-4">
                Starting from {hotel.price} per night
              </p>
              <div className="flex justify-between">
                <Link
                  to={`/hotel/${hotel.id}`}
                  className="bg-blue-600 text-white px-2 py-1 rounded "
                >
                  Book Now
                </Link>
                <p className="text-gray-600">{hotel.discount} Discount</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destination;
