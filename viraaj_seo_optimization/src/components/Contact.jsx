import React from 'react';
function Contact() {
  return (
    <div className="min-h-screen bg-yellow-100 flex items-center justify-center p-6">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-2xl p-10 space-y-6">
        <h1 className="text-3xl font-extrabold text-yellow-700 text-center">
          📞 Contact Viraj Jewellers
        </h1>
        <p className="text-gray-700 text-lg text-center">
          Visit us at <span className="font-semibold">Lajpat Nagar, New Delhi</span> for the 
          best Cash for Gold services.
        </p>
        <p className="text-gray-700 text-lg">
          <strong>Address:</strong> Viraj Jewellers, Lajpat Nagar, New Delhi  
          <br />
          <strong>Phone:</strong> +91 9876543210  
          <br />
          <strong>Email:</strong> info@virajjewellers.com
        </p>
        <div className="flex justify-center">
          <button className="bg-yellow-600 text-white px-6 py-3 rounded-xl shadow hover:bg-yellow-700">
            Get Directions
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
