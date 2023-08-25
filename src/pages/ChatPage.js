import React from 'react';
import BotpressChatFrame from '../components/BotpressChatFrame';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function ChatPage() {
  return (
    <div>
      <Navbar />  {/* Navbar component added here */}
    <div className="h-screen w-screen flex items-center justify-center bg-gray-100 p-10">
      <div className="bg-white w-full max-w-2xl h-4/5 p-6 rounded shadow-md">
        <BotpressChatFrame />
      </div>
    </div>
    <Footer />
    </div>
    
  );
}

export default ChatPage;
