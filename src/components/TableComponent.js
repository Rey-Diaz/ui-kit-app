import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import config from '../config.json';

const TableComponent = () => {
  const products = config.dummyData.products;

  return (
    <DataTable value={products}>
      <Column field="name" header="Name"></Column>
      <Column field="sales" header="Sales"></Column>
      <Column field="inventory" header="Inventory"></Column>
    </DataTable>
  );
};

export default TableComponent;
