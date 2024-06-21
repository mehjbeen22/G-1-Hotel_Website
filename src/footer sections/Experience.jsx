import React from 'react';

const reviews = [
  {
    customerName: 'Alice Smith',
    reviewText:
      'Lovely experience! The hotel was amazing and the staff was very accommodating.',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaraFCwTe6d0wlYTSrslNrQhn1gN7C7Uf4tw&s',
  },
  {
    customerName: 'Bob Johnson',
    reviewText:
      'I had a wonderful time at StayEase! The room was comfortable and the service was top-notch.',
    imageUrl:
      'https://www.shutterstock.com/image-photo/head-shot-handsome-millennial-30s-600nw-1854710668.jpg',
  },
  {
    customerName: 'Eve Brown',
    reviewText:
      'Such a pleasant stay! The amenities were great and the location was perfect.',
    imageUrl:
      'https://www.shutterstock.com/image-photo/isolated-shot-young-handsome-male-260nw-2157606039.jpg',
  },
  {
    customerName: 'John ',
    reviewText:
      'Fantastic experience! The room was spacious, and the view was breathtaking.',
    imageUrl:
      'https://www.shutterstock.com/image-photo/confident-successful-smiling-businessman-sitting-260nw-366213995.jpg',
  },
  {
    customerName: 'Jane zi',
    reviewText:
      'Exceptional service! The staff went above and beyond to make our stay memorable.',
    imageUrl:
      'https://media.istockphoto.com/id/1369508766/photo/beautiful-successful-latin-woman-smiling.jpg?s=612x612&w=0&k=20&c=LoznG6eGT42_rs9G1dOLumOTlAveLpuOi_U755l_fqI=',
  },
  {
    customerName: 'Michael Johnson',
    reviewText:
      'Incredible stay! The hotel exceeded our expectations in every way possible.',
    imageUrl: 'https://i.ibb.co/PMGyK7Q/157506-middle-removebg-preview.png',
  },
];

const Experience = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Customer Reviews
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={review.imageUrl}
              alt={review.customerName}
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <p className="text-lg font-semibold text-gray-800 mb-2">
                {review.customerName}
              </p>
              <p className="text-gray-600">{review.reviewText}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
