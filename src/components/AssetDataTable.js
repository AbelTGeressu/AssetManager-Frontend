import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";


const AssetDataTable = () => {
  const [tableData, setTableData] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // Added this line
  const [displayedData, setDisplayedData] = useState([]); // Added this line

  const columns = [
    { field: "AssetId", headerName: "Asset ID", width: 150 },
    { field: "Brand", headerName: "Brand", width: 150 },
    { field: "Model", headerName: "Model", width: 150 },
    { field: "SerialNumber", headerName: "Serial Number", width: 200 },
    { field: "Imeinumber1", headerName: "IMEI Number 1", width: 200 },
    { field: "Imeinumber2", headerName: "IMEI Number 2", width: 200 },
    { field: "Accessories", headerName: "Accessories", width: 250 },
    { field: "AssetStatus", headerName: "Asset Status", width: 150 },
    { field: "PurchaseDate", headerName: "Purchase Date", width: 150 },
  ];

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => { // Moved this hook to the top level
    setDisplayedData(
      tableData.filter((row) =>
        Object.values(row)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, tableData]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3001/Assets");
      const data = response.data;

      if (Array.isArray(data)) {
        const rowsWithIds = data.map((row, index) => ({ ...row, id: index + 1 }));
        setTableData(rowsWithIds);
      } else {
        console.error("Data is not an array:", data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleAdd = async () => {
    try {
      const newAsset = {
        AssetId: "NewAsset123",
        Brand: "Brand X",
        // ... other fields
      };
      await axios.post("http://localhost:3001/Assets", newAsset);
      fetchData();
    } catch (error) {
      console.error("Error adding asset:", error);
    }
  };

  const handleUpdate = async () => {
    try {
      const updatedData = selectedRows.map(row => ({
        ...row,
        Brand: "Updated Brand", // Example of updating the brand
        // ... update other fields as needed
      }));

      const updatePromises = updatedData.map(row =>
        axios.put(`http://localhost:3001/Assets/${row.id}`, row)
      );

      await Promise.all(updatePromises);
      fetchData();
    } catch (error) {
      console.error("Error updating asset:", error);
    }
  };


  const handleDelete = async () => {
    // Implement logic to delete selected rows
    try {
      // Iterate through selectedRows and delete each row
      for (const row of selectedRows) {
        await axios.delete(`http://localhost:3001/Assets/${row.id}`);
      }
      setSelectedRows([]);
      fetchData();
    } catch (error) {
      console.error("Error deleting asset:", error);
    }
  };


    
    return (
      <div>
        <div>
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search"
          />
          <button onClick={handleAdd}>Add Asset</button>
          <button onClick={handleUpdate}>Update Selected</button>
          <button onClick={handleDelete}>Delete Selected</button>
        </div>
        <div style={{ height: 500, width: "100%" }}>
          <DataGrid
            rows={displayedData}
            columns={columns}
            pageSize={10}
            checkboxSelection
            onSelectionChange={(newSelection) => {
              setSelectedRows(newSelection.rows);
            }}
          />
        </div>
      </div>
    );
  };

export default AssetDataTable;
