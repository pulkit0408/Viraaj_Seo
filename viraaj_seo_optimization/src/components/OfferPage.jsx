import React from 'react';
function OfferPage() {
  return (
    <div className="min-h-screen bg-yellow-50 flex items-center justify-center p-6">
      <div className="max-w-3xl w-full bg-white shadow-2xl rounded-2xl p-10 space-y-6">
        
        {/* Heading */}
        <h1 className="text-3xl font-extrabold text-yellow-700 text-center">
          💎 Special Offer at Viraj Jewellers
        </h1>
        <h2 className="text-xl font-semibold text-gray-800 text-center">
          Lajpat Nagar, New Delhi – Cash for Gold
        </h2>

        {/* Intro */}
        <p className="text-gray-700 text-lg text-center">
          At <span className="font-semibold">Viraj Jewellers</span>, we believe in giving our
          customers the <span className="font-semibold">best value for their gold</span>. That’s why
          we are offering exclusive deals on <span className="font-semibold">Cash for Gold</span> in
          <span className="font-semibold"> Lajpat Nagar, New Delhi</span>.
        </p>

        {/* Offer Details */}
        <div className="bg-yellow-100 p-6 rounded-xl text-left space-y-3">
          <h3 className="text-xl font-bold text-yellow-800">✨ Current Offers:</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>💰 Get <span className="font-semibold">highest market rates</span> for your gold</li>
            <li>⚡ Instant cash or bank transfer within minutes</li>
            <li>🎉 Extra bonus value during festive seasons</li>
            <li>🛡️ 100% transparent and secure evaluation process</li>
            <li>✅ No hidden charges – you get what you deserve</li>
          </ul>
        </div>

        {/* Why Choose Us */}
        <div className="space-y-3">
          <h3 className="text-xl font-bold text-gray-800">Why Choose Viraj Jewellers?</h3>
          <p className="text-gray-700">
            With years of trust and reputation in <span className="font-semibold">Lajpat Nagar</span>,
            Viraj Jewellers has become the go-to destination for selling gold. Our mission is simple
            – to give you <span className="font-semibold">the best deals, fastest payments, and
            complete trust</span> every time you walk through our doors.
          </p>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition">
            📞 Call Now & Get Best Offer
          </button>
          <p className="mt-2 text-gray-600 text-sm">
            Visit us at <span className="font-semibold">Viraj Jewellers, Lajpat Nagar, New Delhi</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default OfferPage;
