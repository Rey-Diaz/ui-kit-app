import React from 'react';
import { Chart } from 'primereact/chart';
import config from '../config.json';

const LineChartComponent = () => {
  const data = {
    labels: config.dummyData.products.map(product => product.name),
    datasets: [
      {
        label: 'Sales',
        data: config.dummyData.products.map(product => product.sales),
        fill: false,
        borderColor: '#4bc0c0'
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false
  };

  return <Chart type="line" data={data} options={options} />;
};

export default LineChartComponent;
