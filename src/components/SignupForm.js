import React from 'react';

function SignupForm({ formData, errors, onChange, onSubmit, onShowTerms }) {
  return (
    <form onSubmit={onSubmit} className="bg-white p-6 rounded shadow-md">
      {/* Name block */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={onChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="John Doe"
        />
        {errors.name && <p className="text-red-500 text-xs italic">{errors.name}</p>}
      </div>

      {/* Email block */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={onChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="johndoe@example.com"
        />
        {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
      </div>

      {/* Phone Number block */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber">
          Phone Number
        </label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={onChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="123-456-7890"
        />
        {errors.phoneNumber && <p className="text-red-500 text-xs italic">{errors.phoneNumber}</p>}
      </div>

      {/* Password block */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={onChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter your password"
        />
        {errors.password && <p className="text-red-500 text-xs italic">{errors.password}</p>}
      </div>

      {/* Confirm Password block */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
          Confirm Password
        </label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={onChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Confirm your password"
        />
        {errors.confirmPassword && <p className="text-red-500 text-xs italic">{errors.confirmPassword}</p>}
      </div>


        {/* Accept Terms and Conditions */}
      <div className="mb-4">
        <label className="text-gray-700 text-sm font-bold mb-2" htmlFor="terms">
          Accept Terms and Conditions
        </label>
      </div>
      
      {/* Show Terms and Conditions Button */}
      <div className="flex items-center mb-4">
        <button
          type="button"
          onClick={onShowTerms}
          className="text-blue-500 hover:underline focus:outline-none"
        >
          Show Terms and Conditions
        </button>
        <input
          type="checkbox"
          id="showTerms"
          name="showTerms"
          checked={formData.showTerms}
          onChange={onChange}
          className="ml-2"
        />
      </div>
      
      {/* Sign Up button */}
      <div className="flex items-center justify-between mt-4">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Sign Up
        </button>
      </div>
    </form>
  );
}

export default SignupForm;