import React from 'react';
import LineChartComponent from '../components/LineChartComponent';
import TableComponent from '../components/TableComponent';

const DashboardPage = () => {
  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <div className="border p-4 mb-4">
        <h2 className="text-xl font-semibold mb-2">Sales Data</h2>
        <LineChartComponent />
      </div>
      <div className="border p-4">
        <h2 className="text-xl font-semibold mb-2">Product Table</h2>
        <TableComponent />
      </div>
    </div>
  );
};

export default DashboardPage;
