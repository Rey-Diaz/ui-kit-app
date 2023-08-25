import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed top-0 left-0 h-full w-64 bg-gray-800 text-white p-6 z-50">
      <button onClick={onClose}>✕</button>
      <ul>
        <li><Link to="/" onClick={onClose}>Home</Link></li>
        <li><Link to="/signup" onClick={onClose}>Sign Up</Link></li>
        <li><Link to="/profile" onClick={onClose}>Profile</Link></li>
        <li><Link to="/Dashboard" onClick={onClose}>Dashboard</Link></li>
        <li><Link to="/chat" onClick={onClose}>Chat</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
