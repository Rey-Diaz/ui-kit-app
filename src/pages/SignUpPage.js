import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import SignupForm from '../components/SignupForm';
import TermsAndConditionsCard from '../components/TermsAndConditionsCard';
import Footer from '../components/Footer';

function SignUpPage() {
  const initialFormData = {
    name: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    termsAccepted: false,
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [showTermsModal, setShowTermsModal] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.email.trim()) newErrors.email = 'Email is required.';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid.';
    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = 'Phone number is required.';
    if (!formData.password.trim()) newErrors.password = 'Password is required.';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match.';
    if (!formData.termsAccepted) newErrors.termsAccepted = 'You must accept the terms and conditions to sign up.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Handle form submission logic here
    }
  };

  const handleShowTerms = () => {
    setShowTermsModal(true);
  };

  const handleCloseTermsModal = () => {
    setShowTermsModal(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="container mx-auto mt-10">
        <SignupForm
          formData={formData}
          errors={errors}
          onChange={handleChange}
          onSubmit={handleSubmit}
          onShowTerms={handleShowTerms}
        />
      </div>
      {showTermsModal && (
        <div className="fixed inset-0 flex items-center justify-center z-10">
          <div className="fixed inset-0 bg-gray-800 opacity-50"></div>
          <div className="bg-white p-6 rounded shadow-md z-20 max-w-md w-full">
            <TermsAndConditionsCard onClose={handleCloseTermsModal} />
          </div>
        </div>
      )}
      <div className="flex-grow"></div> {/* Spacer */}
      <Footer />
    </div>
  );
}

export default SignUpPage;