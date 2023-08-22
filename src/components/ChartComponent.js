import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import { ProductService } from '../services/ProductService';

export const ChartComponent = () => {
    const [products, setProducts] = useState([]);
    const productService = new ProductService();

    useEffect(() => {
        productService.getProductsSmall().then(data => setProducts(data));
    }, []);

    const data = {
        labels: products.map(product => product.name),
        datasets: [
            {
                label: 'Sales',
                data: products.map(product => product.sales),
                fill: false,
                borderColor: '#4bc0c0'
            }
        ]
    };

    return <Chart type="line" data={data} />;
}
