import React, { useState } from "react";

const Home = () => {
  const [selectedCar, setSelectedCar] = useState(null);

  const cars = [
    { 
      name: "Luxury Sedan", 
      price: "₹45 Lakhs", 
      desc: "Experience ultimate comfort and sophisticated design with our premium sedan.", 
      img: "https://images.unsplash.com/photo-1563720360172-67b8f3d0222c?q=80&w=500" 
    },
    { 
      name: "Sport Coupe", 
      price: "₹85 Lakhs", 
      desc: "Feel the adrenaline with this high-performance sports car built for speed.", 
      img: "https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=500" 
    },
    { 
      name: "Electric SUV", 
      price: "₹60 Lakhs", 
      desc: "Sustainable and powerful, the future of driving with advanced electric technology.", 
      img: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=500" 
    },
  ];

  return (
    <div className="min-h-screen bg-white p-10">
      <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">Featured Inventory</h2>
      
      <div className="grid md:grid-cols-3 gap-8">
        {cars.map((car, index) => (
          <div key={index} className="border rounded-2xl p-4 shadow-lg">
            <img src={car.img} alt={car.name} className="w-full h-64 object-cover rounded-xl mb-4" />
            <h3 className="text-xl font-bold text-blue-900">{car.name}</h3>
            <p className="text-blue-600 font-semibold mb-4">{car.price}</p>
            
            <button 
              onClick={() => setSelectedCar(car)}
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              View Details
            </button>
          </div>
        ))}
      </div>

      {/* Modal - Details popup */}
      {selectedCar && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white p-8 rounded-2xl max-w-md w-full relative">
            <button 
              onClick={() => setSelectedCar(null)} 
              className="absolute top-4 right-4 text-gray-500 font-bold text-xl"
            >✕</button>
            <img src={selectedCar.img} alt={selectedCar.name} className="w-full h-48 object-cover rounded-xl mb-4" />
            <h3 className="text-2xl font-bold">{selectedCar.name}</h3>
            <p className="text-blue-600 font-semibold text-lg">{selectedCar.price}</p>
            <p className="text-gray-600 mt-2">{selectedCar.desc}</p>
            <button className="mt-6 w-full bg-green-600 text-white py-2 rounded-lg font-bold">
              Book Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;