import React from 'react';
import LineChartComponent from '../components/LineChartComponent';
import TableComponent from '../components/TableComponent';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const DashboardPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow flex justify-center items-center md:flex">
        <div className="w-full p-4 border">
          <h1 className="text-3xl font-bold mb-4 text-center">Dashboard</h1>
          <div className="border p-4 mb-4">
            <h2 className="text-xl font-semibold mb-2">Data Visualization</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-gray-100 p-6 rounded-lg shadow-md md:col-span-3">
                <h3 className="text-lg font-semibold mb-2">Sales Data</h3>
                <LineChartComponent />
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-md md:col-span-1">
                <h3 className="text-lg font-semibold mb-2">Product Table</h3>
                <TableComponent />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DashboardPage;
