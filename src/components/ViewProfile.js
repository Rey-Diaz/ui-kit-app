function ViewProfile({ data, onEdit }) {
    return (
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold mb-4">Your Profile</h2>
        
        {/* Name Display */}
        <div className="flex items-center justify-between border-b py-2">
          <span className="font-medium text-lg">Name:</span>
          <span className="text-lg">{data.name}</span>
        </div>
  
        {/* Email Display */}
        <div className="flex items-center justify-between border-b py-2">
          <span className="font-medium text-lg">Email:</span>
          <span className="text-lg">{data.email}</span>
        </div>
  
        {/* Phone Number Display */}
        <div className="flex items-center justify-between border-b py-2">
          <span className="font-medium text-lg">Phone Number:</span>
          <span className="text-lg">{data.phoneNumber}</span>
        </div>
  
        {/* Edit Button */}
        <button onClick={onEdit} className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Edit Profile
        </button>
      </div>
    );
  }
  
  export default ViewProfile;
  