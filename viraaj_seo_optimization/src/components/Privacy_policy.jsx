import React from 'react';
function Privacy_policy() {
  return (
    <div className="min-h-screen bg-yellow-100 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white shadow-xl rounded-2xl p-10 space-y-6">
        <h1 className="text-3xl font-extrabold text-yellow-700 text-center">
          📜 Privacy Policy & Terms
        </h1>
        <p className="text-gray-700 text-lg">
          At <span className="font-semibold">Viraj Jewellers, Lajpat Nagar, New Delhi</span>, we 
          respect your privacy and ensure that all transactions are{" "}
          <span className="font-semibold">secure and confidential</span>.
        </p>
        <p className="text-gray-700 text-lg">
          <strong>Privacy:</strong> Customer details, gold evaluations, and payments are never 
          shared with third parties.
        </p>
        <p className="text-gray-700 text-lg">
          <strong>Terms:</strong> All gold transactions are subject to market rates, purity checks, 
          and ID verification as per Indian regulations.
        </p>
        <p className="text-gray-700 text-lg">
          By visiting our showroom or website, you agree to our{" "}
          <span className="font-semibold">terms & conditions</span>.
        </p>
      </div>
    </div>
  );
}

export default Privacy_policy;
