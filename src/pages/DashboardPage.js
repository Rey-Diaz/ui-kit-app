import React from 'react';
import LineChartComponent from '../components/LineChartComponent';
import TableComponent from '../components/TableComponent';

const DashboardPage = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <h2>Sales Data</h2>
        <LineChartComponent />
      </div>
      <div>
        <h2>Product Table</h2>
        <TableComponent />
      </div>
    </div>
  );
};

export default DashboardPage;
