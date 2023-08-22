// LineChartComponent.js
import React from 'react';
import { Chart } from 'primereact/chart';
import config from '../config.json';

const LineChartComponent = () => {
    const fetchData = () => {
        // Use data points from config.dummyData.dataPoints
        const dataPoints = config.dummyData.dataPoints;

        const labels = dataPoints.map(dataPoint => dataPoint.time);
        const weights = dataPoints.map(dataPoint => dataPoint.weight);

        return {
            labels: labels,
            datasets: [
                {
                    label: 'Weight',
                    data: weights,
                    borderColor: '#42A5F5',
                    fill: false
                }
            ]
        };
    };

    const data = fetchData();

    return (
        <div className="line-chart">
            <h2>Weight Chart</h2>
            <Chart type="line" data={data} />
        </div>
    );
};

export default LineChartComponent;
