import React from 'react';

const CancellationPolicy = () => {
  return (
    <div className="flex justify-center items-center px-8 py-10  ">
      <section className="w-[95%] bg-gray-50 shadow-inner px-7 py-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Cancellation Policy
        </h2>

        <div className="prose prose-blue">
          <p className="text-gray-700">
            At StayEase, we understand that plans may change. Below is our
            cancellation policy to guide you through the process:
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
            Flexible Booking Policy
          </h3>
          <p className="text-gray-700">
            Guests can cancel their reservation up to 24 hours before the
            check-in date and receive a full refund.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
            Standard Booking Policy
          </h3>
          <p className="text-gray-700">
            For cancellations made less than 24 hours before check-in, guests
            will be charged for the first night's stay.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
            Non-Refundable Booking
          </h3>
          <p className="text-gray-700">
            Some rates may be non-refundable. In such cases, cancellations or
            modifications are not allowed, and the full booking amount will be
            charged.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
            No Show
          </h3>
          <p className="text-gray-700">
            If a guest does not arrive and does not cancel their reservation in
            advance, they will be charged the full booking amount.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
            How to Cancel
          </h3>
          <p className="text-gray-700">
            Guests can cancel their reservation by logging into their StayEase
            account or by contacting our customer support team directly.
          </p>

          <p className="text-gray-700">
            Please note that cancellation policies may vary for special offers,
            promotions, or during peak seasons. We recommend reviewing the
            specific terms of your reservation when booking.
          </p>
        </div>
      </section>
    </div>
  );
};

export default CancellationPolicy;
