import React from 'react';
import Navbar from '../components/Navbar';
import cardImage1 from '../Assets/card1.jpg';
import cardImage2 from '../Assets/card2.jpg';
import cardImage3 from '../Assets/card3.jpg';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="container mx-auto mt-10 text-center">
        <h1 className="text-4xl font-bold">Welcome to Our App</h1>
        <p className="mt-4 text-xl">
          This is the home page. Navigate through the sidebar to explore other pages.
        </p>
      </div>
      <div className="flex justify-center space-x-6 mt-10">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-md hover:scale-105 transition-transform">
          <h2 className="text-xl font-semibold mb-2">Card 1</h2>
          <img src={cardImage1} alt="Card 1" className="w-full mb-4" />
          <p>
            This is the content of Card 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-md hover:scale-105 transition-transform">
          <h2 className="text-xl font-semibold mb-2">Card 2</h2>
          <img src={cardImage2} alt="Card 2" className="w-full mb-4" />
          <p>
            This is the content of Card 2. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-md hover:scale-105 transition-transform">
          <h2 className="text-xl font-semibold mb-2">Card 3</h2>
          <img src={cardImage3} alt="Card 3" className="w-full mb-4" />
          <p>
            This is the content of Card 3. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
        </div>
      </div>
      <div className="flex-grow p-8 bg-gray-100">
        <div className="max-w-4xl mx-auto py-8">
          <h2 className="text-3xl font-semibold mb-4">Welcome to Our App</h2>
          <p className="text-lg mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula, nisi non faucibus rutrum, erat odio varius urna, sit amet blandit purus lectus ut velit.
          </p>
          <p className="text-lg">
            Vivamus sit amet erat nunc. Donec ut ultrices orci, at dignissim libero. Nullam vitae ligula sapien.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
