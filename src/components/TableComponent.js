import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from '../services/ProductService';

export const TableComponent = () => {
    const [products, setProducts] = useState([]);
    const productService = new ProductService();

    useEffect(() => {
        productService.getProductsSmall().then(data => setProducts(data));
    }, []);

    return (
        <DataTable value={products}>
            <Column field="name" header="Name"></Column>
            <Column field="sales" header="Sales"></Column>
            <Column field="inventory" header="Inventory"></Column>
        </DataTable>
    );
}
