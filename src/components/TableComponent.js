// TableComponent.js
import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import config from '../config.json';

const TableComponent = () => {
    const data = config.dummyData.dataPoints;

    return (
        <div className="data-table">
            <h2>Data Table</h2>
            <DataTable value={data}>
                <Column field="time" header="Time" />
                <Column field="weight" header="Weight" />
            </DataTable>
        </div>
    );
};

export default TableComponent;
