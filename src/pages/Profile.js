import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Profile = () => {
  const { user } = useContext(AppContext);

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6">
      <div className="w-full max-w-lg bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl p-8 backdrop-blur-lg">
        
        {/* Profile Header */}
        <div className="flex flex-col items-center mb-8">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative w-32 h-32 bg-slate-800 rounded-full flex items-center justify-center text-blue-400 text-5xl font-bold border-4 border-slate-900">
              {user ? user.name.charAt(0).toUpperCase() : "U"}
            </div>
          </div>
          <h1 className="text-3xl font-black text-white mt-6">My Profile</h1>
          <p className="text-slate-400 mt-2">Manage your account details</p>
        </div>

        {/* Profile Details */}
        {user ? (
          <div className="space-y-4">
            <div className="group bg-slate-800 hover:bg-slate-700 p-5 rounded-2xl transition-all border border-slate-700">
              <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Full Name</p>
              <p className="text-xl font-bold text-white">{user.name}</p>
            </div>
            
            <div className="group bg-slate-800 hover:bg-slate-700 p-5 rounded-2xl transition-all border border-slate-700">
              <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Email Address</p>
              <p className="text-xl font-bold text-white">{user.email}</p>
            </div>

            <button className="w-full py-4 mt-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-xl shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all transform hover:scale-[1.02]">
              Edit Profile
            </button>
            <button className="w-full py-4 mt-2 bg-transparent border border-slate-700 text-slate-400 hover:text-white hover:border-slate-600 font-bold rounded-xl transition">
              Log Out
            </button>
          </div>
        ) : (
          <div className="text-center p-8">
            <p className="text-slate-500 mb-6">No user information found.</p>
            <button className="text-blue-500 font-bold hover:underline">Login to view profile</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;