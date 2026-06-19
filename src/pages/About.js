import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-blue-900 mb-4">About Us</h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Content Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=600" 
              alt="Showroom Interior" 
              className="rounded-3xl shadow-2xl"
            />
          </div>
          
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">Your Dream Car Awaits</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              At <strong>CarShowroom</strong>, we believe that buying a car is more than just a transaction; 
              it's the beginning of a new journey. With over a decade of experience in the automotive industry, 
              we pride ourselves on offering only the finest selection of luxury and high-performance vehicles.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our mission is to provide a transparent, hassle-free, and enjoyable experience for every customer. 
              Whether you are looking for speed, comfort, or eco-friendly technology, our team is here to guide you.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {[
            { title: "Expert Guidance", desc: "Our professionals help you choose the perfect match." },
            { title: "Best Pricing", desc: "We offer transparent and competitive market prices." },
            { title: "Quality Assured", desc: "Every vehicle undergoes a 200-point safety check." }
          ].map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-blue-600">
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-500">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;