import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar'; // Assuming you have the Sidebar component in the same directory

function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="bg-blue-500 p-4 text-white shadow-md flex justify-between items-center">
      <button onClick={() => setSidebarOpen(!sidebarOpen)}>
        ☰
      </button>

      <div className="space-x-4">
        <Link to="/" className="hover:text-gray-300 font-semibold text-lg">Home</Link>
        <Link to="/signup" className="hover:text-gray-300 font-semibold text-lg">Sign Up</Link>
        <Link to="/profile" className="hover:text-gray-300 font-semibold text-lg">Profile</Link>
        <Link to="/Dashboard" className="hover:text-gray-300 font-semibold text-lg">Dashboard</Link>
        <Link to="/chat" className="hover:text-gray-300 font-semibold text-lg">Chat</Link>
      </div>

      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </div>
  );
}

export default Navbar;
