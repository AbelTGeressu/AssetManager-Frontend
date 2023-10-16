import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';

const API_URL = 'http://localhost:3001/Contracts';

const ContractDataGrid = () => {
  const [contracts, setContracts] = useState([]);

  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'provider', headerName: 'Provider', width: 200 },
    { field: 'phoneNumber', headerName: 'Phone Number', width: 200 },
    { field: "Pinnumber", headerName: "PIN Number", width: 150 },
    { field: "Puknumber", headerName: "PUK Number", width: 150 },
    { field: "ContractStartDate", headerName: "Start Date", width: 150 },
    { field: "ContractEndDate", headerName: "End Date", width: 150 },
    { field: "MonthlyCost", headerName: "Monthly Cost", width: 150 },
    { field: "DataLimit", headerName: "Data Limit", width: 150 },
    // Add more columns as needed
  ];

  useEffect(() => {
    axios.get(API_URL)
      .then((response) => {
        setContracts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching contracts:', error);
      });
  }, []);

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={contracts}
        columns={columns}
        pageSize={10}
        checkboxSelection
      />
    </div>
  );
};

export default ContractDataGrid;
