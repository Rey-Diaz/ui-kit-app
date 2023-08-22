import React from 'react';
import config from '../config.json';
import { ChartComponent } from '../components/ChartComponent';
import { TableComponent } from '../components/TableComponent';

const DashboardPage = () => {
    const products = config.dummyData.products;

    return (
        <div className="container mx-auto mt-10">
            <h2>Dashboard</h2>
            <div>
                <ChartComponent products={products} />
                <TableComponent products={products} />
            </div>
        </div>
    );
}

export default DashboardPage;
