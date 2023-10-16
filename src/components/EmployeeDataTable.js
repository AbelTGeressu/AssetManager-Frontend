import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";

const columns = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "GlobalId", headerName: "Global ID", width: 150 },
  { field: "FirstName", headerName: "First Name", width: 150 },
  { field: "LastName", headerName: "Last Name", width: 150 },
  { field: "Email", headerName: "Email", width: 200 },
  { field: "Department", headerName: "Department", width: 150 },
  { field: "Position", headerName: "Position", width: 150 },
];

const EmployeeDataTable = () => {
  const [tableData, setTableData] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3001/employees");
      setTableData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleAdd = async (employee) => {
    try {
      await axios.post("http://localhost:3001/employees", employee);
      fetchData();
    } catch (error) {
      console.error("Error adding employee:", error);
    }
  };

  const handleUpdate = async (id, updatedData) => {
    try {
      await axios.put(`http://localhost:3001/employees/${id}`, updatedData);
      fetchData();
    } catch (error) {
      console.error("Error updating employee:", error);
    }
  };

  const handleDelete = async () => {
    try {
      for (const id of selectedRows) {
        await axios.delete(`http://localhost:3001/employees/${id}`);
      }
      setSelectedRows([]);
      fetchData();
    } catch (error) {
      console.error("Error deleting employee:", error);
    }
  };

  return (
    <div>
      <div>
        {/* You can add input fields and a submit button to add a new employee */}
        <button onClick={() => handleAdd(/* Pass new employee data here */)}>
          Add Employee
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
          getRowId={(row) => row.EmployeeId}
        />
      </div>
    </div>
  );
};

export default EmployeeDataTable;
