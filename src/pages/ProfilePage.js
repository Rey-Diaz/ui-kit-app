import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import ViewProfile from '../components/ViewProfile';
import EditProfile from '../components/EditProfile';
import Footer from '../components/Footer';

function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    phoneNumber: '123-456-7890',
    // ... other fields if needed
  });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSubmit = (updatedData) => {
    setUserData(updatedData);
    setIsEditing(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="container mx-auto mt-10 p-4 md:w-1/2 bg-white shadow-md rounded-lg flex-grow">
        {isEditing ? (
          <EditProfile data={userData} setData={setUserData} onSubmit={handleSubmit} />
        ) : (
          <ViewProfile data={userData} onEdit={handleEditClick} />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default ProfilePage;