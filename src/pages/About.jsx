import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-6">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden shadow-2xl w-full">
        <img
          className="w-full h-64 object-cover"
          src="https://img.freepik.com/premium-photo/focused-curly-haired-young-woman-immersed-into-social-media-typing-laptop-while-interacting-online-cafe_274679-14318.jpg?w=900"
          alt="StayEase Welcome"
        />
        <div className="p-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            About StayEase
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            Welcome to StayEase, your one-stop solution for comfortable and
            affordable hotel stays. Our mission is to provide you with a
            seamless and delightful experience from booking to check-out.
          </p>
          <p className="text-lg text-gray-600 mb-4">
            Whether you're traveling for business or leisure, our wide range of
            hotels ensures that you'll find the perfect accommodation that fits
            your needs. At StayEase, we pride ourselves on offering top-notch
            services, exceptional hospitality, and a user-friendly platform that
            makes booking your stay a breeze.
          </p>
          <p className="text-lg text-gray-600 mb-4">
            Join the StayEase community and enjoy exclusive deals, comfortable
            stays, and memories that last a lifetime. Thank you for choosing
            StayEase – where comfort meets convenience.
          </p>

          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-600 mb-4">
            Our mission is to revolutionize the hospitality industry by
            providing unparalleled comfort, exceptional service, and a seamless
            booking experience.
          </p>

          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Values</h2>
          <ul className="list-disc list-inside text-lg text-gray-600 mb-4">
            <li>
              Customer Satisfaction: We prioritize our customers' comfort and
              satisfaction above all else.
            </li>
            <li>
              Integrity: We conduct our business with the highest standards of
              honesty and fairness.
            </li>
            <li>
              Innovation: We continuously seek innovative solutions to enhance
              our services and exceed customer expectations.
            </li>
            <li>
              Community: We believe in giving back to the community and
              promoting sustainable practices.
            </li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600 mb-4">
            If you have any questions or need further assistance, please don't
            hesitate to contact us.
          </p>
          <form className="bg-gray-100 p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Your name"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Your email"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                placeholder="Your message"
                rows="4"
              ></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default About;
