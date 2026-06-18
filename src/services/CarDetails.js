import React from "react";
import { useParams } from "react-router-dom";

const cars = [
  { id: "1", name: "Tesla Model S", price: "$100", description: "Electric luxury sedan." },
  { id: "2", name: "BMW X5", price: "$80", description: "Premium SUV with comfort." },
  { id: "3", name: "Audi A4", price: "$70", description: "Stylish sedan with performance." },
];

const CarDetails = () => {
  const { id } = useParams();
  const car = cars.find((c) => c.id === id);

  if (!car) return <p>Car not found</p>;

  return (
    <div>
      <h1>{car.name}</h1>
      <p>Price: {car.price}</p>
      <p>{car.description}</p>
    </div>
  );
};

export default CarDetails;
