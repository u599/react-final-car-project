import React from "react";

const CarList = () => {
  const cars = [
    { name: "Tesla Model S", price: "₹80 Lakhs", img: "https://images.unsplash.com/photo-1617704548623-340376560364?w=500", type: "Electric" },
    { name: "Mercedes Benz", price: "₹65 Lakhs", img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=500", type: "Luxury" },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-10">
      {cars.map((car, index) => (
        <div key={index} className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition">
          <img src={car.img} alt={car.name} className="w-full h-72 object-cover" />
          <div className="p-8">
            <h3 className="text-3xl font-bold mb-2">{car.name}</h3>
            <p className="text-blue-600 font-semibold text-xl mb-6">{car.price}</p>
            <button className="w-full py-4 rounded-2xl font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:shadow-[0_0_20px_rgba(79,70,229,0.6)] transition-all">
              Book Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default CarList;