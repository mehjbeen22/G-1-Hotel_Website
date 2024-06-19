import React from 'react';
import { useParams } from 'react-router-dom';
import { hotelData } from '../data/hotelData';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {
  FaWifi,
  FaUtensils,
  FaBroom,
  FaBed,
  FaSwimmingPool,
  FaStar,
} from 'react-icons/fa';
import 'tailwindcss/tailwind.css';

const Hotel = () => {
  const { hotelId } = useParams();
  const hotel = hotelData.find((h) => h.id === hotelId);

  if (!hotel) {
    return <div className="text-center text-red-500">Hotel not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto p-4 flex flex-col items-center bg-gray-100">
      <div className="w-full md:w-11/12">
        <Carousel
          showThumbs={false}
          className="mb-8"
          renderArrowPrev={(clickHandler, hasPrev, labelPrev) =>
            hasPrev && (
              <button
                type="button"
                onClick={clickHandler}
                className="absolute top-1/2 transform -translate-y-1/2 left-0 bg-blue-500 text-white p-2 rounded-full"
                aria-label={labelPrev}
              >
                &lt;
              </button>
            )
          }
          renderArrowNext={(clickHandler, hasNext, labelNext) =>
            hasNext && (
              <button
                type="button"
                onClick={clickHandler}
                className="absolute top-1/2 transform -translate-y-1/2 right-0 bg-blue-500 text-white p-2 rounded-full"
                aria-label={labelNext}
              >
                &gt;
              </button>
            )
          }
        >
          {hotel.images.map((image, index) => (
            <div
              key={index}
              className="h-80 md:h-96 flex items-center justify-center"
            >
              <img
                src={image}
                alt={`Hotel ${hotel.hotel_name} ${index + 1}`}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </Carousel>

        <section className="md:flex md:justify-between">
          {/* -------- hotel Details ----- */}
          <div className="md:w-2/3">
            <h1 className="text-3xl font-bold mb-2">{hotel.hotel_name}</h1>
            <p className="text-lg text-gray-600 mb-4">{hotel.city}</p>
            <p className="text-lg font-semibold mb-4">
              {hotel.price} (Discount: {hotel.discount})
            </p>
            <div className="flex items-center mb-4">
              <FaStar className="text-yellow-500 text-xl mr-2" />
              <span className="text-yellow-500 text-xl font-bold mr-2">
                {hotel.rating}
              </span>
              <span className="text-gray-600">Rating</span>
            </div>
            <p className="mb-4">{hotel.description}</p>
            <div className="mb-4">
              <h2 className="text-2xl font-semibold mb-2">Facilities</h2>
              <ul className="list-disc list-inside">
                {hotel.facilities.map((facility, index) => (
                  <li key={index} className="flex items-center mb-2">
                    {facility === 'wifi' && <FaWifi className="mr-2" />}
                    {facility === 'food' && <FaUtensils className="mr-2" />}
                    {facility === 'cleaning' && <FaBroom className="mr-2" />}
                    {facility === 'available bed' && <FaBed className="mr-2" />}
                    {facility}
                  </li>
                ))}
              </ul>
            </div>
            {hotel.swimming_pool && (
              <div className="mb-4">
                <span className="flex items-center bg-blue-500 text-white px-3 py-1 rounded-full">
                  <FaSwimmingPool className="mr-2" />
                  Swimming Pool Available
                </span>
              </div>
            )}
          </div>

          {/* ---------------- form Section -------------- */}
          <div className="md:w-1/3 mt-8 md:mt-0 md:ml-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">Book Your Stay</h2>
              <form>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="checkin">
                    Check-in Date
                  </label>
                  <input
                    type="date"
                    id="checkin"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 mb-2"
                    htmlFor="checkout"
                  >
                    Check-out Date
                  </label>
                  <input
                    type="date"
                    id="checkout"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Book Now
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hotel;
