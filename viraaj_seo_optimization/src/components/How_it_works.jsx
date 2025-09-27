import React from 'react';
function How_it_works() {
  return (
    <div className="min-h-screen bg-yellow-50 flex items-center justify-center p-6">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-2xl p-10 space-y-6">
        <h1 className="text-3xl font-extrabold text-yellow-700 text-center">
          ⚙️ How It Works
        </h1>
        <p className="text-gray-700 text-lg">
          Selling your gold at <span className="font-semibold">Viraj Jewellers, Lajpat Nagar</span> 
          is simple and secure. Just follow three easy steps:
        </p>
        <ol className="list-decimal list-inside text-gray-700 text-lg space-y-2">
          <li>Bring your gold items to our store.</li>
          <li>Get them evaluated using advanced tools & real-time rates.</li>
          <li>Receive instant cash on the spot.</li>
        </ol>
        <p className="text-gray-700 text-lg">
          It’s that simple – <span className="font-semibold">fast, fair, and reliable</span>.
        </p>
      </div>
    </div>
  );
}

export default How_it_works;
