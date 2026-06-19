import React from "react";
import CarList from "../services/CarList";

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-extrabold text-blue-900 mb-6">Our Services</h1>
        <p className="text-xl text-gray-600">
          We provide comprehensive automotive solutions to ensure your vehicle stays in peak condition. 
          Explore our range of professional services below.
        </p>
      </div>

      {/* Services List Section */}
      <div className="max-w-6xl mx-auto">
        <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
          <CarList />
        </div>
      </div>

      {/* Additional Info Section */}
      <div className="max-w-4xl mx-auto mt-16 text-center">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 bg-blue-900 text-white rounded-2xl">
            <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
            <p className="text-blue-200">Our experts are available around the clock to assist you with any inquiries.</p>
          </div>
          <div className="p-6 bg-blue-600 text-white rounded-2xl">
            <h3 className="text-xl font-bold mb-2">Easy Financing</h3>
            <p className="text-blue-100">Get flexible loan options and hassle-free documentation for your next car.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;