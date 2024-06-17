// src/components/HomePage.jsx
import React, { useState } from 'react';
import { hotelData } from '../data/hotelData';
import Hotel from './Hotel';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [searchInput, setSearchInput] = useState('');
  const [filteredHotels, setFilteredHotels] = useState(hotelData);

  const [selectedHotel, setSelectedHotel] = useState(null); // for track the selected hotel

  const handleSearch = () => {
    const filtered = hotelData.filter((hotel) =>
      hotel.city.toLowerCase().includes(searchInput.toLowerCase()),
    );
    setFilteredHotels(filtered);
  };

  // Get the hotels with special offers
  const specialOffers = filteredHotels
    .filter((hotel) => parseFloat(hotel.discount) >= 20)
    .slice(0, 8);

  return (
    <div>
      {/* Search Bar */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">Find Your Perfect Stay</h1>
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Location"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="p-2 rounded-md w-[80%] text-black"
            />

            <button
              onClick={handleSearch}
              className="bg-white text-blue-600 hover:bg-gray-200 p-2 rounded-md w-1/6"
            >
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Featured Hotels */}
      <div className="max-w-7xl mx-auto p-8">
        <h2 className="text-2xl font-bold mb-4">Featured Hotels</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredHotels.map((hotel) => (
            <div
              key={hotel.id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={hotel.images[0]}
                alt={hotel.hotel_name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{hotel.hotel_name}</h3>
                <p className="text-gray-700">{hotel.description}</p>
                <div className="mt-4">
                  <span className="text-blue-600 font-bold">
                    Price : {hotel.price}
                  </span>
                  <br />
                  <span className="text-gray-500  line-through ">
                    {(
                      parseFloat(hotel.price) *
                      (1 + parseFloat(hotel.discount) / 100)
                    ).toFixed(2)}{' '}
                    INR
                  </span>
                  <br />
                  <Link
                    to={`/hotel/${hotel.id}`}
                    onClick={() => handleKnowMoreClick(hotel)}
                    className="bg-blue-600 text-white px-2 py-1 rounded  "
                  >
                    Know More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Special Offers */}
      <div className="bg-gray-100 p-8 ">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Special Offers</h2>
          {specialOffers.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {specialOffers.map((hotel) => (
                <div
                  key={hotel.id}
                  className="bg-white text-black shadow-md rounded-lg overflow-hidden"
                >
                  <img
                    src={hotel.images[0]}
                    alt={hotel.hotel_name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-2">
                      {hotel.hotel_name}
                    </h3>
                    <p className="text-gray-700">{hotel.description}</p>
                    <div className="mt-4">
                      <span className="text-blue-600 font-bold">
                        Price : {hotel.price}
                      </span>{' '}
                      <br />{' '}
                      <span className="text-gray-500  line-through">
                        {(
                          parseFloat(hotel.price) *
                          (1 + parseFloat(hotel.discount) / 100)
                        ).toFixed(2)}{' '}
                        INR
                      </span>{' '}
                      <br />
                      <span className="text-green-600 ">
                        Discount : ({hotel.discount} OFF)
                      </span>
                    </div>
                    <Link
                      to={`/hotel/${hotel.id}`}
                      className="bg-blue-600 text-white px-2 py-1 rounded "
                    >
                      Know More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-xl">
              No special offers available now
            </p>
          )}
        </div>
      </div>
      {selectedHotel && <Hotel hotel={selectedHotel} />}
    </div>
  );
};

export default HomePage;
