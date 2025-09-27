import React from 'react';
function FAQ() {
  return (
    <div className="min-h-screen bg-yellow-50 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-2xl p-10 space-y-6">
        <h1 className="text-3xl font-extrabold text-yellow-700 text-center">
          ❓ Frequently Asked Questions
        </h1>
        <div className="space-y-4">
          <div>
            <h2 className="font-semibold text-lg">Q: Do you offer instant cash?</h2>
            <p className="text-gray-700">Yes, we provide cash immediately after evaluation.</p>
          </div>
          <div>
            <h2 className="font-semibold text-lg">Q: How do you evaluate gold?</h2>
            <p className="text-gray-700">
              We use advanced purity checking machines and real-time market rates.
            </p>
          </div>
          <div>
            <h2 className="font-semibold text-lg">Q: Is the process safe?</h2>
            <p className="text-gray-700">
              Absolutely! We ensure a transparent and secure process for every customer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
