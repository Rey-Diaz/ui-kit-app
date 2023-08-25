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
            <DataTable value={data} rowStyle={{ marginBottom: '10px' }}>
                <Column field="time" header="Time" style={{borderRight: '1px solid #d1d1d1', paddingRight: '15px', paddingLeft: '15px'}} bodyStyle={{borderRight: '1px solid #d1d1d1', paddingRight: '15px', paddingLeft: '15px'}} />
                <Column field="weight" header="Weight" style={{paddingRight: '15px', paddingLeft: '15px'}} bodyStyle={{paddingRight: '15px', paddingLeft: '15px'}} />
            </DataTable>
        </div>
    );
};

export default TableComponent;
