import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";

const columns = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "Provider", headerName: "Provider", width: 150 },
  { field: "PhoneNumber", headerName: "Phone Number", width: 150 },
  { field: "Pinnumber", headerName: "PIN Number", width: 150 },
  { field: "Puknumber", headerName: "PUK Number", width: 150 },
  { field: "ContractStartDate", headerName: "Start Date", width: 150 },
  { field: "ContractEndDate", headerName: "End Date", width: 150 },
  { field: "MonthlyCost", headerName: "Monthly Cost", width: 150 },
  { field: "DataLimit", headerName: "Data Limit", width: 150 },
];

const ContractDataTable = () => {
  const [tableData, setTableData] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3001/contracts");
      const data = response.data;

      if (Array.isArray(data)) {
        const rowsWithIds = data.map((row, index) => ({
          ...row,
          id: row.ContractId || index // Ensure each row has a unique id
        }));
        setTableData(rowsWithIds);
      } else {
        console.error("Data is not an array:", data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleAdd = async (contract) => {
    try {
      await axios.post("http://localhost:3001/contracts", contract);
      fetchData();
    } catch (error) {
      console.error("Error adding contract:", error);
    }
  };

  const handleUpdate = async (id, updatedData) => {
    try {
      await axios.put(`http://localhost:3001/contracts/${id}`, updatedData);
      fetchData();
    } catch (error) {
      console.error("Error updating contract:", error);
    }
  };

  const handleDelete = async () => {
    try {
      for (const id of selectedRows) {
        await axios.delete(`http://localhost:3001/contracts/${id}`);
      }
      setSelectedRows([]);
      fetchData();
    } catch (error) {
      console.error("Error deleting contract:", error);
    }
  };

  return (
    <div>
      <div>
        {/* You can add input fields and a submit button to add a new contract */}
        <button onClick={() => handleAdd(/* Pass new contract data here */)}>
          Add Contract
        </button>
        <button onClick={() => handleUpdate(/* Pass id and updated data here */)}>
          Update Selected
        </button>
        <button onClick={handleDelete}>Delete Selected</button>
      </div>
      <div style={{ height: 500, width: "100%" }}>
        <DataGrid
          rows={tableData}
          columns={columns}
          pageSize={10}
          checkboxSelection
          onSelectionChange={(newSelection) => {
            setSelectedRows(newSelection.rowIds);
          }}
        />
      </div>
    </div>
  );
};

export default ContractDataTable;
