import React from 'react';
function Home() {
  return (
    <div className="min-h-screen bg-yellow-100 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white shadow-xl rounded-2xl p-10 space-y-8">
        <h1 className="text-4xl font-extrabold text-yellow-700 text-center">
          💎 Welcome to Viraj Jewellers
        </h1>
        <h2 className="text-xl text-gray-700 text-center">
          Cash for Gold – Lajpat Nagar, New Delhi
        </h2>

        <p className="text-gray-700 text-lg">
          Looking for the <span className="font-semibold">best place to sell gold in New Delhi</span>? 
          At <span className="font-semibold">Viraj Jewellers, Lajpat Nagar</span>, we make it easy, 
          transparent, and profitable to exchange your gold for instant cash.
        </p>

        <p className="text-gray-700 text-lg">
          With our <span className="font-semibold">trusted evaluation process</span> and 
          <span className="font-semibold"> top market prices</span>, we guarantee a 
          smooth experience for every customer.
        </p>

        <p className="text-gray-700 text-lg text-center font-semibold">
          ✅ Instant Cash | ✅ Best Price | ✅ 100% Transparency
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <button className="bg-yellow-600 text-white px-6 py-3 rounded-xl shadow hover:bg-yellow-700">
            Learn More
          </button>
          <button className="bg-gray-200 text-gray-800 px-6 py-3 rounded-xl shadow hover:bg-gray-300">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
