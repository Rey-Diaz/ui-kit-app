import React from 'react';

function TermsAndConditionsCard({ onClose }) {
  return (
    <div className="max-w-md mx-auto bg-white p-4 rounded shadow-md">
      <h2 className="text-xl font-semibold mb-4">Website Terms and Conditions Agreement</h2>
      <p>Last Updated: [Date]</p>

      <p className="mt-4">
        1. <strong>ACCEPTANCE OF TERMS</strong>
        <br />
        These Terms and Conditions ("Agreement") govern your use of [Website Name] ("Website"), owned and operated by [Your Company Name] ("Company," "we," "us," or "our"). By accessing or using the Website, you agree to be bound by these terms. If you do not agree with these terms, please refrain from using the Website.
      </p>

      <p className="mt-4">
        2. <strong>USER ACCOUNTS</strong>
        <br />
        Registration: To access certain features of the Website, you may need to create an account. You agree to provide accurate, complete, and up-to-date information during the registration process.
        <br />
        Account Security: You are responsible for maintaining the security of your account credentials. You agree not to share your password and to notify us immediately of any unauthorized access to or use of your account.
      </p>

      {/* ... Other sections ... */}

      <p className="mt-4">
        10. <strong>CONTACT</strong>
        <br />
        If you have any questions about this Agreement, please contact us at [Contact Email].
        <br />
        By using the Website, you acknowledge that you have read, understood, and agreed to these terms and conditions.
        <br />
        [Your Company Name]
        <br />
        [Your Company Address]
        <br />
        [Website URL]
      </p>

      <button
        onClick={onClose}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
      >
        Close
      </button>
    </div>
  );
}

export default TermsAndConditionsCard;
