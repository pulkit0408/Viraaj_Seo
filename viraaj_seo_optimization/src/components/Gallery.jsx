import React from 'react';
function Gallery() {
  return (
    <div className="min-h-screen bg-yellow-50 flex items-center justify-center p-6">
      <div className="max-w-5xl w-full bg-white shadow-lg rounded-2xl p-10 space-y-8">
        <h1 className="text-3xl font-extrabold text-yellow-700 text-center">
          🏬 Gallery – Viraj Jewellers
        </h1>
        <h2 className="text-lg text-gray-600 text-center">
          Lajpat Nagar, New Delhi
        </h2>

        <p className="text-gray-700 text-lg text-center">
          Take a virtual tour of our trusted showroom in{" "}
          <span className="font-semibold">Lajpat Nagar, New Delhi</span>. 
          Our secure and welcoming environment ensures comfort and safety for every customer.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <img src="/images/store1.jpg" alt="Showroom Front" className="rounded-xl shadow-md" />
          <img src="/images/store2.jpg" alt="Gold Testing Area" className="rounded-xl shadow-md" />
          <img src="/images/store3.jpg" alt="Customer Desk" className="rounded-xl shadow-md" />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
