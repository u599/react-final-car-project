import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-blue-900 mb-6 text-center">Contact Us</h1>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input 
            name="name" 
            placeholder="Your Name" 
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
            onChange={handleChange} 
            required 
          />
          
          <input 
            name="email" 
            type="email"
            placeholder="Your Email" 
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
            onChange={handleChange} 
            required 
          />
          
          <textarea 
            name="message" 
            placeholder="Your Message" 
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none h-32"
            onChange={handleChange} 
            required
          ></textarea>
          
          <button 
            type="submit" 
            className="w-full p-3 bg-blue-900 text-white rounded-lg font-bold hover:bg-blue-800 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;