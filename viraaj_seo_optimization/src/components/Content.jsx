import React from "react";

function Content() {
    return (
        <div>
            <div className="max-w-lg w-full bg-white shadow-lg rounded-2xl p-8 text-center">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">
                    Cash for Gold
                </h1>
                <h2 className="text-2xl font-bold text-gray-800 mb-3">Why Choose Us</h2>
                <ul className="list-disc list-inside text-gray-600 mb-6">
                    <li>✅ Best rates in Lajpat Nagar</li>
                    <li>✅ 100% transparent process</li>
                    <li>✅ Immediate cash / bank transfer</li>
                    <li>✅ Secure & hassle-free transactions</li>
                </ul>

                <p className="text-lg text-gray-600">
                    Lajpat Nagar, New Delhi
                </p>
            </div>
        </div>
    );
}

export default Content;