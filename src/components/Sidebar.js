import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>Hamburger Icon</button>
      {isOpen && (
        <div className="sidebar">
          <Link to="/">Home</Link>
          <Link to="/signup">Sign Up</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/chat">Chat</Link>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
